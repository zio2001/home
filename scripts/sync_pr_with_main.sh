#!/usr/bin/env bash
set -euo pipefail

# One-command PR sync + conflict resolution helper.
# Usage:
#   scripts/sync_pr_with_main.sh [ours|theirs] [base_branch]
# Example:
#   scripts/sync_pr_with_main.sh ours main

STRATEGY="${1:-ours}"
BASE_BRANCH="${2:-main}"

if [[ "$STRATEGY" != "ours" && "$STRATEGY" != "theirs" ]]; then
  echo "Usage: $0 [ours|theirs] [base_branch]"
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not in a git repository."
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Remote 'origin' is not configured."
  echo "Run: git remote add origin <repo-url>"
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Working tree is not clean. Commit or stash first."
  exit 1
fi

echo "[1/4] Fetch latest from origin..."
git fetch origin

echo "[2/4] Merge origin/$BASE_BRANCH into current branch..."
set +e
git merge --no-ff -X "$STRATEGY" "origin/$BASE_BRANCH"
MERGE_EXIT=$?
set -e

if [[ $MERGE_EXIT -ne 0 ]]; then
  echo "Merge conflict still detected. Applying '$STRATEGY' strategy for known files..."
  scripts/resolve_conflicts.sh "$STRATEGY"

  if git diff --name-only --diff-filter=U | grep -q .; then
    echo "Unresolved files remain after auto-resolution:"
    git diff --name-only --diff-filter=U
    echo "Resolve them manually, then run: git add <files> && git commit"
    exit 2
  fi

  echo "[3/4] Creating merge commit..."
  git commit -m "Resolve merge conflicts with origin/$BASE_BRANCH ($STRATEGY strategy)"
else
  echo "No conflicts. Merge completed automatically."
fi

echo "[4/4] Done. Push your branch:"
echo "git push"

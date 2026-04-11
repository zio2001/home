#!/usr/bin/env bash
set -euo pipefail

# Fundamental fix for endlessly conflicting PR branches.
# Creates a fresh branch from origin/main and squashes current branch changes into 1 commit.
# Usage:
#   scripts/recreate_pr_branch.sh <new_branch_name> [base_branch]

NEW_BRANCH="${1:-}"
BASE_BRANCH="${2:-main}"

if [[ -z "$NEW_BRANCH" ]]; then
  echo "Usage: $0 <new_branch_name> [base_branch]"
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Remote 'origin' is not configured."
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Working tree is not clean. Commit or stash first."
  exit 1
fi

SOURCE_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$SOURCE_BRANCH" == "$NEW_BRANCH" ]]; then
  echo "new_branch_name must be different from current branch."
  exit 1
fi

echo "[1/6] Fetching origin..."
git fetch origin

echo "[2/6] Creating fresh branch $NEW_BRANCH from origin/$BASE_BRANCH ..."
git checkout -B "$NEW_BRANCH" "origin/$BASE_BRANCH"

echo "[3/6] Squash-merging changes from $SOURCE_BRANCH ..."
set +e
git merge --squash "$SOURCE_BRANCH"
SQ_EXIT=$?
set -e

if [[ $SQ_EXIT -ne 0 ]]; then
  echo "Squash merge conflict occurred."
  echo "Resolve conflicts, then run: git add <files> && git commit"
  exit 2
fi

echo "[4/6] Creating single clean commit..."
git commit -m "Recreate PR branch from origin/$BASE_BRANCH with squashed changes"

echo "[5/6] Pushing new branch..."
git push -u origin "$NEW_BRANCH"

echo "[6/6] Done. Open a NEW PR from $NEW_BRANCH -> $BASE_BRANCH"
echo "Tip: Close old conflict-heavy PR to stop repeated conflict loops."

#!/usr/bin/env bash
set -euo pipefail

# Rebase current PR branch on top of origin/main and push.
# Usage:
#   scripts/rebase_pr_on_main.sh [base_branch]

BASE_BRANCH="${1:-main}"
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$CURRENT_BRANCH" == "HEAD" ]]; then
  echo "Detached HEAD. Checkout your PR branch first."
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

echo "[1/4] Fetching origin..."
git fetch origin

echo "[2/4] Rebasing $CURRENT_BRANCH onto origin/$BASE_BRANCH ..."
set +e
git rebase -X ours "origin/$BASE_BRANCH"
REB_EXIT=$?
set -e

if [[ $REB_EXIT -ne 0 ]]; then
  echo "Rebase conflict occurred."
  echo "Run: git rebase --abort"
  echo "Then run: scripts/sync_pr_with_main.sh ours $BASE_BRANCH"
  exit 2
fi

echo "[3/4] Rebase success."
echo "[4/4] Force pushing updated branch..."
git push --force-with-lease origin "$CURRENT_BRANCH"

echo "Done. Refresh GitHub PR page."

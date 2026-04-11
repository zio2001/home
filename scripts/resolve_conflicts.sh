#!/usr/bin/env bash
set -euo pipefail

# Resolve known recurring conflicts for this project.
# Usage:
#   scripts/resolve_conflicts.sh ours
#   scripts/resolve_conflicts.sh theirs

STRATEGY="${1:-ours}"
if [[ "$STRATEGY" != "ours" && "$STRATEGY" != "theirs" ]]; then
  echo "Usage: $0 [ours|theirs]"
  exit 1
fi

FILES=(
  "README.md"
  "app/about/page.tsx"
  "app/career/page.tsx"
  "app/contact/page.tsx"
  "app/globals.css"
  "app/layout.tsx"
  "app/page.tsx"
  "app/programs/page.tsx"
  "app/services/page.tsx"
  "components/Footer.tsx"
  "components/HeroSection.tsx"
  "components/NavBar.tsx"
  "lib/siteData.ts"
  "package.json"
  "public/profile-junho-choi.pdf"
)

for f in "${FILES[@]}"; do
  if git ls-files --error-unmatch "$f" >/dev/null 2>&1; then
    if git status --porcelain "$f" | grep -q "UU\|AA\|DD\|DU\|UD\|UA\|AU"; then
      if [[ "$STRATEGY" == "ours" ]]; then
        git checkout --ours "$f"
      else
        git checkout --theirs "$f"
      fi
      git add "$f"
      echo "resolved: $f ($STRATEGY)"
    fi
  fi
done

if git diff --name-only --diff-filter=U | grep -q .; then
  echo "Still unresolved conflicts remain:"
  git diff --name-only --diff-filter=U
  exit 2
fi

echo "All listed conflicts resolved with '$STRATEGY'."
echo "Next steps:"
echo "  git commit -m 'Resolve merge conflicts ($STRATEGY strategy)'"
echo "  git push"

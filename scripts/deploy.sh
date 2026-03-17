#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

COMMIT_MESSAGE="${1:-Deploy chatbot updates}"

echo "Validando TypeScript..."
npx tsc --noEmit

echo "Generando build de produccion..."
npm run build

echo "Preparando commit..."
git add -A

if ! git diff --cached --quiet; then
  git commit -m "$COMMIT_MESSAGE"
else
  echo "No hay cambios nuevos para commitear."
fi

echo "Publicando en origin/main..."
git push origin main

echo "Listo. Netlify debe desplegar desde origin/main."

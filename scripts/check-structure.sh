#!/usr/bin/env bash
set -e
CONFIG="docs/tests/structure-check.yml"
entries=$(grep -A100 '^entries:' "$CONFIG" | tail -n +2 | sed 's/#.*//' | grep '-' | sed 's/-\s*//' | tr -d '"')
missing=0
for path in $entries; do
  if [ ! -e "$path" ]; then
    echo "Missing path: $path"
    missing=1
  fi
done
if [ "$missing" -eq 1 ]; then
  echo "Structure check failed." >&2
  exit 1
else
  echo "All paths exist."
fi

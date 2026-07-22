#!/bin/bash

echo "## Projektstruktur" > STRUCTURE.md
echo '```text' >> STRUCTURE.md

find . \
  -maxdepth 3 \
  -not -path "./node_modules/*" \
  -not -path "./dist/*" \
  -not -path "./.git/*" \
  >> STRUCTURE.md

echo '```' >> STRUCTURE.md
echo "" >> STRUCTURE.md
echo "" >> STRUCTURE.md
echo "🕒 Last update: $(date '+%Y-%m-%d %H:%M:%S')" >> STRUCTURE.md
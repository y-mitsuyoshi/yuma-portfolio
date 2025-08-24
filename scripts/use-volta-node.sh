#!/usr/bin/env bash
# Project-local helper: run a command with Volta's bin prepended so node@22 is used.
# Usage: ./scripts/use-volta-node.sh <command...>
export PATH="$HOME/.volta/bin:$PATH"

if [ $# -eq 0 ]; then
  echo "Volta path prepended. Current node and npm:"
  node -v && npm -v
  echo "To run a command with the pinned node, use: ./scripts/use-volta-node.sh <command...>"
  exit 0
fi

exec "$@"

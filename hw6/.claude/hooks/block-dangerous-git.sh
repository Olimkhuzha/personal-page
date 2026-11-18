#!/bin/bash
# PreToolUse guardrail for the Bash and PowerShell tools.
# Based on mattpocock's git-guardrails-claude-code skill, changed to FAIL CLOSED:
# if jq is missing, the input can't be read, or anything goes wrong, the
# command is blocked (exit 2). Only exit 0 lets a command through.

block() {
  echo "BLOCKED by git guardrail: $1. The user has prevented you from doing this." >&2
  exit 2
}
trap 'block "guardrail script error"' ERR

command -v jq >/dev/null 2>&1 || block "jq is not installed, so the command can't be checked"

INPUT=$(cat) || block "could not read hook input"
COMMAND=$(printf '%s' "$INPUT" | jq -er '.tool_input.command | strings') \
  || block "could not read the command from hook input"
COMMAND=$(printf '%s' "$COMMAND" | tr -d '\r')

# "git" (or git.exe) as a word, then anything except a command separator,
# then the subcommand. This also catches "git -C dir push" etc.
G='(^|[^[:alnum:]_./-])git(\.exe)?[[:space:]]+([^;&|]*[[:space:]])?'
END='([[:space:]]|$)'

DANGEROUS_PATTERNS=(
  "${G}push${END}"                                  # every push: --force, --delete, origin :branch
  "${G}reset[[:space:]]+([^;&|]*[[:space:]])?--hard${END}"
  "${G}clean[[:space:]]+([^;&|]*[[:space:]])?(-[[:alnum:]]*f|--force)"
  "${G}branch[[:space:]]+([^;&|]*[[:space:]])?(-[[:alnum:]]*[dD]|--delete)"
  "${G}rebase${END}"
  "${G}checkout[[:space:]]+(--[[:space:]]+)?\.${END}"
  "${G}restore[[:space:]]+([^;&|]*[[:space:]])?\.${END}"
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if printf '%s\n' "$COMMAND" | grep -qE -- "$pattern"; then
    block "'$COMMAND' matches a dangerous git pattern"
  fi
done

exit 0

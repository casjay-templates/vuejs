#!/usr/bin/env sh
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
PROG="$(basename "$0")"
USER="${SUDO_USER:-${USER}}"
HOME="${USER_HOME:-${HOME}}"
BASE_URL="${2:-/vuejs}"
CNAME="${1:-}"
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
printf '%s\n' "deploying website in $(basename "$PWD")"
cd "$PWD" || exit 1
rm -Rf "$PWD/dist" "$PWD/docs"
sed -i "s|/vuejs|$BASE_URL|g" "./vue.config.js"
sed -i "s|/vuejs|$BASE_URL|g" "./src/router/index.ts"
npm run build && exitCode=0 || exitCode=1

if [ "$exitCode" -ne 0 ]; then
  printf '%s\n' "Failed to deploy website"
  exitCode=1
fi

if [ -d "$PWD/dist" ] && [ "${exitCode:-0}" -eq 0 ]; then
  echo "$CNAME" >"$PWD/dist/CNAME"
  mv -fv "$PWD/dist" "$PWD/docs"
  touch "$PWD/docs/.nojekyll"
  if [ -d "$PWD/.git" ]; then
    [ -d "$PWD/docs" ] && gitcommit deploy && exitCode=0 || exitCode=1
  fi
fi

exit ${exitCode:-$?}

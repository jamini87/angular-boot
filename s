#!/usr/bin/env bash
# Build
lan='true'
local='false'
while [ $# -gt 0 ]; do
  if [[ $1 == *"--"* ]]; then
    v="${1/--/}"
    declare $v="$2"
    if [ $v = 'local' ]; then
      local='true'
    fi
    if [ $v = 'lan' ]; then
          local='true'
        fi
  fi
  shift
done

if [[ $local = 'true' ]]; then
		 ng s --port 3200
elif [[ $lan = 'true' ]]; then
     lanIp=$(ip -4 addr show wlo1 | grep -oP '(?<=inet\s)\d+(\.\d+){3}')
		 ng s --host $lanIp --port 3200
fi

#!/usr/bin/env sh

echo "waiting for start"
set -e
# For mountebank
npx babel-node ./microservice2/index.js
# For nock
# node ./microservice2/demo.js
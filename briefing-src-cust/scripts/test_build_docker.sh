#!/usr/bin/env bash

set -ex

npm run build

docker compose pull

docker compose build



docker compose up -d

docker compose logs -f

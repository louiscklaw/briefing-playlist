#!/usr/bin/env bash

docker compose build express
docker compose kill express
docker compose down express

set -ex

docker compose up -d express
docker compose logs -f express

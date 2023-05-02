#!/usr/bin/env bash

set -x

git pull

pushd briefing-src-cust
  npm i -D
  ./build.sh

popd

docker network create traefik-proxy-network

set -ex

docker compose kill
docker compose down

docker compose build
docker compose up -d

docker compose logs -f express

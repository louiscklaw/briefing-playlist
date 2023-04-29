#!/usr/bin/env bash

set -ex


docker compose -f docker-compose.development.yml build
docker compose -f docker-compose.development.yml up -d

docker compose -f docker-compose.development.yml exec -it briefing bash

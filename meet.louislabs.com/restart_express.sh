#!/usr/bin/env bash

set -x

docker compose restart express

docker compose logs -f express

#!/bin/bash

if [ $# -lt 1 ]
then
  echo "Usage : ./start.sh <docker-machine name>"
  exit
fi

DOCKER_MACHINE_NAME="$1"
#DOCKER_MACHINE_LOCATION="~/.docker/machine/machines/$DOCKER_MACHINE_NAME"

docker-machine create -d virtualbox $DOCKER_MACHINE_NAME

echo "Docker env"
docker-machine env $DOCKER_MACHINE_NAME
echo ""

sudo /usr/local/bin/docker-compose up -d

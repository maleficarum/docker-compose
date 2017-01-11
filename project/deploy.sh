#!/bin/bash

current=$(pwd)


if [ $# -eq 0 ]
then
  echo "<deploy|undeploy|build>"
  exit
fi

if [ "$1" = "deploy" ]
then
  cd nodejs && docker service create --name nodejs --mode global --publish 3000:3000 maleficarum/dc-nodejs-server
  cd $current
  cd mongodb && docker service create --name mongodb --replicas 1 --publish 27017:27017 maleficarum/dc-mongodb-server
  cd $current
  cd nginx && docker service create --name nginx --replicas 1 --publish 80:80 maleficarum/dc-nginx-server

fi

if [ "$1" = "undeploy" ]
then
  cd $current
  docker service rm nodejs
  docker service rm mongodb
  docker service rm nginx
fi



if [ "$1" = "build" ]
then
  cd $current/nodejs
  docker build -t maleficarum/dc-nodejs-server:latest .
  docker push maleficarum/dc-nodejs-server

  cd $current/mongodb
  docker build -t maleficarum/dc-mongodb-server:latest .
  docker push maleficarum/dc-mongodb-server

  cd $current/nginx
  docker build -t maleficarum/dc-nginx-server:latest .
  docker push maleficarum/dc-nginx-server
fi

if [ "$1" = "check" ]
then
  docker service ps mongodb
  docker service ps nodejs
  docker service ps nginx
fi

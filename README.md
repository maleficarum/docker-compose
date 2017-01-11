# docker-compose

./start.sh <nombre de maquina>

sudo /usr/local/bin/docker-compose build

sudo /usr/local/bin/docker-compose up


# docker swarm

> - install google cloud sdk
> - create google project
> - pull google-cloud-swarm [github project](https://github.com/maleficarum/google-cloud-swarm)
> - gcloud init
> - ./swarm-up.sh
> - eval $(docker-machine env *machine name in config.yaml*)
> - build an image based on DockerFile

```bash
> docker build -t maleficarum/dc-nodejs-server:latest . **
> docker login
> docker push maleficarum/dc-nodejs-server:latest
```
> - run on docker swarm

```bash
> eval $(docker-machine env my-swarm-manager)
> docker service create --name nodejs --mode global --publish 3000:3000 maleficarum/dc-nodejs-server
> docker service create --name mongodb --replicas 1 --publish 3000:3000 maleficarum/dc-mongodb-server
> docker service ps nodejs
```

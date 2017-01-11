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

> - push an image to a dokerhub

> - run on docker swarm

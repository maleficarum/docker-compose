FROM node:latest

RUN mkdir /nodejs
RUN mkdir /nodejs/public
RUN mkdir /nodejs/schemas

WORKDIR /nodejs
ADD ./package.json /nodejs/package.json
ADD ./app.js /nodejs/app.js
ADD ./public /nodejs/public
ADD ./schemas /nodejs/schemas
RUN ls /nodejs
RUN npm install

EXPOSE 3000

CMD node app.js

FROM node:latest

RUN mkdir /nodejs

WORKDIR /nodejs
ADD ./package.json /nodejs/package.json
ADD ./app.js /nodejs/app.js
RUN npm install

EXPOSE 3000

CMD node app.js

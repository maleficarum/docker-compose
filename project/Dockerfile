FROM node:latest

RUN mkdir /nodejs

WORKDIR /nodejs
ADD ./node/package.json /nodejs/package.json
ADD ./node/app.js /nodejs/app.js
RUN npm install

EXPOSE 3000

CMD node app.js

# FROM node:11-alpine

# WORKDIR /ui

# COPY package.json ./

# RUN npm install

# EXPOSE 3000

# CMD [ "npm", "start" ]

FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/client
WORKDIR /srv/app/client

COPY package.json /srv/app/client
COPY package-lock.json /srv/app/client

RUN npm install

COPY . /srv/app/client

CMD [ "npm", "start" ]
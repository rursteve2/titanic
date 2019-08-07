# # base image
# FROM node:12.2.0-alpine

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install --silent
# RUN npm install react-scripts@3.0.1 -g --silent

# # start app
# CMD ["npm", "start"]


# FROM node:10

# WORKDIR /app

# COPY ./package.json .
# COPY ./package-lock.json .

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD npm start

FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/server
WORKDIR /srv/app/server

COPY package.json /srv/app/server
COPY package-lock.json /srv/app/server

RUN npm install

COPY . /srv/app/server

CMD [ "npm", "run", "start"]
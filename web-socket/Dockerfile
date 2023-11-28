## NodeJS image
FROM node:18-alpine

## Define working dir
WORKDIR /usr/src/app

## Copy package.json & lock
COPY package.json ./
COPY package-lock.json ./

## Install
## https://stackoverflow.com/questions/72952784/curl-could-not-resolve-host-using-docker-on-wsl-2
## RUN curl -v https://registry.npmjs.com/
RUN  npm ci --omit=dev --no-audit && \
  npm cache clean --force

COPY . ./

## Run NodeJS server
EXPOSE $PORT
CMD ["npm", "run", "start"]

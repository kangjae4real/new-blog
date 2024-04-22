FROM node:20

ARG COMMAND

RUN mkdir api
WORKDIR api

COPY package.json api/package.json
COPY yarn.lock api/yarn.lock
RUN yarn

COPY ./ api

ENTRYPOINT yarn $COMMAND
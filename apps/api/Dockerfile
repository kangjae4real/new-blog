FROM node:20

ARG COMMAND

RUN mkdir api
COPY ./ api
WORKDIR api

RUN yarn

ENTRYPOINT yarn $COMMAND
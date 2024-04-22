FROM node:20

ARG COMMAND

RUN mkdir web
WORKDIR web

COPY package.json web/package.json
COPY yarn.lock web/yarn.lock
RUN yarn

COPY ./ web

ENTRYPOINT yarn $COMMAND
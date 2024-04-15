FROM node:20

ARG COMMAND

RUN mkdir web
COPY ./ web
WORKDIR web

RUN yarn

ENTRYPOINT yarn $COMMAND
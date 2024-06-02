# Blog

## 개요
기존 블로그를 리뉴얼하는 프로젝트입니다.

## 기술
### Front-end
- Node.js (TypeScript)
- React
- Next.js (App Router)
- shadcn/ui with. tailwind-css
### Back-end
- Node.js (TypeScript)
- Nest.js
- TypeORM
- OAS (Swagger)
- PostgreSQL

## 실행
이 프로젝트는 Dockerize 되어 있습니다. `docker-compose` 를 활용하여 실행하는것을 권장합니다. <br />
명령 실행 후, `Front-end`, `Back-end`, `Database`가 Docker container 위로 올라갑니다.
```shell
$ cd docker/dev # dev mode
$ cd docker/prod # prod mode
$ docker compose up
```

## 직접 실행
### Front-end
```shell
$ cd apps/web
$ yarn install
$ yarn dev # dev mode
$ yarn build && yarn start # prod mode
```
### Back-end
```shell
$ cd apps/api
$ yarn install
$ yarn start:dev # dev mode
$ yarn build && yarn start # prod mode
```
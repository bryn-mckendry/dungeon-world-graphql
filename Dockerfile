# syntax=docker/dockerfile:1

FROM node:12.22.0 as base

ENV PORT=3000
ENV PGUSER=postgres
ENV PGHOST=db
ENV PGPASSWORD=password
ENV PGPORT=5432
ENV PGDATABASE=dev
ENV TOKEN_SECRET=secret-dev

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .


FROM base as production

ENV NODE_ENV=production
ENV NODE_PATH=./dist

RUN yarn build

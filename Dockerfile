FROM node:12-alpine3.10

RUN apk add --no-cache \
  make \
  gcc \
  g++ \
  curl \
  git \
  unzip \
  zlib-dev

ENV NODE_ENV development

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3334

CMD bin/start

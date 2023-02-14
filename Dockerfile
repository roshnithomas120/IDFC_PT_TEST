FROM node:1.19.0

WORKDIR /usr/src/app

COPY . .

RUN go mod tidy

RUN npm start

RUN npm run mock
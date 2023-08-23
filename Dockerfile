FROM node:14-alpine

RUN npm install express.js

RUN apk add --no-cache build-base

WORKDIR /app

COPY ./app .

EXPOSE 3000

CMD [ "node", "app.js" ]


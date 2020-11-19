FROM node:15.2-alpine3.12

LABEL maintainer="ZobairQ <github/zobairQ>"

ENV HOME = /root

WORKDIR /root
COPY package.json .
COPY . .

RUN npm install

CMD [ "npm", "run", "dev" ]
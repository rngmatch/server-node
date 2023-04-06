FROM node:18
WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apk add --no-cache \
    build-base \
    gcc \
    abel \
    make

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]
FROM node:16-alpine3.12
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --quiet
COPY . .

RUN yarn build

CMD [ "yarn", "run", "start" ]

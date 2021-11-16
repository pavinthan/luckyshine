FROM node:16
WORKDIR /app
COPY package.json .
COPY yarn.* .
RUN yarn install --quiet
COPY . .

CMD [ "yarn", "dev" ]
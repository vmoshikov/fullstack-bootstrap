FROM node:18

WORKDIR /app

COPY . .
COPY package-prod.json package.json

RUN yarn install

ENV HOST 0.0.0.0
EXPOSE 3000

RUN yarn build
CMD ["yarn", "start"]

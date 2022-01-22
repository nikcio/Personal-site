# Build project
FROM node:17 AS BUILD_IMAGE

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn --production

COPY . .

RUN yarn build

# Create minified image
FROM node:17-alpine

WORKDIR /app

COPY --from=BUILD_IMAGE /app/.output ./.output

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV BASE_URL=https://nikcio.com

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
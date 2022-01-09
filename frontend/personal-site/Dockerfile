FROM node:17 AS BUILD_IMAGE

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn --production
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN yarn build

FROM node:17-alpine

WORKDIR /app

COPY --from=BUILD_IMAGE /app/.output ./.output

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV BASE_URL=https://nikcio.com

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
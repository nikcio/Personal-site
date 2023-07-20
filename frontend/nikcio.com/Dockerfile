# Base
FROM node:18-alpine AS base

WORKDIR /app

# Build
FROM node:18 as build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --shamefully-hoist=true --frozen-lockfile

COPY . .

RUN pnpm build

# Publish
FROM base AS publish

COPY --from=build /app/.output  .

ENV HOST 0.0.0.0
EXPOSE 3000

ENTRYPOINT ["node", "server/index.mjs"]
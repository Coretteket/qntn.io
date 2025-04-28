FROM node:lts-alpine AS base
WORKDIR /app

RUN npm install -g corepack@latest
RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./
RUN corepack pnpm install --frozen-lockfile

COPY . .
RUN corepack pnpm run build

ENV HOST=0.0.0.0
ENV PORT=4321

CMD ["node", "./dist/server/entry.mjs"]

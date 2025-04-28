FROM node:lts-alpine AS base
WORKDIR /app

RUN npm install -g corepack@latest
RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./

FROM base AS prod-deps
RUN corepack pnpm install --prod --frozen-lockfile

FROM base AS build-deps
RUN corepack pnpm install --frozen-lockfile

FROM build-deps AS build
COPY . .
RUN corepack pnpm run build

FROM node:lts-alpine AS runtime
WORKDIR /app

RUN npm install -g corepack@latest
RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./
RUN corepack pnpm install --prod --frozen-lockfile

COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321

CMD node ./dist/server/entry.mjs

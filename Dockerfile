FROM node:lts-alpine AS base
WORKDIR /app

RUN npm install -g corepack@latest
RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./

FROM base AS deps
RUN corepack pnpm install --frozen-lockfile

FROM deps AS build
COPY . .
RUN corepack pnpm run build

FROM deps AS runtime
WORKDIR /app

COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321

CMD ["node", "./dist/server/entry.mjs"]

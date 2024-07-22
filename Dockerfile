FROM node:20.9.0-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack prepare pnpm@9.1.0 --activate
RUN pnpm config set store-dir .pnpm-store

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install 
RUN pnpm run build

FROM base
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
USER node

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/build/standalone /usr/src/app/
COPY --chown=node:node --from=build /usr/src/app/public /usr/src/app/public
COPY --chown=node:node --from=build /usr/src/app/build/static /usr/src/app/build/static


EXPOSE 3000


CMD ["node", "./server.js"]
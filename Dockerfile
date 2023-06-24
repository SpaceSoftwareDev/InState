FROM node:20-alpine

WORKDIR /usr/src/app

RUN corepack enable pnpm
RUN corepack prepare pnpm@latest --activate
COPY pnpm-lock.yaml ./

RUN pnpm fetch --prod

ADD . ./
RUN pnpm install -r --offline --prod

RUN pnpm build

EXPOSE 80
ENV NODE_ENV=production
CMD [ "npx", "tsx", "server" ]

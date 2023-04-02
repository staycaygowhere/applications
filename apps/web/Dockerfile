# turbo prune to only get necessary files
FROM node:18.15-alpine AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app

RUN npm install -g turbo

COPY . .

RUN turbo prune --scope=@staycaygowhere/web --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:18.15-alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app

COPY --from=builder /app/out/json/ .
# Workaround until turbo linux binaries issue is fixed (using wrong binaries)
# COPY --from=builder /app/out/package-lock.json ./package-lock.json

RUN npm install

COPY --from=builder /app/out/full/ .

RUN npm run build -- --filter=@staycaygowhere/web

FROM node:18.15-alpine AS runner

WORKDIR /app

COPY --from=installer /app/apps/web/build apps/web/build
COPY --from=installer /app/apps/web/package.json apps/web/package.json
COPY --from=installer /app/node_modules node_modules

RUN ls
RUN ls ./apps/web/build

CMD [ "node", "./apps/web/build" ]
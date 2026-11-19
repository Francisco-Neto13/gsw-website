# Site estático da GsW: build do Next (export) + variantes das imagens, servido pelo Caddy (docs/MIGRACAO-VPS.md).
# Build a partir da raiz do repositório: docker build -f infra/Dockerfile .

FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
# Sem scripts de instalação: o sharp e o compilador do Next usam binários prontos, e o gifsicle (só do script de
# GIFs, fora do build) tentaria compilar sem as ferramentas da imagem. O `prepare` (hook do git) também não serve aqui.
RUN npm ci --no-audit --no-fund --ignore-scripts
COPY . .
# next build (precisa de internet para o Google Fonts) e scripts/gerar-variantes.mjs
RUN npm run build

FROM caddy:2.10-alpine
LABEL app=gsw
COPY infra/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/infra/gerado/redirects.caddy /etc/caddy/redirects.caddy
COPY --from=build /app/out /srv
# Sem root: a porta 8080 não precisa de privilégio (infra/Caddyfile)
USER 1000:1000
EXPOSE 8080

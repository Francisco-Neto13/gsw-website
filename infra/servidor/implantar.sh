#!/usr/bin/env bash
# Põe o site da GsW em produção na VPS (docs/MIGRACAO-VPS.md). Roda como root pelo /usr/local/sbin/gsw-deploy
# (infra/servidor/configurar-deploy.sh), sempre na versão deste arquivo que está no ramo implantado.
# Argumentos: <pasta do projeto> <modo: deploy | dry-run | voltar> [ramo, padrão main]
#   voltar: põe no ar a imagem anterior (gsw-web:anterior), sem build, em segundos.
set -euo pipefail

CODIGO="${1:?pasta do projeto}"
MODO="${2:-deploy}"
RAMO="${3:-main}"
COMPOSE="docker compose -f infra/docker-compose.prod.yml"
SITE=/srv/proxy/sites/gsw.caddy

exec 9>/run/gsw-deploy.lock
flock -w 900 9

if ! systemctl is-active --quiet docker.service; then
  echo "FALHA: o Docker está parado (o servidor reiniciou?). Suba o Docker e rode o deploy de novo." >&2
  exit 1
fi

cd "$CODIGO"

instalar_site() {
  if cmp -s infra/proxy/gsw.caddy "$SITE"; then
    echo "gsw.caddy sem mudança."
    return
  fi
  local antes
  antes=$(mktemp)
  [ -f "$SITE" ] && cp -p "$SITE" "$antes"
  install -m 644 infra/proxy/gsw.caddy "$SITE"
  if (cd /srv/proxy && docker compose exec -T caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile >/dev/null 2>&1); then
    sh /srv/proxy/recarregar.sh
    echo "Proxy recarregado com o gsw.caddy novo."
  else
    if [ -s "$antes" ]; then cp -p "$antes" "$SITE"; else rm -f "$SITE"; fi
    echo "gsw.caddy inválido: o proxy continua com a configuração anterior." >&2
    exit 1
  fi
  rm -f "$antes"
}

if [ "$MODO" = "voltar" ]; then
  if ! docker image inspect gsw-web:anterior >/dev/null 2>&1; then
    echo "Não há versão anterior (gsw-web:anterior). Nada foi alterado." >&2
    exit 1
  fi
  docker tag gsw-web:anterior gsw-web:latest
  $COMPOSE up -d --no-build --wait
  echo "Versão anterior no ar."
  exit 0
fi

# Clone raso: o histórico completo tem ~1 GB por causa dos GIFs antigos
git fetch --quiet --depth 1 origin "$RAMO"

if [ "$MODO" = "dry-run" ]; then
  echo "[dry-run] No ar: $(git log --oneline -1 HEAD | cut -c1-72)"
  echo "[dry-run] Entraria: $(git log --oneline -1 FETCH_HEAD | cut -c1-72)"
  $COMPOSE config -q
  echo "[dry-run] SSH, Docker e Compose OK. Nada foi alterado."
  exit 0
fi

# O build precisa de espaço (regra da VPS: /srv/REGRAS-DA-VPS.md)
LIVRE_GB=$(df -BG --output=avail /srv | tail -1 | tr -dc 0-9)
if [ "$LIVRE_GB" -lt 10 ]; then
  echo "O disco tem só $LIVRE_GB GB livres; o build precisa de ~10. A versão atual continua no ar. Rode vps-espaco." >&2
  exit 1
fi

git reset --quiet --hard FETCH_HEAD
docker network inspect borda >/dev/null 2>&1 || { echo "A rede borda não existe (proxy da VPS)." >&2; exit 1; }

# Guarda a versão no ar para o "voltar"; se o build falhar, ela continua rodando
if docker image inspect gsw-web:latest >/dev/null 2>&1; then
  docker tag gsw-web:latest gsw-web:anterior
fi
$COMPOSE build
$COMPOSE up -d --wait

instalar_site

# Só imagens deste projeto, sem tag (as camadas antigas de cada build)
docker image prune --force --filter label=app=gsw >/dev/null
echo "Deploy concluído: $(git log --oneline -1 HEAD | cut -c1-72)"

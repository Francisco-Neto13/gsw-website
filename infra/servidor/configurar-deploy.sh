#!/usr/bin/env bash
# Roda uma vez, como root, na VPS: bash infra/servidor/configurar-deploy.sh "<chave pública da CI>"
# Cria o usuário 'deploy-gsw', cuja chave só consegue disparar o /usr/local/sbin/gsw-deploy (modelo do Portfolio).
set -euo pipefail

CHAVE_CI="${1:?chave pública da CI}"

if ! id deploy-gsw >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash deploy-gsw
fi
passwd -l deploy-gsw >/dev/null

cat > /usr/local/sbin/gsw-deploy <<'EOF'
#!/usr/bin/env bash
# Deploy do site da GsW: roda o implantar.sh que está na main.
set -euo pipefail
CODIGO=/srv/gsw
case "${1:-}" in
  "") MODO=deploy ;;
  --dry-run) MODO=dry-run ;;
  --voltar) MODO=voltar ;;
  *) echo "uso: gsw-deploy [--dry-run | --voltar]" >&2; exit 2 ;;
esac
cd "$CODIGO"
git fetch --quiet --depth 1 origin main
git show FETCH_HEAD:infra/servidor/implantar.sh | bash -s -- "$CODIGO" "$MODO" main
EOF

cat > /usr/local/sbin/gsw-deploy-ssh <<'EOF'
#!/usr/bin/env bash
# Comando forçado da chave da CI: ela só dispara o deploy.
set -euo pipefail
case "${SSH_ORIGINAL_COMMAND:-}" in
  "deploy") exec sudo -n /usr/local/sbin/gsw-deploy ;;
  "deploy --dry-run") exec sudo -n /usr/local/sbin/gsw-deploy --dry-run ;;
  "deploy --voltar") exec sudo -n /usr/local/sbin/gsw-deploy --voltar ;;
  *) echo "Comando não permitido para esta chave. Use: deploy | deploy --dry-run | deploy --voltar" >&2; exit 1 ;;
esac
EOF

chown root:root /usr/local/sbin/gsw-deploy /usr/local/sbin/gsw-deploy-ssh
chmod 755 /usr/local/sbin/gsw-deploy /usr/local/sbin/gsw-deploy-ssh

SUDOERS_TMP="$(mktemp)"
cat > "$SUDOERS_TMP" <<'EOF'
deploy-gsw ALL=(root) NOPASSWD: /usr/local/sbin/gsw-deploy "", /usr/local/sbin/gsw-deploy --dry-run, /usr/local/sbin/gsw-deploy --voltar
EOF
visudo -cf "$SUDOERS_TMP" >/dev/null
install -o root -g root -m 440 "$SUDOERS_TMP" /etc/sudoers.d/gsw-deploy
rm -f "$SUDOERS_TMP"

install -d -o deploy-gsw -g deploy-gsw -m 700 /home/deploy-gsw/.ssh
printf 'command="/usr/local/sbin/gsw-deploy-ssh",restrict %s\n' "$CHAVE_CI" > /home/deploy-gsw/.ssh/authorized_keys
chown deploy-gsw:deploy-gsw /home/deploy-gsw/.ssh/authorized_keys
chmod 600 /home/deploy-gsw/.ssh/authorized_keys

visudo -c >/dev/null
echo "usuário: $(id deploy-gsw)"
echo "senha: $(passwd -S deploy-gsw | awk '{print $2}') (L = bloqueada)"

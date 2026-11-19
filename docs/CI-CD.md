# CI/CD

## Fluxo de branches

```text
<tipo>/<assunto>  --PR + CI verde-->  develop  --CI verde-->  main  -->  deploy (desligado)
```

1. O trabalho nasce da `develop`, numa branch com o tipo do commit (`docs/PADROES.md`):
   `git switch -c feat/assunto origin/develop`.
2. Volta por PR para a `develop`. Com a CI verde, o job **Mesclar na develop** mescla o PR (merge
   commit, só o commit testado) e apaga a branch. PR em **rascunho** roda a CI sem mesclar.
3. A `develop` roda a CI de novo sobre o commit mesclado. Verde, o job **Promover para a main**
   avança a `main` até esse commit (só fast-forward, nunca reescreve).
4. Se `DEPLOY_HABILITADO = true`, a promoção dispara o workflow **Deploy**, que publica na VPS. Desligado até a CI
   ter a chave de deploy (seção "Ativar o deploy").

Regras:

- `develop` e `main` **nunca recebem push direto**. O hook `.githooks/pre-push` recusa, com uma
  exceção: criar a `develop` pela primeira vez.
- PR para a `main` só vem da `develop`; PR para a `develop` só vem de branch de trabalho (job
  **Branch de origem**).
- Se a `main` tiver um commit que a `develop` não tem, a promoção falha de propósito: traga a
  `main` para a `develop` por PR.
- PR de fork (o repositório é público) roda a CI, mas não é mesclado sozinho: o token de um fork
  não escreve no repositório. Alguém revisa e mescla à mão.

## Arquivos

| Arquivo | Papel |
|---|---|
| `.github/workflows/ci.yml` | Jobs `origem`, `front`, `seguranca`, `mesclar` e `promover` |
| `.github/workflows/deploy.yml` | Deploy na VPS por SSH (comando forçado), só na `main`, travado por `DEPLOY_HABILITADO` |
| `.githooks/pre-push` | Bloqueia push em `main`/`develop` e roda tipos, lint e testes |
| `.gitattributes` | Força LF no hook e nos YAML (CRLF quebra no Linux) |
| `tests/rotas.test.mjs` | Testes do `npm test`: navegação × rotas de `app/` |

O hook é ligado pelo `npm install` (script `prepare`). À mão, uma vez por clone:

```bash
git config core.hooksPath .githooks
```

Push que só leva mídia (png, jpg, gif, webp, avif, svg, mp4, webm) ou só apaga branch pula as
verificações. Não use `--no-verify`: se o hook atrapalhar um caso legítimo, ajuste o arquivo.

## Verificações

| Job | Quando | O que faz |
|---|---|---|
| Branch de origem | Todo PR | Confere a regra de origem acima |
| Tipos, lint, testes e build | Todo PR e push em `develop`/`main` | Node 24, `npm ci`, `npm run typecheck`, `npm run lint`, `npm test`, `npm run build` |
| Segredos no histórico | Todo PR e push em `develop`/`main` | gitleaks `v8.28.0` (imagem oficial) no histórico inteiro |

O `pre-push` roda tipos, lint e testes; o build fica só na CI. Localmente, `npm run check` roda a
mesma sequência da CI.

Verificação nova entra como passo do job `front` (ou job novo no `needs` de `mesclar` e
`promover`), e a parte rápida dela entra no `pre-push`.

## Deploy

O site vai para a VPS (`docs/INFRAESTRUTURA.md`, `docs/MIGRACAO-VPS.md`), no mesmo modelo do Portfolio:

- **Gatilho:** `deploy.yml` roda só por `workflow_dispatch` na `main`, disparado pela promoção ou à mão. Um
  deploy por vez (`concurrency: deploy-producao`).
- **Modos:**
  - `deploy`, o normal;
  - `dry_run`, que mostra o commit no ar e o que entraria, sem mudar nada;
  - `voltar`, que põe no ar a imagem anterior.
- **Passos:**
  - confere `DEPLOY_HABILITADO` (exceto no `dry_run`);
  - confere os secrets;
  - abre o SSH com a chave da CI e manda só o comando (`deploy`, `deploy --dry-run` ou `deploy --voltar`).
- **Na VPS:**
  - a chave da CI pertence ao usuário `deploy-gsw` e só consegue rodar `/usr/local/sbin/gsw-deploy` (comando
    forçado e sudo restrito, criados por `infra/servidor/configurar-deploy.sh`);
  - esse script roda o `infra/servidor/implantar.sh` da `main`.
- **O que o `implantar.sh` faz:**
  - trava contra deploy duplo;
  - confere o disco;
  - `git fetch` raso e `reset`;
  - guarda a imagem no ar como `gsw-web:anterior`;
  - `docker compose build` e `up -d --wait`;
  - instala `infra/proxy/gsw.caddy` no proxy só depois de `caddy validate`.
- **Build:** roda na própria VPS, dentro do `docker build` (`infra/Dockerfile`). Se falhar, a versão no ar
  continua.

**Voltar à versão anterior às pressas:** Actions › Deploy › Run workflow com `voltar`, ou na VPS
`sudo /usr/local/sbin/gsw-deploy --voltar`. Depois abra o PR de revert, para a `main` voltar a bater com o
que está no ar.

## Secrets e variáveis do GitHub

Em **Settings › Secrets and variables › Actions**. Só os nomes aqui; os valores nunca entram no
repositório.

| Nome | Tipo | Conteúdo |
|---|---|---|
| `VPS_HOST` | Secret | Endereço da VPS |
| `VPS_PORT` | Secret | Porta do SSH |
| `VPS_USER` | Secret | `deploy-gsw` |
| `VPS_SSH_KEY` | Secret | Chave privada da CI (a pública fica no `authorized_keys` do `deploy-gsw`) |
| `VPS_KNOWN_HOSTS` | Secret | Linha do `ssh-keyscan` da VPS, para conferir o servidor |
| `DEPLOY_HABILITADO` | **Variável** (aba Variables) | `true` liga o deploy; ausente ou outro valor mantém desligado |

A CI não precisa de nenhum secret. Os jobs `mesclar` e `promover` usam o `GITHUB_TOKEN` com
`contents: write` (mais `pull-requests: write` e `actions: write`), pedidos no próprio workflow.
Se o merge falhar por permissão, em Settings › Actions › General › **Workflow permissions**,
marque "Read and write permissions".

## Ativar o deploy

1. **Gerar a chave da CI**, fora do repositório: `ssh-keygen -t ed25519 -f gsw-ci -C gsw-ci -N ""`.
2. **Criar o usuário de deploy na VPS**, como root: `bash /srv/gsw/infra/servidor/configurar-deploy.sh
   "$(cat gsw-ci.pub)"`.
3. **Cadastrar os secrets** (o valor de `VPS_SSH_KEY` é o conteúdo de `gsw-ci`; o de `VPS_KNOWN_HOSTS`, a saída
   de `ssh-keyscan -p <porta> <endereço>`):

   ```bash
   gh secret set VPS_HOST
   gh secret set VPS_PORT
   gh secret set VPS_USER
   gh secret set VPS_SSH_KEY < gsw-ci
   gh secret set VPS_KNOWN_HOSTS
   ```

   Conferir: `gh secret list` mostra os cinco. Depois apague o arquivo `gsw-ci` da máquina.
4. **Testar sem publicar:** Actions › Deploy › Run workflow, na `main`, com `dry_run`
   (`gh workflow run deploy.yml --ref main -f modo=dry_run`). Precisa terminar verde, com "Nada foi
   alterado".
5. **Ligar:** crie a variável `DEPLOY_HABILITADO` = `true`
   (`gh variable set DEPLOY_HABILITADO --body true`). A próxima promoção para a `main` publica sozinha.

Para desligar de novo, apague a variável (`gh variable delete DEPLOY_HABILITADO`) ou mude o valor.

## Primeira vez no GitHub (criar a `develop`)

A `develop` ainda não existe no GitHub. Uma vez, a partir da `main` atual:

```bash
git switch -c develop origin/main
git push origin develop             # o hook permite criar a develop
git switch chore/estrutura-base
git push -u origin chore/estrutura-base
gh pr create --base develop         # a CI roda e mescla sozinha quando passar
```

Até este PR entrar, a `main` não tem os workflows; o primeiro ciclo completo (mesclar na
`develop` → promover a `main`) acontece no próprio PR desta estrutura.

Opcional: como o repositório é público, o GitHub oferece rulesets de graça. Dá para exigir PR e o
status "Tipos, lint, testes e build" na `develop`. Na `main`, um ruleset que exija PR bloquearia a
promoção, a não ser que o GitHub Actions entre na lista de bypass. O fluxo funciona sem isso.

## Projeto de referência e o que mudou

Os três projetos de referência foram lidos só para estudo:

| Projeto | Fluxo | Por que não foi a base |
|---|---|---|
| Portfolio | PR → `main`; CI `npm run check`; deploy por SSH numa VPS após a CI | Sem `develop`, sem hook, sem barrar origem de PR; deploy ligado direto |
| Guardian-Of-Wynn | branch → `develop` → `main` pelo workflow; hook; gitleaks; Semgrep; deploy por SSH desligado por `DEPLOY_HABILITADO` | **Base escolhida** (mesmo fluxo do `muda`) |
| muda | Igual ao Guardian, com front e back separados; sem deploy ainda | Mesmo modelo; o Guardian já tem o deploy desligado por variável |

A base é o fluxo do Guardian-Of-Wynn/muda porque atende ao que foi pedido (branch → `develop` →
`main`, push direto bloqueado, CI em todo PR, CD desligado até validar) sem depender de
configuração no GitHub, e é o padrão dos outros projetos do mesmo dono.

Adaptado, e por quê:

| Referência | Aqui | Motivo |
|---|---|---|
| Jobs de bot, backend, dashboard, imagens Docker, Postgres de serviço | Um job `front` | Projeto só de front |
| `scripts/ci/checks.sh` | `npm run check` e passos diretos no workflow | Uma única parte; não precisa de script |
| Vitest/Playwright/testes do backend | `node --test` com `tests/rotas.test.mjs` | Não havia teste; o executor nativo do Node não adiciona dependência |
| Semgrep, `npm audit`, Dependabot | Fora, por enquanto | Sem código de servidor nem entrada de usuário; ver `docs/PENDENCIAS.md` |
| Deploy por SSH na VPS com usuário restrito e `implantar.sh` | Igual (modelo do Portfolio), com o modo `voltar` a mais | Desde 18/11/2026 o site roda na VPS; a Vercel saiu |
| Secrets `VPS_*` | Igual | Idem |
| Hook pula push só de imagens | Pula também `svg`, `avif`, `mp4` e `webm` | `public/` é quase toda mídia |
| `actions/checkout@v7`, `setup-node@v7`, Node 24 | Igual | Mesmas versões do `muda` |

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
4. Se `DEPLOY_HABILITADO = true`, a promoção dispara o workflow **Deploy**. Hoje está desligado.

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
| `.github/workflows/deploy.yml` | Deploy na Vercel pela CLI, só na `main`, travado por `DEPLOY_HABILITADO` |
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

> **Obsoleto desde 18/11/2026:** a Vercel não será mais usada. O `deploy.yml` abaixo continua
> desligado e precisa ser reescrito para a hospedagem nova antes de qualquer ativação
> (`docs/INFRAESTRUTURA.md`, `docs/PENDENCIAS.md`). Não cadastre os secrets da Vercel. Esta seção
> descreve o arquivo como ele está hoje.

- `deploy.yml` roda só por `workflow_dispatch` na `main`: disparado pela promoção ou à mão.
  Um deploy por vez (`concurrency: deploy-producao`).
- Passos: confere `DEPLOY_HABILITADO` (exceto em `dry_run`), confere os secrets, `npm ci`,
  `vercel pull --environment=production`, `vercel build --prod` e
  `vercel deploy --prebuilt --prod`. Com `dry_run`, para antes de publicar.
- CLI fixada em `vercel@65.9.0`; atualizar de propósito, num PR próprio.
- O token entra só pela env `VERCEL_TOKEN`, nunca na linha de comando.
- A integração Git da Vercel está **desligada** (18/11/2026): o workflow é o único caminho para a
  produção. Não religue: a Vercel voltaria a publicar todo push, inclusive o que não passou na CI,
  e criaria um preview para cada branch.

**Voltar à versão anterior às pressas:** no painel da Vercel, Deployments › deploy anterior ›
**Promote to Production** (ou `vercel rollback`). Depois abra o PR de revert, para a `main` voltar
a bater com o que está no ar.

## Secrets e variáveis do GitHub

Em **Settings › Secrets and variables › Actions**. Só os nomes aqui; os valores nunca entram no
repositório.

| Nome | Tipo | Conteúdo |
|---|---|---|
| `VERCEL_TOKEN` | Secret | Token da Vercel (Account Settings › Tokens), escopo só da conta/time do projeto |
| `VERCEL_ORG_ID` | Secret | `orgId` do `.vercel/project.json` gerado pelo `vercel link` |
| `VERCEL_PROJECT_ID` | Secret | `projectId` do mesmo arquivo |
| `DEPLOY_HABILITADO` | **Variável** (aba Variables) | `true` liga o deploy; ausente ou outro valor mantém desligado |

A CI não precisa de nenhum secret. Os jobs `mesclar` e `promover` usam o `GITHUB_TOKEN` com
`contents: write` (mais `pull-requests: write` e `actions: write`), pedidos no próprio workflow.
Se o merge falhar por permissão, em Settings › Actions › General › **Workflow permissions**,
marque "Read and write permissions".

## Ativar o deploy

1. **Ligar o projeto local à Vercel**, numa pasta fora do repositório ou apagando o `.vercel/`
   depois: `npx vercel@65.9.0 link` e escolha o projeto `gsw-website`. O `.vercel/project.json`
   traz o `orgId` e o `projectId`. (O `.vercel/` já está no `.gitignore`.)
2. **Criar o token**: vercel.com › Account Settings › Tokens, com escopo do time do projeto e
   validade definida.
3. **Cadastrar os secrets**, sem colar valores em arquivo do repositório:

   ```bash
   gh secret set VERCEL_TOKEN
   gh secret set VERCEL_ORG_ID
   gh secret set VERCEL_PROJECT_ID
   ```

   Conferir: `gh secret list` mostra os três.
4. **Testar sem publicar**: Actions › Deploy › Run workflow, na `main`, com `dry_run` marcado (ou
   `gh workflow run deploy.yml --ref main -f dry_run=true`). Precisa terminar verde, com
   "Nada foi publicado".
5. **Ligar**: crie a variável `DEPLOY_HABILITADO` = `true`
   (`gh variable set DEPLOY_HABILITADO --body true`). A próxima promoção para a `main` publica
   sozinha; para publicar na hora, rode o workflow Deploy sem `dry_run`.

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
| Deploy por SSH na VPS com usuário restrito e `implantar.sh` | Vercel CLI (`pull` → `build` → `deploy --prebuilt`) | O site roda na Vercel, não na VPS |
| Secrets `VPS_*` | `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` | Idem |
| `dry_run` chama `implantar.sh --dry-run` | `dry_run` faz `pull` e `build` e não publica | Valida token, projeto e build sem tocar na produção |
| Hook pula push só de imagens | Pula também `svg`, `avif`, `mp4` e `webm` | `public/` é quase toda mídia |
| `actions/checkout@v7`, `setup-node@v7`, Node 24 | Igual | Mesmas versões do `muda` |

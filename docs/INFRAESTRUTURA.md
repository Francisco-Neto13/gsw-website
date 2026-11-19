# Infraestrutura

## Onde roda

| Item | Valor |
|---|---|
| Hospedagem | VPS própria (Contabo Cloud VPS 6), desde 18/11/2026. Plano, números e decisões em `docs/MIGRACAO-VPS.md`; regras da VPS em `/srv/REGRAS-DA-VPS.md` |
| Domínio | `gsw.chiconeto.dev` (registro A na Porkbun, apontando para a VPS) |
| Contêiner | `gsw-prod-web-1` (compose `gsw-prod`, `infra/docker-compose.prod.yml`): Caddy servindo arquivos estáticos na porta 8080, sem root, só leitura, 64 MB de memória e 0,5 CPU |
| Proxy | O Caddy da VPS (`/srv/proxy`) termina o HTTPS e encaminha pela rede `borda`. Arquivo de site: `infra/proxy/gsw.caddy`, instalado em `/srv/proxy/sites/gsw.caddy` pelo deploy |
| Código na VPS | `/srv/gsw`, clone raso (o histórico completo tem ~1 GB por causa de GIFs antigos) |
| Repositório | `github.com/Francisco-Neto13/gsw-website`, **público** |
| Tipo de saída | Export estático do Next (`output: "export"`): não há servidor de aplicação no ar |

A Vercel não é mais usada. A última versão publicada lá (commit `f8063b4`) fica no ar em
`gsw-website.vercel.app` até o projeto ser excluído, depois da validação na VPS (`docs/MIGRACAO-VPS.md`, 5.7).

## Como chega à produção

Pela CI, no modelo do Portfolio: a promoção para a `main` dispara o workflow **Deploy**, que só consegue rodar
`deploy` na VPS (detalhes em `docs/CI-CD.md`). Até a CI ter a chave, o deploy é à mão, como root na VPS:

```bash
sudo /usr/local/sbin/gsw-deploy            # depois de configurar-deploy.sh; ou, antes dele:
cd /srv/gsw && bash infra/servidor/implantar.sh /srv/gsw deploy main
```

O primeiro deploy (18/11/2026) foi feito à mão a partir do ramo `feat/redesign-inicio-raids`, antes de a `main`
ter estas mudanças.

**Voltar à versão anterior:** `sudo /usr/local/sbin/gsw-deploy --voltar` (ou
`bash infra/servidor/implantar.sh /srv/gsw voltar`): põe no ar a imagem `gsw-web:anterior`, sem build.

## O build

`npm run build` faz duas coisas:

1. `next build` gera as páginas em `out/` (precisa de internet para o Google Fonts).
2. `scripts/gerar-variantes.mjs` completa a pasta:
   - **variantes das imagens:** em `out/_v/`, WebP 82 nas larguras de `lib/variantes.ts`, nunca acima do
     original. São ~2.000 arquivos, ~47 MB, ~30 s;
   - **redirects:** `infra/gerado/redirects.caddy`, tirado do registro (`lib/site-content.ts`).

O `next/image` usa um carregador próprio (`lib/carregador-de-imagem.ts`) que aponta para essas variantes; não
há otimizador em tempo real. Na VPS, o build roda dentro do `docker build` (`infra/Dockerfile`, dois estágios:
Node para o build, Caddy só com o resultado).

- Node 24 (o mesmo da CI). Testado localmente com Node 24.18.1 e npm 11.16.0.
- O npm 11 avisa que bloqueou scripts de instalação de `sharp`, `gifsicle` e `unrs-resolver`
  (`allow-scripts`). O build passa assim: o `sharp` usa os binários pré-compilados de `@img/*`.
- `npm install` roda o `prepare`, que liga o hook (`git config core.hooksPath .githooks`). Fora de
  um clone git o comando falha em silêncio e não interrompe a instalação.
- Se o build falhar com "next/font/google queries have exactly one entry", o cache do `.next/`
  ficou inconsistente: apague a pasta e rode de novo.

Para ver localmente como em produção:

```bash
npm ci
npm run build
npm start          # serve out/ em http://localhost:3000 (scripts/servir-out.mjs)
```

## O que o Caddy do contêiner faz (`infra/Caddyfile`)

- Serve `out/`, com `/guias/raids` → `guias/raids.html` e a `404.html` do Next para o que não existe.
- Redirects 308 das rotas antigas (gerados no build).
- Traduz os arquivos de pré-carregamento do Next 16: o navegador pede `__next.guias.raids.__PAGE__.txt`, e o
  export grava `__next.guias/raids/__PAGE__.txt`.
- Comprime o texto na hora, só com gzip (`encode gzip`). Com zstd, os buffers do codificador deixavam o
  contêiner em 48 dos 64 MB parado; com gzip, 13 MB parado e 24 MB sob carga. O `precompressed` do `file_server`
  também saiu: no Caddy 2.10.2 ele respondia 206 Partial Content a pedidos sem `Range`.
- **Cache:** 1 ano (`immutable`) para `/_next/static`, `/_v` e mídia; `no-cache` para HTML e os `.txt` do Next,
  então um deploy aparece na hora.
- Cabeçalhos de segurança (os mesmos que o `next.config.ts` aplicava antes). HSTS e log de acesso ficam no proxy.

## Variáveis de ambiente

A aplicação **não usa nenhuma** (não há `process.env` no código). Os secrets do deploy (`VPS_*`) estão em
`docs/CI-CD.md`.

## Mídia

- **Lootrun:** os 16 GIFs viraram pôster estático (`.poster.webp`) mais um vídeo MP4 H.264 mudo, em loop
  (16,5 MB no total; antes, 80 MB em WebP animado sem perda). O vídeo só baixa perto da tela
  (`AnimacaoSobDemanda`). O `scripts/gif-para-webp.mjs` ainda gera WebP animado: para uma animação nova, gerar o
  pôster com ele e o MP4 à parte (pendência em `docs/PENDENCIAS.md`).
- **Imagens novas:** passam por `image-workbench/` e `npm run convert:webp`. Prints do jogo usadas no modelo novo
  ficam em AVIF + WebP em duas larguras (`public/inicio/`, `public/raids/prints/`), servidas pelo `ImagemDoJogo`.
- **Peso de cada página** (medido no build estático): 0,6 a 1,2 MB na primeira tela. Rolando até o fim, o Lootrun
  chega a ~20 MB, por causa dos vídeos.
- **Cache de 1 ano:** exige **nome novo** quando uma imagem ou um vídeo muda. Sobrescrever o mesmo arquivo deixa
  visitantes com a versão antiga.

## O que não existe

Sem banco, fila, storage ou analytics. O site não precisa de backup: não tem dados, e tudo está no Git.

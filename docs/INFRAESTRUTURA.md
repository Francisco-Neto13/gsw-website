# Infraestrutura

## Onde roda

| Item | Valor |
|---|---|
| Hospedagem | **A definir.** A Vercel não será mais usada (decisão do dono, 18/11/2026). A integração Git dela está desligada; a última versão publicada lá (commit `f8063b4`) continua no ar até o projeto ser retirado |
| Domínio | `gsw-website.vercel.app` enquanto a versão da Vercel existir; não há domínio próprio |
| Repositório | `github.com/Francisco-Neto13/gsw-website`, **público** |
| Tipo de saída | Next.js com todas as rotas estáticas, servido por `next start` (precisa do servidor do Next para os redirects 308 e o otimizador de imagens) |

## Como chega à produção

Hoje não chega: o workflow `Deploy` (`deploy.yml`) foi escrito para a Vercel e está desligado
(`DEPLOY_HABILITADO`). Antes de ligar, ele precisa ser trocado pelo destino novo. O candidato
natural é a VPS, no mesmo modelo do Portfolio (imagem Docker standalone, deploy por SSH com
comando forçado), seguindo as regras da VPS (`/srv/REGRAS-DA-VPS.md`, medir espaço antes e depois,
nada de reservar espaço "por garantia"). Pendência em `docs/PENDENCIAS.md`.

Para ver localmente:

```bash
npm ci
npm run build
npm start          # http://localhost:3000
```

## Variáveis de ambiente

A aplicação **não usa nenhuma** (não há `process.env` no código).

Os secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` e `VERCEL_PROJECT_ID` descritos em `docs/CI-CD.md` só
existem para o `deploy.yml` atual; não precisam ser cadastrados enquanto a hospedagem não for
definida.

## Build

- Node 24 (o mesmo da CI). Testado localmente com Node 24.18.1 e npm 11.16.0.
- O build baixa as fontes do Google Fonts (`next/font`): precisa de internet.
- O npm 11 avisa que bloqueou scripts de instalação de `sharp`, `gifsicle` e `unrs-resolver`
  (`allow-scripts`). O build passa assim: o `sharp` usa os binários pré-compilados de `@img/*`.
  Os scripts de imagem dependem do `sharp`; se ele falhar, `npm approve-scripts sharp` libera.
- `npm install` roda o `prepare`, que liga o hook (`git config core.hooksPath .githooks`). Fora de
  um clone git o comando falha em silêncio e não interrompe a instalação.
- Se o build falhar com "next/font/google queries have exactly one entry", o cache do `.next/`
  ficou inconsistente: apague a pasta e rode de novo.

## Mídia

- `public/` caiu de 167 MB para cerca de 100 MB: os 16 GIFs do Lootrun (94 MB) viraram pôster
  estático + animação WebP, gerados por `node scripts/gif-para-webp.mjs arquivo.gif`. A página
  mostra só o pôster; a animação baixa no clique.
- Imagens novas passam por `image-workbench/` + `npm run convert:webp`. Prints do jogo usadas no
  modelo novo ficam em AVIF + WebP em duas larguras (`public/inicio/`, `public/raids/prints/`),
  servidas pelo `ImagemDoJogo`.
- Peso ao abrir cada página (medido com o build de produção): 0,4 a 0,9 MB.
- O cache de 1 ano nos arquivos de mídia (`next.config.ts`) exige **nome novo** quando a imagem
  muda; sobrescrever o mesmo arquivo deixa visitantes com a versão antiga.

## O que não existe

Sem Docker, banco, fila, storage, monitoramento ou analytics. Nada disso é necessário para o site
funcionar.

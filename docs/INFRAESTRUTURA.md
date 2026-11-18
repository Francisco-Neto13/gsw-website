# Infraestrutura

## Onde roda

| Item | Valor |
|---|---|
| Hospedagem | Vercel (projeto `gsw-website`) |
| Domínio | `gsw-website.vercel.app` (domínio padrão da Vercel; não há domínio próprio) |
| Repositório | `github.com/Francisco-Neto13/gsw-website`, **público** |
| Tipo de saída | Next.js com todas as rotas estáticas; a Vercel serve as páginas e as imagens otimizadas |

## Como chega à produção

Em 18/11/2026 a integração Git da Vercel foi **desligada**: push na `main` não publica mais nada.
A produção continua na última versão publicada pela integração (commit `f8063b4`) até o workflow
`Deploy` ser ativado.

Depois de ativado, o caminho é único:

```text
PR verde → develop → CI verde → main → workflow Deploy → vercel build --prod → vercel deploy --prebuilt --prod
```

O build roda no GitHub Actions (Node 24) e só o resultado vai para a Vercel. Detalhes e passos de
ativação: `docs/CI-CD.md`.

## Variáveis de ambiente

A aplicação **não usa nenhuma** (não há `process.env` no código). Nada precisa ser configurado na
Vercel para o site funcionar.

O workflow de deploy usa, como secrets do GitHub Actions (só os nomes):

| Nome | Uso |
|---|---|
| `VERCEL_TOKEN` | Token da conta Vercel para a CLI |
| `VERCEL_ORG_ID` | Conta/time dono do projeto |
| `VERCEL_PROJECT_ID` | Projeto `gsw-website` |

E a variável de repositório `DEPLOY_HABILITADO` (`true` liga o deploy automático).

Se um dia surgir variável de ambiente na aplicação: o nome entra aqui, o valor vai na Vercel
(Settings › Environment Variables) e o `vercel pull` do workflow traz para o build.

## Build

```bash
npm ci
npm run build   # next build; gera .next/
npm start       # serve o build localmente (opcional)
```

- Node 24 (o mesmo da CI). Testado localmente com Node 24.18.1 e npm 11.16.0.
- O npm 11 avisa que bloqueou scripts de instalação de `sharp`, `gifsicle` e `unrs-resolver`
  (`allow-scripts`). O build passa assim: o `sharp` usa os binários pré-compilados de `@img/*`.
  Só o `npm run convert:webp` depende do `sharp` funcionando; se ele falhar,
  `npm approve-scripts sharp` libera.
- `npm install` roda o `prepare`, que liga o hook (`git config core.hooksPath .githooks`). Fora de
  um clone git (ex.: dentro da Vercel) o comando falha em silêncio e não interrompe a instalação.

## Mídia

- `public/` tem cerca de 167 MB; 91 MB são 16 GIFs de `public/lootrun/`.
- Imagens novas passam por `image-workbench/` + `npm run convert:webp` (webp sem perdas, alvo de
  até 200 KB) antes de ir para `public/<area>/`.
- O cache de 1 ano nos arquivos de mídia (`next.config.ts`) exige **nome novo** quando a imagem
  muda; sobrescrever o mesmo arquivo deixa visitantes com a versão antiga.

## O que não existe

Sem servidor próprio, Docker, banco, fila, storage, CDN além da Vercel, monitoramento ou analytics.
A VPS usada por outros projetos não hospeda este.

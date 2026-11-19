# Arquitetura

Estado em 18/11/2026, depois da primeira parte da Fase 3 do redesign (base, navegação, Início e o
guia modelo de Raids). Sistema visual: `DESIGN.md`. Produto: `PRODUCT.md`.

## Stack

| Camada | Escolha |
|---|---|
| Framework | Next.js 16.1.6, App Router, todas as rotas pré-renderizadas como estáticas (`○ Static` no build) |
| UI | React 19.2.3, componentes de função, sem biblioteca de componentes |
| Linguagem | TypeScript 5, `strict: true`, alias `@/*` para a raiz (`tsconfig.json`) |
| Estilo | Tailwind CSS 4 (`@tailwindcss/postcss`); tokens em `app/styles/foundation.css` (`@theme`) |
| Fontes | Pixelify Sans (títulos), Alegreya Sans (texto), JetBrains Mono (números), por `next/font/google` (hospedadas no próprio site) |
| Ícones | `lucide-react` (sem emoji em lugar nenhum) |
| Imagens | `next/image` para as imagens antigas; `ImagemDoJogo` (`<picture>` AVIF + WebP) para as prints novas; GIFs viraram pôster + animação WebP carregada no clique |
| Lint | ESLint 9, `eslint-config-next` (core-web-vitals + typescript) |
| Testes | `node --test` nativo do Node 24 (`tests/*.test.mjs`) |

Dependências de runtime: `next`, `react`, `react-dom`, `lucide-react` e `sharp` (este só nos
scripts de imagem).

## Pastas

```text
app/
  layout.tsx            fontes, top bar, <main id="conteudo">, rodapé, link "pular para o conteúdo"
  page.tsx              Início
  not-found.tsx         404 própria
  guias/
    layout.tsx          GuiaLayout: sidebar + conteúdo + índice "Nesta página"
    page.tsx            /guias: índice de todos os guias
    <guia>/page.tsx     uma linha: metadata do guia + componente da página
  historia/page.tsx     Comunidade (ainda no modelo antigo)
  styles/               foundation (tokens, base, caixa-item), motion, efeitos dos modelos antigos
components/
  shared/               TopBar, Busca, GuiaNavLista, SiteFooter, ImagemDoJogo, AnimacaoSobDemanda,
                        ClickableImagePreview, LazyYouTubeEmbed, GuideIntro, Efeitos (motor de
                        movimento), TransicaoDePagina, TextoAnimado
  (lib/previas.ts)      tópicos e tempo de leitura de cada guia, tirados do conteúdo, para a Início
  guias/                peças do modelo de guia: GuiaLayout, FichaGuia, DicaGsw, Termo,
                        TextoComTermos ([[termo]] e {{x, y, z}}), SecaoGuia, Figura, FiguraNoTamanho (print solta no
                        tamanho real), Galeria, Destaque (informação,
                        atenção, dica), Coordenada (copiável), RecursoExterno, TextoGlitch,
                        FimDoGuia, Breadcrumb, SeloVersao,
                        GuiaEmConstrucao
  <area>/pages|sections|data/   cada guia (todos os guias no modelo de Raids;
                                só a Comunidade segue no modelo antigo)
lib/
  site-content.ts       registro de guias e áreas: navegação, busca, redirects, metadata
  glossario.ts          termos do jogo com explicação própria (usados pelo <Termo>)
public/<area>/          mídia de cada área; prints novas em public/inicio/ e public/raids/prints/
scripts/                convert-to-webp.mjs, gif-para-webp.mjs
tests/                  rotas.test.mjs
```

## Rotas

| Rota | Página | Situação |
|---|---|---|
| `/` | `home/pages/HomePage` | Modelo novo |
| `/guias` | `app/guias/page.tsx` | Modelo novo |
| `/guias/raids` | `raids/pages/RaidsPage` | **Guia modelo** |
| `/guias/leveling`, `/guias/profissoes`, `/guias/montarias`, `/guias/lootrun`, `/guias/dungeons`, `/guias/world-events`, `/guias/silverbull-shares`, `/guias/modos-especiais`, `/guias/festivais` | `<area>/pages/*` | Modelo de Raids |
| `/historia/guild-house` | `guild-house/pages/GuildHousePage` | Página da Comunidade no formato de guia (`paginasDaComunidade` em `lib/site-content.ts`): índice e busca, sem a sidebar dos guias; mapa interativo (`GuildHouseMapa`); chamada na `/historia`. `/guias/guild-house` e `/guild-house` redirecionam |
| `/guias/sites-uteis` | `sites-uteis/pages/SitesUteisPage` | Modelo de Raids; grupo Ferramentas, com filtro por categoria (`SitesGuia`, cliente) |
| `/historia` | `history/pages/HistoryPage` | Modelo antigo (Comunidade, próxima etapa) |

As rotas antigas (`/raids`, `/lootrun`, `/professions`...) redirecionam com **308 permanente**
para `/guias/<guia>`. Os redirects saem do registro (`redirecionamentos` em `lib/site-content.ts`,
lidos pelo `next.config.ts`), e o teste garante que cada rota antiga aponta para um guia existente.

## Navegação

- **Top bar** (todas as páginas): Início, Guias, Comunidade, busca e Discord. No celular, menu em
  gaveta com as áreas e a lista de guias.
- **Sidebar** (dentro de `/guias/*`, exceto o índice `/guias`): guias por grupo, guia atual
  preenchido, selo "em breve" nos vazios.
- **"Nesta página"**: lista do registro (`guia.secoes`, caso de Raids) ou, nos guias antigos,
  montada no navegador a partir dos `<section>` com `<h2>`. Marca a seção visível mais interna.
  No celular vira uma barra fixa com a seção atual.
- **Busca** (Ctrl+K, `/` ou o botão da Início): `<dialog>` nativo; índice montado do registro
  (títulos, resumos, `palavrasChave`, seções e siglas). Sem servidor.

## Estado

Não há store nem contexto global.

- `useState` local nos componentes interativos (busca, menu, termo, índice, zoom, vídeo).
- **Onde parei**: `GuiaLayout` grava a seção visível no `localStorage` (`gsw:onde-parei:<rota>`)
  e oferece "Continuar de …" quando o leitor volta pelo topo. Leituras e escritas em try/catch.
- **Tema**: só escuro. O tema claro, o botão e o script de tema foram removidos.
- **Animação de entrada**: só a abertura de cada seção, 12 px e 360 ms; `prefers-reduced-motion`
  troca por opacidade em 120 ms.

## Conteúdo dos guias

- Texto, tabelas e caminhos de mídia em `components/<area>/data/*-content.ts`.
- Termos do jogo marcados no texto como `[[chave]]` ou `[[chave|texto exibido]]`; o
  `TextoComTermos` troca pela caixa de item do `<Termo>`. As chaves ficam em `lib/glossario.ts`.
- Cada guia declara no registro: `estado`, `versaoDoJogo`, `atualizadoEm`, `secoes` e
  `palavrasChave`.

## Integrações externas

Nenhuma API em tempo de execução.

- Miniaturas `i.ytimg.com` (liberadas em `images.remotePatterns`) e iframe `youtube.com/embed`,
  só depois do clique.
- Google Fonts baixadas no build pelo `next/font`.

## Configuração do Next (`next.config.ts`)

`poweredByHeader: false`; redirects do registro; cache de 1 ano em `/_next/static` e em arquivos
de mídia; cabeçalhos de segurança em todas as rotas. Não há CSP.

## Padrões de código

Ver `docs/PADROES.md`.

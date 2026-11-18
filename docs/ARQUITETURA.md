# Arquitetura

Estado em 18/11/2026, antes da reestruturação do front.

## Stack

| Camada | Escolha |
|---|---|
| Framework | Next.js 16.1.6, App Router, todas as rotas pré-renderizadas como estáticas (`○ Static` no build) |
| UI | React 19.2.3, componentes de função, sem biblioteca de componentes |
| Linguagem | TypeScript 5, `strict: true`, alias `@/*` para a raiz (`tsconfig.json`) |
| Estilo | Tailwind CSS 4 (`@tailwindcss/postcss`) + CSS global em `app/styles/` |
| Fontes | Geist e Geist Mono por `next/font/google` (`display: swap`) |
| Imagens | `next/image`; GIFs com `unoptimized` (o otimizador do Next quebra a animação) |
| Lint | ESLint 9, `eslint-config-next` (core-web-vitals + typescript) |
| Testes | `node --test` nativo do Node 24 (`tests/*.test.mjs`) |

Dependências de runtime: só `next`, `react`, `react-dom` e `sharp`.

## Pastas

```text
app/                    rotas (page.tsx de uma linha) + layout + globals.css
app/styles/             foundation, motion, theme-remaps, surface-effects, history-effects,
                        leveling-effects, hero-light
components/<area>/
  pages/                <Area>Page.tsx: monta Navbar, intro, seções e Footer
  sections/             blocos visuais
  data/                 <area>-content.ts: textos, listas, caminhos de mídia, tipos
components/shared/      peças usadas por várias áreas
lib/site-content.ts     navegação (menu e links de seção)
public/<area>/          mídia de cada área
scripts/                convert-to-webp.mjs
image-workbench/        input/ e output/ do conversor (fora do git)
tests/                  testes do node --test
```

Áreas em `components/`: `home`, `history`, `leveling`, `professions`, `mounts`, `festivals`,
`lootrun`, `silverbull-shares`, `special-modes`, `world-events`, `raids`, `dungeons`.

## Rotas

| Rota | Página | Situação |
|---|---|---|
| `/` | `home/pages/HomePage` | Pronta |
| `/historia` | `history/pages/HistoryPage` | Pronta (crônicas, membros, pilares, galeria, essência) |
| `/leveling` | `leveling/pages/LevelingPage` | Pronta |
| `/professions` | `professions/pages/ProfessionsPage` | Pronta |
| `/montarias` | `mounts/pages/MountsPage` | "Em desenvolvimento" |
| `/festivais` | `festivals/pages/FestivalsPage` | "Em desenvolvimento" |
| `/lootrun` | `lootrun/pages/LootrunPage` | Pronta |
| `/silverbull-shares` | `silverbull-shares/pages/SilverbullSharesPage` | Pronta |
| `/modos-especiais` | `special-modes/pages/SpecialModesPage` | Pronta |
| `/world-events` | `world-events/pages/WorldEventsPage` | Pronta |
| `/raids` | `raids/pages/RaidsPage` | Pronta |
| `/dungeons` | `dungeons/pages/DungeonsPage` | Pronta |

Nomes de rota misturam português e inglês (`/historia`, `/professions`); manter os existentes,
porque mudar quebra links compartilhados.

## Navegação

`lib/site-content.ts` define:

- `sitePageLinks`: todas as páginas;
- `navbarItems`: menu agrupado (Início, Guias › Progressão/Endgame/Especiais, Comunidade);
- `homeSectionLinks`, `historySectionLinks`: âncoras dentro da página.

`tests/rotas.test.mjs` garante que esses links e as pastas de `app/` batem.

## Componentes compartilhados

| Componente | Papel |
|---|---|
| `Navbar` | Menu desktop e mobile, dropdowns, atalho para seções da página atual (client) |
| `Footer` | Links do autor, do repositório e do Discord |
| `GuideIntro` | Cabeçalho padrão dos guias (client) |
| `InPageNavigation` | Navegação entre seções no mobile (client) |
| `AnimationInitializer` | Animação de entrada ao rolar e volta ao topo na troca de rota; montado no `layout` (client) |
| `ThemeToggle` | Alterna claro/escuro (client) |
| `LazyYouTubeEmbed` | Miniatura que só carrega o iframe do YouTube no clique (client) |
| `ClickableImagePreview` | Abre imagem em tela cheia (client) |

## Estado

Não há estado global, store nem contexto. O que existe:

- `useState` local em poucos componentes (embed tocando, modal da galeria, menu aberto);
- **tema**: `localStorage` (`gsw-theme`) + `data-theme` e classe `theme-dark`/`theme-light` no
  `<html>`. Um script inline no `layout` aplica o tema antes da pintura, para não piscar;
- **animação de entrada**: classes `reveal-on-scroll`/`visible` aplicadas pelo
  `AnimationInitializer`; `data-reveal-ignore` exclui um bloco, `data-reveal-delay` atrasa.

## Integrações externas

Nenhuma API. Só recursos de terceiros no navegador:

- miniaturas `i.ytimg.com` (liberadas em `images.remotePatterns` do `next.config.ts`) e iframe
  `youtube.com/embed`, carregado só no clique;
- Google Fonts, baixadas no build pelo `next/font` (não no navegador).

## Configuração do Next (`next.config.ts`)

- `poweredByHeader: false`;
- cache de 1 ano (`immutable`) em `/_next/static` e em arquivos de imagem e fonte;
- cabeçalhos de segurança em todas as rotas: `X-Frame-Options: DENY`, `nosniff`,
  `Referrer-Policy`, `Permissions-Policy`, `COOP`, `CORP` e outros. Não há CSP.

## Padrões de código

Ver `docs/PADROES.md`.

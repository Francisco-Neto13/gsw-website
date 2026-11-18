# Graph Report - gsw_lp  (2026-11-18)

## Corpus Check
- Corpus is ~48,508 words - fits in a single context window. You may not need a graph.

## Summary
- 748 nodes · 1444 edges · 28 communities (23 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.87)
- Token cost: 85,988 input · 0 output

## Community Hubs (Navigation)
- Guia de Raids
- Guia Silverbull Shares
- Paginas em construcao e Modos
- Guia de Lootrun
- Layout raiz e Dungeons
- Guia de Profissoes
- Guia de Leveling
- Guia de World Events
- Dependencias e lint
- Regras e documentacao
- Navegacao do site
- Workflow de deploy
- Pagina Inicio
- Historia e membros
- Config TypeScript
- Passos do job front
- Componentes e midia
- Workflow de CI
- Variaveis da CI
- Gatilhos da CI
- Permissoes da CI
- Job mesclar
- Job promover
- Tipos de CSS
- Config PostCSS

## God Nodes (most connected - your core abstractions)
1. `ClickableImagePreview()` - 35 edges
2. `next` - 33 edges
3. `Navbar()` - 30 edges
4. `Footer()` - 25 edges
5. `GuideIntro()` - 23 edges
6. `InPageNavigation()` - 23 edges
7. `LootrunMediaPlaceholder()` - 17 edges
8. `LootrunPage()` - 16 edges
9. `compilerOptions` - 16 edges
10. `SilverbullSharesPage()` - 15 edges

## Surprising Connections (you probably didn't know these)
- `npm run check (typecheck + lint + test + build)` --semantically_similar_to--> `ci.yml (jobs origem, front, seguranca, mesclar, promover)`  [INFERRED] [semantically similar]
  AGENTS.md → docs/CI-CD.md
- `Area structure pages/ + sections/ + data/ (data-driven sections)` --conceptually_related_to--> `GsW Website agent rules`  [INFERRED]
  docs/PADROES.md → AGENTS.md
- `Dungeons()` --calls--> `DungeonsPage()`  [EXTRACTED]
  app/dungeons/page.tsx → components/dungeons/pages/DungeonsPage.tsx
- `Festivais()` --calls--> `FestivalsPage()`  [EXTRACTED]
  app/festivais/page.tsx → components/festivals/pages/FestivalsPage.tsx
- `Historia()` --calls--> `HistoryPage()`  [EXTRACTED]
  app/historia/page.tsx → components/history/pages/HistoryPage.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Delivery pipeline: pre-push -> CI -> deploy gated by DEPLOY_HABILITADO -> Vercel** — docs_ci_cd_pre_push_hook, docs_ci_cd_ci_workflow, docs_ci_cd_deploy_workflow, docs_ci_cd_deploy_habilitado, docs_infraestrutura_vercel_hosting [EXTRACTED 1.00]
- **Route consistency contract: app routes, site-content links, rotas test** — agents_new_route_rule, docs_arquitetura_routes, docs_arquitetura_site_content, docs_arquitetura_rotas_test [INFERRED 0.85]

## Communities (28 total, 5 thin omitted)

### Community 0 - "Guia de Raids"
Cohesion: 0.05
Nodes (61): Raids(), cinfrasSilverbullImage, extras, guildRaidAspectDistribution, guildRaidAvailableImage, guildRaidCardTitles, guildRaidRewards, guildRaidsDescription (+53 more)

### Community 1 - "Guia Silverbull Shares"
Cohesion: 0.06
Nodes (58): SilverbullShares(), acquisitionCards, BombCard, bombCards, bombsIntro, bombStoreImage, bundlesStoreImage, chestStoreImage (+50 more)

### Community 2 - "Paginas em construcao e Modos"
Cohesion: 0.07
Nodes (42): Festivais(), ModosEspeciais(), Montarias(), festivalsIntroParagraphs, FestivalsPage(), FestivalsDevelopmentSection(), Era, History() (+34 more)

### Community 3 - "Guia de Lootrun"
Cohesion: 0.08
Nodes (45): Page(), lootrunAdvancedSystems, lootrunAdvancedSystemsIntro, LootrunBeacon, lootrunBeacons, lootrunBeaconsIntro, LootrunCamp, lootrunCamps (+37 more)

### Community 4 - "Layout raiz e Dungeons"
Cohesion: 0.07
Nodes (40): Dungeons(), geistMono, geistSans, metadata, RootLayout(), AccessMode, dungeonsAccessImages, dungeonsAccessIntro (+32 more)

### Community 5 - "Guia de Profissoes"
Cohesion: 0.07
Nodes (45): Professions(), bombTips, CraftingProfession, craftingProfessions, craftingXpTips, GatheringProfession, gatheringProfessions, GrindSpot (+37 more)

### Community 6 - "Guia de Leveling"
Cohesion: 0.08
Nodes (37): Leveling(), AbilityTreeRoute, buildLevelingItemGuideIconUrl(), buildLevelingItemGuideLink(), levelingAbilityTrees, levelingArmorNotes, levelingArmorPieces, levelingBuildHighlights (+29 more)

### Community 7 - "Guia de World Events"
Cohesion: 0.09
Nodes (35): WorldEvents(), annihilationImages, annihilationPartyTips, annihilationSunTips, annihilationVideo, ImageCard, InfoCard, mechanicsCards (+27 more)

### Community 8 - "Dependencias e lint"
Cohesion: 0.06
Nodes (40): eslintConfig, dependencies, next@16.1.6, react@19.2.3, react-dom@19.2.3, sharp@^0.34.4, devDependencies, eslint@^9 (+32 more)

### Community 9 - "Regras e documentacao"
Cohesion: 0.06
Nodes (30): GsW Website agent rules, npm run check (typecheck + lint + test + build), CLAUDE.md imports AGENTS.md, Architecture overview, Next.js 16 App Router, all routes static, tests/rotas.test.mjs (navigation vs app routes), Routes table (/, /historia, /leveling, /professions, /montarias, /festivais, /lootrun, /silverbull-shares, /modos-especiais, /world-events, /raids, /dungeons), lib/site-content.ts (sitePageLinks, navbarItems, section links) (+22 more)

### Community 10 - "Navegacao do site"
Cohesion: 0.07
Nodes (30): communityLinks, guideEndgameLinks, guideProgressionLinks, guideSpecialLinks, historySectionLinks, homeSectionLinks, NavbarItem, navbarItems (+22 more)

### Community 11 - "Workflow de deploy"
Cohesion: 0.06
Nodes (35): concurrency, cancel-in-progress, group, env, if, name, runs-on, steps (+27 more)

### Community 12 - "Pagina Inicio"
Cohesion: 0.16
Nodes (17): Home(), HeroSpotlight, homeAboutContent, homeAboutShowcase, homeContentSection, HomeGuideCard, homeGuideCards, homeHeroContent (+9 more)

### Community 13 - "Historia e membros"
Cohesion: 0.17
Nodes (13): Historia(), GalleryPhoto, galleryPhotos, Member, members, HistoryPage(), Essence(), GallerySection() (+5 more)

### Community 14 - "Config TypeScript"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 15 - "Passos do job front"
Cohesion: 0.18
Nodes (17): name, runs-on, steps, front, steps, steps, steps, steps (+9 more)

### Community 16 - "Componentes e midia"
Cohesion: 0.18
Nodes (9): AnimationInitializer (reveal-on-scroll), LazyYouTubeEmbed, next.config.ts (1-year immutable cache, security headers, no CSP), Shared components (Navbar, Footer, GuideIntro, InPageNavigation, AnimationInitializer, ThemeToggle, LazyYouTubeEmbed, ClickableImagePreview), Media pipeline (image-workbench + convert:webp, sharp), AnimationInitializer expensive on scroll, Heavy Lootrun GIFs (91 MB) -> replace with video, Missing Content-Security-Policy (+1 more)

### Community 17 - "Workflow de CI"
Cohesion: 0.17
Nodes (11): concurrency, cancel-in-progress, group, jobs, origem, seguranca, name, name (+3 more)

### Community 18 - "Variaveis da CI"
Cohesion: 0.22
Nodes (9): BASE, EVENTO, GH_TOKEN, NEXT_TELEMETRY_DISABLED, ORIGEM, PR, REPO, TESTADO (+1 more)

### Community 19 - "Gatilhos da CI"
Cohesion: 0.29
Nodes (7): on, pull_request, push, workflow_dispatch, branches, types, branches

### Community 20 - "Permissoes da CI"
Cohesion: 0.40
Nodes (6): permissions, permissions, actions, contents, pull-requests, permissions

### Community 21 - "Job mesclar"
Cohesion: 0.40
Nodes (5): mesclar, if, name, needs, runs-on

### Community 22 - "Job promover"
Cohesion: 0.40
Nodes (5): promover, if, name, needs, runs-on

## Knowledge Gaps
- **17 isolated node(s):** `npm run check (typecheck + lint + test + build)`, `CLAUDE.md imports AGENTS.md`, `Silverbull Shares (guild economy)`, `Closed copyright license (LICENSE)`, `Next.js 16 App Router, all routes static` (+12 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 242 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Layout raiz e Dungeons` to `Guia de Raids`, `Guia Silverbull Shares`, `Paginas em construcao e Modos`, `Guia de Lootrun`, `Guia de Profissoes`, `Guia de Leveling`, `Guia de World Events`, `Dependencias e lint`, `Pagina Inicio`, `Historia e membros`?**
  _High betweenness centrality (0.201) - this node is a cross-community bridge._
- **What connects `npm run check (typecheck + lint + test + build)`, `CLAUDE.md imports AGENTS.md`, `Silverbull Shares (guild economy)` to the rest of the system?**
  _17 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Guia de Raids` be split into smaller, more focused modules?**
  _Cohesion score 0.054244306418219465 - nodes in this community are weakly interconnected._
- **Why does `ClickableImagePreview()` connect `Guia de Profissoes` to `Guia de Raids`, `Guia Silverbull Shares`, `Paginas em construcao e Modos`, `Guia de Lootrun`, `Layout raiz e Dungeons`, `Guia de Leveling`, `Guia de World Events`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Should `Guia Silverbull Shares` be split into smaller, more focused modules?**
  _Cohesion score 0.06128364389233954 - nodes in this community are weakly interconnected._
- **Why does `Navbar()` connect `Paginas em construcao e Modos` to `Guia de Raids`, `Guia Silverbull Shares`, `Guia de Lootrun`, `Layout raiz e Dungeons`, `Guia de Profissoes`, `Guia de Leveling`, `Guia de World Events`, `Pagina Inicio`, `Historia e membros`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Should `Paginas em construcao e Modos` be split into smaller, more focused modules?**
  _Cohesion score 0.07188778492109878 - nodes in this community are weakly interconnected._
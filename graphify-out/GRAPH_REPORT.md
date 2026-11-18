# Graph Report - gsw_lp  (2026-11-18)

## Corpus Check
- 133 files · ~72,917 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: .css 8, (none) 3, .ico 1)

## Summary
- 1051 nodes · 2099 edges · 38 communities (35 shown, 3 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 146 edges (avg confidence: 0.84)
- Token cost: 263,751 input · 0 output

## Community Hubs (Navigation)
- Paginas em construcao e Modos
- Guia de Raids
- Guia Silverbull Shares
- Guia de Lootrun
- Guia de Profissoes
- Guia de Dungeons
- Variaveis e jobs da CI
- Guia de Leveling
- Revisao de design (critique)
- Guia de World Events
- Regras do AGENTS.md
- Navegacao e rotas
- Inventario de conteudo
- Workflow de deploy
- Dependencias e lint
- Arquitetura documentada
- Auditoria de desempenho
- Creditos e licencas
- Historia e membros
- Config TypeScript
- Contraste e animacao
- Galeria e rodape
- Direcao visual proposta
- Layout raiz e fontes
- Pendencias do redesign
- Diagnostico consolidado
- Integridade e padroes repetidos
- Produto (PRODUCT.md)
- Navegacao e mapa do guia
- Tema claro por remap
- Correcoes de conteudo
- Nota da auditoria
- Detector e hierarquia
- Modelo de pagina de guia
- Componentes compartilhados
- Tipos de CSS
- Config PostCSS

## God Nodes (most connected - your core abstractions)
1. `Auditoria técnica gsw_lp (Impeccable audit)` - 36 edges
2. `ClickableImagePreview()` - 35 edges
3. `next` - 33 edges
4. `Diagnóstico do front (Impeccable)` - 33 edges
5. `Assessment A: Revisão de design` - 31 edges
6. `Navbar()` - 30 edges
7. `Footer()` - 25 edges
8. `Inventário do conteúdo atual` - 25 edges
9. `GuideIntro()` - 23 edges
10. `InPageNavigation()` - 23 edges

## Surprising Connections (you probably didn't know these)
- `Unofficial fan site constraint` --semantically_similar_to--> `Unofficial site notice (footer text) with real contact`  [INFERRED] [semantically similar]
  PRODUCT.md → docs/CREDITOS.md
- `Area structure pages/ + sections/ + data/ (data-driven sections)` --conceptually_related_to--> `GsW Website agent rules (AGENTS.md)`  [INFERRED]
  docs/PADROES.md → AGENTS.md
- `Graph update: post-commit hook for code, /graphify --update for docs` --semantically_similar_to--> `Query the Graphify graph before exploring files`  [INFERRED] [semantically similar]
  docs/GRAFO.md → AGENTS.md
- `Never copy wiki/official text or use official art; never call site official` --semantically_similar_to--> `Own text: facts rewritten, source linked in Fontes section`  [INFERRED] [semantically similar]
  AGENTS.md → docs/CREDITOS.md
- `Caixa de Item (proposed visual direction)` --implements--> `Principle: Do jogo, nao sobre o jogo`  [INFERRED]
  docs/redesign/direcao-visual.md → PRODUCT.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Delivery pipeline: pre-push -> CI -> deploy gated by DEPLOY_HABILITADO -> Vercel** — docs_ci_cd_pre_push_hook, docs_ci_cd_ci_workflow, docs_ci_cd_deploy_workflow, docs_ci_cd_deploy_habilitado, docs_infraestrutura_vercel_hosting [EXTRACTED 1.00]
- **Three-level navigation: top bar, guide sidebar, 'Nesta pagina' index** — docs_redesign_navegacao_three_level_model, docs_redesign_navegacao_top_bar, docs_redesign_navegacao_sidebar_dos_guias, docs_redesign_navegacao_nesta_pagina_index [EXTRACTED 1.00]
- **Guide page skeleton components** — docs_redesign_estrutura_do_guia_guide_page_template, docs_redesign_navegacao_breadcrumb, docs_redesign_direcao_visual_ficha_do_guia, docs_redesign_estrutura_do_guia_dica_da_gsw, docs_redesign_navegacao_version_badge [INFERRED 0.85]
- **Falhas do tema claro por remap !important** — docs_redesign_diagnostico_p10_tema_claro_legendas, docs_redesign_impeccable_audit_p1_tema_claro_texto_escuro, docs_redesign_impeccable_critique_detector_legendas_galeria_tema_claro, docs_redesign_impeccable_critique_design_p2_tema_claro_inversao, app_styles_theme_remaps [INFERRED 0.85]
- **Peso de mídia da Lootrun (GIFs unoptimized)** — docs_redesign_diagnostico_p1_lootrun_peso, docs_redesign_impeccable_audit_p0_lootrun_110mb, docs_redesign_inventario_conteudo_gifs_lootrun_93mb, components_lootrun_sections_lootrunmediaplaceholder [INFERRED 0.85]
- **Own-text policy against copying wiki/official text** — docs_creditos_own_text_rule, docs_creditos_wynncraft_wiki_license, docs_redesign_fontes_e_licencas_why_not_adapt_wiki, agents_no_wiki_copy_rule [INFERRED 0.85]
- **Route consistency contract: app routes, site-content links, rotas test** — agents_new_route_rule, docs_arquitetura_routes, docs_arquitetura_site_content, docs_arquitetura_rotas_test [INFERRED 0.85]
- **Violeta #7116ad como texto reprova contraste (3 relatórios)** — docs_redesign_diagnostico_p3_violeta_contraste, docs_redesign_impeccable_audit_p1_violeta_contraste, docs_redesign_impeccable_critique_detector_regra_low_contrast, docs_redesign_impeccable_critique_design_p1_tipografia_sem_identidade, app_styles_foundation [INFERRED 0.85]

## Communities (38 total, 3 thin omitted)

### Community 0 - "Paginas em construcao e Modos"
Cohesion: 0.05
Nodes (58): Festivais(), ModosEspeciais(), Montarias(), Home(), festivalsIntroParagraphs, FestivalsPage(), FestivalsDevelopmentSection(), Era (+50 more)

### Community 1 - "Guia de Raids"
Cohesion: 0.05
Nodes (63): Raids(), cinfrasSilverbullImage, extras, guildRaidAspectDistribution, guildRaidAvailableImage, guildRaidCardTitles, guildRaidRewards, guildRaidsDescription (+55 more)

### Community 2 - "Guia Silverbull Shares"
Cohesion: 0.06
Nodes (58): SilverbullShares(), acquisitionCards, BombCard, bombCards, bombsIntro, bombStoreImage, bundlesStoreImage, chestStoreImage (+50 more)

### Community 3 - "Guia de Lootrun"
Cohesion: 0.08
Nodes (45): Page(), lootrunAdvancedSystems, lootrunAdvancedSystemsIntro, LootrunBeacon, lootrunBeacons, lootrunBeaconsIntro, LootrunCamp, lootrunCamps (+37 more)

### Community 4 - "Guia de Profissoes"
Cohesion: 0.07
Nodes (44): Professions(), bombTips, CraftingProfession, craftingProfessions, craftingXpTips, GatheringProfession, gatheringProfessions, GrindSpot (+36 more)

### Community 5 - "Guia de Dungeons"
Cohesion: 0.08
Nodes (39): Dungeons(), AccessMode, dungeonsAccessImages, dungeonsAccessIntro, dungeonsAccessModes, dungeonsExtraHighlights, dungeonsExtras, dungeonsExtrasIntro (+31 more)

### Community 6 - "Variaveis e jobs da CI"
Cohesion: 0.06
Nodes (49): BASE, EVENTO, GH_TOKEN, NEXT_TELEMETRY_DISABLED, ORIGEM, PR, REPO, TESTADO (+41 more)

### Community 7 - "Guia de Leveling"
Cohesion: 0.07
Nodes (41): Leveling(), AbilityTreeRoute, buildLevelingItemGuideIconUrl(), buildLevelingItemGuideLink(), levelingAbilityTrees, levelingArmorNotes, levelingArmorPieces, levelingBuildHighlights (+33 more)

### Community 8 - "Revisao de design (critique)"
Cohesion: 0.06
Nodes (45): Funciona: conteúdo próprio (35 POVs, GIFs, Dica GsW), P1: site se diz oficial, sem aviso de fã, Queixa: pouca ligação com o jogo, Carga cognitiva: 5 de 8 falhas, /impeccable clarify, /impeccable layout, Assessment A: Revisão de design, Grade 2x2 com número fantasma (+37 more)

### Community 9 - "Guia de World Events"
Cohesion: 0.09
Nodes (35): WorldEvents(), annihilationImages, annihilationPartyTips, annihilationSunTips, annihilationVideo, ImageCard, InfoCard, mechanicsCards (+27 more)

### Community 10 - "Regras do AGENTS.md"
Cohesion: 0.05
Nodes (32): .gitattributes, .graphifyignore, CI/CD (ci.yml, deploy.yml, pre-push hook), GsW Website agent rules (AGENTS.md), npm run check (typecheck + lint + test + build), Stack: Node 24, Next.js 16.1.6, React 19.2.3, TS 5 strict, Tailwind 4, ESLint 9, sharp 0.34, CLAUDE.md imports AGENTS.md, docs/ARQUITETURA.md (+24 more)

### Community 11 - "Navegacao e rotas"
Cohesion: 0.06
Nodes (32): communityLinks, guideEndgameLinks, guideProgressionLinks, guideSpecialLinks, historySectionLinks, homeSectionLinks, NavbarItem, navbarItems (+24 more)

### Community 12 - "Inventario de conteudo"
Cohesion: 0.08
Nodes (38): Notas de página /montarias, Área Dungeons, Área Festivais (placeholder), Área História, Área Home, Área Leveling, Área Lootrun, Área Modos Especiais (+30 more)

### Community 13 - "Workflow de deploy"
Cohesion: 0.06
Nodes (35): concurrency, cancel-in-progress, group, env, if, name, runs-on, steps (+27 more)

### Community 14 - "Dependencias e lint"
Cohesion: 0.07
Nodes (33): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.1.6, gifsicle@^7.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @types/node@^20 (+25 more)

### Community 15 - "Arquitetura documentada"
Cohesion: 0.08
Nodes (23): Architecture overview, Next.js 16 App Router, all routes static, tests/rotas.test.mjs (navigation vs app routes), Routes table (/, /historia, /leveling, /professions, /montarias, /festivais, /lootrun, /silverbull-shares, /modos-especiais, /world-events, /raids, /dungeons), lib/site-content.ts (sitePageLinks, navbarItems, section links), CI/CD documentation, ci.yml (jobs origem, front, seguranca, mesclar, promover), DEPLOY_HABILITADO repository variable (+15 more)

### Community 16 - "Auditoria de desempenho"
Cohesion: 0.14
Nodes (22): history-effects.css, Lighthouse celular simulado (4 rotas), P1: LCP da Início 8,0 s, Funciona: sem erros de console, sem overflow a 390 px, /impeccable optimize, Dimensão Performance, Auditoria técnica gsw_lp (Impeccable audit), Lighthouse 12.8.2 (mobile) (+14 more)

### Community 17 - "Creditos e licencas"
Cohesion: 0.16
Nodes (14): Creditos, fontes e licencas (permanent credits register), Icons and typography candidates (Lucide, game-icons.net, Faithful, Google Fonts), Item images from official Wynncraft CDN (tolerated, unlicensed), Minecraft Usage Guidelines, Unofficial site notice (footer text) with real contact, Wynncraft API terms (data fetched at build, rate limit), Wynncraft Terms of Service, Wynncraft Wiki CC BY-NC-SA 4.0 (images not CC) (+6 more)

### Community 18 - "Historia e membros"
Cohesion: 0.18
Nodes (14): Historia(), Member, members, HistoryPage(), Essence(), GallerySection(), History(), createFallbackAvatar() (+6 more)

### Community 19 - "Config TypeScript"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "Contraste e animacao"
Cohesion: 0.21
Nodes (15): foundation.css, motion.css, Falsos positivos do detector descartados, P1: violeta da marca como texto 2,0-2,4:1, P1: animação ignora prefers-reduced-motion, /impeccable animate, [P1] Sem prefers-reduced-motion no reveal e scroll suave, [P1] Texto roxo da marca com contraste 2,25:1 (+7 more)

### Community 21 - "Galeria e rodape"
Cohesion: 0.21
Nodes (14): GalleryPhoto, galleryPhotos, P2: ícones do rodapé sem nome; alvos 20-32 px, P1: galeria /historia sem teclado; modais sem foco, /impeccable harden, Dimensão Accessibility, [P1] Diálogos não gerenciam o foco, [P1] Galeria /historia inacessível pelo teclado (+6 more)

### Community 22 - "Direcao visual proposta"
Cohesion: 0.18
Nodes (13): docs/redesign/diagnostico.md, Category default (Maxroll/Icy Veins style dark docs), Direcao visual (proposal), Alternative: Obsidiana e Encantamento, Alternative: Percurso (numbered route), Rarity colors as functional language, Termo do jogo (glossary term opening an item box), Rarity colors follow Minecraft color codes (only Mythic confirmed) (+5 more)

### Community 23 - "Layout raiz e fontes"
Cohesion: 0.18
Nodes (14): app/globals.css, geistMono, geistSans, metadata, RootLayout(), AnimationInitializer(), P1: fonte declarada nunca aplicada, Queixa: fonte fraca (Geist nunca aplicada) (+6 more)

### Community 24 - "Pendencias do redesign"
Cohesion: 0.16
Nodes (11): Empty pages /montarias and /festivais, Geist font loaded but never applied (system-ui), Keyboard and focus gaps (gallery, mobile menu, modals), Routes in two languages (/historia, /professions), Navbar.tsx with 455 lines: split desktop/mobile, No Content-Security-Policy in next.config.ts, Pendencias (open issues list), Per-page SEO (metadata, sitemap, robots, OG, not-found) (+3 more)

### Community 25 - "Diagnostico consolidado"
Cohesion: 0.22
Nodes (13): Arquitetura de conteúdo pages/sections/data, Critério de aceite da Fase 3, Funciona: desempenho bom fora da mídia (Lighthouse 91-94), direcao-visual.md (direção visual), Diagnóstico do front (Impeccable), O que não foi testado (leitor de tela, dispositivo, zoom 200%), P2: 404 padrão do Next em inglês, P0: /lootrun 5,5 MB ao abrir e 112 MB rolando (+5 more)

### Community 26 - "Integridade e padroes repetidos"
Cohesion: 0.20
Nodes (12): surface-effects.css, Cabeçalho eyebrow+h2 copiado 49 vezes, Dimensão Implementation Integrity, Hover 3D por seletor estrutural, Implementation Integrity: passa com ressalvas, [P3] Tamanhos de fonte fora da escala (9-11px), Padrão: comportamento por seletor estrutural, Padrão: lógica duplicada no layout compartilhado (+4 more)

### Community 27 - "Produto (PRODUCT.md)"
Cohesion: 0.20
Nodes (8): Heavy logo (282 KB) and default English 404, Contained palette (violet-tinted darks, action violet), Accessibility minimum WCAG 2.1 AA + prefers-reduced-motion, Brand: GsW logo, violet #7116AD and charcoal #191819, GsW Product definition (PRODUCT.md), Positioning: pt-BR guide with own prints/POVs, step by step, Users: Brazilian Wynncraft players and GsW guild members, public/icon.webp

### Community 28 - "Navegacao e mapa do guia"
Cohesion: 0.20
Nodes (9): AnimationInitializer expensive on scroll, Motion tokens and reduced motion, Guide map (Comecando, Progressao, Equipamento, Endgame, Economia, Guildas, Especiais), Guildas group (guilds, territories, wars; live API data at build), /comunidade hub (history, members, gallery, Shares, Discord), Indice 'Nesta pagina' (scroll-spy), Search palette (Ctrl+K, build-time index via Pagefind or JSON), Sidebar dos guias (+1 more)

### Community 29 - "Tema claro por remap"
Cohesion: 0.38
Nodes (10): theme-remaps.css, P2: tema claro, legendas escuras sobre preto, Queixa: modo claro feio (inversão !important), /impeccable colorize, [P1] Tema claro: texto escuro sobre gradiente preto, Padrão: tema claro por remap de classes com !important, [P2] Tema claro é inversão automática que apaga a marca, Bug: legendas da galeria ilegíveis no tema claro (+2 more)

### Community 30 - "Correcoes de conteudo"
Cohesion: 0.24
Nodes (9): Heavy Lootrun GIFs (16 GIFs, 91 MB) to video, Pending: replace 'Guia Oficial' and add unofficial notice, Wrong game data (beacons, raid levels, gambits, dungeons, accents), P0 content corrections accompanying redesign, Estrutura do guia completo e plano de conteudo, Suggested order for new pages (Montarias first), Prints: keep or replace per area, Content sources for the full guide (news, item guide, classes, map, wiki) (+1 more)

### Community 31 - "Nota da auditoria"
Cohesion: 0.20
Nodes (10): Audit Health Score 11/20, /impeccable adapt, /impeccable document, /impeccable polish, Dimensão Responsive Design, Dimensão Theming, [P2] Alvos de toque pequenos nos controles fixos, [P3] Logo do navbar não leva à home (+2 more)

### Community 32 - "Detector e hierarquia"
Cohesion: 0.25
Nodes (9): P2: texto 9-10 px; saltos H2->H4, [P2] Hierarquia de headings pula níveis em /historia, impeccable detect 4.8.1, ai-color-palette (11+1), skipped-heading (4), straggler/line-length/unbalanced-heading, undersized-ui-text (134), ai-color-palette em Pillars.tsx (gradiente purple/pink) (+1 more)

### Community 33 - "Modelo de pagina de guia"
Cohesion: 0.25
Nodes (6): Ficha do guia (item-box guide card), Dica da GsW (guild opinion highlight block), Guide data fields (versaoDoJogo, atualizadoEm, nivelRecomendado, fontes[], estado), Breadcrumb (Guias > Endgame > Raids), /guias index route, Version and date badge ('Atualizado para a 2.2.4')

### Community 34 - "Componentes compartilhados"
Cohesion: 0.33
Nodes (5): AnimationInitializer (reveal-on-scroll), LazyYouTubeEmbed, next.config.ts (1-year immutable cache, security headers, no CSP), Shared components (Navbar, Footer, GuideIntro, InPageNavigation, AnimationInitializer, ThemeToggle, LazyYouTubeEmbed, ClickableImagePreview), Media pipeline (image-workbench + convert:webp, sharp)

## Ambiguous Edges - Review These
- `AnimationInitializer expensive on scroll` → `Indice 'Nesta pagina' (scroll-spy)`  [AMBIGUOUS]
  docs/redesign/navegacao.md · relation: conceptually_related_to

## Knowledge Gaps
- **69 isolated node(s):** `Stack: Node 24, Next.js 16.1.6, React 19.2.3, TS 5 strict, Tailwind 4, ESLint 9, sharp 0.34`, `docs/INFRAESTRUTURA.md`, `docs/ARQUITETURA.md`, `CLAUDE.md imports AGENTS.md`, `Users: Brazilian Wynncraft players and GsW guild members` (+64 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 292 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GsW Website agent rules (AGENTS.md)` connect `Regras do AGENTS.md` to `Produto (PRODUCT.md)`, `Navegacao e rotas`, `Arquitetura documentada`, `Layout raiz e fontes`?**
  _High betweenness centrality (0.261) - this node is a cross-community bridge._
- **What connects `Stack: Node 24, Next.js 16.1.6, React 19.2.3, TS 5 strict, Tailwind 4, ESLint 9, sharp 0.34`, `docs/INFRAESTRUTURA.md`, `docs/ARQUITETURA.md` to the rest of the system?**
  _69 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Paginas em construcao e Modos` be split into smaller, more focused modules?**
  _Cohesion score 0.05185185185185185 - nodes in this community are weakly interconnected._
- **Why does `next` connect `Guia de Dungeons` to `Paginas em construcao e Modos`, `Guia de Raids`, `Guia Silverbull Shares`, `Guia de Lootrun`, `Guia de Profissoes`, `Guia de Leveling`, `Guia de World Events`, `Dependencias e lint`, `Historia e membros`, `Contraste e animacao`, `Galeria e rodape`, `Layout raiz e fontes`, `Pendencias do redesign`?**
  _High betweenness centrality (0.178) - this node is a cross-community bridge._
- **Should `Guia de Raids` be split into smaller, more focused modules?**
  _Cohesion score 0.05251141552511415 - nodes in this community are weakly interconnected._
- **Why does `CI/CD (ci.yml, deploy.yml, pre-push hook)` connect `Regras do AGENTS.md` to `Workflow de deploy`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `AnimationInitializer expensive on scroll` and `Indice 'Nesta pagina' (scroll-spy)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
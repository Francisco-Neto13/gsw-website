# Graph Report - gsw_lp  (2026-11-18)

## Corpus Check
- 154 files · ~81,635 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: .css 6, (none) 3, .ico 1)

## Summary
- 1204 nodes · 2395 edges · 64 communities (60 shown, 4 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 139 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `141edb1f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- raids-content.ts
- silverbull-shares-content.ts
- lootrun-content.ts
- professions-content.ts
- env
- leveling-content.ts
- dungeons-content.ts
- world-events-content.ts
- Inventário do conteúdo atual
- Assessment A: Revisão de design
- DESIGN.md — Design System GsW
- Auditoria técnica gsw_lp (Impeccable audit)
- site-content.ts
- HistoryPage.tsx
- next
- Critique Assessment B: detector + navegador
- special-modes-content.ts
- GallerySection.tsx
- package.json
- compilerOptions
- guiaHref()
- CI/CD
- app/layout.tsx
- Diagnóstico do front (Impeccable)
- AGENTS.md — regras para agentes
- Créditos, fontes e licenças
- [P1] Sem prefers-reduced-motion no reveal e scro
- Pendências
- GuiaEmConstrucao.tsx
- HomePage.tsx
- GuideIntro.tsx
- deploy
- convert-to-webp.mjs
- Superfície app-guias (Impeccable)
- Navegacao proposta
- Estrutura do guia completo e plano de conteudo
- GsW Product definition (PRODUCT.md)
- [P0] /lootrun transfere ~110 MB de mídia
- [P1] Tema claro: texto escuro sobre gradiente pr
- Caixa de Item (proposed visual direction)
- Infraestrutura
- Sidebar dos guias
- scripts
- Grafo do projeto (Graphify) doc
- Mapa das pastas
- GuiaLayout.tsx
- guiaHref
- Padrões
- deploy.yml
- env
- dependencies
- Redesign: proposta (Fase 2)
- on
- dry_run
- gif-para-webp.mjs
- eslint.config.mjs
- Caixa de Item (componente assinatura)
- Cores de raridade (Normal, Unique, Rare, Legendary, Fabled, Mythic)
- Item image and icon options (own prints, CDN, AP
- Game guides (Lootrun, Dungeons, Raids, World Eve
- global.d.ts
- postcss.config.mjs
- CLAUDE.md imports AGENTS.md
- Documentos: diagnostico, direcao-visual, navegacao, estrutura-do-guia, inventario-conteudo, fontes-e-licencas

## God Nodes (most connected - your core abstractions)
1. `DESIGN.md — Design System GsW` - 44 edges
2. `next` - 40 edges
3. `Auditoria técnica gsw_lp (Impeccable audit)` - 36 edges
4. `Estrutura de pastas` - 35 edges
5. `Diagnóstico do front (Impeccable)` - 33 edges
6. `Assessment A: Revisão de design` - 31 edges
7. `AGENTS.md — regras para agentes` - 25 edges
8. `Inventário do conteúdo atual` - 25 edges
9. `ClickableImagePreview()` - 20 edges
10. `react` - 19 edges

## Surprising Connections (you probably didn't know these)
- `Onde parei em localStorage (gsw:onde-parei:<rota>)` --semantically_similar_to--> `Onde parei / "Continuar de"`  [INFERRED] [semantically similar]
  docs/ARQUITETURA.md → DESIGN.md
- `Padrão de commits (resumo, notas, escopo, sem coautor)` --semantically_similar_to--> `Formato de commit type(scope) em inglês`  [INFERRED] [semantically similar]
  docs/PADROES.md → AGENTS.md
- `Nunca usar ícones/imagens da CDN oficial da Wynncraft sem autorização` --semantically_similar_to--> `Decisão do dono: só arte própria até autorização escrita da Wynncraft`  [INFERRED] [semantically similar]
  AGENTS.md → docs/CREDITOS.md
- `Estilo: tokens, bg-gsw só preenchimento, Pixelify >= 20px, 60ch` --semantically_similar_to--> `The Fill-Only Rule`  [INFERRED] [semantically similar]
  docs/PADROES.md → DESIGN.md
- `Fluxo branch -> develop -> main -> deploy (desligado)` --semantically_similar_to--> `Fluxo de branches com merge e promoção automáticos`  [INFERRED] [semantically similar]
  AGENTS.md → docs/CI-CD.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Sistema Caixa de Item (ficha, termo, tokens da caixa)** — design_componente_caixa_de_item, design_ficha_do_guia, design_termo_do_jogo, design_token_caixa, design_token_caixa_fora, _impeccable_surfaces_app_guias_thesis_caixa_de_item [EXTRACTED 1.00]
- **Pipeline branch -> develop -> main com hook, CI e deploy travado** — docs_ci_cd_fluxo_de_branches, docs_ci_cd_jobs_ci, docs_ci_cd_hook_pre_push, docs_ci_cd_deploy_vercel_obsoleto, docs_ci_cd_deploy_habilitado [EXTRACTED 1.00]
- **Three-level navigation: top bar, guide sidebar, 'Nesta pagina' index** — docs_redesign_navegacao_three_level_model, docs_redesign_navegacao_top_bar, docs_redesign_navegacao_sidebar_dos_guias, docs_redesign_navegacao_nesta_pagina_index [EXTRACTED 1.00]
- **Guide page skeleton components** — docs_redesign_estrutura_do_guia_guide_page_template, docs_redesign_navegacao_breadcrumb, docs_redesign_direcao_visual_ficha_do_guia, docs_redesign_estrutura_do_guia_dica_da_gsw, docs_redesign_navegacao_version_badge [INFERRED 0.85]
- **Falhas do tema claro por remap !important** — docs_redesign_diagnostico_p10_tema_claro_legendas, docs_redesign_impeccable_audit_p1_tema_claro_texto_escuro, docs_redesign_impeccable_critique_detector_legendas_galeria_tema_claro, docs_redesign_impeccable_critique_design_p2_tema_claro_inversao, app_styles_theme_remaps [INFERRED 0.85]
- **Peso de mídia da Lootrun (GIFs unoptimized)** — docs_redesign_diagnostico_p1_lootrun_peso, docs_redesign_impeccable_audit_p0_lootrun_110mb, docs_redesign_inventario_conteudo_gifs_lootrun_93mb, components_lootrun_sections_lootrunmediaplaceholder [INFERRED 0.85]
- **Regras de licença: texto próprio, só arte própria, sem marcas alheias** — docs_creditos_texto_proprio, docs_creditos_decisao_so_arte_propria, docs_creditos_sem_marcas_alheias, agents_nunca_cdn_oficial, agents_nunca_copiar_wiki [INFERRED 0.85]
- **Violeta #7116ad como texto reprova contraste (3 relatórios)** — docs_redesign_diagnostico_p3_violeta_contraste, docs_redesign_impeccable_audit_p1_violeta_contraste, docs_redesign_impeccable_critique_detector_regra_low_contrast, docs_redesign_impeccable_critique_design_p1_tipografia_sem_identidade, app_styles_foundation [INFERRED 0.85]

## Communities (64 total, 4 thin omitted)

### Community 0 - "raids-content.ts"
Cohesion: 0.06
Nodes (68): metadata, Pagina(), DicaGsw(), Figura(), FiguraProps, FimDoGuia(), SecaoGuia(), SecaoGuiaProps (+60 more)

### Community 1 - "silverbull-shares-content.ts"
Cohesion: 0.06
Nodes (61): metadata, Pagina(), acquisitionCards, BombCard, bombCards, bombsIntro, bombStoreImage, bundlesStoreImage (+53 more)

### Community 2 - "lootrun-content.ts"
Cohesion: 0.07
Nodes (48): metadata, Pagina(), lootrunAdvancedSystems, lootrunAdvancedSystemsIntro, LootrunBeacon, lootrunBeacons, lootrunBeaconsIntro, lootrunBeaconsRegras (+40 more)

### Community 3 - "professions-content.ts"
Cohesion: 0.06
Nodes (48): metadata, Pagina(), bombTips, CraftingProfession, craftingProfessions, craftingXpTips, GatheringProfession, gatheringProfessions (+40 more)

### Community 4 - "env"
Cohesion: 0.06
Nodes (49): BASE, EVENTO, GH_TOKEN, NEXT_TELEMETRY_DISABLED, ORIGEM, PR, REPO, TESTADO (+41 more)

### Community 5 - "leveling-content.ts"
Cohesion: 0.07
Nodes (42): metadata, Pagina(), AbilityTreeRoute, buildLevelingItemGuideIconUrl(), buildLevelingItemGuideLink(), levelingAbilityTrees, levelingArmorNotes, levelingArmorPieces (+34 more)

### Community 6 - "dungeons-content.ts"
Cohesion: 0.09
Nodes (36): metadata, Pagina(), AccessMode, DungeonDaLista, dungeonsAccessImages, dungeonsAccessIntro, dungeonsAccessModes, dungeonsCorrompidas (+28 more)

### Community 7 - "world-events-content.ts"
Cohesion: 0.09
Nodes (35): metadata, Pagina(), annihilationImages, annihilationPartyTips, annihilationSunTips, annihilationVideo, ImageCard, InfoCard (+27 more)

### Community 8 - "Inventário do conteúdo atual"
Cohesion: 0.08
Nodes (39): RaidGuidesSection.tsx, Notas de página /montarias, Área Dungeons, Área Festivais (placeholder), Área Home, Área Leveling, Área Lootrun, Área Modos Especiais (+31 more)

### Community 9 - "Assessment A: Revisão de design"
Cohesion: 0.07
Nodes (36): Funciona: conteúdo próprio (35 POVs, GIFs, Dica GsW), P1: site se diz oficial, sem aviso de fã, Carga cognitiva: 5 de 8 falhas, /impeccable clarify, /impeccable layout, Assessment A: Revisão de design, H10 Ajuda e documentação (sem glossário), H1 Visibilidade do status (+28 more)

### Community 10 - "DESIGN.md — Design System GsW"
Cohesion: 0.08
Nodes (35): First viewport: top bar 56px, sidebar 264px, coluna 68ch, Nesta página, DESIGN.md — Design System GsW, Busca (gatilho Ctrl K e <dialog> em painel carvão), Botões (primary, secondary, ícone, sobre mídia), Painel de variação, cartão de navegação, mídia, Navegação: top bar, sidebar, índice Nesta página, breadcrumb, Selo de versão e chips (em breve, raridade), Dica da GsW (painel carvão) (+27 more)

### Community 11 - "Auditoria técnica gsw_lp (Impeccable audit)"
Cohesion: 0.09
Nodes (33): surface-effects.css, InPageNavigation.tsx, ThemeToggle.tsx, Lighthouse celular simulado (4 rotas), Audit Health Score 11/20, Cabeçalho eyebrow+h2 copiado 49 vezes, /impeccable adapt, /impeccable document (+25 more)

### Community 12 - "site-content.ts"
Cohesion: 0.13
Nodes (16): Configuração do Next (poweredByHeader off, cache 1 ano, headers, sem CSP), Redirects 308 das rotas antigas para /guias/<guia>, Baixa: sem CSP, areas, contatoEmail, discordUrl, GrupoId, guias (+8 more)

### Community 13 - "HistoryPage.tsx"
Cohesion: 0.16
Nodes (15): Historia(), Member, members, HistoryPage(), Essence(), GallerySection(), Era, History() (+7 more)

### Community 14 - "next"
Cohesion: 0.15
Nodes (10): metadata, RaidImageCardProps, AnimacaoSobDemanda(), AnimacaoSobDemandaProps, posterDe(), ClickableImagePreviewProps, LazyYouTubeEmbedProps, Boas práticas (Server Components, next/image, LazyYouTubeEmbed, <dialog>, UTF-8 sem BOM, a11y) (+2 more)

### Community 15 - "Critique Assessment B: detector + navegador"
Cohesion: 0.12
Nodes (21): P2: texto 9-10 px; saltos H2->H4, Funciona: sem erros de console, sem overflow a 390 px, [P2] Hierarquia de headings pula níveis em /historia, Positive Findings (sem overflow, alt, foco nativo, Esc, anti-FOUC), Grade 2x2 com número fantasma, Ícones stroke genéricos em quadrados roxos, Texto da home intercambiável, Veredito: em grande parte intercambiável (+13 more)

### Community 16 - "special-modes-content.ts"
Cohesion: 0.18
Nodes (15): metadata, Pagina(), combinedModesParagraph, combinedModesRequirements, SectionIntro, SpecialMode, specialModes, specialModesChallengeIntro (+7 more)

### Community 17 - "GallerySection.tsx"
Cohesion: 0.18
Nodes (18): GalleryPhoto, galleryPhotos, Footer.tsx, Navbar.tsx, P2: ícones do rodapé sem nome; alvos 20-32 px, P1: galeria /historia sem teclado; modais sem foco, P1: menu do celular fechado continua no Tab, /impeccable harden (+10 more)

### Community 18 - "package.json"
Cohesion: 0.15
Nodes (18): devDependencies, gifsicle@^7.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @types/node@^20, @types/react@^19, @types/react-dom@^19, typescript@^5 (+10 more)

### Community 19 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "guiaHref()"
Cohesion: 0.33
Nodes (8): Busca(), indice, ItemDeBusca, procurar(), semAcento(), areaAtiva(), IconeDiscord(), TopBar()

### Community 21 - "CI/CD"
Cohesion: 0.17
Nodes (16): Fluxo branch -> develop -> main -> deploy (desligado), CI/CD, Adaptações da referência (um job front, node --test, sem Semgrep), Passos para ativar o deploy (link, token, secrets, dry_run, variável), Primeira vez: criar a develop, Variável DEPLOY_HABILITADO, Deploy Vercel (obsoleto desde 18/11/2026), Fluxo de branches com merge e promoção automáticos (+8 more)

### Community 22 - "app/layout.tsx"
Cohesion: 0.17
Nodes (14): alegreya, jetbrains, metadata, pixelify, RootLayout(), viewport, AnimationInitializer(), SiteFooter() (+6 more)

### Community 23 - "Diagnóstico do front (Impeccable)"
Cohesion: 0.16
Nodes (16): Arquitetura de conteúdo pages/sections/data, Critério de aceite da Fase 3, Funciona: desempenho bom fora da mídia (Lighthouse 91-94), direcao-visual.md (direção visual), Diagnóstico do front (Impeccable), O que não foi testado (leitor de tela, dispositivo, zoom 200%), P2: 404 padrão do Next em inglês, P0: /lootrun 5,5 MB ao abrir e 112 MB rolando (+8 more)

### Community 24 - "AGENTS.md — regras para agentes"
Cohesion: 0.18
Nodes (15): AGENTS.md — regras para agentes, Comandos npm (dev, typecheck, lint, test, build, check, convert:webp), Documentação atualizada no mesmo PR, Formato de commit type(scope) em inglês, AGENTS.md limitado a 200 linhas, Lista "Nunca" (push direto, --no-verify, Artifacts, secrets, CDN oficial, tema claro, back-end), Nunca usar ícones/imagens da CDN oficial da Wynncraft sem autorização, Nunca publicar Artifacts (claude.ai) neste projeto (+7 more)

### Community 25 - "Créditos, fontes e licenças"
Cohesion: 0.16
Nodes (15): Nunca copiar texto da wiki (CC BY-NC-SA) ou do site oficial, Créditos, fontes e licenças, Aviso de site não oficial (texto do rodapé), Candidatos: game-icons.net, Faithful, Dados do jogo: API v3, wiki, cache Wynntils (só conferência), Decisão do dono: só arte própria até autorização escrita da Wynncraft, Exceção herdada: Leveling usa ícones da CDN (buildLevelingItemGuideIconUrl), Ícones e tipografia: Lucide (ISC), fontes SIL OFL 1.1 (+7 more)

### Community 26 - "[P1] Sem prefers-reduced-motion no reveal e scro"
Cohesion: 0.23
Nodes (15): app/styles/foundation.css, motion.css, Atalho temporário: fundos pretos dos guias antigos transparentes, Baixa: guias antigos com fundo preto (shortcut em foundation.css), Falsos positivos do detector descartados, P1: violeta da marca como texto 2,0-2,4:1, P1: animação ignora prefers-reduced-motion, /impeccable animate (+7 more)

### Community 27 - "Pendências"
Cohesion: 0.14
Nodes (14): Em aberto: contato real do aviso e cores de raridade não confirmadas, Pendências, Alta: aplicar o modelo de Raids aos outros guias, Pendência: autorização da Wynncraft para ícones oficiais, Alta: /comunidade como hub, Alta: conteúdo desatualizado restante, CI: Dependabot não adicionado, Pendência: e-mail de contato do aviso (contatoEmail) (+6 more)

### Community 28 - "GuiaEmConstrucao.tsx"
Cohesion: 0.23
Nodes (9): metadata, Pagina(), metadata, Pagina(), FestivalsPage(), GuiaEmConstrucao(), GuiaEmConstrucaoProps, MountsPage() (+1 more)

### Community 29 - "HomePage.tsx"
Cohesion: 0.22
Nodes (10): Home(), homeComeco, homeComunidade, homeDestaque, homeHero, HomePage(), retratos, totalDeSalas (+2 more)

### Community 30 - "GuideIntro.tsx"
Cohesion: 0.24
Nodes (10): Breadcrumb(), FichaGuia(), FichaGuiaProps, SeloVersao(), RaidsAbertura(), GuideIntro(), GuideIntroProps, Modelo de guia (Raids é a referência) (+2 more)

### Community 31 - "deploy"
Cohesion: 0.15
Nodes (13): if, name, runs-on, steps, timeout-minutes, deploy, if, name (+5 more)

### Community 32 - "convert-to-webp.mjs"
Cohesion: 0.23
Nodes (12): args, buildOutputPath(), collectFiles(), convertFile(), customTargets, ensureWorkbench(), getPriority(), INPUT_DIR (+4 more)

### Community 33 - "Superfície app-guias (Impeccable)"
Cohesion: 0.17
Nodes (12): Superfície app-guias (Impeccable), Atualizados recentemente na Início (adiado), Finish: revisão final, veredito, DESIGN.md e proveniência de rasters, Leitor: jogador brasileiro de Wynncraft, à noite, jogo aberto, Momento memorável: hover em "Aspect" abre caixa de item, Own-world: paleta e tipografia da superfície, Restrições: só escuro, site de fã, texto e arte próprios, pt-BR, Story: fluxo do leitor (sidebar/busca, ficha, índice, POV, continuar) (+4 more)

### Community 34 - "Navegacao proposta"
Cohesion: 0.20
Nodes (9): Ficha do guia (item-box guide card), Dica da GsW (guild opinion highlight block), Guide data fields (versaoDoJogo, atualizadoEm, nivelRecomendado, fontes[], estado), Breadcrumb (Guias > Endgame > Raids), /guias index route, Mobile navigation (drawer, sticky section bar, 44 px targets), Navegacao proposta, Version and date badge ('Atualizado para a 2.2.4') (+1 more)

### Community 35 - "Estrutura do guia completo e plano de conteudo"
Cohesion: 0.20
Nodes (10): Icons: Lucide UI, game-icons.net for classes/weapons/bosses, emojis removed, Rarity colors as functional language, P0 content corrections accompanying redesign, Estrutura do guia completo e plano de conteudo, Suggested order for new pages (Montarias first), Prints: keep or replace per area, Content sources for the full guide (news, item guide, classes, map, wiki), Fontes, licencas e imagens de itens (redesign survey) (+2 more)

### Community 36 - "GsW Product definition (PRODUCT.md)"
Cohesion: 0.20
Nodes (7): Contained palette (violet-tinted darks, action violet), Accessibility minimum WCAG 2.1 AA + prefers-reduced-motion, Brand: GsW logo, violet #7116AD and charcoal #191819, GsW Product definition (PRODUCT.md), Positioning: pt-BR guide with own prints/POVs, step by step, Users: Brazilian Wynncraft players and GsW guild members, public/icon.webp

### Community 37 - "[P0] /lootrun transfere ~110 MB de mídia"
Cohesion: 0.27
Nodes (11): history-effects.css, HomeHeroSection.tsx, P1: LCP da Início 8,0 s, /impeccable optimize, Dimensão Performance, [P0] /lootrun transfere ~110 MB de mídia, [P1] LCP da home de 8,0 s, [P2] Handler de scroll lê layout a cada evento (+3 more)

### Community 38 - "[P1] Tema claro: texto escuro sobre gradiente pr"
Cohesion: 0.33
Nodes (11): theme-remaps.css, HomeAboutSection.tsx, P2: tema claro, legendas escuras sobre preto, Queixa: modo claro feio (inversão !important), /impeccable colorize, [P1] Tema claro: texto escuro sobre gradiente preto, Padrão: tema claro por remap de classes com !important, [P2] Tema claro é inversão automática que apaga a marca (+3 more)

### Community 39 - "Caixa de Item (proposed visual direction)"
Cohesion: 0.20
Nodes (7): Category default (Maxroll/Icy Veins style dark docs), Direcao visual (proposal), Alternative: Obsidiana e Encantamento, Alternative: Percurso (numbered route), Termo do jogo (glossary term opening an item box), Typography (Pixelify Sans, Alegreya Sans, JetBrains Mono via next/font), Onde parei (resume last read section)

### Community 40 - "Infraestrutura"
Cohesion: 0.22
Nodes (10): Só front: sem back-end, banco, API ou env vars, Infraestrutura, Notas de build (Node 24, Google Fonts, allow-scripts sharp, cache .next), Candidato: VPS (Docker standalone, deploy SSH) seguindo regras da VPS, Hospedagem a definir (Vercel abandonada; último deploy f8063b4), Mídia: public/ ~100MB, 0,4-0,9MB por página, cache 1 ano exige nome novo, Sem Docker, banco, fila, storage, monitoramento, analytics, Saída: next start (redirects 308 e otimizador de imagens) (+2 more)

### Community 41 - "Sidebar dos guias"
Cohesion: 0.20
Nodes (8): Motion tokens and reduced motion, Guide map (Comecando, Progressao, Equipamento, Endgame, Economia, Guildas, Especiais), Guildas group (guilds, territories, wars; live API data at build), /comunidade hub (history, members, gallery, Shares, Discord), Indice 'Nesta pagina' (scroll-spy), Search palette (Ctrl+K, build-time index via Pagefind or JSON), Sidebar dos guias, Top bar (Inicio, Guias, Comunidade, search, Discord)

### Community 42 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, check, convert:webp, dev, lint, prepare, start (+2 more)

### Community 43 - "Grafo do projeto (Graphify) doc"
Cohesion: 0.22
Nodes (9): .gitattributes, .graphifyignore, Fresh clone setup (graphify hook install, claude install, merge driver), Grafo do projeto (Graphify) doc, What enters the graph (code AST, docs semantic, .graphifyignore exclusions), Graph update: post-commit hook for code, /graphify --update for docs, Graphify (graphifyy 0.9.104), Versioned graph files (graph.json, GRAPH_REPORT.md, manifest, labels, semantic cache) (+1 more)

### Community 44 - "Mapa das pastas"
Cohesion: 0.22
Nodes (6): Mapa das pastas, Hook pre-push (pula push só de mídia), concurrency, cancel-in-progress, group, name

### Community 45 - "GuiaLayout.tsx"
Cohesion: 0.20
Nodes (14): LayoutDosGuias(), gravarOndeParei(), GuiaLayout(), lerOndeParei(), paraSlug(), secoesDoConteudo(), Arquitetura, Estado: useState local, sem store global (+6 more)

### Community 46 - "guiaHref"
Cohesion: 0.27
Nodes (9): metadata, PaginaDosGuias(), FimDoGuiaProps, GuiaNavLista(), GuiaNavListaProps, grupos, guiaHref(), guiasDoGrupo() (+1 more)

### Community 47 - "Padrões"
Cohesion: 0.32
Nodes (8): Padrões, Convenção de nomes (componentes, páginas, dados, mídia, prints), Escopos já usados, Estrutura de área pages/ + sections/ + data/, Branches <tipo>/<assunto-kebab>, Padrão de commits (resumo, notas, escopo, sem coautor), Quando separar commits (máx. seis notas), Tipos: feat, fix, refactor, docs, perf, chore, ci/test/build

### Community 48 - "deploy.yml"
Cohesion: 0.25
Nodes (7): concurrency, cancel-in-progress, group, jobs, name, permissions, contents

### Community 49 - "env"
Cohesion: 0.25
Nodes (8): env, DEPLOY_HABILITADO, DRY_RUN, NEXT_TELEMETRY_DISABLED, VERCEL_ORG_ID, VERCEL_PROJECT_ID, VERCEL_TELEMETRY_DISABLED, VERCEL_TOKEN

### Community 50 - "dependencies"
Cohesion: 0.25
Nodes (8): dependencies, lucide-react@1.66.0, next@16.1.6, react@19.2.3, react-dom@19.2.3, sharp@^0.34.4, react-dom, sharp

### Community 51 - "Redesign: proposta (Fase 2)"
Cohesion: 0.29
Nodes (7): Form: Caixa de Item, seed 658dcb521c289a54, Redesign: proposta (Fase 2), Alternativas: Obsidiana e Encantamento, Percurso, padrão da categoria, Fase 3: base, navegação, Início e Raids feitos, Como foi feito: Graphify, Impeccable init/critique/audit, sorteio seed 658dcb521c289a54, Proposta aprovada em 18/11/2026, PRODUCT.md

### Community 52 - "on"
Cohesion: 0.29
Nodes (7): on, pull_request, push, workflow_dispatch, branches, types, branches

### Community 53 - "dry_run"
Cohesion: 0.29
Nodes (7): default, description, type, dry_run, on, workflow_dispatch, inputs

### Community 56 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.1.6, eslint, eslint-config-next

### Community 57 - "Caixa de Item (componente assinatura)"
Cohesion: 0.25
Nodes (8): Thesis: informação de consulta em caixa de item, Caixa de Item (componente assinatura), Creative North Star: "A Caixa de Item", Ficha do guia (uma por página), Formas: cantos 6/4px, réguas 1px, tracejado = ainda não existe, borda dupla, Token Fundo da Caixa #160c20, Token Borda Externa da Caixa #2a0f40, Decisões: Caixa de Item, só escuro, /guias/<guia> com redirect, só arte própria, Raids modelo

### Community 58 - "Cores de raridade (Normal, Unique, Rare, Legendary, Fabled, Mythic)"
Cohesion: 0.40
Nodes (5): Cores de raridade (Normal, Unique, Rare, Legendary, Fabled, Mythic), Mythic com duas entradas (#c80db1 borda/texto grande, #edb7e7 texto), The Rarity Is Signal Rule, Fonte das cores de raridade (item guide oficial, Crafted pendente), Dados do jogo a confirmar (beacons, gambits, Merchant, Crimson, Crafted, coordenadas, guild raid)

### Community 59 - "Item image and icon options (own prints, CDN, AP"
Cohesion: 0.50
Nodes (4): Item data from API v3 fetched at build, buildLevelingItemGuideIconUrl, Official CDN item icons, used sparingly with credit, Item image and icon options (own prints, CDN, API, Lucide, game-icons, Faithful, no wiki/jar)

### Community 60 - "Game guides (Lootrun, Dungeons, Raids, World Eve"
Cohesion: 0.50
Nodes (4): Game guides (Lootrun, Dungeons, Raids, World Events, Professions, Leveling, Special Modes, Silverbull Shares, Mounts, Festivals), GsW Website portal (Guardians of Wynn, Wynncraft), Closed copyright license (LICENSE), Silverbull Shares (guild economy)

### Community 64 - "Documentos: diagnostico, direcao-visual, navegacao, estrutura-do-guia, inventario-conteudo, fontes-e-licencas"
Cohesion: 0.40
Nodes (5): docs/redesign/diagnostico.md, docs/redesign/estrutura-do-guia.md, docs/redesign/fontes-e-licencas.md, docs/redesign/navegacao.md, Documentos: diagnostico, direcao-visual, navegacao, estrutura-do-guia, inventario-conteudo, fontes-e-licencas

## Knowledge Gaps
- **127 isolated node(s):** `Botões (primary, secondary, ícone, sobre mídia)`, `Painel de variação, cartão de navegação, mídia`, `Navegação: top bar, sidebar, índice Nesta página, breadcrumb`, `Ícones Lucide 1,75px, sem emoji`, `The Measure Rule (60ch)` (+122 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 355 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Estrutura de pastas` connect `GuiaLayout.tsx` to `raids-content.ts`, `convert-to-webp.mjs`, `site-content.ts`, `HistoryPage.tsx`, `next`, `guiaHref`, `compilerOptions`, `guiaHref()`, `app/layout.tsx`, `gif-para-webp.mjs`, `[P1] Sem prefers-reduced-motion no reveal e scro`, `GuiaEmConstrucao.tsx`, `HomePage.tsx`, `GuideIntro.tsx`?**
  _High betweenness centrality (0.196) - this node is a cross-community bridge._
- **What connects `Botões (primary, secondary, ícone, sobre mídia)`, `Painel de variação, cartão de navegação, mídia`, `Navegação: top bar, sidebar, índice Nesta página, breadcrumb` to the rest of the system?**
  _127 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `raids-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05995410212277682 - nodes in this community are weakly interconnected._
- **Why does `Mapa das pastas` connect `Mapa das pastas` to `raids-content.ts`, `convert-to-webp.mjs`, `site-content.ts`, `deploy.yml`, `AGENTS.md — regras para agentes`?**
  _High betweenness centrality (0.167) - this node is a cross-community bridge._
- **Should `silverbull-shares-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05738615327656423 - nodes in this community are weakly interconnected._
- **Why does `next` connect `GuideIntro.tsx` to `raids-content.ts`, `silverbull-shares-content.ts`, `lootrun-content.ts`, `professions-content.ts`, `leveling-content.ts`, `dungeons-content.ts`, `world-events-content.ts`, `site-content.ts`, `HistoryPage.tsx`, `next`, `special-modes-content.ts`, `GallerySection.tsx`, `package.json`, `guiaHref()`, `app/layout.tsx`, `HomePage.tsx`, `GuiaLayout.tsx`, `guiaHref`, `dependencies`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Should `lootrun-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07486338797814207 - nodes in this community are weakly interconnected._
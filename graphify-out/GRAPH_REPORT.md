# Graph Report - gsw_lp  (2026-11-18)

## Corpus Check
- 185 files · ~99,805 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: .css 5, (none) 3, .ico 1)

## Summary
- 1371 nodes · 2868 edges · 74 communities (70 shown, 4 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 146 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6e49b023`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- raids-content.ts
- silverbull-shares-content.ts
- LootrunPage.tsx
- professions-content.ts
- env
- leveling-content.ts
- dungeons-content.ts
- world-events-content.ts
- Inventário do conteúdo atual
- Assessment A: Revisão de design
- DESIGN.md — Design System GsW
- [P0] /lootrun transfere ~110 MB de mídia
- Navbar.tsx
- Padrões
- site-content.ts
- Critique Assessment B: detector + navegador
- lucide-react
- GallerySection.tsx
- package.json
- compilerOptions
- next
- CI/CD
- app/layout.tsx
- Diagnóstico do front (Impeccable)
- AGENTS.md — regras para agentes
- Créditos, fontes e licenças
- [P1] Sem prefers-reduced-motion no reveal e scro
- Pendências
- on
- HomePage.tsx
- RaidsPrimeirosPassos.tsx
- deploy
- convert-to-webp.mjs
- GallerySection.tsx
- Navegacao proposta
- Estrutura do guia completo e plano de conteudo
- GsW Product definition (PRODUCT.md)
- RaidsPage.tsx
- [P1] Tema claro: texto escuro sobre gradiente pr
- Caixa de Item (proposed visual direction)
- dry_run
- Sidebar dos guias
- Redesign: proposta (Fase 2)
- Grafo do projeto (Graphify) doc
- Mapa das pastas
- GuiaLayout.tsx
- mounts-content.ts
- not-found.tsx
- deploy.yml
- Arquitetura
- Estrutura de pastas
- MountsPage.tsx
- Superfície app-guias (Impeccable)
- tamanhos.ts
- Infraestrutura
- LootrunCampsSection.tsx
- special-modes-content.ts
- metadataDoGuia
- Animações e qualidade das imagens
- Item image and icon options (own prints, CDN, AP
- Game guides (Lootrun, Dungeons, Raids, World Eve
- global.d.ts
- postcss.config.mjs
- CLAUDE.md imports AGENTS.md
- AnimacaoSobDemanda.tsx
- Heurísticas de Nielsen 20/40
- react
- RaidsGuiaPorRaid.tsx
- MontariasAlimentacao.tsx
- FestivalSecao.tsx
- GallerySection.tsx
- Atalho temporário: fundos pretos dos guias antigos transparentes
- DicaGsw.tsx
- Cores de raridade (Normal, Unique, Rare, Legendary, Fabled, Mythic)

## God Nodes (most connected - your core abstractions)
1. `DESIGN.md — Design System GsW` - 44 edges
2. `Auditoria técnica gsw_lp (Impeccable audit)` - 36 edges
3. `Estrutura de pastas` - 34 edges
4. `Diagnóstico do front (Impeccable)` - 33 edges
5. `next` - 32 edges
6. `react` - 32 edges
7. `Assessment A: Revisão de design` - 31 edges
8. `tamanhos` - 30 edges
9. `lucide-react` - 27 edges
10. `AGENTS.md — regras para agentes` - 25 edges

## Surprising Connections (you probably didn't know these)
- `4. O que foi aplicado, e onde` --references--> `TextoAnimado()`  [INFERRED]
  docs/redesign/ANIMACOES.md → components/shared/TextoAnimado.tsx
- `Onde parei em localStorage (gsw:onde-parei:<rota>)` --semantically_similar_to--> `Onde parei / "Continuar de"`  [INFERRED] [semantically similar]
  docs/ARQUITETURA.md → DESIGN.md
- `Padrão de commits (resumo, notas, escopo, sem coautor)` --semantically_similar_to--> `Formato de commit type(scope) em inglês`  [INFERRED] [semantically similar]
  docs/PADROES.md → AGENTS.md
- `Nunca usar ícones/imagens da CDN oficial da Wynncraft sem autorização` --semantically_similar_to--> `Decisão do dono: só arte própria até autorização escrita da Wynncraft`  [INFERRED] [semantically similar]
  AGENTS.md → docs/CREDITOS.md
- `4. O que foi aplicado, e onde` --references--> `TransicaoDePagina()`  [INFERRED]
  docs/redesign/ANIMACOES.md → components/shared/TransicaoDePagina.tsx

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

## Communities (74 total, 4 thin omitted)

### Community 0 - "raids-content.ts"
Cohesion: 0.09
Nodes (27): cinfrasSilverbullImage, extras, nolRooms, notgRooms, queueSteps, raidAspectDetails, raidAspectExamples, RaidCaptionImage (+19 more)

### Community 1 - "silverbull-shares-content.ts"
Cohesion: 0.06
Nodes (60): metadata, Pagina(), acquisitionCards, BombCard, bombCards, bombsIntro, bombStoreImage, bundlesStoreImage (+52 more)

### Community 2 - "LootrunPage.tsx"
Cohesion: 0.11
Nodes (31): LootrunBeacon, lootrunBeacons, lootrunBeaconsIntro, lootrunBeaconsRegras, LootrunCamp, LootrunCombo, lootrunCombos, lootrunCombosIntro (+23 more)

### Community 3 - "professions-content.ts"
Cohesion: 0.06
Nodes (45): metadata, Pagina(), bombTips, CraftingProfession, craftingProfessions, craftingXpTips, GatheringProfession, gatheringProfessions (+37 more)

### Community 4 - "env"
Cohesion: 0.06
Nodes (49): BASE, EVENTO, GH_TOKEN, NEXT_TELEMETRY_DISABLED, ORIGEM, PR, REPO, TESTADO (+41 more)

### Community 5 - "leveling-content.ts"
Cohesion: 0.08
Nodes (37): metadata, Pagina(), AbilityTreeRoute, buildLevelingItemGuideIconUrl(), buildLevelingItemGuideLink(), levelingAbilityTrees, levelingArmorNotes, levelingArmorPieces (+29 more)

### Community 6 - "dungeons-content.ts"
Cohesion: 0.09
Nodes (35): metadata, Pagina(), AccessMode, DungeonDaLista, dungeonsAccessImages, dungeonsAccessIntro, dungeonsAccessModes, dungeonsCorrompidas (+27 more)

### Community 7 - "world-events-content.ts"
Cohesion: 0.08
Nodes (35): metadata, Pagina(), annihilationImages, annihilationPartyTips, annihilationSunTips, annihilationVideo, ImageCard, InfoCard (+27 more)

### Community 8 - "Inventário do conteúdo atual"
Cohesion: 0.06
Nodes (47): RaidGuidesSection.tsx, Queixa: emojis quebrados (27 linhas, 8 '?'), /impeccable bolder, [P2] Emojis no lugar de itens, e emojis errados, Notas de página /montarias, Emoji / tofu: quadrados Unicode 12 em /lootrun e /silverbull-shares, 0.2 Acentos quebrados (É/Ó viraram ?), Área Dungeons (+39 more)

### Community 9 - "Assessment A: Revisão de design"
Cohesion: 0.10
Nodes (26): Funciona: conteúdo próprio (35 POVs, GIFs, Dica GsW), P1: site se diz oficial, sem aviso de fã, Carga cognitiva: 5 de 8 falhas, /impeccable clarify, /impeccable layout, Assessment A: Revisão de design, H2 Correspondência com o mundo real, GuideIntro min-h-screen vazio (+18 more)

### Community 10 - "DESIGN.md — Design System GsW"
Cohesion: 0.09
Nodes (31): DESIGN.md — Design System GsW, Botões (primary, secondary, ícone, sobre mídia), Caixa de Item (componente assinatura), Painel de variação, cartão de navegação, mídia, Navegação: top bar, sidebar, índice Nesta página, breadcrumb, Selo de versão e chips (em breve, raridade), The Digit Rule (números em JetBrains Mono), Do's and Don'ts (+23 more)

### Community 11 - "[P0] /lootrun transfere ~110 MB de mídia"
Cohesion: 0.27
Nodes (11): history-effects.css, HomeHeroSection.tsx, P1: LCP da Início 8,0 s, /impeccable optimize, Dimensão Performance, [P0] /lootrun transfere ~110 MB de mídia, [P1] LCP da home de 8,0 s, [P2] Handler de scroll lê layout a cada evento (+3 more)

### Community 12 - "Navbar.tsx"
Cohesion: 0.15
Nodes (16): surface-effects.css, P2: texto 9-10 px; saltos H2->H4, Cabeçalho eyebrow+h2 copiado 49 vezes, /impeccable typeset, Dimensão Implementation Integrity, Hover 3D por seletor estrutural, Implementation Integrity: passa com ressalvas, [P3] Tamanhos de fonte fora da escala (9-11px) (+8 more)

### Community 13 - "Padrões"
Cohesion: 0.32
Nodes (8): Padrões, Convenção de nomes (componentes, páginas, dados, mídia, prints), Escopos já usados, Estrutura de área pages/ + sections/ + data/, Branches <tipo>/<assunto-kebab>, Padrão de commits (resumo, notas, escopo, sem coautor), Quando separar commits (máx. seis notas), Tipos: feat, fix, refactor, docs, perf, chore, ci/test/build

### Community 14 - "site-content.ts"
Cohesion: 0.17
Nodes (12): areas, contatoEmail, discordUrl, festivaisSecoes, GrupoId, montariasSecoes, raidsSecoes, SitePageLink (+4 more)

### Community 15 - "Critique Assessment B: detector + navegador"
Cohesion: 0.11
Nodes (21): Queixa: pouca ligação com o jogo, Funciona: sem erros de console, sem overflow a 390 px, Positive Findings (sem overflow, alt, foco nativo, Esc, anti-FOUC), Grade 2x2 com número fantasma, Ícones stroke genéricos em quadrados roxos, Linguagem visual de tooltip do Wynncraft, Notas de página /dungeons, Texto da home intercambiável (+13 more)

### Community 16 - "lucide-react"
Cohesion: 0.14
Nodes (20): metadata, Pagina(), avisoEquipamento, Destaque, estruturaDoFestival, estruturaIntro, festivais, festivaisCicloIntro (+12 more)

### Community 17 - "GallerySection.tsx"
Cohesion: 0.10
Nodes (37): Footer.tsx, Navbar.tsx, ThemeToggle.tsx, Lighthouse celular simulado (4 rotas), P2: ícones do rodapé sem nome; alvos 20-32 px, P1: galeria /historia sem teclado; modais sem foco, P1: menu do celular fechado continua no Tab, Audit Health Score 11/20 (+29 more)

### Community 18 - "package.json"
Cohesion: 0.06
Nodes (41): eslintConfig, dependencies, lenis@1.3.27, lucide-react@1.66.0, next@16.1.6, react@19.2.3, react-dom@19.2.3, devDependencies (+33 more)

### Community 19 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "next"
Cohesion: 0.20
Nodes (16): metadata, PaginaDosGuias(), Busca(), indice, ItemDeBusca, procurar(), semAcento(), GuiaNavLista() (+8 more)

### Community 21 - "CI/CD"
Cohesion: 0.17
Nodes (16): Fluxo branch -> develop -> main -> deploy (desligado), CI/CD, Adaptações da referência (um job front, node --test, sem Semgrep), Passos para ativar o deploy (link, token, secrets, dry_run, variável), Primeira vez: criar a develop, Variável DEPLOY_HABILITADO, Deploy Vercel (obsoleto desde 18/11/2026), Fluxo de branches com merge e promoção automáticos (+8 more)

### Community 22 - "app/layout.tsx"
Cohesion: 0.11
Nodes (17): alegreya, jetbrains, metadata, pixelify, RootLayout(), viewport, contar(), Efeitos() (+9 more)

### Community 23 - "Diagnóstico do front (Impeccable)"
Cohesion: 0.21
Nodes (13): Arquitetura de conteúdo pages/sections/data, Critério de aceite da Fase 3, Funciona: desempenho bom fora da mídia (Lighthouse 91-94), direcao-visual.md (direção visual), Diagnóstico do front (Impeccable), O que não foi testado (leitor de tela, dispositivo, zoom 200%), P2: 404 padrão do Next em inglês, P0: /lootrun 5,5 MB ao abrir e 112 MB rolando (+5 more)

### Community 24 - "AGENTS.md — regras para agentes"
Cohesion: 0.18
Nodes (15): AGENTS.md — regras para agentes, Comandos npm (dev, typecheck, lint, test, build, check, convert:webp), Documentação atualizada no mesmo PR, Formato de commit type(scope) em inglês, AGENTS.md limitado a 200 linhas, Lista "Nunca" (push direto, --no-verify, Artifacts, secrets, CDN oficial, tema claro, back-end), Nunca usar ícones/imagens da CDN oficial da Wynncraft sem autorização, Nunca publicar Artifacts (claude.ai) neste projeto (+7 more)

### Community 25 - "Créditos, fontes e licenças"
Cohesion: 0.15
Nodes (16): Nunca copiar texto da wiki (CC BY-NC-SA) ou do site oficial, Créditos, fontes e licenças, Aviso de site não oficial (texto do rodapé), Candidatos: game-icons.net, Faithful, Dados do jogo: API v3, wiki, cache Wynntils (só conferência), Decisão do dono: só arte própria até autorização escrita da Wynncraft, Exceção herdada: Leveling usa ícones da CDN (buildLevelingItemGuideIconUrl), Ícones e tipografia: Lucide (ISC), fontes SIL OFL 1.1 (+8 more)

### Community 26 - "[P1] Sem prefers-reduced-motion no reveal e scro"
Cohesion: 0.22
Nodes (15): app/styles/foundation.css, motion.css, InPageNavigation.tsx, Falsos positivos do detector descartados, P1: violeta da marca como texto 2,0-2,4:1, P1: navegação não chega à sala; Raids 44 mil px, P1: animação ignora prefers-reduced-motion, Queixa: navegação estranha (+7 more)

### Community 27 - "Pendências"
Cohesion: 0.15
Nodes (13): Em aberto: contato real do aviso e cores de raridade não confirmadas, Pendências, Alta: aplicar o modelo de Raids aos outros guias, Alta: /comunidade como hub, Alta: conteúdo desatualizado restante, CI: Dependabot não adicionado, Pendência: e-mail de contato do aviso (contatoEmail), Média: Montarias e Festivais (+5 more)

### Community 28 - "on"
Cohesion: 0.29
Nodes (7): on, pull_request, push, workflow_dispatch, branches, types, branches

### Community 29 - "HomePage.tsx"
Cohesion: 0.14
Nodes (19): Home(), homeCategorias, homeComeco, homeComunidade, homeDestaque, homeHero, HomePage(), particulas (+11 more)

### Community 30 - "RaidsPrimeirosPassos.tsx"
Cohesion: 0.17
Nodes (16): Figura(), FiguraProps, colunasPara(), Galeria(), GaleriaProps, ItemDaGaleria, sizesPara(), guildRaidAspectDistribution (+8 more)

### Community 31 - "deploy"
Cohesion: 0.10
Nodes (21): env, if, name, runs-on, steps, timeout-minutes, DEPLOY_HABILITADO, DRY_RUN (+13 more)

### Community 32 - "convert-to-webp.mjs"
Cohesion: 0.08
Nodes (25): Mídia própria da guilda e prints novas (18/11/2026), sharp@^0.34.4, sharp, args, buildOutputPath(), collectFiles(), convertFile(), customTargets (+17 more)

### Community 33 - "GallerySection.tsx"
Cohesion: 0.17
Nodes (14): Historia(), Member, members, HistoryPage(), Essence(), Era, History(), createFallbackAvatar() (+6 more)

### Community 34 - "Navegacao proposta"
Cohesion: 0.20
Nodes (9): Ficha do guia (item-box guide card), Dica da GsW (guild opinion highlight block), Guide data fields (versaoDoJogo, atualizadoEm, nivelRecomendado, fontes[], estado), Breadcrumb (Guias > Endgame > Raids), /guias index route, Mobile navigation (drawer, sticky section bar, 44 px targets), Navegacao proposta, Version and date badge ('Atualizado para a 2.2.4') (+1 more)

### Community 35 - "Estrutura do guia completo e plano de conteudo"
Cohesion: 0.20
Nodes (10): Icons: Lucide UI, game-icons.net for classes/weapons/bosses, emojis removed, Rarity colors as functional language, P0 content corrections accompanying redesign, Estrutura do guia completo e plano de conteudo, Suggested order for new pages (Montarias first), Prints: keep or replace per area, Content sources for the full guide (news, item guide, classes, map, wiki), Fontes, licencas e imagens de itens (redesign survey) (+2 more)

### Community 36 - "GsW Product definition (PRODUCT.md)"
Cohesion: 0.18
Nodes (7): Contained palette (violet-tinted darks, action violet), Accessibility minimum WCAG 2.1 AA + prefers-reduced-motion, Brand: GsW logo, violet #7116AD and charcoal #191819, GsW Product definition (PRODUCT.md), Positioning: pt-BR guide with own prints/POVs, step by step, Users: Brazilian Wynncraft players and GsW guild members, public/icon.webp

### Community 37 - "RaidsPage.tsx"
Cohesion: 0.19
Nodes (14): metadata, Pagina(), FimDoGuia(), FimDoGuiaProps, SecaoGuia(), SecaoGuiaProps, raidFontes, raidStructureSteps (+6 more)

### Community 38 - "[P1] Tema claro: texto escuro sobre gradiente pr"
Cohesion: 0.33
Nodes (11): theme-remaps.css, HomeAboutSection.tsx, P2: tema claro, legendas escuras sobre preto, Queixa: modo claro feio (inversão !important), /impeccable colorize, [P1] Tema claro: texto escuro sobre gradiente preto, Padrão: tema claro por remap de classes com !important, [P2] Tema claro é inversão automática que apaga a marca (+3 more)

### Community 39 - "Caixa de Item (proposed visual direction)"
Cohesion: 0.22
Nodes (7): Category default (Maxroll/Icy Veins style dark docs), Direcao visual (proposal), Alternative: Obsidiana e Encantamento, Alternative: Percurso (numbered route), Termo do jogo (glossary term opening an item box), Typography (Pixelify Sans, Alegreya Sans, JetBrains Mono via next/font), Onde parei (resume last read section)

### Community 40 - "dry_run"
Cohesion: 0.29
Nodes (7): default, description, type, dry_run, on, workflow_dispatch, inputs

### Community 41 - "Sidebar dos guias"
Cohesion: 0.20
Nodes (8): Motion tokens and reduced motion, Guide map (Comecando, Progressao, Equipamento, Endgame, Economia, Guildas, Especiais), Guildas group (guilds, territories, wars; live API data at build), /comunidade hub (history, members, gallery, Shares, Discord), Indice 'Nesta pagina' (scroll-spy), Search palette (Ctrl+K, build-time index via Pagefind or JSON), Sidebar dos guias, Top bar (Inicio, Guias, Comunidade, search, Discord)

### Community 42 - "Redesign: proposta (Fase 2)"
Cohesion: 0.14
Nodes (14): Atualizados recentemente na Início (adiado), Form: Caixa de Item, seed 658dcb521c289a54, docs/redesign/diagnostico.md, docs/redesign/direcao-visual.md, docs/redesign/estrutura-do-guia.md, docs/redesign/fontes-e-licencas.md, docs/redesign/navegacao.md, Redesign: proposta (Fase 2) (+6 more)

### Community 43 - "Grafo do projeto (Graphify) doc"
Cohesion: 0.22
Nodes (9): .gitattributes, .graphifyignore, Fresh clone setup (graphify hook install, claude install, merge driver), Grafo do projeto (Graphify) doc, What enters the graph (code AST, docs semantic, .graphifyignore exclusions), Graph update: post-commit hook for code, /graphify --update for docs, Graphify (graphifyy 0.9.104), Versioned graph files (graph.json, GRAPH_REPORT.md, manifest, labels, semantic cache) (+1 more)

### Community 44 - "Mapa das pastas"
Cohesion: 0.22
Nodes (6): Mapa das pastas, Hook pre-push (pula push só de mídia), concurrency, cancel-in-progress, group, name

### Community 45 - "GuiaLayout.tsx"
Cohesion: 0.39
Nodes (7): LayoutDosGuias(), gravarOndeParei(), GuiaLayout(), lerOndeParei(), paraSlug(), secoesDoConteudo(), GuiaSecao

### Community 46 - "mounts-content.ts"
Cohesion: 0.12
Nodes (24): Atributo, atributos, atributosDoFilho, avisoDoBreeding, avisoMontado, comoFazerBreeding, corDoFilho, Destaque (+16 more)

### Community 48 - "deploy.yml"
Cohesion: 0.25
Nodes (7): concurrency, cancel-in-progress, group, jobs, name, permissions, contents

### Community 49 - "Arquitetura"
Cohesion: 0.19
Nodes (12): Arquitetura, Configuração do Next (poweredByHeader off, cache 1 ano, headers, sem CSP), Estado: useState local, sem store global, Integrações externas: YouTube lazy, Google Fonts no build, CDN no Leveling, Navegação: top bar, sidebar, Nesta página, busca, Onde parei em localStorage (gsw:onde-parei:<rota>), Redirects 308 das rotas antigas para /guias/<guia>, Stack (Next 16 estático, React 19, TS strict, Tailwind 4, lucide-react) (+4 more)

### Community 50 - "Estrutura de pastas"
Cohesion: 0.22
Nodes (13): Coordenada(), Termo(), TermoProps, ehChave(), TextoComTermos(), Sala(), Variacao(), Termo do jogo (glossário, [[chave|texto]]) (+5 more)

### Community 51 - "MountsPage.tsx"
Cohesion: 0.25
Nodes (12): metadata, Pagina(), Destaque(), montariasFontes, MountsPage(), MontariasAlimentacao(), MontariasAtributos(), MontariasBreeding() (+4 more)

### Community 52 - "Superfície app-guias (Impeccable)"
Cohesion: 0.17
Nodes (12): Superfície app-guias (Impeccable), Finish: revisão final, veredito, DESIGN.md e proveniência de rasters, Leitor: jogador brasileiro de Wynncraft, à noite, jogo aberto, Momento memorável: hover em "Aspect" abre caixa de item, Own-world: paleta e tipografia da superfície, Restrições: só escuro, site de fã, texto e arte próprios, pt-BR, Story: fluxo do leitor (sidebar/busca, ficha, índice, POV, continuar), Thesis: informação de consulta em caixa de item (+4 more)

### Community 53 - "tamanhos.ts"
Cohesion: 0.21
Nodes (13): DungeonsAccessSection(), LevelingSpotsSection(), RaidImageCard(), RaidImageCardProps, ClickableImagePreview(), ClickableImagePreviewProps, ImagemNoQuadro(), ImagemNoQuadroProps (+5 more)

### Community 54 - "Infraestrutura"
Cohesion: 0.22
Nodes (10): Só front: sem back-end, banco, API ou env vars, Infraestrutura, Notas de build (Node 24, Google Fonts, allow-scripts sharp, cache .next), Candidato: VPS (Docker standalone, deploy SSH) seguindo regras da VPS, Hospedagem a definir (Vercel abandonada; último deploy f8063b4), Mídia: public/ ~100MB, 0,4-0,9MB por página, cache 1 ano exige nome novo, Sem Docker, banco, fila, storage, monitoramento, analytics, Saída: next start (redirects 308 e otimizador de imagens) (+2 more)

### Community 55 - "LootrunCampsSection.tsx"
Cohesion: 0.17
Nodes (12): lootrunAdvancedSystems, lootrunAdvancedSystemsIntro, lootrunCamps, lootrunCampsIntro, lootrunMechanicBlocks, lootrunMechanicsIntro, LootrunAdvancedSystemsSection(), isAnimado() (+4 more)

### Community 56 - "special-modes-content.ts"
Cohesion: 0.16
Nodes (14): metadata, Pagina(), combinedModesParagraph, combinedModesRequirements, SectionIntro, SpecialMode, specialModes, specialModesChallengeIntro (+6 more)

### Community 57 - "metadataDoGuia"
Cohesion: 0.50
Nodes (3): metadata, Pagina(), metadataDoGuia()

### Community 58 - "Animações e qualidade das imagens"
Cohesion: 0.20
Nodes (9): 1. Estudo das referências, 2. Decisões, 3. Linguagem de movimento, 5. Qualidade das imagens, Animações e qualidade das imagens, chiconeto.dev, Gastos (pasta local, só leitura), Sites premiados e de jogos (Awwwards, Godly) (+1 more)

### Community 59 - "Item image and icon options (own prints, CDN, AP"
Cohesion: 0.50
Nodes (4): Item data from API v3 fetched at build, buildLevelingItemGuideIconUrl, Official CDN item icons, used sparingly with credit, Item image and icon options (own prints, CDN, API, Lucide, game-icons, Faithful, no wiki/jar)

### Community 60 - "Game guides (Lootrun, Dungeons, Raids, World Eve"
Cohesion: 0.50
Nodes (4): Game guides (Lootrun, Dungeons, Raids, World Events, Professions, Leveling, Special Modes, Silverbull Shares, Mounts, Festivals), GsW Website portal (Guardians of Wynn, Wynncraft), Closed copyright license (LICENSE), Silverbull Shares (guild economy)

### Community 64 - "AnimacaoSobDemanda.tsx"
Cohesion: 0.25
Nodes (9): MediaPlaceholder, LootrunMediaPlaceholderProps, resolveMediaDescription(), AnimacaoSobDemanda(), AnimacaoSobDemandaProps, assinarMovimento(), lerMovimentoReduzido(), posterDe() (+1 more)

### Community 65 - "Heurísticas de Nielsen 20/40"
Cohesion: 0.20
Nodes (10): H10 Ajuda e documentação (sem glossário), H1 Visibilidade do status, H3 Controle e liberdade, H4 Consistência e padrões, H5 Prevenção de erros, H6 Reconhecer em vez de lembrar, H7 Flexibilidade e eficiência, H8 Estética e design minimalista (+2 more)

### Community 66 - "react"
Cohesion: 0.13
Nodes (21): FestivaisAbertura(), Breadcrumb(), FichaGuia(), FichaGuiaProps, GuiaEmConstrucao(), GuiaEmConstrucaoProps, SeloVersao(), montariasIntroParagraphs (+13 more)

### Community 67 - "RaidsGuiaPorRaid.tsx"
Cohesion: 0.15
Nodes (11): RaidGuideGroup, raidGuideGroups, RaidGuideRoom, raidGuidesLabels, RaidGuideVariant, ImagemDoJogo(), ImagemDoJogoProps, LazyYouTubeEmbed() (+3 more)

### Community 68 - "MontariasAlimentacao.tsx"
Cohesion: 0.18
Nodes (9): DestaqueProps, estilos, RecursoExterno(), RecursoExternoProps, comoFuncionaAlimentacao, dicaDoLevel, montariasAlimentacaoIntro, recursosDeAlimentacao (+1 more)

### Community 69 - "FestivalSecao.tsx"
Cohesion: 0.33
Nodes (7): Festival, Imagem, ComImagem(), FestivalSecao(), Paragrafos(), Subtitulo(), TextoGlitch()

### Community 70 - "GallerySection.tsx"
Cohesion: 0.33
Nodes (7): GalleryPhoto, galleryPhotos, GaleriaDialogo(), GaleriaDialogoProps, LenisPausavel, TAMANHO_DA_MINIATURA, GallerySection()

### Community 71 - "Atalho temporário: fundos pretos dos guias antigos transparentes"
Cohesion: 0.33
Nodes (6): First viewport: top bar 56px, sidebar 264px, coluna 68ch, Nesta página, Atalho temporário: fundos pretos dos guias antigos transparentes, Divergência do plano: 60ch e 16rem em vez de 68ch e 264px, Layout da página de guia: 3 colunas, sidebar 16rem, índice 15rem, Onde parei / "Continuar de", Baixa: guias antigos com fundo preto (shortcut em foundation.css)

### Community 72 - "DicaGsw.tsx"
Cohesion: 0.40
Nodes (4): DicaGsw(), Busca (gatilho Ctrl K e <dialog> em painel carvão), Dica da GsW (painel carvão), Token Carvão #191819

### Community 73 - "Cores de raridade (Normal, Unique, Rare, Legendary, Fabled, Mythic)"
Cohesion: 0.40
Nodes (5): Cores de raridade (Normal, Unique, Rare, Legendary, Fabled, Mythic), Mythic com duas entradas (#c80db1 borda/texto grande, #edb7e7 texto), The Rarity Is Signal Rule, Fonte das cores de raridade (item guide oficial, Crafted pendente), Dados do jogo a confirmar (beacons, gambits, Merchant, Crimson, Crafted, coordenadas, guild raid)

## Knowledge Gaps
- **127 isolated node(s):** `Botões (primary, secondary, ícone, sobre mídia)`, `Painel de variação, cartão de navegação, mídia`, `Navegação: top bar, sidebar, índice Nesta página, breadcrumb`, `Ícones Lucide 1,75px, sem emoji`, `The Measure Rule (60ch)` (+122 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 398 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Estrutura de pastas` connect `Estrutura de pastas` to `AnimacaoSobDemanda.tsx`, `GallerySection.tsx`, `react`, `RaidsGuiaPorRaid.tsx`, `convert-to-webp.mjs`, `RaidsPage.tsx`, `DicaGsw.tsx`, `GuiaLayout.tsx`, `site-content.ts`, `not-found.tsx`, `Arquitetura`, `compilerOptions`, `next`, `tamanhos.ts`, `app/layout.tsx`, `[P1] Sem prefers-reduced-motion no reveal e scro`, `HomePage.tsx`, `RaidsPrimeirosPassos.tsx`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._
- **What connects `Botões (primary, secondary, ícone, sobre mídia)`, `Painel de variação, cartão de navegação, mídia`, `Navegação: top bar, sidebar, índice Nesta página, breadcrumb` to the rest of the system?**
  _127 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `raids-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09247311827956989 - nodes in this community are weakly interconnected._
- **Why does `Mapa das pastas` connect `Mapa das pastas` to `convert-to-webp.mjs`, `site-content.ts`, `deploy.yml`, `Estrutura de pastas`, `AGENTS.md — regras para agentes`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Should `silverbull-shares-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05516431924882629 - nodes in this community are weakly interconnected._
- **Why does `next` connect `next` to `silverbull-shares-content.ts`, `professions-content.ts`, `leveling-content.ts`, `world-events-content.ts`, `site-content.ts`, `package.json`, `app/layout.tsx`, `HomePage.tsx`, `RaidsPrimeirosPassos.tsx`, `GallerySection.tsx`, `RaidsPage.tsx`, `GuiaLayout.tsx`, `not-found.tsx`, `Arquitetura`, `tamanhos.ts`, `special-modes-content.ts`, `react`, `RaidsGuiaPorRaid.tsx`, `GallerySection.tsx`, `DicaGsw.tsx`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `LootrunPage.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10931174089068826 - nodes in this community are weakly interconnected._
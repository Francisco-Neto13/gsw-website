# Graph Report - gsw_lp  (2026-11-18)

## Corpus Check
- 191 files · ~103,986 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: .css 5, (none) 3, .ico 1)

## Summary
- 1400 nodes · 2999 edges · 81 communities (77 shown, 4 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 146 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ed0df27b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- raids-content.ts
- silverbull-shares-content.ts
- lootrun-content.ts
- professions-content.ts
- steps
- leveling-content.ts
- dungeons-content.ts
- world-events-content.ts
- Inventário do conteúdo atual
- Assessment A: Revisão de design
- DESIGN.md — Design System GsW
- ImagemNoQuadro
- Recommended Actions (11 passos)
- Padrões
- ClickableImagePreview.tsx
- Critique Assessment B: detector + navegador
- lucide-react
- [P0] /lootrun transfere ~110 MB de mídia
- package.json
- compilerOptions
- site-content.ts
- CI/CD
- app/layout.tsx
- Diagnóstico do front (Impeccable)
- AGENTS.md — regras para agentes
- Créditos, fontes e licenças
- [P1] Sem prefers-reduced-motion no reveal e scro
- Pendências
- on
- HomePage.tsx
- Destaque.tsx
- deploy
- convert-to-webp.mjs
- GallerySection.tsx
- Navegacao proposta
- Estrutura do guia completo e plano de conteudo
- GsW Product definition (PRODUCT.md)
- GallerySection.tsx
- [P1] Tema claro: texto escuro sobre gradiente pr
- Caixa de Item (proposed visual direction)
- deploy.yml
- Sidebar dos guias
- Redesign: proposta (Fase 2)
- Grafo do projeto (Graphify) doc
- ci.yml
- GuiaLayout.tsx
- mounts-content.ts
- GuideIntro
- TopBar.tsx
- Arquitetura
- Estrutura de pastas
- WorldEventsPage.tsx
- Superfície app-guias (Impeccable)
- Figura.tsx
- Infraestrutura
- MountsPage.tsx
- FestivalSecao.tsx
- Heurísticas de Nielsen 20/40
- Animações e qualidade das imagens
- Item image and icon options (own prints, CDN, AP
- Game guides (Lootrun, Dungeons, Raids, World Eve
- global.d.ts
- postcss.config.mjs
- CLAUDE.md imports AGENTS.md
- RaidsPage.tsx
- RaidsGuiaPorRaid.tsx
- GuideIntro.tsx
- env
- env
- RaidsDaGuilda.tsx
- GallerySection.tsx
- previas.ts
- dry_run
- special-modes-content.ts
- Caixa de Item (componente assinatura)
- AnimacaoSobDemanda.tsx
- permissions
- mesclar
- promover
- deploy
- Mapa das pastas

## God Nodes (most connected - your core abstractions)
1. `DESIGN.md — Design System GsW` - 44 edges
2. `Auditoria técnica gsw_lp (Impeccable audit)` - 36 edges
3. `react` - 34 edges
4. `Estrutura de pastas` - 34 edges
5. `Diagnóstico do front (Impeccable)` - 33 edges
6. `next` - 32 edges
7. `tamanhos` - 31 edges
8. `Assessment A: Revisão de design` - 31 edges
9. `lucide-react` - 29 edges
10. `dimensoesDe()` - 27 edges

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

## Communities (81 total, 4 thin omitted)

### Community 0 - "raids-content.ts"
Cohesion: 0.10
Nodes (28): cinfrasSilverbullImage, extras, nolRooms, notgRooms, queueSteps, raidAspectDetails, raidAspectExamples, RaidCaptionImage (+20 more)

### Community 1 - "silverbull-shares-content.ts"
Cohesion: 0.06
Nodes (60): metadata, Pagina(), acquisitionCards, BombCard, bombCards, bombsIntro, bombStoreImage, bundlesStoreImage (+52 more)

### Community 2 - "lootrun-content.ts"
Cohesion: 0.07
Nodes (52): metadata, Pagina(), lootrunAdvancedSystems, lootrunAdvancedSystemsIntro, LootrunBeacon, lootrunBeacons, lootrunBeaconsIntro, lootrunBeaconsRegras (+44 more)

### Community 3 - "professions-content.ts"
Cohesion: 0.06
Nodes (45): metadata, Pagina(), bombTips, CraftingProfession, craftingProfessions, craftingXpTips, GatheringProfession, gatheringProfessions (+37 more)

### Community 4 - "steps"
Cohesion: 0.18
Nodes (17): name, runs-on, steps, front, steps, steps, steps, steps (+9 more)

### Community 5 - "leveling-content.ts"
Cohesion: 0.07
Nodes (42): metadata, Pagina(), AbilityTreeRoute, buildLevelingItemGuideIconUrl(), buildLevelingItemGuideLink(), levelingAbilityTrees, levelingArmorNotes, levelingArmorPieces (+34 more)

### Community 6 - "dungeons-content.ts"
Cohesion: 0.11
Nodes (23): AccessMode, DungeonDaLista, dungeonsAccessImages, dungeonsAccessIntro, dungeonsAccessModes, dungeonsCorrompidas, dungeonsExtraHighlights, dungeonsExtras (+15 more)

### Community 7 - "world-events-content.ts"
Cohesion: 0.11
Nodes (25): annihilationImages, annihilationPartyTips, annihilationSunTips, annihilationVideo, ImageCard, InfoCard, participationCards, participationImages (+17 more)

### Community 8 - "Inventário do conteúdo atual"
Cohesion: 0.07
Nodes (40): RaidGuidesSection.tsx, Notas de página /montarias, Área Dungeons, Área Festivais (placeholder), Área História, Área Home, Área Leveling, Área Lootrun (+32 more)

### Community 9 - "Assessment A: Revisão de design"
Cohesion: 0.09
Nodes (29): Funciona: conteúdo próprio (35 POVs, GIFs, Dica GsW), P1: site se diz oficial, sem aviso de fã, Carga cognitiva: 5 de 8 falhas, /impeccable clarify, /impeccable layout, Assessment A: Revisão de design, H2 Correspondência com o mundo real, H7 Flexibilidade e eficiência (+21 more)

### Community 10 - "DESIGN.md — Design System GsW"
Cohesion: 0.09
Nodes (32): First viewport: top bar 56px, sidebar 264px, coluna 68ch, Nesta página, DESIGN.md — Design System GsW, Busca (gatilho Ctrl K e <dialog> em painel carvão), Botões (primary, secondary, ícone, sobre mídia), Painel de variação, cartão de navegação, mídia, Navegação: top bar, sidebar, índice Nesta página, breadcrumb, Dica da GsW (painel carvão), The Digit Rule (números em JetBrains Mono) (+24 more)

### Community 11 - "ImagemNoQuadro"
Cohesion: 0.28
Nodes (12): metadata, Pagina(), DungeonsPage(), DungeonsAccessSection(), DungeonsExtrasSection(), DungeonsForgerySection(), DungeonsMerchantSection(), DungeonsRewardsSection() (+4 more)

### Community 12 - "Recommended Actions (11 passos)"
Cohesion: 0.10
Nodes (24): surface-effects.css, ThemeToggle.tsx, Audit Health Score 11/20, Cabeçalho eyebrow+h2 copiado 49 vezes, /impeccable adapt, /impeccable document, /impeccable polish, /impeccable typeset (+16 more)

### Community 13 - "Padrões"
Cohesion: 0.32
Nodes (8): Padrões, Convenção de nomes (componentes, páginas, dados, mídia, prints), Escopos já usados, Estrutura de área pages/ + sections/ + data/, Branches <tipo>/<assunto-kebab>, Padrão de commits (resumo, notas, escopo, sem coautor), Quando separar commits (máx. seis notas), Tipos: feat, fix, refactor, docs, perf, chore, ci/test/build

### Community 14 - "ClickableImagePreview.tsx"
Cohesion: 0.15
Nodes (9): dungeonsMerchantCards, dungeonsMerchantImages, dungeonsMerchantIntro, dungeonsRewardsCards, dungeonsRewardsImage, dungeonsRewardsIntro, ClickableImagePreviewProps, ImagemNoQuadroProps (+1 more)

### Community 15 - "Critique Assessment B: detector + navegador"
Cohesion: 0.12
Nodes (20): Funciona: sem erros de console, sem overflow a 390 px, Positive Findings (sem overflow, alt, foco nativo, Esc, anti-FOUC), Grade 2x2 com número fantasma, Ícones stroke genéricos em quadrados roxos, Texto da home intercambiável, Veredito: em grande parte intercambiável, Brilhos roxos decorativos não detectados, Console sem erros nem warnings nas 12 rotas (+12 more)

### Community 16 - "lucide-react"
Cohesion: 0.14
Nodes (20): metadata, Pagina(), avisoEquipamento, Destaque, estruturaDoFestival, estruturaIntro, festivais, festivaisCicloIntro (+12 more)

### Community 17 - "[P0] /lootrun transfere ~110 MB de mídia"
Cohesion: 0.24
Nodes (12): history-effects.css, HomeHeroSection.tsx, P0: /lootrun 5,5 MB ao abrir e 112 MB rolando, P1: LCP da Início 8,0 s, /impeccable optimize, Dimensão Performance, [P0] /lootrun transfere ~110 MB de mídia, [P1] LCP da home de 8,0 s (+4 more)

### Community 18 - "package.json"
Cohesion: 0.06
Nodes (41): eslintConfig, dependencies, lenis@1.3.27, lucide-react@1.66.0, next@16.1.6, react@19.2.3, react-dom@19.2.3, devDependencies (+33 more)

### Community 19 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "site-content.ts"
Cohesion: 0.15
Nodes (13): areas, contatoEmail, discordUrl, festivaisSecoes, GrupoId, modosSecoes, montariasSecoes, raidsSecoes (+5 more)

### Community 21 - "CI/CD"
Cohesion: 0.17
Nodes (16): Fluxo branch -> develop -> main -> deploy (desligado), CI/CD, Adaptações da referência (um job front, node --test, sem Semgrep), Passos para ativar o deploy (link, token, secrets, dry_run, variável), Primeira vez: criar a develop, Variável DEPLOY_HABILITADO, Deploy Vercel (obsoleto desde 18/11/2026), Fluxo de branches com merge e promoção automáticos (+8 more)

### Community 22 - "app/layout.tsx"
Cohesion: 0.11
Nodes (17): alegreya, jetbrains, metadata, pixelify, RootLayout(), viewport, contar(), Efeitos() (+9 more)

### Community 23 - "Diagnóstico do front (Impeccable)"
Cohesion: 0.16
Nodes (15): InPageNavigation.tsx, Arquitetura de conteúdo pages/sections/data, Funciona: desempenho bom fora da mídia (Lighthouse 91-94), direcao-visual.md (direção visual), Diagnóstico do front (Impeccable), O que não foi testado (leitor de tela, dispositivo, zoom 200%), P1: navegação não chega à sala; Raids 44 mil px, P1: fonte declarada nunca aplicada (+7 more)

### Community 24 - "AGENTS.md — regras para agentes"
Cohesion: 0.18
Nodes (15): AGENTS.md — regras para agentes, Comandos npm (dev, typecheck, lint, test, build, check, convert:webp), Documentação atualizada no mesmo PR, Formato de commit type(scope) em inglês, AGENTS.md limitado a 200 linhas, Lista "Nunca" (push direto, --no-verify, Artifacts, secrets, CDN oficial, tema claro, back-end), Nunca usar ícones/imagens da CDN oficial da Wynncraft sem autorização, Nunca publicar Artifacts (claude.ai) neste projeto (+7 more)

### Community 25 - "Créditos, fontes e licenças"
Cohesion: 0.15
Nodes (16): Nunca copiar texto da wiki (CC BY-NC-SA) ou do site oficial, Créditos, fontes e licenças, Aviso de site não oficial (texto do rodapé), Candidatos: game-icons.net, Faithful, Dados do jogo: API v3, wiki, cache Wynntils (só conferência), Decisão do dono: só arte própria até autorização escrita da Wynncraft, Exceção herdada: Leveling usa ícones da CDN (buildLevelingItemGuideIconUrl), Ícones e tipografia: Lucide (ISC), fontes SIL OFL 1.1 (+8 more)

### Community 26 - "[P1] Sem prefers-reduced-motion no reveal e scro"
Cohesion: 0.22
Nodes (15): app/styles/foundation.css, motion.css, Atalho temporário: fundos pretos dos guias antigos transparentes, Baixa: guias antigos com fundo preto (shortcut em foundation.css), Falsos positivos do detector descartados, P1: violeta da marca como texto 2,0-2,4:1, P1: animação ignora prefers-reduced-motion, /impeccable animate (+7 more)

### Community 27 - "Pendências"
Cohesion: 0.12
Nodes (16): Cores de raridade (Normal, Unique, Rare, Legendary, Fabled, Mythic), Mythic com duas entradas (#c80db1 borda/texto grande, #edb7e7 texto), The Rarity Is Signal Rule, Fonte das cores de raridade (item guide oficial, Crafted pendente), Pendências, Alta: aplicar o modelo de Raids aos outros guias, Alta: /comunidade como hub, Alta: conteúdo desatualizado restante (+8 more)

### Community 28 - "on"
Cohesion: 0.29
Nodes (7): on, pull_request, push, workflow_dispatch, branches, types, branches

### Community 29 - "HomePage.tsx"
Cohesion: 0.18
Nodes (13): Home(), homeCategorias, homeComeco, homeComunidade, homeDestaque, homeHero, HomePage(), particulas (+5 more)

### Community 30 - "Destaque.tsx"
Cohesion: 0.15
Nodes (11): metadata, DestaqueProps, estilos, RecursoExterno(), RecursoExternoProps, comoFuncionaAlimentacao, dicaDoLevel, montariasAlimentacaoIntro (+3 more)

### Community 31 - "deploy"
Cohesion: 0.25
Nodes (8): steps, if, name, run, uses, with, cache, node-version

### Community 32 - "convert-to-webp.mjs"
Cohesion: 0.07
Nodes (29): Mídia própria da guilda e prints novas (18/11/2026), origemDasImagens, sharp@^0.34.4, sharp, args, buildOutputPath(), collectFiles(), convertFile() (+21 more)

### Community 33 - "GallerySection.tsx"
Cohesion: 0.15
Nodes (16): Historia(), Member, members, HistoryPage(), Essence(), Era, History(), createFallbackAvatar() (+8 more)

### Community 34 - "Navegacao proposta"
Cohesion: 0.20
Nodes (9): Ficha do guia (item-box guide card), Dica da GsW (guild opinion highlight block), Guide data fields (versaoDoJogo, atualizadoEm, nivelRecomendado, fontes[], estado), Breadcrumb (Guias > Endgame > Raids), /guias index route, Mobile navigation (drawer, sticky section bar, 44 px targets), Navegacao proposta, Version and date badge ('Atualizado para a 2.2.4') (+1 more)

### Community 35 - "Estrutura do guia completo e plano de conteudo"
Cohesion: 0.20
Nodes (10): Icons: Lucide UI, game-icons.net for classes/weapons/bosses, emojis removed, Rarity colors as functional language, P0 content corrections accompanying redesign, Estrutura do guia completo e plano de conteudo, Suggested order for new pages (Montarias first), Prints: keep or replace per area, Content sources for the full guide (news, item guide, classes, map, wiki), Fontes, licencas e imagens de itens (redesign survey) (+2 more)

### Community 36 - "GsW Product definition (PRODUCT.md)"
Cohesion: 0.18
Nodes (7): Contained palette (violet-tinted darks, action violet), Accessibility minimum WCAG 2.1 AA + prefers-reduced-motion, Brand: GsW logo, violet #7116AD and charcoal #191819, GsW Product definition (PRODUCT.md), Positioning: pt-BR guide with own prints/POVs, step by step, Users: Brazilian Wynncraft players and GsW guild members, public/icon.webp

### Community 37 - "GallerySection.tsx"
Cohesion: 0.31
Nodes (8): GalleryPhoto, galleryPhotos, GaleriaDialogo(), GaleriaDialogoProps, LenisPausavel, TAMANHO_DA_MINIATURA, GallerySection(), next

### Community 38 - "[P1] Tema claro: texto escuro sobre gradiente pr"
Cohesion: 0.33
Nodes (11): theme-remaps.css, HomeAboutSection.tsx, P2: tema claro, legendas escuras sobre preto, Queixa: modo claro feio (inversão !important), /impeccable colorize, [P1] Tema claro: texto escuro sobre gradiente preto, Padrão: tema claro por remap de classes com !important, [P2] Tema claro é inversão automática que apaga a marca (+3 more)

### Community 39 - "Caixa de Item (proposed visual direction)"
Cohesion: 0.22
Nodes (7): Category default (Maxroll/Icy Veins style dark docs), Direcao visual (proposal), Alternative: Obsidiana e Encantamento, Alternative: Percurso (numbered route), Termo do jogo (glossary term opening an item box), Typography (Pixelify Sans, Alegreya Sans, JetBrains Mono via next/font), Onde parei (resume last read section)

### Community 40 - "deploy.yml"
Cohesion: 0.25
Nodes (7): concurrency, cancel-in-progress, group, jobs, name, permissions, contents

### Community 41 - "Sidebar dos guias"
Cohesion: 0.20
Nodes (8): Motion tokens and reduced motion, Guide map (Comecando, Progressao, Equipamento, Endgame, Economia, Guildas, Especiais), Guildas group (guilds, territories, wars; live API data at build), /comunidade hub (history, members, gallery, Shares, Discord), Indice 'Nesta pagina' (scroll-spy), Search palette (Ctrl+K, build-time index via Pagefind or JSON), Sidebar dos guias, Top bar (Inicio, Guias, Comunidade, search, Discord)

### Community 42 - "Redesign: proposta (Fase 2)"
Cohesion: 0.14
Nodes (14): Atualizados recentemente na Início (adiado), Form: Caixa de Item, seed 658dcb521c289a54, docs/redesign/diagnostico.md, docs/redesign/direcao-visual.md, docs/redesign/estrutura-do-guia.md, docs/redesign/fontes-e-licencas.md, docs/redesign/navegacao.md, Redesign: proposta (Fase 2) (+6 more)

### Community 43 - "Grafo do projeto (Graphify) doc"
Cohesion: 0.22
Nodes (9): .gitattributes, .graphifyignore, Fresh clone setup (graphify hook install, claude install, merge driver), Grafo do projeto (Graphify) doc, What enters the graph (code AST, docs semantic, .graphifyignore exclusions), Graph update: post-commit hook for code, /graphify --update for docs, Graphify (graphifyy 0.9.104), Versioned graph files (graph.json, GRAPH_REPORT.md, manifest, labels, semantic cache) (+1 more)

### Community 44 - "ci.yml"
Cohesion: 0.17
Nodes (11): concurrency, cancel-in-progress, group, jobs, origem, seguranca, name, name (+3 more)

### Community 45 - "GuiaLayout.tsx"
Cohesion: 0.39
Nodes (7): LayoutDosGuias(), gravarOndeParei(), GuiaLayout(), lerOndeParei(), paraSlug(), secoesDoConteudo(), GuiaSecao

### Community 46 - "mounts-content.ts"
Cohesion: 0.12
Nodes (23): Atributo, atributos, avisoMontado, Destaque, Imagem, imagemDosNiveis, montariaNova, montariasAtributosIntro (+15 more)

### Community 47 - "GuideIntro"
Cohesion: 0.31
Nodes (12): FestivaisAbertura(), Breadcrumb(), FichaGuia(), GuiaEmConstrucao(), GuiaEmConstrucaoProps, SeloVersao(), MontariasAbertura(), RaidsAbertura() (+4 more)

### Community 48 - "TopBar.tsx"
Cohesion: 0.27
Nodes (10): Busca(), indice, ItemDeBusca, procurar(), semAcento(), GuiaNavLista(), areaAtiva(), IconeDiscord() (+2 more)

### Community 49 - "Arquitetura"
Cohesion: 0.19
Nodes (12): Arquitetura, Configuração do Next (poweredByHeader off, cache 1 ano, headers, sem CSP), Estado: useState local, sem store global, Integrações externas: YouTube lazy, Google Fonts no build, CDN no Leveling, Navegação: top bar, sidebar, Nesta página, busca, Onde parei em localStorage (gsw:onde-parei:<rota>), Redirects 308 das rotas antigas para /guias/<guia>, Stack (Next 16 estático, React 19, TS strict, Tailwind 4, lucide-react) (+4 more)

### Community 50 - "Estrutura de pastas"
Cohesion: 0.22
Nodes (12): Coordenada(), FichaGuiaProps, SecaoGuiaProps, TermoProps, Termo do jogo (glossário, [[chave|texto]]), Conteúdo dos guias em data/*-content.ts com [[chave]], Estrutura de pastas, Modelo de guia (Raids é a referência) (+4 more)

### Community 51 - "WorldEventsPage.tsx"
Cohesion: 0.21
Nodes (12): metadata, Pagina(), mechanicsCards, worldEventsIntroParagraphs, worldEventsMechanicsIntro, WorldEventsPage(), WorldEventsAnnihilationSection(), WorldEventsExtrasSection() (+4 more)

### Community 52 - "Superfície app-guias (Impeccable)"
Cohesion: 0.17
Nodes (12): Superfície app-guias (Impeccable), Em aberto: contato real do aviso e cores de raridade não confirmadas, Finish: revisão final, veredito, DESIGN.md e proveniência de rasters, Leitor: jogador brasileiro de Wynncraft, à noite, jogo aberto, Momento memorável: hover em "Aspect" abre caixa de item, Own-world: paleta e tipografia da superfície, Restrições: só escuro, site de fã, texto e arte próprios, pt-BR, Story: fluxo do leitor (sidebar/busca, ficha, índice, POV, continuar) (+4 more)

### Community 53 - "Figura.tsx"
Cohesion: 0.30
Nodes (9): CreditoImagem(), Figura(), FiguraProps, colunasPara(), Galeria(), GaleriaProps, ItemDaGaleria, sizesPara() (+1 more)

### Community 54 - "Infraestrutura"
Cohesion: 0.22
Nodes (10): Só front: sem back-end, banco, API ou env vars, Infraestrutura, Notas de build (Node 24, Google Fonts, allow-scripts sharp, cache .next), Candidato: VPS (Docker standalone, deploy SSH) seguindo regras da VPS, Hospedagem a definir (Vercel abandonada; último deploy f8063b4), Mídia: public/ ~100MB, 0,4-0,9MB por página, cache 1 ano exige nome novo, Sem Docker, banco, fila, storage, monitoramento, analytics, Saída: next start (redirects 308 e otimizador de imagens) (+2 more)

### Community 55 - "MountsPage.tsx"
Cohesion: 0.17
Nodes (15): metadata, Pagina(), Destaque(), atributosDoFilho, avisoDoBreeding, comoFazerBreeding, corDoFilho, montariasBreedingIntro (+7 more)

### Community 56 - "FestivalSecao.tsx"
Cohesion: 0.27
Nodes (10): Festival, Imagem, ComImagem(), ehPaisagem(), FestivalSecao(), Paragrafos(), Subtitulo(), DicaGsw() (+2 more)

### Community 57 - "Heurísticas de Nielsen 20/40"
Cohesion: 0.18
Nodes (11): P2: 404 padrão do Next em inglês, H10 Ajuda e documentação (sem glossário), H1 Visibilidade do status, H3 Controle e liberdade, H4 Consistência e padrões, H5 Prevenção de erros, H6 Reconhecer em vez de lembrar, H8 Estética e design minimalista (+3 more)

### Community 58 - "Animações e qualidade das imagens"
Cohesion: 0.20
Nodes (9): 1. Estudo das referências, 2. Decisões, 3. Linguagem de movimento, 5. Qualidade das imagens, Animações e qualidade das imagens, chiconeto.dev, Gastos (pasta local, só leitura), Sites premiados e de jogos (Awwwards, Godly) (+1 more)

### Community 59 - "Item image and icon options (own prints, CDN, AP"
Cohesion: 0.50
Nodes (4): Item data from API v3 fetched at build, buildLevelingItemGuideIconUrl, Official CDN item icons, used sparingly with credit, Item image and icon options (own prints, CDN, API, Lucide, game-icons, Faithful, no wiki/jar)

### Community 60 - "Game guides (Lootrun, Dungeons, Raids, World Eve"
Cohesion: 0.50
Nodes (4): Game guides (Lootrun, Dungeons, Raids, World Events, Professions, Leveling, Special Modes, Silverbull Shares, Mounts, Festivals), GsW Website portal (Guardians of Wynn, Wynncraft), Closed copyright license (LICENSE), Silverbull Shares (guild economy)

### Community 64 - "RaidsPage.tsx"
Cohesion: 0.19
Nodes (13): metadata, Pagina(), FimDoGuia(), FimDoGuiaProps, Termo(), ehChave(), TextoComTermos(), raidFontes (+5 more)

### Community 65 - "RaidsGuiaPorRaid.tsx"
Cohesion: 0.17
Nodes (13): RaidGuideGroup, RaidGuideRoom, raidGuidesLabels, RaidGuideVariant, BlocoDaRaid(), RaidsGuiaPorRaid(), Sala(), Variacao() (+5 more)

### Community 66 - "GuideIntro.tsx"
Cohesion: 0.16
Nodes (13): metadata, PaginaDosGuias(), GuiaNavListaProps, GuideIntroProps, TextoAnimadoProps, specialModesIntroParagraphs, Selo de versão e chips (em breve, raridade), Token Âmbar #f2c063 (Revisão pendente) (+5 more)

### Community 67 - "env"
Cohesion: 0.25
Nodes (8): env, DEPLOY_HABILITADO, DRY_RUN, NEXT_TELEMETRY_DISABLED, VERCEL_ORG_ID, VERCEL_PROJECT_ID, VERCEL_TELEMETRY_DISABLED, VERCEL_TOKEN

### Community 68 - "env"
Cohesion: 0.22
Nodes (9): BASE, EVENTO, GH_TOKEN, NEXT_TELEMETRY_DISABLED, ORIGEM, PR, REPO, TESTADO (+1 more)

### Community 69 - "RaidsDaGuilda.tsx"
Cohesion: 0.28
Nodes (7): guildRaidAspectDistribution, guildRaidAvailableImage, guildRaidsDescription, dimensoes, tamanhoDe(), RaidsDaGuilda(), RaidsPrimeirosPassos()

### Community 70 - "GallerySection.tsx"
Cohesion: 0.16
Nodes (25): Footer.tsx, Navbar.tsx, Critério de aceite da Fase 3, Lighthouse celular simulado (4 rotas), P2: ícones do rodapé sem nome; alvos 20-32 px, P1: galeria /historia sem teclado; modais sem foco, P1: menu do celular fechado continua no Tab, /impeccable harden (+17 more)

### Community 71 - "previas.ts"
Cohesion: 0.33
Nodes (8): arquivoDoGuia, conteudoDoGuia, PreviaDoGuia, previaDoGuia(), tempoDeLeitura(), textosDe(), todasAsPrevias(), topicosDoGuia()

### Community 72 - "dry_run"
Cohesion: 0.29
Nodes (7): default, description, type, dry_run, on, workflow_dispatch, inputs

### Community 73 - "special-modes-content.ts"
Cohesion: 0.12
Nodes (25): metadata, Pagina(), SecaoGuia(), avisoIrreversivel, combinacoesIntro, combinacoesParagrafos, comoFuncionaIntro, desafioDaComunidade (+17 more)

### Community 74 - "Caixa de Item (componente assinatura)"
Cohesion: 0.29
Nodes (7): Thesis: informação de consulta em caixa de item, Caixa de Item (componente assinatura), Creative North Star: "A Caixa de Item", Ficha do guia (uma por página), Formas: cantos 6/4px, réguas 1px, tracejado = ainda não existe, borda dupla, Token Fundo da Caixa #160c20, Token Borda Externa da Caixa #2a0f40

### Community 75 - "AnimacaoSobDemanda.tsx"
Cohesion: 0.43
Nodes (6): AnimacaoSobDemanda(), AnimacaoSobDemandaProps, assinarMovimento(), lerMovimentoReduzido(), posterDe(), tabela

### Community 76 - "permissions"
Cohesion: 0.40
Nodes (6): permissions, permissions, actions, contents, pull-requests, permissions

### Community 77 - "mesclar"
Cohesion: 0.40
Nodes (5): mesclar, if, name, needs, runs-on

### Community 78 - "promover"
Cohesion: 0.40
Nodes (5): promover, if, name, needs, runs-on

### Community 79 - "deploy"
Cohesion: 0.40
Nodes (5): if, name, runs-on, timeout-minutes, deploy

## Knowledge Gaps
- **127 isolated node(s):** `Botões (primary, secondary, ícone, sobre mídia)`, `Painel de variação, cartão de navegação, mídia`, `Navegação: top bar, sidebar, índice Nesta página, breadcrumb`, `Ícones Lucide 1,75px, sem emoji`, `The Measure Rule (60ch)` (+122 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 402 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Mapa das pastas` connect `Mapa das pastas` to `convert-to-webp.mjs`, `deploy.yml`, `ci.yml`, `Estrutura de pastas`, `site-content.ts`, `AGENTS.md — regras para agentes`?**
  _High betweenness centrality (0.157) - this node is a cross-community bridge._
- **What connects `Botões (primary, secondary, ícone, sobre mídia)`, `Painel de variação, cartão de navegação, mídia`, `Navegação: top bar, sidebar, índice Nesta página, breadcrumb` to the rest of the system?**
  _127 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `raids-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.09659090909090909 - nodes in this community are weakly interconnected._
- **Why does `Estrutura de pastas` connect `Estrutura de pastas` to `RaidsPage.tsx`, `GallerySection.tsx`, `GuideIntro.tsx`, `RaidsGuiaPorRaid.tsx`, `convert-to-webp.mjs`, `AnimacaoSobDemanda.tsx`, `GuiaLayout.tsx`, `ClickableImagePreview.tsx`, `GuideIntro`, `TopBar.tsx`, `Arquitetura`, `compilerOptions`, `site-content.ts`, `Figura.tsx`, `app/layout.tsx`, `[P1] Sem prefers-reduced-motion no reveal e scro`, `HomePage.tsx`, `Destaque.tsx`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Should `silverbull-shares-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Why does `next` connect `GallerySection.tsx` to `silverbull-shares-content.ts`, `lootrun-content.ts`, `professions-content.ts`, `leveling-content.ts`, `world-events-content.ts`, `ClickableImagePreview.tsx`, `package.json`, `site-content.ts`, `app/layout.tsx`, `HomePage.tsx`, `Destaque.tsx`, `GallerySection.tsx`, `GuiaLayout.tsx`, `TopBar.tsx`, `Arquitetura`, `Estrutura de pastas`, `Figura.tsx`, `RaidsPage.tsx`, `RaidsGuiaPorRaid.tsx`, `GuideIntro.tsx`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `lootrun-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07080745341614907 - nodes in this community are weakly interconnected._
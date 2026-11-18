# Graph Report - gsw_lp  (2026-11-18)

## Corpus Check
- 208 files · ~108,807 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: .css 4, (none) 3, .ico 1)

## Summary
- 1438 nodes · 3337 edges · 80 communities (76 shown, 4 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 146 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d206c480`
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
- app/layout.tsx
- Inventário do conteúdo atual
- Assessment A: Revisão de design
- DESIGN.md — Design System GsW
- SecaoGuia
- Recommended Actions (11 passos)
- Padrões
- CartaoDoSite.tsx
- Critique Assessment B: detector + navegador
- FestivalSecao.tsx
- [P0] /lootrun transfere ~110 MB de mídia
- package.json
- compilerOptions
- site-content.ts
- CI/CD
- Efeitos.tsx
- Diagnóstico do front (Impeccable)
- AGENTS.md — regras para agentes
- Créditos, fontes e licenças
- [P1] Sem prefers-reduced-motion no reveal e scro
- Pendências
- on
- HomePage.tsx
- dimensoesDe
- MidiasLootrun.tsx
- convert-to-webp.mjs
- site-content.ts
- Navegacao proposta
- Estrutura do guia completo e plano de conteudo
- GsW Product definition (PRODUCT.md)
- Heurísticas de Nielsen 20/40
- [P1] Tema claro: texto escuro sobre gradiente pr
- Caixa de Item (proposed visual direction)
- deploy.yml
- Sidebar dos guias
- Redesign: proposta (Fase 2)
- Grafo do projeto (Graphify) doc
- ci.yml
- SecaoGuia.tsx
- mounts-content.ts
- TextoComTermos
- GuiaLayout.tsx
- Arquitetura
- TextoComTermos.tsx
- world-events-content.ts
- Superfície app-guias (Impeccable)
- LootrunMediaPlaceholder.tsx
- Infraestrutura
- LootrunPage.tsx
- scripts
- LootrunBeaconsSection.tsx
- Atalho temporário: fundos pretos dos guias antigos transparentes
- Item image and icon options (own prints, CDN, AP
- Game guides (Lootrun, Dungeons, Raids, World Eve
- global.d.ts
- postcss.config.mjs
- CLAUDE.md imports AGENTS.md
- dry_run
- env
- react
- Auditoria técnica gsw_lp (Impeccable audit)
- dependencies
- steps
- HistoryPage.tsx
- Caixa de Item (componente assinatura)
- SilverbullBombsSection.tsx
- special-modes-content.ts
- eslint.config.mjs
- permissions
- Cores de raridade (Normal, Unique, Rare, Legendary, Fabled, Mythic)
- mesclar
- promover
- pre-push

## God Nodes (most connected - your core abstractions)
1. `SecaoGuia()` - 59 edges
2. `dimensoesDe()` - 45 edges
3. `DESIGN.md — Design System GsW` - 44 edges
4. `react` - 41 edges
5. `Auditoria técnica gsw_lp (Impeccable audit)` - 36 edges
6. `Estrutura de pastas` - 34 edges
7. `Diagnóstico do front (Impeccable)` - 33 edges
8. `lucide-react` - 32 edges
9. `Assessment A: Revisão de design` - 31 edges
10. `TextoComTermos()` - 30 edges

## Surprising Connections (you probably didn't know these)
- `Padrão de commits (resumo, notas, escopo, sem coautor)` --semantically_similar_to--> `Formato de commit type(scope) em inglês`  [INFERRED] [semantically similar]
  docs/PADROES.md → AGENTS.md
- `Nunca usar ícones/imagens da CDN oficial da Wynncraft sem autorização` --semantically_similar_to--> `Decisão do dono: só arte própria até autorização escrita da Wynncraft`  [INFERRED] [semantically similar]
  AGENTS.md → docs/CREDITOS.md
- `Onde parei em localStorage (gsw:onde-parei:<rota>)` --semantically_similar_to--> `Onde parei / "Continuar de"`  [INFERRED] [semantically similar]
  docs/ARQUITETURA.md → DESIGN.md
- `4. O que foi aplicado, e onde` --references--> `TransicaoDePagina()`  [INFERRED]
  docs/redesign/ANIMACOES.md → components/shared/TransicaoDePagina.tsx
- `4. O que foi aplicado, e onde` --references--> `TextoAnimado()`  [INFERRED]
  docs/redesign/ANIMACOES.md → components/shared/TextoAnimado.tsx

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

## Communities (80 total, 4 thin omitted)

### Community 0 - "raids-content.ts"
Cohesion: 0.05
Nodes (67): metadata, Pagina(), CreditoImagem(), Figura(), FiguraProps, FimDoGuia(), colunasPara(), Galeria() (+59 more)

### Community 1 - "silverbull-shares-content.ts"
Cohesion: 0.09
Nodes (30): assinaturaBeneficios, assinaturaImagem, assinaturaIntro, BombCard, cratesChances, cratesImagens, cratesIntro, cratesOrigem (+22 more)

### Community 2 - "lootrun-content.ts"
Cohesion: 0.15
Nodes (15): LootrunCamp, LootrunCombo, lootrunCombos, lootrunCombosIntro, lootrunExtras, lootrunExtrasIntro, lootrunExtraSupportMedia, lootrunGuideIntro (+7 more)

### Community 3 - "professions-content.ts"
Cohesion: 0.08
Nodes (42): metadata, Pagina(), bombasDeProfissao, coletaImagens, coletaIntro, coletaRegras, craftingImagens, craftingIntro (+34 more)

### Community 4 - "steps"
Cohesion: 0.18
Nodes (17): name, runs-on, steps, front, steps, steps, steps, steps (+9 more)

### Community 5 - "leveling-content.ts"
Cohesion: 0.08
Nodes (41): metadata, Pagina(), AbilityTreeRoute, armasIntro, arvoresIntro, iconeDoItem(), levelingAbilityTrees, levelingArmorNotes (+33 more)

### Community 6 - "dungeons-content.ts"
Cohesion: 0.08
Nodes (32): acessoImagens, acessoIntro, acessoModos, Destaque, dicaDaGuilda, DungeonDaLista, dungeonsCorrompidas, dungeonsDicas (+24 more)

### Community 7 - "app/layout.tsx"
Cohesion: 0.15
Nodes (13): alegreya, jetbrains, metadata, pixelify, viewport, P1: fonte declarada nunca aplicada, Queixa: fonte fraca (Geist nunca aplicada), [P1] Tipografia sem identidade: Geist nunca aplicada (+5 more)

### Community 8 - "Inventário do conteúdo atual"
Cohesion: 0.08
Nodes (39): RaidGuidesSection.tsx, Notas de página /montarias, Área Dungeons, Área Festivais (placeholder), Área Home, Área Leveling, Área Lootrun, Área Modos Especiais (+31 more)

### Community 9 - "Assessment A: Revisão de design"
Cohesion: 0.11
Nodes (22): Funciona: conteúdo próprio (35 POVs, GIFs, Dica GsW), P1: site se diz oficial, sem aviso de fã, Carga cognitiva: 5 de 8 falhas, /impeccable clarify, Assessment A: Revisão de design, H2 Correspondência com o mundo real, GuideIntro min-h-screen vazio, Jornada emocional (pico nos prints, fim sem CTA) (+14 more)

### Community 10 - "DESIGN.md — Design System GsW"
Cohesion: 0.09
Nodes (30): DESIGN.md — Design System GsW, Busca (gatilho Ctrl K e <dialog> em painel carvão), Botões (primary, secondary, ícone, sobre mídia), Painel de variação, cartão de navegação, mídia, Navegação: top bar, sidebar, índice Nesta página, breadcrumb, Selo de versão e chips (em breve, raridade), Dica da GsW (painel carvão), The Digit Rule (números em JetBrains Mono) (+22 more)

### Community 11 - "SecaoGuia"
Cohesion: 0.25
Nodes (15): metadata, Pagina(), DungeonsPage(), DungeonsAccessSection(), DungeonsExtrasSection(), DungeonsForgerySection(), DungeonsMerchantSection(), DungeonsRewardsSection() (+7 more)

### Community 12 - "Recommended Actions (11 passos)"
Cohesion: 0.09
Nodes (26): surface-effects.css, ThemeToggle.tsx, P2: texto 9-10 px; saltos H2->H4, Audit Health Score 11/20, Cabeçalho eyebrow+h2 copiado 49 vezes, /impeccable adapt, /impeccable animate, /impeccable document (+18 more)

### Community 13 - "Padrões"
Cohesion: 0.32
Nodes (8): Padrões, Convenção de nomes (componentes, páginas, dados, mídia, prints), Escopos já usados, Estrutura de área pages/ + sections/ + data/, Branches <tipo>/<assunto-kebab>, Padrão de commits (resumo, notas, escopo, sem coautor), Quando separar commits (máx. seis notas), Tipos: feat, fix, refactor, docs, perf, chore, ci/test/build

### Community 14 - "CartaoDoSite.tsx"
Cohesion: 0.18
Nodes (17): metadata, Pagina(), CategoriaId, categorias, curadoria, sites, sitesDoGrupo(), sitesFontes (+9 more)

### Community 15 - "Critique Assessment B: detector + navegador"
Cohesion: 0.11
Nodes (22): Queixa: pouca ligação com o jogo, Funciona: sem erros de console, sem overflow a 390 px, Positive Findings (sem overflow, alt, foco nativo, Esc, anti-FOUC), Grade 2x2 com número fantasma, Ícones stroke genéricos em quadrados roxos, Linguagem visual de tooltip do Wynncraft, Notas de página /dungeons, Texto da home intercambiável (+14 more)

### Community 16 - "FestivalSecao.tsx"
Cohesion: 0.11
Nodes (28): metadata, Pagina(), avisoEquipamento, Destaque, estruturaDoFestival, estruturaIntro, festivais, festivaisCicloIntro (+20 more)

### Community 17 - "[P0] /lootrun transfere ~110 MB de mídia"
Cohesion: 0.27
Nodes (11): history-effects.css, HomeHeroSection.tsx, P1: LCP da Início 8,0 s, /impeccable optimize, Dimensão Performance, [P0] /lootrun transfere ~110 MB de mídia, [P1] LCP da home de 8,0 s, [P2] Handler de scroll lê layout a cada evento (+3 more)

### Community 18 - "package.json"
Cohesion: 0.15
Nodes (18): devDependencies, gifsicle@^7.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @types/node@^20, @types/react@^19, @types/react-dom@^19, typescript@^5 (+10 more)

### Community 19 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "site-content.ts"
Cohesion: 0.12
Nodes (22): metadata, PaginaDosGuias(), metadata, FimDoGuiaProps, Busca(), indice, ItemDeBusca, procurar() (+14 more)

### Community 21 - "CI/CD"
Cohesion: 0.17
Nodes (16): Fluxo branch -> develop -> main -> deploy (desligado), CI/CD, Adaptações da referência (um job front, node --test, sem Semgrep), Passos para ativar o deploy (link, token, secrets, dry_run, variável), Primeira vez: criar a develop, Variável DEPLOY_HABILITADO, Deploy Vercel (obsoleto desde 18/11/2026), Fluxo de branches com merge e promoção automáticos (+8 more)

### Community 22 - "Efeitos.tsx"
Cohesion: 0.27
Nodes (8): RootLayout(), contar(), Efeitos(), JanelaComLenis, LenisMinimo, movimentoReduzido(), ponteiroFino(), SiteFooter()

### Community 23 - "Diagnóstico do front (Impeccable)"
Cohesion: 0.13
Nodes (22): InPageNavigation.tsx, Navbar.tsx, Arquitetura de conteúdo pages/sections/data, Critério de aceite da Fase 3, Funciona: desempenho bom fora da mídia (Lighthouse 91-94), direcao-visual.md (direção visual), Diagnóstico do front (Impeccable), O que não foi testado (leitor de tela, dispositivo, zoom 200%) (+14 more)

### Community 24 - "AGENTS.md — regras para agentes"
Cohesion: 0.17
Nodes (16): AGENTS.md — regras para agentes, Comandos npm (dev, typecheck, lint, test, build, check, convert:webp), Documentação atualizada no mesmo PR, Formato de commit type(scope) em inglês, AGENTS.md limitado a 200 linhas, Lista "Nunca" (push direto, --no-verify, Artifacts, secrets, CDN oficial, tema claro, back-end), Nunca usar ícones/imagens da CDN oficial da Wynncraft sem autorização, Nunca copiar texto da wiki (CC BY-NC-SA) ou do site oficial (+8 more)

### Community 25 - "Créditos, fontes e licenças"
Cohesion: 0.15
Nodes (16): Créditos, fontes e licenças, Aviso de site não oficial (texto do rodapé), Candidatos: game-icons.net, Faithful, Dados do jogo: API v3, wiki, cache Wynntils (só conferência), Decisão do dono: só arte própria até autorização escrita da Wynncraft, Exceção herdada: Leveling usa ícones da CDN (buildLevelingItemGuideIconUrl), Ícones e tipografia: Lucide (ISC), fontes SIL OFL 1.1, Regra: imagens próprias primeiro (+8 more)

### Community 26 - "[P1] Sem prefers-reduced-motion no reveal e scro"
Cohesion: 0.29
Nodes (12): app/styles/foundation.css, motion.css, Falsos positivos do detector descartados, P1: violeta da marca como texto 2,0-2,4:1, P1: animação ignora prefers-reduced-motion, [P1] Sem prefers-reduced-motion no reveal e scroll suave, [P1] Texto roxo da marca com contraste 2,25:1, Padrão: cor da marca para texto e superfície (+4 more)

### Community 27 - "Pendências"
Cohesion: 0.15
Nodes (13): Em aberto: contato real do aviso e cores de raridade não confirmadas, Pendências, Alta: aplicar o modelo de Raids aos outros guias, Alta: /comunidade como hub, Alta: conteúdo desatualizado restante, CI: Dependabot não adicionado, Pendência: e-mail de contato do aviso (contatoEmail), Média: Montarias e Festivais (+5 more)

### Community 28 - "on"
Cohesion: 0.29
Nodes (7): on, pull_request, push, workflow_dispatch, branches, types, branches

### Community 29 - "HomePage.tsx"
Cohesion: 0.14
Nodes (19): Home(), homeCategorias, homeComeco, homeComunidade, homeDestaque, homeFerramentas, homeHero, HomePage() (+11 more)

### Community 30 - "dimensoesDe"
Cohesion: 0.19
Nodes (16): metadata, Pagina(), DicaGsw(), comoConseguir, lojaImagens, oQueSaoIntro, sharesFontes, tiposDeShare (+8 more)

### Community 31 - "MidiasLootrun.tsx"
Cohesion: 0.27
Nodes (9): Coordenada(), lootrunCamps, lootrunCampsIntro, lootrunParticipation, idDoCamp(), LootrunCampsSection(), LootrunParticipationSection(), MidiasLootrun() (+1 more)

### Community 32 - "convert-to-webp.mjs"
Cohesion: 0.07
Nodes (31): sitePageLinks, origemDasImagens, sharp, args, buildOutputPath(), collectFiles(), convertFile(), customTargets (+23 more)

### Community 33 - "site-content.ts"
Cohesion: 0.12
Nodes (17): Mapa das pastas, areas, contato, discordUrl, dungeonsSecoes, festivaisSecoes, GrupoId, levelingSecoes (+9 more)

### Community 34 - "Navegacao proposta"
Cohesion: 0.20
Nodes (9): Ficha do guia (item-box guide card), Dica da GsW (guild opinion highlight block), Guide data fields (versaoDoJogo, atualizadoEm, nivelRecomendado, fontes[], estado), Breadcrumb (Guias > Endgame > Raids), /guias index route, Mobile navigation (drawer, sticky section bar, 44 px targets), Navegacao proposta, Version and date badge ('Atualizado para a 2.2.4') (+1 more)

### Community 35 - "Estrutura do guia completo e plano de conteudo"
Cohesion: 0.20
Nodes (10): Icons: Lucide UI, game-icons.net for classes/weapons/bosses, emojis removed, Rarity colors as functional language, P0 content corrections accompanying redesign, Estrutura do guia completo e plano de conteudo, Suggested order for new pages (Montarias first), Prints: keep or replace per area, Content sources for the full guide (news, item guide, classes, map, wiki), Fontes, licencas e imagens de itens (redesign survey) (+2 more)

### Community 36 - "GsW Product definition (PRODUCT.md)"
Cohesion: 0.18
Nodes (7): Contained palette (violet-tinted darks, action violet), Accessibility minimum WCAG 2.1 AA + prefers-reduced-motion, Brand: GsW logo, violet #7116AD and charcoal #191819, GsW Product definition (PRODUCT.md), Positioning: pt-BR guide with own prints/POVs, step by step, Users: Brazilian Wynncraft players and GsW guild members, public/icon.webp

### Community 37 - "Heurísticas de Nielsen 20/40"
Cohesion: 0.22
Nodes (9): H10 Ajuda e documentação (sem glossário), H1 Visibilidade do status, H3 Controle e liberdade, H4 Consistência e padrões, H5 Prevenção de erros, H6 Reconhecer em vez de lembrar, H8 Estética e design minimalista, Heurísticas de Nielsen 20/40 (+1 more)

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

### Community 45 - "SecaoGuia.tsx"
Cohesion: 0.22
Nodes (9): SecaoGuiaProps, lootrunAdvancedSystems, lootrunAdvancedSystemsIntro, LootrunMechanicBlock, lootrunMechanicBlocks, lootrunMechanicsIntro, BlocosDaRun(), LootrunAdvancedSystemsSection() (+1 more)

### Community 46 - "mounts-content.ts"
Cohesion: 0.07
Nodes (46): metadata, Pagina(), Destaque(), DestaqueProps, estilos, RecursoExterno(), RecursoExternoProps, Atributo (+38 more)

### Community 47 - "TextoComTermos"
Cohesion: 0.15
Nodes (29): DungeonsAbertura(), FestivaisAbertura(), Breadcrumb(), FichaGuia(), SeloVersao(), ehChave(), TextoComTermos(), LevelingAbertura() (+21 more)

### Community 48 - "GuiaLayout.tsx"
Cohesion: 0.39
Nodes (7): LayoutDosGuias(), gravarOndeParei(), GuiaLayout(), lerOndeParei(), paraSlug(), secoesDoConteudo(), GuiaSecao

### Community 49 - "Arquitetura"
Cohesion: 0.14
Nodes (15): GuiaEmConstrucao(), GuiaEmConstrucaoProps, Arquitetura, Configuração do Next (poweredByHeader off, cache 1 ano, headers, sem CSP), Estado: useState local, sem store global, Integrações externas: YouTube lazy, Google Fonts no build, CDN no Leveling, Navegação: top bar, sidebar, Nesta página, busca, Onde parei em localStorage (gsw:onde-parei:<rota>) (+7 more)

### Community 50 - "TextoComTermos.tsx"
Cohesion: 0.29
Nodes (9): Termo(), TermoProps, Termo do jogo (glossário, [[chave|texto]]), Conteúdo dos guias em data/*-content.ts com [[chave]], Estrutura de pastas, Modelo de guia (Raids é a referência), ChaveDoGlossario, glossario (+1 more)

### Community 51 - "world-events-content.ts"
Cohesion: 0.10
Nodes (33): metadata, Pagina(), annihilationFicha, annihilationImagens, annihilationIntro, annihilationOutros, annihilationParty, annihilationSol (+25 more)

### Community 52 - "Superfície app-guias (Impeccable)"
Cohesion: 0.20
Nodes (10): Superfície app-guias (Impeccable), Finish: revisão final, veredito, DESIGN.md e proveniência de rasters, Leitor: jogador brasileiro de Wynncraft, à noite, jogo aberto, Momento memorável: hover em "Aspect" abre caixa de item, Own-world: paleta e tipografia da superfície, Restrições: só escuro, site de fã, texto e arte próprios, pt-BR, Story: fluxo do leitor (sidebar/busca, ficha, índice, POV, continuar), Caixa de item só em ficha, glossário e páginas de caixa única (+2 more)

### Community 53 - "LootrunMediaPlaceholder.tsx"
Cohesion: 0.12
Nodes (19): MediaPlaceholder, LootrunMediaPlaceholder(), LootrunMediaPlaceholderProps, resolveMediaDescription(), RaidImageCard(), RaidImageCardProps, AnimacaoSobDemanda(), AnimacaoSobDemandaProps (+11 more)

### Community 54 - "Infraestrutura"
Cohesion: 0.22
Nodes (10): Só front: sem back-end, banco, API ou env vars, Infraestrutura, Notas de build (Node 24, Google Fonts, allow-scripts sharp, cache .next), Candidato: VPS (Docker standalone, deploy SSH) seguindo regras da VPS, Hospedagem a definir (Vercel abandonada; último deploy f8063b4), Mídia: public/ ~100MB, 0,4-0,9MB por página, cache 1 ano exige nome novo, Sem Docker, banco, fila, storage, monitoramento, analytics, Saída: next start (redirects 308 e otimizador de imagens) (+2 more)

### Community 55 - "LootrunPage.tsx"
Cohesion: 0.24
Nodes (9): metadata, Pagina(), lootrunDivisions, lootrunDivisoesTabela, lootrunFontes, LootrunPage(), ListaDoCombo(), LootrunCombosSection() (+1 more)

### Community 56 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, check, convert:webp, dev, lint, prepare, start (+2 more)

### Community 57 - "LootrunBeaconsSection.tsx"
Cohesion: 0.33
Nodes (8): LootrunBeacon, lootrunBeacons, lootrunBeaconsIntro, lootrunBeaconsRegras, iconeDoBeacon(), LootrunBeaconsSection(), MarcadorBeacon(), MarcadorDesenhado()

### Community 58 - "Atalho temporário: fundos pretos dos guias antigos transparentes"
Cohesion: 0.33
Nodes (6): First viewport: top bar 56px, sidebar 264px, coluna 68ch, Nesta página, Atalho temporário: fundos pretos dos guias antigos transparentes, Divergência do plano: 60ch e 16rem em vez de 68ch e 264px, Layout da página de guia: 3 colunas, sidebar 16rem, índice 15rem, Onde parei / "Continuar de", Baixa: guias antigos com fundo preto (shortcut em foundation.css)

### Community 59 - "Item image and icon options (own prints, CDN, AP"
Cohesion: 0.50
Nodes (4): Item data from API v3 fetched at build, buildLevelingItemGuideIconUrl, Official CDN item icons, used sparingly with credit, Item image and icon options (own prints, CDN, API, Lucide, game-icons, Faithful, no wiki/jar)

### Community 60 - "Game guides (Lootrun, Dungeons, Raids, World Eve"
Cohesion: 0.50
Nodes (4): Game guides (Lootrun, Dungeons, Raids, World Events, Professions, Leveling, Special Modes, Silverbull Shares, Mounts, Festivals), GsW Website portal (Guardians of Wynn, Wynncraft), Closed copyright license (LICENSE), Silverbull Shares (guild economy)

### Community 64 - "dry_run"
Cohesion: 0.29
Nodes (7): default, description, type, dry_run, on, workflow_dispatch, inputs

### Community 65 - "env"
Cohesion: 0.22
Nodes (9): BASE, EVENTO, GH_TOKEN, NEXT_TELEMETRY_DISABLED, ORIGEM, PR, REPO, TESTADO (+1 more)

### Community 66 - "react"
Cohesion: 0.34
Nodes (6): FichaGuiaProps, GuideIntroProps, TextoAnimadoProps, Guia, guias, react

### Community 67 - "Auditoria técnica gsw_lp (Impeccable audit)"
Cohesion: 0.18
Nodes (22): Footer.tsx, Lighthouse celular simulado (4 rotas), P2: ícones do rodapé sem nome; alvos 20-32 px, P1: galeria /historia sem teclado; modais sem foco, /impeccable harden, Dimensão Accessibility, Auditoria técnica gsw_lp (Impeccable audit), Lighthouse 12.8.2 (mobile) (+14 more)

### Community 68 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, lenis@1.3.27, lucide-react@1.66.0, next@16.1.6, react@19.2.3, react-dom@19.2.3, sharp@^0.34.4, lenis (+1 more)

### Community 69 - "steps"
Cohesion: 0.10
Nodes (21): env, if, name, runs-on, steps, timeout-minutes, DEPLOY_HABILITADO, DRY_RUN (+13 more)

### Community 70 - "HistoryPage.tsx"
Cohesion: 0.11
Nodes (21): Historia(), GalleryPhoto, galleryPhotos, Member, members, HistoryPage(), Essence(), GaleriaDialogo() (+13 more)

### Community 71 - "Caixa de Item (componente assinatura)"
Cohesion: 0.29
Nodes (7): Thesis: informação de consulta em caixa de item, Caixa de Item (componente assinatura), Creative North Star: "A Caixa de Item", Ficha do guia (uma por página), Formas: cantos 6/4px, réguas 1px, tracejado = ainda não existe, borda dupla, Token Fundo da Caixa #160c20, Token Borda Externa da Caixa #2a0f40

### Community 72 - "SilverbullBombsSection.tsx"
Cohesion: 0.33
Nodes (4): bombasImagem, bombasIntro, bombCards, icones

### Community 73 - "special-modes-content.ts"
Cohesion: 0.12
Nodes (24): metadata, Pagina(), avisoIrreversivel, combinacoesIntro, combinacoesParagrafos, comoFuncionaIntro, desafioDaComunidade, Destaque (+16 more)

### Community 74 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.1.6, eslint, eslint-config-next

### Community 75 - "permissions"
Cohesion: 0.40
Nodes (6): permissions, permissions, actions, contents, pull-requests, permissions

### Community 76 - "Cores de raridade (Normal, Unique, Rare, Legendary, Fabled, Mythic)"
Cohesion: 0.40
Nodes (5): Cores de raridade (Normal, Unique, Rare, Legendary, Fabled, Mythic), Mythic com duas entradas (#c80db1 borda/texto grande, #edb7e7 texto), The Rarity Is Signal Rule, Fonte das cores de raridade (item guide oficial, Crafted pendente), Dados do jogo a confirmar (beacons, gambits, Merchant, Crimson, Crafted, coordenadas, guild raid)

### Community 77 - "mesclar"
Cohesion: 0.40
Nodes (5): mesclar, if, name, needs, runs-on

### Community 78 - "promover"
Cohesion: 0.40
Nodes (5): promover, if, name, needs, runs-on

## Knowledge Gaps
- **127 isolated node(s):** `Botões (primary, secondary, ícone, sobre mídia)`, `Painel de variação, cartão de navegação, mídia`, `Navegação: top bar, sidebar, índice Nesta página, breadcrumb`, `Ícones Lucide 1,75px, sem emoji`, `The Measure Rule (60ch)` (+122 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 376 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Mapa das pastas` connect `site-content.ts` to `convert-to-webp.mjs`, `deploy.yml`, `ci.yml`, `pre-push`, `TextoComTermos.tsx`, `AGENTS.md — regras para agentes`?**
  _High betweenness centrality (0.152) - this node is a cross-community bridge._
- **What connects `Botões (primary, secondary, ícone, sobre mídia)`, `Painel de variação, cartão de navegação, mídia`, `Navegação: top bar, sidebar, índice Nesta página, breadcrumb` to the rest of the system?**
  _127 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `raids-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05134825014343087 - nodes in this community are weakly interconnected._
- **Why does `Estrutura de pastas` connect `TextoComTermos.tsx` to `raids-content.ts`, `site-content.ts`, `react`, `convert-to-webp.mjs`, `HistoryPage.tsx`, `app/layout.tsx`, `SecaoGuia.tsx`, `GuiaLayout.tsx`, `Arquitetura`, `compilerOptions`, `site-content.ts`, `LootrunMediaPlaceholder.tsx`, `[P1] Sem prefers-reduced-motion no reveal e scro`, `HomePage.tsx`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **Should `silverbull-shares-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0915915915915916 - nodes in this community are weakly interconnected._
- **Why does `jobs` connect `ci.yml` to `steps`, `mesclar`, `promover`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Should `professions-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
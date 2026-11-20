# Graph Report - gsw_lp  (2026-11-20)

## Corpus Check
- 229 files · ~119,481 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 6, .css 4, .ico 1)

## Summary
- 1565 nodes · 3769 edges · 89 communities (84 shown, 5 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 141 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e66b1228`
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
- app/layout.tsx
- Inventário do conteúdo atual
- Assessment A: Revisão de design
- TextoComTermos.tsx
- [P1] Sem prefers-reduced-motion no reveal e scroll suave
- GallerySection.tsx
- Padrões
- LootrunMediaPlaceholder.tsx
- TextoComTermos
- CartaoDoSite.tsx
- special-modes-content.ts
- package.json
- compilerOptions
- FiguraNoTamanho
- CI/CD
- HistoryPage.tsx
- web
- AGENTS.md — regras para agentes
- Créditos, fontes e licenças
- Recommended Actions (11 passos)
- Pendências
- on
- HomePage.tsx
- dimensoesDe
- Design System: GsW · Guia de Wynncraft em português
- gif-para-webp.mjs
- next
- Animações e qualidade das imagens
- Caixa de Item (proposed visual direction)
- previas.ts
- steps
- [P1] Tema claro: texto escuro sobre gradiente pr
- LootrunCampsSection.tsx
- deploy.yml
- 3. Quanto o projeto vai pesar
- Redesign: proposta (Fase 2)
- Grafo do projeto (Graphify) doc
- Mapa das pastas
- RaidsDaGuilda.tsx
- mounts-content.ts
- Critique Assessment B: detector + navegador
- gerar-variantes.mjs
- Arquitetura
- Product
- world-events-content.ts
- Superfície app-guias (Impeccable)
- festivals-content.ts
- Infraestrutura
- Diagnóstico do front (Impeccable)
- Components
- LootrunBeaconsSection.tsx
- RaidsPage.tsx
- lucide-react
- Game guides (Lootrun, Dungeons, Raids, World Eve
- global.d.ts
- postcss.config.mjs
- CLAUDE.md imports AGENTS.md
- LootrunRewardsSection.tsx
- Auditoria técnica gsw_lp (Impeccable audit)
- Área Lootrun
- Navbar.tsx
- Migração da Vercel para a VPS: análise e plano
- env
- convert-to-webp.mjs
- LevelingPage.tsx
- GuildHousePage.tsx
- guild-house-content.ts
- 5. Plano de implantação (para aprovar)
- terceiros.test.mjs
- RaidsRecompensas.tsx
- scripts
- site-content.ts
- modo
- FimDoGuia
- Efeitos.tsx
- dependencies
- GuideIntro.tsx
- eslint.config.mjs
- [P2] Emojis no lugar de itens, e emojis errados
- RaidsGuiaPorRaid.tsx
- implantar.sh
- configurar-deploy.sh

## God Nodes (most connected - your core abstractions)
1. `SecaoGuia()` - 117 edges
2. `TextoComTermos()` - 57 edges
3. `dimensoesDe()` - 57 edges
4. `react` - 43 edges
5. `lucide-react` - 37 edges
6. `Auditoria técnica gsw_lp (Impeccable audit)` - 36 edges
7. `TextoAnimado()` - 34 edges
8. `Diagnóstico do front (Impeccable)` - 33 edges
9. `FiguraNoTamanho()` - 32 edges
10. `Estrutura de pastas` - 32 edges

## Surprising Connections (you probably didn't know these)
- `5.4 Deploy daqui para frente` --references--> `main()`  [INFERRED]
  docs/MIGRACAO-VPS.md → scripts/convert-to-webp.mjs
- `5.5 Rollback` --references--> `main()`  [INFERRED]
  docs/MIGRACAO-VPS.md → scripts/convert-to-webp.mjs
- `O que falta` --references--> `main()`  [INFERRED]
  docs/MIGRACAO-VPS.md → scripts/convert-to-webp.mjs
- `Imagens e animações` --references--> `AnimacaoSobDemanda()`  [INFERRED]
  docs/DESIGN.md → components/shared/AnimacaoSobDemanda.tsx
- `4. O que foi aplicado, e onde` --references--> `TextoAnimado()`  [INFERRED]
  docs/redesign/ANIMACOES.md → components/shared/TextoAnimado.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Pipeline branch -> develop -> main com hook, CI e deploy travado** — docs_ci_cd_fluxo_de_branches, docs_ci_cd_jobs_ci, docs_ci_cd_hook_pre_push, docs_ci_cd_deploy_vercel_obsoleto, docs_ci_cd_deploy_habilitado [EXTRACTED 1.00]
- **Three-level navigation: top bar, guide sidebar, 'Nesta pagina' index** — docs_redesign_navegacao_three_level_model, docs_redesign_navegacao_top_bar, docs_redesign_navegacao_sidebar_dos_guias, docs_redesign_navegacao_nesta_pagina_index [EXTRACTED 1.00]
- **Guide page skeleton components** — docs_redesign_estrutura_do_guia_guide_page_template, docs_redesign_navegacao_breadcrumb, docs_redesign_direcao_visual_ficha_do_guia, docs_redesign_estrutura_do_guia_dica_da_gsw, docs_redesign_navegacao_version_badge [INFERRED 0.85]
- **Falhas do tema claro por remap !important** — docs_redesign_diagnostico_p10_tema_claro_legendas, docs_redesign_impeccable_audit_p1_tema_claro_texto_escuro, docs_redesign_impeccable_critique_detector_legendas_galeria_tema_claro, docs_redesign_impeccable_critique_design_p2_tema_claro_inversao, app_styles_theme_remaps [INFERRED 0.85]
- **Peso de mídia da Lootrun (GIFs unoptimized)** — docs_redesign_diagnostico_p1_lootrun_peso, docs_redesign_impeccable_audit_p0_lootrun_110mb, docs_redesign_inventario_conteudo_gifs_lootrun_93mb, components_lootrun_sections_lootrunmediaplaceholder [INFERRED 0.85]
- **Regras de licença: texto próprio, só arte própria, sem marcas alheias** — docs_creditos_texto_proprio, docs_creditos_decisao_so_arte_propria, docs_creditos_sem_marcas_alheias, agents_nunca_cdn_oficial, agents_nunca_copiar_wiki [INFERRED 0.85]

## Communities (89 total, 5 thin omitted)

### Community 0 - "raids-content.ts"
Cohesion: 0.13
Nodes (18): cinfrasSilverbullImage, nolRooms, notgRooms, queueSteps, RaidCaptionImage, RaidCatalogItem, raidFirstStepsDescription, raidFirstStepsSupportImages (+10 more)

### Community 1 - "silverbull-shares-content.ts"
Cohesion: 0.08
Nodes (41): bombasImagem, bombasIntro, BombCard, bombCards, comoConseguir, cratesChances, cratesImagens, cratesIntro (+33 more)

### Community 2 - "lootrun-content.ts"
Cohesion: 0.11
Nodes (27): metadata, Pagina(), lootrunAdvancedSystems, lootrunAdvancedSystemsIntro, LootrunCamp, LootrunCombo, lootrunCombos, lootrunCombosIntro (+19 more)

### Community 3 - "professions-content.ts"
Cohesion: 0.08
Nodes (41): metadata, Pagina(), bombasDeProfissao, coletaImagens, coletaIntro, coletaRegras, craftingImagens, craftingIntro (+33 more)

### Community 4 - "env"
Cohesion: 0.06
Nodes (49): BASE, EVENTO, GH_TOKEN, NEXT_TELEMETRY_DISABLED, ORIGEM, PR, REPO, TESTADO (+41 more)

### Community 5 - "leveling-content.ts"
Cohesion: 0.11
Nodes (24): AbilityTreeRoute, armasIntro, iconeDoItem(), levelingArmorNotes, levelingArmorPieces, levelingIntroParagraphs, levelingResumo, LevelingSpot (+16 more)

### Community 6 - "dungeons-content.ts"
Cohesion: 0.10
Nodes (37): acessoImagens, acessoIntro, acessoModos, Destaque, dicaDaGuilda, DungeonDaLista, dungeonsCorrompidas, dungeonsDicas (+29 more)

### Community 7 - "app/layout.tsx"
Cohesion: 0.16
Nodes (11): alegreya, jetbrains, metadata, pixelify, RootLayout(), viewport, SiteFooter(), TransicaoDePagina() (+3 more)

### Community 8 - "Inventário do conteúdo atual"
Cohesion: 0.11
Nodes (25): RaidGuidesSection.tsx, kicker-above-heading (114) + hero-eyebrow-chip (11), Área Dungeons, Área Festivais (placeholder), Área Home, Área Leveling, Área Modos Especiais, Área Profissões (+17 more)

### Community 9 - "Assessment A: Revisão de design"
Cohesion: 0.07
Nodes (36): Funciona: conteúdo próprio (35 POVs, GIFs, Dica GsW), P1: site se diz oficial, sem aviso de fã, Carga cognitiva: 5 de 8 falhas, /impeccable clarify, /impeccable layout, Assessment A: Revisão de design, H10 Ajuda e documentação (sem glossário), H1 Visibilidade do status (+28 more)

### Community 10 - "TextoComTermos.tsx"
Cohesion: 0.27
Nodes (10): Termo(), TermoProps, ehChave(), Conteúdo dos guias em data/*-content.ts com [[chave]], Estrutura de pastas, Modelo de guia (Raids é a referência), Alta: aplicar o modelo de Raids aos outros guias, ChaveDoGlossario (+2 more)

### Community 11 - "[P1] Sem prefers-reduced-motion no reveal e scroll suave"
Cohesion: 0.21
Nodes (14): motion.css, Falsos positivos do detector descartados, P1: violeta da marca como texto 2,0-2,4:1, P1: animação ignora prefers-reduced-motion, /impeccable animate, /impeccable typeset, [P1] Sem prefers-reduced-motion no reveal e scroll suave, [P1] Texto roxo da marca com contraste 2,25:1 (+6 more)

### Community 12 - "GallerySection.tsx"
Cohesion: 0.23
Nodes (11): GalleryPhoto, galleryPhotos, GaleriaDialogo(), GaleriaDialogoProps, LenisPausavel, TAMANHO_DA_MINIATURA, GallerySection(), P1: galeria /historia sem teclado; modais sem foco (+3 more)

### Community 13 - "Padrões"
Cohesion: 0.28
Nodes (9): Padrões, Convenção de nomes (componentes, páginas, dados, mídia, prints), Escopos já usados, Estilo: tokens, bg-gsw só preenchimento, Pixelify >= 20px, 60ch, Estrutura de área pages/ + sections/ + data/, Branches <tipo>/<assunto-kebab>, Padrão de commits (resumo, notas, escopo, sem coautor), Quando separar commits (máx. seis notas) (+1 more)

### Community 14 - "LootrunMediaPlaceholder.tsx"
Cohesion: 0.14
Nodes (18): MediaPlaceholder, LootrunMediaPlaceholder(), LootrunMediaPlaceholderProps, resolveMediaDescription(), RaidImageCard(), RaidImageCardProps, AnimacaoSobDemanda(), AnimacaoSobDemandaProps (+10 more)

### Community 15 - "TextoComTermos"
Cohesion: 0.23
Nodes (26): DungeonsAbertura(), FestivaisAbertura(), Breadcrumb(), Passo, Trilha(), FichaGuia(), FichaGuiaProps, SeloVersao() (+18 more)

### Community 16 - "CartaoDoSite.tsx"
Cohesion: 0.18
Nodes (17): metadata, Pagina(), CategoriaId, categorias, curadoria, sites, sitesDoGrupo(), sitesFontes (+9 more)

### Community 17 - "special-modes-content.ts"
Cohesion: 0.13
Nodes (23): metadata, Pagina(), avisoIrreversivel, combinacoesIntro, combinacoesParagrafos, comoFuncionaIntro, desafioDaComunidade, Destaque (+15 more)

### Community 18 - "package.json"
Cohesion: 0.15
Nodes (18): devDependencies, gifsicle@^7.0.1, tailwindcss@^4, @tailwindcss/postcss@^4, @types/node@^20, @types/react@^19, @types/react-dom@^19, typescript@^5 (+10 more)

### Community 19 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 20 - "FiguraNoTamanho"
Cohesion: 0.17
Nodes (14): FiguraNoTamanho(), FiguraNoTamanhoProps, SecaoGuiaProps, LevelingPartySection(), idDoSpot(), LevelingSpotsSection(), ProfessionToolsSection(), assinaturaBeneficios (+6 more)

### Community 21 - "CI/CD"
Cohesion: 0.17
Nodes (16): Fluxo branch -> develop -> main -> deploy (desligado), CI/CD, Adaptações da referência (um job front, node --test, sem Semgrep), Passos para ativar o deploy (link, token, secrets, dry_run, variável), Primeira vez: criar a develop, Variável DEPLOY_HABILITADO, Deploy Vercel (obsoleto desde 18/11/2026), Fluxo de branches com merge e promoção automáticos (+8 more)

### Community 22 - "HistoryPage.tsx"
Cohesion: 0.18
Nodes (14): Historia(), Member, members, HistoryPage(), Essence(), GuildHouseChamada(), History(), createFallbackAvatar() (+6 more)

### Community 23 - "web"
Cohesion: 0.06
Nodes (33): external, context, dockerfile, interval, retries, start_interval, start_period, test (+25 more)

### Community 24 - "AGENTS.md — regras para agentes"
Cohesion: 0.18
Nodes (15): AGENTS.md — regras para agentes, Comandos npm (dev, typecheck, lint, test, build, check, convert:webp), Documentação atualizada no mesmo PR, Formato de commit type(scope) em inglês, AGENTS.md limitado a 200 linhas, Lista "Nunca" (push direto, --no-verify, Artifacts, secrets, CDN oficial, tema claro, back-end), Nunca usar ícones/imagens da CDN oficial da Wynncraft sem autorização, Nunca publicar Artifacts (claude.ai) neste projeto (+7 more)

### Community 25 - "Créditos, fontes e licenças"
Cohesion: 0.15
Nodes (16): Nunca copiar texto da wiki (CC BY-NC-SA) ou do site oficial, Créditos, fontes e licenças, Aviso de site não oficial (texto do rodapé), Candidatos: game-icons.net, Faithful, Dados do jogo: API v3, wiki, cache Wynntils (só conferência), Decisão do dono: só arte própria até autorização escrita da Wynncraft, Exceção herdada: Leveling usa ícones da CDN (buildLevelingItemGuideIconUrl), Ícones e tipografia: Lucide (ISC), fontes SIL OFL 1.1 (+8 more)

### Community 26 - "Recommended Actions (11 passos)"
Cohesion: 0.18
Nodes (14): surface-effects.css, P2: texto 9-10 px; saltos H2->H4, Cabeçalho eyebrow+h2 copiado 49 vezes, Dimensão Implementation Integrity, Hover 3D por seletor estrutural, Implementation Integrity: passa com ressalvas, [P3] Tamanhos de fonte fora da escala (9-11px), Padrão: comportamento por seletor estrutural (+6 more)

### Community 27 - "Pendências"
Cohesion: 0.15
Nodes (13): Fonte das cores de raridade (item guide oficial, Crafted pendente), Pendências, Alta: /comunidade como hub, Alta: conteúdo desatualizado restante, Dados do jogo a confirmar (beacons, gambits, Merchant, Crimson, Crafted, coordenadas, guild raid), CI: Dependabot não adicionado, Baixa: guias antigos com fundo preto (shortcut em foundation.css), Média: Montarias e Festivais (+5 more)

### Community 28 - "on"
Cohesion: 0.29
Nodes (7): on, pull_request, push, workflow_dispatch, branches, types, branches

### Community 29 - "HomePage.tsx"
Cohesion: 0.21
Nodes (12): Home(), homeCategorias, homeComeco, homeComunidade, homeDestaque, homeFaixas, homeHero, HomePage() (+4 more)

### Community 30 - "dimensoesDe"
Cohesion: 0.18
Nodes (18): ImagensDasDungeons(), CreditoImagem(), Figura(), FiguraProps, colunasPara(), Galeria(), GaleriaProps, ItemDaGaleria (+10 more)

### Community 31 - "Design System: GsW · Guia de Wynncraft em português"
Cohesion: 0.11
Nodes (18): Colors, Design System: GsW · Guia de Wynncraft em português, Do:, Do's and Don'ts, Don't:, Elevation & Depth, Hierarchy, Layout (+10 more)

### Community 32 - "gif-para-webp.mjs"
Cohesion: 0.19
Nodes (8): Mídia própria da guilda e prints novas (18/11/2026), sharp@^0.34.4, sharp, args, arquivos, iSaida, medirImagens(), andar()

### Community 33 - "next"
Cohesion: 0.10
Nodes (29): LayoutDosGuias(), emDuasPilhas(), metadata, PaginaDosGuias(), LayoutDaGuildHouse(), metadata, gravarOndeParei(), GuiaLayout() (+21 more)

### Community 34 - "Animações e qualidade das imagens"
Cohesion: 0.20
Nodes (9): 1. Estudo das referências, 2. Decisões, 3. Linguagem de movimento, 5. Qualidade das imagens, Animações e qualidade das imagens, chiconeto.dev, Gastos (pasta local, só leitura), Sites premiados e de jogos (Awwwards, Godly) (+1 more)

### Community 35 - "Caixa de Item (proposed visual direction)"
Cohesion: 0.05
Nodes (43): docs/redesign/diagnostico.md, Category default (Maxroll/Icy Veins style dark docs), Direcao visual (proposal), Ficha do guia (item-box guide card), Icons: Lucide UI, game-icons.net for classes/weapons/bosses, emojis removed, Motion tokens and reduced motion, Alternative: Obsidiana e Encantamento, Contained palette (violet-tinted darks, action violet) (+35 more)

### Community 36 - "previas.ts"
Cohesion: 0.39
Nodes (7): conteudoDoGuia, PreviaDoGuia, previaDoGuia(), tempoDeLeitura(), textosDe(), todasAsPrevias(), topicosDoGuia()

### Community 37 - "steps"
Cohesion: 0.25
Nodes (8): if, name, runs-on, steps, timeout-minutes, deploy, name, run

### Community 38 - "[P1] Tema claro: texto escuro sobre gradiente pr"
Cohesion: 0.33
Nodes (11): theme-remaps.css, HomeAboutSection.tsx, P2: tema claro, legendas escuras sobre preto, Queixa: modo claro feio (inversão !important), /impeccable colorize, [P1] Tema claro: texto escuro sobre gradiente preto, Padrão: tema claro por remap de classes com !important, [P2] Tema claro é inversão automática que apaga a marca (+3 more)

### Community 39 - "LootrunCampsSection.tsx"
Cohesion: 0.25
Nodes (10): Coordenada(), lootrunCamps, lootrunCampsIntro, LootrunMechanicBlock, lootrunParticipation, idDoCamp(), LootrunCampsSection(), LootrunParticipationSection() (+2 more)

### Community 40 - "deploy.yml"
Cohesion: 0.25
Nodes (7): Pendência: hospedagem de produção (trocar deploy.yml), concurrency, cancel-in-progress, group, jobs, name, permissions

### Community 41 - "3. Quanto o projeto vai pesar"
Cohesion: 0.33
Nodes (6): 3.1 Disco, 3.2 Memória e CPU, 3.3 Tráfego, 3.4 Duas recomendações de peso, 3.5 Onde roda o build, 3. Quanto o projeto vai pesar

### Community 42 - "Redesign: proposta (Fase 2)"
Cohesion: 0.29
Nodes (6): Form: Caixa de Item, seed 658dcb521c289a54, Redesign: proposta (Fase 2), Alternativas: Obsidiana e Encantamento, Percurso, padrão da categoria, Fase 3: base, navegação, Início e Raids feitos, Como foi feito: Graphify, Impeccable init/critique/audit, sorteio seed 658dcb521c289a54, Proposta aprovada em 18/11/2026

### Community 43 - "Grafo do projeto (Graphify) doc"
Cohesion: 0.22
Nodes (9): .gitattributes, .graphifyignore, Fresh clone setup (graphify hook install, claude install, merge driver), Grafo do projeto (Graphify) doc, What enters the graph (code AST, docs semantic, .graphifyignore exclusions), Graph update: post-commit hook for code, /graphify --update for docs, Graphify (graphifyy 0.9.104), Versioned graph files (graph.json, GRAPH_REPORT.md, manifest, labels, semantic cache) (+1 more)

### Community 44 - "Mapa das pastas"
Cohesion: 0.22
Nodes (6): Mapa das pastas, Hook pre-push (pula push só de mídia), concurrency, cancel-in-progress, group, name

### Community 45 - "RaidsDaGuilda.tsx"
Cohesion: 0.28
Nodes (7): guildRaidAspectDistribution, guildRaidAvailableImage, guildRaidsDescription, dimensoes, tamanhoDe(), RaidsDaGuilda(), RaidsPrimeirosPassos()

### Community 46 - "mounts-content.ts"
Cohesion: 0.07
Nodes (46): metadata, Pagina(), Destaque(), DestaqueProps, estilos, RecursoExterno(), RecursoExternoProps, Atributo (+38 more)

### Community 47 - "Critique Assessment B: detector + navegador"
Cohesion: 0.10
Nodes (23): Queixa: pouca ligação com o jogo, Funciona: sem erros de console, sem overflow a 390 px, Positive Findings (sem overflow, alt, foco nativo, Esc, anti-FOUC), Grade 2x2 com número fantasma, Ícones stroke genéricos em quadrados roxos, Linguagem visual de tooltip do Wynncraft, Notas de página /dungeons, Texto da home intercambiável (+15 more)

### Community 48 - "gerar-variantes.mjs"
Cohesion: 0.32
Nodes (11): 5.2 Mudanças no projeto (um PR para `develop`, CI verde), carregarImagem(), tabela, caminhoDaVariante(), escolherLargura(), geraVariante(), largurasPara(), arquivos() (+3 more)

### Community 49 - "Arquitetura"
Cohesion: 0.18
Nodes (13): Arquitetura, Configuração do Next (poweredByHeader off, cache 1 ano, headers, sem CSP), Estado: useState local, sem store global, Integrações externas: YouTube lazy, Google Fonts no build, CDN no Leveling, Navegação: top bar, sidebar, Nesta página, busca, Onde parei em localStorage (gsw:onde-parei:<rota>), Redirects 308 das rotas antigas para /guias/<guia>, Rotas (/, /guias, /guias/raids guia modelo, guias antigos, em construção, /historia) (+5 more)

### Community 50 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 51 - "world-events-content.ts"
Cohesion: 0.09
Nodes (33): metadata, Pagina(), annihilationFicha, annihilationImagens, annihilationIntro, annihilationOutros, annihilationParty, annihilationSol (+25 more)

### Community 52 - "Superfície app-guias (Impeccable)"
Cohesion: 0.13
Nodes (15): Superfície app-guias (Impeccable), Atualizados recentemente na Início (adiado), Em aberto: contato real do aviso e cores de raridade não confirmadas, Finish: revisão final, veredito, DESIGN.md e proveniência de rasters, First viewport: top bar 56px, sidebar 264px, coluna 68ch, Nesta página, Leitor: jogador brasileiro de Wynncraft, à noite, jogo aberto, Momento memorável: hover em "Aspect" abre caixa de item, Own-world: paleta e tipografia da superfície (+7 more)

### Community 53 - "festivals-content.ts"
Cohesion: 0.15
Nodes (14): avisoEquipamento, Destaque, estruturaDoFestival, estruturaIntro, festivaisCicloIntro, festivaisFontes, festivaisIntroParagraphs, Festival (+6 more)

### Community 54 - "Infraestrutura"
Cohesion: 0.25
Nodes (9): Só front: sem back-end, banco, API ou env vars, Infraestrutura, Notas de build (Node 24, Google Fonts, allow-scripts sharp, cache .next), Candidato: VPS (Docker standalone, deploy SSH) seguindo regras da VPS, Hospedagem a definir (Vercel abandonada; último deploy f8063b4), Mídia: public/ ~100MB, 0,4-0,9MB por página, cache 1 ano exige nome novo, Sem Docker, banco, fila, storage, monitoramento, analytics, Saída: next start (redirects 308 e otimizador de imagens) (+1 more)

### Community 55 - "Diagnóstico do front (Impeccable)"
Cohesion: 0.18
Nodes (15): InPageNavigation.tsx, Arquitetura de conteúdo pages/sections/data, Critério de aceite da Fase 3, Funciona: desempenho bom fora da mídia (Lighthouse 91-94), direcao-visual.md (direção visual), Diagnóstico do front (Impeccable), O que não foi testado (leitor de tela, dispositivo, zoom 200%), P2: 404 padrão do Next em inglês (+7 more)

### Community 56 - "Components"
Cohesion: 0.20
Nodes (10): Buttons, Caixa de Item (componente assinatura), Cards / Containers, Chips e selos, Components, Imagens e animações, Inputs / Fields, Motion (+2 more)

### Community 57 - "LootrunBeaconsSection.tsx"
Cohesion: 0.33
Nodes (8): LootrunBeacon, lootrunBeacons, lootrunBeaconsIntro, lootrunBeaconsRegras, iconeDoBeacon(), LootrunBeaconsSection(), MarcadorBeacon(), MarcadorDesenhado()

### Community 58 - "RaidsPage.tsx"
Cohesion: 0.19
Nodes (11): metadata, Pagina(), extras, raidFontes, raidGambits, raidRanks, raidStructureSteps, supportImages (+3 more)

### Community 59 - "lucide-react"
Cohesion: 0.25
Nodes (11): festivais, logoDoFestival(), visualDoFestival, FestivaisCiclo(), ComImagem(), ehPaisagem(), FestivalSecao(), Paragrafos() (+3 more)

### Community 60 - "Game guides (Lootrun, Dungeons, Raids, World Eve"
Cohesion: 0.50
Nodes (4): Game guides (Lootrun, Dungeons, Raids, World Events, Professions, Leveling, Special Modes, Silverbull Shares, Mounts, Festivals), GsW Website portal (Guardians of Wynn, Wynncraft), Closed copyright license (LICENSE), Silverbull Shares (guild economy)

### Community 64 - "LootrunRewardsSection.tsx"
Cohesion: 0.31
Nodes (7): lootrunRewardItems, lootrunRewardMedia, lootrunRewardsIntro, LootrunRewardsSection(), LazyYouTubeEmbed(), LazyYouTubeEmbedProps, [P2] Embed do YouTube perde o foco ao ativar

### Community 65 - "Auditoria técnica gsw_lp (Impeccable audit)"
Cohesion: 0.14
Nodes (23): history-effects.css, HomeHeroSection.tsx, Lighthouse celular simulado (4 rotas), P1: LCP da Início 8,0 s, /impeccable adapt, /impeccable document, /impeccable optimize, /impeccable polish (+15 more)

### Community 66 - "Área Lootrun"
Cohesion: 0.15
Nodes (15): Notas de página /montarias, Área Lootrun, Área Montarias (placeholder), Área Raids, Coordenada de Canyon errada (igual a Corkus), Gambits desatualizados (Sentinel I), 16 GIFs da Lootrun somam 93,7 MB, 16 ícones de armadura dão 404 na CDN 3.3 (+7 more)

### Community 67 - "Navbar.tsx"
Cohesion: 0.15
Nodes (20): Footer.tsx, Navbar.tsx, ThemeToggle.tsx, P2: ícones do rodapé sem nome; alvos 20-32 px, P1: menu do celular fechado continua no Tab, Audit Health Score 11/20, /impeccable harden, Dimensão Accessibility (+12 more)

### Community 68 - "Migração da Vercel para a VPS: análise e plano"
Cohesion: 0.11
Nodes (17): 1. Estado atual da VPS, 2. Forma de servir, 4. Saída da Vercel, 6. Implantação (18/11/2026), Contêineres (uso no momento da leitura / teto), Medido depois, Migração da Vercel para a VPS: análise e plano, Máquina (+9 more)

### Community 69 - "env"
Cohesion: 0.25
Nodes (8): env, DEPLOY_HABILITADO, MODO, VPS_HOST, VPS_KNOWN_HOSTS, VPS_PORT, VPS_SSH_KEY, VPS_USER

### Community 70 - "convert-to-webp.mjs"
Cohesion: 0.23
Nodes (12): args, buildOutputPath(), collectFiles(), convertFile(), customTargets, ensureWorkbench(), getPriority(), INPUT_DIR (+4 more)

### Community 71 - "LevelingPage.tsx"
Cohesion: 0.22
Nodes (10): metadata, Pagina(), arvoresIntro, levelingAbilityTrees, levelingFontes, xpBonus, LevelingPage(), lerPeca() (+2 more)

### Community 72 - "GuildHousePage.tsx"
Cohesion: 0.26
Nodes (10): metadata, Pagina(), mapaImagem, mapaIntro, setores, GuildHousePage(), GuildHouseAcesso(), GuildHouseArquitetura() (+2 more)

### Community 73 - "guild-house-content.ts"
Cohesion: 0.10
Nodes (23): acessoImagens, acessoIntro, acessoPassos, arquitetura, arquiteturaIntro, convite, Funcionalidade, funcionalidades (+15 more)

### Community 74 - "5. Plano de implantação (para aprovar)"
Cohesion: 0.29
Nodes (7): 5.1 Decisões suas antes de começar, 5.3 Na VPS (com a sua aprovação, uma etapa por vez), 5.4 Deploy daqui para frente, 5.5 Rollback, 5.6 DNS e ordem da virada, 5.7 O que sai da Vercel, e quando, 5. Plano de implantação (para aprovar)

### Community 75 - "terceiros.test.mjs"
Cohesion: 0.17
Nodes (9): origemDasImagens, alvosDoCss(), alvosDoScript(), css, normalizar(), ts, arquivos(), pasta (+1 more)

### Community 76 - "RaidsRecompensas.tsx"
Cohesion: 0.20
Nodes (10): raidAspectDetails, raidAspectExamples, raidDailyBonus, raidRewardImages, raidRewardOutcomes, raidRewardsDescription, RaidsRecompensas(), ImagemDoJogo() (+2 more)

### Community 77 - "scripts"
Cohesion: 0.20
Nodes (10): scripts, build, check, convert:webp, dev, lint, prepare, start (+2 more)

### Community 78 - "site-content.ts"
Cohesion: 0.06
Nodes (33): metadata, Pagina(), metadata, Pagina(), areas, contato, discordUrl, dungeonsSecoes (+25 more)

### Community 79 - "modo"
Cohesion: 0.25
Nodes (8): modo, default, description, options, type, on, workflow_dispatch, inputs

### Community 80 - "FimDoGuia"
Cohesion: 0.36
Nodes (6): metadata, Pagina(), FestivalsPage(), FestivaisEstrutura(), FimDoGuia(), FimDoGuiaProps

### Community 81 - "Efeitos.tsx"
Cohesion: 0.36
Nodes (6): contar(), Efeitos(), JanelaComLenis, LenisMinimo, movimentoReduzido(), ponteiroFino()

### Community 82 - "dependencies"
Cohesion: 0.25
Nodes (8): dependencies, lenis@1.3.27, lucide-react@1.66.0, next@16.1.6, react@19.2.3, react-dom@19.2.3, lenis, react-dom

### Community 83 - "GuideIntro.tsx"
Cohesion: 0.47
Nodes (4): GuiaEmConstrucao(), GuiaEmConstrucaoProps, GuideIntro(), GuideIntroProps

### Community 84 - "eslint.config.mjs"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.1.6, eslint, eslint-config-next

### Community 85 - "[P2] Emojis no lugar de itens, e emojis errados"
Cohesion: 0.67
Nodes (4): Queixa: emojis quebrados (27 linhas, 8 '?'), /impeccable bolder, [P2] Emojis no lugar de itens, e emojis errados, 0.2 Acentos quebrados (É/Ó viraram ?)

### Community 86 - "RaidsGuiaPorRaid.tsx"
Cohesion: 0.27
Nodes (9): RaidGuideGroup, raidGuideGroups, RaidGuideRoom, raidGuidesLabels, RaidGuideVariant, BlocoDaRaid(), RaidsGuiaPorRaid(), Sala() (+1 more)

## Knowledge Gaps
- **118 isolated node(s):** `Estilo: tokens, bg-gsw só preenchimento, Pixelify >= 20px, 60ch`, `Estrutura de área pages/ + sections/ + data/`, `Branches <tipo>/<assunto-kebab>`, `Quando separar commits (máx. seis notas)`, `Primeira vez: criar a develop` (+113 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 463 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Estrutura de pastas` connect `TextoComTermos.tsx` to `LootrunRewardsSection.tsx`, `next`, `gif-para-webp.mjs`, `convert-to-webp.mjs`, `app/layout.tsx`, `RaidsRecompensas.tsx`, `LootrunMediaPlaceholder.tsx`, `TextoComTermos`, `FimDoGuia`, `Arquitetura`, `site-content.ts`, `GuideIntro.tsx`, `FiguraNoTamanho`, `compilerOptions`, `HistoryPage.tsx`, `HomePage.tsx`, `dimensoesDe`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **What connects `Estilo: tokens, bg-gsw só preenchimento, Pixelify >= 20px, 60ch`, `Estrutura de área pages/ + sections/ + data/`, `Branches <tipo>/<assunto-kebab>` to the rest of the system?**
  _118 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `raids-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13157894736842105 - nodes in this community are weakly interconnected._
- **Why does `Mapa das pastas` connect `Mapa das pastas` to `convert-to-webp.mjs`, `deploy.yml`, `TextoComTermos.tsx`, `site-content.ts`, `AGENTS.md — regras para agentes`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Should `silverbull-shares-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.07712765957446809 - nodes in this community are weakly interconnected._
- **Why does `Sidebar dos guias` connect `Caixa de Item (proposed visual direction)` to `site-content.ts`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `lootrun-content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.11260504201680673 - nodes in this community are weakly interconnected._
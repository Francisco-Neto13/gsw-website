# Inventário do conteúdo atual

Levantamento de 18/11/2026, sobre o código da branch `main` (commit `f8063b4`). Jogo na versão 2.2.4.
Fontes externas consultadas: wynncraft.wiki.gg (páginas Raids, Lootrunning, Dungeons, Professions, Special_Gamemodes, Combat_Level, Version_history, Mounts, Silverbull_Subscription, Ranks, Annihilation, World_Events, busca "festival") e wynncraft.com/help/item-guide. O conteúdo das fontes foi parafraseado, não copiado.

Legenda de checagem: **OK** = bate com a fonte · **desatualizado** = a fonte diz outra coisa · **não verificado** = a fonte não cobre ou não consegui confirmar.

Tamanho: as contagens de palavras são do arquivo de dados inteiro (`wc -w`), então incluem código. O texto que aparece na página fica em torno de 60 a 75% desse número.

---

## 0. Problemas que aparecem em várias áreas

### 0.1 Emojis (o dono relata que aparecem como quadrados)
O site usa só a fonte Geist (`app/layout.tsx:6-7`), que não tem desenhos de emoji. Cada emoji depende então da fonte de emoji do sistema de quem visita. Em Linux, em Windows antigos e em alguns Androids, eles viram quadrados vazios. Os quadrados coloridos U+1F7E5 a U+1F7EB são do Unicode 12 e são os que mais falham. Lista completa:

| Arquivo:linha | Emoji | Uso |
|---|---|---|
| components/lootrun/sections/LootrunBeaconsSection.tsx:6,14 | 🟦 U+1F7E6 | Beacon Blue **e** Aqua (os dois iguais) |
| …LootrunBeaconsSection.tsx:8,12 | 🟪 U+1F7EA | Beacon Purple **e** Pink (os dois iguais) |
| …LootrunBeaconsSection.tsx:10 | 🟨 U+1F7E8 | Yellow |
| …LootrunBeaconsSection.tsx:16,32 | 🟧 U+1F7E7 | Orange e o valor padrão |
| …LootrunBeaconsSection.tsx:18 | 🟩 U+1F7E9 | Green |
| …LootrunBeaconsSection.tsx:20 | ⬛ U+2B1B | Dark Grey |
| …LootrunBeaconsSection.tsx:22 | ⬜ U+2B1C | White |
| …LootrunBeaconsSection.tsx:24 | ◻️ U+25FB+FE0F | Grey |
| …LootrunBeaconsSection.tsx:26,28 | 🟥 U+1F7E5 | Red **e** Crimson (os dois iguais) |
| …LootrunBeaconsSection.tsx:30 | 🌈 U+1F308 | Rainbow |
| components/silverbull-shares/data/silverbull-shares-content.ts:410 | ⚔️ | Combat XP Bomb |
| …:411 | ⛏️ | Profession XP Bomb |
| …:412 | ⛏️💨 | Profession Speed Bomb |
| …:413 | 💬 | Shout Bomb |
| …:414 | 💠 | Loot Bomb |
| …:415 | 📨 | Item Bomb |
| …:416 | 🔑 | Dungeon Bomb |
| …:417 | 📦 | Loot Chest Bomb |
| …:418 | 🌐 | World Event Bomb |
| …:419 | 📜 | Scroll Charge Bomb |
| …:420 | 🍄 | Ingredient Bomb |
| …:421 | 🎉 | Party Crackers |
| …:491 / 496 / 501 / 506 | 🟡 🔴 🔵 🟢 | Tokens (Reroll, Reset, Guild Rename, Daily Bonus Refresh) |
| components/shared/Navbar.tsx:228, 298, 412 | ▾ U+25BE | Setinha do menu. É um símbolo comum e deve renderizar. |
| components/history/sections/GallerySection.tsx:191, 202, 209 | ← → | Setas da galeria. Devem renderizar. |

Ação recomendada: trocar os emojis dos beacons por um círculo ou quadrado em CSS com a cor do beacon (o que também acaba com as cores repetidas). Trocar os emojis de bombas e tokens por SVG ou pelos ícones do jogo. As setas podem ficar.

### 0.2 Acentos quebrados ("É" e "Ó" viraram "?")
- components/leveling/data/leveling-content.ts:77 ("? um investimento caro"), :107, :141
- components/dungeons/data/dungeons-content.ts:194
- components/professions/data/professions-content.ts:35 ("? um conteúdo opcional"), e "Peixe e ?leo" na lista `gatheringProfessions` (Fishing)
- components/silverbull-shares/data/silverbull-shares-content.ts:86
- components/world-events/data/world-events-content.ts:100

### 0.3 Texto sem acentos (digitado sem acento)
- silverbull-shares-content.ts, por volta das linhas 270 a 330: o bloco Membership inteiro ("voce ja e membro", "A assinatura e um rank nao permanente", "beneficios", "padrao", "cosmeticos", "gratis", "atualizacoes"), mais "Ofertas aleatorias", "Secao de …" (vários `alt`), "Confira com frequencia", "a oferta exibida e focada" e "bau" (:275, :415).
- raids-content.ts, TWP Sala 1: "rotas possiveis". RaidGuidesSection.tsx:64 tem "Espaco reservado para o video desta estrategia", mas hoje esse texto nunca aparece, porque toda variação tem vídeo.
- leveling-content.ts:164 "bau".

### 0.4 Outros problemas gerais
- **"Guia Oficial"** aparece como rótulo em 11 páginas. É um site de fã, então isso pode confundir com a Wynncraft oficial. Sugestão: "Guia GsW".
- **Restos de prompt ou de material de origem** no texto publicado: "baseadas no seu material" (lootrun combos), "Valor aproximado mencionado no guia", "Exemplo citado" e "Exemplo do guia" (shares).
- **Mistura de português e inglês** sem padrão: ingredients/ingredientes, challenge/desafio, Market Place/Trade Market, Master/Mestre, Grandmaster/Grão-Mestre, totems/totens. Vale definir um glossário.
- **BOM (U+FEFF)** no começo de vários .ts/.tsx. Não aparece na tela, mas é bom padronizar.

---

## 1. Home (`components/home/data/home-content.ts`, ~650 palavras)
**Seções:** Hero (marca, título, CTA "Explorar conteúdos") · 3 destaques no hero (Lootrun, Raids, Shares) · "Visão do projeto" (3 parágrafos + 3 pilares) · vitrine com 4 prints · grade com 9 cards de guias.

**Bom:** a navegação pelos cards é clara e cada card usa um print real da área.
**Fraco:**
- O texto é genérico, de marketing ("Nada de texto vazio", "Atualização contínua… evitando conteúdo desatualizado"). Essa promessa não se cumpre: há dados desatualizados (ver as áreas abaixo).
- O `alt` "Entrada do centro de divisão" não descreve bem a imagem Cinfras_silverbull.
- O card de Leveling promete "builds de grind". Existe, mas sem nada de Fruma.
- Montarias e Festivais não aparecem na Home (coerente, porque são páginas vazias).

**Atualidade:** não há fatos de jogo para checar.
**Mídia:** só reaproveita imagens das outras áreas, mais `/bg-guilda.webp` (1,1 MB). Manter tudo e comprimir o fundo.

---

## 2. História (`history/data/members.ts` ~300, `gallery.ts` ~350; textos em `history/sections/History.tsx`, `Pillars.tsx`, `Essence.tsx`)
**Seções:** Intro · Linha do tempo de 2017 a 2026 (6 eras) · Essência (3 cards) · Pilares (5) · Membros (28) · Galeria (28 fotos com modal).

**Bom:** é o conteúdo mais exclusivo da GsW: fotos próprias, membros, eras. Tem personalidade.
**Fraco:**
- **Contradição:** a era de 2024 diz que os 5 pilares são "Warteam, Moderação, Eventos, Conteúdo e Desenvolvimento", mas `Pillars.tsx` mostra **Tickets** no lugar de Moderação.
- A galeria tem "Final Season III" com a descrição "Season 21". Parece erro de digitação (seria 3?).
- Tags: "Paraguayano" (em português é paraguaio), "Lootruner" (Lootrunner), "partys" em Pillars.tsx (parties).
- "o maior guia em português já visto em Wynn" é uma afirmação que não dá para provar.
- BadBoyCJ (fundador) está sem foto.

**Atualidade:**
- O texto diz que Fruma abriu em 2026 e que em 2025 ainda se esperava. **OK**: a 2.2.0 "Fruma Expansion" saiu em 4/abr/2026 (https://wynncraft.wiki.gg/wiki/Version_history).
- Fatos internos da guilda: **não verificados** (não existe fonte externa).

**Mídia:**
- gallery/: 28 arquivos, 24,2 MB. São prints próprios, todos para **manter**. Comprimir os que passam de 1,5 MB: reuniao_no_gelo (2,1 MB), reuniao_ilha3 (2,1 MB), ghousing (1,8 MB), natal_gsw (1,7 MB), reuniao_ilha2 (1,6 MB), final_season (1,6 MB), reuniao_ilha (1,5 MB), evento_pagu (1,4 MB). A galeria usa `thumbSrc`, mas não há thumbnails criadas.
- members/: 27 arquivos, 6,0 MB. **Manter.** Avatares de até 582 KB (furionspeed) e 530 KB (radicchi) são grandes demais para um card; reduzir para cerca de 400 px. gst3.webp tem só 1 KB: confirmar se não é um placeholder.

---

## 3. Leveling (`leveling/data/leveling-content.ts`, ~2.200 palavras)
**Seções:** Intro · Party (party finder, healers, totens, bombas) · 11 spots de nível 1 a 121 com coordenadas · Builds (5 ability trees no wynnbuilder) · rota de armas por classe (5 classes) · lista de 32 armaduras e acessórios.

**Bom:** é prático e específico: coordenadas, quests exigidas, dicas por spot, rota de armas com link e ícone do item guide oficial.
**Fraco:**
- Acentos quebrados nas linhas :77, :107 e :141.
- O spot se chama "Scrapyard", mas a imagem é `scrapward.webp`.
- Há só uma árvore de habilidade por classe (Acrobat, Boltslinger, Arcanist, Fallen, Summoner). Os outros 10 ícones de arquétipo em `public/abilitytree/` estão sem uso.
- Indentação quebrada no bloco do Shaman (só estética do código).

**Atualidade:**
- Nível máximo 120, com o nível bônus 121 ("Do level 1 ao 121", healers "120 ou 121"): **OK** (https://wynncraft.wiki.gg/wiki/Combat_Level).
- **Sem spots de Fruma** (província de nível 105 a 120 adicionada na 2.2.0): **desatualizado**, porque o fim do jogo hoje é Fruma, não só Bat Cave e Church (https://wynncraft.wiki.gg/wiki/Version_history).
- Coordenadas, quests dos spots, itens e níveis das armas: **não verificados** um por um.
- Links do wynnbuilder-beta: **não verificados**. A 2.2 aumentou os pontos de habilidade de 45 para 50, então as árvores podem estar defasadas.

**Mídia:**
- leveling/: 17 arquivos, 14,7 MB. Os prints dos spots são próprios: **manter**, mas comprimir scrapward (2,4 MB), saints_row (1,9 MB), church (1,4 MB), mount_wynn (1,3 MB), emerald_trail (1,2 MB), pigman_ravine (1,1 MB) e herb_cave (1,1 MB).
- As 5 imagens de classe (cerca de 70 KB cada) estão OK.
- **Faltam:** prints de spots em Fruma e ícones das armaduras. Hoje elmo, peitoral, calça e bota mostram o logo da guilda `/icon.webp` (282 KB) como ícone genérico (veja o item 5).

---

## 4. Profissões (`professions/data/professions-content.ts`, ~2.150 palavras)
**Seções:** Intro · Tipos (4 de coleta, 8 de criação) · Ferramentas e bombas · Spots de ingredientes por profissão (tabelas com nível e coordenadas) · Waypoints do Wynntils (download do .txt) · Extra (marcos de nível, tiers, receitas, notas) e links para a wiki.

**Bom:** as tabelas de ingredientes com coordenadas e a tag "NPC" são únicas e úteis. O arquivo de waypoints para download é um diferencial. Tem links para a wiki.
**Fraco:**
- "?leo" e "? um conteúdo" (acentos quebrados).
- "Costal Sand" deveria ser "Coastal Sand".
- O passo a passo de importação fala de "Content Book > Overlay Management > Info Box". Isso é configuração de overlay do Wynntils, não importação de waypoints, e Content Book é um menu do jogo, não do Wynntils. Está confuso e provavelmente errado.
- Mistura "ingredients" e "ingredientes".
- "Loot Bônus" com acento no meio de um termo em inglês.

**Atualidade:**
- Lista de 4 profissões de coleta e 8 de criação: **OK** (https://wynncraft.wiki.gg/wiki/Professions).
- Materiais por profissão (ex.: Armouring = Mining + Woodcutting): **OK**. Woodworking também usa Oil, que o site não cita (pequena falha).
- Nível máximo 132: **OK**.
- "Último grande desbloqueio 110 (coleta) / 103 (criação)": **desatualizado**. A wiki indica 115 e 117.
- Ferramentas "de 1 a 100, em múltiplos de 5": **desatualizado ou impreciso**. A wiki diz que as ferramentas são 1 e 5 e depois 15, 25, 35…, e que um material de nível alto não exige ferramenta nova.
- Duração e efeito das bombas de profissão: **não verificados**.

**Mídia:**
- professions/: 23 arquivos, 2,0 MB. spot1/2/3 (440 a 880 KB) são prints próprios: **manter**.
- Os 12 ícones de profissão têm cerca de 220 bytes cada. São webp lossless válidos (pixel art): OK.
- exemplo_de_craftado está OK. professions.webp, professions2.webp e tiers_percent eram prints de tabelas da wiki e foram removidas: as tabelas viraram HTML no guia.
- **Falta:** print da estação de criação e da tela de receita.

---

## 5. Links e IDs externos (todas as áreas)
- **Ícones do item guide:** `buildLevelingItemGuideIconUrl(icon)` gera `https://cdn.wynncraft.com/nextgen/itemguide/3.3/<iconName>.webp` (ex.: `…/3.3/dagger.water3.webp`). Testei os 62 nomes de ícone: armas, anéis, braceletes e colares respondem **200**. Os 16 ícones de armadura (`helmet.*`, `chestplate.*`, `leggings.*`, `boots.*`) respondem **404**. O código já contorna isso usando `/icon.webp` para armaduras (LevelingBuildsSection.tsx:118-131), mas o mapa `armorIconByGuideQuery` tem nomes que não existem na CDN. A versão "3.3" está fixa no código: se a CDN mudar de versão, todos os ícones quebram juntos.
- **Link do item:** `buildLevelingItemGuideLink(name)` gera `https://wynncraft.com/item/<encodeURIComponent(name)>`. O teste com `/item/Nirvana` respondeu 200 (página HTML; não confirmei se ela mostra o item certo). Também há link para `https://wynncraft.com/help/item-guide`.
- **YouTube:** são 38 IDs. 35 estão em raids-content.ts, 2 em lootrun-content.ts (XqDErIU1fQU, pv5HhUWO79k) e 1 em world-events-content.ts (NEvfcrQujDI). Todos responderam 200 no oEmbed, ou seja, existem e são públicos. **Dois pares repetidos em raids TCC Sala 3:** "Agate Axon" usa o mesmo ID da "Primeval Machine" (`_OhHZxYHE-Y`) e "Elder Astal" usa o mesmo de "Desvie das Pedras" (`q397DxEKJ30`). Provavelmente estão errados ou faltam os vídeos certos. Embed via `youtube.com/embed/<id>` com miniatura de `i.ytimg.com/vi/<id>/hqdefault.jpg`.
- **Outros:** 5 links do wynnbuilder-beta.github.io (leveling), 3 links da wiki (profissões), wynncraft.com/store/ranks (shares), discord.gg/Ec2YPWTN9E e GitHub (footer).

---

## 6. Montarias (`components/mounts/*`, ~190 palavras, **placeholder**)
**Seções:** Intro com 2 parágrafos e uma seção "em desenvolvimento". Não há conteúdo real.
**Atualidade:** o sistema existe e é grande. Na 2.2.0 os cavalos viraram **Mounts**, com 3 tipos: Horse (nível 9, quest Stable Story), Wyvern (nível 84, The Canyon Guides) e Adasaur (nível 115, Burning Bonds). Cada um custa 24 EB no Mount Merchant e fica em um cercado (enclosure) com slots que aumentam conforme o rank. A montaria tem 8 atributos, que sobem com powerups, comida e Time Trials, e dá para cruzar duas montarias. Fonte: https://wynncraft.wiki.gg/wiki/Mounts. A página do site é **vazia, mas é um assunto atual e pedido**: prioridade alta.
**Mídia:** nenhuma. **Faltam:** prints dos 3 tipos, do cercado e da tela de atributos, e um POV de treino.

## 7. Festivais (`components/festivals/*`, ~190 palavras, **placeholder**)
**Seções:** igual a Montarias, só um marcador.
**Atualidade:** a wiki lista 4 festivais: Festival of the Heroes, of the Bonfire, of the Spirits e of the Blizzard (https://wynncraft.wiki.gg/wiki/Special:Search?search=festival). O Festival of the Spirits voltou na 2.1.5. A página de shares já cita Heroes, Bonfire, Spirits e Blizzard como fontes de crates: **OK**. Datas e recompensas de cada festival: **não verificadas**.
**Mídia:** nenhuma. A galeria tem "natal_gsw" (Natal 2024), que pode servir. **Faltam** prints de cada festival.

---

## 8. Lootrun (`lootrun/data/lootrun-content.ts`, ~3.000 palavras)
**Seções:** Como participar (Silverbull em Cinfras) · 7 lootcamps com coordenadas, dificuldade e desafios perigosos · Divisões e XP · Mecânicas (desafios, timer) · Sistemas (rerolls, curses e radiance, boons, missões e trials) · 13 beacons · Recompensas (2 vídeos e o baú) · 6 combos de missões e trials · Extra (10 notas e GIFs).

**Bom:** é a página mais completa. Tem GIFs próprios de cada mecânica, combos de alto nível (Opal Offering + Chronotrigger, Jester's Scheme…) que são conhecimento de jogador experiente, dicas por camp e o checklist final.
**Fraco:**
- **Erro de coordenada:** Canyon e Corkus aparecem com a mesma coordenada (-1560, 97, -2675). Essa é a de Corkus; a de Canyon (South) é 575, 78, -5025.
- "Cleasing Greed" deveria ser "Cleansing Greed".
- A descrição do vídeo I é informal e temporária ("vou colocar outro vídeo logo abaixo").
- Rank "Commander" com 2 rerolls: **não verificado**.
- Cores repetidas nos emojis dos beacons (item 0.1).

**Atualidade** (https://wynncraft.wiki.gg/wiki/Lootrunning):
- Lista de 7 camps, incluindo Fruma West e Fruma East: **OK**. Coordenadas de Corkus, Molten, Sky, Silent Expanse e das duas de Fruma: **OK**. Canyon: **errada**.
- Teto de XP de 500 por run (700 com o bônus diário): **OK**. Timer máximo de 15 min, que só o beacon Green ultrapassa: **OK**. Limite máximo de 100 desafios: **OK**. Mínimo de 4 desafios: **OK**.
- Começar com 12 desafios: **não verificado**.
- **Valores dos beacons: desatualizados.** O site usa 3 níveis (Base / Vibrante / Vibrante + Aqua) e a wiki atual usa 4. Exemplos: Blue 100/200/300/400%, White +15 a 30 desafios, Red +6 a 15, Green +210 a 570 s, Pink +2 a 5 rerolls, Dark Grey +5 a 20, Grey com no máximo 3 usos (o site diz limite de 4 missões), Rainbow 15 a 30 desafios, Yellow 2 a 5 baús, Orange 10 a 25 desafios. A tabela inteira precisa ser refeita.
- Pink Beacon (adicionado na 2.2.0): **OK**, já está listado.
- Nomes das divisões: o site cita faixas I/II/III e Commander. A wiki confirma Rookie, Assistant, Sentinel, Elite, Admiral, Commander, Master e Grandmaster: **OK**, mas o site não lista os nomes.

**Mídia** (lootrun/: 47 arquivos, **112 MB**; os **16 GIFs somam 93,7 MB**):
- **Todos os 16 GIFs passam de 2 MB** e devem virar vídeo (mp4/webm curto em loop, ou YouTube): GanhandoTempo_Terminando_o_desafio_2 (10,1 MB), jump_pads (8,9 MB), fast_travels_corkus (8,3 MB), gif_molten (8,1 MB), morrendo_desafio (7,7 MB), lootrun_acabando (7,5 MB), desafio_gidf (5,9 MB), beacon_rr (5,9 MB), tempo_diminuindo_ao_morrer (5,4 MB), limite_desafios (5,0 MB), area_jogavel2 (4,7 MB), GanhandoTempoChegando_no_desafio (4,1 MB), checando_rank (3,3 MB), boons_escolhas (2,9 MB), area_jogavel (2,9 MB), icones_lootrun (2,9 MB). O conteúdo é próprio e vale **manter**; o que muda é o formato.
- Os webp dos camps são próprios: **manter** e comprimir canyon_camp (2,2 MB), corkus_camp (2,0 MB), sky_camp (1,8 MB), molten_camp (1,6 MB), timer (1,2 MB) e se_camp (1,1 MB).
- pets.mp4 (1,4 MB) e status.mp4 (2,5 MB): manter.
- **Falta:** um print ou vídeo da tela de Trials (beacon Crimson) e uma imagem atual de cada beacon.

---

## 9. Silverbull Shares (`silverbull-shares/data/silverbull-shares-content.ts`, ~2.100 palavras)
**Seções:** O que são Shares (Trade Market e loja virtual, tradable e untradable) · Loja in-game (categorias) · Extra (ofertas, acesso nas cidades) · 5 ranks com custo · Membership (8 benefícios) · Crates · 12 bombas · 3 bundles de pets · 4 tokens.

**Bom:** é uma visão completa de custo-benefício, e a "Dica GsW" (HERO como melhor custo-benefício) tem opinião própria.
**Fraco:**
- Bloco inteiro sem acentos (item 0.3).
- "Traker" deveria ser "Tracker" (2x).
- "possui restrições" deveria ser "possuem".
- Tom de piada que pode envelhecer mal ("a maior organizacao capitalista do mundo").
- Frases que citam "o guia" de origem.
- Emojis nas bombas e nos tokens (item 0.1).

**Atualidade:**
- Custo dos ranks em Shares (15 / 28 / 60 / 100 / 171) e VIP com 7 slots de personagem: **OK** (https://wynncraft.wiki.gg/wiki/Ranks).
- VIP+ com 10 slots no Trade Market, HERO com /switch e prioridade na fila, CHAMPION com aviso de bombas e super prioridade: **OK**.
- Assinatura Silverbull "6 Tradable Shares por 14 dias": **não verificado e possivelmente desatualizado**. A wiki indica US$ 11,99 por mês ou US$ 119,99 por ano e não cita preço em Shares (https://wynncraft.wiki.gg/wiki/Silverbull_Subscription).
- Taxa do Trade Market "de 5% para 3%": a wiki diz −2 pontos percentuais, **OK**. Juntar 3 cosméticos: **OK**. 5 Shares por mês: **OK** (a wiki diz que são *untradeable*).
- Acesso ao beta: a wiki diz "HERO Beta", **OK em parte**.
- "Dobra o bônus diário de Lootrun e Raid": a wiki **não cita**, então **não verificado**.
- Preço das Shares no mercado (30 LE) e pacote de US$ 12: **não verificados** (o preço muda com o mercado).

**Mídia** (shares/: 22 arquivos, 1,5 MB): prints próprios da loja, leves, **manter**. local.webp (622 KB) pode ser comprimida. Confirmar se as telas são da interface atual (2.2): **não verificado**.

---

## 10. Modos Especiais (`special-modes/data/special-modes-content.ts`, ~560 palavras)
**Seções:** Intro · 5 modos (Hardcore, Ironman, Ultimate Ironman, Craftsman, Hunted) · Combinações (HUIC(H)) com requisitos e uma imagem de referência.

**Bom:** é curto e correto no geral. As exceções de morte do Hardcore estão bem detalhadas.
**Fraco:**
- "até a conclusão do mod" deveria ser "modo".
- "HUIC(H) e HIC(H)" não é explicado (a sigla vem de Hardcore + Ultimate Ironman + Craftsman + Hunted).
- Os requisitos "Content Book 100% / Legendary Island solo" não dizem a fonte.

**Atualidade** (https://wynncraft.wiki.gg/wiki/Special_Gamemodes):
- Hardcore liberado no nível 30, emblema que fica cinza, exceções (raid, lootrun, /kill, world event concluído): **OK**.
- Ultimate Ironman e Craftsman liberados no nível 50: **OK**. /ironman rebaixando um estágio: **OK**. Bolsa de ingredientes guardando qualquer item: **OK**.
- Ironman liberado no nível 50: **não verificado** (a wiki não informa).
- Hunted: quest "A Hunter's Calling" **OK**. "Nível 103": **não verificado** (a wiki não exige nível). PvP com até 10 níveis de diferença: **OK**. Faltam os bônus (+50% de XP de mobs e de coleta) e a regra de sair durante combate.
- "Míticos e introcáveis não dropam": **não verificado**.

**Mídia:** gamemodes/: 5 SVG e 1 webp (21 KB). **Manter.**

---

## 11. World Events (`world-events/data/world-events-content.ts`, ~1.050 palavras)
**Seções:** Como participar · Mecânicas (ondas, party, chefe, recompensa) · Annihilation (composição da party, mecânica do sol, vídeo de speedrun) · Recompensas · Extra.

**Bom:** é claro para iniciantes. O vídeo de speedrun do Annihilation é próprio e diferencia o site.
**Fraco:**
- Há muita repetição: "até 4 LE" e "míticos 90+" aparecem 2 ou 3 vezes.
- "certifiquem-se" muda de pessoa no meio do texto.
- O texto é genérico e não lista nenhum evento por região.

**Atualidade:**
- "Os mobs escalam com o tamanho da party": a wiki diz que cada jogador ou party tem sua própria instância, com mobs no nível do jogador mais alto. **Parcial / não verificado** (https://wynncraft.wiki.gg/wiki/World_Events).
- Exigência de quest em vários eventos: **OK**.
- Bomba de World Event sem incluir o Annihilation: **OK**.
- Annihilation continua sendo o único evento grande ("Prelude to Annihilation") desde a 2.1: **OK**.
- Mecânica do sol: **OK no geral**. Correção: a wiki diz que surgem **2** Infernal Subjugates (esquerda e direita), e o site diz esquerda, direita e atrás. Também faltam informações: o sol aparece com 50% e 20% de vida, a party pode ter até 10 jogadores, o evento acontece mais ou menos a cada 3 dias, há 30 min de limite e o Corrupted Cache dá 1 de 5 armas míticas exclusivas (https://wynncraft.wiki.gg/wiki/Annihilation).
- "Até 4 LE" e "chance de mítico em eventos 90+": **não verificados**.
- Mudanças de eventos com Fruma: **não verificado** (a wiki não cobre).

**Mídia** (worldevents/: 5 arquivos, 3,9 MB): prints próprios, **manter** e comprimir annihilation_portal (1,3 MB) e bau_final_we (967 KB). **Falta:** um print da mensagem de notificação no chat.

---

## 12. Raids (`raids/data/raids-content.ts`, ~6.450 palavras, a maior página)
**Seções:** Como participar (Silverbull, fila de party) · Catálogo de 5 raids (nível, quest, runa, local) · Estrutura (salas, buffs, chefe, falha) · Guild raids (recompensas, distribuição de aspects) · Guias sala a sala de NOTG, NOL, TCC, TNA e TWP, com variações e **35 vídeos POV** · Recompensas (pulls, aspects) · Extra (gambits, ranking).

**Bom:** é o ponto mais forte do site. Explica sala a sala, cada variação tem vídeo POV da própria guilda, dá dicas por função e tem as regras internas de distribuição de aspects. Nenhum outro guia em português tem isso.
**Fraco:**
- Os 2 vídeos repetidos na TCC Sala 3 (item 5).
- O texto da TNA diz que ela "fecha o ciclo das raids", mas a TWP veio depois.
- "guidagem" não existe em português ("orientação").
- "dentro da party finder" está fora de contexto.
- "possiveis" sem acento.
- "Mestre / Grão-Mestre" misturado com "Admiral / Master".

**Atualidade** (https://wynncraft.wiki.gg/wiki/Raids):
- Lista das 5 raids (NOTG, NOL, TCC, TNA, TWP): **OK**. Runas (Az, Uth, Tol, Tol, Ek): **OK**. Party de 4: **OK**. Quests: **OK** (TCC termina em The Breaking Point, TNA em A Journey Further, TWP em Apotheosis).
- **Níveis mínimos desatualizados:** o site diz 55+ / 80+ / 97+ / 103+ / 119+ e a wiki diz 54 / 79 / **95** / 103 / 119. A diferença da TCC é a maior.
- Coordenadas: **não verificadas** (a wiki não as lista).
- **Gambits desatualizados:** o site diz que o 2º e o 3º gambit são liberados em Admiral e Master. Pela wiki, os slots abrem em Rookie I, **Sentinel I**, Admiral e Master (4 slots), há 4 gambits oferecidos por dia, renovados às 13h ET, e dá para usar até 3.
- **Ranking incompleto:** o site diz que a partir de Admiral os ranks são "Admiral, Mestre e Grão-Mestre". A wiki tem Admiral, **Commander**, Master e Grandmaster.
- Troca semanal de aspects (sexta às 14h de Brasília), recompensa de guild raid (2048 esmeraldas e 2 aspects) e pulls por sala (+3 / +2): **não verificados**.

**Mídia** (raids/: 19 arquivos, 5,4 MB): prints próprios, **manter**. Comprimir twp.webp (1,35 MB). Os 35 vídeos POV no YouTube são o ponto forte: **manter**. **Falta:** guia do chefe final de cada raid (a estrutura cita o chefe, mas não há seção dedicada).

---

## 13. Dungeons (`dungeons/data/dungeons-content.ts`, ~1.000 palavras)
**Seções:** Como entrar (normal e corrupta) · Forgery System · Dungeon Merchant · Recompensas · Extra.

**Bom:** explica o ciclo Forgery 8/8, que é útil para o fim do jogo.
**Fraco:**
- **Não há lista de dungeons.** Faltam nomes, níveis e chefes: é a maior falta de conteúdo do site.
- Os passos são vagos ("quando aplicável").
- "Market Place" deveria ser "Trade Market".
- O nome do arquivo `dungeon_merchangt.webp` tem erro de digitação.
- Acento quebrado na linha :194.

**Atualidade** (https://wynncraft.wiki.gg/wiki/Dungeons):
- Existem 8 dungeons corrompidas: **OK** (Decrepit Sewers, Infested Pit, Lost Sanctuary, Underworld Crypt, Sand-Swept Tomb, Ice Barrows, Undergrowth Ruins, Galleon's Graveyard, do nível 65 ao 93+).
- 10 dungeons normais, incluindo Fallen Factory e Eldritch Outlook: o site **não lista**.
- Chave conseguida com Key Guardians, world events e lootruns: **OK em parte** (o site não cita os Key Guardians). Chave corrompida "quebrada", consertada com runas no Key Forge Merchant: **OK** no sentido geral.
- **Merchant desatualizado:** o site diz que os itens são comprados com fragmentos. Pela wiki, o principal é o **Boss Token**, trocado no Dungeon Merchant; os fragmentos compram scrolls.
- Dungeons não exigem mais quest desde a 2.1, exceto Fallen Factory e Eldritch Outlook: o site diz "concluir a quest (quando aplicável)", **parcialmente OK**.
- Forgery com janela de 3 h, 1,5% de chance de mítico e +0,01% por run: **não verificado** (a wiki só diz que a Forgery foi refeita na 1.20, sem detalhes).

**Mídia** (dungeons/: 6 arquivos, 172 KB): leves e próprias, **manter**. **Faltam:** um print por dungeon (ou pelo menos das corrompidas) e um POV de uma run completa da Forgery.

---

## 14. Arquivos sem uso em public/
- `public/abilitytree/`: 10 ícones nunca usados (acolyte, battleMonk, lightBender, paladin, ritualist, shadestepper, sharpshooter, trapper, trickster, riftwalker). Podem servir para incluir mais arquétipos no Leveling.
- `public/professions/profwaypoints.txt` é usado como download.
- Nenhuma imagem referenciada no código está faltando em public/.

Total de public/: cerca de 170 MB, dos quais 112 MB são da lootrun (quase tudo GIF).

---

## 15. O que não consegui verificar
- Como os emojis aparecem de fato na tela: não abri o site em vários sistemas. O diagnóstico vem da fonte usada e dos códigos dos caracteres.
- Coordenadas (leveling, profissões, raids) e valores de mercado (preço de Shares, LE).
- Detalhes de lootrun fora da wiki (12 desafios iniciais, 2 rerolls de Commander) e se os combos ainda funcionam depois da 2.2.
- Regras atuais da Forgery e troca semanal de aspects.
- Se os prints mostram a interface atual (2.2).
- Se os links do wynnbuilder ainda abrem as árvores certas.
- Se o conteúdo dos vídeos do YouTube corresponde à sala indicada (só confirmei que os IDs existem).
- O site oficial wynncraft.com/help/item-guide é carregado por JavaScript e a ferramenta de leitura não conseguiu ler o conteúdo. Os padrões de URL foram confirmados por requisições HTTP diretas.
- Algumas páginas da wiki foram lidas só em parte por serem longas (World_Events, Version_history).

---

## 16. Tabela de prioridades

| # | Área | Estado | Principal ação |
|---|---|---|---|
| 1 | Montarias | vazio | Escrever a página com o sistema da 2.2 (Horse, Wyvern, Adasaur, cercado, atributos, comida, cruzamento) e prints próprios |
| 2 | Lootrun | revisar | Refazer a tabela de beacons com os 4 níveis atuais, corrigir a coordenada de Canyon e "Cleansing", converter os 16 GIFs (94 MB) em vídeo, trocar os emojis por CSS |
| 3 | Dungeons | reescrever | Incluir a lista de dungeons (10 normais e 8 corrompidas, com nível e chefe), corrigir Merchant e Boss Token, confirmar a Forgery |
| 4 | Silverbull Shares | revisar | Acentuar o bloco Membership, confirmar preço e duração da assinatura, trocar emojis por ícones, tirar as frases "do guia" |
| 5 | Raids | revisar (bom) | Corrigir níveis (TCC 95 etc.), gambits e ranks (Commander), os 2 vídeos repetidos da TCC e a frase "TNA fecha o ciclo" |
| 6 | Leveling | revisar | Incluir spots de Fruma (105 a 120), corrigir os 3 acentos, rever as árvores (50 pontos na 2.2) |
| 7 | Festivais | vazio | Escrever a página com os 4 festivais (Heroes, Bonfire, Spirits, Blizzard) usando prints de eventos da guilda |
| 8 | Profissões | revisar | Corrigir os marcos 115/117, os níveis de ferramenta, "Óleo" e "Coastal", e refazer o passo a passo de import do Wynntils |
| 9 | World Events | revisar | Corrigir os Subjugates, incluir frequência, party de 10 e Corrupted Cache, tirar repetições |
| 10 | História | bom | Resolver Moderação x Tickets, "Season 21", tags; comprimir as fotos de mais de 1,5 MB |
| 11 | Modos Especiais | bom | Corrigir "mod", explicar HUICH, incluir bônus e penalidades do Hunted |
| 12 | Home | bom | Tornar o texto mais concreto, trocar "Guia Oficial" no site todo, comprimir bg-guilda |

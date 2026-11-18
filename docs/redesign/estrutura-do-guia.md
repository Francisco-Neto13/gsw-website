# Estrutura do guia completo e plano de conteúdo

Objetivo: o site vira, aos poucos, um guia completo do Wynncraft em pt-BR, mantido pela GsW.
Base: a cobertura das fontes (wiki, site oficial e API, levantada em 18/11/2026, jogo na 2.2.4) e o
inventário do conteúdo atual (`inventario-conteudo.md`).

## Mapa de guias

Os grupos são os mesmos da sidebar (`navegacao.md`). **Negrito** = página nova.

| Grupo | Guia | Hoje | O que cobre | Fonte principal |
|---|---|---|---|---|
| Começando | **Primeiros passos** | — | O que é o Wynncraft, como entrar, escolher a classe, primeiras quests, interface e menus (Content Book, Party Finder) | wiki: Content_Book, Party_Finder |
| | **Classes e arquétipos** | — | 5 classes, 3 arquétipos cada, ability tree (50 AP e Ultimates da 2.2), como montar a árvore | wynncraft.com/help/classes; wiki: Classes, Archetypes, Ability_Tree |
| | **Mapa e regiões** | — | Províncias (Wynn, Gavel, Silent Expanse, Fruma), faixas de nível, viagens rápidas | map.wynncraft.com; wiki: *_Province |
| | **Glossário** | — | Termos do jogo em inglês com a explicação em português (resolve a mistura pt/en dos guias) | Próprio |
| Progressão | Leveling | Bom, desatualizado | Spots de 1 a 121, party, builds, rota de armas; **falta Fruma** | wiki: Combat_Level |
| | **Quests** | — | Linha principal (incluindo os 13 capítulos de Fruma), sides que destravam conteúdo (raids, montarias, Hunted) | wiki: Quests |
| | Profissões | Bom, com erros | Coleta e criação, ferramentas, spots, waypoints | wiki: Professions, Crafting |
| | Montarias | Vazio | Horse, Wyvern, Adasaur (2.2), cercado, 8 atributos, comida, Time Trials, cruzamento | wiki: Mounts |
| Equipamento | **Itens e raridades** | — | Raridades, identificações e rolagem, Major IDs, sets, Item Ascension (2.2) | item guide oficial; wiki: Rarity, Identifications |
| | **Powders e Item Upgrader** | — | Powders por elemento e tier (VII na 2.2), Item Upgrader | wiki: Powders, Item_Upgrader |
| | **Tomes, Charms e Aspects** | — | Bônus permanentes, acessório de Lootrun, aspects de raid | wiki: Mastery_Tomes, Charms, Aspects |
| Endgame | Lootrun | Muito bom, dados velhos | Camps, divisões, mecânicas, beacons, combos | wiki: Lootrunning |
| | Raids | O melhor do site | 5 raids sala a sala com 35 POVs; **falta o chefe final de cada uma** | wiki: Raids |
| | Dungeons | Fraco | **Lista das 10 normais e 8 corrompidas**, Forgery, Boss Tokens | wiki: Dungeons |
| | World Events | Bom, com erros | Eventos por região, Annihilation | wiki: World_Events, Annihilation |
| | **Altares, cavernas e descobertas** | — | Boss Altars, Caves, Secret Discoveries | wiki: Category:Boss_Altars, Caves |
| Economia | **Esmeraldas e Trade Market** | — | Moeda, conversões (E, EB, LE), Trade Market, Bank | wiki: Emeralds, Trade_Market |
| | Silverbull Shares | Bom, com erros | Shares, ranks, assinatura, crates, bombas, tokens | wiki: Ranks, Silverbull_Subscription |
| Guildas | **Guildas, territórios e guerras** | — | Como funciona uma guilda, níveis, territórios, Guild War e temporadas. Dados ao vivo de territórios pela API, gerados no build | wiki: Guilds, Territories, Guild_War; API: guild |
| | **Housing** | — | Ilhas e casas | wiki: Housing |
| Especiais | Modos especiais | Bom | Hardcore, Ironman, Ultimate Ironman, Craftsman, Hunted, combinações | wiki: Special_Gamemodes |
| | Festivais | Vazio | Heroes, Bonfire, Spirits, Blizzard: quando, o que fazer, recompensas | wiki: Festival of the … |

Guildas é o grupo onde a GsW tem mais a dizer que qualquer wiki. É o candidato natural a ligar os
guias à Comunidade.

## Modelo de página de guia

Todo guia, novo ou reescrito, segue o mesmo esqueleto. É o que garante o princípio "crescer sem
quebrar" do `PRODUCT.md`.

1. **Breadcrumb**: `Guias › Endgame › Raids`.
2. **Título** e uma frase que diz para que serve o guia.
3. **Ficha do guia** (bloco curto): nível recomendado, pré-requisitos (quest, item, rank), tempo
   ou tamanho de party quando fizer sentido, e o selo "Atualizado para a 2.2.x · mês/ano".
4. **Resumo rápido**: 3 a 5 tópicos para quem só quer o essencial.
5. **Seções** com H2 e H3, passos numerados quando houver ordem (salas, etapas), mídia própria
   junto do passo que ela mostra.
6. **Dica da GsW**: bloco de destaque com a opinião da guilda (o diferencial; hoje já existe no
   Shares e nas Raids).
7. **Tabelas** para dados de consulta (níveis, coordenadas, valores de beacon), com cabeçalho fixo
   no celular.
8. **Fontes**: links para as páginas da wiki e do site oficial consultadas.
9. **Anterior / Próximo**.

Guia sem conteúdo ainda usa o mesmo esqueleto: ficha, o que o guia vai cobrir (lista de seções
previstas), link para a fonte oficial enquanto isso, e "Em construção" no selo.

## Plano de conteúdo

O conteúdo não muda nesta etapa (Fase 2). Na Fase 3, cada página que passar pelo redesign recebe
junto as correções de dado do inventário, no mesmo PR.

### Correções que acompanham o redesign (P0 de conteúdo)

| Área | Correção |
|---|---|
| Todas | Trocar "Guia Oficial" por "Guia GsW"; acentos quebrados (8 lugares) e textos sem acento (bloco Membership do Shares); emojis por ícones; restos de rascunho ("baseadas no seu material", "Exemplo do guia") |
| Lootrun | Refazer a tabela de beacons (4 níveis atuais); coordenada do camp Canyon; "Cleansing Greed"; GIFs viram vídeo |
| Raids | Níveis mínimos (TCC 95, NOTG 54, NOL 79); gambits (slots em Rookie I, Sentinel I, Admiral, Master); rank Commander; 2 vídeos repetidos da TCC Sala 3; "TNA fecha o ciclo" |
| Dungeons | Lista das dungeons; Merchant com Boss Token |
| Profissões | Marcos 115/117; níveis de ferramenta; "Coastal Sand"; passo a passo do Wynntils |
| World Events | Annihilation: 2 Subjugates, frequência, party de até 10, Corrupted Cache |
| Leveling | Ícones de armadura que dão 404 na CDN; spots de Fruma |
| História | Moderação x Tickets; "Season 21"; tags ("Lootrunner", "paraguaio") |

### Ordem sugerida para as páginas novas

| # | Página | Por quê |
|---|---|---|
| 1 | Montarias | Sistema novo da 2.2, página já existe vazia, assunto pedido |
| 2 | Dungeons (reescrita com a lista) | Maior falta de conteúdo de uma página existente |
| 3 | Primeiros passos + Glossário | Porta de entrada do jogador novo; o glossário padroniza os termos do resto |
| 4 | Classes e arquétipos | Base para Leveling e Raids; a 2.2 mudou a árvore |
| 5 | Guildas, territórios e guerras | Onde a GsW é autoridade; liga guia e Comunidade |
| 6 | Itens e raridades | Usa dados da API e os ícones (com o cuidado de `fontes-e-licencas.md`) |
| 7 | Festivais | Página já existe vazia; depende de prints da época de cada festival |
| 8 | Mapa e regiões, Quests, Economia, Powders, Tomes/Charms/Aspects, Altares, Housing | Completam o mapa |

### Como o conteúdo é mantido

- Continua em arquivos de dados no repositório, editados por você (decisão do `PRODUCT.md`).
  Se outros membros forem escrever, a migração natural é para MDX; não é necessária agora.
- Cada guia ganha no arquivo de dados: `versaoDoJogo`, `atualizadoEm`, `nivelRecomendado`,
  `fontes[]` e `estado` (`completo` | `em-construcao`). A sidebar, o `/guias` e o selo de versão
  leem desses campos.
- Mídia nova passa pelo `image-workbench`; vídeo curto em loop (mp4/webm) no lugar de GIF.
- Um guia "vence" quando sai patch que mexe na área: o selo de versão mostra a defasagem e a
  revisão entra em `docs/PENDENCIAS.md`.

## Prints: manter ou trocar

Resumo do inventário (detalhe por arquivo em `inventario-conteudo.md`):

| Área | Manter | Trocar ou criar |
|---|---|---|
| Raids | Todos os prints e os 35 POVs | Vídeos certos para 2 salas da TCC; chefes finais |
| Lootrun | Todos (conteúdo próprio) | 16 GIFs (94 MB) → vídeo; print de Trials e de cada beacon |
| Leveling | Prints dos spots (comprimir 7) | Spots de Fruma; ícones de armadura |
| Profissões | Todos | Estação de criação, tela de receita |
| Dungeons | Todos | Um print por dungeon; POV da Forgery |
| World Events | Todos (comprimir 2) | Notificação no chat |
| Shares | Todos | Confirmar se são da interface 2.2 |
| História | Galeria e retratos (comprimir 8 fotos e 2 retratos; criar miniaturas) | Foto do fundador |
| Montarias, Festivais | — | Tudo |

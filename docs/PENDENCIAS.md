# Pendências

Atualizado em 18/11/2026, ao fim da primeira parte da Fase 3 (base, navegação, Início e guia de
Raids). Ao resolver um item, apague-o daqui no mesmo PR.

## Precisa de decisão ou ação do dono

| Item | Detalhe |
|---|---|
| E-mail de contato do aviso de site não oficial | A Mojang exige um contato real (Discord não basta). Preencher `contatoEmail` em `lib/site-content.ts`; até lá o rodapé mostra "Contato: a definir" |
| Hospedagem de produção | A Vercel não será mais usada. O `deploy.yml` atual publica na Vercel e está desligado; precisa ser trocado pelo destino novo (provavelmente a VPS, como o Portfolio) antes de ligar o deploy |
| Autorização da Wynncraft para ícones oficiais | Sem ela, nada da CDN oficial entra no site (`docs/CREDITOS.md`). Pedido pelo Discord de desenvolvedores |
| Vídeos repetidos na TCC Sala 3 | "Agate Axon" usa o mesmo vídeo de "Primeval Machine" e "Elder Astal" o de "Desvie das Pedras". Pode ser o mesmo POV mostrando dois caminhos ou erro; confirmar ou gravar os certos |

## Dados do jogo a confirmar no jogo

A wiki se contradiz nestes pontos; o site mostra a dúvida em vez de escolher um lado.

| Item | Onde aparece |
|---|---|
| Rank que libera o beacon Crimson (Admiral ou Master) e o Rainbow (Commander ou Master) | Lootrun, tabela de beacons |
| Quantos gambits ficam ativos ao mesmo tempo (4 slots, mas a wiki fala em 3) | Raids, gambits |
| Moeda do Dungeon Merchant para itens intransferíveis (Boss Token ou fragmentos) | Dungeons, Merchant |
| Cor exata do beacon Crimson (usada uma aproximada) | Lootrun |
| Cor da raridade Crafted (não está na paleta do guia oficial de itens) | Não usada ainda |
| Coordenadas de entrada das raids: as do site divergem das da API em 20 a 170 blocos (TNA a maior) | Raids. Mantidas as do site, anotadas pela guilda; conferir no jogo |
| Recompensa de guild raid em esmeraldas (o site antigo dizia 2048) | Removida por não constar nas fontes |

## Próxima etapa (depois da validação)

| Prioridade | Item | Detalhe |
|---|---|---|
| Alta | Aplicar o modelo de Raids aos outros guias | Lootrun, Dungeons, Leveling, Profissões, World Events, Shares, Modos especiais. Hoje eles têm a moldura nova (top bar, sidebar, índice, intro compacta), mas o miolo ainda é o antigo, com rótulos acima dos títulos e cards aninhados |
| Alta | Comunidade | `/comunidade` como hub (história, membros, galeria, Shares, Discord). Galeria ainda não abre pelo teclado; saltos de H2 para H4 na História; cargos dos membros em 9–10 px |
| Alta | Conteúdo desatualizado restante | Leveling sem spots de Fruma; marcos de Profissões (115/117) e níveis de ferramenta; World Events (Subjugates, party de 10, Corrupted Cache); textos sem acento do bloco Membership do Shares (`docs/redesign/inventario-conteudo.md`) |
| Média | Prints que faltam | Não há prints de NOTG, TCC, TNA, dungeons, montarias nem festivais entre as 187 conferidas. Reservadas para os próximos guias (já tratadas, fora do repositório): Lootrun (baú e escolha de beacon), World Events (Annihilation), Profissões (mineração), missões de Apotheosis, boneco de treino |
| Média | Montarias e Festivais | Páginas "em construção" com o que vão cobrir; escrever o conteúdo |
| Média | Peso de mídia | `public/` ainda tem webp grandes (camps do Lootrun, galeria da História, retratos de 500 KB) servidos pelo otimizador do Next; reduzir as fontes. Logo `public/icon.webp` com 282 KB e 1.600 px |
| Baixa | Sem CSP | `next.config.ts` não define `Content-Security-Policy` (precisa liberar YouTube e `i.ytimg.com`) |
| Baixa | Guias antigos com fundo preto | Neutralizado por um `shortcut:` em `app/styles/foundation.css`; sai quando cada guia for refeito |

## CI/CD e repositório

| Item | Detalhe |
|---|---|
| Dependabot | Não adicionado. Se entrar: uma PR agrupada por mês, `target-branch: develop` |
| Rulesets do GitHub | Opcionais (repositório público). Ver `docs/CI-CD.md` |
| README | Não cita `docs/`, os comandos novos nem o fluxo de PR |
| Testes de interface | Só os testes de rotas e redirects. Avaliar Playwright para navegação, busca e índice |

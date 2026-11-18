# Pendências

Atualizado em 18/11/2026, ao fim da primeira parte da Fase 3 (base, navegação, Início e guia de
Raids). Ao resolver um item, apague-o daqui no mesmo PR.

## Precisa de decisão ou ação do dono

| Item | Detalhe |
|---|---|
| Contato do aviso de site não oficial | O rodapé aponta para as issues do repositório no GitHub, porque a guilda não tem e-mail próprio. As [Minecraft Usage Guidelines](https://www.minecraft.net/en-us/usage-guidelines) pedem um contato real e dizem que chat e fórum não valem; um e-mail seria o mais seguro. Se a Mojang cobrar, trocar `contato` em `lib/site-content.ts` |
| Hospedagem de produção | A Vercel não será mais usada. O `deploy.yml` atual publica na Vercel e está desligado; precisa ser trocado pelo destino novo (provavelmente a VPS, como o Portfolio) antes de ligar o deploy |
| Autorização da Wynncraft para ícones oficiais | Sem ela, nada da CDN oficial entra no site (`docs/CREDITOS.md`). Pedido pelo Discord de desenvolvedores |
| Links das ferramentas de alimentação (Montarias) | Faltam o link da Tabela de Materiais e Atributos e o da Calculadora (Wynnhub); os cartões aparecem tracejados com "Link a definir". Preencher `href` em `recursosDeAlimentacao` |
| Print do Totem of Tales (Festivais) | A print do Discord mostra nome e avatar de outro jogador; ficou fora. O preço citado (1 stx) já está no texto |
| Crédito de autor do guia de Festivais | Decidir entre creditar o texto a RFL_C no fim do guia ou não creditar |
| Crédito de autor do guia de Montarias | Decidir entre creditar o texto a gabu322 (Betinha) no fim do guia ou não creditar |
| Vídeos repetidos na TCC Sala 3 | "Agate Axon" usa o mesmo vídeo de "Primeval Machine" e "Elder Astal" o de "Desvie das Pedras". Pode ser o mesmo POV mostrando dois caminhos ou erro; confirmar ou gravar os certos |

## Dados do jogo a confirmar no jogo

A wiki se contradiz nestes pontos; o site mostra a dúvida em vez de escolher um lado.

| Item | Onde aparece |
|---|---|
| Rank que libera o beacon Crimson (Admiral ou Master) e o Rainbow (Commander ou Master) | Lootrun, tabela de beacons |
| Quantos gambits ficam ativos ao mesmo tempo (4 slots, mas a wiki fala em 3) | Raids, gambits |
| Cor exata do beacon Crimson (usada uma aproximada) | Lootrun |
| Cor da raridade Crafted (não está na paleta do guia oficial de itens) | Não usada ainda |
| Coordenadas de entrada das raids: as do site divergem das da API em 20 a 170 blocos (TNA a maior) | Raids. Mantidas as do site, anotadas pela guilda; conferir no jogo |
| Recompensa de guild raid em esmeraldas (o site antigo dizia 2048) | Removida por não constar nas fontes |
| Montarias: nível do Wyvern (guia 85; wiki e tooltip do jogo 84) | Montarias, tipos. Mantido o texto da guilda até decisão |
| Montarias: Y do curral do Adasaur (guia 83; wiki e Wynntils 59 a 60) | Montarias, tipos |
| Montarias: bônus do breeding (+10~15, +20~40) e chances de cor (50/48/4%) sem fonte; a wiki diz que a mecânica exata é desconhecida | Montarias, breeding |
| Montarias: o que limita o tier do material (guia: o Level; wiki: o maior atributo individual) | Montarias, alimentação |
| Festivais: nome da ilha (guia mistura Isle/Isles of Fiction; no jogo é "Isles of Fiction") | Festivais, estrutura e recompensas |
| Festivais: buff da Aster no Heroes (guia: aleatório; wiki: ciclo fixo dos 8 buffs, via Boost Token de 40 min) | Festivais, Heroes |
| Festivais: Talespun Citadel é área oculta, não ilha; ascender exige matar 6 jogadores + 3 bosses + recursos (guia: mínimo de 6 jogadores) | Festivais, Heroes |
| Festivais: as 3 caixas grátis do início são comuns; as temáticas vêm dos objetivos. Teto do Spirits é 27, não 30 | Festivais, abertura de cada festival e estrutura |
| Festivais: Hearthflame Hunt usa um cajado (Hearthkeeper's Staff), não varinha | Festivais, Bonfire |
| Festivais: Banish the Beyond tem um 8º espírito desde 2026 (The Hollowed, Sovereign Gikyo); "paletes" se chamam blockades | Festivais, Spirits |
| Festivais: coordenadas a 1 bloco da wiki (Trinket Merchant z -1603, conversor z -1606, Aster z -1631) | Festivais, Heroes e Bonfire |
| Festivais: Blizzard Brawl usa o papel Damage (não DPS); Mountainside é área oculta ligada por airship | Festivais, Blizzard |
| Festivais: Dodge 'Em e Thin Ice se revezam a cada 48 h | Festivais, Blizzard |
| Festivais: prêmios "trinkets consumíveis" do Drawing são Spirit Fireworks e Rotten Pumpkins | Festivais, Spirits |
| Festivais: sem fonte para o tiro ao alvo em 424, 67, -1630 e para a máquina de biscoitos (1024 por 32 LE) | Festivais, Heroes e Blizzard |
| Modos especiais: na 1.19 o Hunted também podia ser ligado e desligado (soul points, depois só em cidades com espera de 15 min); a wiki atual só descreve o modo escolhido na criação. Conferir se a opção ainda existe | Modos especiais, Hunted |
| Modos especiais: espera para atacar depois de entrar no servidor no Hunted (1 min na 1.19; 10 s na 2.0.3) | Fora do guia até confirmar |
| Modos especiais: se o Ingredient Pouch "guarda tudo" vale para o Ironman normal ou só para o Ultimate (a wiki diverge) | Modos especiais, Ironman |
| World Events: "até 4 LE" nos eventos mais altos e "chance pequena de mítico" a partir do nível 90 vêm do texto antigo, sem fonte na wiki. Ficaram como experiência da guilda | World Events, Recompensas |
| Dungeons: "run completa em uns 30 minutos" vem do texto antigo, sem fonte. Ficou como Dica da GsW | Dungeons, Dicas |
| Shares: o preço da assinatura em Shares (6 Tradable; a print da loja confirma os 14 dias) e o dos pets (15, Dragonling 25, pacote 35) vêm do texto antigo; a wiki só traz o preço em dólar do site | Silverbull Shares, Assinatura e Pets |
| Profissões: o passo a passo de importar waypoints (Content Book, Overlay Management, Info Box) parece ser o das Info Boxes, não o de waypoints do Wynntils. Conferir no mod e corrigir | Profissões, Waypoints |
| Profissões: "mais de uma ferramenta do mesmo tipo no inventário reduz a eficiência" vem do texto antigo, sem fonte na wiki. Ficou como experiência da guilda | Profissões, Coleta |

## Próxima etapa (depois da validação)

| Prioridade | Item | Detalhe |
|---|---|---|
| Média | Mídia solta na Raids | As 4 telas da fila de party têm alturas diferentes; a print ao lado da Dica em "Raids da guilda" fica órfã. Imagens soltas dos guias antigos ficam à esquerda no tamanho original (ampliar prints pequenas as borra) |
| Alta | Comunidade | `/comunidade` como hub (história, membros, galeria, Shares, Discord). A galeria abre pelo teclado num <dialog> no padrão do site. A História já está na coluna de leitura e no sistema (linha do tempo em trilho, cards de membro, pilares); falta o índice "Nesta página" quando virar hub, e decidir se as citações em itálico continuam |
| Alta | Conteúdo desatualizado restante | Leveling sem spots de Fruma; marcos de Profissões (115/117) e níveis de ferramenta; World Events (Subjugates, party de 10, Corrupted Cache); textos sem acento do bloco Membership do Shares (`docs/redesign/inventario-conteudo.md`) |
| Média | Prints que faltam | Não há prints de NOTG, TCC, TNA, dungeons, montarias nem festivais entre as 187 conferidas. Reservadas para os próximos guias (já tratadas, fora do repositório): Lootrun (baú e escolha de beacon), World Events (Annihilation), Profissões (mineração), missões de Apotheosis, boneco de treino |
| Média | Print de Especiais na Início | Nenhuma das 187 prints mostra um modo especial (Hardcore, Ironman, Craftsman, Hunted) ou um festival. A prévia usa uma provisória (traje cerimonial). Capturar, por exemplo, o selo de modo na seleção de personagem ou uma cidade decorada num festival, e trocar em `components/home/data/home-content.ts` |
| Média | Montarias e Festivais | Páginas "em construção" com o que vão cobrir; escrever o conteúdo |
| Média | Peso de mídia | `public/` ainda tem webp grandes (camps do Lootrun, galeria da História, retratos de 500 KB) servidos pelo otimizador do Next; reduzir as fontes. Logo `public/icon.webp` com 282 KB e 1.600 px |
| Baixa | Sem CSP | `next.config.ts` não define `Content-Security-Policy` (precisa liberar YouTube e `i.ytimg.com`) |
| Baixa | Guias antigos com fundo preto | Neutralizado por um `shortcut:` em `app/styles/foundation.css`; sai quando cada guia for refeito |

## Observar na hospedagem nova

| Item | Detalhe |
|---|---|
| Otimizador de imagens do Next | Em 18/11/2026, um pedido (`raid-ui-bau-recompensa-1280.webp`, 384 px, qualidade 90, AVIF) travou no `next start` local e todo pedido igual ficou esperando o primeiro, até reiniciar o servidor. Não se repetiu depois. Na hospedagem nova, conferir se há timeout no otimizador ou usar `unoptimized` nas prints que já são geradas em AVIF/WebP |

## CI/CD e repositório

| Item | Detalhe |
|---|---|
| Dependabot | Não adicionado. Se entrar: uma PR agrupada por mês, `target-branch: develop` |
| Rulesets do GitHub | Opcionais (repositório público). Ver `docs/CI-CD.md` |
| README | Não cita `docs/`, os comandos novos nem o fluxo de PR |
| Testes de interface | Só os testes de rotas e redirects. Avaliar Playwright para navegação, busca e índice |

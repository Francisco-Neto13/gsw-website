# Pendências

Atualizado em 18/11/2026, ao fim da primeira parte da Fase 3 (base, navegação, Início e guia de
Raids). Ao resolver um item, apague-o daqui no mesmo PR.

## Precisa de decisão ou ação do dono

| Item | Detalhe |
|---|---|
| E-mail de contato do aviso de site não oficial | A Mojang exige um contato real (Discord não basta). Conferido em 18/11/2026 nas [Minecraft Usage Guidelines](https://www.minecraft.net/en-us/usage-guidelines), seção "Essential guidelines", que vale para todo uso: deixar claro "whom to contact … and the contact method (chat and forum links are not acceptable methods)". Preencher `contatoEmail` em `lib/site-content.ts`; até lá o rodapé mostra "Contato: a definir" |
| Hospedagem de produção | A Vercel não será mais usada. O `deploy.yml` atual publica na Vercel e está desligado; precisa ser trocado pelo destino novo (provavelmente a VPS, como o Portfolio) antes de ligar o deploy |
| Autorização da Wynncraft para ícones oficiais | Sem ela, nada da CDN oficial entra no site (`docs/CREDITOS.md`). Pedido pelo Discord de desenvolvedores |
| Imagens do guia de Montarias | Os arquivos das 14 prints (3 montarias, tooltip de Level/Limit/Max e 10 PowerUps) ainda não estão no repositório. Os caminhos esperados estão em `components/mounts/data/mounts-content.ts`; cada imagem aparece sozinha assim que for convertida para `public/montarias/` e medida (`node scripts/medir-imagens.mjs`) |
| Links das ferramentas de alimentação (Montarias) | Faltam o link da Tabela de Materiais e Atributos e o da Calculadora (Wynnhub); os cartões aparecem tracejados com "Link a definir". Preencher `href` em `recursosDeAlimentacao` |
| Crédito de autor do guia de Montarias | Decidir entre creditar o texto a gabu322 (Betinha) no fim do guia ou não creditar |
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
| Montarias: nível do Wyvern (guia 85; wiki e tooltip do jogo 84) | Montarias, tipos. Mantido o texto da guilda até decisão |
| Montarias: Y do curral do Adasaur (guia 83; wiki e Wynntils 59 a 60) | Montarias, tipos |
| Montarias: bônus do breeding (+10~15, +20~40) e chances de cor (50/48/4%) sem fonte; a wiki diz que a mecânica exata é desconhecida | Montarias, breeding |
| Montarias: o que limita o tier do material (guia: o Level; wiki: o maior atributo individual) | Montarias, alimentação |

## Próxima etapa (depois da validação)

| Prioridade | Item | Detalhe |
|---|---|---|
| Alta | Aplicar o modelo de Raids aos outros guias | Lootrun, Dungeons, Leveling, Profissões, World Events, Shares, Modos especiais. Cabeçalhos de seção, superfícies e alinhamento já seguem o sistema; falta o miolo: tabelas que são imagem (ranks do Lootrun, Profissões, Modos) viram `<table>`, cards dentro de painéis (camps do Lootrun) e grades com card sozinho (Bombas de XP, Camp 07, galeria do Shares) |
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

# Direção visual

Proposta para aprovação. Nada aqui foi implementado. Valores são de partida; contrastes foram
calculados (WCAG 2.1) e serão medidos de novo na tela durante a Fase 3.

## Ponto de partida

- **Mecanismo do produto:** guia em pt-BR escrito por jogadores de uma guilda ativa, com POVs
  próprios, organizado como passo a passo (`docs/PRODUCT.md`).
- **Cena:** jogador brasileiro, à noite, com o Wynncraft aberto em outra tela ou com o celular do
  lado, conferindo uma sala de raid ou um beacon de Lootrun no meio da partida.
- **Modo das superfícies:** guias = leitura (*Read*), a maior parte do site; Início = convencer
  (*Persuade*); Comunidade = experiência e leitura.
- **O caminho batido** que a proposta evita: "wiki de jogo escura com neon e Cinzel em tudo" e o
  oposto previsível, "documentação clara genérica".
- **Fixos da marca:** logo da GsW, violeta `#7116AD` e carvão `#191819`, que medi na logo deste
  site: o violeta bate exatamente; o carvão sai `#181818`, diferença de compressão do webp.

Como cheguei à direção: listei sete mundos visuais do universo do público, por ordem de
ressonância. O sorteio de conceito do Impeccable (`concept-seed`, modo leitura,
`seed:658dcb521c289a54`) escolheu qual construir, para não cair sempre na primeira ideia, e trouxe
seis desafiantes de fora para comparar. Abaixo, a direção sorteada, já reforçada pelo que os
desafiantes recusados tinham de melhor, e as alternativas.

---

## Direção proposta: Caixa de Item

**Tese.** No jogo, toda informação importante chega numa *caixa de item*: o fundo roxo-escuro, a
borda dupla, o nome na cor da raridade e as linhas de atributo em ordem fixa. O site usa essa
linguagem para **emoldurar** a informação de consulta, como a ficha do guia, os itens, as dicas e
as tabelas. O texto de leitura fica numa coluna calma, sem moldura. Recusa o arranjo padrão da
categoria (cards genéricos com brilho neon e títulos medievais) e não imita a interface do jogo: só
pega dela o que funciona numa página de leitura.

**Onde o mundo aparece (a moldura):** top bar, sidebar, abertura de cada guia (título e ficha),
blocos de dica, tabelas, cartões de item e selos de nível.
**Onde não aparece (a coluna):** o texto corrido, que fica em fonte de leitura, com contraste
alto, largura de 68 caracteres e nada animado atrás.

### Paleta

Estratégia: **contida**. Neutros escuros tingidos de violeta, um violeta de ação e as cores de
raridade como **linguagem funcional** (nível, dificuldade, tier), nunca como enfeite.

| Papel | Cor | Contraste |
|---|---|---|
| Chão da página | `#0F0D11` | — |
| Superfície (carvão da marca) | `#191819` | — |
| Superfície elevada | `#221F24` | — |
| Fundo da caixa de item | `#160C20` | — |
| Texto principal | `#EEE9F3` | 14,8:1 sobre o carvão |
| Texto secundário | `#BDB4C8` | 8,9:1 |
| Texto terciário (mínimo) | `#9A90A6` | 5,8:1 |
| Violeta de texto e link | `#C79BF2` | 7,9:1 |
| Violeta da marca | `#7116AD` | **Só preenchimento** (botão, item ativo, barra de etapas); texto branco por cima dá 8,7:1. Como texto dá 2,0:1, que é o erro de hoje |
| Borda de foco e de estado ativo | `#9B4DDB` | 3,8:1 (mínimo de 3:1 para componente) |
| Borda dupla da caixa | externa `#2A0F40`, interna `#7116AD` a 1 px | Decorativa |

Cores de raridade (dos códigos de cor do Minecraft; só a Mythic foi confirmada na pesquisa, as
outras serão conferidas no jogo antes de virarem tokens):

| Raridade | Cor | Contraste sobre o carvão |
|---|---|---|
| Unique | `#FFFF55` | 16,6:1 |
| Rare | `#FF55FF` | 6,7:1 |
| Legendary | `#55FFFF` | 14,5:1 |
| Fabled | `#FF5555` | 5,6:1 |
| Mythic | `#AA00AA` (borda) / `#DD77DD` (texto) | 2,8:1 / 6,5:1 |
| Set | `#55FF55` | 13,3:1 |
| Crafted | `#00AAAA` | 6,2:1 |

Uso: faixa de nível de um spot, dificuldade de uma sala, tier de um beacon, nome de item. **A cor
nunca é o único sinal**: vem sempre com texto ou forma.

### Tipografia

| Papel | Fonte | Por quê |
|---|---|---|
| Títulos de página e de seção (H1, H2), nomes de guia, selos | **Pixelify Sans** 500–700 | É a "voz do nome do item" da caixa: pixel, mas desenhada para tela e com acentos (latin-ext). Fonte pixel genérica, **não** a fonte do Minecraft (que é marca da Mojang). Só em tamanhos ≥ 20 px |
| Texto de leitura, H3 em diante, interface | **Alegreya Sans** 400/500/700 + itálico | Humanista, feita para textos longos, calorosa sem ser medieval; ótima em pt-BR |
| Coordenadas, valores, atalhos | **JetBrains Mono** 400/500 | Números alinhados (`-1560, 97, -2675`), que hoje se perdem no texto |

Escala de leitura: corpo 17 px, entrelinha 1,7, largura máxima 68ch. H1 `clamp(2rem, 4vw, 2.75rem)`,
H2 `clamp(1.5rem, 2.4vw, 1.875rem)` em Pixelify; H3 1,25 rem em Alegreya Sans 700. As três fontes
são OFL, servidas pelo `next/font` (hospedadas no próprio site, sem chamada ao Google no navegador).

Hoje o site carrega a Geist mas **nunca a aplica**: o texto sai em `system-ui`, que é a "fonte
fraca" que você nota.

### Componentes

| Componente | Como fica |
|---|---|
| **Top bar** | Carvão, borda inferior dupla fina (o gesto da caixa), logo, três áreas, busca e Discord (`navegacao.md`) |
| **Sidebar dos guias** | Grupos com rótulo pequeno; item ativo com preenchimento violeta da marca e texto branco; selo "em breve" em guias vazios |
| **Ficha do guia** | A caixa de item em si: fundo `#160C20`, borda dupla, título do guia em Pixelify, linhas fixas (nível, pré-requisitos, party, versão do jogo e data). É a assinatura da direção, uma por página |
| **Resumo rápido** | Lista curta logo abaixo da ficha, sem moldura |
| **Passos numerados** | Salas de raid, etapas de Lootrun: número em selo pixel, linha vertical ligando as etapas, estado "lido" marcado por traço (não só cor) |
| **Dica da GsW** | Bloco com borda dupla à esquerda e o emblema da guilda pequeno |
| **Tabela** | Cabeçalho em Pixelify pequeno, linhas com régua de 1 px, valores em mono, cabeçalho fixo no celular |
| **Cartão de item** | Caixa de item completa (nome na cor da raridade, tipo, nível, atributos). Usada só onde há item de verdade (Leveling, Itens) |
| **Mídia** | Print ou vídeo com legenda; marcadores numerados presos ao print ("1 = alavanca, 2 = saída"); vídeo POV abre no clique, como hoje |
| **Selo de nível e de versão** | Pílula em Pixelify: `Nv 95+`, `2.2.4 · nov/2026`; guia defasado mostra o selo em âmbar |
| **Termo do jogo** | Palavra do glossário sublinhada em pontilhado; ao passar o mouse ou focar (toque no celular), **abre uma caixa de item** com a explicação em português. É a interação de assinatura |

### Ícones

- **Lucide** (ISC) em toda a interface, traço de 1,75 px, 16/18/20 px.
- **game-icons.net** (CC BY 3.0, com crédito em `docs/CREDITOS.md`) só para classes, armas e
  chefes, onde o Lucide não tem desenho.
- Emojis saem do site: os 13 beacons do Lootrun viram marcadores desenhados na cor do beacon
  (resolve também as cores repetidas: Blue/Aqua, Purple/Pink, Red/Crimson); bombas e tokens do
  Shares viram ícones.
- Ícones de item reais da CDN da Wynncraft só com o cuidado de `fontes-e-licencas.md`.

### Movimento

| Token | Valor |
|---|---|
| Curva | `cubic-bezier(.16, 1, .3, 1)` (a mesma do chiconeto.dev e do Gastos) |
| Durações | 120 ms (hover, foco), 200 ms (menus, caixa do termo), 360 ms (entradas) |
| Entrada | Só a abertura de cada seção e cada cartão do `/guias`: opacidade e 12 px de subida, uma vez. Hoje **todo** `li` e `div` anima, e o texto chega a ser lido no meio do fade |
| Assinatura | A caixa do termo abre como no jogo: aparece já inteira, com 200 ms de opacidade e 4 px de deslocamento, sem escala |
| Item ativo da sidebar | Indicador que desliza até o novo item na troca de guia |
| Movimento reduzido | `prefers-reduced-motion: reduce` tira deslocamentos e mantém só a mudança de opacidade em 120 ms; nada fica escondido esperando animação |

Orçamento: a página está pronta para ler no primeiro quadro, e nada se mexe depois de cerca de 1 s.

### Claro e escuro

**Proposta: só escuro na v1.**

- A cena de uso é noturna, com o jogo aberto do lado; um guia claro ofusca ao trocar de janela.
- A marca é carvão e violeta, e as cores de raridade foram feitas para fundo escuro: no claro,
  metade delas reprova no contraste.
- Os sites de guia de jogo mais usados (Maxroll, Wowhead, Icy Veins) são só escuros. As wikis que
  oferecem os dois têm equipe para manter os dois.
- O claro de hoje é uma inversão feita à mão (`app/styles/theme-remaps.css`), e é de lá que vêm os
  erros que a auditoria achou: legenda escura sobre fundo preto na galeria e na home.

Se o claro voltar depois, ele sai dos **mesmos tokens** (`light-dark()`), como no Gastos, num tema
"Pergaminho" próprio, e não como inversão. O botão de tema sai na v1.

### Imagens do jogo

- Prints e POVs próprios em destaque: são a prova do diferencial.
- Na Início e nas aberturas de guia, um print próprio grande, tratado com um véu do carvão, no
  lugar dos brilhos roxos genéricos de hoje.
- Ícones de item e de classe onde há item ou classe de verdade (Leveling, Itens, Classes).
- Nada de logo ou arte oficial do Minecraft ou da Wynncraft.

### Primeira tela

**Guia (desktop, 1440 px):** top bar de 56 px; sidebar de 264 px à esquerda com o guia atual
aberto; coluna central com breadcrumb, H1 em Pixelify, e logo abaixo a **ficha do guia** em caixa
de item com nível, requisitos e versão; depois o resumo rápido; à direita o índice "Nesta página"
com as etapas numeradas. Ação principal: começar a ler, ou "Continuar de Sala 3" para quem volta.

**Início (desktop):** à esquerda, a frase "O guia de Wynncraft em português, feito pela GsW" e a
busca em destaque, que é a ação principal; à direita, um print próprio grande com véu. Abaixo, os
grupos de guias como fileira de cartões em caixa de item (com nível e estado) e "Atualizados
recentemente". A Comunidade aparece mais abaixo, com retratos dos membros e o convite para o
Discord.

**Celular:** top bar compacta, barra fixa "Sala 3 · Raids ▾" logo abaixo dela, ficha do guia
logo depois do título.

### Reforços tirados dos desafiantes recusados

Cada desafiante que perdeu deixou uma disciplina que a direção não tinha:

- **Estado sem depender de cor** (do quadro de patch de estúdio): etapas lidas, guia em construção
  e guia defasado se distinguem por traço e forma, não só pela cor.
- **Onde parei** (da mesa de corte de filme): o guia guarda a última seção lida no navegador do
  leitor e oferece retomar dali.
- **Réguas exatas de 1 px** (da página de referência com régua central): toda régua, borda e
  divisória é desenhada com 1 px de verdade, alinhada, nunca borrada.
- **Um só tom para o que é clicável** (da capa com cordão): o violeta da marca preenchido fica
  reservado a ação e estado ativo; nada decorativo usa esse preenchimento.
- **Anotação presa ao ponto** (da coluna de tensegridade): prints de sala e de mecânica ganham
  marcadores numerados presos ao lugar que mostram, com a explicação ao lado.

### Risco honesto

A caixa de item é reconhecível para quem joga e pode virar fantasia se for usada em tudo. A regra
"uma ficha por página, caixa só em informação de consulta" é o que segura isso; a revisão final
confere. A fonte pixel em títulos longos em português precisa de teste com títulos reais
("Altares, cavernas e descobertas").

---

## Alternativas

### Escolha do Impeccable: Obsidiana e Encantamento

O primeiro da minha lista. A obsidiana é literalmente carvão com reflexos roxos, e o brilho de
item encantado é violeta: a paleta da GsW já é esse material. Chão de obsidiana com textura
mineral muito sutil, brilho de encantamento correndo devagar nos títulos e no item ativo, detalhes
em azul-lápis. Títulos em serifa de inscrição; texto em Alegreya Sans.
**Risco:** é a mais bonita no primeiro olhar e a mais próxima do "escuro com brilho roxo" que todo
site de jogo faz; a linguagem do brilho pesa mais que a da informação.

### Desafiante competitivo: Percurso

Do mapa de orientação: o guia como **percurso numerado**. As etapas (salas, camps, fases) são
pontos de controle ligados por uma linha violeta (a cor da marca vira a "linha do percurso"); a
sidebar e o índice desenham esse traçado; uma legenda de símbolos fixa explica marcadores (chefe,
baú, alavanca, perigo). Fundo de mapa com curvas de nível muito discretas.
**Por que é competitivo:** ganha em clareza para guias de passo a passo (raids, Lootrun), perde em
identificação: orientação não é um mundo que o jogador de Wynncraft reconhece, e o fundo de mapa é
claro por natureza.

### Recusados (resumo)

| Desafiante | Veredito | O que a direção manteve dele |
|---|---|---|
| Quadro de patch de estúdio (âmbar sobre vidro preto) | Recusado nos dois eixos | Estado sem depender de cor |
| Mesa de corte de filme (laranja e grão) | Recusado | Onde parei |
| Página de referência com régua central (vermelhão sobre papel) | Recusado | Réguas exatas de 1 px |
| Capa com cordão (seda preta e cordão dourado) | Recusado | Um só tom para o que é clicável |
| Coluna de tensegridade (barras de carbono e cordão vermelho) | Recusado | Anotação presa ao ponto |

### Padrão da categoria (porta de saída)

Documentação de jogo escura no estilo Maxroll/Icy Veins, executada sem ironia: cards com banner,
tags e data, sidebar e índice, destaque violeta. É sempre uma opção legítima; se for a escolha, a
régua passa a ser o acabamento desses sites.

---

## Decisões que preciso de você

1. **Direção:** Caixa de Item (proposta), Obsidiana e Encantamento, Percurso ou o padrão da
   categoria. Também dá para pedir outro sorteio, normal, mais seguro ou mais ousado.
2. **Modo claro:** só escuro na v1 (proposta) ou manter um claro refeito com os mesmos tokens.
3. **Rotas:** manter as atuais (`/raids`, `/lootrun`...) ou mover os guias para `/guias/<guia>` com
   redirecionamento (`navegacao.md`).
4. **Contato do aviso de site não oficial:** um e-mail ou formulário (a Mojang não aceita só
   Discord).
5. **Ícones de itens da CDN da Wynncraft:** usar com crédito e moderação, ou só arte própria e
   ícones abertos até a Wynncraft autorizar por escrito.

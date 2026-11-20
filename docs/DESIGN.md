---
name: GsW · Guia de Wynncraft em português
description: Guia de Wynncraft em pt-BR da guilda GsW; a informação de consulta chega numa caixa de item, o texto corrido numa coluna calma.
colors:
  gsw: "#7116ad"
  violeta: "#c79bf2"
  violeta-borda: "#9b4ddb"
  chao: "#0f0d11"
  carvao: "#191819"
  elevada: "#221f24"
  caixa: "#160c20"
  caixa-fora: "#2a0f40"
  texto: "#eee9f3"
  texto-2: "#bdb4c8"
  texto-3: "#9a90a6"
  linha: "rgba(238, 233, 243, 0.1)"
  linha-forte: "rgba(238, 233, 243, 0.18)"
  ambar: "#f2c063"
  raridade-normal: "#ffffff"
  raridade-unique: "#fcfc48"
  raridade-rare: "#ff5cff"
  raridade-legendary: "#0dfcfc"
  raridade-fabled: "#ff5c5c"
  raridade-mythic: "#c80db1"
  raridade-mythic-texto: "#edb7e7"
typography:
  display:
    fontFamily: "Pixelify Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Pixelify Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.01em"
  title:
    fontFamily: "Pixelify Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.01em"
  item-name:
    fontFamily: "Pixelify Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    lineHeight: 1.25
  subtitle:
    fontFamily: "Alegreya Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Alegreya Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Alegreya Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.4
  numeric:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1em"
    fontWeight: 400
    fontFeature: "\"tnum\" 1"
rounded:
  sm: "4px"
  md: "6px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.gsw}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "#7f1bc2"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.texto}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "44px"
  nav-item-guia:
    backgroundColor: "transparent"
    textColor: "{colors.texto-2}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  nav-item-guia-hover:
    backgroundColor: "{colors.elevada}"
    textColor: "{colors.texto}"
  nav-item-guia-active:
    backgroundColor: "{colors.gsw}"
    textColor: "#ffffff"
  caixa-item:
    backgroundColor: "{colors.caixa}"
    textColor: "{colors.texto}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  ficha-guia-titulo:
    textColor: "{colors.violeta}"
    typography: "{typography.item-name}"
  busca-gatilho:
    backgroundColor: "{colors.carvao}"
    textColor: "{colors.texto-2}"
    rounded: "{rounded.md}"
    height: "36px"
    width: "224px"
  selo:
    backgroundColor: "transparent"
    textColor: "{colors.texto-2}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  numero-de-etapa:
    backgroundColor: "{colors.gsw}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    size: "36px"
  painel-variacao:
    backgroundColor: "{colors.carvao}"
    textColor: "{colors.texto-2}"
    rounded: "{rounded.md}"
    padding: "20px"
---

# Design System: GsW · Guia de Wynncraft em português

## Overview

**Creative North Star: "A Caixa de Item"**

No Wynncraft, toda informação que importa chega numa caixa de item: fundo roxo-escuro, borda dupla, o nome na cor certa e as linhas de atributo em ordem fixa. O site pega só esse gesto e o aplica à informação de consulta (a ficha do guia e a explicação de um termo). O texto de leitura fica fora da moldura, numa coluna calma de 60 caracteres, em fonte humanista e com contraste alto.

O sistema é escuro e só escuro: o tema claro foi removido de propósito, porque a cena de uso é noturna, com o jogo aberto ao lado, e as cores de raridade foram feitas para fundo escuro. Os neutros são carvões levemente tingidos de violeta; o violeta da marca aparece como preenchimento de ação e estado ativo, nunca como texto. A densidade é de guia de referência: réguas de 1 px, rótulos pequenos, valores em mono, nada animado atrás do texto.

A direção recusa o template escuro genérico da categoria (cards iguais com brilho neon, títulos medievais, eyebrow acima de cada título) e também não imita a interface do jogo: a fonte pixel é genérica (não a do Minecraft) e a caixa aparece só onde há informação de consulta.

**Key Characteristics:**
- Só escuro, com `color-scheme: dark` e `theme-color` no chão da página.
- Uma moldura (a caixa de item) para consulta; uma coluna sem moldura para leitura.
- Violeta da marca só como preenchimento; violeta claro para texto e link; violeta médio para foco e indicador ativo.
- Pixelify Sans para nomes e títulos grandes, Alegreya Sans para ler, JetBrains Mono para números.
- Estado comunicado por ícone, traço ou texto, nunca só por cor.

## Colors

Paleta contida: carvões tingidos de violeta, um violeta de ação em três funções e as cores de raridade como sinal funcional.

### Primary
- **Violeta GsW** (`gsw`): a cor da guilda, medida na logo. Só preenchimento: botão principal, item ativo da sidebar, resultado ativo da busca, número da etapa, seleção de texto, link "Pular para o conteúdo". Texto branco por cima dá 8,7:1. Como texto sobre o carvão dá 2,0:1 e reprova.
- **Violeta de Texto** (`violeta`): links, nome do item na ficha e na caixa do termo, ícones de destaque, marcadores de lista. 7,9:1 sobre o carvão.
- **Violeta de Borda** (`violeta-borda`): contorno de foco (`:focus-visible`, 2 px, afastado 3 px), indicador da área ativa na top bar, régua ativa do índice "Nesta página", borda de hover dos cartões de navegação. 3,8:1, acima do mínimo de 3:1 para componente.

### Neutral
- **Chão** (`chao`): fundo da página, da top bar e das barras fixas; também a `theme-color` do navegador.
- **Carvão** (`carvao`): carvão da marca. Superfícies um nível acima: rodapé, painel de variação, fundo de mídia, gatilho da busca, faixa da Comunidade.
- **Superfície Elevada** (`elevada`): só hover de itens de menu e de botões sem preenchimento.
- **Fundo da Caixa** (`caixa`): o roxo-escuro da caixa de item; também o botão "Continuar de".
- **Borda Externa da Caixa** (`caixa-fora`): a borda de fora da caixa e a borda inferior da top bar e da gaveta do celular.
- **Texto** (`texto`), **Texto Secundário** (`texto-2`), **Texto Terciário** (`texto-3`): 14,8:1, 8,9:1 e 5,8:1 sobre o carvão. O terciário é o mínimo para qualquer texto (rótulos, legendas, metadados).
- **Régua** (`linha`) e **Régua Forte** (`linha-forte`): toda divisória, borda de mídia e de cartão. A forte marca hover e o traço vertical que liga as etapas.
- **Âmbar** (`ambar`): só o selo "Revisão pendente", sempre com ícone e texto.

### Tertiary: cores de raridade
Tiradas do guia oficial de itens da Wynncraft (paleta do nome do item), conferidas em 18/11/2026: Normal, Unique, Rare, Legendary, Fabled e Mythic. Set deixou de ser raridade na 2.2 e não entra; Crafted não está na paleta oficial e fica pendente.
- **Mythic** tem duas entradas: `raridade-mythic` (3,5:1) só para borda e texto grande; `raridade-mythic-texto`, a secundária oficial, para qualquer texto corrido ou pequeno.
- Uso hoje: chips de raridade em Recompensas (borda da cor a 60%, texto na cor, fundo transparente).

### Named Rules
**The Fill-Only Rule.** O violeta GsW nunca é cor de texto nem de borda decorativa. Se o elemento não é ação nem estado ativo, ele não leva esse preenchimento.

**The Three Violets Rule.** Preencher é `gsw`, ler é `violeta`, contornar e indicar é `violeta-borda`. Nenhuma das três substitui a outra.

**The Rarity Is Signal Rule.** Cor de raridade só onde há raridade de verdade (item, aspect, tier) e sempre com o nome escrito ao lado. Nunca como enfeite.

**The Dark Only Rule.** Não existe tema claro nem botão de tema. Se um claro voltar, ele sai dos mesmos tokens com `light-dark()`, como tema próprio, nunca como inversão à mão.

## Typography

**Display Font:** Pixelify Sans 500/600/700 (com ui-sans-serif, system-ui), latin-ext para os acentos.
**Body Font:** Alegreya Sans 400/500/700 com itálico (com ui-sans-serif, system-ui).
**Label/Mono Font:** JetBrains Mono 400/500 (com ui-monospace), sem preload.

Todas servidas pelo `next/font` a partir do próprio site.

**Character:** Pixelify é a voz do nome do item: pixel, mas desenhada para tela. Alegreya Sans é humanista e calorosa para leitura longa em pt-BR, sem cair no medieval. O mono existe para que coordenadas e contagens se alinhem e se leiam sem ambiguidade.

### Hierarchy
Escala por papel, em tokens do `@theme` (`text-<papel>`). Componente usa o papel, nunca um tamanho solto nem um tamanho responsivo (`sm:text-*`).

| Papel | Tamanho | Uso |
|---|---|---|
| `exibicao` | `clamp(2.25rem, 5vw, 3.75rem)`, 1,05 | a frase de abertura da Início |
| `titulo-1` | `clamp(2rem, 4vw, 2.75rem)`, 1,15 | H1 de página (Pixelify 600) |
| `titulo-2` | `clamp(1.625rem, 2.6vw, 2.125rem)`, 1,2 | H2 de seção (Pixelify 600) |
| `titulo-3` | 1,5 rem, 1,25 | nome da raid, grupo da lista de guias |
| `titulo-4` | 1,25 rem, 1,3 | sala, título de card, "Resumo rápido", nomes de guia na Início |
| `titulo-5` | 1,125 rem, 1,35 | variação da sala, subtítulo dentro de painel |
| `lede` | 1,1875 rem, 1,6 | parágrafo de abertura, no secundário |
| `corpo` | 1,0625 rem (17 px), 1,7 | texto corrido |
| `apoio` | 0,9375 rem, 1,55 | legenda, navegação, metadado, listas dentro de painel |
| `detalhe` | 0,8125 rem, 1,45 | chip, tecla, rótulo pequeno; é o piso |

- O título se separa do texto por tamanho, peso e cor ao mesmo tempo: títulos em `texto` e 700 (ou Pixelify), corpo em `texto-2` e 400. Dois papéis vizinhos nunca usam o mesmo tamanho.
- **Item Name** (Pixelify, 1,25 rem, violeta): o nome dentro da ficha do guia.
- **Label** (Alegreya 700, `detalhe`): rótulo de grupo na sidebar e "Nesta página". Sem caixa alta, sem tracking.
- **Numeric** (JetBrains Mono, tabular): coordenadas, níveis, contagens; `font-variant-numeric: tabular-nums` em tabelas e na classe de números.
- **Medida:** texto corrido em até 70ch (`max-w-leitura`, token `--container-leitura`).

H1 e H2 têm `text-wrap: balance`; parágrafos, itens, legendas e `dd` têm `text-wrap: pretty`.

### Named Rules
**The Pixel Floor Rule.** Pixelify só a partir de 20 px. Abaixo disso, o título vai em Alegreya Sans 700.

**The Digit Rule.** Pixelify nunca carrega números: o 5 dela se lê como S. Todo número (nível, coordenada, contagem, número de etapa) vai em JetBrains Mono.

**The Measure Rule.** Texto de leitura nunca passa de 70ch (`max-w-leitura`), inclusive dentro de cabeçalhos e caixas.

## Layout

- **Moldura do site:** top bar fixa de 3,5 rem (56 px, `--topbar-h`); `scroll-padding-top` igual à top bar mais 1 rem para âncoras.
- **Casca (`.casca`):** o contêiner único do site, até 120 rem (`--casca-max`), com margem lateral `--casca-x` de 16, 24, 32 e 48 px (a partir de 0, 640, 1024 e 1536 px). Top bar, rodapé, Início, `/guias` e as colunas dos guias usam a mesma casca: logo, títulos e o texto da sidebar começam no mesmo x em todas as páginas. Nenhuma página define outro `max-w` + `px` de moldura.
- **Sem faixa vazia:** nenhuma página centraliza uma coluna estreita na casca. Início e `/guias` usam grades na casca inteira. Nos guias, o artigo ocupa todo o espaço entre a sidebar e o índice: texto corrido em 70ch, e tabelas, painéis e grades de mídia na largura do artigo. Na abertura do guia, a ficha vira quadro lateral a partir de 1280 px. A História usa duas colunas na casca (1:2): título e lide de cada seção fixos à esquerda, conteúdo à direita.
- **Página de guia:** três colunas a partir de 1280 px: sidebar de guias de 16 rem (a partir de 1024 px) encostada na margem da casca, artigo ocupando todo o espaço do meio e índice "Nesta página" de 15 rem encostado na margem direita. Sidebar e índice são `sticky` sob a top bar, com rolagem própria. Abaixo de 1280 px o índice vira uma barra fixa "Nesta página: <seção atual>" que abre em lista; abaixo de 768 px a navegação de áreas e os guias vão para uma gaveta lateral (`<dialog>`, até 22 rem).
- **Ritmo:** seções de guia com 48 px de respiro vertical e da História com 64 a 80 px, separadas por régua de 1 px. Cabeçalho de seção sempre à esquerda: H2 no tamanho de título, lide em 70ch, sem rótulo acima. Dentro das caixas, 16 a 20 px de respiro.
- **Grades sem órfão:** um número ímpar de itens não deixa um card sozinho numa linha (o último ocupa a linha toda, como nos pilares), e texto de card nunca é centralizado.
- **Etapas:** salas numeradas em lista, ligadas por um traço vertical de 1 px na régua forte.
- **Onde parei:** o guia guarda no navegador a última seção visível e oferece "Continuar de" só para quem volta pelo topo.
- **Breakpoints:** os do Tailwind (640, 768, 1024, 1280 px).
- **Divergência do plano:** a direção pedia coluna de 68ch e sidebar de 264 px; o build usa 70ch e 16 rem (256 px), e este documento segue o build.

## Elevation & Depth

O sistema é plano e em camadas tonais: chão, carvão, elevada e caixa se distinguem por tom, não por sombra. A profundidade aparece em três lugares só: a sombra baixa e difusa que assenta a caixa de item, a sombra sob a barra fixa do índice no celular e a sombra do botão sobre vídeo e animação. A borda interna violeta da top bar e do rodapé é um traço de luz de 1 px, não sombra.

### Shadow Vocabulary
- **Assento da Caixa** (`box-shadow: inset 0 0 0 1px rgba(113,22,173,0.85), 0 18px 40px -24px rgba(0,0,0,0.9)`): a borda interna violeta mais a sombra de assento da caixa de item.
- **Traço da Moldura** (`box-shadow: inset 0 -1px 0 rgba(113,22,173,0.55)` na top bar; `inset 0 1px 0 rgba(113,22,173,0.45)` no rodapé): repete a borda dupla da caixa nas bordas do site.
- **Barra Fixa** (`box-shadow: 0 12px 24px -16px rgba(0,0,0,0.9)`): separa a barra "Nesta página" do texto que rola por baixo.
- **Botão sobre Mídia** (`box-shadow: 0 8px 24px -8px rgba(0,0,0,0.8)`): o botão "Ver POV" e "Ver animação" sobre o pôster.

### Named Rules
**The Tonal First Rule.** Para separar um nível do outro, troque o tom ou desenhe uma régua de 1 px. Sombra é para a caixa de item e para o que flutua sobre conteúdo.

## Shapes

Cantos discretamente arredondados: 6 px na caixa, em botões, itens de menu, mídia e painéis; 4 px em selos, chips e teclas (`kbd`) e no contorno de foco; círculo só no emblema da guilda. Toda régua e borda tem exatamente 1 px. O tracejado tem significado próprio: marca o que ainda não existe ("em breve", "Em construção", vídeo em produção). A forma assinatura é a borda dupla: escura por fora (`caixa-fora`), violeta a 1 px por dentro.

## Components

### Buttons
Diretos e sem enfeite.
- **Shape:** cantos suaves (6 px), altura de 44 px para alvo de toque.
- **Primary:** preenchimento violeta GsW, texto branco 500, 16 px de respiro lateral, ícone Lucide à direita ou à esquerda. Hover escurece levemente o violeta.
- **Secondary:** sem fundo, borda na régua forte, texto principal; hover troca a borda para o violeta de borda.
- **Ícone (menu, fechar):** 44 por 44 px, texto secundário; hover em superfície elevada.
- **Sobre mídia ("Ver POV", "Ver animação"):** pílula violeta GsW com ícone de play, véu preto a 35% (25% na animação) que clareia no hover.

### Chips e selos
- **Selo de versão:** borda na régua forte, cantos de 4 px, ícone Lucide de 14 px; estado por ícone e texto: check violeta "Revisado para a <versão> · <data>", martelo com borda tracejada "Em construção", alerta âmbar "Revisão pendente".
- **"em breve":** borda tracejada no terciário, 0,7 rem; em branco quando o item está ativo.
- **Chip de raridade:** borda da cor da raridade, texto na cor (Mythic com a secundária), fundo transparente.

### Cards / Containers
- **Cartão (regra geral):** fundo `bg-carvao`, que já carrega o roxo da marca: dentro dele os tokens `linha` e `linha-forte` viram violeta translúcido (borda e divisões), o fundo recebe 6% do violeta e o topo um brilho violeta sutil (`app/styles/foundation.css`). Poço de imagem e ícone em `bg-poco` (preto-violeta); chips e coordenadas em `bg-gsw/15`. Nunca cinza neutro (`zinc`, `white/5`, `black`) em cartão.
- **Galeria (`components/guias/Galeria.tsx`):** toda sequência de prints lado a lado usa a galeria: todas no mesmo quadro de proporção fixa (16:9 para cenas, 4:3 para telas de interface), a print inteira dentro dele (`object-contain` sobre o poço, sem corte nem distorção), legendas começando na mesma linha, colunas pela quantidade (até 4; 5, 6 e 9 em três) e última linha centralizada, sem buraco. Amplia no clique.
- **Bloco de mídia:** vídeo ou print grande ocupa a largura do artigo ou divide a linha com algo útil (no Annihilation, a composição da party; na assinatura, o resumo; nos bundles, o título da seção). Nunca uma mídia sozinha pela metade com a outra metade vazia. Tabelas sempre na largura do artigo.
- **Coordenadas:** no texto de `data/`, `{{x, y, z}}` vira um chip mono copiável (`Coordenada`); nunca coordenada solta no meio da frase.
- **Cor de festival** (`festival-heroes`, `-bonfire`, `-spirits`, `-blizzard`): só no guia de Festivais, em ícone, borda de ícone e realce do título; o resto da página segue carvão e violeta.
- **Print pequena (menos de 700 px, `ehPrintPequena` em `lib/imagens.ts`):** sozinha, vai para a coluna lateral de 26 rem ao lado do texto (`tamanhos.lateral`), nunca num quadro largo. Cartões ao lado dela usam grade `auto-fit`, sem cartão órfão.
- **Nitidez:** print nunca é ampliada além do arquivo (`components/shared/ImagemNoQuadro.tsx`, que lê `lib/dimensoes-imagens.json`; regenerar com `node scripts/medir-imagens.mjs` ao trocar imagens, o `npm test` acusa se esquecer). Todo `sizes` vem de `lib/tamanhos.ts` e corresponde à largura real do quadro. Animações do jogo aparecem em 1x nativo ou, em quadro de 960 px ou mais, em 2x exato com `image-rendering: pixelated`.
- **Prévia de categoria (Início):** cartão com print 16:7, nome do grupo sobre a imagem, resumo, e cada guia com tópicos principais e tempo de leitura em mono; tópicos e tempo saem do conteúdo do guia (`lib/previas.ts`).
- **Painel de variação:** carvão, régua de 1 px, 6 px de canto, 16 a 20 px de respiro; texto à esquerda e vídeo à direita a partir de 1024 px.
- **Cartão de navegação (anterior/próximo):** só borda de régua, nome do guia em Pixelify, hover na borda violeta.
- **Mídia:** borda de régua, 6 px, fundo carvão enquanto carrega, legenda no terciário em 0,95 rem.

### Inputs / Fields
- **Gatilho da busca:** campo falso de 36 px na top bar (224 px no desktop), carvão com régua, lupa, "Buscar" e `Ctrl K` em mono.
- **Busca aberta:** `<dialog>` em painel carvão com borda `linha-forte` (não em caixa de item), entrando com opacidade e 4 px em 200 ms, campo de 56 px sem contorno próprio, lista de resultados onde o ativo leva preenchimento violeta GsW e texto branco. Abre com Ctrl+K ou "/"; setas e Enter navegam.

### Navigation
- **Top bar:** chão, borda dupla inferior, emblema e "GsW", três áreas (Início, Guias, Comunidade) em 0,95 rem; área ativa com texto principal e barra de 2 px no violeta de borda; busca e Discord à direita.
- **Sidebar de guias:** grupos com rótulo pequeno em negrito no terciário; item ativo com preenchimento violeta GsW e texto branco 500; hover em superfície elevada.
- **Índice "Nesta página":** links com régua à esquerda; a seção visível ganha a régua no violeta de borda e o texto principal; subseções recuadas. Botão "Continuar de" em fundo de caixa com borda violeta.
- **Breadcrumb:** Guias › grupo › guia, em 0,9 rem, separador chevron de 14 px.

### Caixa de Item (componente assinatura)
Fundo `caixa`, borda dupla, 6 px de canto. Usada só para informação de consulta e para o que flutua sobre a página:
- **Ficha do guia:** uma por página, logo abaixo do H1. Nome em Pixelify violeta, tipo em itálico terciário, linhas de atributo em ordem fixa (rótulo terciário, valor principal) em duas colunas a partir de 640 px, selo de versão no rodapé.
- **Dicas:** toda dica usa o `Destaque` do tipo `dica` (lâmpada dourada, painel carvão), inclusive as que vêm da experiência da guilda. Não existe mais um bloco separado de "Dica da GsW": a GsW escreve o guia inteiro, então separar a opinião dela não fazia sentido.
- **Termo do jogo:** palavra do glossário sublinhada em pontilhado violeta; ao passar o mouse, focar ou tocar, abre uma caixa de 288 px com nome, tipo e explicação em português. Esc fecha; a caixa recua para caber na tela. Os textos marcam termos com `[[chave]]` ou `[[chave|texto]]` nos arquivos de dados; o glossário fica em `lib/glossario.ts`, e uma chave desconhecida sai como texto simples.
- **Também:** páginas de caixa única: o bloco "O que este guia vai cobrir" do guia em construção e a 404. Destaques, busca e o destaque da Início ficam em painel carvão, para a caixa continuar significando "informação de consulta".

### Ícones
Lucide em toda a interface, traço de 1,75 px, em 14, 16, 18 ou 22 px, sempre `aria-hidden` com texto ao lado. O Discord é o único SVG de marca, desenhado à mão. Nada de emoji.

### Imagens e animações
- **Prints próprios:** AVIF com WebP de reserva, em larguras geradas fora do build, com largura e altura reais e carga sob demanda (`ImagemDoJogo`). Na Início, o print grande recebe um véu em gradiente do chão.
- **GIFs:** viram pôster e animação em WebP **sem perda**; a animação baixa sozinha quando chega perto da tela e entra por cima do pôster com fade (`AnimacaoSobDemanda`). Com movimento reduzido, espera o clique.
- **Qualidade:** `next/image` em qualidade 90 e AVIF; `sizes` sempre de `lib/tamanhos.ts`; nunca piorar a imagem para economizar peso (o peso se resolve com tamanhos responsivos e carga sob demanda).
- **Vídeos POV:** miniatura do YouTube com botão; o iframe só carrega no clique e recebe o foco.
- **Ampliar:** prints de guia ampliam no clique.

### Motion
Estudo das referências e mapa completo em `docs/redesign/ANIMACOES.md`. Curva principal `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-saida`); tokens `--dur-ui` 180 ms, `--dur-hover` 400 ms, `--dur-entrada` 800 ms, `--subida` 24 px, `--escalonar` 70 ms (`app/styles/motion.css`).

- **Entradas de topo** (título palavra por palavra com máscara, abertura em sequência, imagem do palco): keyframes CSS com `fill-mode: both` no HTML do servidor, então o primeiro desenho já sai no ponto de partida.
- **Revelação ao rolar:** títulos de seção, figuras, tabelas, cartões, etapas e itens de grade sobem 24 px e aparecem uma vez, em sequência entre irmãos. O script inline do `<head>` (`lib/movimento.ts`) liga tudo antes do primeiro desenho, sem esperar o React; sem JS, nada fica escondido. Parágrafos não animam.
- **Rolagem:** Lenis no desktop; palco fixo da Início ligado à rolagem (`--p`); top bar ganha vidro depois de rolar.
- **Interação:** holofote e inclinação em cartões, botões que sobem com brilho, setas que andam, caixa de item abrindo em degraus (`steps()`), como no jogo.
- **Movimento reduzido:** só fades de 200 ms; sem Lenis, paralaxe, partículas, fita, feixe e inclinação.
- Só `transform`, `opacity` e `clip-path` em animação; `filter` animado numa camada com imagem grande travou o Chrome no quadro inicial.

## Do's and Don'ts

### Do:
- **Do** usar o violeta GsW só como preenchimento de ação e estado ativo, com texto branco por cima.
- **Do** usar o violeta de texto para links e nomes, e o violeta de borda para foco e indicadores ativos.
- **Do** manter texto de leitura em até 70ch, Alegreya Sans 17 px com entrelinha 1,7.
- **Do** escrever todo número em JetBrains Mono, com algarismos tabulares.
- **Do** colocar uma ficha do guia por página, logo abaixo do H1, e reservar a caixa de item para consulta e sobreposições.
- **Do** marcar termos do jogo com `[[chave|texto]]` nos arquivos de dados, e acrescentar a explicação em `lib/glossario.ts`.
- **Do** mostrar estado por ícone, traço ou texto além da cor (tracejado para o que ainda não existe).
- **Do** servir prints próprios em AVIF com WebP de reserva e GIFs como pôster mais animação sem perda, carregada perto da tela.
- **Do** animar bloco que entra (título de seção, figura, cartão) e deixar o texto corrido parado.
- **Do** desenhar réguas e bordas com 1 px exato.

### Don't:
- **Don't** usar o violeta GsW como cor de texto (2,0:1).
- **Don't** criar tema claro ou botão de tema.
- **Don't** usar Pixelify abaixo de 20 px nem para números.
- **Don't** pôr eyebrow ou kicker (rótulo pequeno em caixa alta) acima de títulos.
- **Don't** usar emoji; use Lucide a 1,75 px de traço.
- **Don't** usar cor de raridade como enfeite, nem Mythic `#c80db1` em texto pequeno.
- **Don't** emoldurar texto corrido em caixa de item, nem usar mais de uma ficha por página.
- **Don't** usar logo ou arte oficial do Minecraft ou da Wynncraft, nem a fonte do Minecraft.
- **Don't** animar texto de leitura nem cada item de lista; nos guias e na Início não há entrada animada, e na História ela é só na abertura de seção.
- **Don't** pôr rótulo acima de título nem montar "número grande + rótulo": a contagem vai na frase, em mono; a ordem de uma variação vai depois do nome ("Fique na Plataforma · Variação 1 de 2").

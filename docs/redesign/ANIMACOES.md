# Animações e qualidade das imagens

Estudo das referências de movimento, a linguagem adotada e o mapa do que foi aplicado em cada parte
do site. Código: `app/styles/motion.css` (tokens, keyframes e primitivas), `lib/movimento.ts`
(revelação ao rolar), `components/shared/Efeitos.tsx` (motor de efeitos),
`components/shared/TransicaoDePagina.tsx` e `components/shared/TextoAnimado.tsx`.

## 1. Estudo das referências

Cada site foi aberto no Chrome, rolado de 300 em 300 px, com hover em cerca de 40 elementos e
leitura do JS e do CSS servidos. "Inferido" marca o que não foi observado diretamente.

### suamarcaseulegado.com

Nenhuma biblioteca de animação: HTML estático, CSS e um pouco de JS (IntersectionObserver e
`requestAnimationFrame`).

| Efeito | Como é feito |
|---|---|
| Entrada ao aparecer, uma vez | Classe `.rv` com `opacity: 0` e `translateY(14px)`; o observer (`rootMargin -6%`, `threshold .06`) põe `.in` e para de observar; transição de 0,6 s em `cubic-bezier(.2,.7,.2,1)`; escalonamento por classes (`.r2` 80 ms, `.r3` 160 ms) |
| Contador | `data-tick`: `requestAnimationFrame` de 1,4 s com saída exponencial (`1 - 2^(-10p)`); com movimento reduzido mostra o valor final |
| Borda com feixe girando | `@property` de ângulo girando um `conic-gradient` em 5 s; `mask-composite: exclude` deixa só o anel da borda; pausa fora da tela |
| Galeria em acordeão | O item ativo cresce com `flex-grow` em 0,55 s; a imagem faz pan e muda o brilho; a legenda entra depois |
| Hover | Botão sobe 1 px; seta anda 3 px; tudo em 0,2 s |

Ponto fraco observado: a classe que esconde os elementos é ligada pelo JS depois do primeiro
desenho, então o conteúdo aparece pronto e some antes de animar. Não repetimos isso.

### chiconeto.dev

Portfólio do dono do projeto. **Lenis 1.3.11** (`new Lenis({ autoRaf: true, lerp: .2, anchors: { offset: -72 } })`,
carregado por import dinâmico) e todo o resto em CSS mais um único listener de rolagem. Não usa
Motion, GSAP nem three.js.

| Efeito | Como é feito |
|---|---|
| Tokens | `--motion-ease: cubic-bezier(.16,1,.3,1)`, entrada 0,9 s, hover 0,4 s, interface 0,22 s, subida 28 px, escalonamento 80 ms |
| Entrada da página | `@keyframes enter` (de `opacity .01` e `translateY(28px)`) com `animation-delay: calc(var(--i) * 80ms)`, só com movimento liberado |
| Revelação ao rolar | `html.js [data-reveal]` escondido; o observer marca `data-revealed` e para de observar |
| Palco fixo ligado à rolagem (o efeito principal) | Trilho de `340svh` com o palco `sticky`; um handler de rolagem com rAF grava o progresso `--p` (0 a 1); o CSS deriva tudo com `calc()` e `clamp()`: luz que cresce, título que sobe e some, mockup que entra |
| Seção de serviços em passos | Trilho de `560svh`; o passo ativo é `floor(p * passos)` e troca com crossfade |
| Paralaxe | `animation-timeline: view()` dentro de `@supports` |
| Fita | Dois trilhos com `translateX(-50%)` em 54 s, borda apagada por `mask-image` e texto vazado (`-webkit-text-stroke`) |
| Cartões | Holofote: `pointermove` grava `--mx`/`--my` e um `radial-gradient` violeta acende no hover. Inclinação: `perspective` com ±2,5°. Só com ponteiro fino |
| Botões e links | Sobem 2 px, a seta anda 4 px, brilho atravessando; sublinhado que cresce por `background-size` |
| Top bar | Com a página rolada, ganha `backdrop-filter: blur(16px)` e borda |

### Gastos (pasta local, só leitura)

`lenis` 1.3.27 e `motion` 14.3.1. O padrão que interessa:

- **Um motor de efeitos sem nada na tela** (`src/components/layout/effects.tsx`): um listener de
  `pointermove` para holofote e inclinação de todos os cartões; Lenis (`lerp .2`,
  `allowNestedScroll`, `prevent` em diálogos) baixado em `requestIdleCallback`, só no desktop e sem
  movimento reduzido; página nova abre no topo pelo próprio Lenis.
- **Tokens iguais em CSS e JS** (`src/lib/motion.ts`): `EASE_OUT [0.16, 1, 0.3, 1]`, durações de
  0,12 a 1,1 s, escalonamento de 35 ms.
- **Entradas em keyframes CSS com `fill-mode: both`** (`.word-rise`, `.slab-rise` em `slab.css`):
  o elemento já nasce no quadro inicial no HTML do servidor, sem esperar JS. O Motion fica para o que
  depende de estado do React (`AnimatePresence`, `layoutId`).
- Trava de rolagem que para o Lenis quando um modal abre.

### Sites premiados e de jogos (Awwwards, Godly)

Técnicas aproveitáveis num guia de jogo: palco fixo contando uma história com a rolagem (New World,
Immersive G); introdução curta que some depois; revelação em degraus (`steps()`) combinando com
pixel; brilho de raridade só no que é raro; caixa de interface abrindo como o tooltip de um item;
holofote e inclinação leves em cartões; fita de nomes; contadores.

Fontes: [New World – Immersive G](https://immersive-g.com/projects/amazon-new-world),
[Shapefarm – Awwwards](https://www.awwwards.com/technical-case-study-shapefarm-corporate-website.html),
[Awwwards: games](https://www.awwwards.com/inspiration/game).

## 2. Decisões

- **Lenis entra; Motion e GSAP não.** As duas referências de site fazem tudo com CSS e Lenis, e o
  próprio Gastos anima as entradas em CSS. Motion acrescentaria ~35 KB para o que o CSS e a plataforma
  já fazem aqui (o AGENTS.md proíbe dependência para isso). Se um dia houver troca de estado complexa
  no React (abas, listas que reordenam), o Motion volta a ser a escolha, como no Gastos.
- **Nada aparece pronto e anima depois.** Entradas de topo são keyframes CSS no HTML do servidor.
  A revelação ao rolar depende da classe `js`, posta por um script inline no `<head>` antes do
  primeiro desenho (`lib/movimento.ts`), e não do React. Sem JS, tudo aparece.
- **Só `transform`, `opacity` e `clip-path` nas animações.** `filter: blur()` foi testado na entrada da
  imagem do Início e deixou o Chrome preso no quadro escuro inicial: saiu.
- **Leitura primeiro.** Nos guias, anima bloco (título de seção, figura, tabela, cartão, etapa), nunca
  parágrafo; nada de paralaxe ou palco fixo no meio do texto.

## 3. Linguagem de movimento

| Token | Valor | Uso |
|---|---|---|
| `--ease-saida` | `cubic-bezier(0.16, 1, 0.3, 1)` | quase tudo |
| `--ease-meio` | `cubic-bezier(0.65, 0, 0.35, 1)` | loops (dica de rolar) |
| `--dur-ui` | 180 ms | cor, fundo, estado |
| `--dur-hover` | 400 ms | deslocamentos de hover |
| `--dur-entrada` | 800 ms | revelação de blocos |
| `--subida` | 24 px | distância da entrada |
| `--escalonar` | 70 ms | intervalo entre irmãos (até 6) |

Movimento reduzido (`prefers-reduced-motion: reduce`): fades de 200 ms, sem deslocamento, sem Lenis,
sem paralaxe, partículas, fita, feixe ou inclinação; as animações do Lootrun esperam o clique.

## 4. O que foi aplicado, e onde

| Efeito | Onde | Técnica |
|---|---|---|
| Rolagem suave | Site todo (desktop) | Lenis 1.3.27, `lerp .15`, `anchors: true` (o ponto de parada vem do `scroll-padding-top` e do `scroll-margin`, igual à rolagem nativa); fora de diálogos; carregado depois de a página abrir |
| Transição entre páginas | Todas | `TransicaoDePagina`: chave por rota remonta o conteúdo e roda `pagina-entra` (opacidade e 14 px, 450 ms). Entre guias só o artigo entra; sidebar e índice ficam |
| Título palavra por palavra | H1 do Início, de cada guia, de `/guias` e da História | `TextoAnimado`: cada palavra sobe de dentro de uma máscara, girando 4°, com 55 ms entre palavras; o leitor de tela recebe a frase inteira |
| Abertura em sequência | Breadcrumb, selo, lide e botões das aberturas | `.entra` com `--i` |
| Palco fixo | Início | Trilho de 165 svh; `--p` aproxima a ilha (até 1,26×), escurece o véu e leva o título para cima até sumir; o cursor mexe a imagem alguns pixels; a imagem abre com zoom e fade |
| Partículas | Início | 22 quadrados de 2 a 6 px subindo em violeta, rosa Rare e âmbar, como partículas de encantamento; posições fixas, CSS puro |
| Fita de guias | Início, abaixo do palco | Texto vazado em Pixelify, 48 s por volta, para no hover |
| Contadores | Início (raids, salas, POVs) | `data-contar`: zera fora da tela e conta em 1,4 s com saída exponencial |
| Feixe de borda | Destaque de Raids na Início | `@property --feixe` girando um `conic-gradient` mascarado |
| Revelação ao rolar | Todas as páginas | Títulos de seção, figuras, tabelas, cartões, etapas e itens de grade sobem 24 px e aparecem uma vez, em sequência entre irmãos |
| Imagens com máscara | Figuras e prints dos guias | A moldura abre de `inset(6%)` para cheio e a imagem desce de 1,12× para 1× |
| Caixa de item | Fichas dos guias e termos do jogo | A ficha "desenha" de cima para baixo em 7 degraus ao aparecer; o termo abre com surgimento e recorte em 6 degraus, e as linhas entram em sequência |
| Linha do tempo | História | O trilho de cada era se desenha de cima para baixo ao aparecer |
| Holofote | Cartões dos guias antigos, membros, pilares, essência, destaque | Gradiente violeta que segue o cursor |
| Inclinação | Membros da História e retratos da Início | Perspectiva com até 3° seguindo o cursor |
| Botões | Todos | Primário sobe 2 px, ganha sombra violeta e um brilho atravessa; secundário sobe e acende o fundo; clique encolhe para 0,97 |
| Setas | Links com seta | Andam 4 px no hover |
| Sidebar | Guias | Itens deslizam 4 px no hover |
| Top bar | Site todo | Vidro (`backdrop-filter`) e sombra depois de rolar 24 px |

## 5. Qualidade das imagens

**Onde a qualidade tinha caído:**

1. **Lootrun (principal).** A otimização dos 112 MB trocou os 16 GIFs por WebP com perda em
   qualidade 70 (a animação) e 78 (o pôster), e a animação só tocava no clique. O pixel do jogo ficava
   borrado e o pôster de 5 a 30 KB parecia outra imagem.
2. **Todas as imagens servidas pelo `next/image`** usavam a qualidade padrão 75, que borra texto de
   interface e bordas de pixel.
3. **`sizes` desatualizado.** Depois que o artigo dos guias passou a ocupar o espaço entre a sidebar e
   o índice, vários `sizes` ainda descreviam o layout antigo (`28rem`, `40vw`, `42rem`): a tela grande
   e a de alta densidade recebiam uma versão menor esticada.
4. **Prints novas da Início e da Raids** estavam em AVIF 50 / WebP 78, com no máximo 1280 px nos guias.

**Como foi resolvido, sem piorar a imagem:**

- **Lootrun:** as 16 animações foram regeradas dos GIFs originais (do histórico do git) em WebP **sem
  perda**: idênticas ao original, pixel a pixel, e cerca de 10% menores. Pôster do primeiro quadro
  também sem perda. O peso é resolvido por carregamento sob demanda: a página abre só com os pôsteres;
  cada animação baixa sozinha quando chega a 400 px da tela, entra por cima do pôster com fade quando
  termina de carregar e é descarregada quando sai para longe. Vídeo (MP4/H.264) foi testado e não
  compensa: o pontilhado dos GIFs do jogo deixa o vídeo do mesmo tamanho e com perda visível (SSIM 0,96).
- **`next/image`:** qualidade 90 em todas as imagens e AVIF antes do WebP (`next.config.ts`).
- **`sizes`:** centralizados em `lib/tamanhos.ts`, calculados da largura real do artigo em cada
  faixa de tela (inteira, metade, terço, quarto e imagem solta).
- **Prints:** regeradas da fonte em AVIF 70 / WebP 90, com versão de 1920 px quando a fonte tem
  (abertura da Início e chefe da TWP).

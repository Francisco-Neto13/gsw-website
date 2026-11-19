# Auditoria técnica: gsw_lp (Impeccable `audit`)

Data: 2026-11-18. Alvo: build de produção em `http://localhost:3100` (Next.js 16.1.6, React 19.2.3, Tailwind 4), 12 rotas.
Escopo: só relatório, nenhum arquivo do projeto foi alterado.

**Como foi medido**
- Lighthouse 12.8.2 (mobile padrão, Chrome headless) em `/`, `/lootrun`, `/raids`, `/historia`.
- Playwright (playwright-core 1.48.2 + Chrome instalado) nas 12 rotas a 390x844 (isMobile, hasTouch): bytes transferidos via CDP (no load e depois de rolar a página inteira), overflow horizontal, tamanho dos alvos de toque, headings, alt. A 1440x900: ordem de Tab, menus do navbar, preview de imagem, modal da galeria, botão do YouTube, `prefers-reduced-motion: reduce` emulado, tema claro emulado.
- Revisão de código de `app/styles/*.css`, `app/globals.css`, `app/layout.tsx`, `components/shared/*` e das seções citadas.
- **O detector `impeccable detect` não foi rodado nesta passada.** Outra passada cuida dele. A dimensão 5 abaixo vem só da revisão de código.

---

## Audit Health Score

| # | Dimensão | Nota | Principal achado |
|---|-----------|-------|-------------|
| 1 | Accessibility | 2 | A galeria não abre pelo teclado (0 de 28 itens focáveis), os links do menu mobile fechado continuam no Tab, os diálogos não recebem foco e o texto roxo da marca tem contraste de 2,25:1 |
| 2 | Performance | 2 | `/lootrun` baixa **112 MB** quando se rola a página (16 GIFs `unoptimized`). O LCP da home é 8,0 s, com o fundo de 1,1 MB carregado via CSS |
| 3 | Theming | 2 | O tema claro funciona remapeando utilitários com `!important`. Gradientes `from-black` ficaram de fora e a legenda da home fica #111827 sobre preto 75% |
| 4 | Responsive Design | 3 | Nenhum overflow a 390px em 12 rotas. Toggle e hambúrguer têm 32x32 e os ícones do rodapé 20x20 |
| 5 | Implementation Integrity | 2 | Lógica de descoberta de seções duplicada (Navbar e InPageNavigation), padrão eyebrow+h2 copiado 49 vezes e efeitos presos a seletores estruturais (`.rounded-2xl.border.border-white\/10`) |
| **Total** | | **11/20** | **Acceptable (precisa de trabalho significativo)** |

### Lighthouse (mobile, simulado)

| Rota | Perf | A11y | Best Pr. | SEO | LCP | FCP | TBT | CLS | Peso no load |
|---|---|---|---|---|---|---|---|---|---|
| `/` | 75 | 92 | 100 | 100 | **8,0 s** | 0,9 s | 110 ms | 0 | 1.467 KiB |
| `/lootrun` | 92 | 92 | 100 | 100 | 3,2 s | 1,0 s | 140 ms | 0,012 | **5.592 KiB** |
| `/raids` | 91 | 92 | 100 | 100 | 3,0 s | 1,1 s | 240 ms | 0,012 | 543 KiB |
| `/historia` | 94 | 90 | 100 | 100 | 3,0 s | 1,0 s | 100 ms | 0 | 314 KiB |

Falhas de a11y que se repetem nas quatro rotas: `color-contrast` e `link-name`. Em `/historia` também falha `heading-order`.

### Peso por rota (Playwright, 390px, CDP `encodedDataLength`)

| Rota | No load | Depois de rolar tudo |
|---|---|---|
| `/` | 1.378 KB | 1.850 KB |
| `/historia` | 263 KB | 1.782 KB |
| `/leveling` | 1.957 KB | 2.302 KB |
| `/professions` | 315 KB | 457 KB |
| `/montarias` | 240 KB | 240 KB |
| `/festivais` | 240 KB | 240 KB |
| **`/lootrun`** | **5.531 KB** | **112.192 KB (~110 MB)** |
| `/silverbull-shares` | 289 KB | 548 KB |
| `/modos-especiais` | 247 KB | 258 KB |
| `/world-events` | 325 KB | 423 KB |
| `/raids` | 446 KB | 1.217 KB |
| `/dungeons` | 269 KB | 312 KB |

---

## Implementation Integrity Verdict

**Passa com ressalvas (nota 2).** Existe um sistema próprio do produto: tokens `--surface-*`, `--text-*`, `--line-*` e as cores `gsw`, `arcane` e `gold` em `app/styles/foundation.css`, um tema escuro de identidade clara e componentes compartilhados (`GuideIntro`, usado em 13 páginas, `ClickableImagePreview`, `LazyYouTubeEmbed`, `InPageNavigation`). O código das seções, porém, quase não usa esses tokens. Escreve utilitários crus do Tailwind (`text-zinc-400`, `bg-black/40`, `border-white/10`), e o tema claro e os efeitos de hover são enxertados depois por CSS que casa nomes de classe (`[class~="text-white"]`, `.rounded-2xl.border.border-white\/10`). Achados verificados:

- `toSlug()` e a varredura de `main > section h2` estão implementadas duas vezes: `components/shared/Navbar.tsx:21-72` e `components/shared/InPageNavigation.tsx:17-90`. As duas escrevem `id` e `scrollMarginTop` no DOM.
- O cabeçalho de seção (eyebrow `text-xs font-bold uppercase tracking-[0.6em] text-gsw` + h2 `text-4xl ... lg:text-7xl`) aparece 49 vezes, copiado à mão, sem componente.
- 174 valores arbitrários (`[...]`) nos `.tsx` e 16 tamanhos de fonte em px (`text-[9px]`, `text-[10px]`, `text-[11px]`) fora da escala.
- `app/styles/surface-effects.css:57-58` aplica hover 3D casando a combinação de classes `.rounded-2xl.border.border-white\/10` com 7 `:not()`. Trocar a borda de um card muda o comportamento dele sem ninguém perceber.
- `AnimationInitializer.tsx:34-50` aplica reveal a qualquer `main section > div`, `article` ou `li`. O sistema de animação não depende de opt-in.

A detecção determinística (`impeccable detect`) **não rodou aqui**. Cruze com o relatório da outra passada antes de fechar a nota.

---

## Executive Summary

- **Audit Health Score: 11/20 (Acceptable)**
- Issues: **P0: 1 · P1: 8 · P2: 7 · P3: 3**
- Principais problemas:
  1. **[P0]** `/lootrun` transfere ~110 MB ao ser rolada. São 16 GIFs de 3 a 10 MB servidos crus (`unoptimized`) e mais ~15 MB de WebP sem redimensionar.
  2. **[P1]** A galeria de `/historia` não abre pelo teclado: os itens são `div onClick` e nenhum dos 28 é focável.
  3. **[P1]** Com o menu mobile fechado, os links continuam no Tab (Início, Guias, Comunidade...), invisíveis e cortados por `max-h-0`.
  4. **[P1]** O texto roxo da marca (`text-gsw` #7116ad sobre preto) mede 2,25:1 em eyebrows e destaques de todas as páginas.
  5. **[P1]** Os diálogos (preview de imagem e galeria) não movem o foco nem prendem o Tab. O Esc fecha os dois.
- Próximos passos: `/impeccable optimize` (mídia da lootrun e hero), `/impeccable harden` (teclado, diálogos, nomes acessíveis), `/impeccable colorize` (contraste da marca e tema claro) e `/impeccable animate` (reduced motion).

---

## Detailed Findings by Severity

### P0 Blocking

**[P0] `/lootrun` transfere ~110 MB de mídia**
- **Location**: `components/lootrun/sections/LootrunMediaPlaceholder.tsx:70-77` (`<Image ... unoptimized>`), dados em `components/lootrun/data/lootrun-content.ts:90-642`, arquivos em `public/lootrun/*.gif`
- **Category**: Performance
- **Impact**: Medido com Playwright a 390px: 5,5 MB no load e **112 MB** depois de rolar até o fim. Os maiores arquivos são `GanhandoTempo_Terminando_o_desafio_2.gif` (10,1 MB), `jump_pads.gif` (8,9 MB), `fast_travels_corkus.gif` (8,3 MB), `gif_molten.gif` (8,1 MB) e `morrendo_desafio.gif` (7,7 MB). O `unoptimized` vale para todos os arquivos locais, então os WebP também chegam no tamanho original: `canyon_camp.webp` 2,2 MB, `corkus_camp.webp` 2,0 MB, `sky_camp.webp` 1,8 MB. Lighthouse: `uses-responsive-images` estima 1.217 KiB de economia só no primeiro viewport. No 4G, ler o guia até o fim consome o pacote de dados e trava a rolagem enquanto os GIFs decodificam.
- **WCAG/Standard**: Core Web Vitals / orçamento de peso (Lighthouse `total-byte-weight`)
- **Recommendation**: Converter os GIFs em MP4/WebM (`<video muted loop playsinline preload="none">` com poster, como `LootrunMediaPlaceholder` já faz para `.mp4` nas linhas 42-63). Costuma reduzir 90-95%. Tirar o `unoptimized` dos estáticos não animados para o `next/image` gerar tamanhos responsivos. O `sharp` já está nas dependências e existe `npm run convert:webp`.
- **Suggested command**: `/impeccable optimize`

### P1 Major

**[P1] Galeria de `/historia` inacessível pelo teclado**
- **Location**: `components/history/sections/GallerySection.tsx:84-88`
- **Category**: Accessibility
- **Impact**: Cada miniatura é `<div onClick>`, sem `tabIndex`, `role` ou handler de tecla. Medido: 0 de 28 itens focáveis. Quem navega pelo teclado ou por leitor de tela não chega ao modal, às descrições nem à navegação ←/→. Título e descrição só aparecem no hover (`opacity-0 group-hover:opacity-100`, linha 96), o que também exclui o toque.
- **WCAG/Standard**: 2.1.1 Teclado (A), 4.1.2 Nome, Função, Valor (A)
- **Recommendation**: Trocar o `div` por `<button type="button">` (como `ClickableImagePreview` já faz) e mostrar a legenda também em `group-focus-visible`.
- **Suggested command**: `/impeccable harden`

**[P1] Links do menu mobile fechado ficam no Tab**
- **Location**: `components/shared/Navbar.tsx:369-375`
- **Category**: Accessibility
- **Impact**: O painel fechado usa só `max-h-0 overflow-hidden`. A 390px, a ordem de Tab medida foi: Alternar tema → Menu → **Início → Guias → Comunidade** (itens do menu fechado, de 342x40, cortados) → depois o conteúdo. O foco cai em elementos invisíveis e o usuário perde a referência. O hambúrguer também não tem `aria-controls`.
- **WCAG/Standard**: 2.4.3 Ordem do Foco (A), 2.4.7 Foco Visível (AA)
- **Recommendation**: Pôr `inert` (ou `hidden`/`visibility:hidden` depois da transição) no painel fechado e `aria-controls` no botão da linha 344.
- **Suggested command**: `/impeccable harden`

**[P1] Diálogos não gerenciam o foco**
- **Location**: `components/shared/ClickableImagePreview.tsx:22-40, 56-88`; `components/history/sections/GallerySection.tsx:32-60, 129-218`
- **Category**: Accessibility
- **Impact**: Medido: ao abrir o preview com Enter, o foco não entra no diálogo, e o Tab seguinte também fica fora dele (`previewFocusInDialog=false`, `previewTabInDialog=false`). Com a galeria acontece o mesmo. O leitor de tela não anuncia o diálogo e o teclado continua percorrendo a página por trás, que tem o scroll travado. Ao fechar, o foco não volta ao gatilho. **O Esc fecha os dois (ok).**
- **WCAG/Standard**: 2.4.3 Ordem do Foco (A), 2.1.2 (armadilha inversa), ARIA APG Dialog
- **Recommendation**: Usar `<dialog>` nativo com `showModal()`, que já cuida de foco, Esc, `inert` no fundo e `::backdrop`, ou mover o foco para o botão Fechar e devolvê-lo ao gatilho. O botão Fechar do preview mostra um "x" minúsculo de texto. Trocar por um ícone com área de 44px.
- **Suggested command**: `/impeccable harden`

**[P1] Texto roxo da marca com contraste 2,25:1 no tema escuro**
- **Location**: token `--color-gsw: #7116ad` em `app/styles/foundation.css:2`. Usado em eyebrows (ex.: `components/lootrun/sections/LootrunCampsSection.tsx:16`, `components/history/sections/GallerySection.tsx:68,72`), em `InPageNavigation.tsx:166` (`text-gsw/90`, 2,14:1) e em `Navbar.tsx:241` (`text-gsw/80`)
- **Category**: Accessibility / Theming
- **Impact**: Lighthouse `color-contrast` mede 2,25:1 (#7116ad sobre preto) e 2,42:1 em `/historia`. O roxo é usado como cor de texto pequeno (12px, caixa alta) em cerca de 49 eyebrows, rótulos e destaques de h2. No tema claro, `#5f1796` sobre branco passa.
- **WCAG/Standard**: 1.4.3 Contraste Mínimo (AA): 4,5:1 para texto normal
- **Recommendation**: Criar um token de texto separado da cor de superfície/borda, algo como `--color-gsw-text` ≈ `#b77ee8`/`#c08cf0` no escuro (~6:1), e reservar `#7116ad` para fundos, bordas e glows.
- **Suggested command**: `/impeccable colorize`

**[P1] Links de ícone do rodapé sem nome acessível**
- **Location**: `components/shared/Footer.tsx:27-36` (GitHub) e `:38-47` (Discord)
- **Category**: Accessibility
- **Impact**: Os links contêm só o `<svg>`, sem `aria-label` nem texto. O leitor de tela lê a URL ou "link". Lighthouse `link-name` falha nas 4 rotas medidas. O alvo é de 20x20 e 22x22 px.
- **WCAG/Standard**: 2.4.4 Finalidade do Link (A), 4.1.2 (A)
- **Recommendation**: `aria-label="Código no GitHub"` / `"Discord da guilda"`, `aria-hidden` no svg e `p-3` para chegar a 44px.
- **Suggested command**: `/impeccable harden`

**[P1] Tema claro: texto escuro sobre gradiente preto**
- **Location**: `components/home/sections/HomeAboutSection.tsx:72-73`; `components/history/sections/GallerySection.tsx:96-99`; mecanismo em `app/styles/theme-remaps.css:2-4`
- **Category**: Theming / Accessibility
- **Impact**: Verificado com Playwright (`colorScheme: light`): a legenda da imagem na home calcula para `rgb(17,24,39)` sobre `oklab(0 0 0 / 0.75)`, quase preto sobre preto, abaixo de 1,5:1. O remap troca todo `text-white` por `--text-1`, mas `from-black*`/`via-black*` não têm remap, então a sobreposição continua escura. O título no hover da galeria tem o mesmo defeito.
- **WCAG/Standard**: 1.4.3 (AA)
- **Recommendation**: Texto sobre foto deve usar uma classe que não é remapeada, como `text-[--on-media]` fixo em branco, ou o scrim deve virar um token com variante clara. Corrigir na origem em vez de somar mais seletores ao remap.
- **Suggested command**: `/impeccable colorize`

**[P1] LCP da home de 8,0 s (mobile)**
- **Location**: `components/home/sections/HomeHeroSection.tsx:12-15` (`style={{ backgroundImage: url('/bg-guilda.webp') }}`)
- **Category**: Performance
- **Impact**: Lighthouse: performance 75 e LCP 8,0 s. O elemento de LCP é o h1, cujo render atrasa porque o fundo do hero (`/bg-guilda.webp`, **1.115 KB**, servido inteiro ao celular) disputa banda com o resto. `image-delivery-insight` estima 878 KB de economia nesse arquivo.
- **WCAG/Standard**: Core Web Vitals (LCP ≤ 2,5 s)
- **Recommendation**: Trocar o `background-image` por `<Image fill priority sizes="100vw" className="object-cover">`, que dá AVIF/WebP responsivo e preload, e manter os scrims por cima.
- **Suggested command**: `/impeccable optimize`

**[P1] Sem alternativa para `prefers-reduced-motion` no reveal e no scroll suave**
- **Location**: `app/styles/motion.css:17-39`; `app/styles/foundation.css:58`; `app/layout.tsx:19` (`scroll-smooth`); `components/shared/Navbar.tsx:81,312`; `components/shared/InPageNavigation.tsx:35,149`
- **Category**: Accessibility
- **Impact**: Com `reducedMotion: 'reduce'` emulado, os elementos abaixo da dobra continuam `opacity:0; translateY(36px)` com transição de 1s. O reveal se aplica automaticamente a toda `div`, `article` e `li` dentro de `main section` (`AnimationInitializer.tsx:34-50`), ou seja, praticamente todo o conteúdo, e o scroll programático é sempre `smooth`. Só `history-effects.css:176` e `leveling-effects.css:114` tratam a preferência, e apenas para o hover.
- **WCAG/Standard**: 2.3.3 Animação de Interações (AAA); boa prática para distúrbios vestibulares
- **Recommendation**: Em `@media (prefers-reduced-motion: reduce)`, manter o fade curto (≈150 ms de opacidade) e zerar o deslocamento, aplicar `scroll-behavior: auto` e trocar `behavior: "smooth"` por `matchMedia(...)`. Não usar o "kill" global de `0.01ms`.
- **Suggested command**: `/impeccable animate`

### P2 Minor

**[P2] Handler de scroll lê layout de todos os alvos a cada evento**
- **Location**: `components/shared/AnimationInitializer.tsx:125-130, 137-139`
- **Category**: Performance
- **Impact**: `handleScroll` roda `querySelectorAll` com 12 seletores e `getBoundingClientRect()` em cada alvo a cada evento de scroll, sem rAF. Isso duplica o trabalho do `IntersectionObserver`, que já existe (linhas 81-91). Lighthouse marca `forced-reflow-insight` em `/` e `/raids`, e `/raids` tem TBT de 240 ms com DOM de 1.609 nós. O `MutationObserver` em `body` com subtree também refaz a varredura a cada mutação.
- **Recommendation**: Remover o listener de scroll/resize e confiar no `IntersectionObserver`.
- **Suggested command**: `/impeccable optimize`

**[P2] `will-change: transform` permanente em todos os cards de história**
- **Location**: `app/styles/history-effects.css:5`
- **Category**: Performance
- **Impact**: Toda `.history-sheen-card` (28 itens da galeria + cards) ganha camada de composição o tempo todo. Em celular isso consome memória de GPU sem ganho, porque o efeito só acontece no hover.
- **Recommendation**: Remover, ou aplicar só em `:hover`/durante a interação.
- **Suggested command**: `/impeccable optimize`

**[P2] Menus do navbar com `role="menu"` sem o teclado de menu**
- **Location**: `components/shared/Navbar.tsx:208-212, 233-237, 251, 302-310`
- **Category**: Accessibility
- **Impact**: Medido: Enter abre e Esc fecha, com o foco voltando ao gatilho (bom). Seta ↓ não move o foco (`afterArrow="Guias▾"`). `role="menu"`/`menuitem` faz o leitor de tela anunciar um widget de menu de aplicação que espera setas. É uma navegação de site.
- **WCAG/Standard**: 4.1.2 (A) – papel não condiz com o comportamento
- **Recommendation**: Remover `role="menu"`, `role="menuitem"` e `aria-haspopup="menu"`, mantendo `aria-expanded`/`aria-controls` (padrão disclosure). Fechar também quando o foco sai do painel.
- **Suggested command**: `/impeccable harden`

**[P2] Embed do YouTube perde o foco ao ativar**
- **Location**: `components/shared/LazyYouTubeEmbed.tsx:21-33`
- **Category**: Accessibility
- **Impact**: Medido em `/lootrun`: depois de Enter no botão "Reproduzir vídeo", o botão é desmontado e o foco cai no `<body>`, então o usuário de teclado volta ao topo da ordem de Tab. Além disso, `LootrunRewardsSection.tsx:45` passa `priority` para uma miniatura que fica bem abaixo da dobra.
- **Recommendation**: Focar o `iframe` depois da troca (ref + `useEffect`) e tirar o `priority`.
- **Suggested command**: `/impeccable harden`

**[P2] Hierarquia de headings pula níveis em `/historia`**
- **Location**: `components/history/sections/Essence.tsx:46,62,77` (h2 → h4)
- **Category**: Accessibility
- **Impact**: Lighthouse `heading-order` falha e Playwright conta 2 saltos. A navegação por headings em leitor de tela fica confusa.
- **WCAG/Standard**: 1.3.1 Informações e Relações (A)
- **Recommendation**: Usar `h3` mantendo o estilo atual.
- **Suggested command**: `/impeccable harden`

**[P2] Contraste do texto do rodapé (4,12:1)**
- **Location**: `components/shared/Footer.tsx:10` (`text-zinc-500` sobre `bg-zinc-950`)
- **Category**: Accessibility
- **Impact**: Lighthouse mede 4,12:1 em todas as páginas, um pouco abaixo de 4,5:1, em texto de 12px.
- **WCAG/Standard**: 1.4.3 (AA)
- **Recommendation**: `text-zinc-400` (ou `--text-3`).
- **Suggested command**: `/impeccable colorize`

**[P2] Alvos de toque pequenos nos controles fixos**
- **Location**: `components/shared/ThemeToggle.tsx:26` (`h-8 w-8`); `components/shared/Navbar.tsx:346` (hambúrguer `h-8 w-8`); chips de `InPageNavigation.tsx:171,186` (altura de 30px); rodapé 20x20/22x22
- **Category**: Responsive
- **Impact**: Medido a 390px em todas as rotas: o toggle e o menu têm 32x32. Passam no mínimo AA de 24px, mas ficam abaixo de 44px nos dois controles mais usados no celular, lado a lado com `gap-2`. Os ícones do rodapé (20x20) **falham** em 2.5.8 se o espaçamento não compensar (`gap-6` ajuda, mas é limítrofe). Em `/leveling`, 76 links de itens têm 23px de altura. Estão em lista com espaçamento, então provavelmente passam pela exceção de espaçamento (verificação visual pendente).
- **WCAG/Standard**: 2.5.8 Tamanho do Alvo Mínimo (AA), 2.5.5 (AAA, 44px)
- **Recommendation**: `h-11 w-11` no toggle e no hambúrguer, `py-2.5` nos chips e padding nos ícones do rodapé.
- **Suggested command**: `/impeccable adapt`

### P3 Polish

**[P3] Conteúdo com `.reveal-on-scroll` fixo no markup fica invisível sem JS**
- **Location**: `app/styles/motion.css:17-19`; usado em 20 lugares (ex.: `GallerySection.tsx:67,80,120`, `HomeHeroSection.tsx:38,62`)
- **Category**: Accessibility / Performance
- **Impact**: A classe vem do SSR com `opacity:0`, então se o JS falhar ou demorar, o conteúdo some. Isso também atrasa o LCP medido em `/raids` e `/lootrun`, onde o elemento de LCP é um eyebrow.
- **Recommendation**: Esconder só quando há JS (`.js .reveal-on-scroll` ou `@media (scripting: enabled)`).
- **Suggested command**: `/impeccable animate`

**[P3] Logo do navbar não leva à home**
- **Location**: `components/shared/Navbar.tsx:161-173`
- **Category**: Accessibility / Implementation Integrity
- **Impact**: O hover do logo sugere interação (`group-hover:text-gsw`, `scale-105`), mas ele não é link. A convenção esperada falha.
- **Recommendation**: Envolver em `<Link href="/" aria-label="GsW – início">`.
- **Suggested command**: `/impeccable polish`

**[P3] Tamanhos de fonte fora da escala (9-11px)**
- **Location**: 16 ocorrências de `text-[9px|10px|11px]`, ex.: `MembersSection.tsx:73` (`text-[9px]` + `text-zinc-500`), `Navbar.tsx:189,217,241`
- **Category**: Implementation Integrity / Accessibility
- **Impact**: Texto de 9-10px em caixa alta com tracking largo é difícil de ler e não está na escala tipográfica.
- **Recommendation**: Mínimo de 11-12px, definido como token de escala.
- **Suggested command**: `/impeccable typeset`

---

## Patterns & Systemic Issues

1. **Tema claro por remapeamento de classes com `!important`.** `app/styles/theme-remaps.css` tem 15 `!important` e casa strings como `[class~="bg-black/45"]`. Cada utilitário novo escuro que aparece fica sem remap. Hoje faltam: `from-black`, `from-black/60`, `from-black/75`, `from-black/80`, `via-black/40`, `via-white/10`, `bg-black/55`, `bg-zinc-900/25` e `bg-zinc-400`. A correção estrutural é usar tokens semânticos (`bg-[--surface-2]`, `text-[--text-3]`) nos componentes, ou registrá-los em `@theme` para virarem utilitários (`bg-surface-2`).
2. **A cor da marca serve para texto e para superfície ao mesmo tempo.** O `#7116ad` funciona como fundo e borda, mas falha como texto no escuro, e isso se repete em ~49 eyebrows e destaques.
3. **Comportamento por seletor estrutural, não por opt-in.** O reveal pega toda `div`/`li` de `main section` e o hover 3D pega qualquer `.rounded-2xl.border.border-white\/10`. Mexer em estilo muda comportamento e motion sem aviso.
4. **Diálogos e overlays sem gerenciamento de foco.** O padrão se repete nos dois componentes de modal e no embed do YouTube.
5. **Mídia servida crua.** `unoptimized` em toda mídia local da lootrun e o fundo do hero via CSS. As rotas que mais pesam são as que contornam o `next/image`.
6. **Lógica duplicada no layout compartilhado.** `toSlug` e a varredura de seções existem duas vezes, e o cabeçalho de seção foi copiado 49 vezes, apesar de já existir `GuideIntro` como precedente de componente.

## Positive Findings

- **Nenhum overflow horizontal a 390px** nas 12 rotas (`scrollWidth === clientWidth` em todas).
- **Best Practices 100 e SEO 100** nas 4 rotas medidas, CLS de 0 a 0,012 e FCP ≤ 1,1 s.
- **Todas as imagens têm `alt`** (0 sem alt) e **lazy loading é a regra** (ex.: 45 de 47 imagens em `/lootrun` e 55 de 57 em `/historia`).
- **Um único h1 por rota**, `<main>` e `<footer>` presentes e `lang="pt-BR"`.
- **Foco visível nativo preservado.** Não há `outline: none` em nenhum lugar, e o anel `auto` do Chrome aparece em todos os controles testados.
- **Esc funciona** nos menus do navbar (com o foco voltando ao gatilho), no preview e na galeria. A galeria também tem navegação por ←/→.
- **Script anti-FOUC do tema** em `app/layout.tsx:17-32`, respeitando `prefers-color-scheme` quando não há preferência salva. `color-scheme` é declarado por tema.
- **`LazyYouTubeEmbed`** é um bom padrão de facade (sem iframe até o clique), com `aria-label` descritivo.
- **Cache imutável** de 1 ano para estáticos e mídia em `next.config.ts`, mais cabeçalhos de segurança.
- **Hover 3D respeita `prefers-reduced-motion`** em `history-effects.css` e `leveling-effects.css`, e há fallback para dispositivos sem hover.

## Recommended Actions

1. **[P0] `/impeccable optimize`**: converter os 16 GIFs de `public/lootrun` em MP4/WebM com `preload="none"` + poster e remover o `unoptimized` de `LootrunMediaPlaceholder.tsx:76`. Meta: `/lootrun` abaixo de 10 MB rolada inteira.
2. **[P1] `/impeccable optimize`**: hero da home com `<Image priority sizes="100vw">` no lugar do `background-image` de 1,1 MB (LCP 8,0 s).
3. **[P1] `/impeccable harden`**: galeria com `<button>`, `inert` no menu mobile fechado, `<dialog>`/foco nos dois modais, `aria-label` nos ícones do rodapé.
4. **[P1] `/impeccable colorize`**: token de texto da marca com ≥4,5:1 no escuro, scrims e texto sobre mídia corrigidos no tema claro, rodapé em `text-zinc-400`.
5. **[P1] `/impeccable animate`**: alternativa de `prefers-reduced-motion` para o reveal (fade curto, sem deslocamento) e para todo `scroll-behavior: smooth`; reveal só com JS ativo.
6. **[P2] `/impeccable optimize`**: remover o listener de scroll do `AnimationInitializer` e o `will-change` permanente.
7. **[P2] `/impeccable harden`**: padrão disclosure nos menus do navbar, foco no iframe do YouTube, h4→h3 em `Essence.tsx`.
8. **[P2] `/impeccable adapt`**: toggle, hambúrguer, chips e ícones do rodapé com 44px.
9. **[P3] `/impeccable typeset`**: eliminar `text-[9px]`/`[10px]` e definir a escala mínima.
10. **[P2] `/impeccable document`**: registrar os tokens semânticos em `@theme` e extrair `SectionHeading` e um `useInPageSections` compartilhado, para parar o drift do tema por remap.
11. **`/impeccable polish`**: passada final.

> You can ask me to run these one at a time, all at once, or in any order you prefer.
>
> Re-run `/impeccable audit` after fixes to see your score improve.

---

### Limitações desta passada
- `impeccable detect` não rodou (é da outra passada).
- Não houve teste em dispositivo físico. O toque foi verificado só por viewport emulado (Playwright/Chrome, `hasTouch`), sem gestos sintetizados. Não há sliders nem superfícies de arrastar no projeto, só a faixa de chips com `overflow-x-auto` em `InPageNavigation`, que depende do scroll nativo.
- O contraste do tema claro foi verificado em amostras (legenda da home). As outras combinações do tema claro não foram varridas.
- Zoom de texto a 200% não foi testado.

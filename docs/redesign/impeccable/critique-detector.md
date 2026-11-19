# Critique: Assessment B (detector + evidência de navegador)

Projeto: `` (build de produção em http://localhost:3100). Feito sem alterar nenhum arquivo do projeto.
Detector: impeccable 4.8.1 `detect --json`. Os JSON brutos estão em `<pasta-temporaria>/critB\` (`src.json`, `url-*.json`, `m-*.json`, `light-result.json`).

## 1. Varredura do código-fonte (`detect --json components app`)

Código de saída 2, com **1 achado**:

| regra | arquivo | linha | trecho |
|---|---|---|---|
| ai-color-palette | components/history/sections/Pillars.tsx | 41 | `from-purple-500 gradient` |

Verificação: **é real.** Os cards de Pillars usam gradientes Tailwind literais, `from-purple-500/20 to-pink-500/20` (L41) e `from-pink-500/20 to-purple-500/20` (L9), e não o token da marca. O detector também deixou passar dois brilhos roxos decorativos: `bg-purple-900/5 blur-[150px]` em `components/history/sections/Essence.tsx:7` e `components/world-events/sections/WorldEventsAnnihilationSection.tsx:17`.
Limitação: na varredura do código-fonte, as classes Tailwind são quase invisíveis para o detector. A varredura por URL abaixo é a evidência principal.

## 2. Varredura por URL: contagens brutas (resumo do JSON)

Viewport padrão 1280x800 (`url-*`) e 390x844 (`m-*`). Todas as rotas saíram com código 2.

```
url-home        26 {"ai-color-palette":2,"low-contrast":7,"kicker-above-heading":3,"undersized-ui-text":10,"straggler":1,"icon-tile-stack":3}
m-home          32 {"ai-color-palette":2,"low-contrast":7,"kicker-above-heading":3,"straggler":7,"undersized-ui-text":10,"icon-tile-stack":3}
url-raids       76 {"low-contrast":14,"hero-eyebrow-chip":1,"line-length":10,"kicker-above-heading":32,"straggler":4,"nested-cards":15}
m-raids         64 {"low-contrast":15,"kicker-above-heading":15,"undersized-ui-text":1,"straggler":11,"unbalanced-heading":7,"nested-cards":15}
url-lootrun     42 {"low-contrast":14,"hero-eyebrow-chip":1,"line-length":1,"kicker-above-heading":9,"straggler":9,"ai-color-palette":2,"nested-cards":6}
m-lootrun       51 {"low-contrast":15,"kicker-above-heading":10,"straggler":12,"undersized-ui-text":1,"unbalanced-heading":3,"ai-color-palette":2,"nested-cards":8}
url-historia    95 {"low-contrast":11,"hero-eyebrow-chip":1,"line-length":9,"kicker-above-heading":4,"unbalanced-heading":1,"straggler":3,"undersized-ui-text":56,"icon-tile-stack":8,"skipped-heading":2}
m-historia      91 {"low-contrast":10,"kicker-above-heading":5,"straggler":9,"unbalanced-heading":1,"undersized-ui-text":56,"icon-tile-stack":8,"skipped-heading":2}
url-montarias    5 {"low-contrast":3,"hero-eyebrow-chip":1,"straggler":1}
m-montarias      5 {"low-contrast":3,"kicker-above-heading":1,"straggler":1}
url-leveling    18 {"low-contrast":13,"hero-eyebrow-chip":1,"kicker-above-heading":3,"nested-cards":1}
url-professions 30 {"low-contrast":13,"hero-eyebrow-chip":1,"line-length":2,"straggler":6,"kicker-above-heading":5,"ai-color-palette":3}
url-festivais    4 {"low-contrast":3,"hero-eyebrow-chip":1}
url-silverbull  38 {"low-contrast":13,"hero-eyebrow-chip":1,"kicker-above-heading":12,"straggler":11,"line-length":1}
url-modos-esp.  13 {"low-contrast":6,"hero-eyebrow-chip":1,"line-length":3,"straggler":1,"kicker-above-heading":2}
url-world-ev.   19 {"low-contrast":8,"hero-eyebrow-chip":1,"line-length":2,"kicker-above-heading":5,"straggler":3}
url-dungeons    15 {"low-contrast":8,"hero-eyebrow-chip":1,"kicker-above-heading":5,"straggler":1}
```

**Totais por regra** (17 varreduras de URL, 624 achados): low-contrast 163, undersized-ui-text 134, kicker-above-heading 114, straggler 80, nested-cards 45, line-length 28, icon-tile-stack 22, unbalanced-heading 12, ai-color-palette 11, hero-eyebrow-chip 11, skipped-heading 4. A varredura do código-fonte soma +1 ai-color-palette.

Os números do celular repetem as mesmas pessoas e problemas do desktop. Muda o seguinte: line-length some, straggler e unbalanced-heading aumentam (raids tem 7 títulos desbalanceados com 390px).

## 3. Verificação dos achados (real ou falso positivo)

### low-contrast (163)
- **Real e sistêmico: `#7116ad` (`--color-gsw`, `app/styles/foundation.css:2`) sobre preto/#09090b dá 2,4:1.** Aparece em todas as rotas, em texto pequeno (kickers `text-xs` com "Guia Oficial", "Primeiros passos", "Lvl 55+" etc.: precisam de 4,5:1), em palavras de destaque dos títulos (`span.text-gsw`: precisam de 3:1) e no próprio h1 "GsW" da home (`components/home/sections/HomeHeroSection.tsx:21`, 128px, 2,42:1 contra os 3:1 exigidos). Conferi no Playwright em estado final, depois da animação: o tema escuro do `/raids` tem **34 elementos de texto** com `#7116ad` sobre `#000` a 2,42:1, e o `/` tem 6. Os tons mais escuros que o detector informou (`#5b138c`, `#561283`, `#440d68`, `#330e4c`, 1,2 a 2,0:1) **inflam o problema**: ele mediu elementos `.reveal-on-scroll` no meio do fade (`app/styles/motion.css:16`, opacidade 0 a 1 em 1000ms). O problema de fundo é real, mas a razão correta é cerca de 2,4:1, não 1,2 a 2,0.
- **Real, mas leve: `#71717b` (zinc-500, `--text-4`) sobre #000 a #121213 dá 3,9 a 4,4:1** em legendas `text-xs`, no rodapé (`div.text-zinc-500.text-xs`, 4,1:1) e nos chips de cargo de /historia. Fica pouco abaixo de 4,5.
- **Falso positivo: `#121212` sobre `#050505` a 1,1:1** em /historia (`div.absolute.right-6`, `components/history/sections/Pillars.tsx:82`). É a numeração decorativa `text-white/5`, uma marca d'água intencional.
- **Provável falso positivo: `#330e4c` 1,2:1** em `span.history-year-emphasis` (o ano decorativo da timeline). É o mesmo artefato do fade. Não confirmei em estado final.

### undersized-ui-text (134)
**Real.** 112 das 134 ocorrências vêm de /historia (56 por viewport): rótulos de 9 a 10px nos cards de membros ("Eterno Líder", "Fundador", "Guild Leader"). Na home são 10 por viewport: "Em destaque" e as tags "Sistema" e "PvE" com 10px. Fica abaixo do piso de 11px. Na home, "Em destaque" junta tamanho de 10px com 2,0:1, o pior caso.

### kicker-above-heading (114) e hero-eyebrow-chip (11)
**Real como padrão.** Todas as páginas internas abrem com o chip "Guia Oficial" em caixa alta espaçada acima do h1, e quase todo h2 tem um kicker. O /raids tem 32. É um tique de layout repetido em escala e, além disso, é exatamente o texto que falha em contraste (`#7116ad` em `text-xs`).

### nested-cards (45)
**Real.** /raids tem 15 por viewport, /lootrun tem 6 a 8 e /leveling tem 1. Exemplo: `article.rounded-2xl.border > div.mt-4.rounded-xl` com borda e fundo próprios dentro de um card com borda.

### straggler (80), line-length (28) e unbalanced-heading (12)
**Reais, baixa prioridade** (tipografia). No desktop, os parágrafos de hero das páginas internas ficam com cerca de 97 a 103 caracteres por linha: `/historia`, `/lootrun`, `/modos-especiais` e `/raids` (10). Faltam `text-wrap: pretty/balance`. A dica de correção é única, global.

### icon-tile-stack (22)
**Real como padrão.** São tiles de ícone de 46 a 64px acima do h3 nos 3 cards da home ("Guias acionáveis"...), nos 5 pilares e nos 3 cards de /historia.

### ai-color-palette (11 URL + 1 fonte)
- `div.hero-tint` da home (gradiente roxo) e h1/h3 roxos em home, lootrun e professions: **real pela regra, mas é a cor da marca** (`--color-gsw`, roxo GsW). Quem decide se é tique ou identidade é a revisão de design. O problema concreto que dá para medir aqui é o contraste, não a cor.
- `Pillars.tsx` com `from-purple-500 to-pink-500`: **real**, porque foge do token da marca.

### skipped-heading (4)
**Real (a11y).** Em /historia, o h2 "Crônicas de Wynn" vai direto para o h4 "As Primeiras Chamas", e o h2 "Além de uma Guilda" vai para o h4 "Conexões Reais". Falta o h3.

### Falsos negativos observados
- overused-font: não disparou. `app/layout.tsx` carrega Geist, mas só aplica a *variável* (`geistSans.variable`). O texto renderiza em `ui-sans-serif, system-ui` (computado no Playwright), então o detector acertou.
- Os brilhos roxos com blur (`Essence.tsx:7`, `WorldEventsAnnihilationSection.tsx:17`, `Pillars.tsx` `bg-gsw/5 blur-[120px]`) não apareceram como radial-halo/dark-glow. Uma opacidade de 5% provavelmente fica abaixo do limiar.

## 4. Navegador: console

Playwright (Chrome do sistema), 12 rotas no tema claro e `/` e `/raids` no escuro: **nenhum erro nem warning de console, e nenhum `pageerror`** em nenhuma rota.

## 5. Tema claro (`localStorage["gsw-theme"]="light"`)

O detector não consegue escrever no localStorage antes de carregar a página. Sem a chave, `app/layout.tsx` cai para `prefers-color-scheme`, e o Chromium headless do detector usa escuro. Por isso **todas as varreduras de URL acima são do tema escuro**. O tema claro foi checado com Playwright (`addInitScript`) depois de forçar `.reveal-on-scroll.visible` e esperar 1,3s.

Razões medidas (composição alpha sobre o fundo calculado):

| rota | h1 | h2 (mín.) | h3 (mín.) | p (mín. / mediana) | elementos abaixo do AA |
|---|---|---|---|---|---|
| / claro | 10,25:1 (`#5f1796`/`#fff`) | 17,03 | 17,03 | 6,86 / 7,58 | 0 de 58 |
| /raids claro | 17,74 | 17,74 | 16,05 | 4,57 / 7,23 | 0 de 412 |
| / escuro | **2,42:1** (`#7116ad`/`#000`) | 21 | 21 | n/d | 6 (todos `#7116ad`) |
| /raids escuro | 21 | 21 | 21 | n/d | 34 (todos `#7116ad`) |

Outras rotas no claro: lootrun, leveling, silverbull, world-events, montarias e festivais têm 0 falhas. Professions tem 35, modos-especiais 2 e dungeons 1, todas `#64748b` (`--text-4`) sobre `#f1f3ff` a **4,31:1** (cabeçalhos de tabela "Nível", "Ingrediente", "Coordenadas" e legendas de imagem `text-xs`). /historia tem 84 (ver abaixo). Conclusão: o tema claro está melhor que o escuro. O `--color-gsw` claro (`#5f1796`) passa com folga.

**Bug real e confirmado visualmente no tema claro: legendas da galeria de /historia ficam ilegíveis.** `components/history/sections/GallerySection.tsx:96`: a sobreposição do hover é `bg-gradient-to-t from-black via-black/40`, que continua preta no tema claro. Já o título `text-white` é remapeado para `#111827` por `app/styles/theme-remaps.css:2` (`.theme-light [class~="text-white"]`). Resultado no hover: título escuro sobre gradiente preto. Confirmei com screenshot ("Anti-Afk" quase invisível). O `p.text-zinc-300` também é afetado (28 ocorrências de `#64748b` sobre `#eaedf2`, cerca de 56 elementos no total, com 2 por card). Screenshot: `<pasta-temporaria>/critB\shot-light-historia-hover.png`.

## 6. Emoji / tofu

No Windows com Chrome, as fontes `"Apple Color Emoji", "Segoe UI Emoji"` estão na pilha e **nada renderizou como tofu**. Fica o risco em clientes sem fonte de emoji colorida (Linux sem Noto Color Emoji, alguns Android antigos). Emojis usados como ícones de UI:

- **/lootrun** (`span.select-none.text-2xl.sm:text-3xl`, quadrados de cor das divisões): 🟦 U+1F7E6, 🟪 U+1F7EA, 🟨 U+1F7E8, 🟧 U+1F7E7, 🟩 U+1F7E9, ⬛ U+2B1B, ⬜ U+2B1C, ◻️ U+25FB+FE0F, 🟥 U+1F7E5, 🌈 U+1F308. Os quadrados coloridos U+1F7E5 a U+1F7EB são do Unicode 12 e são os candidatos mais prováveis a tofu em sistemas antigos.
- **/silverbull-shares** (`span.text-xl`, ícones de lista): ⚔️ U+2694, ⛏️ U+26CF, 💨 U+1F4A8, 💬 U+1F4AC, 💠 U+1F4A0, 📨 U+1F4E8, 🔑 U+1F511, 📦 U+1F4E6, 🌐 U+1F310, 📜 U+1F4DC, 🍄 U+1F344, 🎉 U+1F389, 🟡 U+1F7E1, 🔴 U+1F534, 🔵 U+1F535, 🟢 U+1F7E2.
- Todas as rotas: © U+A9 no rodapé (`div.text-zinc-400.text-[11px].uppercase`). Isso é normal, não é emoji.

Os emojis também aparecem nos payloads `self.__next_f` (RSC). É só serialização, não um problema.

## 7. Etapas puladas

- **Fluxo de overlay `[Human]` (live-server + injeção de detect.js): pulado.** Não há navegador visível para o usuário nesta sessão, e a ordem foi não rodar live-server/live-inject. **Nenhum overlay disponível.** A varredura por URL do CLI (Puppeteer headless) e o Playwright substituíram a evidência do navegador.
- O detector não varre o tema claro (não semeia o localStorage). Isso foi coberto pelo Playwright, só para contraste, console e emoji. O conjunto completo de regras do detector não rodou no claro.
- Mobile (390x844) só nas 5 rotas pedidas. As outras 7 só no desktop.
- Não confirmei em estado final o `#330e4c` da timeline de /historia (provável artefato de fade).

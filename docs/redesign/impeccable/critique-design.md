# Assessment A: Revisão de design (GsW, guia de Wynncraft)

Alvo: build de produção em http://localhost:3100, 12 rotas.
Método: inspeção visual com Playwright e o Chrome instalado. Todas as 12 rotas em desktop escuro (1440x900). Home, Raids, Lootrun, História e Montarias também em mobile (390x844) e no tema claro. Abri os menus Guias, Comunidade e Seções no desktop (escuro e claro) e o menu do celular. Li o código para as causas (Navbar, InPageNavigation, GuideIntro, layout, foundation.css, theme-remaps.css e os arquivos de conteúdo). Avaliação feita antes de ver o detector e sem rodar `impeccable detect`.

---

## 1. Veredito de especificidade de design

**Em grande parte é intercambiável.** O que é deste produto está nas imagens: prints de jogo, GIFs, retratos dos membros e a arte do hero. A casca em volta é um template genérico de "landing page escura com acento roxo". Ela serviria sem mudanças para um curso online, um SaaS ou um servidor de Discord qualquer.

- **A mesma estrutura em todas as páginas.** Cada seção de cada guia repete o mesmo padrão: eyebrow em caixa alta com tracking enorme em violeta, título preto gigante centralizado, parágrafo centralizado e uma grade 2x2 de cards com número fantasma (01, 02, 03, 04) no canto. Aparece em World Events (Mecânicas), Dungeons (Forgery System), Home (Guias acionáveis), História (Pilares) e Leveling (Party). Rolando, não dá para saber em que guia você está sem ler o título.
- **A introdução de cada guia é uma tela inteira vazia.** `GuideIntro` usa `min-h-screen` com fundo quase preto, um título e dois parágrafos centralizados, sem nenhuma imagem do jogo. Raids, Lootrun, Montarias e História abrem com 900px de nada. A primeira imagem do jogo só aparece no segundo viewport.
- **A fonte não tem personalidade porque não é a fonte declarada.** Geist é carregada em `app/layout.tsx` como variável CSS (`--font-geist-sans`), mas nenhuma regra a aplica. O `font-family` computado do `body` e do `h1` é `ui-sans-serif, system-ui` em todas as rotas. No Windows o site renderiza em Segoe UI (Black/Bold), no Android em Roboto e no iOS em SF. A queixa "fonte fraca (Geist)" é real, mas a causa é outra: a identidade tipográfica não existe. Cada sistema operacional escolhe a fonte.
- **Ícones de stroke genéricos em quadrados roxos** (livro, relógio, pessoas, estrela, troféu) nos cards "Guias acionáveis", Pilares e Essência. São o ícone padrão de template de IA. O jogo tem sprites próprios de itens, profissões e modos, e o site usa esses sprites bem em Profissões e Modos Especiais, o que mostra que dá para fazer.
- **O texto da home também é intercambiável:** "Conhecimento de guilda em formato de guia, pronto para usar", "Um hub vivo que acompanha seu ritmo", "Escolha o seu próximo foco", "Nada de texto vazio". Nenhuma dessas frases diz Wynncraft.

**Oportunidades de identidade perdidas:**
- A interface do Wynncraft tem uma linguagem visual forte: tooltips de item com borda roxa e fundo escuro translúcido, fonte pixelada e cores de raridade (Mythic, Fabled, Legendary, Rare, Unique). Os próprios prints do site estão cheios dessa linguagem (Guild Raid Available, Forgery Chest, Dungeon Key). Ela devia virar o sistema de componentes: callouts no formato de tooltip, selos de raridade e coordenadas no estilo do HUD.
- Os emojis dos Beacons e das Bombs estão no lugar dos sprites reais do jogo, que aparecem no print logo acima.
- O violeta da guilda (#7116AD) aparece só como texto fino e escuro sobre preto, onde mal se lê. Ele não é usado como superfície, faixa, borda de tooltip ou brasão.

---

## 2. Heurísticas de Nielsen

Modos: a home é Persuade, os guias são Read e História/Comunidade são Experience/Read. A maior parte do site é Read, então a heurística 7 (eficiência) e a 10 (ajuda) se aplicam: um guia de consulta precisa delas. A heurística 9 se aplica pela página 404.

| # | Heurística | Nota | Problema principal |
|---|-----------|------|-----------|
| 1 | Visibilidade do status do sistema | 2 | O menu ativo (Guias/Comunidade) e o item ativo no dropdown funcionam. O menu "Seções" do desktop não marca a seção atual (só os chips do mobile têm scrollspy). Páginas de 30.000 a 44.000px não têm indicador de progresso nem título da seção fixo. |
| 2 | Correspondência com o mundo real | 2 | Termos do jogo em inglês com texto em pt-BR, como pede o PRODUCT.md. Mas o rótulo "Guia Oficial" em todos os guias (e "Documento Oficial", e a meta description "Guilda oficial GsW") contradiz a condição de site de fã. Os emojis dos beacons mostram cores erradas (Pink aparece roxo, Aqua aparece azul). Há letras corrompidas ("? um investimento", "Peixe e ?leo"). |
| 3 | Controle e liberdade do usuário | 3 | Menus fecham com Esc e com clique fora. Existe "Topo". Imagens ampliáveis. Falta link copiável para uma sala ou raid específica, e o botão Voltar do navegador não volta para a seção (a rolagem é por JS, sem mudar o hash). |
| 4 | Consistência e padrões | 2 | Há dois sistemas de navegação interna: dropdown "Seções" no desktop (≥1280px), sem estado ativo, e barra de chips "Nesta página" abaixo de 1280px, com estado ativo. "Shares" (loja/economia) fica em Comunidade. O menu diz "Lootrun" e o H1 diz "Lootrunning". Listas com bullet ora alinhadas à esquerda, ora com o texto centralizado e o bullet solto (Guild Raids). |
| 5 | Prevenção de erros | 3 | Superfície estática, com pouco a errar. O ponto real: Montarias e Festivais aparecem no menu Guias com o mesmo peso dos guias completos e levam a uma página vazia. |
| 6 | Reconhecer em vez de lembrar | 2 | A estrutura da página fica escondida num dropdown, e só no primeiro nível. "Salas e Bossfights" é um item único para 5 raids e dezenas de salas, então o leitor precisa lembrar onde a TCC fica na rolagem. Todas as abas do navegador têm o mesmo título ("Guardians Of Wynn \| GsW"), então não dá para reconhecer a aba do guia aberto. |
| 7 | Flexibilidade e eficiência | 1 | Sem busca, sem índice por raid ou sala, sem âncoras profundas, sem atalhos. Raids no celular tem 44.211px (cerca de 52 telas). Para chegar à sala 3 da TNA, o único jeito é rolar. |
| 8 | Estética e design minimalista | 2 | Intro de 100vh vazia, números fantasmas que se sobrepõem ao texto dos cards (World Events "01" em cima de "nível do evento"), cards dentro de cards dentro de cards no mobile (raid > sala > POV, com a coluna de texto reduzida a cerca de 270px de 390), eyebrows decorativos em cada bloco. O conteúdo real (prints) é bom e bem enquadrado. |
| 9 | Reconhecer, diagnosticar e se recuperar de erros | 1 | Rota inexistente cai no 404 padrão do Next, em inglês ("This page could not be found."), sem navbar, sem tema e sem caminho de volta para os guias. |
| 10 | Ajuda e documentação | 2 | O site é a documentação, e as legendas dos prints ajudam. Mas o jargão (EHP, Boons, Curses, Pulls, Aspects, Forgery) não tem glossário nem definição na hora, e não há um "por onde começar" para quem é novo no jogo. |
| **Total** | | **20/40** | **Aceitável (50%), no limite de "Ruim"** |

Nenhuma heurística foi marcada n/a: o site é majoritariamente Read, e 7 e 10 contam.

---

## 3. Carga cognitiva (checklist)

| Item | Resultado | Evidência |
|---|---|---|
| Foco único | Falha | Nos guias, o leitor tem que processar ao mesmo tempo o hero vazio, eyebrows, títulos gigantes, cards aninhados e números fantasmas para achar a instrução. |
| Agrupamento em blocos (≤4 por grupo) | Passa parcialmente | As grades 2x2 respeitam o limite. As listas de 11 a 12 Bombs/Tokens e de 9 guias na home, não. |
| Agrupamento visual | Passa | Raid > sala > variação está agrupado (até demais). |
| Hierarquia visual | Falha | Todo H2 de seção tem o mesmo peso enorme ("Como Participar", "Salas e Bossfights", "NOTG"), e a hierarquia raid > sala se perde. O nome da raid (NOTG) é menor que o título genérico "Salas e Bossfights". |
| Uma coisa por vez | Passa | O guia é linear. |
| Poucas opções (≤4) | Falha | O menu Guias tem 9 opções (2 delas vazias). A grade da home tem 9 cards e um card órfão sozinho na última linha. O "Seções" de Raids tem 7. |
| Memória de trabalho | Falha | No meio da raid, o jogador precisa lembrar onde está cada sala, porque o índice não chega até ela. As coordenadas ficam repetidas, e isso é bom. |
| Revelação progressiva | Falha | Raids despeja as 5 raids com todas as salas, POVs e vídeos numa página só. Não há sanfona, abas por raid ou página por raid. |

**Falhas: 5 de 8, carga cognitiva alta.**
Pontos de decisão com mais de 4 opções visíveis: menu Guias (9), grade "Escolha o seu próximo foco" (9), dropdown Seções em Raids (7, incluindo "Topo"), lista de Bombs (12) e de Tokens.

---

## 4. Jornada emocional

- **Primeira impressão (home):** a arte da guilda na mesa redonda com vitrais roxos é o ponto mais alto do site, porque transmite identidade e pertencimento. No tema claro esse momento some: a arte fica lavada de lilás, e o "GsW" violeta e o "Guardians of Wynn" quase desaparecem.
- **Primeiro vale:** logo abaixo vem um bloco de marketing genérico ("Conhecimento de guilda em formato de guia, pronto para usar") e três cards de feature com ícones de template. A promessa de "guia do jogo" esfria e a sensação vira de SaaS. Os guias só aparecem no terceiro viewport do desktop e por volta da quinta tela do celular.
- **Vale mais fundo (entrar num guia):** uma tela inteira escura e vazia com "GUIA OFICIAL" e um título. Para quem chegou com pressa no meio de uma atividade, parece que a página não carregou.
- **Pico real:** os prints e GIFs de jogo (Lootcamps, salas de raid em POV, tooltips de Dungeon Key, sprites de profissões). Aqui o site entrega o que o PRODUCT.md promete.
- **Final (peak-end):** os guias terminam numa seção "Extra" e num rodapé mínimo (GitHub e Discord só como ícones, sem rótulo). Não há "próximo guia", nenhum convite à Comunidade e nenhum aviso de site não oficial. História termina num texto emocional bonito ("ninguém caminha sozinho") e logo depois vem o rodapé, sem botão para o Discord. O momento de maior vontade de entrar na guilda fica sem ação.
- **Tranquilização:** o "Em Desenvolvimento" de Montarias e Festivais é digno no tom, mas ocupa 2 viewports para dizer "não tem nada aqui" e não oferece um próximo passo.

---

## 5. O que está funcionando

1. **Conteúdo visual autoral e de verdade.** Prints próprios, GIFs e POVs com legendas descritivas e coordenadas em destaque ("Localização: -159, 36, -4795. O NPC da raid é o da direita."). É exatamente o diferencial de posicionamento, e as legendas são úteis, não decorativas.
2. **Profissões e Modos Especiais mostram o caminho.** Ali, sprites reais do jogo (ícones de profissão, emblemas de Hardcore, Ironman e Hunted) substituem ícones genéricos, e a página parece "do jogo, não sobre o jogo". Esse padrão precisa se espalhar.
3. **A base técnica de navegação está certa.** Os menus têm `aria-expanded`, `aria-controls`, `aria-current` e fecham com Esc ou clique fora. Os chips "Nesta página" do mobile têm scrollspy e são roláveis. As imagens têm `alt` (0 imagens sem alt nas 12 rotas). Há um único H1 por página. Não há overflow horizontal em 390px.

---

## 6. Problemas prioritários

### [P1] O site se apresenta como oficial e não tem aviso de site de fã
- **O quê:** o eyebrow "Guia Oficial" aparece em todos os guias e em História (`GuideIntro eyebrow="Guia Oficial"` em 10 páginas e em `lootrun-content.ts` e `silverbull-shares-content.ts`). História tem "Documento Oficial". A meta description é "Guilda oficial GsW no servidor Wynncraft", e Montarias/Festivais dizem "Enquanto o conteúdo oficial não é publicado". O rodapé não tem nenhum aviso de site não oficial.
- **Por que importa:** o PRODUCT.md exige "não pode parecer oficial da Wynncraft... precisa manter um aviso de site não oficial". É um risco de marca e de confiança, e é o único item que viola uma restrição explícita do produto.
- **Correção:** trocar o eyebrow por algo verdadeiro e específico ("Guia da GsW", "Escrito pela GsW", ou a categoria: "Endgame · Grupo de 4"). Trocar "conteúdo oficial" por "o guia". Adicionar ao rodapé uma linha: "Site de fã, não afiliado à Wynncraft, Mojang ou Microsoft." Corrigir a meta description.
- **Comando:** `/impeccable clarify`

### [P1] Navegação interna não chega onde o jogador precisa, e há dois sistemas concorrentes
- **O quê:** a barra superior mistura três níveis: área (Início/Guias/Comunidade), guia (dropdown de 9) e seção da página (dropdown "Seções", que só aparece em ≥1280px e no topo, entre os itens globais). Abaixo de 1280px a navbar vira hambúrguer (até em notebook de 1024 a 1279px) e aparece outra navegação, a barra de chips "Nesta página". O índice só lista H2: "Salas e Bossfights" é um item único que esconde 5 raids e todas as salas. Raids tem 32.235px no desktop e 44.211px no celular. As abas não se distinguem porque todo título é "Guardians Of Wynn | GsW".
- **Por que importa:** "A resposta primeiro" é o princípio nº 1. O usuário principal está no meio de uma raid e precisa da sala 3 da TCC agora. Hoje isso exige rolar dezenas de telas. É a queixa de "navegação confusa", e é o maior custo de uso do site.
- **Correção:** (a) tirar "Seções" da navbar global e usar um índice lateral fixo no desktop (coluna esquerda, ≥1024px), com dois níveis (raid > sala), scrollspy e hash na URL (`/raids#tcc-sala-3`). O mesmo componente vira um "Nesta página" recolhível no mobile. (b) Separar Raids em uma página por raid (`/raids/notg` etc.), ou pelo menos abas por raid. (c) Colocar `metadata.title` por rota ("Raids · Guia GsW"). (d) Baixar o breakpoint da navbar desktop para lg (1024px).
- **Comando:** `/impeccable layout` (seguido de `/impeccable clarify` para os rótulos)

### [P1] Tipografia sem identidade: Geist é carregada mas nunca aplicada
- **O quê:** `app/layout.tsx` define `--font-geist-sans`, mas nenhuma regra usa essa variável. O valor computado é `ui-sans-serif, system-ui` em todas as rotas. Os títulos saem em Segoe UI Black no Windows, Roboto no Android e SF no iOS. Os eyebrows têm 10 a 12px, tracking de 0,35 a 0,6em e violeta #7116AD sobre preto.
- **Por que importa:** é a causa da queixa "fonte fraca", e cada visitante vê um site diferente. Além disso, o violeta da marca como texto sobre preto tem contraste de cerca de 2,4:1. Reprova no WCAG AA até para texto grande (3:1). Isso afeta eyebrows, os anos da timeline, "Lvl 55+" e os títulos em destaque ("Guardiões Principais", "próximo foco"), e a timeline usa um violeta ainda mais escuro.
- **Correção:** escolher um par com caráter de RPG/fantasia legível, sem fonte pixelada no corpo. Por exemplo, um display serifado ou de entalhe para H1/H2 e um sans humanista legível em pt-BR para o texto. Aplicar via `@theme { --font-sans: ... }` no Tailwind v4. Para texto violeta sobre fundo escuro, criar um tom claro do violeta (por volta de #B57BE8, ≥4,5:1) e reservar #7116AD para superfícies, bordas e o fundo de botões. Reduzir o tracking dos eyebrows para 0,15 a 0,2em e o tamanho mínimo para 12px.
- **Comando:** `/impeccable typeset`

### [P2] Pouca ligação visual com o jogo: emojis no lugar de itens, e emojis errados
- **O quê:** os Beacons do Lootrun usam quadrados emoji (🟦🟪🟨🟥🟧🟩⬛⬜◻️🌈). Só existem 9 cores de quadrado, então Pink renderiza roxo, Aqua renderiza azul e Rainbow é um arco-íris. No Windows 10 (sem Unicode 12) os quadrados coloridos viram caixas vazias, o que explica a queixa de "emojis quebrados". As Bombs e Tokens de Shares usam ⚔️⛏️💨📨🔑🍄, e "Item Bomb" aparece como envelope. Somam-se letras corrompidas no conteúdo ("? um investimento" em `leveling-content.ts` L77 e L107, "? um conteúdo opcional" em `professions-content.ts` L35, "Peixe e ?leo" em L96, por perda de "É" e "Ó") e "Secao" sem acento em legenda de Shares.
- **Por que importa:** identificar a cor do beacon é a informação que o jogador está procurando. Uma cor errada é um bug de conteúdo, não só de estética. E o princípio 2 ("Do jogo, não sobre o jogo") fica contradito justamente nos pontos onde o sprite real existe.
- **Correção:** trocar os emojis por sprites do jogo (os PNGs de beacon, bomb e token, como já foi feito em Profissões e Modos) ou, no mínimo, por swatches CSS com a cor exata do beacon e o nome escrito. Corrigir os 4 caracteres corrompidos e revisar a codificação UTF-8 dos arquivos de conteúdo.
- **Comando:** `/impeccable polish` (sprites e callouts no estilo tooltip pedem `/impeccable bolder`)

### [P2] Tema claro é uma inversão automática que apaga a marca e o jogo
- **O quê:** o tema claro é um conjunto de `!important` em `theme-remaps.css` que troca as classes Tailwind escuras por um lilás-azulado frio (#f8f8fc, #f1f3ff e texto slate #475569). A arte do hero recebe um véu lilás e o "GsW" violeta some sobre o vitral roxo. Os cards viram painéis lavanda de SaaS. Os prints de jogo, escuros e saturados, ficam como recortes pesados sobre o fundo claro. Os anos da timeline ficam em lilás claro de baixo contraste.
- **Por que importa:** é a queixa de "modo claro feio". O carvão #191819 da marca não aparece em nenhum dos dois temas, e o claro não é uma interpretação da marca, é uma remoção dela. Remapeamento por `!important` também quebra a cada componente novo (princípio 3, "crescer sem quebrar").
- **Correção:** definir os dois temas por tokens semânticos (`--surface`, `--ink`, `--accent`, `--accent-ink`) usados pelos componentes, sem remapear classes. No claro, usar um pergaminho quente (bege e cinza papel) com tinta carvão #191819 e violeta como acento: lembra a página de livro e o mapa do jogo, não um dashboard. Manter o hero sempre escuro. Avaliar se o tema claro precisa existir, já que o público joga com o jogo aberto.
- **Comando:** `/impeccable colorize`

---

## 7. Sinais de alerta por persona

**Jordan (primeira visita, novo no Wynncraft)**
- A home leva 3 viewports até mostrar os guias. O único botão do bloco principal é "Explorar conteúdos", que é secundário (contorno) e não diz para onde vai.
- Não existe "comece por aqui". Os guias estão ordenados como Lootrun, Raids, Leveling..., ou seja, endgame primeiro.
- Jargão sem definição: EHP, Boons, Curses, Pulls, Aspects, Forgery, "HUIC(H)".
- Clica em "Montarias" no menu (mesmo peso que os outros guias) e cai numa página vazia de duas telas.
- Uma URL errada mostra um 404 em inglês, sem navbar e sem saída.

**Casey (celular, uma mão, interrompida)**
- Raids tem cerca de 52 telas de altura. Se a página recarrega ou a pessoa volta pelo histórico, a posição se perde, porque a rolagem é por JS e não grava o hash.
- Os chips "Nesta página" têm 30px de altura (Topo 53x30, Extra 53x30), abaixo dos 44px.
- O hambúrguer e o tema ficam no topo da tela, fora da zona do polegar. O índice de seções também fica no topo.
- Os cards aninhados (raid > sala > POV) apertam o texto numa coluna de cerca de 270px, e cada POV abre um vídeo grande.
- O hero da home ocupa a primeira tela inteira só com a logo.

**Sam (leitor de tela, teclado, baixa visão)**
- Contraste: violeta #7116AD sobre preto tem cerca de 2,4:1 em eyebrows (10 a 12px), níveis "Lvl 55+", anos da timeline e títulos em destaque. Os números fantasmas são decorativos, mas se sobrepõem ao texto.
- Os links de GitHub e Discord no rodapé são só SVG, sem `aria-label`: o leitor de tela anuncia "link" sem nome.
- Os itens do dropdown "Seções" são `button` com `role="menuitem"`, sem as setas de navegação esperadas de um `role="menu"`. O correto seria uma lista de links (`nav` + `a href="#..."`), que também resolve o deep link.
- Foco: só o anel padrão do navegador (`outline: auto 1px`), em branco no escuro e preto no claro. Nada aparece sobre os cards escuros com borda.
- O anúncio dos emojis de beacon no leitor de tela ("quadrado azul grande" para Aqua) contradiz o texto.
- `reveal-on-scroll` começa com opacidade 0 e deslocamento de 36px, e `motion.css` não tem `prefers-reduced-motion` (só history-effects e leveling-effects têm).

**Persona do projeto: "Rafa", jogador brasileiro no meio de uma raid, consultando a sala no segundo monitor**
- **Perfil:** nível 100+, em party de 4 na TCC ou TNA, com o jogo em tela cheia no monitor principal e o guia aberto no segundo. Tem de 5 a 10 segundos entre ondas para olhar.
- **Comportamento:** quer abrir direto a sala atual, ler 2 ou 3 bullets e o macete, e voltar ao jogo. Deixa várias abas abertas (Raids, Lootrun) e alterna com Alt+Tab.
- **Sinais de alerta:**
  - Não existe link para "TCC, sala 2". O Seções leva só a "Salas e Bossfights", e a partir daí é rolagem manual por milhares de pixels.
  - Todas as abas se chamam "Guardians Of Wynn | GsW": no segundo monitor, com 3 abas, não dá para achar a de Raids.
  - Cada sala abre com título, parágrafo e card de variação, e as instruções acionáveis ficam no terceiro nível de aninhamento, em texto cinza #a1a1aa de 14 a 16px.
  - O vídeo POV é o melhor conteúdo, mas fica no fim de cada variação, depois de toda a lista de texto.
  - Ao voltar para a aba depois de uma onda, nada indica em que sala ele estava (não há scrollspy no desktop).

---

## 8. Observações menores

- A grade "Escolha o seu próximo foco" tem 9 cards em 4 colunas, e "História da GsW" fica sozinha na terceira linha. Montarias e Festivais não aparecem na grade mas aparecem no menu.
- Card de BadBoyCJ (fundador, "Eterno Líder") é um quadrado roxo com a letra "B" gerada em SVG: o membro mais importante tem o pior retrato. Se não há imagem, um brasão ou uma moldura memorial resolveria melhor.
- Em Guild Raids, os bullets ficam à esquerda e o texto centralizado, então o marcador fica solto da frase.
- Os números fantasmas (01, 02...) se sobrepõem às últimas palavras dos cards em World Events, Home e Pilares.
- Legenda "Secao de bombs na loja in-game" sem acento. "Pre-requisitos" sem acento no card de Raids da home.
- "Lootrun" no menu e "Lootrunning" no H1. "Shares" no menu e "Silverbull Shares" na URL.
- A logo na navbar não é link para a home.
- "Shares" é guia de economia e está classificado em Comunidade junto com História.
- Membros e Galeria vivem dentro de História, sem entrada própria no menu, enquanto o PRODUCT.md trata a Comunidade como "história, membros e galeria".
- O rodapé mostra "Desenvolvido por Francisco" com mais destaque que a própria GsW e o Discord, que é o principal CTA da guilda.
- O tracking de 0,35 a 0,6em nos eyebrows ("P R I M E I R O S   P A S S O S") prejudica a leitura em pt-BR, sobretudo com acentos.
- O `text-wrap` padrão deixa viúvas nos títulos grandes ("Um hub vivo que / acompanha seu ritmo").
- No tema claro, o card de print (Guild Raid Available) fica como um bloco preto sobre fundo branco, sem moldura que o integre.

---

## 9. Perguntas para provocar

- E se cada guia abrisse direto no índice ("o que você está fazendo agora?") em vez de uma tela de apresentação? O que se perde se a intro de 100vh sumir de vez?
- E se Raids fosse 5 páginas curtas, uma por raid, com as salas como abas, em vez de uma página de 44.000px?
- Como seria um callout que imita o tooltip do Wynncraft (borda roxa, fundo translúcido, nome do item em cor de raridade) aplicado às coordenadas, requisitos e macetes? Isso não daria identidade ao site inteiro sem fingir ser oficial?
- O tema claro precisa existir? Quem consulta com o jogo aberto, à noite, num segundo monitor, pediu isso?
- Se a GsW se apresenta "pelo trabalho", por que o fim de cada guia não tem uma linha como "Escrito pela GsW. Tire dúvidas no nosso Discord"?
- Precisa de uma home com pitch de marketing, ou a home devia ser o próprio índice do guia, com a arte da guilda como moldura?

---

## 10. Notas por página

**/ (Início, Persuade).** O hero com a arte da guilda é o melhor momento de marca do site, mas ocupa a tela inteira só com a logo e não tem CTA. Abaixo, o texto genérico e os três cards com ícones de template derrubam a identidade. Os guias só aparecem no terceiro viewport, numa grade de 9 com card órfão, sem Montarias e Festivais e sem caminho "por onde começar". No celular, os guias aparecem por volta da quinta tela. No tema claro, a arte fica lavada e o "GsW" some.

**/historia (Experience).** Página com voz própria e emocional: a timeline com os anos, os retratos dos membros e a galeria são autênticos. Mas abre com 100vh de texto sobre preto, rotulada "Guia Oficial" e "Documento Oficial". Os anos da timeline estão em violeta quase invisível. O retrato do fundador é um "B" genérico. O texto final ("ninguém caminha sozinho") termina sem botão para o Discord, que é o melhor ponto de conversão do site.

**/leveling (Read).** Bom formato para spots: card com nome, faixa de nível, coordenadas em `mono` à direita, bullets e print ao lado. É o modelo que os outros guias deviam seguir. Tem dois "?" corrompidos ("? um investimento", "? o primeiro spot"). Os cards de "Party" são centralizados com número fantasma, puro template. A página tem cerca de 16.500px e falta um índice por faixa de nível.

**/professions (Read).** A página mais "do jogo": os sprites reais de cada profissão e de cada ferramenta, e os selos de recursos combinados, funcionam bem. Tem "Peixe e ?leo" e "? um conteúdo opcional" corrompidos. Os selos "Foice", "Vara de Pesca" e "Picareta" em violeta escuro sobre preto têm contraste baixo.

**/montarias (Read, em construção).** Duas telas para dizer "em desenvolvimento". Repete "Guia Oficial" e "conteúdo oficial". Não tem próximo passo (guia relacionado, Discord para sugerir conteúdo). Devia ser uma faixa compacta, e o item no menu devia ter um selo "em breve" ou não aparecer.

**/festivais (Read, em construção).** Idêntica a Montarias, com os mesmos problemas. Dois placeholders iguais no menu Guias ocupam 2 de 9 opções.

**/lootrun (Read).** Conteúdo rico: Lootcamps com coordenadas, dificuldade e prints grandes, e a seção de Desafios com 4 prints legendados. Página de cerca de 30.000px. Os emojis dos Beacons mostram cores erradas (Pink e Aqua) e quebram no Windows 10. O H1 "Lootrunning" diverge do menu. Os prints grandes (cerca de 980x550) empurram a próxima informação para longe, e uma galeria de miniaturas ampliáveis reduziria a rolagem pela metade.

**/silverbull-shares (Read).** Guia útil de economia, mas está em "Comunidade" no menu. As 12 Bombs e os Tokens usam emojis genéricos (envelope para Item Bomb, picareta com fumaça para Speed Bomb) justo abaixo de um print que mostra os sprites reais. Legenda "Secao" sem acento. Os cards de Bundles com eyebrow violeta repetem o template.

**/modos-especiais (Read).** Boa: os emblemas pixelados reais de cada modo no título do card dão identidade imediata, e as regras ficam em bullets curtos. O eyebrow "Comunidade" na seção "Combinações e Desafio" confunde com a área Comunidade do menu. O print "Todos os modos de jogo" está bem integrado.

**/world-events (Read).** Página curta e clara, mas a seção "Mecânicas" é o template 2x2 com texto centralizado e números fantasmas sobrepondo o texto, e tem "? importante saber" corrompido no card Party. O vídeo do Annihilation com "PLAY" sobre um frame quase preto parece um bloco vazio. Um poster melhor resolveria.

**/raids (Read, a página mais importante para o uso no meio da partida).** O melhor conteúdo do site: cards por raid com nível, quest, coordenadas e runa, mais POVs e variações por sala. Mas tem 32.000px no desktop e 44.000px no celular, sem índice por raid ou sala. Os cards ficam aninhados em 3 níveis, o nome da raid ("NOTG") é menor que o título genérico, e os bullets de Guild Raids ficam desalinhados. É a página que mais ganha com uma página por raid e um índice lateral com scrollspy.

**/dungeons (Read).** Os prints de Dungeon Key e Forgery Chest são o tipo de imagem que define a linguagem visual que o site devia adotar. O resto repete o template (Forgery System em 2x2 com números fantasmas, eyebrows "Desafio Máximo" e "Loja Exclusiva"). Tamanho razoável (cerca de 6.900px). Falta uma tabela com as 8 dungeons (nível, coordenada, chave) para consulta rápida.

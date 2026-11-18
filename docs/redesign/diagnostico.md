# Diagnóstico do front (Impeccable)

Avaliação de 18/11/2026 sobre o build de produção da `main` (commit `f8063b4`), nas 12 rotas,
em 1440 px e 390 px, nos temas escuro e claro. Só relatório: nada foi corrigido.

Método: `/impeccable critique` com as duas avaliações isoladas que ele exige, (A) revisão de
design e (B) detector e navegador, mais o `/impeccable audit` técnico, com Lighthouse e
Playwright. Os relatórios completos estão em `impeccable/`:

| Relatório | Nota |
|---|---|
| `impeccable/critique-design.md`: heurísticas, carga cognitiva, jornada, personas, notas por página | **20/40**, Aceitável (50%), no limite de Ruim |
| `impeccable/critique-detector.md`: 624 achados em 17 varreduras, verificados um a um | — |
| `impeccable/audit.md`: acessibilidade, desempenho, tema, responsivo, integridade | **11/20**, Aceitável |

## Veredito

**O conteúdo é da GsW; a casca é de qualquer um.** Prints, GIFs, POVs de raid e retratos da
guilda são autorais e são o melhor do site. Em volta deles há um template escuro genérico, que
serviria igual para um curso online:

- todo guia abre com uma tela inteira vazia, só com o chip "Guia Oficial" e um título;
- em cima de quase todo título vem um rótulo pequeno espaçado (114 vezes) e um ícone de traço num
  quadrado roxo (22 vezes);
- há cards dentro de cards (15 em Raids) e números gigantes apagados no canto dos cards.

A revisão de design e o detector chegaram a isso separados.

## As cinco queixas, conferidas

| Queixa | Confirmada? | Causa encontrada |
|---|---|---|
| Fonte fraca | Sim | A Geist é carregada mas **nunca aplicada**: o texto sai em `system-ui`, então cada sistema mostra uma fonte (Segoe UI no Windows, Roboto no Android). Não existe identidade tipográfica |
| Emojis quebrados | Sim | 27 linhas com emoji no lugar de ícone. São 13 beacons do Lootrun, com 3 pares de cores iguais: Blue/Aqua, Purple/Pink, Red/Crimson. Também 12 bombas e 4 tokens do Shares. Os quadrados coloridos são do Unicode 12 e viram caixas sem fonte de emoji (Windows 10, Linux, Android antigo). Há ainda **8 "?" no lugar de "É" e "Ó"** e um bloco inteiro do Shares sem acentos |
| Navegação estranha | Sim | Área, guia e seção na mesma barra. Há dois sistemas de seções: dropdown sem seção atual a partir de 1280 px e chips abaixo disso. O índice só tem o primeiro nível ("Salas e Bossfights" esconde 5 raids). Não há link para uma sala, e todas as abas do navegador têm o mesmo título |
| Modo claro feio | Sim | É uma inversão por `!important` (`theme-remaps.css`) em lilás-azulado frio, que não usa o carvão da marca e lava a arte do hero. Cria texto escuro sobre fundo preto nas legendas da galeria e da home |
| Pouca ligação com o jogo | Sim | Os sprites e a linguagem da caixa de item do jogo aparecem nos próprios prints, mas não na interface. Profissões e Modos Especiais já usam sprites e mostram que funciona |

## Prioridades

Ordem de impacto, unindo as três avaliações.

| # | Sev. | Problema | Onde | Fonte |
|---|---|---|---|---|
| 1 | **P0** | `/lootrun` baixa 5,5 MB ao abrir e **112 MB** rolando até o fim: 16 GIFs de 3 a 10 MB e WebP sem redimensionar, tudo `unoptimized` | `LootrunMediaPlaceholder.tsx:76` | audit |
| 2 | P1 | **O site se diz oficial e não tem aviso de site de fã**: "Guia Oficial" em 11 páginas, "Documento Oficial" na História, "Guilda oficial" na meta description. Fere as regras da Mojang e o `PRODUCT.md` | `GuideIntro`, `layout.tsx` | design |
| 3 | P1 | O violeta da marca é usado como texto e dá 2,0 a 2,4:1. São 49 rótulos e destaques, 34 elementos reprovados só em `/raids` | `foundation.css:2` | os três |
| 4 | P1 | A navegação interna não chega à sala, e há dois sistemas de seções concorrentes. Raids tem 44 mil px no celular (cerca de 52 telas) | `Navbar.tsx`, `InPageNavigation.tsx` | design |
| 5 | P1 | Fonte declarada nunca aplicada | `app/layout.tsx` | design, detector |
| 6 | P1 | Galeria de `/historia` não abre pelo teclado (miniaturas são `div` com clique); modais não movem nem prendem o foco | `GallerySection.tsx:84-88` | audit |
| 7 | P1 | Menu do celular fechado continua no Tab, com links invisíveis | `Navbar.tsx:369-375` | audit |
| 8 | P1 | LCP da Início de 8,0 s: fundo do hero de 1,1 MB por `background-image` | `HomeHeroSection.tsx:12-15` | audit |
| 9 | P1 | Animação ignora `prefers-reduced-motion`; todo `div` e `li` anima e o texto é lido no meio do fade | `motion.css`, `AnimationInitializer.tsx` | audit, detector |
| 10 | P2 | Tema claro: legendas escuras sobre preto (galeria, home); cinzas de 4,3:1 em tabelas | `theme-remaps.css` | detector, audit |
| 11 | P2 | Texto de 9 a 10 px (cargos dos membros, tags da home); saltos de H2 para H4 na História | `MembersSection`, `History.tsx` | detector |
| 12 | P2 | 404 padrão do Next, em inglês, sem navegação | — | design |
| 13 | P2 | Ícones do rodapé sem nome acessível; alvos de toque de 20 a 32 px | `Footer.tsx`, `Navbar.tsx` | audit |

## O que já funciona

- **Conteúdo próprio de verdade**: 35 POVs de raid sala a sala, GIFs de cada mecânica do
  Lootrun, coordenadas, opinião da guilda ("Dica GsW"). Nenhum outro guia em pt-BR tem isso.
- **Sem erros de console**, sem rolagem horizontal a 390 px nas 12 rotas, foco visível nativo
  preservado, menus do desktop fecham com Esc e devolvem o foco.
- **Desempenho bom fora da mídia**: Lighthouse no celular de 91 a 94 em Raids, Lootrun e
  História; acessibilidade de 90 a 92; boas práticas e SEO em 100.
- Arquitetura de conteúdo (`pages/` + `sections/` + `data/`) que facilita trocar a casca sem
  mexer no texto.

## Lighthouse (celular simulado)

| Rota | Desempenho | Acessibilidade | Boas práticas | SEO | LCP | Peso ao abrir |
|---|---|---|---|---|---|---|
| `/` | 75 | 92 | 100 | 100 | 8,0 s | 1.467 KiB |
| `/lootrun` | 92 | 92 | 100 | 100 | 3,2 s | 5.592 KiB (112 MB rolando) |
| `/raids` | 91 | 92 | 100 | 100 | 3,0 s | 543 KiB |
| `/historia` | 94 | 90 | 100 | 100 | 3,0 s | 314 KiB |

## Detector: falsos positivos descartados

- Numeração decorativa `text-white/5` nos Pilares: marca d'água intencional.
- Valores de contraste de 1,2 a 2,0:1 medidos no meio da animação; o número real, com a animação
  terminada, é cerca de 2,4:1 (continua reprovado).
- Violeta da marca marcado como "paleta de IA": é a cor da guilda. O problema é usá-lo como texto,
  não a cor.

## Conteúdo

O inventário completo, área por área, está em `inventario-conteudo.md`. Em resumo: Raids e
Lootrun são excelentes, mas têm dados desatualizados (níveis da TCC, tabela de beacons, gambits);
Dungeons não tem a lista de dungeons; Montarias e Festivais estão vazios; há acentos quebrados e
restos de rascunho no texto publicado.

## O que não foi testado

Leitor de tela real, dispositivo físico, gesto de toque sintetizado, zoom de texto a 200%, varredura
completa do detector no tema claro (só contraste por Playwright) e o fim da página de Lootrun
(30 mil px) inteiro na revisão visual.

## Como isto vira trabalho

O diagnóstico não é corrigido página a página na casca atual: a direção em `direcao-visual.md`
substitui a casca, e cada achado acima tem endereço nela (fonte aplicada, violeta só como
preenchimento, índice com etapas, só escuro, mídia em vídeo, aviso de site de fã). Os achados que
sobrevivem a qualquer direção (teclado na galeria, menu do celular no Tab, foco nos modais, 404,
peso do Lootrun) entram como critério de aceite da Fase 3.

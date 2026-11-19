# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primários:** jogadores brasileiros de Wynncraft (MMORPG dentro do Minecraft), do iniciante ao endgame, que procuram em português como fazer uma atividade do jogo (Lootrun, Raids, Dungeons, Profissões, Leveling...). Leem com o jogo aberto ou entre sessões, muitas vezes no celular ou num segundo monitor.
- **Secundários:** membros da guilda GsW (Guardians of Wynn), que usam os guias como referência e a área de Comunidade para ver a história, os membros e a galeria da guilda.

## Product Purpose

Ser o guia do Wynncraft em português mais completo e fácil de ler, mantido pela GsW. A guilda aparece como quem mantém o guia: o site atrai membros de forma indireta, pela qualidade do conteúdo, e não por uma página de recrutamento.

Sucesso: o jogador encontra rápido a resposta para a atividade que está fazendo, entende sem precisar de outra fonte e volta para o próximo guia; quem conhece a guilda pelo guia tem um caminho claro até a Comunidade e o Discord.

## Positioning

Guia em pt-BR, escrito por jogadores de uma guilda ativa, com prints e vídeos próprios de quem fez as atividades (ex.: salas de raid em POV, GIFs de Lootrun). As fontes oficiais e a wiki são em inglês e enciclopédicas; aqui o conteúdo é resumido, comentado e organizado como passo a passo.

## Operating Context

- Leitura longa de guia, com consulta rápida a seções específicas (sala de uma raid, beacon do Lootrun) durante a partida.
- Termos do jogo ficam em inglês quando são o nome oficial (Lootrun, Beacon, Raid, Aspect); o texto ao redor é em português.
- Fontes de referência do conteúdo: wynncraft.com, o item guide oficial e a wiki wynncraft.wiki.gg (textos reescritos, nunca copiados; créditos em `docs/CREDITOS.md`).

## Capabilities and Constraints

- Site estático (Next.js, todas as rotas pré-renderizadas), hospedado na Vercel; sem back-end, login, banco ou busca no servidor.
- Conteúdo em arquivos de dados no repositório (`components/<area>/data/*-content.ts`), editado só pelo desenvolvedor por enquanto.
- Só pt-BR; sem plano de tradução.
- Site de fã, não oficial: não pode parecer oficial da Wynncraft, Mojang ou Microsoft, nem usar as marcas delas como se fossem próprias; precisa manter um aviso de site não oficial.
- Mídia em `public/` precisa ficar leve (hoje 167 MB, 91 MB só em GIFs).
- O guia vai crescer aos poucos até cobrir o jogo todo; páginas sem conteúdo ainda (Montarias, Festivais) precisam ter um estado de "em construção" digno.

## Brand Commitments

- Nome: GsW, Guardians of Wynn.
- Logo: `public/icon.webp` (emblema roxo sobre carvão).
- Cores da guilda: violeta `#7116AD` e carvão `#191819` (medidos na logo e no dashboard da guilda).
- Comunidade no Discord (link no rodapé).

## Evidence on Hand

- Guias com conteúdo real: Lootrun, Raids (NOTG, NOL, TCC, TNA, TWP), Dungeons, World Events, Profissões, Leveling, Modos Especiais, Silverbull Shares.
- Prints, GIFs e vídeos próprios em `public/<area>/`; vídeos de raid no YouTube.
- História, pilares, membros (27 retratos) e galeria (28 imagens) da guilda em `components/history/data/` e `public/members/`, `public/gallery/`.
- Não há depoimentos, números de membros ativos, estatísticas de acesso nem prêmios: não inventar.

## Product Principles

1. **A resposta primeiro.** Quem chega num guia está no meio de uma atividade; estrutura, índice e títulos levam direto ao trecho que importa.
2. **Do jogo, não sobre o jogo.** Prints, itens e termos reais do Wynncraft dão a sensação de estar no jogo, sem fingir ser oficial.
3. **Crescer sem quebrar.** Toda página nova segue o mesmo modelo de guia, para o site ficar completo aos poucos e continuar coerente.
4. **A guilda pelo trabalho.** A GsW se apresenta pela qualidade do guia e por uma Comunidade viva, não por propaganda.
5. **Leve no celular.** O guia é consultado com o jogo aberto; peso de mídia e animação não podem atrapalhar.

## Accessibility & Inclusion

Sem requisito formal confirmado. Mínimo do projeto: WCAG 2.1 AA (contraste, foco visível, navegação por teclado, `alt` em imagens) e respeito a `prefers-reduced-motion`.

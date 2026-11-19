# Fontes, licenças e imagens de itens

Levantamento de 18/11/2026. O registro permanente do que o site usa fica em `docs/CREDITOS.md`;
aqui estão as opções, os riscos e a recomendação para aprovação. Não é parecer jurídico.

## Resumo

| Fonte | Pode | Não pode | Risco |
|---|---|---|---|
| Minecraft (Mojang/Microsoft) | Nome como descrição secundária; prints próprios | Logo, fonte ou estilo do logo; "Minecraft" como nome do site; texturas extraídas do jogo; arte oficial; parecer oficial | Baixo, com o aviso no rodapé e um contato real |
| Wynncraft (ToS e API) | Dados da API baixados no build; nome descritivo; prints próprios (sem regra escrita, prática tolerada) | Copiar, derivar ou espelhar materiais do site; burlar rate limit; mostrar dado restrito de jogador | Baixo para prints e dados; médio para ícones da CDN (sem licença escrita) |
| Wiki (wynncraft.wiki.gg) | Ler fatos e linkar | Copiar ou adaptar texto (CC BY-NC-SA 4.0: não comercial e mesma licença); usar imagens (não são CC: "© Wynncraft" e "© Mojang") | Zero, se só linkarmos |
| CDN oficial de itens | Ícones de itens, aspects, classes | Espelhar a biblioteca; alterar as imagens | Médio: tolerado pela comunidade, não autorizado |
| Lucide | Todos os ícones de interface | — | Zero (ISC) |
| game-icons.net | Ícones de classe, arma, chefe | Usar sem crédito | Zero, com crédito (CC BY 3.0) |
| Faithful | Texturas de itens vanilla | Paywall; parecer oficial | Zero, com crédito; não cobre itens do Wynncraft |

## O que a Mojang exige do site

Fan site conta como uso comercial para a Mojang, mesmo sem cobrar nada. Por isso:

1. Aviso visível de que o site **não é oficial** e não tem aprovação nem associação com a Mojang
   ou a Microsoft (texto em `docs/CREDITOS.md`).
2. Dizer **quem mantém** o site e dar um **contato real**. A página da Mojang diz que link de chat
   ou fórum não basta. **Decisão sua:** um e-mail da guilda ou um formulário.
3. O ícone e o título do site são da GsW; nada de letreiro no estilo do logo do Minecraft.

## Texto: por que não adaptar a wiki

O texto da wiki é CC BY-NC-SA 4.0. Adaptar exige crédito, uso não comercial e publicar o
resultado com a mesma licença, o que prenderia o guia da GsW a essa licença. Escrever com as
próprias palavras e linkar a página consultada evita isso, e os fatos do jogo (números, nomes,
requisitos) não são protegidos. Regra: cada guia termina com uma seção **Fontes**.

## Imagens e ícones de itens

| # | Opção | Como | Licença | Recomendação |
|---|---|---|---|---|
| 1 | **Prints e GIFs próprios** | Tirados no jogo pela guilda | Próprios | **Principal.** São o diferencial do site (POVs de raid, Lootrun) |
| 2 | **Ícones da CDN oficial** | `cdn.wynncraft.com/nextgen/itemguide/3.3/<nome>.webp`, nome vindo do campo `icon.value.name` da API v3 (ex.: `wand.air3`); armadura segue outro padrão (`diamond_leggings.webp`) | Sem licença escrita; tolerado | **Usar com moderação**: só os itens exibidos, sem alterar, com crédito "Imagens de itens © Wynncraft Studios", cache só do que a página usa. O Leveling já faz isso hoje (`buildLevelingItemGuideIconUrl`) |
| 3 | **Dados de itens da API** | `GET /v3/item/database?fullResult` no build (uma chamada, dentro do limite) | Termos da API | **Sim**, para cartões de item (nome, raridade, nível, tipo) gerados no build |
| 4 | Outros ícones da CDN | Aspects (`/abilities/2.1/aspects`), arquétipos, ícones de classe (`/classes/icons/artboards`) | Igual à opção 2 | Mesmo cuidado da opção 2 |
| 5 | **Ícones de categoria** | Lucide para interface; game-icons.net para classes, armas e chefes, com SVG copiado para o repositório | ISC; CC BY 3.0 | **Sim**: substituem os emojis com cor e alinhamento controlados |
| 6 | Faithful | Download do pack | Faithful v4, com crédito | Só se precisarmos de itens vanilla (ferramentas, blocos) |
| 7 | Imagens da wiki | — | Não são CC | **Não usar** |
| 8 | Texturas extraídas do .jar do Minecraft | — | Proibido redistribuir | **Não usar** |

Para eliminar o risco das opções 2 e 4, a pendência é pedir permissão por escrito à Wynncraft pelo
Discord de desenvolvedores (`docs.wynncraft.com`).

### Cores de raridade

As cores de raridade do jogo (Normal, Unique, Rare, Legendary, Fabled, Mythic, Set, Crafted) seguem
os códigos de cor do Minecraft. Só a do Mythic (roxo) foi confirmada na pesquisa; as outras serão
conferidas no jogo antes de virarem tokens.

## Fontes de conteúdo para o guia completo

| Área | Onde conferir |
|---|---|
| Visão geral e notícias | https://wynncraft.com/news (changelogs desde 17/11/2026), https://wynncraft.wiki.gg/wiki/Version_history |
| Itens | https://wynncraft.com/help/item-guide, API v3 (`docs.wynncraft.com`) |
| Classes | https://wynncraft.com/help/classes, wiki: Classes, Archetypes, Ability_Tree |
| Mapa | https://map.wynncraft.com, wiki: Wynn_Province, Gavel_Province, Silent_Expanse, Fruma_Province |
| Demais áreas | Página correspondente da wiki, listada em `estrutura-do-guia.md` |

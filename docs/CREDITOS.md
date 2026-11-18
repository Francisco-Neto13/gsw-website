# Créditos, fontes e licenças

Registro permanente do que o site usa de terceiros, com que licença e com que crédito. Toda fonte,
imagem, ícone ou fonte tipográfica nova entra aqui no mesmo PR que a introduz.

Conferido em 18/11/2026 (jogo na versão 2.2.4, expansão 2.2.0 "Fruma"; API Wynncraft v3.7.2).
Não é parecer jurídico.

## Regras do site

1. **Site de fã, não oficial.** O rodapé de todas as páginas mantém o aviso abaixo e um contato
   real (e-mail ou formulário; link de Discord não basta para a Mojang). O endereço fica em `contatoEmail`, em `lib/site-content.ts`.
2. **Texto próprio.** Nenhum texto é copiado da wiki, do site oficial ou de outro guia. Fatos do
   jogo (números, nomes, requisitos) são reescritos com as nossas palavras, e a página aponta para
   a fonte original na seção "Fontes" do guia.
3. **Imagens próprias primeiro.** Prints, GIFs e vídeos feitos pela guilda são a primeira escolha.
   Imagem de terceiro só entra se a linha dela nesta página permitir, com o crédito pedido.
4. **Sem marcas alheias como se fossem nossas.** Nada de logo, fonte ou estilo de letra do
   Minecraft, da Mojang, da Microsoft ou da Wynncraft no branding, no ícone ou nos títulos do site.
   "Minecraft" e "Wynncraft" só aparecem de forma descritiva ("guia de Wynncraft, servidor de
   Minecraft"), nunca como nome do site.

### Aviso de site não oficial (texto do rodapé)

> GsW é um site de fãs. Não é um site oficial do Minecraft. Não aprovado por nem associado à
> Mojang ou à Microsoft. Não afiliado à Wynncraft Studios. Wynncraft e seus assets © Wynncraft
> Studios. Contato: *(definir: e-mail ou formulário)*.

## Fontes de conteúdo

| Fonte | Licença / termos | Como usamos | Crédito |
|---|---|---|---|
| [Minecraft Usage Guidelines](https://www.minecraft.net/en-us/usage-guidelines) | Fan site conta como uso comercial para a Mojang | Nome "Minecraft" só descritivo; prints próprios de gameplay | Aviso de site não oficial no rodapé |
| [Wynncraft — Termos de Serviço](https://wynncraft.com/tos) (18/05/2026) | Licença só pessoal e não comercial; proíbe copiar, derivar e espelhar. Não há política de fan site, logo ou screenshots | Prints próprios (prática tolerada); nenhum asset do site copiado em massa | "Wynncraft e seus assets © Wynncraft Studios" no rodapé |
| [Wynncraft — Termos da API](https://wynncraft.com/api-terms) (18/05/2026) | Sem cláusula de atribuição; respeitar rate limit (50 req/min sem token) e privacidade dos jogadores | Dados de itens, guildas e territórios baixados **no build**, nunca do navegador do visitante | "Dados: API pública da Wynncraft" na página que os usa |
| [Wynncraft Wiki](https://wynncraft.wiki.gg/) | Texto **CC BY-NC-SA 4.0** (rodapé da wiki; a página Copyrights ainda diz 3.0). Imagens **não** são CC: ~14,5 mil arquivos "© Wynncraft" e ~326 "© Mojang" | Referência de fatos; link na seção "Fontes" de cada guia. **Texto não é copiado nem adaptado** (evita a cláusula NC e o ShareAlike). Imagens da wiki não são usadas | Link para a página consultada |
| [Item guide oficial](https://wynncraft.com/help/item-guide) | Mesmos termos do site oficial | Link de referência; o Leveling já linka itens e usa ícones da CDN (ver abaixo) | Link |
| [Notícias e patches](https://wynncraft.com/news) | Mesmos termos do site oficial | Data e versão do jogo em cada guia ("Atualizado para a 2.2.x") | Link |

## Imagens de itens (CDN oficial)

`https://cdn.wynncraft.com/nextgen/itemguide/3.3/<nome>.webp` não tem licença publicada; o uso
pela comunidade (wiki, WynnBuilder, Wynntils) é tolerado, mas não autorizado por escrito.

**Decisão do dono (18/11/2026): só arte própria por enquanto.** Ícones oficiais de itens, aspects,
classes ou qualquer outro asset da CDN da Wynncraft só entram no site **depois de autorização
escrita da Wynncraft** (pedido pelo Discord de desenvolvedores linkado em `docs.wynncraft.com`;
pendência em `docs/PENDENCIAS.md`). Até lá, use prints próprias e ícones abertos (abaixo).

Exceção herdada: o guia de Leveling (modelo antigo) ainda usa ícones da CDN na rota de armas
(`buildLevelingItemGuideIconUrl`). Sai ou é trocado quando o Leveling for refeito.

## Ícones e tipografia em uso

| Item | Onde | Licença | Crédito exigido |
|---|---|---|---|
| [Lucide](https://lucide.dev) (`lucide-react` 1.66.0) | Todos os ícones de interface, bombas e tokens do Shares | ISC | Não |
| [Lenis](https://github.com/darkroomengineering/lenis) (`lenis` 1.3.27) | Rolagem suave no desktop | MIT | Não |
| [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) | Títulos e selos | SIL OFL 1.1 | Não no site; a licença acompanha a fonte |
| [Alegreya Sans](https://fonts.google.com/specimen/Alegreya+Sans) | Texto | SIL OFL 1.1 | Idem |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | Números, coordenadas | SIL OFL 1.1 | Idem |

As fontes são baixadas no build pelo `next/font` e servidas pelo próprio site (o navegador do
visitante não chama o Google). Pixelify Sans é uma fonte pixel genérica, **não** a fonte do Minecraft.

Candidatos ainda não usados: game-icons.net (CC BY 3.0, exige autor + link) para classes, armas e
chefes; Faithful (licença v4, exige nome, link e licença) para itens vanilla.

## Cores de raridade

Tiradas da paleta do nome do item no guia oficial de itens (`wynncraft.com/help/item-guide`,
bundle `_nuxt/Dh0LzE59.js`, conferido em 18/11/2026): Normal `#ffffff`, Unique `#fcfc48`,
Rare `#ff5cff`, Legendary `#0dfcfc`, Fabled `#ff5c5c`, Mythic `#c80db1` (texto corrido usa a
secundária oficial `#edb7e7`). Set deixou de ser raridade na 2.2.0. **Crafted não está na paleta
oficial**: não é usado até ser confirmado (pendência).

## Dados do jogo

| Fonte | Uso | Observação |
|---|---|---|
| [API oficial v3](https://docs.wynncraft.com) | Conferir nomes e locais de dungeons e raids | Consultada à mão; o site não chama a API |
| [Wiki: Raids](https://wynncraft.wiki.gg/wiki/Raids), [Lootrunning](https://wynncraft.wiki.gg/wiki/Lootrunning), [Dungeons](https://wynncraft.wiki.gg/wiki/Dungeons) | Níveis, gambits, ranks, beacons, lista de dungeons, Forgery | Só fatos, reescritos; contradições internas da wiki ficam explícitas no texto |
| Cache local do Wynntils (`wynntils/cache`, arquivos de 23/03/2025 a 13/06/2026) | Só conferência cruzada (coordenadas, nomes) | Anterior à 2.2.4; **nada foi copiado** para o repositório; todo dado usado foi confirmado na API ou na wiki |

## Mídia própria da guilda

Prints, GIFs e vídeos em `public/` e os vídeos do YouTube embutidos foram feitos por membros da
GsW. Retratos e galeria da Comunidade (`public/members/`, `public/gallery/`) também. Mídia nova de
terceiro entra nesta página antes de ir para `public/`.

### Prints novas (18/11/2026)

Escolhidas entre as 187 prints do dono (pasta de screenshots do perfil Wynncraft do Modrinth),
recortadas, com chat, nomes e nametags de outros jogadores desfocados quando apareciam, e
convertidas para AVIF e WebP. Só as usadas foram copiadas. Regeradas em 18/11/2026 em AVIF 70 /
WebP 90 (antes 50 / 78), com versão de 1920 px quando a fonte tem.

| Arquivo em `public/` | Print original | Tratamento | Usada em |
|---|---|---|---|
| `inicio/inicio-hero-ilha-cerejeiras-{640,1280,1920}` | 2026-04-05_03.20.00 | Recorte 21:9 | Início, abertura |
| `raids/prints/raid-twp-chefe-anathema-{640,1280,1920}` | 2026-04-05_04.18.04_2 | Nenhum | Raids (TWP) e destaque da Início |
| `raids/prints/raid-nol-palacio-nexus-{640,1280}` | 2026-05-01_14.41.02 | Recorte sem chat e HUD; desfoque no scoreboard | Raids (NOL) |
| `raids/prints/raid-ui-bau-recompensa-{640,1280}` | 2026-03-07_23.23.21 | Recorte sem chat | Raids, recompensas |
| `inicio/categorias/categoria-progressao-treino-{640,1280}` | 2026-04-22_10.35.55 | Recorte 16:9; desfoque nas nametags ao fundo | Início, prévia de Progressão |
| `inicio/categorias/categoria-endgame-anathema-{640,1280}` | 2026-04-13_02.16.18 | Nenhum (sem HUD na print) | Início, prévia de Endgame |
| `inicio/categorias/categoria-economia-token-{640,1280}` | 2026-04-17_20.50.55 | Recorte 16:9 das bordas | Início, prévia de Economia |
| `inicio/categorias/categoria-especiais-traje-{640,1280}` | 2026-04-05_01.54.51 | Recorte 16:9; desfoque num rótulo de nível | Início, prévia de Especiais (provisória: nenhuma das 187 prints mostra modo especial ou festival) |
| `raids/prints/raid-ui-aspecto-mitico-{640,1280}` | 2026-04-21_15.33.06 | Recorte sem chat | Raids, aspects |

Os 16 GIFs do Lootrun viraram pôster estático + animação WebP (`scripts/gif-para-webp.mjs`); o
conteúdo é o mesmo, gravado pela guilda.

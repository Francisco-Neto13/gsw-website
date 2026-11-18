# Créditos, fontes e licenças

Registro permanente do que o site usa de terceiros, com que licença e com que crédito. Toda fonte,
imagem, ícone ou fonte tipográfica nova entra aqui no mesmo PR que a introduz.

Conferido em 18/11/2026 (jogo na versão 2.2.4, expansão 2.2.0 "Fruma"; API Wynncraft v3.7.2).
Não é parecer jurídico.

## Regras do site

1. **Site de fã, não oficial.** O rodapé de todas as páginas mantém o aviso abaixo e um contato
   real (link de Discord não basta para a Mojang). Hoje o contato são as issues do repositório no GitHub
   (`contato`, em `lib/site-content.ts`); a guilda não tem e-mail próprio.
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
| [Wynncraft Wiki](https://wynncraft.wiki.gg/) | Texto **CC BY-NC-SA 4.0** (rodapé da wiki; a página Copyrights ainda diz 3.0). Imagens **não** são CC: ~14,5 mil arquivos "© Wynncraft" e ~326 "© Mojang" | Referência de fatos; link na seção "Fontes" de cada guia. **Texto não é copiado nem adaptado** (evita a cláusula NC e o ShareAlike). Imagens só na pasta de terceiros (abaixo) | Link para a página consultada |
| [Item guide oficial](https://wynncraft.com/help/item-guide) | Mesmos termos do site oficial | Link de referência; o Leveling já linka itens e usa ícones da CDN (ver abaixo) | Link |
| [Notícias e patches](https://wynncraft.com/news) | Mesmos termos do site oficial | Data e versão do jogo em cada guia ("Atualizado para a 2.2.x") | Link |

## Imagens de terceiros (removíveis)

**Decisão do dono (18/11/2026):** usar imagens da wiki e arte oficial da Wynncraft como as wikis
fazem (uso tolerado, sem licença), mas **isoladas para remoção imediata** se a Wynncraft ou a Mojang
pedirem:

- Moram só em `public/terceiros/wynncraft/`. Prints da guilda nunca entram nessa pasta.
- A legenda mostra "© Wynncraft" sozinha (`creditoDe` em `lib/imagens.ts`, usada pela `Figura`).
- O código só mostra uma imagem que existe e está medida. **Para remover tudo:** apagar a pasta,
  rodar `node scripts/medir-imagens.mjs` e o `npm run check`; as páginas seguem sem elas.
- Todo arquivo da pasta tem linha na tabela abaixo; o `npm test` falha se faltar algum.

O link de origem de cada arquivo fica em `lib/terceiros.ts` e aparece na legenda ("© Wynncraft").

| Arquivo | Origem | Onde aparece |
|---|---|---|
| festival-heroes-logo.webp | [Wiki: HeroesLogo.png](https://wynncraft.wiki.gg/wiki/File:HeroesLogo.png), arte oficial | Festivais, ordem dos festivais |
| festival-bonfire-logo.webp | [Wiki: Festival_of_the_Bonfire_logo.png](https://wynncraft.wiki.gg/wiki/File:Festival_of_the_Bonfire_logo.png), arte oficial | Festivais, ordem dos festivais |
| festival-spirits-logo.webp | [Wiki: Festival_of_the_Spirits_logo.png](https://wynncraft.wiki.gg/wiki/File:Festival_of_the_Spirits_logo.png), arte oficial | Festivais, ordem dos festivais |
| festival-blizzard-logo.webp | [Wiki: Festival_of_the_Blizzard_logo.png](https://wynncraft.wiki.gg/wiki/File:Festival_of_the_Blizzard_logo.png), arte oficial | Festivais, ordem dos festivais |
| festival-bonfire-promocional.webp | [Wiki: BonfirePromo2022.png](https://wynncraft.wiki.gg/wiki/File:BonfirePromo2022.png), arte promocional oficial | Festivais, abertura |
| bonfire-keeper.webp | [Wiki: BonfireKeeper(BattlefortheBonfire).png](https://wynncraft.wiki.gg/wiki/File:BonfireKeeper(BattlefortheBonfire).png) | Festivais, Bonfire |
| spirits-alma.webp | [Wiki: LostSpirit.png](https://wynncraft.wiki.gg/wiki/File:LostSpirit.png) | Festivais, Spirits |
| blizzard-the-traveler.webp | [Wiki: TheTraveler.png](https://wynncraft.wiki.gg/wiki/File:TheTraveler.png) | Festivais, Blizzard |
| blizzard-convites.webp | [Wiki: WynnterInvitations.png](https://wynncraft.wiki.gg/wiki/File:WynnterInvitations.png) | Festivais, Blizzard |
| blizzard-brawl-mapa.webp | [Wiki: BBWorkshopMap.png](https://wynncraft.wiki.gg/wiki/File:BBWorkshopMap.png) | Festivais, Blizzard |
| modos-icones-chat.webp | [Wiki: HICicons.png](https://wynncraft.wiki.gg/wiki/File:HICicons.png) | Modos especiais, como escolher |
| hunted-npc-inicio.webp | [Wiki: AHunter'sCallingStartNPC.png](https://wynncraft.wiki.gg/wiki/File:AHunter%27sCallingStartNPC.png) | Modos especiais, Hunted |
| hunted-aledar.webp | [Wiki: Aledar,theExterminator(Phase1).png](https://wynncraft.wiki.gg/wiki/File:Aledar,theExterminator(Phase1).png) | Modos especiais, Hunted |
| bomba-combat-xp.webp | [Wiki: Xpbomb.png](https://wynncraft.wiki.gg/wiki/File:Xpbomb.png), ilustração da loja | Silverbull Shares, bombas |
| bomba-profession-xp.webp | [Wiki: ProfessionXPBomb.png](https://wynncraft.wiki.gg/wiki/File:ProfessionXPBomb.png), ilustração da loja | Silverbull Shares, bombas |
| bomba-profession-speed.webp | [Wiki: ProfessionSpeedBomb.png](https://wynncraft.wiki.gg/wiki/File:ProfessionSpeedBomb.png), ilustração da loja | Silverbull Shares, bombas |
| bomba-shout.webp | [Wiki: Shoutbomb.png](https://wynncraft.wiki.gg/wiki/File:Shoutbomb.png), ilustração da loja | Silverbull Shares, bombas |
| bomba-loot.webp | [Wiki: Lootbomb.png](https://wynncraft.wiki.gg/wiki/File:Lootbomb.png), ilustração da loja | Silverbull Shares, bombas |
| bomba-item.webp | [Wiki: Itembomb.png](https://wynncraft.wiki.gg/wiki/File:Itembomb.png), ilustração da loja | Silverbull Shares, bombas |
| bomba-dungeon.webp | [Wiki: Dungeonbomb.png](https://wynncraft.wiki.gg/wiki/File:Dungeonbomb.png), ilustração da loja | Silverbull Shares, bombas |
| bomba-scroll-charge.webp | [Wiki: ScrollChargeBomb.png](https://wynncraft.wiki.gg/wiki/File:ScrollChargeBomb.png), ilustração da loja | Silverbull Shares, bombas |
| bomba-ingredient.webp | [Wiki: IngredientBomb.png](https://wynncraft.wiki.gg/wiki/File:IngredientBomb.png), ilustração da loja | Silverbull Shares, bombas |
| bomba-party-crackers.webp | [Wiki: Partybomb.png](https://wynncraft.wiki.gg/wiki/File:Partybomb.png), ilustração da loja | Silverbull Shares, bombas |
| beacon-aqua.webp | [Wiki: Inspect_beacon_aqua.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_aqua.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-blue.webp | [Wiki: Inspect_beacon_blue.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_blue.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-crimson.webp | [Wiki: Inspect_beacon_crimson.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_crimson.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-dark-gray.webp | [Wiki: Inspect_beacon_dark_gray.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_dark_gray.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-gray.webp | [Wiki: Inspect_beacon_gray.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_gray.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-green.webp | [Wiki: Inspect_beacon_green.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_green.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-orange.webp | [Wiki: Inspect_beacon_orange.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_orange.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-pink.webp | [Wiki: Inspect_beacon_pink.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_pink.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-purple.webp | [Wiki: Inspect_beacon_purple.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_purple.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-rainbow.webp | [Wiki: Inspect_beacon_rainbow.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_rainbow.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-red.webp | [Wiki: Inspect_beacon_red.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_red.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-white.webp | [Wiki: Inspect_beacon_white.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_white.png), ícone do jogo | Lootrun, tabela de beacons |
| beacon-yellow.webp | [Wiki: Inspect_beacon_yellow.png](https://wynncraft.wiki.gg/wiki/File:Inspect_beacon_yellow.png), ícone do jogo | Lootrun, tabela de beacons |
| dungeon-decrepit-sewers.webp | [Wiki: DecrepitSewers.png](https://wynncraft.wiki.gg/wiki/File:DecrepitSewers.png), entrada | Dungeons, Decrepit Sewers |
| dungeon-infested-pit.webp | [Wiki: InfestedPit.png](https://wynncraft.wiki.gg/wiki/File:InfestedPit.png), entrada | Dungeons, Infested Pit |
| dungeon-underworld-crypt.webp | [Wiki: UnderworldCryptBossRoom.png](https://wynncraft.wiki.gg/wiki/File:UnderworldCryptBossRoom.png), sala do chefe | Dungeons, Underworld Crypt |
| dungeon-timelost-sanctum.webp | [Wiki: TimelostSanctumCathedral1.png](https://wynncraft.wiki.gg/wiki/File:TimelostSanctumCathedral1.png), catedral | Dungeons, Timelost Sanctum |
| dungeon-sand-swept-tomb.webp | [Wiki: Sand-SweptTomb.png](https://wynncraft.wiki.gg/wiki/File:Sand-SweptTomb.png), entrada | Dungeons, Sand-Swept Tomb |
| dungeon-ice-barrows.webp | [Wiki: IceBarrows.png](https://wynncraft.wiki.gg/wiki/File:IceBarrows.png), entrada | Dungeons, Ice Barrows |
| dungeon-undergrowth-ruins.webp | [Wiki: UndergrowthRuins.png](https://wynncraft.wiki.gg/wiki/File:UndergrowthRuins.png), entrada | Dungeons, Undergrowth Ruins |
| dungeon-galleons-graveyard.webp | [Wiki: GalleonsGraveyardEntrance.png](https://wynncraft.wiki.gg/wiki/File:GalleonsGraveyardEntrance.png), entrada | Dungeons, Galleon's Graveyard |
| dungeon-fallen-factory.webp | [Wiki: FallenFactory.png](https://wynncraft.wiki.gg/wiki/File:FallenFactory.png), entrada | Dungeons, Fallen Factory |
| dungeon-eldritch-outlook.webp | [Wiki: EldritchOutlook.png](https://wynncraft.wiki.gg/wiki/File:EldritchOutlook.png), entrada | Dungeons, Eldritch Outlook |
| dungeon-decrepit-sewers-corrompida.webp | [Wiki: CorruptedDecrepitSewersBossRoom.png](https://wynncraft.wiki.gg/wiki/File:CorruptedDecrepitSewersBossRoom.png), sala do chefe | Dungeons, Corrupted Decrepit Sewers |
| dungeon-infested-pit-corrompida.webp | [Wiki: CorruptedInfestedPitRoom0.png](https://wynncraft.wiki.gg/wiki/File:CorruptedInfestedPitRoom0.png), primeira sala | Dungeons, Corrupted Infested Pit |
| dungeon-lost-sanctuary-corrompida.webp | [Wiki: CorruptedLostSanctuaryEntrance.png](https://wynncraft.wiki.gg/wiki/File:CorruptedLostSanctuaryEntrance.png), entrada | Dungeons, Corrupted Lost Sanctuary |
| dungeon-underworld-crypt-corrompida.webp | [Wiki: CorruptedUnderworldCrypt.png](https://wynncraft.wiki.gg/wiki/File:CorruptedUnderworldCrypt.png), entrada | Dungeons, Corrupted Underworld Crypt |
| dungeon-sand-swept-tomb-corrompida.webp | [Wiki: CorruptedSand-SweptTombEntrance.png](https://wynncraft.wiki.gg/wiki/File:CorruptedSand-SweptTombEntrance.png), entrada | Dungeons, Corrupted Sand-Swept Tomb |
| dungeon-ice-barrows-corrompida.webp | [Wiki: CorruptedIceBarrowsEntrance.png](https://wynncraft.wiki.gg/wiki/File:CorruptedIceBarrowsEntrance.png), entrada | Dungeons, Corrupted Ice Barrows |
| dungeon-undergrowth-ruins-corrompida.webp | [Wiki: CorruptedUndergrowthRuinsEntrance.png](https://wynncraft.wiki.gg/wiki/File:CorruptedUndergrowthRuinsEntrance.png), entrada | Dungeons, Corrupted Undergrowth Ruins |
| dungeon-galleons-graveyard-corrompida.webp | [Wiki: CorruptedGalleon'sGraveyardEntrance.png](https://wynncraft.wiki.gg/wiki/File:CorruptedGalleon%27sGraveyardEntrance.png), entrada | Dungeons, Corrupted Galleon's Graveyard |
| item-bow-air3.webp | [CDN do guia de itens: bow.air3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bow.air3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-bow-earth2.webp | [CDN do guia de itens: bow.earth2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bow.earth2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-bow-earth3.webp | [CDN do guia de itens: bow.earth3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bow.earth3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-bow-multi2.webp | [CDN do guia de itens: bow.multi2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bow.multi2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-bow-multi3.webp | [CDN do guia de itens: bow.multi3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bow.multi3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-bow-thunder3.webp | [CDN do guia de itens: bow.thunder3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bow.thunder3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-bow-water3.webp | [CDN do guia de itens: bow.water3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bow.water3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-bracelet-basic-iron.webp | [CDN do guia de itens: bracelet.basicIron.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bracelet.basicIron.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-bracelet-multi2.webp | [CDN do guia de itens: bracelet.multi2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bracelet.multi2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-bracelet-water1.webp | [CDN do guia de itens: bracelet.water1.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bracelet.water1.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-bracelet-water2.webp | [CDN do guia de itens: bracelet.water2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/bracelet.water2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-dagger-air3.webp | [CDN do guia de itens: dagger.air3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/dagger.air3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-dagger-fire2.webp | [CDN do guia de itens: dagger.fire2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/dagger.fire2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-dagger-multi2.webp | [CDN do guia de itens: dagger.multi2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/dagger.multi2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-dagger-thunder1.webp | [CDN do guia de itens: dagger.thunder1.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/dagger.thunder1.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-dagger-thunder2.webp | [CDN do guia de itens: dagger.thunder2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/dagger.thunder2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-dagger-thunder3.webp | [CDN do guia de itens: dagger.thunder3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/dagger.thunder3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-dagger-water3.webp | [CDN do guia de itens: dagger.water3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/dagger.water3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-necklace-basic-cross.webp | [CDN do guia de itens: necklace.basicCross.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/necklace.basicCross.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-necklace-earth1.webp | [CDN do guia de itens: necklace.earth1.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/necklace.earth1.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-necklace-multi2.webp | [CDN do guia de itens: necklace.multi2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/necklace.multi2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-relik-air2.webp | [CDN do guia de itens: relik.air2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/relik.air2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-relik-basic-gold.webp | [CDN do guia de itens: relik.basicGold.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/relik.basicGold.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-relik-earth2.webp | [CDN do guia de itens: relik.earth2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/relik.earth2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-relik-fire3.webp | [CDN do guia de itens: relik.fire3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/relik.fire3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-relik-thunder3.webp | [CDN do guia de itens: relik.thunder3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/relik.thunder3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-relik-water1.webp | [CDN do guia de itens: relik.water1.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/relik.water1.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-relik-water3.webp | [CDN do guia de itens: relik.water3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/relik.water3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-ring-basic-gem.webp | [CDN do guia de itens: ring.basicGem.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/ring.basicGem.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-ring-fire2.webp | [CDN do guia de itens: ring.fire2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/ring.fire2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-ring-thunder2.webp | [CDN do guia de itens: ring.thunder2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/ring.thunder2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-spear-air2.webp | [CDN do guia de itens: spear.air2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/spear.air2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-spear-air3.webp | [CDN do guia de itens: spear.air3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/spear.air3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-spear-fire3.webp | [CDN do guia de itens: spear.fire3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/spear.fire3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-spear-multi3.webp | [CDN do guia de itens: spear.multi3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/spear.multi3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-spear-water1.webp | [CDN do guia de itens: spear.water1.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/spear.water1.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-spear-water2.webp | [CDN do guia de itens: spear.water2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/spear.water2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-spear-water3.webp | [CDN do guia de itens: spear.water3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/spear.water3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-wand-air3.webp | [CDN do guia de itens: wand.air3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/wand.air3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-wand-basic-gold.webp | [CDN do guia de itens: wand.basicGold.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/wand.basicGold.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-wand-multi1.webp | [CDN do guia de itens: wand.multi1.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/wand.multi1.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-wand-multi2.webp | [CDN do guia de itens: wand.multi2.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/wand.multi2.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-wand-multi3.webp | [CDN do guia de itens: wand.multi3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/wand.multi3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-wand-thunder3.webp | [CDN do guia de itens: wand.thunder3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/wand.thunder3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-wand-water1.webp | [CDN do guia de itens: wand.water1.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/wand.water1.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |
| item-wand-water3.webp | [CDN do guia de itens: wand.water3.webp](https://cdn.wynncraft.com/nextgen/itemguide/3.3/wand.water3.webp), reduzido para 64 px | Leveling, rota de armas e acessórios |

### Sites úteis: prévias dos sites da comunidade

O guia Sites úteis (`/guias/sites-uteis`) mostra uma prévia de cada site. Quando o site tem imagem de
compartilhamento (`og:image`), usamos ela; quando não tem, uma captura da página inicial feita em 18/11/2026
(1200 × 630). Os logos da Wynncraft e da Wiki ficam em `public/terceiros/wynncraft/`; as prévias dos sites da
comunidade, em `public/terceiros/sites/`, com o crédito "© criadores do site" e link para a origem.
Cada card diz de quem é o site e que a GsW não tem vínculo com ele. Dois cards usam uma prévia desenhada
com o nome do site: o WynnXR (certificado inválido quando conferimos) e a Wiki (a imagem de compartilhamento
é o mesmo emblema da Wynncraft, e a página bloqueia captura automática).

Curadoria e texto da seção: **FurionSpeed (Labubu)**, da comunidade, revisados pela GsW.

| Arquivo | Origem | Onde aparece |
|---|---|---|
| site-wynncraft-logo.webp | [og:image de wynncraft.com](https://cdn.wynncraft.com/nextgen/themes/classic/assets/wynncraft_icon.png), logo oficial | Sites úteis, card do Wynncraft |
| wynnpool.webp | [og:image de wynnpool.com](https://www.wynnpool.com/images/og-image.png) | Sites úteis, card do Wynnpool |
| nori-fish.webp | [og:image de nori.fish](https://nori.fish/resources/nori_logo.png), logo de RawFish | Sites úteis, card do nori.fish |
| wynnbuilder.webp | Captura de [wynnbuilder.github.io](https://wynnbuilder.github.io/) (sem og:image) | Sites úteis, card do WynnBuilder |
| wynnventory.webp | Captura de [wynnventory.com](https://www.wynnventory.com/) (sem og:image) | Sites úteis, card do Wynnventory |
| wynncrafter.webp | Captura de [wynnbuilder.github.io/crafter](https://wynnbuilder.github.io/crafter/) (sem og:image) | Sites úteis, card do WynnCrafter |

## Imagens de itens (CDN oficial)

`https://cdn.wynncraft.com/nextgen/itemguide/3.3/<nome>.webp` não tem licença publicada; o uso
pela comunidade (wiki, WynnBuilder, Wynntils) é tolerado, mas não autorizado por escrito.

**Decisão do dono, revista em 18/11/2026:** ícones oficiais de itens, aspects e classes seguem a regra
das imagens de terceiros (acima): baixados para `public/terceiros/wynncraft/`, listados na tabela e
com crédito; **nunca puxados direto da CDN** (hotlink). A autorização escrita da Wynncraft continua
desejável (pendência em `docs/PENDENCIAS.md`) e, se vier, nada mais precisa mudar.

O Leveling usava ícones da CDN direto na rota de armas; desde 18/11/2026 eles são cópias locais (`item-*.webp`, na tabela acima). As peças de armadura ficam sem ícone: a CDN não tem esses arquivos e a wiki só os tem em folha de sprites.

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
| `inicio/categorias/categoria-progressao-trono-{640,1280}` | 2026-02-24_20.54.15 | Recorte 16:9 ampliado no trono (escolha do dono) | Início, prévia de Progressão |
| `inicio/categorias/categoria-endgame-silhueta-{640,1280}` | 2026-04-05_04.04.14 | Recorte 16:9 centrado nas silhuetas (escolha do dono) | Início, prévia de Endgame |
| `inicio/categorias/categoria-economia-token-{640,1280}` | 2026-04-17_20.50.55 | Recorte 16:9 das bordas | Início, prévia de Economia |
| `inicio/categorias/categoria-especiais-traje-{640,1280}` | 2026-04-05_01.54.51 | Recorte 16:9; desfoque num rótulo de nível | Início, prévia de Especiais (provisória: nenhuma das 187 prints mostra modo especial ou festival) |
| `raids/prints/raid-ui-aspecto-mitico-{640,1280}` | 2026-04-21_15.33.06 | Recorte sem chat | Raids, aspects |

Os 16 GIFs do Lootrun viraram pôster estático + animação WebP (`scripts/gif-para-webp.mjs`); o
conteúdo é o mesmo, gravado pela guilda.

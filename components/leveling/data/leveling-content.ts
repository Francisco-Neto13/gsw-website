export type LevelingSpot = {
  name: string;
  range: string;
  coords: string;
  image: string;
  notes: string[];
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export type LevelingInfoCard = {
  title: string;
  description: string;
};

export type AbilityTreeRoute = {
  className: string;
  archetype: string;
  icon: string;
  treeUrl: string;
  notes: string[];
};

export type WeaponOption = {
  name: string;
  guideQuery: string;
  iconName: string;
  tag?: string;
};

export type WeaponEntry = {
  level: string;
  options: WeaponOption[];
};

export type WeaponRoute = {
  className: string;
  entries: WeaponEntry[];
};

export const levelingIntroParagraphs = [
  "Nesse topico, voce aprendera tudo sobre leveling, desde spots ate itens.",
  "As recomendacoes abaixo sao focadas em matar mobs com XP Bonus. Se for sua primeira classe, e fortemente recomendado fazer quests, caves e discoveries antes de focar em grind.",
];

export const levelingPartyIntro: SectionIntro = {
  eyebrow: "Fundamentos",
  title: "Party",
  description:
    "Upar em party e quase obrigatorio: o ganho de XP aumenta e a chance de sobreviver fica muito maior. Para achar uma party rapidamente, use /pfinder no chat ou fale com o NPC de Party Finder em qualquer cidade. No menu, parties de XP aparecem com icone de caveira.",
};

export const levelingPartyImage = {
  src: "/leveling/party_finder.png",
  alt: "Exemplo de party de XP no Party Finder",
  caption: "Exemplo de party de XP",
};

export const levelingPartyCards: LevelingInfoCard[] = [
  {
    title: "Healers",
    description:
      "Sao normalmente jogadores level 120 ou 121 com build focada em cura (geralmente Shaman ou Mage). Em parties de nivel baixo, costumam usar itens para reduzir o dano e nao roubar XP da party.",
  },
  {
    title: "Totens",
    description:
      "Sao recebidos diariamente por quem possui rank da loja e usados com /totem. Cada totem dura 5 minutos e aumenta muito o spawn de mobs, elevando o XP da party.",
  },
  {
    title: "Bombas de XP",
    description:
      "Dobram o XP do servidor por 20 minutos. E um investimento caro, entao vale usar quando a party esta bem organizada e matando em bom ritmo.",
  },
];

export const levelingSpotsIntro: SectionIntro = {
  eyebrow: "Do level 1 ao 121",
  title: "Spots",
  description:
    "Alguns spots se sobrepoem em nivel. Nao existe regra fixa para troca: se um spot estiver dificil ou ineficiente para sua party, mude para outro.",
};

export const levelingSpots: LevelingSpot[] = [
  {
    name: "Emerald Trail",
    range: "Lvl 1 - 10",
    coords: "-753, -1574",
    image: "/leveling/emerald_trail.png",
    notes: [
      "Fica logo apos os portoes de Ragni e funciona como area inicial de leveling.",
      "Nesses primeiros levels, o XP sobe muito rapido e totem ainda nao e necessario.",
      "Basta limpar os mobs da regiao e seguir a progressao.",
    ],
  },
  {
    name: "Pigman Ravines",
    range: "Lvl 5 - 25",
    coords: "-818, -1260",
    image: "/leveling/pigman_ravine.png",
    notes: [
      "Aqui vale estar bem equipado, porque os mobs conseguem matar com facilidade.",
      "E o primeiro spot onde totems ficam realmente importantes para manter o ritmo.",
      "Healer e party completa ainda nao sao obrigatorios nesse ponto.",
      "Tome cuidado com o Pigman Overlord, que tem mais dano e vida que os mobs comuns.",
    ],
  },
  {
    name: "Mt Wynn Spiders",
    range: "Lvl 20 - 35",
    coords: "-30, -1960",
    image: "/leveling/mount_wynn.png",
    notes: [
      "Mais seguro que Saint's Row, mas com ganho de XP menor.",
      "Tome cuidado com a Spider Tamer e com as teias jogadas pelas aranhas.",
      "A partir daqui, healer comeca a ser essencial para manter consistencia.",
    ],
  },
  {
    name: "Saint's Row",
    range: "Lvl 20 - 40",
    coords: "320, -2048",
    image: "/leveling/saints_row.png",
    notes: [
      "Spot com XP muito alto, mas quase todos os mobs podem te matar muito rapido.",
      "Precisa completar a quest Grave Digger para acessar.",
      "Healer aqui e praticamente obrigatorio.",
      "Classes com bom alcance conseguem limpar mobs de fora do cemiterio.",
    ],
  },
  {
    name: "Llevigar Spiders",
    range: "Lvl 35 - 50",
    coords: "-2151, -4717",
    image: "/leveling/llevigar_spiders.png",
    notes: [
      "E recomendado comecar no level 35 para ja descobrir Llevigar e respawnar la em caso de morte.",
      "Fique atento ao Holehold Orc Marathon, que pode spawnar apos uso de totem.",
    ],
  },
  {
    name: "Herb Cave",
    range: "Lvl 40 - 70",
    coords: "-499, -810",
    image: "/leveling/herb_cave.png",
    notes: [
      "Spot muito forte que pode ser usado por bastante tempo, dividido em parte superior e inferior.",
      "A parte de baixo costuma render mais XP.",
      "Se a party estiver sofrendo, usar a parte de cima ainda funciona bem.",
    ],
  },
  {
    name: "Flesh Cave",
    range: "Lvl 55 - 75",
    coords: "-996, -5558",
    image: "/leveling/flesh-cave.png",
    notes: [
      "Como e uma cave, os mobs podem dropar itens e esmeraldas durante o grind.",
      "Fique de olho em drops como The Jingling Jester e Suppression.",
      "Use totem no corredor estreito antes do bau para maximizar spawn.",
    ],
  },
  {
    name: "Waterfall",
    range: "Lvl 65 - 80",
    coords: "-106, -4592",
    image: "/leveling/waterfall.png",
    notes: [
      "Tem XP superior a Flesh Cave, mas e bem mais dificil de sobreviver.",
      "Healer e altamente necessario e a party deve ficar proxima dele no meio.",
      "Os mobs tem muita vida, entao dano total da party faz muita diferenca.",
    ],
  },
  {
    name: "Scrapyard",
    range: "Lvl 75 - 105",
    coords: "-1445, -2522",
    image: "/leveling/scrapward.png",
    notes: [
      "Pode ser usado com tranquilidade ate o level 105.",
      "Cuidado com inimigos ao redor do spot, que podem matar rapido se puxar errado.",
      "Totens rendem melhor na parte esquerda do spot.",
    ],
  },
  {
    name: "Church",
    range: "Lvl 100 - 120",
    coords: "1023, -390",
    image: "/leveling/church.png",
    notes: [
      "Spot pouco usado por causa da popularidade de Scrapyard e Bat Cave.",
      "Exige a quest A Journey Beyond para acesso.",
      "A partir daqui, healer tambem pode ajudar no dano sem prejudicar a run.",
    ],
  },
  {
    name: "Bat Cave",
    range: "Lvl 105 - 121",
    coords: "-1714, -994",
    image: "/leveling/bat_cave.png",
    notes: [
      "Recomendado grindar em party maior por causa da vida alta dos mobs.",
      "Exige as quests Queen's Recruit e A Journey Home para liberar o acesso.",
    ],
  },
];

export const levelingBuildsIntro: SectionIntro = {
  eyebrow: "Builds",
  title: "Ability Trees, Armas e Armaduras",
  description:
    "Aqui estao as recomendacoes para acelerar seu grind. A prioridade geral e maximizar AOE e manter XP Bonus alto no set.",
};

export const levelingBuildHighlights: LevelingInfoCard[] = [
  {
    title: "Ability Trees no 120",
    description:
      "As trees abaixo sao apresentadas no level 120 (todos os pontos). Va descendo gradualmente de acordo com os pontos disponiveis no seu nivel atual.",
  },
  {
    title: "XP Bonus",
    description:
      "O principal stat para esse guia e XP Bonus. Mesmo com itens caros, foque em compras que realmente acelerem o seu ciclo de party.",
  },
];

export const levelingAbilityTrees: AbilityTreeRoute[] = [
  {
    className: "Assassin",
    archetype: "Acrobat",
    icon: "/abilitytree/abilityTree.acrobat_active.png",
    treeUrl: "https://hppeng-wynn.github.io/builder/?v=8#9_2SG2SH2SI2SJ2SK2SL2SM2SN03D00000000001g000000z0z0+0+0+0+0-1TldxaULQ431",
    notes: [
      "Pegue Weightless, Righting Reflex e Wall Jump para manter mana com mobilidade aerea.",
      "Pegue Swan Dive e Jasmine Bloom para maximizar dano em area.",
    ],
  },
  {
    className: "Archer",
    archetype: "Boltslinger",
    icon: "/abilitytree/abilityTree.boltslinger_active.png",
    treeUrl: "https://wynnbuilder-beta.github.io/builder/#CT000000000000000000000WrJo-uz3pu1V740",
    notes: [
      "Priorize Guardian Angels e Arrow Wall para ampliar AOE.",
      "Basaltic Trap e Homing Shots ajudam a manter fluxo de kills e XP.",
      "A ultimate de Boltslinger e excelente para grind.",
    ],
  },
  {
    className: "Mage",
    archetype: "Arcanist",
    icon: "/abilitytree/abilityTree.arcanist_active.png",
    treeUrl: "https://wynnbuilder-beta.github.io/builder/#CT000000000000000000000WsJoxnNtsyFE",
    notes: ["Pegue Arcane Transfer e Chaos Explosion o mais cedo possivel para dano e sustain de mana."],
  },
  {
    className: "Warrior",
    archetype: "Fallen",
    icon: "/abilitytree/abilityTree.fallen_active.png",
    treeUrl: "https://hppeng-wynn.github.io/builder/?v=8#9_2SG2SH2SI2SJ2SK2SL2SM2SN03H00000000001g000000z0z0+0+0+0+0-1Tltuova6ER0",
    notes: [
      "Pegue Blood Pact cedo para castar spells sem depender de mana.",
      "Pegue Enraged Blow rapido para elevar o dano total.",
      "Brink of Madness e util para evitar mortes em spots mais agressivos.",
    ],
  },
  {
    className: "Shaman",
    archetype: "Summoner",
    icon: "/abilitytree/abilityTree.summoner_active.png",
    treeUrl: "https://wynnbuilder-beta.github.io/builder/#CT0000000000000000000000sJI-JDy7cNQo0",
    notes: [
      "Priorize Double Totem, Triple Totem, Rebound e Storm Dance para aumentar AOE.",
      "Pegue Regeneration para melhorar sua sobrevivencia.",
    ],
  },
];

export const levelingWeaponTip =
  "Dica: no level 1, use a arma inicial do jogo com uma powder T7 para dano extra. Ela pode segurar bem ate os primeiros itens da rota.";

export const levelingItemGuideUrl = "https://wynncraft.com/help/item-guide";
export const levelingItemDetailBaseUrl = "https://wynncraft.com/item";
export const levelingItemGuideIconBaseUrl = "https://cdn.wynncraft.com/nextgen/itemguide/3.3";

export function buildLevelingItemGuideLink(itemName: string) {
  return `${levelingItemDetailBaseUrl}/${encodeURIComponent(itemName)}`;
}

export function buildLevelingItemGuideIconUrl(iconName: string) {
  const normalized = iconName.endsWith(".webp") ? iconName : `${iconName}.webp`;
  return `${levelingItemGuideIconBaseUrl}/${normalized}`;
}

export const levelingWeapons: WeaponRoute[] = [
  {
    className: "Assassin",
    entries: [
      {
        level: "Lvl 16",
        options: [{ name: "Circuit Buster", guideQuery: "Circuit Buster", iconName: "dagger.thunder1" }],
      },
      {
        level: "Lvl 29",
        options: [{ name: "Abolition", guideQuery: "Abolition", iconName: "dagger.fire2" }],
      },
      {
        level: "Lvl 39",
        options: [{ name: "Hashr Claw", guideQuery: "Hashr Claw", iconName: "dagger.thunder2" }],
      },
      {
        level: "Lvl 55",
        options: [{ name: "Olux's Prized Dagger", guideQuery: "Olux's Prized Dagger", iconName: "dagger.multi2" }],
      },
      {
        level: "Lvl 64",
        options: [{ name: "Roiling Ruckus", guideQuery: "Roiling Ruckus", iconName: "dagger.thunder3" }],
      },
      {
        level: "Lvl 83",
        options: [{ name: "Aviform", guideQuery: "Aviform", iconName: "dagger.air3" }],
      },
      {
        level: "Lvl 97",
        options: [{ name: "Nirvana", guideQuery: "Nirvana", iconName: "dagger.water3", tag: "Mythic" }],
      },
    ],
  },
  {
    className: "Archer",
    entries: [
      {
        level: "Lvl 14",
        options: [{ name: "Relic", guideQuery: "Relic", iconName: "bow.multi2" }],
      },
      {
        level: "Lvl 33",
        options: [{ name: "Viscera Burst", guideQuery: "Viscera Burst", iconName: "bow.earth2" }],
      },
      {
        level: "Lvl 55",
        options: [{ name: "Infinity", guideQuery: "Infinity", iconName: "bow.multi2" }],
      },
      {
        level: "Lvl 70",
        options: [{ name: "Maelstrom", guideQuery: "Maelstrom", iconName: "bow.multi3" }],
      },
      {
        level: "Lvl 74 - 75",
        options: [
          { name: "Az", guideQuery: "Az", iconName: "bow.thunder3", tag: "Mythic" },
          { name: "Bob's Mythic Bow", guideQuery: "Bob's Mythic Bow", iconName: "bow.multi3" },
        ],
      },
      {
        level: "Lvl 85",
        options: [{ name: "Torrential Tide", guideQuery: "Torrential Tide", iconName: "bow.water3" }],
      },
      {
        level: "Lvl 95 - 97",
        options: [
          { name: "Spring", guideQuery: "Spring", iconName: "bow.water3", tag: "Mythic" },
          { name: "Gale's Force", guideQuery: "Gale's Force", iconName: "helmet.diamond" },
        ],
      },
      {
        level: "Lvl 104",
        options: [{ name: "Labyrinth", guideQuery: "Labyrinth", iconName: "bow.earth3", tag: "Trapper" }],
      },
    ],
  },
  {
    className: "Mage",
    entries: [
      {
        level: "Lvl 11",
        options: [{ name: "Ancient Wand", guideQuery: "Ancient Wand", iconName: "wand.basicGold" }],
      },
      {
        level: "Lvl 24",
        options: [{ name: "Effervescence", guideQuery: "Effervescence", iconName: "wand.water1" }],
      },
      {
        level: "Lvl 47",
        options: [{ name: "Sage", guideQuery: "Sage", iconName: "wand.multi2" }],
      },
      {
        level: "Lvl 57 - 65",
        options: [
          { name: "Pure", guideQuery: "Pure", iconName: "wand.multi1", tag: "Mythic" },
          { name: "Heat Death", guideQuery: "Heat Death", iconName: "wand.water3" },
        ],
      },
      {
        level: "Lvl 74",
        options: [{ name: "Warden", guideQuery: "Warden", iconName: "wand.thunder3" }],
      },
      {
        level: "Lvl 85",
        options: [{ name: "Shattered Horizon", guideQuery: "Shattered Horizon", iconName: "wand.air3" }],
      },
      {
        level: "Lvl 98",
        options: [{ name: "Cascade", guideQuery: "Cascade", iconName: "wand.multi3" }],
      },
    ],
  },
  {
    className: "Warrior",
    entries: [
      {
        level: "Lvl 16",
        options: [{ name: "Deracine", guideQuery: "Deracine", iconName: "spear.water1" }],
      },
      {
        level: "Lvl 30",
        options: [{ name: "Overreach", guideQuery: "Overreach", iconName: "spear.air2" }],
      },
      {
        level: "Lvl 51",
        options: [{ name: "Catamaran", guideQuery: "Catamaran", iconName: "spear.water2" }],
      },
      {
        level: "Lvl 70",
        options: [{ name: "Scythe", guideQuery: "Scythe", iconName: "spear.air3" }],
      },
      {
        level: "Lvl 75 - 81",
        options: [
          { name: "Apocalypse", guideQuery: "Apocalypse", iconName: "spear.fire3", tag: "Mythic" },
          { name: "Bob's Mythic Spear", guideQuery: "Bob's Mythic Spear", iconName: "spear.multi3" },
        ],
      },
      {
        level: "Lvl 88",
        options: [{ name: "Infidel", guideQuery: "Infidel", iconName: "spear.water3" }],
      },
      {
        level: "Lvl 95 - 97",
        options: [
          { name: "Idol", guideQuery: "Idol", iconName: "spear.water3", tag: "Mythic" },
          { name: "Harwrol", guideQuery: "Harwrol", iconName: "spear.multi3" },
        ],
      },
    ],
  },
  {
    className: "Shaman",
    entries: [
      {
        level: "Lvl 14",
        options: [{ name: "Stress", guideQuery: "Stress", iconName: "relik.basicGold" }],
      },
      {
        level: "Lvl 25",
        options: [
          {
            name: "Beachside Conch",
            guideQuery: "Beachside Conch",
            iconName: "relik.water1",
            tag: "+ Beachside Headwrap",
          },
        ],
      },
      {
        level: "Lvl 39",
        options: [{ name: "Sonicboom", guideQuery: "Sonicboom", iconName: "relik.air2" }],
      },
      {
        level: "Lvl 50",
        options: [{ name: "Decaybound Spindle", guideQuery: "Decaybound Spindle", iconName: "relik.earth2" }],
      },
      {
        level: "Lvl 77",
        options: [{ name: "Twin Minds", guideQuery: "Twin Minds", iconName: "relik.water3" }],
      },
      {
        level: "Lvl 88",
        options: [{ name: "Overdrive", guideQuery: "Overdrive", iconName: "relik.thunder3" }],
      },
      {
        level: "Lvl 94 - 97",
        options: [
          { name: "Hadal", guideQuery: "Hadal", iconName: "relik.water3", tag: "Mythic" },
          { name: "Absolution", guideQuery: "Absolution", iconName: "relik.fire3", tag: "Acolyte Healer" },
        ],
      },
    ],
  },
];

export const levelingArmorNotes = [
  "A maioria das pecas abaixo pode ser comprada no Trade Market ou dropada em grind. Itens de origem especifica estao anotados na propria linha.",
  "Algumas pecas ficam caras com roll alto de XP Bonus, entao compre apenas o que fizer sentido para o seu caixa.",
];

export const levelingArmorPieces = [
  "Lvl 1: Tosach (Tutorial)",
  "Lvl 1: Rarity (2x)",
  "Lvl 1: Secret",
  "Lvl 5: Guard's Garment (World Event)",
  "Lvl 8: Heliophilia",
  "Lvl 10: Silken Slippers (World Event)",
  "Lvl 11: Opulenity",
  "Lvl 12: Witherhead's Talisman (Decrepit Sewers)",
  "Lvl 21: Arakadicius' Body (Infested Pit Reward Rain)",
  "Lvl 23: Sound of Silence",
  "Lvl 23: Regal Chaps",
  "Lvl 25: Laen's Curiosity",
  "Lvl 25: Durum's Serenity (Bovine Barn)",
  "Lvl 36: Prologue (Isles of Fiction)",
  "Lvl 37: Yume",
  "Lvl 38: Chained Pixels",
  "Lvl 45: Bob's Battle Chestplate (Bob's Lost Soul)",
  "Lvl 51: Bridge of the Divide",
  "Lvl 51: Venison",
  "Lvl 55: Matryoshka Shell (Boss secreto em -698, -631)",
  "Lvl 58: Greaves of Honor (An Iron Heart Part II)",
  "Lvl 60: Bad Wolf",
  "Lvl 66: Rayshyroth's Knowledge",
  "Lvl 69: The Jingling Jester",
  "Lvl 77: Papyrus",
  "Lvl 77: Vanguard",
  "Lvl 80: Gale's Sight",
  "Lvl 80: Ringlets",
  "Lvl 80: Cosmic Set + Altum Spatium",
  "Lvl 95: Summa (2x) (Geyser Pit)",
  "Lvl 107: Dragon's Tear (2x)",
  "Lvl 119: Due Debts",
];

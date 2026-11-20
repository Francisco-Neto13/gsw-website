// Guia de Leveling. Spots, árvores, rota de armas e armaduras são recomendações da guilda.
// Ícones de item: cópias locais do guia de itens oficial (public/terceiros/wynncraft/item-*.webp, docs/CREDITOS.md).
// Marcações: [[chave]] abre a caixa de item do glossário.

export type LevelingSpot = {
  name: string;
  range: string;
  coords: string;
  image: string;
  notes: string[];
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
  "Um roteiro para subir de nível matando mobs, do 1 ao 121: onde upar em cada faixa, como montar a party e quais árvores, armas e armaduras aceleram o grind.",
  "O foco aqui é XP Bonus. Se for a sua primeira classe, faça antes as quests, caves e discoveries: além do XP, elas te ensinam o mapa.",
];

export const levelingResumo = [
  "Upe em [[party]]: o XP aumenta e a chance de sobreviver também. Use /pfinder para achar uma.",
  "Do spot de nível 20 a 35 em diante, healer vira essencial.",
  "Totems (de quem tem rank) e bombas de XP aceleram muito a party.",
  "Priorize dano em área e XP Bonus na build.",
];

// Party
export const partyIntro =
  "Upar em party é quase obrigatório: o XP aumenta e a chance de sobreviver fica muito maior. Para achar uma party, use /pfinder no chat ou fale com o NPC Party Finder em qualquer cidade. No menu, parties de XP aparecem com o ícone de caveira.";

export const partyImagem = {
  src: "/leveling/party_finder.webp",
  alt: "Party de XP listada no Party Finder, com o ícone de caveira",
  legenda: "Uma party de XP no Party Finder.",
};

export const partyPapeis = [
  {
    titulo: "Healers",
    texto:
      "Normalmente são jogadores de nível 120 ou 121 com build de cura (quase sempre Shaman ou Mage). Em party de nível baixo, eles usam itens que diminuem o próprio dano para não roubar XP.",
  },
  {
    titulo: "Totems",
    texto:
      "Quem tem rank ganha totems todo dia e usa com /totem. Cada totem dura 5 minutos e aumenta muito o spawn de mobs, e junto o XP da party.",
  },
  {
    titulo: "Bombas de XP",
    texto:
      "Dobram o XP de mobs do mundo por 20 minutos. São caras: vale usar quando a party está organizada e matando em bom ritmo.",
  },
];

// Spots
export const spotsIntro =
  "Alguns spots têm faixas de nível que se cruzam. Não tem regra fixa para trocar: se o spot estiver difícil ou lento para a sua party, vá para o próximo.";

export const levelingSpots: LevelingSpot[] = [
  {
    name: "Emerald Trail",
    range: "Lvl 1 - 10",
    coords: "-753, -1574",
    image: "/leveling/emerald_trail.webp",
    notes: [
      "Fica logo depois dos portões de Ragni e é o primeiro lugar para upar.",
      "Nos primeiros níveis o XP sobe muito rápido, e ainda não precisa de totem.",
      "É só limpar os mobs da região e seguir em frente.",
    ],
  },
  {
    name: "Pigman Ravines",
    range: "Lvl 5 - 25",
    coords: "-818, -1260",
    image: "/leveling/pigman_ravine.webp",
    notes: [
      "Aqui vale estar bem equipado, porque os mobs matam fácil.",
      "É o primeiro spot em que os totems fazem diferença de verdade no ritmo.",
      "Aqui ainda não precisa de healer nem de party completa.",
      "Tome cuidado com o Pigman Overlord, que tem mais dano e vida que os mobs comuns.",
    ],
  },
  {
    name: "Mt Wynn Spiders",
    range: "Lvl 20 - 35",
    coords: "-30, -1960",
    image: "/leveling/mount_wynn.webp",
    notes: [
      "Mais seguro que Saint's Row, mas com ganho de XP menor.",
      "Tome cuidado com a Spider Tamer e com as teias jogadas pelas aranhas.",
      "Daqui em diante, healer começa a ser essencial para a party não morrer toda hora.",
    ],
  },
  {
    name: "Saint's Row",
    range: "Lvl 20 - 40",
    coords: "320, -2048",
    image: "/leveling/saints_row.webp",
    notes: [
      "XP muito alto, mas quase todo mob aqui te mata rápido.",
      "Precisa da quest Grave Digger para entrar.",
      "Healer aqui é praticamente obrigatório.",
      "Classes com bom alcance conseguem limpar os mobs de fora do cemitério.",
    ],
  },
  {
    name: "Llevigar Spiders",
    range: "Lvl 35 - 50",
    coords: "-2151, -4717",
    image: "/leveling/llevigar_spiders.webp",
    notes: [
      "Vale começar no nível 35 para já ter descoberto Llevigar e renascer lá se morrer.",
      "Fique de olho no Holehold Orc Marathon, que pode spawnar depois que alguém usa totem.",
    ],
  },
  {
    name: "Herb Cave",
    range: "Lvl 40 - 70",
    coords: "-499, -810",
    image: "/leveling/herb_cave.webp",
    notes: [
      "Spot muito bom, que dá para usar por bastante tempo. Tem uma parte de cima e uma de baixo.",
      "A parte de baixo costuma dar mais XP.",
      "Se a party estiver sofrendo, a parte de cima ainda funciona bem.",
    ],
  },
  {
    name: "Flesh Cave",
    range: "Lvl 55 - 75",
    coords: "-996, -5558",
    image: "/leveling/flesh-cave.webp",
    notes: [
      "Como é uma cave, os mobs podem dropar itens e esmeraldas durante o grind.",
      "Fique de olho em drops como The Jingling Jester e Suppression.",
      "Use o totem no corredor estreito antes do baú para spawnar o máximo de mobs.",
    ],
  },
  {
    name: "Waterfall",
    range: "Lvl 65 - 80",
    coords: "-106, -4592",
    image: "/leveling/waterfall.webp",
    notes: [
      "Dá mais XP que a Flesh Cave, mas é bem mais difícil de sobreviver.",
      "Healer é obrigatório, e a party deve ficar perto dele, no meio.",
      "Os mobs têm muita vida, então o dano da party inteira faz muita diferença.",
    ],
  },
  {
    name: "Scrapyard",
    range: "Lvl 75 - 105",
    coords: "-1445, -2522",
    image: "/leveling/scrapward.webp",
    notes: [
      "Dá para usar tranquilo até o nível 105.",
      "Cuidado com os mobs em volta do spot: se você puxar errado, eles matam rápido.",
      "Totens rendem melhor na parte esquerda do spot.",
    ],
  },
  {
    name: "Church",
    range: "Lvl 100 - 120",
    coords: "1023, -390",
    image: "/leveling/church.webp",
    notes: [
      "Pouca gente usa, porque Scrapyard e Bat Cave são mais populares.",
      "Precisa da quest A Journey Beyond para entrar.",
      "Daqui em diante, o healer também pode ajudar no dano sem atrapalhar a party.",
    ],
  },
  {
    name: "Bat Cave",
    range: "Lvl 105 - 121",
    coords: "-1714, -994",
    image: "/leveling/bat_cave.webp",
    notes: [
      "Melhor grindar em party maior, porque os mobs têm muita vida.",
      "Precisa das quests Queen's Recruit e A Journey Home para entrar.",
    ],
  },
];

// Árvores
export const arvoresIntro =
  "As árvores abaixo estão no nível 120, com todos os pontos. Vá montando aos poucos, com os pontos que você tiver no seu nível. O foco é dano em área.";

export const xpBonus =
  "XP Bonus é o atributo mais importante deste guia. Mesmo que os itens sejam caros, compre o que realmente acelera a sua party.";

// Armas
export const armasIntro =
  "Uma arma por faixa de nível, por classe. Clique no nome para ver o item no guia oficial.";

export const levelingWeaponTip =
  "No nível 1, use a arma inicial com uma powder de tier 7 para ter dano extra. Ela aguenta bem até a primeira arma da rota.";

const ITEM_PAGINA = "https://wynncraft.com/item";

export const linkDoItem = (itemName: string) => `${ITEM_PAGINA}/${encodeURIComponent(itemName)}`;

/** Ícone local do item (cópia do guia oficial); null para armadura, que não tem arquivo próprio. */
export const iconeDoItem = (iconName: string) =>
  /^(helmet|chestplate|leggings|boots)\./.test(iconName)
    ? null
    : `/terceiros/wynncraft/item-${iconName.replace(".", "-").toLowerCase().replace("basic", "basic-")}.webp`;

export const levelingAbilityTrees: AbilityTreeRoute[] = [
  {
    className: "Assassin",
    archetype: "Acrobat",
    icon: "/abilitytree/abilityTree.acrobat_active.webp",
    treeUrl: "https://wynnbuilder-beta.github.io/builder/#CT000000000000000000000mrJox1-5-Tpp50",
    notes: [
      "Pegue Weightless, Righting Reflex e Wall Jump para recuperar mana enquanto se move pelo ar.",
      "Pegue Swan Dive e Jasmine Bloom para ter o máximo de dano em área.",
    ],
  },
  {
    className: "Archer",
    archetype: "Boltslinger",
    icon: "/abilitytree/abilityTree.boltslinger_active.webp",
    treeUrl: "https://wynnbuilder-beta.github.io/builder/#CT000000000000000000000WrJo-uz3pu1V740",
    notes: [
      "Priorize Guardian Angels e Arrow Wall para aumentar o AOE.",
      "Basaltic Trap e Homing Shots ajudam a manter as kills e o XP sempre vindo.",
      "A ultimate de Boltslinger é excelente para grind.",
    ],
  },
  {
    className: "Mage",
    archetype: "Arcanist",
    icon: "/abilitytree/abilityTree.arcanist_active.webp",
    treeUrl: "https://wynnbuilder-beta.github.io/builder/#CT000000000000000000000WsJoxnNtsyFE",
    notes: ["Pegue Arcane Transfer e Chaos Explosion o mais cedo possível, para ter dano e não ficar sem mana."],
  },
  {
    className: "Warrior",
    archetype: "Fallen",
    icon: "/abilitytree/abilityTree.fallen_active.webp",
    treeUrl: "https://wynnbuilder-beta.github.io/builder/#CT000000000000000000000GsJIl-q-UR4T1",
    notes: [
      "Pegue Blood Pact cedo para castar spells sem depender de mana.",
      "Pegue Enraged Blow cedo para aumentar o seu dano.",
      "Brink of Madness ajuda a não morrer nos spots mais pesados.",
    ],
  },
  {
    className: "Shaman",
    archetype: "Summoner",
    icon: "/abilitytree/abilityTree.summoner_active.webp",
    treeUrl: "https://wynnbuilder-beta.github.io/builder/#CT0000000000000000000000sJI-JDy7cNQo0",
    notes: [
      "Priorize Double Totem, Triple Totem, Rebound e Storm Dance para aumentar AOE.",
      "Pegue Regeneration para morrer menos.",
    ],
  },
];

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
          { name: "Gale's Force", guideQuery: "Gale's Force", iconName: "bow.air3" },
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
  "A maioria das peças abaixo dá para comprar no Trade Market ou dropar no grind. Quando o item vem de um lugar específico, isso está anotado na linha dele.",
  "Algumas peças ficam caras com roll alto de XP Bonus, então compre só o que couber no seu bolso.",
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


export const levelingFontes = [
  { rotulo: "Guia de itens oficial da Wynncraft", href: "https://wynncraft.com/help/item-guide" },
  { rotulo: "WynnBuilder (árvores de habilidade)", href: "https://wynnbuilder-beta.github.io/builder/" },
  { rotulo: "Party Finder, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Party_Finder" },
];

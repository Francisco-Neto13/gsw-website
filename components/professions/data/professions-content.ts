export type GatheringProfession = {
  name: string;
  resources: string;
  tool: string;
};

export type CraftingProfession = {
  name: string;
  produces: string;
  resources: string;
};

export type GrindSpot = {
  level: string;
  name: string;
  coords: string;
  isNpc?: boolean;
  maxLevel?: boolean;
};

export type ProfessionSpots = {
  profession: string;
  resources: string;
  spots: GrindSpot[];
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export const professionsIntroParagraphs = [
  "Existem dois tipos de profissões no Wynncraft: Gathering e Crafting. As de Gathering são niveladas coletando recursos espalhados pelo mapa, cujo nível varia de acordo com a região. As de Crafting utilizam esses recursos combinados com ingredients dropados de mobs para produzir itens consumíveis e equipamentos.",
  "Nossa recomendação é sempre deixar as profissões para o fim da sua trajetória no jogo. É um conteúdo opcional que não afeta diretamente a gameplay e pode consumir bastante tempo. Se precisar de algum item craftado antes disso, peça ajuda aos membros mais experientes da guilda.",
];

export const professionTypesIntro: SectionIntro = {
  eyebrow: "Visão geral",
  title: "Tipos de Profissão",
  description:
    "Gathering coleta os recursos brutos do mundo. Crafting transforma esses recursos, combinados com ingredients de mobs, em itens utilizáveis.",
};

export const professionCategoryTitles = {
  gathering: "Gathering",
  crafting: "Crafting",
};

export const professionToolsIntro: SectionIntro = {
  eyebrow: "Otimização",
  title: "Ferramentas e Bombas",
  description:
    "A ferramenta certa e as bombas certas fazem uma diferença enorme no tempo gasto para avançar nas profissões.",
};

export const professionToolsCardTitles = {
  tools: "Ferramentas",
  bombs: "Bombas de Prof",
  craftingXp: "XP de Crafting",
};

export const professionGrindSpotsIntro: SectionIntro = {
  eyebrow: "Crafting",
  title: "Grind Spots de Ingredients",
  description:
    "Melhores spots por profissão com nível e coordenadas. NPC indica item comprado de vendedor. Até 10 indica que o spot funciona até cerca de 10 níveis além do indicado.",
};

export const professionGrindSpotsTableHeaders = {
  level: "Nível",
  ingredient: "Ingredient",
  coords: "Coordenadas",
  tags: "Tags",
  npcTag: "NPC",
  maxLevelTag: "Até 10",
};

export const professionWaypointsIntro: SectionIntro = {
  eyebrow: "Wynntils",
  title: "Waypoints de Profissão",
  description:
    "Se você usa o Wynntils, importe os waypoints de recursos diretamente pelo Content Book para facilitar a visualização no mapa.",
};

export const professionWaypointsLabels = {
  importTitle: "Como importar",
  fileTitle: "profwaypoints.txt",
  download: "Download",
  preview:
    "Prévia do conteúdo. O arquivo .txt completo está disponível para download acima.",
};

export const professionsClosingQuote =
  "Profissões são uma maratona, não uma corrida. Se precisar de ajuda, a guilda está aqui.";

export const gatheringProfessions: GatheringProfession[] = [
  { name: "Farming", resources: "Colheita e Linha", tool: "Foice" },
  { name: "Fishing", resources: "Peixe e Óleo", tool: "Vara de Pesca" },
  { name: "Mining", resources: "Minério e Gema", tool: "Picareta" },
  { name: "Woodcutting", resources: "Madeira e Papel", tool: "Machado" },
];

export const craftingProfessions: CraftingProfession[] = [
  { name: "Cooking", produces: "Comidas", resources: "Fishing + Farming" },
  { name: "Alchemism", produces: "Poções", resources: "Fishing + Farming" },
  { name: "Scribing", produces: "Pergaminhos", resources: "Woodcutting + Fishing" },
  { name: "Jeweling", produces: "Anéis, Braceletes e Colares", resources: "Mining + Fishing" },
  { name: "Armouring", produces: "Capacetes e Peitorais", resources: "Mining + Woodcutting" },
  { name: "Tailoring", produces: "Calças e Botas", resources: "Mining + Farming" },
  { name: "Weaponsmithing", produces: "Lanças e Adagas", resources: "Woodcutting + Mining" },
  { name: "Woodworking", produces: "Arcos, Cajados e Reliks", resources: "Woodcutting + Farming" },
];

export const toolTips = [
  "Niveladas de 1 a 100, sempre em múltiplos de 5 (1, 5, 10, 15...).",
  "Ferramentas de nível mais alto aumentam a chance de sucesso ao coletar um recurso.",
  "Carregar mais de uma ferramenta do mesmo tipo no inventário, mesmo de níveis diferentes, diminui a eficiência de produção.",
  "Use as estatísticas Gather XP e Gather Speed presentes em armaduras e consumíveis craftados para multiplicar o XP geral.",
];

export const bombTips = [
  "Prof XP: aumenta a experiência ganha ao farmar um recurso ou craftar um item.",
  "Prof Speed: reduz pela metade o tempo gasto para farmar ou craftar. Ao craftar, os materiais consumidos também são reduzidos à metade.",
  "Pergunte no /g se há alguma bomba ativa nos mundos. Jogadores com rank Champion conseguem ver as bombas globalmente e sempre repassam a informação.",
];

export const craftingXpTips = [
  "O XP nas profissões de Crafting é ganho craftando itens, não coletando.",
  "Sempre use ingredients na composição dos itens, eles aumentam significativamente a experiência ganha.",
  "Para farmar ingredients, use builds com Loot Bônus, já que essa estatística também se aplica no drop de ingredients.",
  "Os ingredients também podem ser comprados no Trade Market, mas costumam ter preço elevado.",
  "A guilda tem receitas de itens craftados otimizados em Loot Bônus, confira no nosso servidor do Discord.",
];

export const grindSpots: ProfessionSpots[] = [
  {
    profession: "Cooking",
    resources: "Fishing + Farming",
    spots: [
      { level: "1", name: "Potato", coords: "—", isNpc: true },
      { level: "2", name: "Egg", coords: "-534, 59, -1830", isNpc: true },
      { level: "11", name: "Pigman Meat", coords: "-821, 80, -1262" },
      { level: "23", name: "Seagrass", coords: "751, 39, -2440" },
      { level: "30", name: "Mashed Insect", coords: "941, 70, -2135" },
      { level: "43/46", name: "Snow Heart / Penguin Egg", coords: "-1, 70, -931" },
      { level: "55", name: "Lizard Tail", coords: "-1776, 54, -5242" },
      { level: "60", name: "Candy Button", coords: "-248, 57, -4956", isNpc: true },
      { level: "70", name: "Letvus Delight", coords: "-248, 57, -4956", isNpc: true },
      { level: "95", name: "Manis Carapace", coords: "-1428, 134, -3271" },
      { level: "98", name: "Red Mercury", coords: "1050, 109, -4747", isNpc: true, maxLevel: true },
    ],
  },
  {
    profession: "Scribing",
    resources: "Woodcutting + Fishing",
    spots: [
      { level: "1", name: "Costal Sand", coords: "-691, 34, -2038" },
      { level: "5", name: "Fresh Water", coords: "1290, 31, -1267", isNpc: true },
      { level: "14", name: "Bone Ash", coords: "-438, 70, -1306" },
      { level: "26", name: "Blaze Powder", coords: "271, 30, -1290" },
      { level: "32", name: "Lunar Dust", coords: "981, 37, -2610" },
      { level: "48", name: "Ghostly Essence", coords: "-48, 59, -250" },
      { level: "65", name: "Ice Cream Sandwich", coords: "-248, 57, -4956", isNpc: true },
      { level: "80", name: "Energetic Aura", coords: "630, 28, -4945" },
      { level: "88", name: "Fiery Aura", coords: "411, 40, -5166", maxLevel: true },
      { level: "96", name: "Silver Feather", coords: "1177, 141, -4433" },
    ],
  },
  {
    profession: "Alchemism",
    resources: "Fishing + Farming",
    spots: [
      { level: "1", name: "Red/Brown Mushroom", coords: "581, 60, -1536" },
      { level: "5", name: "Fresh Water", coords: "1290, 31, -1267", isNpc: true },
      { level: "11", name: "Pigman Meat", coords: "-821, 80, -1262" },
      { level: "26", name: "Blaze Powder", coords: "271, 30, -1290" },
      { level: "32", name: "Lunar Dust", coords: "981, 37, -2610" },
      { level: "37", name: "Gunpowder", coords: "1090, 31, -1278" },
      { level: "55", name: "Naga Tail", coords: "-1852, 56, -5315" },
      { level: "65", name: "Wybel Taffy", coords: "-248, 57, -4956", isNpc: true },
      { level: "76", name: "Royal Bug's Blood", coords: "-644, 47, -4729", maxLevel: true },
      { level: "83", name: "Stolen Goods", coords: "405, 81, -5101" },
      { level: "97", name: "Ominous Pearl", coords: "662, 75, -1032" },
    ],
  },
  {
    profession: "Jeweling",
    resources: "Mining + Fishing",
    spots: [
      { level: "3", name: "Forest Web", coords: "-257, 70, -1593" },
      { level: "25", name: "Fake Tooth", coords: "1090, 31, -1278" },
      { level: "31", name: "Gold Bar", coords: "1090, 31, -1278", isNpc: true },
      { level: "47/48", name: "Pillaged Fragments / Ghostly Essence", coords: "-48, 59, -250" },
      { level: "60", name: "Candy Button", coords: "-248, 57, -4956", isNpc: true },
      { level: "77", name: "Pure Rain Stone", coords: "-85, 36, -4961" },
      { level: "86", name: "Ivory Tusk", coords: "351, 31, -4603", maxLevel: true },
      { level: "92", name: "Unmeltable Ice", coords: "1528, 10, -5378" },
    ],
  },
  {
    profession: "Weaponsmithing",
    resources: "Woodcutting + Mining",
    spots: [
      { level: "1", name: "Rotten Flesh", coords: "162, 6, -5193", isNpc: true },
      { level: "20", name: "Waterlogged Branch", coords: "751, 39, -2440" },
      { level: "32", name: "Gritty Rocks", coords: "1065, 30, -1259" },
      { level: "46", name: "Orc Teeth", coords: "-2024, 46, -4885" },
      { level: "54", name: "Zombie Eye", coords: "162, 6, -5193", isNpc: true },
      { level: "60", name: "Big Jawbreaker", coords: "-248, 57, -4956", isNpc: true },
      { level: "74", name: "Gollier Iron", coords: "-771, 46, -4516", maxLevel: true },
      { level: "83", name: "Stolen Goods", coords: "405, 81, -5101" },
      { level: "96", name: "Broken Pick", coords: "1066, 66, -4807" },
    ],
  },
  {
    profession: "Woodworking",
    resources: "Woodcutting + Farming",
    spots: [
      { level: "1", name: "Rotten Flesh", coords: "162, 6, -5193", isNpc: true },
      { level: "3", name: "Forest Web", coords: "-257, 70, -1593" },
      { level: "20", name: "Waterlogged Branch", coords: "751, 39, -2440" },
      { level: "34", name: "Lunar Shard", coords: "981, 37, -2610" },
      { level: "44", name: "Orc Eye", coords: "-2024, 46, -4885" },
      { level: "54", name: "Zombie Eye", coords: "162, 6, -5193", isNpc: true },
      { level: "65", name: "Sugar Stick", coords: "-248, 57, -4956" },
      { level: "76", name: "Royal Bug's Blood", coords: "-644, 47, -4729", maxLevel: true },
      { level: "83", name: "Stolen Goods", coords: "405, 81, -5101" },
      { level: "92", name: "Unmeltable Ice", coords: "1528, 10, -5378" },
    ],
  },
  {
    profession: "Armouring",
    resources: "Mining + Woodcutting",
    spots: [
      { level: "1", name: "Strong Flesh", coords: "-626, 49, -1957" },
      { level: "21", name: "Bone Meal", coords: "162, 6, -5193", isNpc: true },
      { level: "30", name: "Cracked Skin", coords: "1065, 30, -1259" },
      { level: "54", name: "Zombie Eye", coords: "162, 6, -5193", isNpc: true },
      { level: "65", name: "Cocoa Caps", coords: "-248, 57, -4956" },
      { level: "74", name: "Gollier Iron", coords: "-771, 46, -4516", maxLevel: true },
      { level: "83", name: "Stolen Goods", coords: "405, 81, -5101" },
      { level: "90", name: "Turtle Shell", coords: "-1428, 134, -3271" },
      { level: "95", name: "Sky Snail Shell", coords: "986, 136, -4838", maxLevel: true },
    ],
  },
  {
    profession: "Tailoring",
    resources: "Mining + Farming",
    spots: [
      { level: "1", name: "Strong Flesh", coords: "-626, 49, -1957" },
      { level: "21", name: "Bone Meal", coords: "162, 6, -5193", isNpc: true },
      { level: "30", name: "Cracked Skin", coords: "1065, 30, -1259" },
      { level: "44", name: "Orc Eye", coords: "-2024, 46, -4885" },
      { level: "54", name: "Zombie Eye", coords: "162, 6, -5193", isNpc: true },
      { level: "60", name: "Licorice Ropes", coords: "-248, 57, -4956" },
      { level: "70", name: "Elemental Crystal", coords: "-903, 44, -4713" },
      { level: "83", name: "Stolen Goods", coords: "405, 81, -5101" },
      { level: "90", name: "Wybel Fluff", coords: "1299, 66, -4687", maxLevel: true },
    ],
  },
];

export const waypointImportSteps = [
  "Abra o Content Book",
  "Clique em Overlay Management",
  'Busque por "Info Box"',
  "Escolha uma das 7 disponíveis",
  'Cole o texto na parte "Info Box Content"',
];

export const waypointSnippet = `[{
  "name": "-----[ Farming ]----",
  "color": "#666666ff",
  "icon": "farming",
  "visibility": "hidden",
  "location": { ... }
}]`;

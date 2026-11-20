// Guia de Profissões. Fatos conferidos na wiki (páginas Professions, Gathering Tools e Crafting) em 18/11/2026,
// jogo 2.2.4, reescritos com as nossas palavras. Spots de ingrediente e waypoints são da guilda.
// Marcações: [[chave]] abre a caixa de item do glossário.

export type Imagem = { src: string; alt: string; legenda?: string };

export type GatheringProfession = { name: string; icone: string; resources: string; tool: string; usadoPor: string };
export type CraftingProfession = { name: string; icone: string; produces: string; resources: string };

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

export const professionsIntroParagraphs = [
  "As profissões do Wynncraft se dividem em dois grupos. As de coleta (gathering) você upa coletando recursos espalhados pelo mapa. As de crafting usam esses recursos, junto com ingredientes que dropam de mobs, para fazer equipamentos e consumíveis.",
  "Profissões são opcionais e upam separadas do nível de combate. Todas vão até o nível 132, mas o último desbloqueio importante fica no 115 (coleta) e no 117 (crafting).",
];

export const professionsResumo = [
  "4 profissões de coleta e 8 de crafting, cada uma com o próprio nível.",
  "A cada 10 níveis de coleta libera um material novo, que fica mais rápido de coletar e mais confiável nos 10 níveis seguintes.",
  "A ferramenta só muda a velocidade da coleta; dá para coletar material de nível alto com ferramenta básica.",
  "No crafting, o XP vem de craftar itens, e usar ingredientes aumenta bem o ganho.",
];

// Tipos
export const tiposIntro =
  "Cada recurso de coleta dá dois produtos (um com o botão direito, outro com o esquerdo), e cada profissão de crafting usa os materiais de duas de coleta.";

export const gatheringProfessions: GatheringProfession[] = [
  { name: "Mining", icone: "/professions/mining.webp", resources: "Lingote e gema", tool: "Picareta", usadoPor: "Weaponsmithing, Armouring, Tailoring e Jeweling" },
  { name: "Woodcutting", icone: "/professions/woodcuting.webp", resources: "Madeira e papel", tool: "Machado", usadoPor: "Weaponsmithing, Woodworking, Armouring e Scribing" },
  { name: "Farming", icone: "/professions/farming.webp", resources: "Linha e grão", tool: "Foice", usadoPor: "Tailoring, Woodworking, Cooking e Alchemism" },
  { name: "Fishing", icone: "/professions/fishing.webp", resources: "Óleo e carne", tool: "Vara de pesca", usadoPor: "Woodworking, Jeweling, Alchemism, Scribing e Cooking" },
];

export const craftingProfessions: CraftingProfession[] = [
  { name: "Armouring", icone: "/professions/armouring.webp", produces: "Capacetes e peitorais", resources: "Mining + Woodcutting" },
  { name: "Tailoring", icone: "/professions/tailoring.webp", produces: "Calças e botas", resources: "Mining + Farming" },
  { name: "Weaponsmithing", icone: "/professions/weaponsmithing.webp", produces: "Lanças e adagas", resources: "Mining + Woodcutting" },
  { name: "Woodworking", icone: "/professions/woodworking.webp", produces: "Arcos e cajados (Farming); reliks (Fishing)", resources: "Woodcutting + Farming ou Fishing" },
  { name: "Jeweling", icone: "/professions/jeweling.webp", produces: "Anéis, braceletes e colares", resources: "Mining + Fishing" },
  { name: "Alchemism", icone: "/professions/alchemism.webp", produces: "Poções", resources: "Fishing + Farming" },
  { name: "Scribing", icone: "/professions/scribing.webp", produces: "Pergaminhos", resources: "Fishing + Woodcutting" },
  { name: "Cooking", icone: "/professions/cooking.webp", produces: "Comidas", resources: "Fishing + Farming" },
];

// Coleta e ferramentas
export const coletaIntro =
  "Para coletar, você precisa da ferramenta certa e do nível de profissão que o material pede.";

export const coletaRegras = [
  "Um material novo libera nos níveis 1, 10, 20 e assim por diante.",
  "Logo que libera, o material é lento de coletar e o refino dá certo 70% das vezes. A cada nível o refino sobe 2%, até 90%, e a velocidade também melhora; as duas coisas param de subir 10 níveis depois do desbloqueio.",
  "Por isso o 125 é, na prática, o último nível que melhora a coleta (10 depois do último material, no 115).",
  "Quando o refino dá certo, o material sai em um de três tiers: Tier 1 (89%), Tier 2 (10%) ou Tier 3 (1%). O tier melhora o dano, a vida, a durabilidade ou a duração do item craftado.",
  "A velocidade de coleta sobe com ferramenta melhor, com Profession Speed Bomb e com acessórios e consumíveis que tenham ingredientes de gather speed. A chance de refino não muda com nada disso.",
];

/** Ferramentas por tier (wiki, Gathering Tools). */
export const ferramentas = [
  { tier: "T1", nome: "Wooden", nivel: 1, origem: "Tool Merchant" },
  { tier: "T2", nome: "Stone", nivel: 5, origem: "Tool Merchant" },
  { tier: "T3", nome: "Copper", nivel: 15, origem: "Dungeon Merchant" },
  { tier: "T4", nome: "Bronze", nivel: 25, origem: "Dungeon Merchant" },
  { tier: "T5", nome: "Golden", nivel: 35, origem: "Dungeon Merchant" },
  { tier: "T6", nome: "Iron", nivel: 45, origem: "Dungeon Merchant" },
  { tier: "T7", nome: "Steel", nivel: 55, origem: "Dungeon Merchant" },
  { tier: "T8", nome: "Cobalt", nivel: 65, origem: "Dungeon Merchant" },
  { tier: "T9", nome: "Diamond", nivel: 75, origem: "Dungeon Merchant" },
  { tier: "T10", nome: "Molten", nivel: 85, origem: "Dungeon Merchant" },
  { tier: "T11", nome: "Void", nivel: 95, origem: "Dungeon Merchant" },
  { tier: "T12", nome: "Dernic", nivel: 105, origem: "Dungeon Merchant" },
  { tier: "T13", nome: "Titanium", nivel: 115, origem: "Dungeon Merchant" },
];

export const ferramentasNotas = [
  "Toda ferramenta tem durabilidade. Se zerar, o refino nunca dá certo (o XP continua vindo). Conserte no Blacksmith com esmeraldas.",
  "Qualquer tier também sai no Trade Market, e o Item Upgrader sobe a ferramenta um tier usando fragmentos de dungeon.",
  "Pela experiência da guilda, carregar mais de uma ferramenta do mesmo tipo no inventário, mesmo de níveis diferentes, deixa a coleta menos eficiente.",
];

export const coletaImagens: Imagem[] = [
  { src: "/professions/tools.webp", alt: "As quatro ferramentas de coleta: foice, picareta, machado e vara", legenda: "As ferramentas de coleta." },
];

// Crafting
export const craftingIntro =
  "Você crafta nas Crafting Stations, que ficam quase sempre nas cidades. A receita leva os materiais da coleta e até 6 ingredientes.";

export const craftingRegras = [
  "Os materiais definem a faixa de nível do item: material de nível 20 faz itens do nível 20 ao 29. Ingrediente não tem essa trava.",
  "Ingredientes dropam de mobs e saem de baús, quests e alguns merchants. Eles precisam ser daquela profissão e caber no nível da receita.",
  "[[powders|Powders]] entram no craft de armas, armaduras e acessórios: dão efeito elemental, mas tiram durabilidade. Do tier 3 para cima, também podem aumentar o requisito de skill points.",
  "Equipamento craftado tem durabilidade e fica mais fraco quando ela está baixa; consumível funciona por cargas ou por tempo.",
];

export const craftingXp = [
  "No crafting, o XP vem de craftar itens, não de coletar.",
  "Use ingredientes sempre que puder: eles aumentam muito o XP do craft.",
  "Para farmar ingredientes, use build com Loot Bonus, que também vale para o drop deles.",
  "Ingredientes também são vendidos no Trade Market, mas costumam sair caros.",
];

export const bombasDeProfissao = [
  "Profession XP Bomb: XP de coleta e crafting em dobro por 20 minutos.",
  "Profession Speed Bomb: por 10 minutos, coleta e crafting duas vezes mais rápidos, recursos voltando na metade do tempo e craft gastando metade do material.",
  "Pergunte no chat da guilda se tem bomba ativa em algum mundo: quem tem CHAMPION recebe o aviso de todas.",
];

export const craftingImagens: Imagem[] = [
  { src: "/professions/materiais.webp", alt: "Materiais refinados das profissões de coleta", legenda: "Materiais da coleta." },
  { src: "/professions/ingredientes.webp", alt: "Ingredientes de crafting no inventário", legenda: "Ingredientes." },
  { src: "/professions/exemplo_de_craftado.webp", alt: "Item craftado com os efeitos dos ingredientes", legenda: "O item pronto." },
];

// Spots
export const spotsIntro =
  "Os melhores lugares para farmar os ingredientes de cada profissão, com nível e coordenadas (clique para copiar). \"NPC\" é item que você compra de vendedor; \"Até +10\" é spot que serve até uns 10 níveis acima do indicado.";

export const spotsImagens: Imagem[] = [
  { src: "/professions/spot1.webp", alt: "Spot de farm de ingredientes com mobs agrupados", legenda: "Exemplo de spot." },
  { src: "/professions/spot2.webp", alt: "Área aberta com mobs que deixam ingredientes", legenda: "Exemplo de spot." },
  { src: "/professions/spot3.webp", alt: "Outro spot de farm de ingredientes", legenda: "Exemplo de spot." },
];

export const grindSpots: ProfessionSpots[] = [
  {
    profession: "Cooking",
    resources: "Fishing + Farming",
    spots: [
      { level: "1", name: "Potato", coords: "-", isNpc: true },
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
      { level: "1", name: "Coastal Sand", coords: "-691, 34, -2038" },
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

// Waypoints (Wynntils)
export const waypointsIntro =
  "Se você usa o mod Wynntils, dá para colocar no mapa os pontos de coleta de todas as profissões com o arquivo da guilda.";

export const waypointImportSteps = [
  "Baixe o arquivo e copie todo o conteúdo dele",
  "Abra o Content Book",
  "Clique em Overlay Management",
  'Busque por "Info Box"',
  "Escolha uma das 7 disponíveis",
  'Cole o texto em "Info Box Content"',
];

export const waypointSnippet = `[{
  "name": "-----[ Farming ]----",
  "color": "#666666ff",
  "icon": "farming",
  "visibility": "hidden",
  "location": { ... }
}]`;

// Dicas
export const professionsDicas = [
  "Upe a profissão de coleta até 10 níveis acima do material que você mais usa: é aí que ele chega na velocidade e no refino máximos.",
  "Guarde as bombas de profissão para sessões longas de crafting: a Speed Bomb corta pela metade o material gasto.",
  "A gente recomenda deixar as profissões para depois: são opcionais, não mudam a gameplay e tomam muito tempo. Se precisar de um item craftado antes disso, peça para um membro mais experiente. A guilda tem receitas de itens craftados com Loot Bonus no Discord.",
];

export const professionsFontes = [
  { rotulo: "Professions, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Professions" },
  { rotulo: "Gathering Tools, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Gathering_Tools" },
  { rotulo: "Crafting, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Crafting" },
  { rotulo: "Crafting Ingredients, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Crafting_Ingredients" },
];

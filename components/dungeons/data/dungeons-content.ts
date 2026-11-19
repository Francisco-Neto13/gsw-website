// Guia de Dungeons. Fatos conferidos na wiki (páginas Dungeons, The Forgery, Dungeon Merchant e Dungeon Key) em
// 18/11/2026, jogo 2.2.4, reescritos com as nossas palavras.
// Marcações: [[chave]] abre a caixa de item do glossário.

export type Imagem = { src: string; alt: string; legenda?: string };
export type Destaque = { tipo: "info" | "aviso" | "dica"; titulo: string; texto: string };

export const dungeonsIntroParagraphs = [
  "Dungeons são masmorras com fases de parkour, combate e mecânicas próprias, que terminam num chefe. Vencer o chefe conclui a dungeon e rende esmeraldas, fragmentos e um Boss Token, trocados por equipamento no Dungeon Merchant da entrada.",
  "Cada dungeon normal tem uma versão corrompida, mais difícil, que fica na Forgery. Concluir corrompidas diferentes enche o Forgery Chest, a principal fonte de runas e uma das chances de item mítico do jogo.",
];

export const dungeonsResumo = [
  "Toda entrada gasta uma chave, que vale para até 4 jogadores.",
  "As chaves caem dos [[keyGuardian|Key Guardians]] perto de cada dungeon e de world events.",
  "As corrompidas começam no nível 65, ficam na Forgery e não têm Second Chance.",
  "No Forgery Chest, só conta dungeon corrompida diferente; morrer ou passar 3 horas sem concluir uma zera o baú.",
];

// Lista
export const dungeonsListaIntro =
  "Desde a 2.1, as dungeons normais não exigem quest, exceto Fallen Factory e Eldritch Outlook. Clique numa imagem para ampliar.";

// Como entrar
export const acessoIntro =
  "Toda dungeon abre com uma chave própria, entregue ao Key Collector na entrada. Uma chave leva até 4 jogadores.";

export const acessoModos = [
  {
    titulo: "Dungeon normal",
    passos: [
      "Derrote o [[keyGuardian|Key Guardian]] da dungeon: um inimigo raro que aparece em áreas de nível parecido e sempre deixa 1 chave.",
      "Ou ganhe a chave num world event, ou compre no [[tradeMarket|Trade Market]].",
      "Fallen Factory e Eldritch Outlook pedem antes a quest da linha principal (veja a tabela).",
    ],
  },
  {
    titulo: "Dungeon corrompida",
    passos: [
      "A chave cai dos Key Guardians, de lootruns ou de world events, mas chega quebrada.",
      "Leve a chave ao Key Forge Merchant, na Forgery, e pague o conserto em runas (Nii, Uth ou Tol).",
      "Corrompidas não pedem quest. As runas vêm do próprio Forgery Chest e dos guardiões de runa de Gavel.",
    ],
  },
];

export const acessoImagens: Imagem[] = [
  { src: "/dungeons/key.webp", alt: "Chave de uma dungeon normal no inventário", legenda: "Chave de dungeon normal." },
  { src: "/dungeons/corrupted_key.webp", alt: "Chave de uma dungeon corrompida no inventário", legenda: "Chave de dungeon corrompida." },
];

export const secondChance: Destaque = {
  tipo: "info",
  titulo: "Second Chance",
  texto:
    "Nas dungeons normais, morrer não encerra a run: você volta para o começo ou para a sala antes do chefe, conforme onde caiu. As corrompidas não têm essa segunda chance.",
};

// Forgery
export const forgeryIntro =
  "A Forgery é uma ilha flutuante sobre a borda leste da Light Forest, a caminho de Cinfras. Você sobe por um teletransporte logo abaixo dela. Lá ficam os portões das 8 corrompidas, o Key Forge Merchant e o Forgery Chest.";

export const forgeryRegras = [
  "Cada corrompida diferente concluída soma 1 ao baú, até 8/8. Repetir a mesma dungeon não soma.",
  "Para contar, além de vencer o chefe, é preciso matar um número mínimo de inimigos lá dentro. O número muda de dungeon para dungeon, e o contador aparece na tela.",
  "Morrer, ou passar 3 horas sem concluir uma corrompida, zera o baú.",
  "Dá para abrir o baú a qualquer momento na Forgery. A recompensa é a da contagem em que ele estiver.",
];

/** Recompensa média do Forgery Chest por contagem (wiki, The Forgery). */
export const forgeryTabela = [
  { contagem: 1, xp: "300.000", esmeraldas: "~128", runas: "~1", tokens: "0", mitico: "0%" },
  { contagem: 2, xp: "600.000", esmeraldas: "~192", runas: "~2", tokens: "0", mitico: "0%" },
  { contagem: 3, xp: "1.050.000", esmeraldas: "~300", runas: "~4", tokens: "1", mitico: "0,2%" },
  { contagem: 4, xp: "1.650.000", esmeraldas: "~500", runas: "~7", tokens: "2", mitico: "0,4%" },
  { contagem: 5, xp: "2.250.000", esmeraldas: "~750", runas: "~10", tokens: "2", mitico: "0,6%" },
  { contagem: 6, xp: "3.000.000", esmeraldas: "~1000", runas: "~12", tokens: "3", mitico: "0,9%" },
  { contagem: 7, xp: "3.500.000", esmeraldas: "~1500", runas: "~15", tokens: "3", mitico: "1,2%" },
  { contagem: 8, xp: "4.000.000", esmeraldas: "~2000", runas: "~18", tokens: "4", mitico: "1,5%" },
];

export const forgeryMitico: Destaque = {
  tipo: "info",
  titulo: "Chance de mítico acumulada",
  texto:
    "Em 8/8, cada baú aberto sem mítico multiplica a chance do próximo por 1,01. Quando sai um mítico, a chance volta ao início.",
};

export const forgeryExtras = [
  "Blood Melange: consumível que pode sair do baú e soma 8 abates ao contador da dungeon.",
  "Forgery Chain Piece: troféu que só sai do baú em 8/8.",
  "Equipamentos lendários exclusivos do baú, como Cerid's Ingenuity, Gale's Sight e Tisaun's Valor.",
];

export const forgeryImagem: Imagem = {
  src: "/dungeons/forgery_chest.webp",
  alt: "Forgery Chest mostrando a contagem de dungeons concluídas",
  legenda: "O Forgery Chest e a contagem da sequência.",
};

// Dungeon Merchant
export const merchantIntro =
  "Na entrada de cada dungeon há um Dungeon Merchant. Ele vende itens intransferíveis em troca do que a dungeon dá ao ser concluída.";

export const merchantMoedas = [
  {
    titulo: "Boss Token",
    texto:
      "O item do chefe (a Witherhead's Rib, na Decrepit Sewers, por exemplo). Cada conclusão dá 1. Compra as armas, armaduras e acessórios da dungeon, por 1 a 3 tokens cada.",
  },
  {
    titulo: "Fragmentos",
    texto:
      "Cada conclusão dá 3 fragmentos daquela dungeon. Compram [[powders]] e ferramentas de coleta; nas corrompidas, as ferramentas também custam esmeraldas.",
  },
  {
    titulo: "Teleport Scroll",
    texto: "Alguns merchants vendem um pergaminho que leva de volta à dungeon (ou à Forgery, no caso das corrompidas).",
  },
];

export const merchantImagens: Imagem[] = [
  { src: "/dungeons/dungeon_merchangt.webp", alt: "NPC Dungeon Merchant na entrada de uma dungeon", legenda: "O Dungeon Merchant." },
  { src: "/dungeons/merchant_itens.webp", alt: "Itens à venda no Dungeon Merchant", legenda: "Itens da loja e o preço de cada um." },
];

// Recompensas
export const recompensasIntro = "O que cada conclusão rende, e o que a sequência de corrompidas soma no Forgery Chest:";

export const recompensas = [
  { titulo: "Esmeraldas", texto: "Espalhadas em pilhas na entrada da dungeon depois do chefe; o valor sobe com o nível." },
  { titulo: "Boss Token e fragmentos", texto: "1 token e 3 fragmentos por conclusão, gastos no Dungeon Merchant." },
  { titulo: "Equipamento", texto: "Comprado no merchant; os lendários do Forgery Chest só saem do baú." },
  { titulo: "Runas e mítico", texto: "Só no Forgery Chest: runas desde 1/8; tokens e chance de mítico a partir de 3/8." },
];

export const recompensasImagem: Imagem = {
  src: "/dungeons/rewards.webp",
  alt: "Itens dentro de um Forgery Chest aberto em 8/8",
  legenda: "Um Forgery Chest aberto em 8/8.",
};

// Dicas
export const dungeonsDicas = [
  "Se o chefe cair e a dungeon não contar para o baú, faltou o mínimo de abates. Olhe o contador antes de entrar na sala do chefe.",
  "Planeje a sequência das 8 corrompidas antes de começar: cada conclusão abre um novo prazo de 3 horas para a próxima.",
  "Conserte as chaves corrompidas antes de começar a sequência, para não perder tempo do prazo na Forgery.",
];

export const dicaDaGuilda =
  "Em grupo organizado, uma run completa costuma levar uns 30 minutos. Para buscar o 8/8, jogue com quem já conhece as salas.";

export const dungeonsFontes = [
  { rotulo: "Dungeons, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Dungeons" },
  { rotulo: "The Forgery, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/The_Forgery" },
  { rotulo: "Dungeon Merchant, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Dungeon_Merchant" },
  { rotulo: "Dungeon Key, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Dungeon_Key" },
];

// Lista de dungeons. Nível mínimo e chefe: wiki (Dungeons); nomes e local: API oficial (marcadores do mapa).
// Conferido em 18/11/2026, jogo 2.2.4. A região foi deduzida da coordenada.
export type DungeonDaLista = {
  nome: string;
  nivel: number;
  chefe: string;
  regiao: string;
  quest?: string;
  /** Imagem da dungeon (wiki, public/terceiros/); some sozinha se a pasta for removida. */
  imagem?: string;
};

export const dungeonsNormais: DungeonDaLista[] = [
  { nome: "Decrepit Sewers", imagem: "/terceiros/wynncraft/dungeon-decrepit-sewers.webp", nivel: 3, chefe: "Witherhead", regiao: "Ragni" },
  { nome: "Infested Pit", imagem: "/terceiros/wynncraft/dungeon-infested-pit.webp", nivel: 12, chefe: "Arakadicus", regiao: "Wynn" },
  { nome: "Underworld Crypt", imagem: "/terceiros/wynncraft/dungeon-underworld-crypt.webp", nivel: 18, chefe: "Charon", regiao: "Wynn" },
  { nome: "Timelost Sanctum", imagem: "/terceiros/wynncraft/dungeon-timelost-sanctum.webp", nivel: 22, chefe: "Garoth, Keeper of the Sanctum", regiao: "Wynn" },
  { nome: "Sand-Swept Tomb", imagem: "/terceiros/wynncraft/dungeon-sand-swept-tomb.webp", nivel: 31, chefe: "Hashr", regiao: "Deserto de Almuj" },
  { nome: "Ice Barrows", imagem: "/terceiros/wynncraft/dungeon-ice-barrows.webp", nivel: 40, chefe: "Theorick", regiao: "Nesaak" },
  { nome: "Undergrowth Ruins", imagem: "/terceiros/wynncraft/dungeon-undergrowth-ruins.webp", nivel: 49, chefe: "Slykaar", regiao: "Selva de Troms" },
  { nome: "Galleon's Graveyard", imagem: "/terceiros/wynncraft/dungeon-galleons-graveyard.webp", nivel: 58, chefe: "Captain Redbeard e tripulação", regiao: "Oceano" },
  { nome: "Fallen Factory", imagem: "/terceiros/wynncraft/dungeon-fallen-factory.webp", nivel: 89, chefe: "Wynnston e Antikythera Supercomputer", regiao: "Corkus", quest: "The Envoy Part II" },
  { nome: "Eldritch Outlook", imagem: "/terceiros/wynncraft/dungeon-eldritch-outlook.webp", nivel: 101, chefe: "The Eye", regiao: "Silent Expanse", quest: "A Journey Further" },
];

export const dungeonsCorrompidas: DungeonDaLista[] = [
  { nome: "Corrupted Decrepit Sewers", imagem: "/terceiros/wynncraft/dungeon-decrepit-sewers-corrompida.webp", nivel: 65, chefe: "Corrupted Witherhead", regiao: "Forgery" },
  { nome: "Corrupted Infested Pit", imagem: "/terceiros/wynncraft/dungeon-infested-pit-corrompida.webp", nivel: 69, chefe: "Corrupted Arakadicus", regiao: "Forgery" },
  { nome: "Corrupted Lost Sanctuary", imagem: "/terceiros/wynncraft/dungeon-lost-sanctuary-corrompida.webp", nivel: 73, chefe: "Corrupted Garoth", regiao: "Forgery" },
  { nome: "Corrupted Underworld Crypt", imagem: "/terceiros/wynncraft/dungeon-underworld-crypt-corrompida.webp", nivel: 77, chefe: "Corrupted Charon", regiao: "Forgery" },
  { nome: "Corrupted Sand-Swept Tomb", imagem: "/terceiros/wynncraft/dungeon-sand-swept-tomb-corrompida.webp", nivel: 81, chefe: "Corrupted Hashr", regiao: "Forgery" },
  { nome: "Corrupted Ice Barrows", imagem: "/terceiros/wynncraft/dungeon-ice-barrows-corrompida.webp", nivel: 85, chefe: "Corrupted Theorick", regiao: "Forgery" },
  { nome: "Corrupted Undergrowth Ruins", imagem: "/terceiros/wynncraft/dungeon-undergrowth-ruins-corrompida.webp", nivel: 89, chefe: "Corrupted Slykaar", regiao: "Forgery" },
  { nome: "Corrupted Galleon's Graveyard", imagem: "/terceiros/wynncraft/dungeon-galleons-graveyard-corrompida.webp", nivel: 93, chefe: "Corrupted Captain Redbeard e os Mutineers", regiao: "Forgery" },
];

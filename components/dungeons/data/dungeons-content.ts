// Guia de Dungeons. Fatos conferidos na wiki (páginas Dungeons, The Forgery, Dungeon Merchant e Dungeon Key) em
// 18/11/2026, jogo 2.2.4, reescritos com as nossas palavras.
// Marcações: [[chave]] abre a caixa de item do glossário.

export type Imagem = { src: string; alt: string; legenda?: string };
export type Destaque = { tipo: "info" | "aviso" | "dica"; titulo: string; texto: string };

export const dungeonsIntroParagraphs = [
  "Dungeons são masmorras com parkour, combate e mecânicas próprias, e no fim de cada uma tem um boss. Matar o boss fecha a dungeon e dá esmeraldas, fragmentos e um Boss Token, que você troca por equipamento no Dungeon Merchant da entrada.",
  "Cada dungeon normal tem uma versão corrompida, mais difícil, que fica na Forgery. Cada corrompida diferente que você fecha soma no Forgery Chest, o lugar que mais dá runas e uma das poucas chances de mítico do jogo.",
];

export const dungeonsResumo = [
  "Cada entrada gasta uma chave, e uma chave leva até 4 jogadores.",
  "As chaves dropam dos [[keyGuardian|Key Guardians]] perto de cada dungeon e de world events.",
  "As corrompidas começam no nível 65, ficam na Forgery e não têm Second Chance.",
  "No Forgery Chest só conta corrompida diferente. Se você morrer ou passar 3 horas sem fechar uma, o baú zera.",
];

// Lista
export const dungeonsListaIntro =
  "Desde a 2.1, as dungeons normais não pedem quest, tirando Fallen Factory e Eldritch Outlook. Clique numa imagem para ampliar.";

// Como entrar
export const acessoIntro =
  "Cada dungeon tem a sua chave, que você entrega ao Key Collector na entrada. Uma chave leva até 4 jogadores.";

export const acessoModos = [
  {
    titulo: "Dungeon normal",
    passos: [
      "Mate o [[keyGuardian|Key Guardian]] da dungeon: um mob raro que aparece em áreas de nível parecido e sempre dropa 1 chave.",
      "Ela também sai de world events, ou dá para comprar no [[tradeMarket|Trade Market]].",
      "Fallen Factory e Eldritch Outlook pedem uma quest da história principal antes (veja a tabela).",
    ],
  },
  {
    titulo: "Dungeon corrompida",
    passos: [
      "A chave dropa dos Key Guardians, de lootruns ou de world events, mas vem quebrada.",
      "Leve a chave ao Key Forge Merchant, na Forgery, e pague o conserto com runas (Nii, Uth ou Tol).",
      "Corrompidas não pedem quest. As runas saem do próprio Forgery Chest e dos guardiões de runa de Gavel.",
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
    "Nas dungeons normais, morrer não acaba com a run: você volta para o começo ou para a sala antes do boss, dependendo de onde morreu. As corrompidas não têm essa segunda chance.",
};

// Forgery
export const forgeryIntro =
  "A Forgery é uma ilha flutuante em cima da ponta leste da Light Forest, no caminho para Cinfras. Para subir, use o teleporte que fica logo embaixo dela. Lá estão os portões das 8 corrompidas, o Key Forge Merchant e o Forgery Chest.";

export const forgeryRegras = [
  "Cada corrompida diferente que você fecha soma 1 no baú, até 8/8. Repetir a mesma não conta.",
  "Para contar, não basta matar o boss: também é preciso matar um mínimo de mobs lá dentro. Esse mínimo muda de uma dungeon para outra, e o contador aparece na tela.",
  "Se você morrer, ou passar 3 horas sem fechar uma corrompida, o baú zera.",
  "Dá para abrir o baú na Forgery quando quiser. A recompensa é a da contagem em que ele estiver.",
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
    "Em 8/8, cada baú aberto sem mítico multiplica a chance do próximo por 1,01. Quando sai um mítico, a chance volta ao valor inicial.",
};

export const forgeryExtras = [
  "Blood Melange: consumível que pode sair do baú e soma 8 kills no contador da dungeon.",
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
  "Na entrada de cada dungeon tem um Dungeon Merchant. Ele vende itens intransferíveis, pagos com o que a dungeon dá quando você fecha.";

export const merchantMoedas = [
  {
    titulo: "Boss Token",
    texto:
      "O item do boss (a Witherhead's Rib, na Decrepit Sewers, por exemplo). Cada run completa dá 1. Com eles você compra as armas, armaduras e acessórios da dungeon, de 1 a 3 tokens cada.",
  },
  {
    titulo: "Fragmentos",
    texto:
      "Cada run completa dá 3 fragmentos daquela dungeon. Com eles você compra [[powders]] e ferramentas de coleta; nas corrompidas, as ferramentas também custam esmeraldas.",
  },
  {
    titulo: "Teleport Scroll",
    texto: "Alguns merchants vendem um scroll que leva de volta à dungeon (ou à Forgery, no caso das corrompidas).",
  },
];

export const merchantImagens: Imagem[] = [
  { src: "/dungeons/dungeon_merchangt.webp", alt: "NPC Dungeon Merchant na entrada de uma dungeon", legenda: "O Dungeon Merchant." },
  { src: "/dungeons/merchant_itens.webp", alt: "Itens à venda no Dungeon Merchant", legenda: "Itens da loja e o preço de cada um." },
];

// Recompensas
export const recompensasIntro = "O que cada run dá, e o que a sequência de corrompidas soma no Forgery Chest:";

export const recompensas = [
  { titulo: "Esmeraldas", texto: "Ficam em pilhas na entrada da dungeon depois do boss; o valor sobe com o nível." },
  { titulo: "Boss Token e fragmentos", texto: "1 token e 3 fragmentos por run, para gastar no Dungeon Merchant." },
  { titulo: "Equipamento", texto: "Você compra no merchant; os lendários do Forgery Chest só saem do baú." },
  { titulo: "Runas e mítico", texto: "Só no Forgery Chest: runas desde 1/8; tokens e chance de mítico a partir de 3/8." },
];

export const recompensasImagem: Imagem = {
  src: "/dungeons/rewards.webp",
  alt: "Itens dentro de um Forgery Chest aberto em 8/8",
  legenda: "Um Forgery Chest aberto em 8/8.",
};

// Dicas
export const dungeonsDicas = [
  "Se você matou o boss e a dungeon não contou para o baú, faltou o mínimo de kills. Confira o contador antes de entrar na sala do boss.",
  "Planeje a ordem das 8 corrompidas antes de começar: cada uma que você fecha reinicia o prazo de 3 horas para a próxima.",
  "Conserte todas as chaves corrompidas antes de começar a sequência, para não gastar o prazo na Forgery.",
  "Com uma party organizada, uma run completa leva uns 30 minutos. Para fechar o 8/8, jogue com quem já conhece as salas.",
];

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

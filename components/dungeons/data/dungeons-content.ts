export type SectionIntro = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type InfoCard = {
  title: string;
  description: string;
};

export type ImageCard = {
  src: string;
  alt: string;
  caption?: string;
};

export type AccessMode = {
  title: string;
  steps: string[];
  notes?: string;
};

export const dungeonsIntroParagraphs = [
  "As dungeons são masmorras com progressão de dificuldade e recompensas próprias. Hoje o jogo possui versões normais e corruptas, com exigências diferentes para entrada e conclusão.",
  "Neste guia você encontra o fluxo completo: como entrar, como funciona o Forgery System, o papel do Dungeon Merchant e o que esperar das recompensas ao final da run.",
];

export const dungeonsAccessIntro: SectionIntro = {
  eyebrow: "Acesso",
  title: "Como Entrar",
  description:
    "A versão normal é mais acessível e rápida. A versão corrupta é mais difícil e exige mais preparo, mas também aumenta a qualidade das recompensas.",
};

export const dungeonsAccessModes: AccessMode[] = [
  {
    title: "Versão Normal",
    steps: [
      "Dropar a chave de acesso em monstros específicos da dungeon.",
      "Comprar a chave de acesso no Trade Market.",
      "Concluir a quest que libera o conteúdo (quando aplicável).",
    ],
  },
  {
    title: "Versão Corrupta",
    steps: [
      "Obter chave corrupta por drop, market ou via Forgery/World Event.",
      "Craftar a chave com runas quando o nível da dungeon exigir.",
      "Montar a run considerando risco de morte e tempo disponível.",
    ],
    notes:
      "Algumas chaves corruptas exigem combinação específica de runas para craft.",
  },
];

export const dungeonsAccessImages: ImageCard[] = [
  {
    src: "/dungeons/key.webp",
    alt: "Exemplo de chave de dungeon normal",
    caption: "Exemplo de chave para entrada em dungeon normal.",
  },
  {
    src: "/dungeons/corrupted_key.webp",
    alt: "Exemplo de chave de dungeon corrupta",
    caption: "Exemplo de chave corrupta com requisitos adicionais.",
  },
];

export const dungeonsForgeryIntro: SectionIntro = {
  eyebrow: "Desafio máximo",
  title: "Forgery System",
  description:
    "A Forgery recompensa quem conclui as 8 dungeons corrompidas diferentes. Cada corrompida concluída sobe a progressão do Forgery Chest (x/8); repetir a mesma não conta. O progresso zera se você morrer ou passar 3 horas sem concluir uma corrompida.",
};

export const dungeonsForgeryCards: InfoCard[] = [
  {
    title: "Progressão 8/8",
    description:
      "Cada dungeon corrupta concluída sem morte aumenta a progressão do Forgery Chest até o máximo de 8/8.",
  },
  {
    title: "Mythic Chance",
    description:
      "A chance de mítico no baú vai de 0,2% (3/8) até 1,5% (8/8). Em 8/8, cada baú sem mítico multiplica a chance por 1,01, até sair um.",
  },
  {
    title: "Contagem de Mobs",
    description:
      "A dungeon só conta quando o requisito mínimo de mobs for concluído. O contador aparece na tela e o chat confirma.",
  },
  {
    title: "Tempo Limite",
    description:
      "Você tem até 3 horas entre uma corrompida concluída e a próxima; passou disso, o baú zera.",
  },
];

export const dungeonsForgeryImage: ImageCard = {
  src: "/dungeons/forgery_chest.webp",
  alt: "Forgery Chest com progressão de run",
  caption: "Forgery Chest e progressão acumulada da run corrupta.",
};

export const dungeonsMerchantIntro: SectionIntro = {
  eyebrow: "Loja exclusiva",
  title: "Dungeon Merchant",
  description:
    "Na entrada de cada dungeon há um merchant. Cada conclusão rende 3 fragmentos daquela dungeon e 1 Boss Token. Os fragmentos compram equipamento, powders, ferramentas e poções; pela wiki, os itens intransferíveis custam Boss Tokens, mas as páginas dela divergem nesse ponto.",
};

export const dungeonsMerchantCards: InfoCard[] = [
  {
    title: "Equipamentos",
    description:
      "Armas e armaduras exclusivas de dungeon que podem completar builds específicas.",
  },
  {
    title: "Ferramentas",
    description:
      "O merchant também oferece opções úteis para progressão de profissões.",
  },
  {
    title: "Fragmentos",
    description:
      "Fragmentos funcionam como moeda local. Dungeons de níveis diferentes geram fragmentos diferentes.",
  },
];

export const dungeonsMerchantImages: ImageCard[] = [
  {
    src: "/dungeons/dungeon_merchangt.webp",
    alt: "NPC Dungeon Merchant",
    caption: "NPC do Dungeon Merchant disponível na dungeon.",
  },
  {
    src: "/dungeons/merchant_itens.webp",
    alt: "Itens do Dungeon Merchant",
    caption: "Exemplo de itens disponíveis para compra com fragmentos.",
  },
];

export const dungeonsRewardsIntro: SectionIntro = {
  eyebrow: "Ao final da run",
  title: "Recompensas",
  description:
    "Ao concluir dungeons, você recebe esmeraldas, fragmentos e equipamentos. No fluxo corrupto, o Forgery Chest amplia bastante o valor final da run.",
};

export const dungeonsRewardsCards: InfoCard[] = [
  {
    title: "Esmeraldas",
    description: "Drop direto ao concluir a dungeon, escalando com o nível do conteúdo.",
  },
  {
    title: "Runas",
    description: "Recurso importante para craft de chaves e progressão de runs corruptas.",
  },
  {
    title: "Fragmentos",
    description: "Moeda do Dungeon Merchant, junto com o Boss Token que cada conclusão dá.",
  },
  {
    title: "Equipamentos",
    description: "Armas e armaduras de dungeon, incluindo opções exclusivas.",
  },
  {
    title: "Chaves",
    description: "Recompensas que ajudam a manter o ciclo de runs.",
  },
  {
    title: "Míticos",
    description: "Chance disponível no fluxo da Forgery com progressão completa.",
  },
];

export const dungeonsRewardsImage: ImageCard = {
  src: "/dungeons/rewards.webp",
  alt: "Recompensas ao final de dungeon",
  caption: "Exemplo de recompensa após conclusão de dungeon.",
};

export const dungeonsExtrasIntro: SectionIntro = {
  eyebrow: "Informações adicionais",
  title: "Extra",
  description:
    "Notas rápidas para evitar erros comuns durante a run e manter consistência no progresso da Forgery.",
};

export const dungeonsExtras = [
  "Morrer durante o ciclo da Forgery interrompe a progressão perfeita. Para 8/8, a run precisa ser concluída sem mortes.",
  "O Forgery Chest zera se você morrer ou passar 3 horas sem concluir uma corrompida.",
  "É possível abrir o baú antes do 8/8, mas o resultado será proporcional ao progresso acumulado.",
  "Para iniciar o fluxo completo, tenha as chaves fragmentadas necessárias e as runas de craft já preparadas.",
  "Em grupo organizado, runs completas costumam ficar em torno de 30 minutos.",
  "Se o boss cair e não contar, confirme se o requisito mínimo de mobs daquela dungeon foi finalizado.",
];

export const dungeonsExtraHighlights: InfoCard[] = [
  {
    title: "Run sem morte",
    description:
      "A consistência da run é o que define o potencial máximo da Forgery. Uma morte já quebra a progressão perfeita.",
  },
  {
    title: "Janela de 3 horas",
    description:
      "Cada corrompida concluída abre um novo prazo de 3 horas para a próxima. Planeje a rota antes de começar.",
  },
  {
    title: "Checagem de requisito",
    description:
      "Quando a run não contabiliza, quase sempre falta requisito de mob. Sempre confirme o contador da dungeon.",
  },
];

export const dungeonsExtraSupportImages: ImageCard[] = [
  {
    src: "/dungeons/corrupted_key.webp",
    alt: "Chave de dungeon corrupta",
    caption: "Preparação de chave corrupta para manter o ciclo de runs.",
  },
  {
    src: "/dungeons/forgery_chest.webp",
    alt: "Baú da Forgery",
    caption: "Progressão do Forgery Chest depende de runs limpas e consistentes.",
  },
  {
    src: "/dungeons/rewards.webp",
    alt: "Recompensas de dungeon",
    caption: "Resultado final proporcional ao progresso acumulado da sequência.",
  },
];

export const dungeonsExtrasLabels = {
  highlight: "Destaque",
  note: "Nota",
};


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

export const dungeonsListaIntro = {
  title: "Todas as dungeons",
  description:
    "Desde a 2.1, as dungeons normais não exigem quest, exceto Fallen Factory e Eldritch Outlook. As corrompidas ficam na Forgery, em Gavel, e não têm Second Chance.",
};

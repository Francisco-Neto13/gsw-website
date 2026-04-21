export type SectionIntro = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type InfoCard = {
  title: string;
  description: string;
};

export type RankCard = {
  name: string;
  costShares: number;
  summary: string;
  bestFor: string;
  badge: {
    src: string;
    alt: string;
  };
  highlights: string[];
};

export type BombCard = {
  icon: string;
  name: string;
  description: string;
};

export type MembershipBenefit = {
  icon: string;
  title: string;
  description: string;
};

export type PetBundleCard = {
  colorLabel: string;
  name: string;
  notes: string[];
  image: {
    src: string;
    alt: string;
    label: string;
  };
};

export type MediaCard = {
  src: string;
  alt: string;
  label: string;
};

export const silverbullGuideIntro = {
  eyebrow: "Guia Oficial",
  title: "Silverbull Shares",
  paragraphs: [
    "Silverbull Share é uma moeda alternativa do Wynncraft usada para adquirir cosméticos, consumíveis especiais, pets, ranks permanentes e assinatura mensal Silverbull.",
    "Neste guia você encontra o essencial para decidir onde investir suas Shares, com foco em custo-benefício e uso prático no dia a dia.",
  ],
};

export const silverbullOverviewIntro: SectionIntro = {
  eyebrow: "Fundamentos",
  title: "O Que São Shares",
  description:
    "Shares podem ser obtidas no Trade Market com esmeraldas ou na loja virtual com dinheiro real.",
};

export const acquisitionCards: InfoCard[] = [
  {
    title: "Trade Market",
    description:
      "Forma mais comum: comprar Shares com esmeraldas. Valor aproximado mencionado no guia: 30 liquid emeralds por Share.",
  },
  {
    title: "Loja Virtual",
    description:
      "Pacotes pagos com dinheiro real. Exemplo citado: 10 Tradable Shares por 12 dólares.",
  },
];

export const tradableVsUntradable: InfoCard[] = [
  {
    title: "Tradable Shares",
    description:
      "Podem ser vendidas no Trade Market e usadas normalmente em cosméticos e consumíveis. ? o tipo mais comum.",
  },
  {
    title: "Untradable Shares",
    description:
      "Não podem ser vendidas no Trade Market e possui restrições em compras específicas, como assinatura mensal Silverbull.",
  },
];

export const inGameStoreIntro: SectionIntro = {
  eyebrow: "Loja",
  title: "Loja In-game",
  description:
    "Este guia foca na loja dentro do jogo (cosméticos e consumíveis), sem impedir compras diretas pela loja virtual.",
};

export const storeEntryImages: MediaCard[] = [
  {
    src: "/shares/loja_ingame.webp",
    alt: "Tela da loja in-game do Wynncraft",
    label: "Loja In-game",
  },
  {
    src: "/shares/loja_virtual.webp",
    alt: "Tela da loja virtual do Wynncraft",
    label: "Loja Virtual",
  },
];

export const inGameStoreCategoryImages: MediaCard[] = [
  {
    src: "/shares/bombs.webp",
    alt: "Aba de bombas na loja in-game",
    label: "Bombs",
  },
  {
    src: "/shares/chests.webp",
    alt: "Aba de chests e crates na loja in-game",
    label: "Chests e Crates",
  },
  {
    src: "/shares/pets.webp",
    alt: "Aba de pets na loja in-game",
    label: "Pets",
  },
  {
    src: "/shares/tokens.webp",
    alt: "Aba de tokens na loja in-game",
    label: "Tokens",
  },
];

export const inGameStoreSupportImage: MediaCard = {
  src: "/shares/silverbull.webp",
  alt: "Tela principal do menu de shares",
  label: "Silverbull",
};

export const offerImage: MediaCard = {
  src: "/shares/ofertas.webp",
  alt: "Tela de oferta aleatoria na loja",
  label: "Ofertas aleatorias",
};

export const localAccessImage: MediaCard = {
  src: "/shares/local.webp",
  alt: "Acesso local da loja em cidade",
  label: "Acesso local em cidades",
};

export const offerNote =
  "A aba de ofertas exibe promoções aleatórias de tempos em tempos para cada jogador, podendo incluir rank, bombs, tokens e outros itens. Nesta print, a oferta ativa é de tokens.";

export const sharesExtrasDescription =
  "Essa parte reúne tudo o que não fica preso a uma categoria fixa da loja, mas ainda influencia bastante o uso diário das Shares: ofertas rotativas, acesso local nas cidades e leitura de oportunidade para cada perfil de jogador.";

export const sharesExtrasIntro: SectionIntro = {
  eyebrow: "Informações adicionais",
  title: "Extra",
  description: sharesExtrasDescription,
};

export const sharesExtraHighlights: InfoCard[] = [
  {
    title: "Ofertas Rotativas",
    description:
      "As ofertas mudam de tempos em tempos e podem destacar categorias diferentes, como ranks, bombs, bundles ou tokens.",
  },
  {
    title: "Valor Contextual",
    description:
      "A utilidade de cada oferta depende do seu momento no jogo: progressão, cosméticos, eventos ativos e objetivos pessoais.",
  },
  {
    title: "Exemplo Atual",
    description:
      "No exemplo desta página, a oferta exibida e focada em tokens, mantendo o mesmo padrão visual da loja in-game.",
  },
];

export const sharesOfferNotes = [
  "Confira com frequencia para aproveitar janelas de compra melhores sem depender apenas da aba fixa.",
  "Se estiver focando em progressão, priorize ofertas que impactam utilidade direta no seu ciclo de jogo.",
  "Em algumas cidades existe um ponto de acesso local para abrir a loja in-game, checar ofertas e coletar caixas diárias.",
];

export const sharesExtrasLabels = {
  highlight: "Destaque",
  note: "Nota",
};

export const rankIntro: SectionIntro = {
  eyebrow: "Rank Permanente",
  title: "Ranks",
  description:
    "Ranks funcionam como VIP no Wynncraft e acumulam benefícios conforme você sobe de tier.",
};

export const rankCards: RankCard[] = [
  {
    name: "VIP",
    costShares: 15,
    summary: "Primeiro tier pago, focado em qualidade de vida básica.",
    bestFor: "Jogador novo que quer começar com utilidades sem alto investimento.",
    badge: {
      src: "/shares/vip.webp",
      alt: "Rank VIP",
    },
    highlights: [
      "Acesso a Mob Totems diário.",
      "+1 slot de classe (até 7 no total no VIP).",
    ],
  },
  {
    name: "VIP+",
    costShares: 28,
    summary: "Upgrade direto do VIP com mais economia no dia a dia.",
    bestFor: "Quem joga com frequência e quer fluxo constante de crates e mercado.",
    badge: {
      src: "/shares/vip+.webp",
      alt: "Rank VIP+",
    },
    highlights: [
      "Crate diária.",
      "Class Skins.",
      "+5 slots no Trade Market (10 no total).",
    ],
  },
  {
    name: "HERO",
    costShares: 60,
    summary: "Tier de meio de progressão com ferramentas muito usadas.",
    bestFor: "Perfil ativo que troca de servidor e quer praticidade em atualizações.",
    badge: {
      src: "/shares/hero.webp",
      alt: "Rank HERO",
    },
    highlights: [
      "Prioridade de fila.",
      "Acesso beta de updates.",
      "Comando /switch para trocar de mundo sem lobby.",
    ],
  },
  {
    name: "HERO+",
    costShares: 100,
    summary: "Expande o HERO com mais personalização e gestão de classe.",
    bestFor: "Jogador veterano que roda várias classes e valoriza conveniência premium.",
    badge: {
      src: "/shares/hero+.webp",
      alt: "Rank HERO+",
    },
    highlights: [
      "Nick customizado por classe.",
      "World Event Warp.",
      "Melhor gestão de classes (delete instantâneo e backup).",
    ],
  },
  {
    name: "CHAMPION",
    costShares: 171,
    summary: "Tier máximo com foco em status e utilidade global.",
    bestFor: "Quem quer acesso completo ao topo dos benefícios permanentes.",
    badge: {
      src: "/shares/champion.webp",
      alt: "Rank CHAMPION",
    },
    highlights: [
      "Aviso de bombas em outros mundos.",
      "Loja do Trade Market como bau em cidades principais.",
      "Super-prioridade de fila.",
    ],
  },
];

export const rankTip =
  "Dica GsW: HERO tende a ser o melhor custo-benefício para a maioria dos jogadores (60 Shares), cobrindo os benefícios mais usados sem pagar o valor completo do Champion.";

export const membershipIntro: SectionIntro = {
  eyebrow: "Silverbull",
  title: "Silverbull Membership",
  description:
    "E por fim, a queridinha de todos. Se quer estar na moda, vale conferir se voce ja e membro premium da maior organizacao capitalista do mundo.",
};

export const membershipSummary = [
  "A assinatura e um rank nao permanente que custa 6 Tradable Shares e dura 14 dias.",
  "Diferente dos demais ranks, ela traz beneficios unicos nao essenciais para a gameplay, mas que melhoram bastante a experiencia no dia a dia.",
];

export const membershipBenefits: MembershipBenefit[] = [
  {
    icon: "01",
    title: "Chat Tag",
    description: "Mostra a tag da assinatura em cada mensagem enviada no chat.",
  },
  {
    icon: "02",
    title: "Taxa menor do Trade Market",
    description: "A taxa padrao de 5% dos itens comprados no Trade Market cai para 3%.",
  },
  {
    icon: "03",
    title: "Rodar mais cosmeticos",
    description: "Agora sao necessarios apenas 3 cosmeticos para combinar em uma skin de tier maior.",
  },
  {
    icon: "04",
    title: "Crates em dobro",
    description: "As crates gratis de eventos ou de ranks sao dobradas enquanto a assinatura estiver ativa.",
  },
  {
    icon: "05",
    title: "Bonus em dobro",
    description: "Os bonus diarios de Lootrun ou Raid sao dobrados com a Membership ativa.",
  },
  {
    icon: "06",
    title: "Esconder armadura e visuais",
    description: "Libera glints, chromas para cosmeticos e a opcao de esconder pecas da armadura.",
  },
  {
    icon: "07",
    title: "Shares gratis",
    description: "Concede 5 shares mensais gratis, exigindo assinaturas ativas em sequencia.",
  },
  {
    icon: "08",
    title: "Acesso ao BETA",
    description: "Garante acesso ao BETA fechado de futuras atualizacoes quando ele estiver ativo.",
  },
];

export const membershipImage: MediaCard = {
  src: "/shares/assinatura_silverbull.webp",
  alt: "Beneficios da assinatura Silverbull",
  label: "Beneficios da assinatura Silverbull",
};

export const cratesIntro: SectionIntro = {
  eyebrow: "Crates",
  title: "Caixas e Tiers",
  description:
    "Crates entregam cosméticos aleatórios (com exceção de exclusivos sazonais e bundles), e o Tier influencia diretamente sua chance de itens raros.",
};

export const crateSources: InfoCard[] = [
  { title: "Crate Grátis", description: "Aparece ocasionalmente na loja." },
  { title: "Ranks", description: "Todos os ranks concedem crate diária." },
  {
    title: "Eventos Sazonais",
    description: "Missões de eventos como Heroes, Bonfire, Spirits e Blizzard podem dar crates temáticas.",
  },
  {
    title: "Assinatura Silverbull",
    description: "Dobra crates diária de rank e evento enquanto ativa.",
  },
];

export const cratePricingNotes = [
  "Regra base: 1 Share = 1 Crate.",
  "Pacotes maiores costumam compensar mais por garantirem mais crates de tier alto.",
  "Exemplo do guia: dois pacotes menores podem sair piores que um pacote maior no mesmo custo total.",
];

export const crateTierImage = {
  src: "/shares/crates.webp",
  alt: "Tabela de tiers e pacotes de crates",
  label: "Tiers e pacotes de Crates",
};

export const chestStoreImage = {
  src: "/shares/chests.webp",
  alt: "Secao de chests na loja in-game",
  label: "Aba de Chests na loja in-game",
};

export const crateExtraImages: MediaCard[] = [
  {
    src: "/shares/crates_gratuitas.webp",
    alt: "Exemplo de crate gratuita na loja",
    label: "Crate Gratuita",
  },
  {
    src: "/shares/caixa_evento_sazonal.webp",
    alt: "Exemplo de crate de evento sazonal",
    label: "Crate de Evento Sazonal",
  },
];

export const bombsIntro: SectionIntro = {
  eyebrow: "Bombs",
  title: "Bombas Globais",
  description:
    "Bombas aplicam bônus para todo o mundo. Mesmo sem comprar, você pode aproveitar mundos com bombas ativas.",
};

export const bombStoreImage = {
  src: "/shares/bombs.webp",
  alt: "Secao de bombs na loja in-game",
  label: "Aba de Bombs na loja in-game",
};

export const bombCards: BombCard[] = [
{ icon: "\u2694\uFE0F", name: "Combat XP Bomb", description: "Dobra XP de mobs por 20 minutos." },
  { icon: "\u26CF\uFE0F", name: "Profession XP Bomb", description: "Dobra XP de profissões por 20 minutos." },
  { icon: "\u26CF\uFE0F\uD83D\uDCA8", name: "Profession Speed Bomb", description: "Acelera coleta e crafting por 10 minutos e reduz custo de craft." },
  { icon: "\uD83D\uDCAC", name: "Shout Bomb", description: "Mensagem no chat global para todos online." },
  { icon: "\uD83D\uDCA0", name: "Loot Bomb", description: "Dobra loot dropado por mobs por 20 minutos." },
  { icon: "\uD83D\uDCE8", name: "Item Bomb", description: "Entrega bau com itens aleatórios no mundo." },
  { icon: "\uD83D\uDD11", name: "Dungeon Bomb", description: "Entrada grátis em dungeons por 10 minutos." },
  { icon: "\uD83D\uDCE6", name: "Loot Chest Bomb", description: "Aumenta quantidade de itens em baús por 20 minutos." },
  { icon: "\uD83C\uDF10", name: "World Event Bomb", description: "Ativa world events comuns (sem Annihilation)." },
  { icon: "\uD83D\uDCDC", name: "Scroll Charge Bomb", description: "Restaura 2 cargas de teleport scrolls." },
  { icon: "\uD83C\uDF44", name: "Ingredient Bomb", description: "Envia 16 ingredientes aleatórios para todos no mundo." },
  { icon: "\uD83C\uDF89", name: "Party Crackers", description: "Evento visual de celebração no entorno do jogador." },
];

export const petsIntro: SectionIntro = {
  eyebrow: "Pets",
  title: "Bundles",
  description:
    "A loja oferece 3 bundles de pets. Em geral, pets custam 15 Shares, com exceção dos Dragonlings (25 Shares).",
};

export const petsStoreImage = {
  src: "/shares/pets.webp",
  alt: "Secao de pets na loja in-game",
  label: "Aba de Pets na loja in-game",
};

export const bundlesStoreImage = {
  src: "/shares/bundle.webp",
  alt: "Vitrine de bundles na loja",
  label: "Vitrine de Bundles",
};

export const petBundles: PetBundleCard[] = [
  {
    colorLabel: "Crimson",
    name: "Crimson Bundle",
    notes: ["Pacote completo custa 35 Shares.", "Fiery Dragonling custa 25 Shares (demais pets: 15)."],
    image: {
      src: "/shares/crimson_bundles.webp",
      alt: "Crimson bundle de pets",
      label: "Crimson Bundle",
    },
  },
  {
    colorLabel: "Frostpaw",
    name: "Frostpaw Bundle",
    notes: ["Pacote completo custa 35 Shares.", "Water Dragonling custa 25 Shares (demais pets: 15)."],
    image: {
      src: "/shares/Frostpaw_bundles.webp",
      alt: "Frostpaw bundle de pets",
      label: "Frostpaw Bundle",
    },
  },
  {
    colorLabel: "Verdant",
    name: "Verdant Bundle",
    notes: ["Pacote completo custa 35 Shares.", "Emerald Dragonling custa 25 Shares (demais pets: 15)."],
    image: {
      src: "/shares/Verdant_bundles.webp",
      alt: "Verdant bundle de pets",
      label: "Verdant Bundle",
    },
  },
];

export const tokensIntro: SectionIntro = {
  eyebrow: "Tokens",
  title: "Consumíveis Especiais",
  description:
    "Tokens são itens de uso específico para ajustes avançados em progressão, guilda e bônus diário.",
};

export const tokenStoreImage = {
  src: "/shares/tokens.webp",
  alt: "Secao de tokens na loja in-game",
  label: "Aba de Tokens na loja in-game",
};

export const tokenCards: BombCard[] = [
  {
    icon: "\uD83D\uDFE1",
    name: "Traker Reroll Token",
    description: "Rerolla o identificador shiny de uma mítica para outro valor aleatório.",
  },
  {
    icon: "\uD83D\uDD34",
    name: "Traker Reset Token",
    description: "Reseta o identificador shiny de uma mítica para 0.",
  },
  {
    icon: "\uD83D\uDD35",
    name: "Guild Rename Token",
    description: "Permite renomear uma guilda.",
  },
  {
    icon: "\uD83D\uDFE2",
    name: "Daily Bonus Refresh",
    description: "Reseta bônus diário de Lootrun ou Raid. Com Silverbull ativa, efeito é dobrado.",
  },
];


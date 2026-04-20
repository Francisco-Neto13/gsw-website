export type HomePillarIcon = "book" | "clock" | "users";

export type HomePillar = {
  icon: HomePillarIcon;
  title: string;
  description: string;
};

export type HeroSpotlight = {
  label: string;
  note: string;
  href: string;
  image: string;
};

export type HomeGuideCard = {
  label: string;
  description: string;
  href: string;
  image: string;
  eyebrow: string;
};

export const homeHeroContent = {
  brand: "GsW",
  brandSubtitle: "Guardians Of Wynn",
  eyebrow: "Portal brasileiro de Wynncraft",
  title: "Conhecimento de guilda em formato de guia,",
  titleHighlight: "pronto para usar",
  subtitle: "Conhecimento de guilda transformado em guia para toda a comunidade.",
  description:
    "Da progressão inicial ao endgame, reunimos mecânicas, rotas e sistemas em português com foco prático para quem quer evoluir sem perder tempo.",
  backgroundImage: "/bg-guilda.webp",
  secondaryCta: {
    label: "Explorar conteúdos",
    href: "#conteudo",
  },
};

export const homeHeroSpotlights: HeroSpotlight[] = [
  {
    label: "Lootrun",
    note: "Rotas, beacons, camps e setups de tempo.",
    href: "/lootrun",
    image: "/lootrun/Niveis.png",
  },
  {
    label: "Raids",
    note: "Entrada, runas, leitura de mecânica e recompensas.",
    href: "/raids",
    image: "/raids/raid_chief.png",
  },
  {
    label: "Shares",
    note: "Ranks, crates, bombas, tokens e ofertas.",
    href: "/silverbull-shares",
    image: "/shares/loja_ingame.png",
  },
];

export const homeAboutContent = {
  eyebrow: "Visão do projeto",
  title: "Um hub vivo que",
  titleHighlight: "acompanha seu ritmo",
  paragraphs: [
    "Wynncraft tem profundidade, mas muita informação ainda fica espalhada. Este portal organiza tudo em uma estrutura clara, com linguagem direta e foco em execução.",
    "A proposta é simples: abrir uma página e sair com um plano de ação. Por isso cada guia combina explicação curta, print real e referência rápida.",
    "O conteúdo evolui junto com a comunidade GsW. Sempre que um sistema muda, o material é revisado para manter consistência entre páginas.",
  ],
};

export const homePillars: HomePillar[] = [
  {
    icon: "book",
    title: "Guias acionáveis",
    description:
      "Nada de texto vazio. Cada bloco foi pensado para virar ação imediata dentro do jogo.",
  },
  {
    icon: "clock",
    title: "Atualização contínua",
    description:
      "As páginas acompanham o estado atual do projeto, evitando conteúdo desatualizado e quebra de contexto.",
  },
  {
    icon: "users",
    title: "Construído em comunidade",
    description:
      "O portal nasce da prática real de jogadores brasileiros e mantém o padrão visual em todas as seções.",
  },
];

export const homeAboutShowcase = [
  {
    src: "/lootrun/Cinfras_silverbull.png",
    alt: "Entrada do centro de divisão",
    caption: "Ponto de entrada para sistemas avançados",
  },
  {
    src: "/worldevents/we.png",
    alt: "World event em andamento",
    caption: "Cobertura de conteúdo para jogo ativo",
  },
  {
    src: "/shares/loja_ingame.png",
    alt: "Menu da loja in-game",
    caption: "Sistema de shares e ofertas in-game",
  },
  {
    src: "/leveling/party_finder.png",
    alt: "Party finder para leveling",
    caption: "Fluxo inicial para progressão e party",
  },
];

export const homeContentSection = {
  eyebrow: "Cobertura do portal",
  title: "Escolha o seu",
  titleHighlight: "próximo foco",
  description:
    "Cada bloco aponta para um guia com imagem real do próprio conteúdo e objetivo claro.",
};

export const homeGuideCards: HomeGuideCard[] = [
  {
    label: "Lootrun",
    description: "Mostra divisões, camps, beacons e otimização de tempo por rota.",
    href: "/lootrun",
    image: "/lootrun/lootrun_start.png",
    eyebrow: "Sistema",
  },
  {
    label: "Raids",
    description: "Mostra pre-requisitos, estrutura das runs e leitura de boss.",
    href: "/raids",
    image: "/raids/raid_completa.png",
    eyebrow: "PvE",
  },
  {
    label: "Leveling",
    description: "Mostra spots por faixa de nível, party finder e builds de grind.",
    href: "/leveling",
    image: "/leveling/scrapward.png",
    eyebrow: "Progressão",
  },
  {
    label: "World Events",
    description: "Mostra participação, ondas, annihilation e recompensas finais.",
    href: "/world-events",
    image: "/worldevents/Annihilation.png",
    eyebrow: "Evento",
  },
  {
    label: "Dungeons",
    description: "Mostra acesso, merchant, forgery e fluxo completo de rewards.",
    href: "/dungeons",
    image: "/dungeons/rewards.png",
    eyebrow: "Instâncias",
  },
  {
    label: "Shares",
    description: "Mostra loja, ranks, bundles e uso eficiente de tokens.",
    href: "/silverbull-shares",
    image: "/shares/loja_virtual.png",
    eyebrow: "Economia",
  },
  {
    label: "Modos Especiais",
    description: "Mostra regras, limitações e escolhas por perfil de jogador.",
    href: "/modos-especiais",
    image: "/gamemodes/gamemodes.png",
    eyebrow: "Desafio",
  },
  {
    label: "História da GsW",
    description: "Mostra linha do tempo, membros e marcos que moldaram o projeto.",
    href: "/historia",
    image: "/gallery/final_season_2.png",
    eyebrow: "Comunidade",
  },
];

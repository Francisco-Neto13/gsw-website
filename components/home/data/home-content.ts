export type HomePillarIcon = "book" | "clock" | "users";

export type HomePillar = {
  icon: HomePillarIcon;
  title: string;
  description: string;
};

export type HomeContentCategory = {
  label: string;
  description: string;
};

export const homeHeroContent = {
  title: "GsW",
  subtitle: "Guardians Of Wynn",
  backgroundImage: "/bg-guilda.webp",
};

export const homeAboutContent = {
  eyebrow: "Sobre o portal",
  title: "Um portal simples",
  titleHighlight: "e direto",
  paragraphs: [
    "Wynncraft é um jogo rico e complexo, mas boa parte do seu conteúdo nunca foi documentado em português de forma acessível. Quem começa hoje depende de wikis em inglês, vídeos desatualizados ou de perguntar para alguém da comunidade — e nem sempre há alguém disponível.",
    "O objetivo deste portal é mudar isso. Aqui a ideia é reunir guias, tutoriais e referências traduzidas para a comunidade brasileira, escritos com uma linguagem clara e sem enrolação. Seja você alguém que acabou de entrar no servidor ou um veterano que quer consultar uma mecânica específica, este espaço foi pensado para ser útil.",
    "Além dos guias, o portal também carrega um pouco da história da GsW — a guilda brasileira que existe desde 2017 e que deu origem a este projeto. Não é o foco principal, mas faz parte de quem somos.",
  ],
  closingQuote: "Nenhum jogador deveria travar num conteúdo por falta de informação em",
  closingQuoteHighlight: "português",
};

export const homePillars: HomePillar[] = [
  {
    icon: "book",
    title: "Tutoriais em Português",
    description:
      "Conteúdos traduzidos e explicados com foco na comunidade brasileira. Aqui você encontra guias detalhados sobre os sistemas mais complexos do Wynncraft.",
  },
  {
    icon: "clock",
    title: "História da GsW",
    description:
      "Um registro vivo da trajetória da guilda desde 2017. Não é o foco principal do portal, mas continua sendo parte importante da identidade da comunidade.",
  },
  {
    icon: "users",
    title: "Feito pela Comunidade",
    description:
      "Todo o conteúdo aqui foi pensado por e para jogadores brasileiros de Wynncraft. O objetivo é tornar o jogo mais acessível para quem fala português.",
  },
];

export const homeContentSection = {
  eyebrow: "O que você vai encontrar",
  title: "Conteúdo",
  titleHighlight: "explicado",
  description:
    "O foco é cobrir os sistemas do jogo de forma completa e em português. Cada guia é pensado para funcionar tanto para quem está começando quanto para quem quer se aprofundar.",
  closingQuote: "O conhecimento que a comunidade constrói juntos não pertence a ninguém. Pertence a",
  closingQuoteHighlight: "todos",
};

export const homeContentCategories: HomeContentCategory[] = [
  {
    label: "Profissões",
    description:
      "Fishing, Mining, Farming e todas as outras. Entenda como funcionam e como evoluir com mais eficiência.",
  },
  {
    label: "Raids",
    description:
      "Guias das raids do jogo, com dicas de builds, mecânicas e estratégias para grupos e iniciantes.",
  },
  {
    label: "Lootruns",
    description: "Rotas, chests e tudo que você precisa saber para aproveitar melhor os runs de loot.",
  },
  {
    label: "Dungeons",
    description: "Passo a passo das dungeons com mecânicas explicadas de forma clara.",
  },
  {
    label: "XP e Progressão",
    description: "As melhores estratégias para upar personagens sem desperdício de tempo.",
  },
  {
    label: "E muito mais",
    description: "Outros sistemas do jogo também podem ser cobertos aqui ao longo do tempo.",
  },
];

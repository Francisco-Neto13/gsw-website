export type SpecialMode = {
  name: string;
  icon: string;
  unlock: string;
  description: string[];
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export const specialModesIntroParagraphs = [
  "Ao criar uma nova classe, você pode aplicar Modos Especiais para ter uma experiência mais desafiadora. Eles são desbloqueados durante o jogo e, depois de liberados, podem ser usados em qualquer nova classe.",
  "Você pode ativar um ou vários modos ao mesmo tempo, mas a decisão é definitiva para aquele personagem: não é possível desativar depois. Cada modo ativo também adiciona um ícone colorido na tag do personagem.",
];

export const specialModesListIntro: SectionIntro = {
  eyebrow: "Modos",
  title: "Regras Especiais",
  description:
    "Cada modo altera como você progride no personagem. Escolha com cuidado, porque os efeitos ficam fixos até o fim daquela classe.",
};

export const specialModes: SpecialMode[] = [
  {
    name: "Hardcore",
    icon: "/gamemodes/hardcore.svg",
    unlock: "Liberado após alcançar o level 30 em qualquer classe.",
    description: [
      "Faz o personagem perder a maioria dos itens após a morte, exceto em contextos específicos como duelo ou estágios protegidos de quest.",
      "Quando ocorre uma morte válida, o emblema vermelho do modo é removido e fica permanentemente cinza.",
      "Mortes em raids, lootruns, wars, world events finalizados com sucesso pela party e o comando /kill não removem o emblema vermelho, mas /kill não evita drop de itens.",
    ],
  },
  {
    name: "Ironman",
    icon: "/gamemodes/ironman.svg",
    unlock: "Liberado após alcançar o level 50 em qualquer classe.",
    description: [
      "Bloqueia trade market, banco compartilhado e trocas com outros jogadores.",
      "A bolsa de ingredients recebe uma propriedade extra para guardar qualquer tipo de item.",
      "Também exige progressão totalmente própria: sem buffs ou healing de jogadores externos para XP e drops de monstros.",
    ],
  },
  {
    name: "Ultimate Ironman",
    icon: "/gamemodes/ultimate_ironman.svg",
    unlock: "Liberado após alcançar o level 50 em qualquer classe.",
    description: [
      "Mantém todas as limitações do Ironman com uma restrição extra: banco individual do personagem também bloqueado.",
      "O comando /ironman pode reduzir um estágio até o Ironman normal.",
      "Essa redução é irreversível.",
    ],
  },
  {
    name: "Craftsman",
    icon: "/gamemodes/craftsman.svg",
    unlock: "Liberado após alcançar o level 50 em qualquer classe.",
    description: [
      "Força o uso de itens craftados na build, com exceção apenas de itens de quest.",
      "Materiais e ingredients devem ser obtidos por farm, NPCs ou trade market, quando permitido pelo modo ativo.",
    ],
  },
  {
    name: "Hunted",
    icon: "/gamemodes/hunted.svg",
    unlock: 'Liberado após concluir a quest "A Hunter\'s Calling" no level 103 em qualquer classe.',
    description: [
      "Ativa o PvP, permitindo combate entre jogadores com diferença de até 10 níveis.",
      "Ao derrotar outro jogador, é possível pegar drops (itens míticos e introcáveis não dropam).",
      "Cidades continuam como áreas seguras.",
    ],
  },
];

export const combinedModesParagraph =
  "Ao combinar vários modos, nasce um estilo de jogo exponencialmente mais desafiador que a gameplay padrão. Hoje, HUIC(H) e HIC(H) são considerados entre os formatos mais difíceis adotados pela comunidade.";

export const combinedModesRequirements = [
  "Content Book 100%",
  "Legendary Island solo",
  "Emblema vermelho do Hardcore até a conclusão do mod",
];

export const specialModesChallengeIntro: SectionIntro = {
  eyebrow: "Comunidade",
  title: "Combinações e Desafio",
  description: combinedModesParagraph,
};

export const specialModesChallengeLabels = {
  blockTitle: "Requisitos e referência visual",
  blockDescription:
    "Base usada pela comunidade para validar runs completas nos modos especiais.",
  requirementsTitle: "Requisitos do desafio geral",
  imageTitle: "Todos os modos de jogo",
};

export const specialModesReferenceImage = {
  src: "/gamemodes/gamemodes.png",
  alt: "Tabela de combinações dos modos especiais da comunidade",
};

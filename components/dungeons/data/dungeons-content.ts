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
      "Comprar a chave de acesso no Market Place.",
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
    src: "/dungeons/key.png",
    alt: "Exemplo de chave de dungeon normal",
    caption: "Exemplo de chave para entrada em dungeon normal.",
  },
  {
    src: "/dungeons/corrupted_key.png",
    alt: "Exemplo de chave de dungeon corrupta",
    caption: "Exemplo de chave corrupta com requisitos adicionais.",
  },
];

export const dungeonsForgeryIntro: SectionIntro = {
  eyebrow: "Desafio máximo",
  title: "Forgery System",
  description:
    "A Forgery exige concluir as 8 dungeons corruptas sem morrer, dentro de uma janela de 3 horas. Quanto mais progresso sem falhas, melhor o resultado do Forgery Chest.",
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
      "Uma run completa pode alcançar até 1,5% de chance de mítico. Sem drop, a chance acumula 0,01% por run.",
  },
  {
    title: "Contagem de Mobs",
    description:
      "A dungeon só conta quando o requisito mínimo de mobs for concluído. O contador aparece na tela e o chat confirma.",
  },
  {
    title: "Tempo Limite",
    description:
      "O cronômetro começa após a primeira corrupta concluída e segue por até 3 horas totais.",
  },
];

export const dungeonsForgeryImage: ImageCard = {
  src: "/dungeons/forgery_chest.png",
  alt: "Forgery Chest com progressão de run",
  caption: "Forgery Chest e progressão acumulada da run corrupta.",
};

export const dungeonsMerchantIntro: SectionIntro = {
  eyebrow: "Loja exclusiva",
  title: "Dungeon Merchant",
  description:
    "Cada dungeon possui um merchant com itens específicos comprados com fragmentos obtidos no próprio conteúdo.",
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
    src: "/dungeons/dungeon_merchangt.png",
    alt: "NPC Dungeon Merchant",
    caption: "NPC do Dungeon Merchant disponível na dungeon.",
  },
  {
    src: "/dungeons/merchant_itens.png",
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
    description: "Moeda exclusiva para o Dungeon Merchant.",
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
  src: "/dungeons/rewards.png",
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
  "Após concluir a primeira corrupta, o cronômetro global da run continua por até 3 horas, mesmo com pausas.",
  "É possível abrir o baú antes do 8/8, mas o resultado será proporcional ao progresso acumulado.",
  "Para iniciar o fluxo completo, tenha as chaves fragmentadas necessárias e as runas de craft já preparadas.",
  "Em grupo organizado, runs completas costumam ficar em torno de 30 minutos.",
  "Se o boss cair e não contar, confirme se o requisito mínimo de mobs daquela dungeon foi finalizado.",
];

export const dungeonsExtrasLabels = {
  note: "Nota",
};

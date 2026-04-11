export type InfoCard = {
  title: string;
  description: string;
};

export type ImageCard = {
  title: string;
  src: string;
  alt: string;
};

export const worldEventsIntroParagraphs = [
  "World Events são eventos que acontecem ao redor do mapa do Wynncraft em diversas localidades. São desafios compostos por waves e chefes que, após serem derrotados, recompensam o jogador com itens exclusivos e esmeraldas.",
  "Comparado com Raids e LootRuns, participar é muito mais simples: eles aparecem de forma aleatória no mapa com notificação no chat. Neste guia você vai entender como funcionam, o que é o Annihilation e quais recompensas esperar.",
];

export const worldEventsParticipationDescription =
  "Os eventos acontecem em diversas localidades do mapa e aparecem de forma aleatória com uma notificação no chat, indicando nome, tempo disponível e localização.";

export const worldEventsMechanicsDescription =
  "A estrutura dos world events segue a mesma lógica: waves de inimigos, chefe final e baú de recompensa para quem conclui.";

export const worldEventsAnnihilationDescription =
  "O Annihilation é o boss principal dos world events. Ele acontece em momentos específicos e foi projetado para ser feito em party.";

export const annihilationVideo = {
  videoId: "NEvfcrQujDI",
  title: "Speedrun do Annihilation",
  caption: "Speedrun do boss Annihilation.",
};

export const worldEventsRewardsDescription =
  "Após derrotar o chefe, um baú aparece com recompensas que variam por região e nível do evento.";

export const participationCards: InfoCard[] = [
  {
    title: "Notificação no Chat",
    description:
      "Quando um world event começa, uma mensagem aparece no chat com o nome, o tempo restante e a localização do evento. Basta se dirigir ao local indicado para participar.",
  },
  {
    title: "Requisito de Quest",
    description:
      "Praticamente todos os world events exigem que o jogador tenha completado uma quest específica para participar. O requisito é exibido no chat junto com a notificação do evento.",
  },
];

export const participationImages: ImageCard[] = [
  {
    title: "World Event 1",
    src: "/worldevents/world_event_1.png",
    alt: "Exemplo de world event em andamento",
  },
  {
    title: "World Event 2",
    src: "/worldevents/world_event_2.png",
    alt: "Segundo exemplo de world event em andamento",
  },
];

export const mechanicsCards: InfoCard[] = [
  {
    title: "Waves",
    description:
      "Cada evento tem um número pré-determinado de waves que precisam ser eliminadas antes de o chefe final aparecer. A dificuldade varia de acordo com a região e o nível do evento.",
  },
  {
    title: "Party",
    description:
      "Você pode fazer o evento sozinho ou em party com amigos. É importante saber que a porcentagem de vida dos mobs escala com a quantidade de membros na party.",
  },
  {
    title: "Chefe Final",
    description:
      "Após eliminar todas as waves, o chefe do evento surge. Derrotá-lo libera o baú de recompensas para todos os participantes presentes.",
  },
  {
    title: "Recompensas",
    description:
      "O baú final contém itens que variam de acordo com a região e o nível do evento. Eventos de nível mais alto oferecem recompensas melhores e mais esmeraldas.",
  },
];

export const annihilationPartyTips = [
  "DPS (causadores de dano) para manter pressão constante no boss.",
  "Healers, normalmente Shamans ou Mages, para sustentar o time durante a luta.",
  "A maioria dos ataques do boss é gerenciável com boa cura constante.",
  "Leve scrolls de dano, vida, defesa e mana para maximizar o desempenho.",
];

export const annihilationSunTips = [
  "O boss canaliza um sol que cresce progressivamente no centro da arena.",
  "Se atingir o tamanho máximo, ele explode e mata todo o time instantaneamente.",
  "Todos os jogadores devem focar e destruir o sol antes que isso aconteça.",
  "Após o sol ser destruído, healers inimigos surgem à esquerda, direita e atrás do boss.",
  "Um ou dois DPS devem sair para eliminar os healers enquanto o restante sustenta o centro.",
];

export const annihilationImages: ImageCard[] = [
  {
    title: "Annihilation 1",
    src: "/worldevents/Annihilation.png",
    alt: "Arena do Annihilation durante a luta",
  },
  {
    title: "Annihilation 2",
    src: "/worldevents/annihilation_portal.png",
    alt: "Portal do Annihilation em world events",
  },
];

export const rewardCards: InfoCard[] = [
  {
    title: "Ingredients",
    description: "Normais e exclusivos do evento, variando por região.",
  },
  {
    title: "Esmeraldas",
    description: "Quantidade escala com o nível do evento, chegando a até 4 LE nos mais altos.",
  },
  {
    title: "Itens",
    description: "Normais e exclusivos. Eventos lvl 90+ têm chance pequena de dropar míticos aleatórios.",
  },
  {
    title: "Annihilation",
    description: "Recompensas especiais: runas, esmeraldas e míticas exclusivas do Annihilation.",
  },
];

export const rewardChestImage: ImageCard = {
  title: "Baú final",
  src: "/worldevents/bau_final_we.png",
  alt: "Baú de recompensas do world event",
};

export const rewardChestCaption = "Baú de recompensas após finalizar um world event.";

export const worldEventsExtras = [
  "World events de nível alto dão uma quantidade maior de esmeraldas, chegando a até 4 LE.",
  "World events lvl 90+ têm uma chance pequena de dropar itens míticos de forma aleatória.",
  "Quando for fazer o Annihilation com a party, certifiquem-se de levar scrolls de dano, vida, defesa, mana e outros buffs.",
  "Alguns ingredients importantes podem ser dropados em eventos globais específicos. Pergunte no chat da guilda e alguém capacitado irá responder.",
];

export const worldEventsExtrasQuote =
  "O mundo não para de gerar eventos. A questão é se você vai estar lá quando o Annihilation aparecer.";

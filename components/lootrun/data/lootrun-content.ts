export type MediaPlaceholder = {
  name: string;
  src?: string;
  alt?: string;
  caption?: string;
  note?: string;
};

export type LootrunCamp = {
  name: string;
  coordinates: string;
  difficulty: "Fácil" | "Médio" | "Difícil" | "Infernal";
  notes: string[];
  dangerousChallenges?: string[];
  media?: MediaPlaceholder[];
};

export type LootrunRewardVideo = {
  id: string;
  title: string;
  description: string;
};

export type LootrunMechanicBlock = {
  title: string;
  description: string;
  points: string[];
  media?: MediaPlaceholder[];
};

export type LootrunBeacon = {
  color: string;
  effect: string;
  notes?: string[];
};

export type LootrunCombo = {
  title: string;
  challengeRange: string;
  summary: string;
  missionRequired?: string[];
  missionRecommended?: string[];
  trialRequired?: string[];
  trialRecommended?: string[];
};

export const lootrunGuideIntro = {
  eyebrow: "Guia Oficial",
  title: "Lootrunning",
  paragraphs: [
    "Lootrunning é uma atividade de endgame focada em saquear cavernas, concluir desafios e maximizar recompensas como míticos, esmeraldas e itens valiosos.",
    "Este guia foi reformulado para cobrir o fluxo completo: participação, divisões, lootcamps, mecânicas (tempo, desafios, beacons, curses, boons, missões e trials), recompensas, combos e extras.",
  ],
};

export const lootrunParticipation = {
  eyebrow: "Primeiros passos",
  title: "Como Participar",
  paragraphs: [
    "Para começar, vá ao Centro de Divisão Silverbull, ao leste de Cinfras, e faça sua inscrição na divisão de Lootrun.",
    "Depois do registro, você libera o acesso ao sistema de Lootrun e pode iniciar sua progressão.",
  ],
  location: "-159, 36, -4795",
  npcNote: "O NPC da Lootrun é o da esquerda.",
  media: [
    {
      name: "Centro de Divisão Silverbull",
      src: "/lootrun/Cinfras_silverbull.png",
      alt: "Centro de Divisão Silverbull no leste de Cinfras",
    },
    {
      name: "NPC de inscrição da Lootrun",
      src: "/lootrun/NPCCinfras_silverbull.png",
      alt: "NPC da lootrun no Centro de Divisão Silverbull",
    },
  ],
};

export const lootrunCamps: LootrunCamp[] = [
  {
    name: "Canyon of the Lost Excursion (South)",
    coordinates: "-1560, 97, -2675",
    difficulty: "Médio",
    notes: [
      "Rota estável para progressão intermediária.",
      "Bom campo para praticar ritmo de desafios e leitura de beacon.",
    ],
    media: [
      { name: "Canyon Camp", src: "/lootrun/canyon_camp.png", alt: "Lootcamp Canyon" },
      { name: "Jump Pads", src: "/lootrun/jump_pads.gif", alt: "Jump pads em Canyon" },
    ],
  },
  {
    name: "The Corkus Traversal",
    coordinates: "-1560, 97, -2675",
    difficulty: "Difícil",
    notes: [
      "Mapa amplo e com muitos deslocamentos.",
      "Use os canos de atalho para otimizar tempo entre desafios.",
    ],
    dangerousChallenges: [
      "Sanitizing Robots (Defense)",
      "The Warehouse (Spelunk)",
      "Pirate Lattice (Spelunk)",
      "Fanatic Nest (Slay)",
    ],
    media: [
      { name: "Corkus Camp", src: "/lootrun/corkus_camp.png", alt: "Lootcamp Corkus" },
      { name: "Fast Travels em Corkus", src: "/lootrun/fast_travels_corkus.gif", alt: "Atalhos de Corkus" },
    ],
  },
  {
    name: "Molten Heights Hike",
    coordinates: "1270, 10, -5130",
    difficulty: "Médio",
    notes: [
      "Tem cavernas opcionais acessíveis durante a run.",
      "As opcionais dão loot adicional, sem objetivo obrigatório de challenge.",
    ],
    media: [
      { name: "Molten Camp", src: "/lootrun/molten_camp.png", alt: "Lootcamp Molten Heights" },
      { name: "Rota em Molten", src: "/lootrun/gif_molten.gif", alt: "Exemplo de rota em Molten Heights" },
    ],
  },
  {
    name: "Sky Islands Exploration",
    coordinates: "1035, 135, -4420",
    difficulty: "Médio",
    notes: [
      "Mobilidade é essencial para evitar quedas no void.",
      "Nuvens ajudam no deslocamento vertical e horizontal.",
    ],
    dangerousChallenges: [
      "Debris of Furtication (Slay)",
      "Phantasmic Field (Slay)",
      "Empty Nest (Defense)",
      "Ovine Spire (Spelunk)",
    ],
    media: [
      { name: "Sky Camp", src: "/lootrun/sky_camp.png", alt: "Lootcamp Sky Islands" },
      { name: "Nuvens de mobilidade", src: "/lootrun/nuvens_espalhadas.png", alt: "Nuvens de mobilidade em Sky" },
    ],
  },
  {
    name: "Silent Expanse Expedition",
    coordinates: "990, 77, -785",
    difficulty: "Médio",
    notes: [
      "Desafios rápidos, mas com eventos aleatórios que podem atrasar a run.",
      "Fique atento ao Rare Mob Fool Eater em rota de desafios.",
    ],
    dangerousChallenges: [
      "Graveyard of the Thousand (Slay)",
      "Exiled Garden (Slay)",
      "Collapse Passage (Defense)",
      "The Place Conglomerated/Coalesced (Spelunk)",
    ],
    media: [
      { name: "Silent Expanse Camp", src: "/lootrun/se_camp.png", alt: "Lootcamp Silent Expanse" },
      { name: "Fool Eater (spawn 1)", src: "/lootrun/fool_eater1.png", alt: "Rare Mob Fool Eater" },
      { name: "Fool Eater (spawn 2)", src: "/lootrun/fool_eater2.png", alt: "Rare Mob Fool Eater no mapa" },
    ],
  },
  {
    name: "The Fruma Foray (West)",
    coordinates: "-2002, 4, -775",
    difficulty: "Difícil",
    notes: [
      "Cavernas mais curtas que Fruma East, porém ainda exigentes.",
      "Na Weapons Factory, evite entrada frontal para não tomar burst.",
    ],
    dangerousChallenges: ["Escalonamento de curses em todos os desafios"],
    media: [{ name: "Fruma West Camp", src: "/lootrun/fruma_west_camp.png", alt: "Lootcamp Fruma West" }],
  },
  {
    name: "The Fruma Foray (East)",
    coordinates: "-1294, 75, -1146",
    difficulty: "Infernal",
    notes: [
      "Atualmente uma das runs mais difíceis e longas.",
      "Priorize consistência de rota, puzzles memorizados e gestão de tempo.",
    ],
    dangerousChallenges: ["Escalonamento de curses em todos os desafios"],
    media: [{ name: "Fruma East Camp", src: "/lootrun/fruma_east_camp.png", alt: "Lootcamp Fruma East" }],
  },
];

export const lootrunCampsIntro = {
  eyebrow: "Lootcamps",
  title: "Campos e Desbloqueios",
  description:
    "Depois da inscrição, o próximo passo é escolher em qual lootcamp rodar. Cada campo tem requisitos de quests e cavernas para liberação completa.",
  notes: [
    "Todos os lootcamps ficam marcados no Content Book.",
    "Nem toda caverna da região é obrigatória em todos os casos.",
    "Algumas cavernas opcionais aparecem durante a run apenas como loot extra.",
  ],
  media: [
    {
      name: "Exemplo de requisitos de unlock",
      src: "/lootrun/missoes_necessarias.png",
      alt: "Requisitos de cave e quest para liberar lootrun",
    },
  ],
};

export const lootrunDivisions = {
  eyebrow: "Progressão",
  title: "Divisões e Desbloqueios",
  description:
    "A progressão de Lootrun funciona por XP próprio da atividade. Completar runs libera divisões e melhora sua capacidade de controlar as escolhas da run.",
  points: [
    "Lootrun usa XP específico da atividade, separado do XP de combate.",
    "Run falhada antes do Desafio 4 não concede XP.",
    "Cap padrão de XP por run: 500 (com bônus diário pode chegar a 700).",
    "As divisões possuem faixas I, II e III, com exceções nos ranks mais altos.",
    "A progressão de rank libera mais consistência para controlar decisões da run.",
  ],
  media: [
    {
      name: "Tela de divisões de Lootrun",
      src: "/lootrun/Niveis.png",
      alt: "Tela de níveis e divisões de lootrun",
    },
  ],
};

export const lootrunMechanicsIntro = {
  eyebrow: "Mecânicas",
  title: "Fundamentos da Run",
  description:
    "As mecânicas abaixo definem o ritmo, o risco e o potencial de recompensa da sua lootrun.",
};

export const lootrunMechanicBlocks: LootrunMechanicBlock[] = [
  {
    title: "Desafios",
    description: "Base da progressão dentro da lootrun.",
    points: [
      "Toda run começa com 12 desafios e pode chegar ao máximo de 100.",
      "Cada desafio concluído aumenta seu contador em +1.",
      "Você aumenta o limite por beacon branco/vermelho ou por missão como Sacrificial Ritual.",
      "Ao atingir o limite total de desafios, a run encerra.",
    ],
    media: [
      { name: "HUD de desafios", src: "/lootrun/icones_lootrun.gif", alt: "Ícones de desafios da lootrun" },
      {
        name: "Aumento de limite de desafios",
        src: "/lootrun/limite_desafios.gif",
        alt: "Aumento de limite de desafios por beacon",
        caption: "Beacons vermelho e branco podem ampliar o limite máximo de desafios da run.",
      },
      {
        name: "Contador de desafios",
        src: "/lootrun/desafio_gidf.gif",
        alt: "Exemplo de progressão do contador de desafios",
        caption: "Cada desafio concluído soma no contador até alcançar o limite da run.",
      },
      {
        name: "Fim por limite de desafios",
        src: "/lootrun/lootrun_acabando.gif",
        alt: "Lootrun encerrando ao atingir limite",
        caption: "Quando o limite de desafios é atingido, a lootrun é finalizada automaticamente.",
      },
    ],
  },
  {
    title: "Timer / Tempo",
    description: "Seu recurso mais crítico durante runs longas.",
    points: [
      "Tempo é ganho ao alcançar e ao concluir desafios (com exceções).",
      "Morte/falha remove 1 minuto; em falha de desafio também reduz limite de desafios em 1.",
      "Cap padrão é 15 minutos, com exceção relevante do beacon verde.",
      "Beacon vermelho adiciona desafios, mas bloqueia ganho de tempo por alguns desafios.",
      "Se o timer zerar, a lootrun termina imediatamente.",
    ],
    media: [
      { name: "Timer da lootrun", src: "/lootrun/timer.png", alt: "Timer da lootrun no HUD" },
      {
        name: "Tempo ao chegar no desafio",
        src: "/lootrun/GanhandoTempoChegando_no_desafio.gif",
        alt: "Ganho de tempo ao chegar no desafio",
        caption: "Você também recebe tempo ao alcançar o ponto do desafio.",
      },
      {
        name: "Tempo ao concluir desafio",
        src: "/lootrun/GanhandoTempo_Terminando_o_desafio_2.gif",
        alt: "Ganho de tempo ao completar desafio",
        caption: "Concluir o objetivo do desafio adiciona tempo ao cronômetro.",
      },
      {
        name: "Pausa de tempo ao abrir baú de challenge",
        src: "/lootrun/challenge_reward.png",
        alt: "Baú de challenge com timer pausado",
        caption: "Ao abrir certos baús de challenge, o tempo pode ser pausado temporariamente.",
      },
      {
        name: "Penalidade ao morrer em desafio",
        src: "/lootrun/morrendo_desafio.gif",
        alt: "Redução de tempo ao morrer em desafio",
        caption: "Morrer/falhar durante desafio aplica penalidade de tempo e pode reduzir desafios máximos.",
      },
      {
        name: "Penalidade de tempo ao morrer",
        src: "/lootrun/tempo_diminuindo_ao_morrer.gif",
        alt: "Tempo diminuindo ao morrer",
        caption: "A morte fora de desafio ainda consome tempo da run.",
      },
      { name: "Cap de 15 minutos", src: "/lootrun/timer_15_minutos.png", alt: "Limite de timer em 15 minutos" },
      { name: "Timer em 13 minutos", src: "/lootrun/timer_13minutos.png", alt: "Exemplo de timer durante a run" },
      {
        name: "Extrapolando timer com green beacon",
        src: "/lootrun/timer_15+_minutos.png",
        alt: "Timer acima de 15 minutos com green beacon",
      },
      { name: "Flying chest", src: "/lootrun/flying_chest.png", alt: "Exemplo de flying chest" },
    ],
  },
];

export const lootrunAdvancedSystemsIntro = {
  eyebrow: "Sistemas da Run",
  title: "Rerolls, Curses, Boons e Trials",
  description:
    "Depois de dominar desafios, timer e beacons, estes sistemas definem o teto da sua run.",
};

export const lootrunAdvancedSystems: LootrunMechanicBlock[] = [
  {
    title: "Beacon Rerolls",
    description: "Ferramenta para manipular opções de beacon no interlúdio.",
    points: [
      "Reroll troca todas as opções atuais por novas opções aleatórias.",
      "No rank Commander, você inicia com 2 rerolls.",
      "Pode ser obtido por beacon rosa e por missões específicas (ex.: Backup Beat).",
    ],
    media: [
      {
        name: "Interface de beacon reroll",
        src: "/lootrun/beacon_rr.gif",
        alt: "Beacon rerolls no interlúdio",
      },
    ],
  },
  {
    title: "Curses e Radiance",
    description: "Escalonamento de dificuldade dos mobs ao longo da run.",
    points: [
      "Curses podem aumentar vida, dano, resistência, radiant chance e radiant power dos inimigos.",
      "Os efeitos acumulam; Enemy Resistance tem cap de 70%.",
      "Com Radiant Power alto, mobs radiantes se tornam mais perigosos e podem espalhar pressão.",
      "Limpeza de curse pode vir de missões/trials como Cleasing Greed, Inner Peace e Chronotrigger.",
    ],
    media: [
      {
        name: "Curses ativos",
        src: "/lootrun/radiance.png",
        alt: "Exemplo de curses e radiance ativos",
      },
    ],
  },
  {
    title: "Boons",
    description: "Buffs permanentes da run escolhidos em beacon azul.",
    points: [
      "Escalam por potência (Base, Vibrante, Vibrante + Aqua).",
      "Existem boons dinâmicos (escalam com condição) e estáticos (ganho imediato).",
      "Podem buffar dano, atributos, loot bonus/quality, mana, vida e utilidade.",
      "Missões/trials podem consumir ou enfraquecer boons; escolha com cuidado.",
    ],
    media: [
      { name: "Seleção de boons", src: "/lootrun/boons_escolhas.gif", alt: "Escolha de boons na lootrun" },
      { name: "Boons gerais", src: "/lootrun/boons_gerais.png", alt: "Visão geral de boons ativos" },
      { name: "Boons detalhe 1", src: "/lootrun/boon1.png", alt: "Detalhes de boons (exemplo 1)" },
      { name: "Boons detalhe 2", src: "/lootrun/boon2.png", alt: "Detalhes de boons (exemplo 2)" },
    ],
  },
  {
    title: "Missões e Trials",
    description: "Camada estratégica que define sua build da run.",
    points: [
      "Missões alteram economia de tempo, pulls e consistência de progressão.",
      "Trials aumentam risco, mas destravam recompensas fortes (rerolls/sacrifices).",
      "Combinar missão e trial corretamente é o principal diferencial de runs longas.",
    ],
    media: [
      { name: "Escolha de missão", src: "/lootrun/missao_exemplo.png", alt: "Escolha de missão na lootrun" },
    ],
  },
];

export const lootrunBeaconsIntro = {
  eyebrow: "Beacons",
  title: "Cores e Efeitos",
  description:
    "Efeitos listados no formato Base / Vibrante / Vibrante + Aqua, quando aplicável.",
};

export const lootrunBeacons: LootrunBeacon[] = [
  {
    color: "Blue",
    effect: "Escolha 1 Boon entre 4 opções. Potência: 100% / 200% / 600%.",
  },
  {
    color: "Purple",
    effect: "+1 / +2 / +6 Curses e +1 / +2 / +6 Pulls.",
  },
  {
    color: "Yellow",
    effect: "Gera 1 / 2 / 6 Flying Chests.",
  },
  {
    color: "Pink",
    effect: "Concede 1 / 2 / 6 Beacon Rerolls.",
  },
  {
    color: "Aqua",
    effect: "+100% / +200% de efeito no próximo beacon escolhido.",
    notes: ["Não pode aparecer duas vezes seguidas."],
  },
  {
    color: "Orange",
    effect: "+1 opção de beacon por 5 / 10 / 30 desafios.",
    notes: ["Cap total de opções simultâneas: 6."],
  },
  {
    color: "Green",
    effect: "+120 / +240 / +720 segundos; sem buffs de mobs por 1 / 2 / 3 desafios.",
    notes: ["Não pode aparecer duas vezes seguidas."],
  },
  {
    color: "Dark Grey",
    effect: "+3 / +6 / +18 Curses e +3 / +6 / +18 Pulls.",
    notes: ["Só pode ser escolhido 1 vez por lootrun."],
  },
  {
    color: "White",
    effect: "+5 / +10 / +30 desafios para a lootrun.",
    notes: ["Só pode ser escolhido 1 vez por lootrun."],
  },
  {
    color: "Grey",
    effect: "Escolha 1 Missão entre 3 / 4 / 5 opções.",
    notes: [
      "Cap de 4 missões por lootrun.",
      "Primeiro Grey surge após o desafio 4.",
    ],
  },
  {
    color: "Red",
    effect: "+3 / +5 / +15 desafios; sem ganho de tempo durante essa janela.",
    notes: ["Não pode aparecer duas vezes seguidas."],
  },
  {
    color: "Crimson",
    effect: "Escolha 1 Trial entre 2 / 3 / 4 opções.",
    notes: [
      "Cap de 2 Crimsons por run.",
      "Só aparece depois do challenge 20.",
    ],
  },
  {
    color: "Rainbow",
    effect: "Deixa beacons Vibrantes por 10 / 20 / 60 desafios.",
    notes: ["Para de aparecer ao acumular muitos desafios vibrantes."],
  },
];

export const lootrunRewardsIntro = {
  eyebrow: "Recompensas",
  title: "Fim da Lootrun",
  lead: "Ao concluir a run, você volta para o início do camp e resgata o baú final.",
  body:
    "O valor da recompensa escala com desafios concluídos, quantidade de curses, escolhas de missões/trials e eficiência geral da run.",
};

export const lootrunRewardItems = [
  "Míticos",
  "Esmeraldas",
  "Tomes de Lootrun",
  "Itens Fabled e Lendários",
  "Runas",
  "Chaves de Dungeon",
];

export const lootrunRewardMedia = {
  videos: <LootrunRewardVideo[]>[
    {
      id: "XqDErIU1fQU",
      title: "Vídeo I - Abrindo o baú final da LR",
      description:
        "O vídeo é um pouco antigo, mas a temática continua a mesma. Mas de qualquer forma, vou colocar outro vídeo logo abaixo mostrando um mais recente.",
    },
    {
      id: "pv5HhUWO79k",
      title: "Vídeo II - Abrindo o baú final da LR",
      description: "Esse vídeo já é um pouco mais recente, como podem ver não tem tanta diferença assim.",
    },
  ],
  image: {
    name: "Baú final da Lootrun",
    src: "/lootrun/bau_final.png",
    alt: "Baú final da lootrun",
    caption: "Baú final de recompensa ao concluir a lootrun.",
  },
};

export const lootrunCombosIntro = {
  eyebrow: "Combos",
  title: "Sinergias de Missões e Trials",
  description:
    "As combinações abaixo são baseadas no seu material e servem como base de execução. Ajuste conforme ofertas reais de beacons/missões/trials durante a run.",
};

export const lootrunCombos: LootrunCombo[] = [
  {
    title: "Opal Offering + Chronotrigger",
    challengeRange: "Até 100 challenges",
    summary:
      "Foco em escalar boons com Aqua + Blue e converter valor em pulls com janelas de curse controladas por Green.",
    missionRequired: ["Opal Offering"],
    missionRecommended: ["Radiant Hunter", "Sacrificial Ritual", "Complete Chaos"],
    trialRequired: ["Chronotrigger"],
    trialRecommended: ["Lights Out", "Treasure Bill (fim da run)"],
  },
  {
    title: "Jester's Scheme",
    challengeRange: "Até 100 challenges",
    summary:
      "Build de Flying Chests para farm de míticos, priorizando Aqua + Yellow e sustentação de pulls.",
    missionRequired: ["Interest Scheme", "Jester's Trick"],
    missionRecommended: ["Sacrificial Ritual", "Radiant Hunter", "Materialism", "Complete Chaos"],
    trialRecommended: ["Lights Out", "Monochromokopia", "Side Hustle"],
  },
  {
    title: "Porphyrophobia + Equilibrium",
    challengeRange: "Até 100 challenges",
    summary:
      "Combinação centrada em curses para amplificar potência de boons e depois converter em progressão de pulls.",
    missionRequired: ["Porphyrophobia", "Equilibrium"],
    missionRecommended: ["Radiant Hunter", "Sacrificial Ritual", "Inner Peace", "Complete Chaos"],
    trialRequired: ["Chronotrigger ou Lights Out"],
    trialRecommended: ["Monochromokopia", "Treasure Bill"],
  },
  {
    title: "Gambling Beast",
    challengeRange: "40 a 50 challenges",
    summary:
      "Estratégia de finalização agressiva para converter tempo acumulado em rerolls quando a run já está muito sacrificial.",
    missionRequired: ["Stasis", "Redemption", "High Roller"],
    missionRecommended: ["Backup Beat"],
    trialRequired: ["Gambling Beast"],
    trialRecommended: ["Ultimate Sacrifice", "Hubris", "Warmth Devourer"],
  },
  {
    title: "Dying Light + All In",
    challengeRange: "50 a 100 challenges",
    summary:
      "Setup voltado a rerolls altos com custo de sacrifices, evitando completar Rainbow em excesso.",
    trialRequired: ["Dying Light", "All In"],
  },
  {
    title: "Runs sem Combo",
    challengeRange: "50 a 100 challenges",
    summary:
      "Plano de contingência quando o setup ideal não aparece; prioriza consistência e encerramento eficiente.",
    missionRecommended: [
      "Redemption",
      "High Roller",
      "Porphyrophobia",
      "Inner Peace",
      "Orphion's Grace",
      "Stasis",
      "Chronokinesis",
      "Radiant Hunter",
    ],
    trialRecommended: ["Ultimate Sacrifice", "Hubris", "Gambling Beast"],
  },
];

export const lootrunExtrasIntro = {
  eyebrow: "Informações adicionais",
  title: "Extra",
};

export const lootrunExtras = [
  "Ao entrar em uma lootrun, seu inventário é bloqueado. Leve todos os itens essenciais antes de começar.",
  "Não é possível comprar poções durante a run. Tudo precisa vir de baús ou do seu preparo inicial.",
  "Itens craftados podem ser reparados com blacksmith, quando aplicável.",
  "Pets ajudam a transferir itens para o baú pessoal durante runs longas, com cooldown entre usos.",
  "Sair da área jogável por tempo excessivo finaliza a run automaticamente.",
  "Finalizar run antes de completar 4 desafios entra em cooldown.",
  "Você pode checar rank e XP de lootrun na bússola, no ícone de machado.",
  "Cada lootcamp tem lootpool próprio. Consulte a pool atual com /lootpool.",
  "Status completos da run (curses, boons, missões, trials e histórico de beacons) podem ser consultados no NPC do camp e em interlúdios.",
  "Inscrição Silverbull dobra os valores do bônus diário de lootrun.",
];

export const lootrunExtraSupportMedia: MediaPlaceholder[] = [
  {
    name: "Mensagem de área jogável",
    src: "/lootrun/area_jogavel.gif",
    alt: "Aviso para retornar à área jogável da lootrun",
  },
  {
    name: "Finalização por sair da área",
    src: "/lootrun/area_jogavel2.gif",
    alt: "Finalização da lootrun por sair da área jogável",
  },
  {
    name: "Cooldown por run curta",
    src: "/lootrun/cooldown_lootrun.png",
    alt: "Cooldown ao finalizar lootrun antes de 4 desafios",
  },
  {
    name: "Rank/XP de lootrun na bússola",
    src: "/lootrun/checando_rank.gif",
    alt: "Consulta de rank e XP de lootrun na bússola",
  },
  {
    name: "Abrindo inventário dos pets",
    src: "/lootrun/pets.mp4",
    alt: "Inventário dos pets para guardar itens",
  },
  {
    name: "Lootrun status",
    src: "/lootrun/status.mp4",
    alt: "Painel de status da lootrun",
  },
  {
    name: "Bônus diário com inscrição Silverbull",
    src: "/lootrun/pulls_salvas.png",
    alt: "Indicador de bônus diário com inscrição Silverbull",
  },
];

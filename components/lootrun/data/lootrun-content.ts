export type MediaPlaceholder = {
  name: string;
  src?: string;
  alt?: string;
  caption?: string;
  note?: string;
  /** Animação WebP com pôster <nome>.poster.webp; só carrega no clique (scripts/gif-para-webp.mjs). */
  animado?: boolean;
};

export type LootrunCamp = {
  name: string;
  /** Cidade ou marco perto do camp (wiki, Lootrunning). */
  perto: string;
  coordinates: string;
  /** Segundos ganhos ao chegar e ao concluir um desafio (wiki). */
  tempo: [number, number];
  /** Quanto os mobs ganham de dano e de vida a cada desafio (wiki). */
  escala: [string, string];
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
  /** Cor do beacon no jogo (marcador desenhado no site, no lugar do emoji). "arco-iris" vira gradiente. */
  hex: string;
  effect: string;
  /** Valor nos 4 tiers (T0 base, T1, T2, T3). Beacon Vibrant e o Aqua sobem o tier. */
  tiers: [string, string, string, string];
  libera: string;
  usos?: string;
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
  title: "Lootrunning",
  paragraphs: [
    "Lootrunning é uma atividade de endgame focada em saquear cavernas, concluir desafios e maximizar recompensas como míticos, esmeraldas e itens valiosos.",
    "Aqui está o fluxo completo: como se inscrever, as divisões, os camps, as mecânicas da run (tempo, desafios, beacons, curses, boons, missões e trials), as recompensas e os combos que a guilda usa.",
  ],
};

export const lootrunResumo = [
  "Inscreva-se na divisão de Lootrun do Silverbull, a leste de Cinfras.",
  "A run acaba quando o tempo zera ou quando você atinge o limite de desafios (12 no começo, até 100).",
  "Depois de cada desafio você escolhe um beacon; ele define o que a run ganha a seguir.",
  "Curses deixam os mobs mais fortes, mas aumentam os pulls do baú final.",
];

export const lootrunParticipation = {
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
      src: "/lootrun/Cinfras_silverbull.webp",
      alt: "Centro de Divisão Silverbull no leste de Cinfras",
    },
    {
      name: "NPC de inscrição da Lootrun",
      src: "/lootrun/NPCCinfras_silverbull.webp",
      alt: "NPC da lootrun no Centro de Divisão Silverbull",
    },
  ],
};

export const lootrunCamps: LootrunCamp[] = [
  {
    name: "Canyon of the Lost Excursion (South)",
    perto: "Thesead",
    tempo: [60, 90],
    escala: ["5%", "15%"],
    coordinates: "575, 78, -5025",
    difficulty: "Médio",
    notes: [
      "Rota estável para progressão intermediária.",
      "Bom campo para praticar ritmo de desafios e leitura de beacon.",
    ],
    media: [
      { name: "Canyon Camp", src: "/lootrun/canyon_camp.webp", alt: "Lootcamp Canyon" },
      { name: "Jump Pads", src: "/lootrun/jump_pads.webp", animado: true, alt: "Jump pads em Canyon" },
    ],
  },
  {
    name: "The Corkus Traversal",
    perto: "Corkus City",
    tempo: [60, 120],
    escala: ["5%", "15%"],
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
      { name: "Corkus Camp", src: "/lootrun/corkus_camp.webp", alt: "Lootcamp Corkus" },
      { name: "Fast Travels em Corkus", src: "/lootrun/fast_travels_corkus.webp", animado: true, alt: "Atalhos de Corkus" },
    ],
  },
  {
    name: "Molten Heights Hike",
    perto: "Rodoroc",
    tempo: [60, 90],
    escala: ["10%", "20%"],
    coordinates: "1270, 10, -5130",
    difficulty: "Médio",
    notes: [
      "Tem cavernas opcionais acessíveis durante a run.",
      "As opcionais dão loot adicional, sem objetivo obrigatório de challenge.",
    ],
    media: [
      { name: "Molten Camp", src: "/lootrun/molten_camp.webp", alt: "Lootcamp Molten Heights" },
      { name: "Rota em Molten", src: "/lootrun/gif_molten.webp", animado: true, alt: "Exemplo de rota em Molten Heights" },
    ],
  },
  {
    name: "Sky Islands Exploration",
    perto: "Ahmsord",
    tempo: [60, 90],
    escala: ["5%", "15%"],
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
      { name: "Sky Camp", src: "/lootrun/sky_camp.webp", alt: "Lootcamp Sky Islands" },
      { name: "Nuvens de mobilidade", src: "/lootrun/nuvens_espalhadas.webp", alt: "Nuvens de mobilidade em Sky" },
    ],
  },
  {
    name: "Silent Expanse Expedition",
    perto: "Lutho",
    tempo: [60, 90],
    escala: ["10%", "15%"],
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
      { name: "Silent Expanse Camp", src: "/lootrun/se_camp.webp", alt: "Lootcamp Silent Expanse" },
      { name: "Fool Eater (spawn 1)", src: "/lootrun/fool_eater1.webp", alt: "Rare Mob Fool Eater" },
      { name: "Fool Eater (spawn 2)", src: "/lootrun/fool_eater2.webp", alt: "Rare Mob Fool Eater no mapa" },
    ],
  },
  {
    name: "The Fruma Foray (West)",
    perto: "Industrial District",
    tempo: [90, 210],
    escala: ["5%", "5%"],
    coordinates: "-2002, 4, -775",
    difficulty: "Difícil",
    notes: [
      "Cavernas mais curtas que Fruma East, porém ainda exigentes.",
      "Na Weapons Factory, evite entrada frontal para não tomar burst.",
    ],
    dangerousChallenges: ["Escalonamento de curses em todos os desafios"],
    media: [{ name: "Fruma West Camp", src: "/lootrun/fruma_west_camp.webp", alt: "Lootcamp Fruma West" }],
  },
  {
    name: "The Fruma Foray (East)",
    perto: "Hyloch",
    tempo: [90, 210],
    escala: ["5%", "5%"],
    coordinates: "-1294, 75, -1146",
    difficulty: "Infernal",
    notes: [
      "Atualmente uma das runs mais difíceis e longas.",
      "Priorize consistência de rota, puzzles memorizados e gestão de tempo.",
    ],
    dangerousChallenges: ["Escalonamento de curses em todos os desafios"],
    media: [{ name: "Fruma East Camp", src: "/lootrun/fruma_east_camp.webp", alt: "Lootcamp Fruma East" }],
  },
];

export const lootrunCampsIntro = {
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
      src: "/lootrun/missoes_necessarias.webp",
      alt: "Requisitos de cave e quest para liberar lootrun",
    },
  ],
};

export const lootrunDivisions = {
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
};

/** Divisões da Lootrun: XP total para chegar e o que cada uma libera (wiki, Lootrunning). */
export const lootrunDivisoesTabela = [
  { rank: "Rookie I", xpTotal: 0, libera: "—" },
  { rank: "Rookie II", xpTotal: 100, libera: "Beacon Aqua" },
  { rank: "Rookie III", xpTotal: 200, libera: "Beacon Orange" },
  { rank: "Assistant I", xpTotal: 300, libera: "+1 reroll de beacon por run" },
  { rank: "Assistant II", xpTotal: 400, libera: "Beacon Green" },
  { rank: "Assistant III", xpTotal: 520, libera: "+50% de velocidade nos interlúdios; 5% de chance de beacon Vibrant" },
  { rank: "Sentinel I", xpTotal: 670, libera: "Beacon Dark Grey" },
  { rank: "Sentinel II", xpTotal: 860, libera: "+1 opção de beacon e +1 opção de boon" },
  { rank: "Sentinel III", xpTotal: 1100, libera: "Beacon White" },
  { rank: "Elite I", xpTotal: 1400, libera: "Beacon Grey" },
  { rank: "Elite II", xpTotal: 1780, libera: "Vibrant sobe para 10%; 1 reroll grátis por dia da recompensa final" },
  { rank: "Elite III", xpTotal: 2260, libera: "Beacon Red" },
  { rank: "Admiral", xpTotal: 2860, libera: "Beacon Pink; +1 reroll de beacon por run" },
  { rank: "Commander", xpTotal: 3610, libera: "Beacon Rainbow" },
  { rank: "Master", xpTotal: 4610, libera: "Beacon Crimson" },
  { rank: "Grandmaster", xpTotal: 8610, libera: "—" },
];

export const lootrunMechanicsIntro = {
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
      { name: "HUD de desafios", src: "/lootrun/icones_lootrun.webp", animado: true, alt: "Ícones de desafios da lootrun" },
      {
        name: "Aumento de limite de desafios",
        src: "/lootrun/limite_desafios.webp", animado: true,
        alt: "Aumento de limite de desafios por beacon",
        caption: "Beacons vermelho e branco podem ampliar o limite máximo de desafios da run.",
      },
      {
        name: "Contador de desafios",
        src: "/lootrun/desafio_gidf.webp", animado: true,
        alt: "Exemplo de progressão do contador de desafios",
        caption: "Cada desafio concluído soma no contador até alcançar o limite da run.",
      },
      {
        name: "Fim por limite de desafios",
        src: "/lootrun/lootrun_acabando.webp", animado: true,
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
      { name: "Timer da lootrun", src: "/lootrun/timer.webp", alt: "Timer da lootrun no HUD" },
      {
        name: "Tempo ao chegar no desafio",
        src: "/lootrun/GanhandoTempoChegando_no_desafio.webp", animado: true,
        alt: "Ganho de tempo ao chegar no desafio",
        caption: "Você também recebe tempo ao alcançar o ponto do desafio.",
      },
      {
        name: "Tempo ao concluir desafio",
        src: "/lootrun/GanhandoTempo_Terminando_o_desafio_2.webp", animado: true,
        alt: "Ganho de tempo ao completar desafio",
        caption: "Concluir o objetivo do desafio adiciona tempo ao cronômetro.",
      },
      {
        name: "Pausa de tempo ao abrir baú de challenge",
        src: "/lootrun/challenge_reward.webp",
        alt: "Baú de challenge com timer pausado",
        caption: "Ao abrir certos baús de challenge, o tempo pode ser pausado temporariamente.",
      },
      {
        name: "Penalidade ao morrer em desafio",
        src: "/lootrun/morrendo_desafio.webp", animado: true,
        alt: "Redução de tempo ao morrer em desafio",
        caption: "Morrer/falhar durante desafio aplica penalidade de tempo e pode reduzir desafios máximos.",
      },
      {
        name: "Penalidade de tempo ao morrer",
        src: "/lootrun/tempo_diminuindo_ao_morrer.webp", animado: true,
        alt: "Tempo diminuindo ao morrer",
        caption: "A morte fora de desafio ainda consome tempo da run.",
      },
      { name: "Cap de 15 minutos", src: "/lootrun/timer_15_minutos.webp", alt: "Limite de timer em 15 minutos" },
      { name: "Timer em 13 minutos", src: "/lootrun/timer_13minutos.webp", alt: "Exemplo de timer durante a run" },
      {
        name: "Extrapolando timer com green beacon",
        src: "/lootrun/timer_15+_minutos.webp",
        alt: "Timer acima de 15 minutos com green beacon",
      },
      { name: "Flying chest", src: "/lootrun/flying_chest.webp", alt: "Exemplo de flying chest" },
    ],
  },
];

export const lootrunAdvancedSystemsIntro = {
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
        src: "/lootrun/beacon_rr.webp", animado: true,
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
      "Limpeza de curse pode vir de missões/trials como Cleansing Greed, Inner Peace e Chronotrigger.",
    ],
    media: [
      {
        name: "Curses ativos",
        src: "/lootrun/radiance.webp",
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
      { name: "Seleção de boons", src: "/lootrun/boons_escolhas.webp", animado: true, alt: "Escolha de boons na lootrun" },
      { name: "Boons gerais", src: "/lootrun/boons_gerais.webp", alt: "Visão geral de boons ativos" },
      { name: "Boons detalhe 1", src: "/lootrun/boon1.webp", alt: "Detalhes de boons (exemplo 1)" },
      { name: "Boons detalhe 2", src: "/lootrun/boon2.webp", alt: "Detalhes de boons (exemplo 2)" },
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
      { name: "Escolha de missão", src: "/lootrun/missao_exemplo.webp", alt: "Escolha de missão na lootrun" },
    ],
  },
];

export const lootrunBeaconsIntro = {
  title: "Beacons",
  description:
    "Depois de cada desafio, o jogo oferece beacons para escolher. Cada beacon tem 4 tiers: o tier base e mais três. Um beacon pode vir Vibrant (+1 tier), e o Aqua sobe o tier do próximo beacon; os dois acumulam até o tier máximo.",
};

export const lootrunBeaconsRegras = [
  "Vibrant: a partir de Assistant III, cada beacon oferecido tem 5% de chance de vir Vibrant; em Elite II, 10% no total.",
  "Aqua: +1 tier no próximo beacon (+2 se o Aqua for Vibrant), acumulando até o tier 3. Morrer perde o bônus.",
  "Na tela aparecem 2 opções de beacon (3 a partir de Sentinel II), até o máximo de 6 com Orange.",
];

export const lootrunBeacons: LootrunBeacon[] = [
  { color: "Blue", hex: "#5555FF", effect: "Escolha 1 Boon com potência aumentada.", tiers: ["100%", "200%", "300%", "400%"], libera: "Rookie I", usos: "até 30 por run", notes: ["Fica mais raro em runs longas."] },
  { color: "Purple", hex: "#FF55FF", effect: "Adiciona curses e pulls de recompensa final.", tiers: ["+2", "+4", "+6", "+8"], libera: "Rookie I", notes: ["O mesmo número vale para curses e para pulls."] },
  { color: "Yellow", hex: "#FFFF55", effect: "Gera baús voadores (Flying Chests).", tiers: ["2", "3", "4", "5"], libera: "Rookie I", notes: ["As próximas opções só aparecem depois de abrir os baús."] },
  { color: "Aqua", hex: "#55FFFF", effect: "Sobe o tier do próximo beacon escolhido.", tiers: ["+1 tier", "+1 tier", "+1 tier", "+1 tier"], libera: "Rookie II", notes: ["Vibrant: +2 tiers. Não é afetado por outro Aqua."] },
  { color: "Orange", hex: "#FFAA00", effect: "+1 opção de beacon durante N desafios.", tiers: ["10", "15", "20", "25"], libera: "Rookie III", notes: ["Limite de 6 opções na tela; cada Orange tem a própria contagem."] },
  { color: "Green", hex: "#55FF55", effect: "Tempo extra; os mobs ficam sem buff só no desafio deste beacon.", tiers: ["+210 s", "+330 s", "+450 s", "+570 s"], libera: "Assistant II", notes: ["Nunca aparece duas vezes seguidas.", "É o único que passa do teto de 15 minutos do timer."] },
  { color: "Dark Grey", hex: "#777777", effect: "Muitas curses e muitos pulls de uma vez.", tiers: ["+5", "+10", "+15", "+20"], libera: "Sentinel I", usos: "1 por run", notes: ["O mesmo número vale para curses e para pulls. Fica raro depois do desafio 10."] },
  { color: "White", hex: "#FFFFFF", effect: "Desafios extras na run.", tiers: ["+15", "+20", "+25", "+30"], libera: "Sentinel III", usos: "1 por run", notes: ["Fica raro depois do desafio 10."] },
  { color: "Grey", hex: "#AAAAAA", effect: "Escolha 1 Missão entre N opções.", tiers: ["3", "4", "5", "5"], libera: "Elite I", usos: "3 por run", notes: ["São 4 missões por run: 1 grátis depois do desafio 4 e 3 por Grey.", "Some entre os desafios 35 e 50."] },
  { color: "Red", hex: "#FF5555", effect: "Desafios extras, sem ganho de tempo.", tiers: ["+6", "+9", "+12", "+15"], libera: "Elite III", notes: ["Nunca aparece duas vezes seguidas.", "Sai do jogo ao bater o teto de 100 desafios."] },
  { color: "Pink", hex: "#FA71AF", effect: "Rerolls de beacon.", tiers: ["+2", "+3", "+4", "+5"], libera: "Admiral", notes: ["Adicionado na 2.2."] },
  { color: "Crimson", hex: "#F94242", effect: "Escolha 1 Trial entre N opções.", tiers: ["2", "3", "4", "4"], libera: "Admiral ou Master (a wiki se contradiz)", usos: "2 por run", notes: ["Só aparece depois do desafio 20 e some por volta do 70."] },
  { color: "Rainbow", hex: "arco-iris", effect: "Beacons Vibrant garantidos durante N desafios.", tiers: ["15", "20", "25", "30"], libera: "Commander ou Master (a wiki se contradiz)", notes: ["Só aparece a partir do desafio 10."] },
];

export const lootrunRewardsIntro = {
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
      title: "Abrindo o baú final (vídeo antigo)",
      description:
        "Um vídeo mais antigo: o baú mudou pouco desde então.",
    },
    {
      id: "pv5HhUWO79k",
      title: "Abrindo o baú final (vídeo recente)",
      description: "Um vídeo mais recente, para comparar.",
    },
  ],
  image: {
    name: "Baú final da Lootrun",
    src: "/lootrun/bau_final.webp",
    alt: "Baú final da lootrun",
    caption: "Baú final de recompensa ao concluir a lootrun.",
  },
};

export const lootrunCombosIntro = {
  title: "Sinergias de Missões e Trials",
  description:
    "As combinações que a guilda usa como ponto de partida. Ajuste conforme os beacons, missões e trials que aparecerem na run.",
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

export const lootrunExtrasIntro =
  "O que vale saber antes de começar, para não perder a run por falta de preparo ou por sair da área.";

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
    src: "/lootrun/area_jogavel.webp", animado: true,
    alt: "Aviso para retornar à área jogável da lootrun",
  },
  {
    name: "Finalização por sair da área",
    src: "/lootrun/area_jogavel2.webp", animado: true,
    alt: "Finalização da lootrun por sair da área jogável",
  },
  {
    name: "Cooldown por run curta",
    src: "/lootrun/cooldown_lootrun.webp",
    alt: "Cooldown ao finalizar lootrun antes de 4 desafios",
  },
  {
    name: "Rank/XP de lootrun na bússola",
    src: "/lootrun/checando_rank.webp", animado: true,
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
    src: "/lootrun/pulls_salvas.webp",
    alt: "Indicador de bônus diário com inscrição Silverbull",
  },
];


export const lootrunFontes = [
  { rotulo: "Lootrunning, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Lootrunning" },
  { rotulo: "Lootrun Beacons, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Lootrunning#Beacons" },
];

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
    "Lootrunning é uma atividade de endgame: você roda cavernas, completa desafios e tenta tirar o máximo de recompensa, como míticos, esmeraldas e itens valiosos.",
    "Aqui está tudo, do começo ao fim: como se inscrever, as divisões, os camps, as mecânicas da run (tempo, desafios, beacons, curses, boons, missões e trials), as recompensas e os combos que a guilda usa.",
  ],
};

export const lootrunResumo = [
  "Inscreva-se na divisão de Lootrun do Silverbull, a leste de Cinfras.",
  "A run acaba quando o tempo zera ou quando você bate o limite de desafios (12 no começo, até 100).",
  "Depois de cada desafio você escolhe um beacon, e é ele que decide o que a run ganha em seguida.",
  "Curses deixam os mobs mais fortes, mas dão mais pulls no baú final.",
];

export const lootrunParticipation = {
  title: "Como Participar",
  paragraphs: [
    "Para começar, vá ao Centro de Divisão Silverbull, a leste de Cinfras, e se inscreva na divisão de Lootrun.",
    "Feita a inscrição, a Lootrun fica liberada e você já pode começar a subir de divisão.",
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
      "Rota tranquila para quem está no meio da progressão.",
      "Bom camp para pegar o ritmo dos desafios e aprender a escolher beacon.",
    ],
    media: [
      { name: "Canyon Camp", src: "/lootrun/canyon_camp.webp", alt: "Lootcamp do Canyon" },
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
      "Mapa grande, com muita andança entre os desafios.",
      "Use os canos de atalho para ganhar tempo entre um desafio e outro.",
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
      "Tem cavernas opcionais que dá para entrar durante a run.",
      "As opcionais dão loot extra e não têm challenge obrigatório.",
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
      "Mobilidade é essencial para não cair no void.",
      "As nuvens ajudam a se mover para cima e para os lados.",
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
      "Fique de olho no Fool Eater, um rare mob que aparece no caminho dos desafios.",
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
      "Cavernas mais curtas que as de Fruma East, mas ainda puxadas.",
      "Na Weapons Factory, não entre pela frente, ou você toma burst.",
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
      "Hoje é uma das runs mais difíceis e mais longas.",
      "Aqui o que conta é rota decorada, puzzles na memória e controle do tempo.",
    ],
    dangerousChallenges: ["Escalonamento de curses em todos os desafios"],
    media: [{ name: "Fruma East Camp", src: "/lootrun/fruma_east_camp.webp", alt: "Lootcamp Fruma East" }],
  },
];

export const lootrunCampsIntro = {
  title: "Campos e Desbloqueios",
  description:
    "Depois da inscrição, o próximo passo é escolher em qual lootcamp rodar. Para liberar cada camp por completo, você precisa de algumas quests e cavernas.",
  notes: [
    "Todos os lootcamps ficam marcados no Content Book.",
    "Nem toda caverna da região é obrigatória.",
    "Algumas cavernas opcionais aparecem durante a run só como loot extra.",
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
    "A Lootrun tem um XP só dela. Completar runs sobe a sua divisão e te dá mais controle sobre as escolhas da run.",
  points: [
    "O XP da Lootrun é separado do XP de combate.",
    "Run que falha antes do desafio 4 não dá XP.",
    "Cada run dá no máximo 500 de XP (até 700 com o bônus diário).",
    "As divisões têm faixas I, II e III, menos nos ranks mais altos.",
    "Quanto mais alto o rank, mais controle você tem sobre a run.",
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
    "São estas mecânicas que decidem o ritmo, o risco e o quanto a sua lootrun pode render.",
};

export const lootrunMechanicBlocks: LootrunMechanicBlock[] = [
  {
    title: "Desafios",
    description: "A base de tudo dentro da lootrun.",
    points: [
      "Toda run começa com 12 desafios e pode chegar ao máximo de 100.",
      "Cada desafio completo soma 1 no contador.",
      "O limite sobe com beacon branco ou vermelho, ou com missões como Sacrificial Ritual.",
      "Quando você bate o limite de desafios, a run acaba.",
    ],
    media: [
      { name: "HUD de desafios", src: "/lootrun/icones_lootrun.webp", animado: true, alt: "Ícones de desafios da lootrun" },
      {
        name: "Aumento de limite de desafios",
        src: "/lootrun/limite_desafios.webp", animado: true,
        alt: "Aumento de limite de desafios por beacon",
        caption: "Os beacons vermelho e branco aumentam o limite de desafios da run.",
      },
      {
        name: "Contador de desafios",
        src: "/lootrun/desafio_gidf.webp", animado: true,
        alt: "Exemplo de progressão do contador de desafios",
        caption: "Cada desafio completo soma no contador até chegar ao limite da run.",
      },
      {
        name: "Fim por limite de desafios",
        src: "/lootrun/lootrun_acabando.webp", animado: true,
        alt: "Lootrun encerrando ao atingir limite",
        caption: "Quando você bate o limite de desafios, a lootrun acaba sozinha.",
      },
    ],
  },
  {
    title: "Timer / Tempo",
    description: "O que mais pesa em runs longas.",
    points: [
      "Você ganha tempo ao chegar num desafio e ao completar (com algumas exceções).",
      "Morrer ou falhar tira 1 minuto; falhar num desafio também tira 1 do limite de desafios.",
      "O tempo vai até 15 minutos, e só o beacon verde passa disso.",
      "O beacon vermelho dá mais desafios, mas você fica alguns desafios sem ganhar tempo.",
      "Se o timer zerar, a lootrun acaba na hora.",
    ],
    media: [
      { name: "Timer da lootrun", src: "/lootrun/timer.webp", alt: "Timer da lootrun no HUD" },
      {
        name: "Tempo ao chegar no desafio",
        src: "/lootrun/GanhandoTempoChegando_no_desafio.webp", animado: true,
        alt: "Ganho de tempo ao chegar no desafio",
        caption: "Você também ganha tempo ao chegar no ponto do desafio.",
      },
      {
        name: "Tempo ao completar desafio",
        src: "/lootrun/GanhandoTempo_Terminando_o_desafio_2.webp", animado: true,
        alt: "Ganho de tempo ao completar desafio",
        caption: "Completar o desafio soma tempo no timer.",
      },
      {
        name: "Pausa de tempo ao abrir baú de challenge",
        src: "/lootrun/challenge_reward.webp",
        alt: "Baú de challenge com timer pausado",
        caption: "Alguns baús de challenge pausam o tempo por um momento quando você abre.",
      },
      {
        name: "Penalidade ao morrer em desafio",
        src: "/lootrun/morrendo_desafio.webp", animado: true,
        alt: "Redução de tempo ao morrer em desafio",
        caption: "Morrer ou falhar num desafio tira tempo e pode baixar o limite de desafios.",
      },
      {
        name: "Penalidade de tempo ao morrer",
        src: "/lootrun/tempo_diminuindo_ao_morrer.webp", animado: true,
        alt: "Tempo diminuindo ao morrer",
        caption: "Morrer fora de desafio também tira tempo da run.",
      },
      { name: "Cap de 15 minutos", src: "/lootrun/timer_15_minutos.webp", alt: "Limite de timer em 15 minutos" },
      { name: "Timer em 13 minutos", src: "/lootrun/timer_13minutos.webp", alt: "Exemplo de timer durante a run" },
      {
        name: "Passando do limite do timer com green beacon",
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
    "Depois que você pega o jeito de desafios, timer e beacons, são estes sistemas que decidem até onde a sua run vai.",
};

export const lootrunAdvancedSystems: LootrunMechanicBlock[] = [
  {
    title: "Beacon Rerolls",
    description: "Serve para trocar as opções de beacon no interlúdio.",
    points: [
      "O reroll troca todas as opções da tela por outras aleatórias.",
      "No rank Commander, você começa com 2 rerolls.",
      "Dá para ganhar mais com o beacon rosa e com algumas missões (por exemplo, Backup Beat).",
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
    description: "Os mobs vão ficando mais fortes ao longo da run.",
    points: [
      "Curses podem aumentar a vida, o dano, a resistência, a radiant chance e o radiant power dos mobs.",
      "Os efeitos acumulam; a Enemy Resistance para em 70%.",
      "Com Radiant Power alto, os mobs radiantes ficam bem mais perigosos e apertam a party.",
      "Para tirar curses, use missões e trials como Cleansing Greed, Inner Peace e Chronotrigger.",
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
    description: "Buffs que duram a run inteira, escolhidos no beacon azul.",
    points: [
      "A força deles sobe com o beacon (base, Vibrant, Vibrant + Aqua).",
      "Tem boons dinâmicos (crescem quando você cumpre uma condição) e estáticos (valem na hora).",
      "Podem buffar dano, atributos, loot bonus, loot quality, mana, vida e utilidade.",
      "Algumas missões e trials gastam ou enfraquecem boons, então escolha com cuidado.",
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
    description: "É aqui que você monta a estratégia da run.",
    points: [
      "As missões mexem no tempo, nos pulls e em quão segura a run fica.",
      "As trials aumentam o risco, mas liberam recompensas fortes (rerolls e sacrifices).",
      "Acertar a combinação de missão e trial é o que faz uma run longa dar certo.",
    ],
    media: [
      { name: "Escolha de missão", src: "/lootrun/missao_exemplo.webp", alt: "Escolha de missão na lootrun" },
    ],
  },
];

export const lootrunBeaconsIntro = {
  title: "Beacons",
  description:
    "Depois de cada desafio, o jogo mostra alguns beacons para você escolher. Cada beacon tem 4 tiers: o base e mais três. Um beacon pode vir Vibrant (+1 tier), e o Aqua sobe o tier do próximo; os dois somam até o tier máximo.",
};

export const lootrunBeaconsRegras = [
  "Vibrant: a partir de Assistant III, cada beacon tem 5% de chance de vir Vibrant; em Elite II, 10% no total.",
  "Aqua: +1 tier no próximo beacon (+2 se o Aqua for Vibrant), somando até o tier 3. Se você morrer, perde o bônus.",
  "Na tela aparecem 2 opções de beacon (3 a partir de Sentinel II), até o máximo de 6 com Orange.",
];

export const lootrunBeacons: LootrunBeacon[] = [
  { color: "Blue", hex: "#5555FF", effect: "Escolha 1 Boon com potência aumentada.", tiers: ["100%", "200%", "300%", "400%"], libera: "Rookie I", usos: "até 30 por run", notes: ["Fica mais raro em runs longas."] },
  { color: "Purple", hex: "#FF55FF", effect: "Adiciona curses e pulls de recompensa final.", tiers: ["+2", "+4", "+6", "+8"], libera: "Rookie I", notes: ["O mesmo número vale para curses e para pulls."] },
  { color: "Yellow", hex: "#FFFF55", effect: "Faz aparecer baús voadores (Flying Chests).", tiers: ["2", "3", "4", "5"], libera: "Rookie I", notes: ["As próximas opções só aparecem depois de abrir os baús."] },
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
  lead: "Quando a run acaba, você volta para o começo do camp e abre o baú final.",
  body:
    "A recompensa depende de quantos desafios você completou, de quantas curses pegou, das missões e trials que escolheu e de como a run foi no geral.",
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
    caption: "O baú final, aberto no fim da lootrun.",
  },
};

export const lootrunCombosIntro = {
  title: "Sinergias de Missões e Trials",
  description:
    "As combinações que a guilda usa como ponto de partida. Ajuste de acordo com os beacons, missões e trials que aparecerem na run.",
};

export const lootrunCombos: LootrunCombo[] = [
  {
    title: "Opal Offering + Chronotrigger",
    challengeRange: "Até 100 challenges",
    summary:
      "A ideia é fortalecer os boons com Aqua + Blue e transformar isso em pulls, pegando curses nas janelas do Green.",
    missionRequired: ["Opal Offering"],
    missionRecommended: ["Radiant Hunter", "Sacrificial Ritual", "Complete Chaos"],
    trialRequired: ["Chronotrigger"],
    trialRecommended: ["Lights Out", "Treasure Bill (fim da run)"],
  },
  {
    title: "Jester's Scheme",
    challengeRange: "Até 100 challenges",
    summary:
      "Run de Flying Chests para farmar mítico: priorize Aqua + Yellow e mantenha os pulls subindo.",
    missionRequired: ["Interest Scheme", "Jester's Trick"],
    missionRecommended: ["Sacrificial Ritual", "Radiant Hunter", "Materialism", "Complete Chaos"],
    trialRecommended: ["Lights Out", "Monochromokopia", "Side Hustle"],
  },
  {
    title: "Porphyrophobia + Equilibrium",
    challengeRange: "Até 100 challenges",
    summary:
      "Combo baseado em curses: elas fortalecem os boons, e depois isso vira pull.",
    missionRequired: ["Porphyrophobia", "Equilibrium"],
    missionRecommended: ["Radiant Hunter", "Sacrificial Ritual", "Inner Peace", "Complete Chaos"],
    trialRequired: ["Chronotrigger ou Lights Out"],
    trialRecommended: ["Monochromokopia", "Treasure Bill"],
  },
  {
    title: "Gambling Beast",
    challengeRange: "40 a 50 challenges",
    summary:
      "Final agressivo: transforma o tempo acumulado em rerolls quando a run já gastou muito em sacrifices.",
    missionRequired: ["Stasis", "Redemption", "High Roller"],
    missionRecommended: ["Backup Beat"],
    trialRequired: ["Gambling Beast"],
    trialRecommended: ["Ultimate Sacrifice", "Hubris", "Warmth Devourer"],
  },
  {
    title: "Dying Light + All In",
    challengeRange: "50 a 100 challenges",
    summary:
      "Setup para juntar muitos rerolls pagando com sacrifices, sem exagerar no Rainbow.",
    trialRequired: ["Dying Light", "All In"],
  },
  {
    title: "Runs sem Combo",
    challengeRange: "50 a 100 challenges",
    summary:
      "Plano B para quando o combo ideal não aparece: jogue seguro e feche a run bem.",
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
  "Quando a lootrun começa, seu inventário fica travado. Leve tudo o que precisa antes de entrar.",
  "Não dá para comprar poção durante a run. Tudo vem dos baús ou do que você levou.",
  "Itens craftados podem ser consertados no blacksmith, quando der.",
  "Em runs longas, os pets ajudam a mandar itens para o seu baú pessoal, com cooldown entre um uso e outro.",
  "Se você ficar muito tempo fora da área da run, ela acaba sozinha.",
  "Terminar a run antes de 4 desafios te deixa em cooldown.",
  "Dá para ver seu rank e o XP de lootrun na bússola, no ícone de machado.",
  "Cada lootcamp tem a sua lootpool. Veja a atual com /lootpool.",
  "Os status completos da run (curses, boons, missões, trials e os beacons que você pegou) ficam no NPC do camp e nos interlúdios.",
  "Com a assinatura Silverbull, o bônus diário de lootrun dobra.",
];

export const lootrunExtraSupportMedia: MediaPlaceholder[] = [
  {
    name: "Mensagem de área jogável",
    src: "/lootrun/area_jogavel.webp", animado: true,
    alt: "Aviso para voltar para a área da lootrun",
  },
  {
    name: "Run encerrada por sair da área",
    src: "/lootrun/area_jogavel2.webp", animado: true,
    alt: "Lootrun encerrada por sair da área",
  },
  {
    name: "Cooldown por run curta",
    src: "/lootrun/cooldown_lootrun.webp",
    alt: "Cooldown por terminar a lootrun antes de 4 desafios",
  },
  {
    name: "Rank/XP de lootrun na bússola",
    src: "/lootrun/checando_rank.webp", animado: true,
    alt: "Rank e XP de lootrun na bússola",
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
    name: "Bônus diário com assinatura Silverbull",
    src: "/lootrun/pulls_salvas.webp",
    alt: "Bônus diário dobrado pela assinatura Silverbull",
  },
];


export const lootrunFontes = [
  { rotulo: "Lootrunning, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Lootrunning" },
  { rotulo: "Lootrun Beacons, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Lootrunning#Beacons" },
];

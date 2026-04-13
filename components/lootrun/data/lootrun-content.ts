export type LootrunBeacon = {
  color: string;
  effect: string;
};

export type LootrunMechanicCard = {
  title: string;
  image: string;
  notes: string[];
};

export type LootrunVideo = {
  id: string;
  title: string;
  description: string;
};

export type LootrunSupportImage = {
  src: string;
  alt: string;
  caption: string;
};

export const lootrunGuideIntro = {
  eyebrow: "Guia Oficial",
  title: "Lootrunning",
  paragraphs: [
    "Lootrunning é uma atividade de endgame focada em desafios sequenciais para obter itens valiosos, esmeraldas e drops raros.",
    "Neste guia você encontra os fundamentos para começar: registro, mecânicas principais, beacons, recompensas e observações importantes.",
  ],
};

export const lootrunParticipation = {
  eyebrow: "Primeiros passos",
  title: "Como Participar",
  description:
    "Para que um jogador possa começar a fazer Lootruns, primeiramente, o mesmo deve se dirigir ao leste de Cinfras, onde irá encontrar o Centro de divisão Silverbull. Após se inscrever, o jogador poderá ir a qualquer um dos lootcamps disponíveis, e após completar todos os requisitos, o jogador poderá fazer lootruns naquele local.",
  location: "-159, 36, -4795",
  npcNote: "O NPC da LootRun é o da esquerda.",
  images: [
    {
      src: "/lootrun/npc_lootrun.png",
      alt: "NPC da LootRun no Centro de divisão Silverbull",
    },
    {
      src: "/lootrun/lootrun_silverbull.png",
      alt: "Centro de divisão Silverbull",
    },
  ],
};

export const lootrunMechanicsIntro = {
  eyebrow: "Como funciona",
  title: "Mecânicas",
  description:
    "A lootrun combina tempo, progressão de dificuldade e escolhas estratégicas. Entender timer, maldições, bênçãos e missões define a consistência da run no endgame.",
};

export const lootrunMechanicCards: LootrunMechanicCard[] = [
  {
    title: "Timer",
    image: "/lootrun/tempo_lootrun.png",
    notes: [
      "Ao iniciar a run, um cronômetro é ativado e a corrida termina ao zerar.",
      "Completar desafios adiciona tempo. Falhar ou morrer reduz 1 minuto.",
      "O limite padrão é 15 minutos, com exceções por beacons específicos.",
      "Beacons Red podem estender a run sem conceder bônus de tempo nos desafios.",
    ],
  },
  {
    title: "Curses (Maldições)",
    image: "/lootrun/curses.png",
    notes: [
      "São aplicadas por beacons Purple e Dark Grey e ficam ativas até o fim da run.",
      "Fortalecem mobs em dano, vida, resistência e ritmo de combate.",
      "Os efeitos acumulam e aumentam bastante a dificuldade da run.",
    ],
  },
  {
    title: "Boons (Bênçãos)",
    image: "/lootrun/boons.png",
    notes: [
      "Ao completar beacon Blue, você escolhe 1 bênção entre 3 opções.",
      "Podem ser permanentes na run ou bônus imediatos de progressão.",
      "A maioria possui limite de acúmulo.",
    ],
  },
  {
    title: "Missões",
    image: "/lootrun/missions.png",
    notes: [
      "A cada ciclo, você escolhe 1 missão entre 3 opções.",
      "Concluir missões gera recompensas extras e vantagens até o final da run.",
      "No máximo 4 missões concluídas por lootrun.",
    ],
  },
];

export const lootrunBeaconsIntro = {
  eyebrow: "Escolhas da run",
  title: "Beacons",
  description:
    "No início da sua lootrun, e após a conclusão de cada desafio, você terá várias opções de beacons para escolher (três por padrão). Cada sinal tem uma cor diferente e aponta para um desafio selecionado aleatoriamente na região; a cor do beacon indica qual efeito você receberá ao completar o desafio ao qual ele aponta. Existem onze cores de sinais diferentes, cada uma com efeitos diferentes:",
};

export const lootrunBeacons: LootrunBeacon[] = [
  { color: "Blue", effect: "Escolha uma bênção entre 3." },
  { color: "Purple", effect: "+1 maldição, +1 recompensa final adicional." },
  { color: "Yellow", effect: "Gera 1 baú voador." },
  { color: "Aqua", effect: "+100% de efeito no próximo beacon." },
  { color: "Orange", effect: "+1 escolha de beacon para os próximos 5 desafios." },
  { color: "Green", effect: "+120 segundos de tempo; mobs não recebem buffs nesse desafio." },
  { color: "Dark Grey", effect: "+3 maldições, +3 recompensas finais adicionais." },
  { color: "White", effect: "+5 desafios para a lootrun atual." },
  { color: "Grey", effect: "Escolha uma missão entre 3." },
  { color: "Red", effect: "+2 desafios sem bônus de tempo ao completar." },
  { color: "Rainbow", effect: "Só beacons vibrantes aparecem por 10 desafios (efeito dobrado)." },
];

export const lootrunRewardsIntro = {
  eyebrow: "Ao final da run",
  title: "Recompensas",
  lead: "Depois de tudo, finalmente chega a parte boa, as tão esperadas recompensas.",
  body: "Ao completar todos os desafios, você é redirecionado para o início da LootRun e poderá resgatar suas recompensas:",
  scaling:
    "As recompensas são baseadas na quantidade de desafios que você faz (completados), nos curses que você pega e também em alguns beacons Grey, que podem beneficiar você.",
};

export const lootrunRewardItems = [
  "Itens míticos",
  "Esmeraldas",
  "Tome de lootrun",
  "Itens fabled e lendário",
  "Runas",
  "Chaves de dungeon",
];

export const lootrunRewardVideos: LootrunVideo[] = [
  {
    id: "XqDErIU1fQU",
    title: "Vídeo I - Abrindo o baú final da LR",
    description:
      "O vídeo é um pouco antigo, mas a temática continua a mesma. De qualquer forma, vou colocar outro vídeo logo abaixo mostrando um mais recente.",
  },
  {
    id: "pv5HhUWO79k",
    title: "Vídeo II - Abrindo o baú final da LR",
    description: "Esse vídeo já é um pouco mais recente, como podem ver não tem tanta diferença assim.",
  },
];

export const lootrunRewardChest = {
  src: "/lootrun/reward_chest.png",
  alt: "Baú final da LootRun",
  caption: "Print do baú final da LootRun.",
};

export const lootrunExtrasIntro = {
  eyebrow: "Informações adicionais",
  title: "Extra",
};

export const lootrunExtras = [
  "Ao entrar em uma lootrun, o inventário é bloqueado. Leve todos os itens essenciais antes de começar.",
  "Existem cinco campos de lootrun: Silent Expanse, Molten Highs, Canyon of the Lost, Corkus e Sky Island.",
  "Para liberar cada campo é necessário completar quests e explorar cavernas. Os requisitos ficam nos NPCs das respectivas áreas.",
  "A frequência com que um item aparece define seu preço: quanto mais raro o drop, maior o valor de mercado.",
  "Os itens da lootrun são alterados toda sexta-feira às 15h (horário de Brasília).",
  "Tomes de lootrun só podem ser obtidos no baú final.",
  "No início, você terá menos beacons disponíveis por causa do nível de lootrun. Tudo vai sendo liberado conforme você joga.",
  "Para verificar seu ranking, clique na bússola e passe o mouse no ícone do machado. Fica logo acima do ranking de Raid.",
  "Para subir no ranking, basta completar lootruns e ganhar XP. Sem completar, sem progresso.",
  "Todos os rankings têm 3 divisões, exceto a partir de Admiral: Admiral, Mestre e Grão-Mestre.",
];

export const lootrunExtraSupportImages: LootrunSupportImage[] = [
  {
    src: "/lootrun/final_1.png",
    alt: "Tela de requisitos da LootRun no menu de início",
    caption: "Checklist de quests e caves exigidas para liberar a LootRun no campo selecionado.",
  },
  {
    src: "/lootrun/final_2.png",
    alt: "Inventário com recompensas recebidas da LootRun",
    caption: "Exemplo de inventário após abrir o baú final, com drops variados de uma run concluída.",
  },
  {
    src: "/lootrun/final_3.png",
    alt: "Menu Character Info destacado no jogo",
    caption: "Atalho para Character Info, usado para consultar progresso e informações da conta.",
  },
  {
    src: "/lootrun/final_4.png",
    alt: "Menu Profession Info mostrando rank de Lootrunning",
    caption: "Painel de profissão exibindo o rank de Lootrunning no sistema Silverbull Syndicates.",
  },
  {
    src: "/lootrun/final_5.png",
    alt: "Mensagem de Lootrun Completed ao fim da run",
    caption: "Confirmação de run concluída com retorno automático ao camp para resgatar recompensas.",
  },
];

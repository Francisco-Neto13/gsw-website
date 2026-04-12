export type RaidCatalogItem = {
  name: string;
  level: string;
  quest: string;
  rune: string;
  image: string;
};

export type RaidStepImage = {
  src: string;
  alt: string;
  caption: string;
};

export type RaidGuideVariant = {
  name: string;
  summary: string;
  videoId: string;
  secondaryVideoId?: string;
  secondaryLabel?: string;
  points: string[];
};

export type RaidGuideRoom = {
  room: string;
  title: string;
  description: string;
  variants: RaidGuideVariant[];
};

export type RaidCaptionImage = {
  src: string;
  alt: string;
  caption: string;
};

export const raids: RaidCatalogItem[] = [
  { name: "Nest of the Grootslangs", level: "Lvl 55+", quest: "Realm of Light I — The Worm Holes", rune: "Az Rune", image: "/raids/nest_of_the_grootslangs.webp" },
  { name: "Orphion's Nexus of Light", level: "Lvl 80+", quest: "Realm of Light I até o V", rune: "Uth Rune", image: "/raids/orphions_nexus_of_light.webp" },
  { name: "The Canyon Colossus", level: "Lvl 97+", quest: "The Thanos Repository, Dwarves and Doguns I–IV, The Envoy I e II, The Breaking Point", rune: "Tol Rune", image: "/raids/the_canyon_colossus.webp" },
  { name: "The Nameless Anomaly", level: "Lvl 103+", quest: "A Journey Beyond e A Journey Further", rune: "Tol Rune", image: "/raids/the_nameless_anomaly.webp" },
];

export const queueSteps: RaidStepImage[] = [
  { src: "/raids/party_queue_menu.webp", alt: "Menu da Party Queue", caption: "" },
  { src: "/raids/raid_queue_selection.webp", alt: "Seleção da raid na fila", caption: "" },
  { src: "/raids/raid_queue_ready_up.webp", alt: "Tela de ready up da raid", caption: "" },
  { src: "/raids/raid_queue_group_found.webp", alt: "Tela de grupo encontrado", caption: "" },
];

export const silverbullNpcImage: RaidStepImage = {
  src: "/raids/silverbull_npc.webp",
  alt: "NPC do Centro Silverbull",
  caption:
    "Centro de Divisão Silverbull. O NPC da raid é o da direita. -159, 36, -4795",
};

export const guildRaidAvailableImage: RaidStepImage = {
  src: "/raids/guild_raid_available.webp",
  alt: "Indicador de guild raid disponível",
  caption:
    "Quando toda a party pertence à mesma guilda, a opção de guild raid fica disponível.",
};

export const notgRooms: RaidGuideRoom[] = [
  {
    room: "Sala 1",
    title: "Fique na Plataforma ou Fique na Torre",
    description:
      "A primeira sala da NOTG possui duas variações. Em ambas, uma pessoa mais tank ou com mais alcance normalmente assume a função principal, enquanto o restante da party protege a execução da mecânica.",
    variants: [
      {
        name: "Fique na Plataforma",
        summary:
          "Uma pessoa sobe na plataforma verde enquanto as outras impedem os ovos de contaminarem o centro, matando os ovos que aparecem ao redor da arena.",
        videoId: "43TcYLyjnEM",
        points: [
          "A pessoa com maior EHP ou maior alcance costuma ficar no centro.",
          "Os ovos surgem a cada 10 segundos em um dos 6 spawns possíveis e precisam ser destruídos em até 5 segundos.",
          "Se o ovo não for morto a tempo, ele contamina a plataforma central por 5 segundos e obriga o jogador a sair dela temporariamente.",
          "As outras 3 pessoas precisam acompanhar o aviso no chat, localizar o ovo com glowing e eliminá-lo rápido.",
          "A sala termina depois de 1 minuto mantendo o controle da plataforma.",
        ],
      },
      {
        name: "Fique na Torre",
        summary:
          "Uma pessoa sobe na torre que aparece em uma das cores do chão, enquanto o restante da equipe elimina os groots que tentam derrubar essa plataforma.",
        videoId: "EkO0F4G7lhg",
        points: [
          "Ao entrar, a sala mostra 5 cores no chão e, alguns segundos depois, uma delas recebe o aviso da próxima torre.",
          "A pessoa principal sobe na torre e precisa permanecer nela por 30 segundos, repetindo o processo até completar cerca de 60 segundos totais.",
          "Se alguém cair da torre, uma nova surge em outra cor após alguns segundos.",
          "Quem fica embaixo deve focar principalmente os mobs verdes com boca de espinhos, que mordem a plataforma e podem destruí-la.",
          "Os mobs voadores também exigem atenção porque causam muito dano e são mais difíceis de acertar.",
        ],
      },
    ],
  },
  {
    room: "Sala 2",
    title: "Colete os Materiais",
    description:
      "Aqui a party precisa juntar Slimey Goos para alimentar a torre central. Existem três caminhos possíveis para fazer isso: puzzle, parkour e miniboss.",
    variants: [
      {
        name: "Puzzle e Parkour",
        summary:
          "O caminho da esquerda mistura sequência de canhão com deslocamento até o fim da rota e rende duas Slimey Goos. O caminho da frente é um parkour mais rápido que entrega uma unidade por conclusão.",
        videoId: "CxngMx49H9o",
        points: [
          "No puzzle da esquerda, você observa a ordem das cores no holograma e acerta os canhões seguindo essa sequência.",
          "Depois do puzzle, finalize o percurso com parkour, dash ou teleport e colete duas Slimey Goos.",
          "No caminho da frente, o parkour começa com slime pads e costuma ser o mais indicado para builds com boa walk speed.",
          "Ao terminar o parkour, você recebe uma Slimey Goo e pode repetir o processo com boa velocidade.",
          "Sempre leve as Slimey Goos até a torre central e deposite no holograma até atingir o total de 10.",
        ],
      },
      {
        name: "Miniboss",
        summary:
          "O caminho da direita leva a um miniboss simples de entender, mas perigoso no impacto. Derrotá-lo pode conceder uma Slimey Goo para alguém da equipe.",
        videoId: "Xf5M5WOg2ag",
        points: [
          "Ao seguir pela direita, o objetivo é derrotar o miniboss o mais rápido possível.",
          "Normalmente alguém da equipe recebe a Slimey Goo ao fim da luta, embora a prioridade da distribuição não seja clara.",
          "Em alguns casos a recompensa pode ser voidada, então não existe muito controle sobre isso.",
          "O principal risco é o dash do boss, que causa bastante dano.",
        ],
      },
    ],
  },
  {
    room: "Sala 3",
    title: "Mate os Minibosses ou Quebre seu Caminho",
    description:
      "A última sala da NOTG também possui duas variações. Uma exige coordenação entre parte de cima e parte de baixo da arena; a outra foca em proteger quem está carregando o martelo.",
    variants: [
      {
        name: "Mate os Minibosses",
        summary:
          "Duas pessoas descem e duas permanecem em cima. O objetivo é ativar e derrotar os quatro minibosses que aparecem nas grandes plataformas da arena.",
        videoId: "s3or_3wfp_c",
        secondaryVideoId: "xpHK9LUCxuo",
        secondaryLabel: "POV da parte de cima",
        points: [
          "Duas pessoas entram pelos teleportes laterais e ficam responsáveis pela parte inferior da sala.",
          "Lá embaixo, é preciso quebrar o ovo para invocar o miniboss planta e lidar com o knockback constante.",
          "Dash, teleport ou o próprio slime pad ajudam a voltar rapidamente para a plataforma após ser empurrado.",
          "Depois que o boss cai, a plataforma sobe e os jogadores de cima continuam a sequência do miniboss seguinte.",
          "No último miniboss, vale puxar o agro e mantê-lo mais ao centro para evitar que ele escorregue para fora da plataforma.",
        ],
      },
      {
        name: "Quebre seu Caminho",
        summary:
          "Uma pessoa pega o martelo e quebra os pontos certos do caminho, enquanto o restante da equipe segura os mobs e evita que o jogador principal morra no multihit.",
        videoId: "0WjaG646Xh8",
        points: [
          "O player com maior EHP normalmente carrega o martelo.",
          "Com ele em mãos, a walk speed diminui e habilidades não podem ser usadas, então o trajeto precisa ser feito com calma.",
          "Existem pedras quebráveis fixas na rota. O ideal é memorizar onde estão esses pontos para não perder tempo.",
          "Warriors podem gerar blocos quebráveis parecidos com algumas habilidades, então é importante não se confundir com o cenário.",
          "Os outros 3 jogadores devem limpar os mobs e proteger quem está com o martelo, porque o multihit e o knockback nessa sala são bem altos.",
        ],
      },
    ],
  },
];

export const nolRooms: RaidGuideRoom[] = [
  {
    room: "Sala 1",
    title: "Purifique os Cristais",
    description:
      "A primeira sala da NOL é fixa. Uma pessoa segura a plataforma central por 60 segundos, enquanto o restante da party limpa os parasitas que aparecem abaixo dos cristais.",
    variants: [
      {
        name: "Purifique os Cristais",
        summary:
          "Uma pessoa sobe na torre do meio para segurar a plataforma, enquanto os outros jogadores matam os parasitas que surgem nos cristais antes que eles infectem o centro.",
        videoId: "Wd5ApA_vH1U",
        points: [
          "Logo ao entrar, alguém usa uma habilidade de movimentação para subir na torre do meio.",
          "A pessoa com maior EHP é a mais indicada para ficar em cima, porque os balões dessa sala causam bastante dano.",
          "A cada 10 segundos aparece um parasita embaixo de um dos cristais.",
          "Se o parasita não for morto, ele infecta a plataforma do meio e joga o jogador de cima para fora.",
          "O objetivo é manter esse controle por 60 segundos até a sala terminar.",
        ],
      },
    ],
  },
  {
    room: "Sala 2",
    title: "Purifique as Nuvens ou Colete os Cristais",
    description:
      "A segunda sala da NOL possui duas variações. Em uma, a equipe limpa nuvens marcadas por um raio roxo; na outra, o grupo escolhe entre puzzle e miniboss para coletar light crystals.",
    variants: [
      {
        name: "Purifique as Nuvens",
        summary:
          "Três nuvens recebem um raio roxo. Vá até cada uma delas, mate o mob do meio e repita o processo três vezes em cada nuvem para concluir a sala.",
        videoId: "Oef_rVd6CCg",
        points: [
          "O raio roxo indica claramente quais nuvens estão ativas naquele momento.",
          "Ao chegar na nuvem correta, surge um mob no centro que precisa ser eliminado.",
          "Esse ciclo deve ser repetido três vezes em cada nuvem para completar a sala.",
          "Os mobs secundários podem bloquear hits e até causar multihit, então é importante não ignorá-los totalmente.",
          "O mob do céu não é prioridade, mas também pode causar problema se a party relaxar demais.",
        ],
      },
      {
        name: "Colete os Cristais",
        summary:
          "A forma mais eficiente é deixar uma pessoa no puzzle e três no miniboss. O parkour não costuma compensar, porque entrega só um light crystal.",
        videoId: "2mvjUQPvGgI",
        secondaryVideoId: "EFkdkvVuJzw",
        secondaryLabel: "Miniboss",
        points: [
          "No puzzle, o jogador mira nas orbs pretas que vêm em sua direção e usa shift para acertá-las.",
          "O miniboss dá bastante dano, mas é simples de entender e normalmente cai rápido com três pessoas.",
          "Puzzle e miniboss rendem dois light crystals, enquanto o parkour entrega apenas um.",
          "Por isso, o ideal costuma ser três jogadores no miniboss e um no puzzle.",
          "O parkour também pode sair mais lento e inconsistente, então normalmente não vale a pena.",
        ],
      },
    ],
  },
  {
    room: "Sala 3",
    title: "Caminho Invisível ou Siga para Purificar",
    description:
      "A terceira sala da NOL também tem duas variações. Em ambas, movimentação e sobrevivência são decisivas, porque os mobs causam muito dano e punem qualquer atraso.",
    variants: [
      {
        name: "Caminho Invisível",
        summary:
          "Um player pega a orb e segue o caminho que só ele consegue ver até a plataforma dourada. Os outros precisam acompanhá-lo e repetir esse processo três vezes até sair pela caveira final.",
        videoId: "GnFrNFVDzbY",
        points: [
          "A pessoa que pega a orb é a única que vê o caminho completo no chão.",
          "Os outros jogadores podem seguir essa pessoa visualmente ou tentar adivinhar parte do trajeto.",
          "Classes com boa movimentação ou walk speed forte têm vantagem nessa sala.",
          "Os mobs dão muito dano, então qualquer hesitação pode virar multihit ou morte rápida.",
          "A pessoa com maior EHP costuma ser a melhor opção para carregar a orb.",
        ],
      },
      {
        name: "Siga para Purificar",
        summary:
          "Uma pessoa pega a orb infectada e não consegue ver o feixe de luz para purificá-la. Os outros jogadores precisam guiá-la enquanto seguram os mobs ao redor.",
        videoId: "IStZEy7AtXg",
        points: [
          "A pessoa com maior EHP costuma ser a melhor escolha para carregar a orb.",
          "Quem está com a orb não vê o feixe de luz, então depende totalmente da call ou da orientação do time.",
          "Normalmente um jogador fica responsável por guiar, enquanto os outros limpam os mobs para evitar multihit.",
          "O processo passa por três pisos até chegar ao último trecho, onde a saída já fica próxima.",
          "É uma sala longa, então disciplina de posicionamento e comunicação fazem muita diferença.",
        ],
      },
    ],
  },
];

export const tccRooms: RaidGuideRoom[] = [
  {
    room: "Sala 1",
    title: "Segure as Plataformas ou Congele as Lavas",
    description:
      "A primeira sala da TCC possui duas variações. Uma exige coordenação entre grupo de cima e grupo de baixo; a outra divide a party entre o controle das lavas e a plataforma central.",
    variants: [
      {
        name: "Segure as Plataformas",
        summary:
          "Duas pessoas vão para cima e duas ficam embaixo. As plataformas precisam ser ativadas ao mesmo tempo para abrir o caminho e evitar o spawn de espinhos.",
        videoId: "6YMYGq4EoO0",
        secondaryVideoId: "_3Wyee2F9Gc",
        secondaryLabel: "Rota de baixo",
        points: [
          "Duas pessoas sobem pela escada ou com teleport da classe Mage até a plataforma azul superior.",
          "Um jogador segura a plataforma enquanto o outro o defende dos mobs com muito knockback, principalmente o aglomerado de pedra que dispara projéteis.",
          "As duas pessoas que ficam embaixo avançam quando o caminho abre e repetem a lógica de segurar a plataforma.",
          "As duas plataformas precisam ser pressionadas ao mesmo tempo, senão espinhos aparecem e causam muito dano.",
          "Quando o timer da parte de cima acabar, não saia cedo da plataforma. Depois, siga o caminho de pedra aberto para a direita e suba até a parede preta.",
        ],
      },
      {
        name: "Congele as Lavas",
        summary:
          "Três jogadores cuidam das lavas com água, enquanto um assume a plataforma central e lida com os minibosses depois da primeira fase da sala.",
        videoId: "TASZj-Cs2w4",
        points: [
          "Logo no início, a party vai para a esquerda pegar água e se divide entre as lavas principais.",
          "Um jogador costuma ficar responsável pela lava isolada, enquanto os demais cobrem as outras posições.",
          "É melhor matar os mobs antes de usar a água, porque eles causam bastante dano e atrapalham a execução.",
          "Depois que os primeiros 60 segundos passam, um jogador precisa subir na plataforma. Sem alguém lá em cima, o tempo ganho nas lavas não conta.",
          "Dois minibosses aparecem ao longo da sala. O objetivo do player da plataforma é continuar segurando até a conclusão, enquanto o restante mantém as lavas sob controle.",
        ],
      },
    ],
  },
  {
    room: "Sala 2",
    title: "Labirinto da Asa ou Escolte o Golem",
    description:
      "A segunda sala da TCC também tem duas variações. Uma depende de leitura e comunicação de posição; a outra é uma escolta longa que exige separação de funções e controle dos molten monsters.",
    variants: [
      {
        name: "Labirinto da Asa",
        summary:
          "Um player pega a asa para ver o labirinto de cima e comunicar o final correto para quem está embaixo, enquanto o restante da equipe já começa pelo caminho azul.",
        videoId: "x5VSkVywaQA",
        secondaryVideoId: "ec23yvJPwOM",
        secondaryLabel: "POV de quem pega a asa",
        points: [
          "Cinco segundos após o spawn, a asa aparece na frente da equipe e um jogador deve pegá-la.",
          "Com partículas ligadas, esse jogador enxerga os possíveis fins do labirinto e procura o aglomerado de partículas brancas.",
          "A call costuma ser feita com referência ao último golem, como Yellow Right ou Blue Left.",
          "Quem está sem a asa deve começar pelo azul para não ficar parado esperando a call.",
          "A sala termina quando todos os vivos, inclusive quem pegou a asa, chegam ao fim correto do labirinto.",
        ],
      },
      {
        name: "Escolte o Golem",
        summary:
          "Ative os golems, abra os portões com as alavancas e não deixe os molten monsters baterem neles. É uma sala mais lenta, mas toda ela gira em torno de proteger a escolta.",
        videoId: "IHhdZ6p4q4U",
        points: [
          "Os molten monsters laranjas são a principal prioridade. Quando ficam bravos, recebem glowing e focam o golem.",
          "O golem pode receber cura, então vale usar isso sempre que necessário.",
          "Ao encontrar um portão, procure a alavanca na entrada lateral à esquerda para abrir o caminho.",
          "Depois da primeira alavanca, dois jogadores continuam com o primeiro golem e os outros dois seguem pelo parkour para ativar o segundo.",
          "Quando o primeiro golem alcança a plataforma de pedra, a torre atrás do grupo abre e um player sobe para pegar a alavanca final que libera a progressão.",
        ],
      },
    ],
  },
  {
    room: "Sala 3",
    title: "Ative os Selos",
    description:
      "A terceira sala da TCC é fixa, mas se divide em vários desafios paralelos. Enquanto parte da equipe cuida dos selos, alguém também precisa defender o Elder Astal dos meteoros.",
    variants: [
      {
        name: "Primeval Machine",
        summary:
          "É um dos minibosses da sala. O padrão gira entre girar o martelo, lançar uma pedra e pular em uma direção aleatória.",
        videoId: "_OhHZxYHE-Y",
        points: [
          "A pedra lançada sempre é direcionada ao player, então vale antecipar esse movimento.",
          "Quando o boss pula, observe a direção para reposicionar rápido.",
          "Builds com alcance costumam lidar melhor com esse boss.",
          "Depois de derrotá-lo, surge um binding seal na arena. Basta clicar nele para completar essa parte do progresso.",
        ],
      },
      {
        name: "Parkour",
        summary:
          "Uma sessão de parkour com checkpoint no meio e dois launch pads na segunda metade. A execução limpa e sem pressa costuma ser a mais eficiente.",
        videoId: "chuBRUQ21VA",
        points: [
          "Walk speed alto ajuda bastante, e jump height normalmente atrapalha mais do que ajuda.",
          "Existe um checkpoint no meio do percurso, o que reduz bastante o risco total.",
          "Nos dois launch pads finais, o ideal é pisar e esperar começar a subir antes de avançar.",
          "No segundo launch pad, isso evita bater a cabeça na parte de baixo da plataforma.",
          "Ao terminar, siga o caminho de pedra e clique no binding seal.",
        ],
      },
      {
        name: "Desvie das Pedras",
        summary:
          "É um dos desafios mais simples depois que o padrão das pedras entra na memória. Também costuma ser um dos mais rápidos para liberar alguém para defender o Elder.",
        videoId: "q397DxEKJ30",
        points: [
          "Depois que você entende a sequência das pedras, esse desafio fica muito consistente.",
          "É uma das melhores opções para terminar rápido e voltar para ajudar na defesa do Elder Astal.",
          "Mesmo quando o Elder cai para 3 ou 2 de vida, ainda costuma ser possível segurar a defesa se alguém chegar logo depois.",
        ],
      },
      {
        name: "Agate Axon",
        summary:
          "Provavelmente o desafio mais difícil da sala. O boss tem múltiplas fases, forte knockback e uma fase final com mini axons e padrão circular de fogo.",
        videoId: "_OhHZxYHE-Y",
        points: [
          "Chegue perto do Axon para iniciar a primeira fase, mas não fique colado demais para não ser jogado para fora.",
          "Na segunda fase, ele começa com um grito e passa a perseguir o jogador com cabeçadas sucessivas.",
          "Depois disso, ele salta, invoca mini axons e cria um círculo de fogo.",
          "Builds que dependem muito de ficar no ar ou usam jump height costumam sofrer mais aqui.",
          "Ao finalizar essa sequência, o desafio termina no binding seal.",
        ],
      },
      {
        name: "Elder Astal",
        summary:
          "Enquanto os outros desafios são feitos, alguém precisa ficar no círculo da frente e destruir os meteoros antes que eles atinjam o Elder Astal.",
        videoId: "q397DxEKJ30",
        points: [
          "Fique dentro do círculo na frente do portão principal.",
          "Meteoros surgem à esquerda e à direita em ondas alternadas.",
          "Uma boa dica é ficar no shift, porque assim o disparo continua saindo sem pausa.",
          "A prioridade é destruir os meteoros antes que eles alcancem o Elder.",
        ],
      },
    ],
  },
];

export const tnaRooms: RaidGuideRoom[] = [
  {
    room: "Sala 1",
    title: "Pegue a Berry ou Segure a Plataforma",
    description:
      "A primeira sala da TNA possui duas variações. Em uma, um jogador carrega a berry e destrói portais no alto; na outra, a party divide funções entre a plataforma de cima e o controle dos void holes embaixo.",
    variants: [
      {
        name: "Pegue a Berry",
        summary:
          "Uma pessoa pega a berry com clique direito, recebe blindness até o fim da sala e passa a destruir os portais voadores, enquanto o restante da equipe protege e ajuda na orientação.",
        videoId: "xpb8OzIcccI",
        points: [
          "Cinco segundos após o spawn, a berry aparece na plataforma da frente e um dos jogadores precisa pegá-la.",
          "Quem segura a berry fica com blindness infinito até o fim da sala e não consegue usar spells, apenas andar e atirar nos portais.",
          "Os portais podem ser localizados pelos blocos diferenciados no chão ou pela call dos teammates.",
          "As outlines amarelas também ajudam a identificar melhor os portais.",
          "Cada portal precisa de 3 hits para ser destruído, e as partículas indicam quando já é hora de trocar de alvo.",
        ],
      },
      {
        name: "Segure a Plataforma",
        summary:
          "Uma pessoa desce pelo buraco negro e segura a plataforma de cima, enquanto as outras focam em matar os void holes na parte de baixo para evitar projéteis e o spawn do Heart of Darkness.",
        videoId: "yDF5m1UMYZE",
        points: [
          "A pessoa com maior EHP normalmente segue reto e desce pelo buraco negro para cair na plataforma superior.",
          "O ideal é ficar nos 9 blocos centrais, de preferência na ponta de um deles, para manter o timer correndo com menos risco de tomar hit.",
          "Quem fica embaixo deve priorizar os void holes com glowing, porque eles lançam projéteis que causam knockback e muito dano em quem está em cima.",
          "Se o void hole ficar vivo por muito tempo, ele invoca o Heart of Darkness, que causa dano altíssimo em todo mundo.",
          "Quando a sala acabar, atravesse o caminho liberado e saia pelo void hole do outro lado.",
        ],
      },
    ],
  },
  {
    room: "Sala 2",
    title: "Caminho da Árvore ou Caminho da Luz",
    description:
      "A segunda sala da TNA também possui duas variações. A da árvore é uma das mecânicas mais difíceis de qualquer raid, enquanto a da luz exige orientação constante e boa leitura de posicionamento.",
    variants: [
      {
        name: "Caminho da Árvore",
        summary:
          "Os jogadores doam almas para abrir a árvore, enquanto um integrante entra, procura a isoptera, derrota o alvo e leva o coração de volta ao altar até completar as duas entregas.",
        videoId: "zrJ7dAt86TI",
        secondaryVideoId: "s9UF0undjQo",
        secondaryLabel: "Dentro da árvore",
        points: [
          "Um jogador pisa no altar e permanece no bloco de portal do End por 5 segundos para doar a alma e abrir o acesso da árvore.",
          "Dentro da árvore existem vários caminhos que levam a grottos diferentes, e a isoptera pode aparecer em qualquer um deles.",
          "Quando o jogador encontra e derrota a isoptera, ele precisa voltar até o início da árvore ou fechar o loop pelo final para depositar um dos corações no altar.",
          "Os jogadores de fora devem gastar todas as almas disponíveis antes de matar os soul shrubs para repor recurso com eficiência.",
          "É importante lembrar que só recebe alma quem acerta o soul shrub pelo menos uma vez, então todo mundo deve hitá-lo ao entrar na sala.",
        ],
      },
      {
        name: "Caminho da Luz",
        summary:
          "Uma pessoa absorve a luz e fica cega, enquanto o resto da equipe guia esse jogador até os 3 shadowlings, mata o boss final da sala e só então libera o portal do meio.",
        videoId: "qDrmE7wPmAg",
        points: [
          "Antes da sala começar, uma pessoa absorve a luz e entra como alvo principal da mecânica.",
          "Os outros jogadores precisam ficar próximos dela para não morrerem e, ao mesmo tempo, guiar o caminho até os shadowlings.",
          "Os shadowlings podem ser acertados de longe, o que geralmente é mais seguro.",
          "Depois de matar os 3 shadowlings, a party ainda precisa derrotar o boss final da sala, que normalmente é um morcego.",
          "A pessoa com mais EHP costuma render melhor liderando a frente dessa execução.",
        ],
      },
    ],
  },
  {
    room: "Sala 3",
    title: "Colete os Materiais ou Pegue os Bulbs",
    description:
      "A terceira sala da TNA também tem duas variações. Uma mistura parkours, minibosses e void matters até o boss final; a outra gira em torno de localizar bulb keepers e proteger o bulb principal.",
    variants: [
      {
        name: "Colete os Materiais",
        summary:
          "A party coleta void matters por meio de dois parkours e dois minibosses, entrega tudo no portal e então derrota os portais corrompidos e o boss final para conseguir a última void matter.",
        videoId: "pdZI7LGvH8c",
        points: [
          "À esquerda e à direita existem dois parkours, sendo o longo o da esquerda e o curto o da direita.",
          "No parkour longo, parte da mecânica envolve cair no void, avançar e aproveitar o rollback para acertar a void matter real.",
          "Além disso, a sala também tem dois minibosses: o vermelho, mais simples, e o dos void holes, onde normalmente só o da direita precisa morrer porque é ele que dropa a void matter.",
          "Depois que 4 das 5 void matters são entregues, os 3 portais da área inicial viram minibosses que precisam ser derrotados algumas vezes.",
          "Só então surge o boss final da sala, que não é tão perigoso sozinho, mas pode sobrecarregar a party com os mobs ao redor.",
        ],
      },
      {
        name: "Pegue os Bulbs",
        summary:
          "Mate os bulb keepers, pegue o bulb que eles deixam cair e entregue no bulb azul principal três vezes, sem deixar os bichinhos rosas roubarem o objetivo.",
        videoId: "9Q1l893v9sE",
        points: [
          "Ao entrar na sala, espere alguns segundos até aparecer a mensagem informando que o bulb keeper spawnou.",
          "Ele fica com glowing, mas pode aparecer longe, então às vezes é preciso vasculhar o mapa.",
          "Ao matar o bulb keeper, ele dropa um bulb que deve ser levado até o bulb azul principal.",
          "Esse processo precisa ser repetido 3 vezes para concluir a sala.",
          "Os bichinhos rosas podem roubar o bulb e, se ficarem com ele por cerca de 20 a 30 segundos, a run falha.",
        ],
      },
    ],
  },
];

export const upcomingRaidGuides: string[] = [];

export const extras = [
  "Entre na raid com todos os itens que precisar. Depois de começar, o inventário é bloqueado e não é possível adicionar nem remover nada.",
  "Cada raid tem um tipo mítico diferente de aspect, que muda toda sexta-feira às 14h no horário de Brasília. As rotações também afetam versões fabled e lendária.",
  "Só é possível utilizar 1 aspect mítico por classe.",
  "Qualquer aspect obtido pode ser usado em todas as classes compatíveis com aquele aspect.",
  "É possível aumentar a quantidade de aspects e recompensas ativando os Gambits na tela inicial da raid. Cada gambit traz um desafio ou consequência.",
  "Os Gambits são aleatórios, funcionam para todas as raids e mudam diariamente.",
  "Todos têm acesso ao primeiro gambit. O segundo e o terceiro só são liberados nos ranks Admiral e Master.",
  "Para verificar seu ranking de raid, clique na bússola e passe o mouse no ícone de machado.",
  "Para subir no ranking, basta completar raids e ganhar XP. Sem concluir a run, não há progresso.",
  "Todos os rankings têm 3 divisões, exceto a partir de Admiral: Admiral, Mestre e Grão-Mestre.",
];

export const supportImages: RaidStepImage[] = [
  { src: "/raids/gambit_slots.webp", alt: "Tela com os slots de gambit", caption: "Tela inicial com os slots de gambit disponíveis para a run." },
  { src: "/raids/gambit_details.webp", alt: "Detalhes de um gambit", caption: "Leitura detalhada dos efeitos e das penalidades de um gambit ativo." },
  { src: "/raids/character_info_menu.webp", alt: "Acesso ao menu de informações do personagem", caption: "Área usada para consultar informações e progresso relacionados às raids." },
  { src: "/raids/raid_ranking_progress.webp", alt: "Progresso do ranking de raid", caption: "Progresso acumulado no ranking de raid conforme você conclui runs." },
  { src: "/raids/raid_completed.webp", alt: "Mensagem de raid concluída", caption: "Confirmação visual de uma run concluída com sucesso." },
];

export type RaidInfoCard = {
  title: string;
  description: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description?: string;
};

export type RaidGuideGroup = {
  eyebrow: string;
  shortName: string;
  description: string;
  rooms: RaidGuideRoom[];
};

export const raidsIntroParagraphs = [
  "Raids são conteúdos em grupo com salas de desafio, buffs intermediários e um chefe final. Além da dificuldade própria de cada mapa, elas também entregam recompensas únicas que não aparecem em outras partes do jogo.",
  "Aqui você encontra o essencial para começar: como entrar, o que cada raid exige, como funciona a progressão interna e o que esperar das recompensas no final.",
];

export const raidFirstStepsDescription =
  "Antes de entrar em qualquer raid, você precisa se registrar no Centro de Divisão Silverbull, localizado a leste de Cinfras. Depois disso, basta ter uma party com 4 pessoas, o nível e as quests exigidas, além da runa correta para cada entrada.";

export const raidFirstStepsIntro: SectionIntro = {
  eyebrow: "Primeiros passos",
  title: "Como Participar",
  description: raidFirstStepsDescription,
};

export const raidFirstStepsLabels = {
  quest: "Quest",
  rune: "Runa",
};

export const raidFirstStepsSupportImages: RaidStepImage[] = [
  {
    src: "/raids/rune_types.webp",
    alt: "Tipos de runa das raids",
    caption: "Tipos de runa usados nas raids: Az, Uth e Tol.",
  },
  {
    src: "/raids/party_finder_listing.webp",
    alt: "Lista de party finder",
    caption: "Exemplo de party aberta no finder para conteúdos em grupo.",
  },
];

export const raidStructureDescription =
  "Todas as raids seguem a mesma base: três salas de desafio, intervalos com buffs entre elas e um boss final. O que realmente muda é a mecânica específica de cada mapa.";

export const raidStructureIntro: SectionIntro = {
  eyebrow: "Dentro da raid",
  title: "Estrutura",
  description: raidStructureDescription,
};

export const raidStructureCards: RaidInfoCard[] = [
  {
    title: "Desafios",
    description:
      "São três salas com objetivos próprios. Em algumas raids, a dificuldade cresce; em outras, a ordem das salas pesa mais que o dano bruto.",
  },
  {
    title: "Buffs",
    description:
      "Entre uma sala e outra existem baús de buffs. Escolher bem esses bônus ajuda bastante no boss final e em salas mais punidoras.",
  },
  {
    title: "Boss",
    description:
      "Depois das três salas, a equipe enfrenta o chefe da raid. Cada boss pede leitura de mecânica, posicionamento e ritmo diferentes.",
  },
  {
    title: "Falha",
    description:
      "Se a party falhar em qualquer etapa, a raid termina ali. A runa é consumida e você perde a recompensa de conclusão.",
  },
];

export const guildRaidsDescription =
  "A versão da raid feita com membros da guilda aumenta a dificuldade, mas também melhora as recompensas entregues para a comunidade e para os participantes.";

export const guildRaidsIntro: SectionIntro = {
  eyebrow: "Conteúdo de guilda",
  title: "Guild Raids",
  description: guildRaidsDescription,
};

export const guildRaidCardTitles = {
  rewards: "Recompensas da Guilda",
  aspects: "Distribuição de Aspects",
};

export const guildRaidRewards = [
  "2048 esmeraldas, equivalentes a 32 blocos, por raid completa.",
  "2 aspects distribuídos entre os participantes da guild raid.",
  "As esmeraldas vão para o cofre da guilda como investimento comunitário.",
  "Os aspects são entregues por um Chief ou Líder em ordem de requisição.",
];

export const guildRaidAspectDistribution = [
  "Um Chief ou Líder precisa estar online para realizar a distribuição.",
  "O limite de estoque para distribuição é 10.",
  "A entrega segue a ordem de requisição combinada pela guilda.",
  "Apenas jogadores que completaram a raid participam da decisão final.",
];

export const raidGuidesDescription =
  "A partir daqui, cada raid passa a ter uma explicação própria com foco em salas, variações e vídeos.";

export const raidGuidesIntro: SectionIntro = {
  eyebrow: "Guias das raids",
  title: "Salas e Bossfights",
  description: raidGuidesDescription,
};

export const raidGuidesLabels = {
  variant: "Variação",
  extraVideo: "Vídeo extra",
  upcoming: "Próxima",
  upcomingDescription: "Estrutura reservada para receber a explicação completa dessa raid depois.",
};

export const raidGuideGroups: RaidGuideGroup[] = [
  {
    eyebrow: "Nest of the Grootslangs",
    shortName: "NOTG",
    description:
      "Aqui fica a leitura completa da raid: as variações de cada sala, o que cada player precisa fazer e os vídeos de apoio para ver a execução na prática.",
    rooms: notgRooms,
  },
  {
    eyebrow: "Orphion's Nexus of Light",
    shortName: "NOL",
    description:
      "A NOL mantém a mesma lógica de leitura por salas, mas com foco maior em coordenação, movimentação e reação rápida. A Sala 1 é fixa, enquanto a Sala 2 e a Sala 3 possuem duas variações cada.",
    rooms: nolRooms,
  },
  {
    eyebrow: "The Canyon Colossus",
    shortName: "TCC",
    description:
      "A TCC entra no mesmo formato de leitura por salas, mas com uma dinâmica mais pesada em coordenação de caminhos, controle de mobs e divisão de funções dentro da party finder.",
    rooms: tccRooms,
  },
  {
    eyebrow: "The Nameless Anomaly",
    shortName: "TNA",
    description:
      "A TNA fecha o ciclo das raids com uma mistura forte de cegueira, guidagem, coleta de recursos e salas que punem muito qualquer desorganização da party.",
    rooms: tnaRooms,
  },
];

export const raidRewardsDescription =
  "Depois de concluir a raid, a party é enviada para a sala de recompensa. É ali que entram os pulls finais, os aspects e os drops mais valiosos da run. O resultado muda conforme o desempenho da equipe ao longo das salas.";

export const raidRewardsIntro: SectionIntro = {
  eyebrow: "Ao final da raid",
  title: "Recompensas",
  description: raidRewardsDescription,
};

export const raidRewardsLabels = {
  finalPulls: "Pulls Finais",
  aspects: "Aspects",
  aspectExamples: "Exemplos de efeito",
};

export const raidRewardOutcomes = [
  {
    label: "Run Perfeita",
    value: "+3 pulls por sala + 1 aspect",
    description:
      "Concluir a raid sem perder desempenho nas salas mantém o ganho máximo de pulls em cada etapa e libera o aspect no baú final.",
  },
  {
    label: "Run com morte",
    value: "+2 pulls por sala",
    description:
      "Se a party completa a raid com falha em algum desafio, cada sala passa a render menos pulls e o aspect deixa de cair.",
  },
  {
    label: "Run falhada",
    value: "Sem baú final",
    description: "Sem conclusão, não existe recompensa final. A runa já foi consumida e a tentativa termina ali.",
  },
];

export const raidFinalPullsTips = [
  "Os pulls não dependem só do baú final: o desempenho da party ao longo das salas define o valor acumulado da run.",
  "Manter a raid limpa preserva o total de pulls por sala e transforma cada clear em uma farm mais eficiente.",
  "No fechamento da run, o baú ainda pode entregar tomes, esmeraldas, acessórios únicos, powders, corkian amplifier e outros drops relevantes.",
];

export const raidAspectDetails = [
  "São aprimoramentos da árvore de habilidades e existem em versões mítica, fabled e lendária.",
  "Variam do Tier I ao Tier IV. Quanto maior o tier, maior o bônus aplicado.",
  "O aspect obtido não precisa ser da classe usada naquela run.",
  "Eles podem ser usados em todas as classes compatíveis com o efeito.",
];

export const raidAspectExamples = [
  "Área extra no Bash",
  "Anjos e summons",
  "Ice Snakes",
  "Clones",
  "Duração de Totem",
];

export const raidRewardImages: RaidStepImage[] = [
  {
    src: "/raids/reward_chest_location.webp",
    alt: "Local do baú final da raid",
    caption: "Baú final disponível na sala de recompensa após concluir a raid.",
  },
  {
    src: "/raids/reward_chest_opened.webp",
    alt: "Baú final aberto com rewards",
    caption: "Exemplo do conteúdo de um baú final com aspects, pulls e tomes.",
  },
];

export const raidExtrasDescription =
  "Essa parte reúne tudo o que não está preso a uma sala específica, mas ainda pesa muito na experiência de raid: gambits, ranking, restrições de inventário e detalhes que influenciam a preparação da party antes e depois da run.";

export const raidExtrasIntro: SectionIntro = {
  eyebrow: "Informações adicionais",
  title: "Extra",
  description: raidExtrasDescription,
};

export const raidExtraHighlights: RaidInfoCard[] = [
  {
    title: "Gambits",
    description: "Modificadores diários que aumentam o risco da run e podem melhorar o volume de recompensa.",
  },
  {
    title: "Raid Ranking",
    description: "Seu progresso sobe conforme você conclui raids. Sem clear, não existe avanço real no ranking.",
  },
  {
    title: "Gestão da run",
    description:
      "Itens, inventory lock, composição de party e leitura da mecânica impactam muito mais do que parece.",
  },
];

export const raidExtrasLabels = {
  highlight: "Destaque",
  note: "Nota",
};

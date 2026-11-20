export type RaidCatalogItem = {
  /** Âncora da seção no guia (#notg, #nol...). */
  id: "notg" | "nol" | "tcc" | "tna" | "twp";
  sigla: string;
  name: string;
  /** Nível de combate mínimo (wiki: Raids, conferido em 18/11/2026, jogo 2.2.4). */
  level: number;
  quest: string;
  rune: string;
  boss: string;
  image: string;
  location?: string;
};

export type RaidStepImage = {
  src: string;
  alt: string;
  caption: string;
};

export type RaidGuideVariant = {
  name: string;
  summary: string;
  videoId?: string;
  videoPlaceholder?: string;
  secondaryVideoId?: string;
  secondaryLabel?: string;
  points: string[];
};

export type RaidGuideRoom = {
  room: string;
  title: string;
  description: string;
  cardLabel?: string;
  variants: RaidGuideVariant[];
};

export type RaidCaptionImage = {
  src: string;
  alt: string;
  caption: string;
};

export const raids: RaidCatalogItem[] = [
  { id: "notg", sigla: "NOTG", name: "Nest of the Grootslangs", level: 54, quest: "Realm of Light I - The Worm Holes", rune: "Az", boss: "Grootslang Wyrmling", image: "/raids/notg.webp", location: "X: -1977, Z: -5661" },
  { id: "nol", sigla: "NOL", name: "Orphion's Nexus of Light", level: 79, quest: "Realm of Light I até o V", rune: "Uth", boss: "Orphion e The Parasite", image: "/raids/nol.webp", location: "X: -732, Z: -6499" },
  { id: "tcc", sigla: "TCC", name: "The Canyon Colossus", level: 95, quest: "The Thanos Repository, Dwarves and Doguns I-IV, The Envoy I e II, The Breaking Point", rune: "Tol", boss: "The Canyon Colossus", image: "/raids/tcc.webp", location: "X: 721, Z: -4452" },
  { id: "tna", sigla: "TNA", name: "The Nameless Anomaly", level: 103, quest: "A Journey Beyond e A Journey Further (por personagem)", rune: "Tol", boss: "The Nameless", image: "/raids/tna.webp", location: "X: 1071, Z: -830" },
  { id: "twp", sigla: "TWP", name: "The Wartorn Palace", level: 119, quest: "Apotheosis", rune: "Ek", boss: "Anathema", image: "/raids/twp.webp", location: "X: -1625, Z: -674" },
];

export const queueSteps: RaidStepImage[] = [
  { src: "/raids/party_queue.webp", alt: "Menu da Party Queue", caption: "" },
  { src: "/raids/party_queue2.webp", alt: "Party Queue com 4 pessoas", caption: "" },
  { src: "/raids/iniciar_raid.webp", alt: "Tela de iniciar raid", caption: "" },
  { src: "/raids/raid_encontrada.webp", alt: "Seleção da raid na fila", caption: "" },
];

export const silverbullNpcImage: RaidStepImage = {
  src: "/raids/raid_chief.webp",
  alt: "NPC do Centro Silverbull",
  caption:
    "Centro de Divisão Silverbull. O NPC da raid é o da direita. -159, 36, -4795",
};

export const cinfrasSilverbullImage: RaidStepImage = {
  src: "/lootrun/Cinfras_silverbull.webp",
  alt: "Entrada de Cinfras para o Centro Silverbull",
  caption: "A entrada em Cinfras que leva ao Centro de Divisão Silverbull.",
};

export const guildRaidAvailableImage: RaidStepImage = {
  src: "/raids/guild_raid.webp",
  alt: "Indicador de guild raid disponível",
  caption:
    "Quando a party inteira é da mesma guilda, aparece a opção de guild raid.",
};

export const notgRooms: RaidGuideRoom[] = [
  {
    room: "Sala 1",
    title: "Fique na Plataforma ou Fique na Torre",
    description:
      "A primeira sala da NOTG tem duas versões. Nas duas, alguém mais tank ou com mais alcance faz a mecânica principal, e o resto da party protege essa pessoa.",
    variants: [
      {
        name: "Fique na Plataforma",
        summary:
          "Uma pessoa sobe na plataforma verde, e as outras matam os ovos que aparecem em volta da arena antes que eles contaminem o centro.",
        videoId: "43TcYLyjnEM",
        points: [
          "A pessoa com maior [[ehp|EHP]] ou maior alcance costuma ficar no centro.",
          "Os ovos nascem a cada 10 segundos em um dos 6 spawns possíveis, e você tem 5 segundos para quebrar cada um.",
          "Se o ovo não morrer a tempo, ele contamina a plataforma do centro por 5 segundos e quem está nela precisa sair.",
          "As outras 3 pessoas ficam de olho no aviso do chat, acham o ovo com glowing e matam rápido.",
          "A sala acaba depois de 1 minuto segurando a plataforma.",
        ],
      },
      {
        name: "Fique na Torre",
        summary:
          "Uma pessoa sobe na torre que aparece numa das cores do chão, e o resto da party mata os groots que tentam derrubar essa torre.",
        videoId: "EkO0F4G7lhg",
        points: [
          "Quando você entra, o chão tem 5 cores e, alguns segundos depois, uma delas é marcada como a próxima torre.",
          "Quem faz a mecânica sobe na torre e fica 30 segundos nela, e repete até somar uns 60 segundos.",
          "Se a pessoa cair da torre, uma nova aparece em outra cor depois de alguns segundos.",
          "Quem fica embaixo foca nos mobs verdes com boca de espinhos, que mordem a torre e podem destruir ela.",
          "Fique de olho também nos mobs voadores: eles dão muito dano e são mais difíceis de acertar.",
        ],
      },
    ],
  },
  {
    room: "Sala 2",
    title: "Colete os Materiais",
    description:
      "Aqui a party junta Slimey Goos para encher a torre do centro. Tem três caminhos para isso: puzzle, parkour e miniboss.",
    cardLabel: "POV",
    variants: [
      {
        name: "POV de Puzzle/Parkour",
        summary:
          "O caminho da esquerda mistura uma sequência de canhões com um trajeto até o fim da rota e dá duas Slimey Goos. O caminho da frente é um parkour mais rápido que dá uma por vez.",
        videoId: "CxngMx49H9o",
        points: [
          "No puzzle da esquerda, você vê a ordem das cores no holograma e acerta os canhões nessa mesma ordem.",
          "Depois do puzzle, termine o trajeto com parkour, dash ou teleport e pegue as duas Slimey Goos.",
          "No caminho da frente, o parkour começa com slime pads e é o melhor para builds com boa walk speed.",
          "Terminou o parkour, você ganha uma Slimey Goo e pode repetir rápido.",
          "Leve sempre as Slimey Goos até a torre do centro e entregue no holograma até chegar a 10.",
        ],
      },
      {
        name: "POV de Miniboss",
        summary:
          "O caminho da direita leva a um miniboss fácil de entender, mas que bate forte. Quando ele morre, alguém da party pode ganhar uma Slimey Goo.",
        videoId: "Xf5M5WOg2ag",
        points: [
          "Indo pela direita, o objetivo é matar o miniboss o mais rápido possível.",
          "Normalmente alguém da party ganha a Slimey Goo no fim da luta, mas não dá para saber quem vai receber.",
          "Às vezes a recompensa é voidada, então não tem muito controle sobre isso.",
          "O maior perigo é o dash do boss, que dá muito dano.",
        ],
      },
    ],
  },
  {
    room: "Sala 3",
    title: "Mate os Minibosses ou Quebre seu Caminho",
    description:
      "A última sala da NOTG também tem duas versões. Uma pede coordenação entre quem fica em cima e quem fica embaixo na arena; a outra é sobre proteger quem está com o martelo.",
    variants: [
      {
        name: "Mate os Minibosses",
        summary:
          "Duas pessoas descem e duas ficam em cima. O objetivo é ativar e matar os quatro minibosses que aparecem nas plataformas grandes da arena.",
        videoId: "s3or_3wfp_c",
        secondaryVideoId: "xpHK9LUCxuo",
        secondaryLabel: "POV da parte de cima",
        points: [
          "Duas pessoas entram pelos teleportes dos lados e cuidam da parte de baixo da sala.",
          "Lá embaixo, você quebra o ovo para invocar o miniboss planta e aguenta o knockback o tempo todo.",
          "Dash, teleport ou o próprio slime pad ajudam a voltar rápido para a plataforma quando você é empurrado.",
          "Quando o miniboss morre, a plataforma sobe e quem está em cima parte para o próximo miniboss.",
          "No último miniboss, vale puxar o agro e deixar ele mais no centro, para ele não escorregar para fora da plataforma.",
        ],
      },
      {
        name: "Quebre seu Caminho",
        summary:
          "Uma pessoa pega o martelo e quebra os pontos certos do caminho, e o resto da party segura os mobs para quem está com o martelo não morrer no multihit.",
        videoId: "0WjaG646Xh8",
        points: [
          "Quem tem mais EHP costuma ficar com o martelo.",
          "Com o martelo na mão, a walk speed cai e você não pode usar habilidades, então vá com calma.",
          "As pedras quebráveis ficam sempre no mesmo lugar da rota. Decore onde elas estão para não perder tempo.",
          "Algumas habilidades de Warrior criam blocos parecidos com as pedras quebráveis, então cuidado para não confundir.",
          "Os outros 3 limpam os mobs e protegem quem está com o martelo, porque o multihit e o knockback nessa sala são bem fortes.",
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
      "A primeira sala da NOL é sempre a mesma. Uma pessoa segura a plataforma do centro por 60 segundos, e o resto da party limpa os parasitas que aparecem embaixo dos cristais.",
    variants: [
      {
        name: "Purifique os Cristais",
        summary:
          "Uma pessoa sobe na torre do meio para segurar a plataforma, e os outros matam os parasitas que nascem nos cristais antes que eles infectem o centro.",
        videoId: "Wd5ApA_vH1U",
        points: [
          "Assim que a sala começa, alguém usa uma habilidade de movimento para subir na torre do meio.",
          "Quem tem mais EHP deve ficar em cima, porque os balões dessa sala dão muito dano.",
          "A cada 10 segundos nasce um parasita embaixo de um dos cristais.",
          "Se ninguém matar o parasita, ele infecta a plataforma do meio e joga quem está em cima para fora.",
          "É só segurar assim por 60 segundos até a sala acabar.",
        ],
      },
    ],
  },
  {
    room: "Sala 2",
    title: "Purifique as Nuvens ou Colete os Cristais",
    description:
      "A segunda sala da NOL tem duas versões. Numa, a party limpa as nuvens marcadas por um raio roxo; na outra, cada um escolhe entre puzzle e miniboss para pegar light crystals.",
    variants: [
      {
        name: "Purifique as Nuvens",
        summary:
          "Três nuvens ficam marcadas com um raio roxo. Vá até cada uma, mate o mob do meio e repita três vezes em cada nuvem para fechar a sala.",
        videoId: "Oef_rVd6CCg",
        points: [
          "O raio roxo mostra quais nuvens estão ativas naquele momento.",
          "Quando você chega na nuvem certa, aparece um mob no centro que precisa morrer.",
          "Repita isso três vezes em cada nuvem para completar a sala.",
          "Os outros mobs bloqueiam hits e podem até causar multihit, então não ignore eles.",
          "O mob do céu não é prioridade, mas atrapalha se a party relaxar demais.",
        ],
      },
      {
        name: "Colete os Cristais",
        summary:
          "O jeito mais rápido é deixar uma pessoa no puzzle e três no miniboss. O parkour quase nunca compensa, porque dá só um light crystal.",
        videoId: "2mvjUQPvGgI",
        secondaryVideoId: "EFkdkvVuJzw",
        secondaryLabel: "Miniboss",
        points: [
          "No puzzle, você mira nas orbs pretas que vêm na sua direção e aperta shift para acertar.",
          "O miniboss dá bastante dano, mas é fácil de entender e costuma morrer rápido com três pessoas.",
          "Puzzle e miniboss dão dois light crystals cada; o parkour dá só um.",
          "Por isso, o melhor costuma ser três no miniboss e um no puzzle.",
          "O parkour também é mais lento e dá mais errado, então quase nunca vale a pena.",
        ],
      },
    ],
  },
  {
    room: "Sala 3",
    title: "Caminho Invisível ou Siga para Purificar",
    description:
      "A terceira sala da NOL também tem duas versões. Nas duas, mobilidade e sobrevivência fazem toda a diferença, porque os mobs dão muito dano e punem qualquer vacilo.",
    variants: [
      {
        name: "Caminho Invisível",
        summary:
          "Um player pega a orb e segue o caminho que só ele vê até a plataforma dourada. Os outros vão atrás, e isso se repete três vezes até a saída pela caveira no fim.",
        videoId: "GnFrNFVDzbY",
        points: [
          "Só quem pega a orb vê o caminho inteiro no chão.",
          "Os outros podem seguir essa pessoa ou tentar adivinhar parte do trajeto.",
          "Classes com boa mobilidade ou muita walk speed se dão melhor nessa sala.",
          "Os mobs dão muito dano, então qualquer hesitação pode virar multihit ou morte na hora.",
          "Quem tem mais EHP costuma ser a melhor escolha para pegar a orb.",
        ],
      },
      {
        name: "Siga para Purificar",
        summary:
          "Uma pessoa pega a orb infectada e não consegue ver o feixe de luz que purifica a orb. Os outros guiam essa pessoa enquanto seguram os mobs em volta.",
        videoId: "IStZEy7AtXg",
        points: [
          "Quem tem mais EHP costuma ser a melhor escolha para pegar a orb.",
          "Quem está com a orb não vê o feixe de luz, então depende totalmente da call da party.",
          "Normalmente um jogador guia, e os outros limpam os mobs para evitar multihit.",
          "São três andares até o último trecho, onde a saída já fica perto.",
          "É uma sala longa, então posicionamento e comunicação fazem muita diferença.",
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
      "A primeira sala da TCC tem duas versões. Uma pede coordenação entre quem fica em cima e quem fica embaixo; na outra, a party se divide entre as lavas e a plataforma do centro.",
    variants: [
      {
        name: "Segure as Plataformas",
        summary:
          "Duas pessoas vão para cima e duas ficam embaixo. As plataformas precisam ser ativadas ao mesmo tempo para abrir o caminho sem spawnar espinhos.",
        videoId: "6YMYGq4EoO0",
        secondaryVideoId: "_3Wyee2F9Gc",
        secondaryLabel: "Rota de baixo",
        points: [
          "Duas pessoas sobem pela escada, ou com o teleport do Mage, até a plataforma azul de cima.",
          "Um segura a plataforma e o outro protege ele dos mobs com muito knockback, principalmente o bloco de pedras que atira projéteis.",
          "As duas pessoas de baixo avançam quando o caminho abre e fazem o mesmo: seguram a plataforma delas.",
          "As duas plataformas precisam estar ocupadas ao mesmo tempo, senão aparecem espinhos que dão muito dano.",
          "Quando o timer de cima acabar, não saia da plataforma antes da hora. Depois, siga o caminho de pedra que abre à direita e suba até a parede preta.",
        ],
      },
      {
        name: "Congele as Lavas",
        summary:
          "Três jogadores apagam as lavas com água, e um fica na plataforma do centro e segura os minibosses depois da primeira fase da sala.",
        videoId: "TASZj-Cs2w4",
        points: [
          "Logo no começo, a party vai para a esquerda pegar água e se divide entre as lavas principais.",
          "Um jogador costuma cuidar da lava isolada, e os outros cobrem o resto.",
          "Mate os mobs antes de jogar a água, porque eles dão bastante dano e atrapalham.",
          "Passados os primeiros 60 segundos, alguém precisa subir na plataforma. Sem ninguém lá em cima, o tempo das lavas não conta.",
          "Dois minibosses aparecem durante a sala. Quem está na plataforma continua segurando até o fim, e o resto mantém as lavas apagadas.",
        ],
      },
    ],
  },
  {
    room: "Sala 2",
    title: "Labirinto da Asa ou Escolte o Golem",
    description:
      "A segunda sala da TCC também tem duas versões. Uma depende de ler o labirinto e passar a call certa; a outra é uma escolta longa, com cada um na sua função e os molten monsters sob controle.",
    variants: [
      {
        name: "Labirinto da Asa",
        summary:
          "Um player pega a asa para ver o labirinto de cima e passar a saída certa para quem está embaixo, e o resto da party já começa pelo caminho azul.",
        videoId: "x5VSkVywaQA",
        secondaryVideoId: "ec23yvJPwOM",
        secondaryLabel: "POV de quem pega a asa",
        points: [
          "Cinco segundos depois do spawn, a asa aparece na frente da party e alguém pega.",
          "Com as partículas ligadas, esse jogador vê as saídas possíveis do labirinto e procura o monte de partículas brancas.",
          "A call costuma usar o último golem como referência, tipo Yellow Right ou Blue Left.",
          "Quem está sem a asa começa pelo azul para não ficar parado esperando a call.",
          "A sala acaba quando todo mundo que está vivo, inclusive quem pegou a asa, chega na saída certa do labirinto.",
        ],
      },
      {
        name: "Escolte o Golem",
        summary:
          "Ative os golems, abra os portões com as alavancas e não deixe os molten monsters baterem neles. É uma sala mais lenta, e tudo nela é sobre proteger a escolta.",
        videoId: "IHhdZ6p4q4U",
        points: [
          "Os molten monsters laranjas são a prioridade. Quando ficam bravos, ganham glowing e vão para cima do golem.",
          "Dá para curar o golem, então cure sempre que precisar.",
          "Quando chegar num portão, procure a alavanca na entrada da esquerda para abrir o caminho.",
          "Depois da primeira alavanca, dois jogadores continuam com o primeiro golem e os outros dois seguem pelo parkour para ativar o segundo.",
          "Quando o primeiro golem chega na plataforma de pedra, a torre atrás da party abre e alguém sobe para puxar a última alavanca, que libera o caminho.",
        ],
      },
    ],
  },
  {
    room: "Sala 3",
    title: "Ative os Selos",
    description:
      "A terceira sala da TCC é sempre a mesma, mas tem vários desafios ao mesmo tempo. Enquanto parte da party cuida dos selos, alguém também precisa defender o Elder Astal dos meteoros.",
    cardLabel: "POV",
    variants: [
      {
        name: "Primeval Machine",
        summary:
          "É um dos minibosses da sala. Ele alterna entre girar o martelo, jogar uma pedra e pular para uma direção aleatória.",
        videoId: "_OhHZxYHE-Y",
        points: [
          "A pedra sempre vem em você, então dá para prever e desviar.",
          "Quando ele pula, veja para onde foi e se reposicione rápido.",
          "Builds com alcance se dão melhor contra ele.",
          "Depois que ele morre, aparece um binding seal na arena. É só clicar nele para completar essa parte.",
        ],
      },
      {
        name: "Parkour",
        summary:
          "Um parkour com checkpoint no meio e dois launch pads na segunda metade. Fazer com calma e sem errar costuma ser o mais rápido.",
        videoId: "chuBRUQ21VA",
        points: [
          "Walk speed alta ajuda bastante, e jump height costuma mais atrapalhar do que ajudar.",
          "Tem um checkpoint no meio do caminho, o que diminui bastante o risco.",
          "Nos dois últimos launch pads, pise e espere começar a subir antes de seguir.",
          "No segundo launch pad, isso evita bater a cabeça na parte de baixo da plataforma.",
          "Ao terminar, siga o caminho de pedra e clique no binding seal.",
        ],
      },
      {
        name: "Desvie das Pedras",
        summary:
          "É um dos desafios mais fáceis depois que você decora o padrão das pedras. Também é um dos mais rápidos, o que libera alguém para defender o Elder.",
        videoId: "q397DxEKJ30",
        points: [
          "Depois que você pega a sequência das pedras, quase não tem erro.",
          "É uma das melhores opções para terminar rápido e voltar para defender o Elder Astal.",
          "Mesmo com o Elder em 3 ou 2 de vida, ainda dá para segurar se alguém chegar logo para ajudar.",
        ],
      },
      {
        name: "Agate Axon",
        summary:
          "Provavelmente o desafio mais difícil da sala. O boss tem várias fases, knockback forte e uma fase final com mini axons e um círculo de fogo.",
        videoId: "_OhHZxYHE-Y",
        points: [
          "Chegue perto do Axon para começar a primeira fase, mas não cole demais nele para não ser jogado para fora.",
          "Na segunda fase, ele dá um grito e começa a perseguir você com uma cabeçada atrás da outra.",
          "Depois disso, ele salta, invoca mini axons e cria um círculo de fogo.",
          "Builds que ficam muito no ar ou usam jump height sofrem mais aqui.",
          "No fim dessa sequência, é só clicar no binding seal.",
        ],
      },
      {
        name: "Elder Astal",
        summary:
          "Enquanto o resto da party faz os outros desafios, alguém fica no círculo da frente quebrando os meteoros antes que eles acertem o Elder Astal.",
        videoId: "q397DxEKJ30",
        points: [
          "Fique dentro do círculo na frente do portão principal.",
          "Os meteoros vêm em ondas, uma vez da esquerda e outra da direita.",
          "Fique segurando shift, porque assim você atira sem parar.",
          "A prioridade é quebrar os meteoros antes que eles cheguem no Elder.",
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
      "A primeira sala da TNA tem duas versões. Numa, um jogador pega a berry e quebra os portais no alto; na outra, a party se divide entre a plataforma de cima e os void holes embaixo.",
    variants: [
      {
        name: "Pegue a Berry",
        summary:
          "Uma pessoa pega a berry com o botão direito, fica com blindness até o fim da sala e vai quebrando os portais voadores, e o resto da party protege e guia essa pessoa.",
        videoId: "xpb8OzIcccI",
        points: [
          "Cinco segundos depois do spawn, a berry aparece na plataforma da frente e alguém pega.",
          "Quem pega a berry fica com blindness até o fim da sala e não pode usar spells: só andar e atirar nos portais.",
          "Dá para achar os portais pelos blocos diferentes no chão ou pela call da party.",
          "As outlines amarelas também ajudam a ver os portais.",
          "Cada portal quebra com 3 hits, e as partículas mostram quando é hora de trocar de alvo.",
        ],
      },
      {
        name: "Segure a Plataforma",
        summary:
          "Uma pessoa desce pelo buraco negro e segura a plataforma de cima, e as outras matam os void holes embaixo, para eles não atirarem nem spawnarem o Heart of Darkness.",
        videoId: "yDF5m1UMYZE",
        points: [
          "Quem tem mais EHP normalmente vai reto e desce pelo buraco negro para cair na plataforma de cima.",
          "O ideal é ficar nos 9 blocos do centro, de preferência na ponta de um deles, para o timer continuar correndo com menos risco de tomar hit.",
          "Quem fica embaixo foca nos void holes com glowing, porque eles atiram projéteis com knockback e muito dano em quem está em cima.",
          "Se um void hole ficar vivo por muito tempo, ele invoca o Heart of Darkness, que dá um dano absurdo em todo mundo.",
          "Quando a sala acabar, atravesse o caminho liberado e saia pelo void hole do outro lado.",
        ],
      },
    ],
  },
  {
    room: "Sala 2",
    title: "Caminho da Árvore ou Caminho da Luz",
    description:
      "A segunda sala da TNA também tem duas versões. A da árvore é uma das mecânicas mais difíceis de todas as raids; a da luz pede que a party guie uma pessoa o tempo todo.",
    variants: [
      {
        name: "Caminho da Árvore",
        summary:
          "A party doa almas para abrir a árvore, e uma pessoa entra, acha a isoptera, mata e leva o coração de volta ao altar. Isso se repete até completar as duas entregas.",
        videoId: "zrJ7dAt86TI",
        secondaryVideoId: "s9UF0undjQo",
        secondaryLabel: "Dentro da árvore",
        points: [
          "Um jogador pisa no altar e fica 5 segundos no bloco de portal do End para doar a alma e abrir a árvore.",
          "Dentro da árvore tem vários caminhos que levam a grottos diferentes, e a isoptera pode estar em qualquer um.",
          "Depois de achar e matar a isoptera, a pessoa volta para o começo da árvore, ou dá a volta pelo final, e entrega o coração no altar.",
          "Quem fica fora gasta todas as almas antes de matar os soul shrubs, para não desperdiçar nenhuma.",
          "Só ganha alma quem acerta o soul shrub pelo menos uma vez, então todo mundo bate nele assim que entra na sala.",
        ],
      },
      {
        name: "Caminho da Luz",
        summary:
          "Uma pessoa absorve a luz e fica cega, e o resto da party guia ela até os 3 shadowlings. Depois, a party mata o boss da sala, e só então o portal do meio abre.",
        videoId: "qDrmE7wPmAg",
        points: [
          "Antes da sala começar, uma pessoa absorve a luz e passa a ser o centro da mecânica.",
          "Os outros precisam ficar perto dela para não morrer e, ao mesmo tempo, mostrar o caminho até os shadowlings.",
          "Dá para acertar os shadowlings de longe, o que costuma ser mais seguro.",
          "Depois dos 3 shadowlings, a party ainda precisa matar o boss da sala, que normalmente é um morcego.",
          "Quem tem mais EHP costuma ser a melhor escolha para ir na frente.",
        ],
      },
    ],
  },
  {
    room: "Sala 3",
    title: "Colete os Materiais ou Pegue os Bulbs",
    description:
      "A terceira sala da TNA também tem duas versões. Uma mistura parkours, minibosses e void matters até o boss da sala; a outra é sobre achar os bulb keepers e proteger o bulb principal.",
    variants: [
      {
        name: "Colete os Materiais",
        summary:
          "A party junta void matters em dois parkours e dois minibosses, entrega tudo no portal e depois mata os portais corrompidos e o boss da sala para pegar a última void matter.",
        videoId: "pdZI7LGvH8c",
        points: [
          "Tem dois parkours: o longo, à esquerda, e o curto, à direita.",
          "No parkour longo, parte da mecânica é cair no void, avançar e aproveitar o rollback para acertar a void matter certa.",
          "A sala também tem dois minibosses: o vermelho, mais fácil, e o dos void holes, em que normalmente só o da direita precisa morrer, porque é ele que dropa a void matter.",
          "Depois de entregar 4 das 5 void matters, os 3 portais do começo da sala viram minibosses que precisam morrer algumas vezes.",
          "Só então aparece o boss da sala. Sozinho ele não é tão perigoso, mas com os mobs em volta pode apertar a party.",
        ],
      },
      {
        name: "Pegue os Bulbs",
        summary:
          "Mate os bulb keepers, pegue o bulb que eles dropam e entregue no bulb azul principal, três vezes, sem deixar os bichinhos rosas roubarem.",
        videoId: "9Q1l893v9sE",
        points: [
          "Quando entrar na sala, espere alguns segundos até aparecer a mensagem de que o bulb keeper spawnou.",
          "Ele fica com glowing, mas pode nascer longe, então às vezes é preciso rodar o mapa atrás dele.",
          "Quando morre, o bulb keeper dropa um bulb, que você leva até o bulb azul principal.",
          "Repita isso 3 vezes para fechar a sala.",
          "Os bichinhos rosas podem roubar o bulb e, se ficarem com ele por cerca de 20 a 30 segundos, a run falha.",
        ],
      },
    ],
  },
];

export const twpRooms: RaidGuideRoom[] = [
  {
    room: "Sala 1",
    title: "Desbloqueie as Portas Elementais ou Exploda os Mobs com Luz",
    description:
      "A primeira sala da TWP tem duas versões: Caminho (portas elementais) e Raio (Sonic Amplifier).",
        variants: [
          {
            name: "Caminho",
            summary:
              "A party limpa os mobs para abrir as portas, escolhe os elementos e, no salão principal, se divide em dois lados antes de se juntar de novo para o boss da sala.",
            videoId: "jX0N8feSN5g",
            points: [
              "Cada porta mostra dois elementos, e o que vocês escolherem define o tipo de mob da próxima parte. São 8 portas no total.",
              "No salão principal, a party se divide em 2 de cada lado para limpar as duas salas laterais.",
              "O progresso só conta quando os dois lados terminam.",
              "Depois, todo mundo volta para a porta principal para matar o mob principal e a horda que vem com ele.",
              "Para fechar a sala, ainda faltam 3 hordas.",
              "Na guild raid, o que muda aqui é principalmente a vida dos mobs.",
            ],
          },
      {
        name: "Raio",
        summary:
"Um player fica em cima carregando e atirando com o Sonic Amplifier, e os de baixo matam os mobs e juntam eles para os tiros de luz.",
        videoId: "BJZSJJ347nM",
        points: [
          "Quem sobe pega o Sonic Amplifier e quebra os blocos com glowing no teto para carregar a arma.",
          "Com a arma carregada, o objetivo é acertar o máximo de mobs possível.",
          "O mob roxo puxa os Jagaubis quando morre, então essa é a hora certa de atirar.",
          "Buraco negro, pancada no chão e agro de guardian também ajudam a juntar os mobs para o tiro.",
          "Quem fica embaixo foca em matar mobs, principalmente o roxo, e tenta manter o pack em cima do símbolo do tiro.",
          "Na guild raid, o que muda aqui é principalmente a vida dos mobs.",
        ],
      },
    ],
  },
  {
    room: "Sala 2",
    title: "Destrua os Escudos",
    description:
      "A segunda sala da TWP tem uma versão só. Um player sobe para quebrar os escudos sem parar, e o resto da party fica embaixo batendo no boss.",
    variants: [
      {
        name: "Destrua os Escudos",
        summary:
          "Um player sobe para quebrar os escudos e tirar a resistência do boss; os outros ficam embaixo batendo no boss e controlando a arena.",
        videoId: "HxMRVscZ1Ss",
        points: [
          "Um player pisa nos ovos do centro para ser jogado lá para cima.",
          "Lá em cima, ele quebra os escudos sem parar até a resistência do boss chegar a 0%.",
          "Os escudos respawnam muito rápido, então quem está em cima não pode parar.",
          "Embaixo, a party bate no boss e se posiciona para tomar menos dos mobs.",
          "Na guild raid, são 6 escudos, e cada um tira menos resistência do que na raid normal.",
          "A outra diferença entre a normal e a guild raid continua sendo a vida dos mobs.",
        ],
      },
    ],
  },
  {
    room: "Sala 3",
    title: "Destrua os Buracos",
    description:
      "A terceira sala da TWP também tem uma versão só. Um player usa o artefato para dar dash nas caixas e nos espinhos, e o resto ajuda a matar os buracos e a manter as caixas para fora.",
    variants: [
      {
        name: "Destrua os Buracos",
        summary:
          "Um player pega o artefato (spear), espera os buracos spawnarem e dá dash nas caixas para abrir novos alvos, até quebrar os 9 buracos da sala.",
        videoId: "QLMhujRIH8k",
        points: [
          "Um player pega o artefato no meio da sala e espera os buracos ganharem nametag de mob antes de começar.",
          "Quando os buracos ficam ativos, os outros ajudam a matar esses mobs para as caixas aparecerem.",
          "Quem está com o artefato dá dash nas caixas e nos espinhos para abrir novos buracos, e pode pegar mais de um de uma vez.",
          "São 9 buracos no total, contando o do centro.",
          "Quem não está com o artefato fica em cima das caixas para elas não afundarem de novo.",
          "Cada dash spawna um Carnifex; ele precisa morrer rápido para restaurar o dash do artefato.",
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------------------------
// Textos do guia. Fatos de mecânica conferidos na wiki (Raids) e na API oficial em 18/11/2026,
// jogo 2.2.4; reescritos com palavras da guilda (docs/CREDITOS.md).

export type RaidStep = {
  title: string;
  description: string;
};

export type RaidGuideGroup = {
  id: RaidCatalogItem["id"];
  description: string;
  rooms: RaidGuideRoom[];
  /** Print própria (public/raids/prints), quando existe. */
  print?: { base: string; alt: string; legenda: string };
};

export type RaidRank = {
  rank: string;
  xpTotal: string;
  libera: string;
};

export const raidsIntroParagraphs = [
  "Raids são conteúdos para 4 jogadores: três salas de desafio, pausas para escolher buffs e um boss no fim. Elas dão recompensas que não saem em nenhum outro lugar do jogo, como os aspects.",
];

export const raidsResumo = [
  "Registre-se no [[silverbull|Centro de Divisão Silverbull]], a leste de Cinfras.",
  "Monte uma [[party|party]] de 4, com o nível, a quest e a [[runa|runa]] de cada raid.",
  "Cada raid tem 3 salas e um boss; falhar em qualquer parte acaba com a run e gasta a runa.",
  "Sala completa sem ninguém morrer dá mais [[pull|pulls]] e um [[aspectPull|aspect pull]] a mais.",
];

export const raidFirstStepsDescription =
  "Antes da primeira raid, fale com o Raid Chief no Centro de Divisão Silverbull, a leste de Cinfras. Abaixo do nível 65 dá para jogar sem entrar na divisão; do 65 para cima, o registro é obrigatório. Depois é só montar uma party de 4 com o nível, as quests e a runa da raid que vocês vão fazer.";

export const raidFirstStepsSupportImages: RaidStepImage[] = [
  {
    src: "/raids/runas.webp",
    alt: "Tipos de runa das raids",
    caption: "Runas usadas para entrar nas raids: Az, Uth, Tol e Ek.",
  },
];

export const raidStructureSteps: RaidStep[] = [
  {
    title: "Três salas de desafio",
    description:
      "Cada sala tem um objetivo diferente. Em algumas raids a dificuldade sobe a cada sala; em outras, ordem e coordenação pesam mais que o dano.",
  },
  {
    title: "Buffs entre as salas",
    description:
      "Entre uma sala e outra, a party escolhe [[buff|buffs]] em baús. Escolher bem aqui facilita muito o boss e as salas mais difíceis.",
  },
  {
    title: "Boss final",
    description: "Depois das três salas vem o boss. Cada um tem mecânicas, posicionamento e ritmo diferentes.",
  },
  {
    title: "Falhou, acabou a run",
    description: "Se a party falhar em qualquer parte, a raid acaba ali: a runa já foi gasta e não tem recompensa final.",
  },
];

export const guildRaidsDescription =
  "Quando a party inteira é da mesma guilda, a opção de [[guildRaid|guild raid]] aparece na entrada. Ela é mais difícil e dá recompensa para a guilda: XP de guilda, pontos de temporada (Season Rating) e [[aspect|aspects]] que ficam guardados com a guilda, até 40.";

/** Regras internas da GsW para distribuir os aspects das guild raids (não são regras do jogo). */
export const guildRaidAspectDistribution = [
  "Um Chief ou Líder precisa estar online para fazer a entrega.",
  "A entrega segue a fila de pedidos combinada na guilda.",
  "Só quem completou a raid entra na decisão final.",
];

export const raidGuideGroups: RaidGuideGroup[] = [
  {
    id: "notg",
    description:
      "A primeira raid do jogo. As salas têm versões sorteadas, e o foco é controlar a área e proteger quem faz a mecânica.",
    rooms: notgRooms,
  },
  {
    id: "nol",
    description:
      "Pede mais coordenação, mobilidade e reação rápida. A Sala 1 é sempre a mesma; a Sala 2 e a Sala 3 têm duas versões cada.",
    rooms: nolRooms,
    print: {
      base: "/raids/prints/raid-nol-palacio-nexus",
      alt: "Salão do palácio de Orphion, com colunas e ornamentos em azul e dourado",
      legenda: "O palácio da NOL. Print da guilda.",
    },
  },
  {
    id: "tcc",
    description:
      "A party se divide em caminhos, segura os mobs e cada um tem a sua função. Errar a ordem custa caro.",
    rooms: tccRooms,
  },
  {
    id: "tna",
    description: "Cegueira, alguém guiando quem não vê, coleta de recursos e salas que punem qualquer bagunça.",
    rooms: tnaRooms,
  },
  {
    id: "twp",
    description:
      "A raid mais nova, de nível 119. Os vídeos são da raid normal; na guild raid, os mobs têm mais vida e algumas resistências mudam.",
    rooms: twpRooms,
    print: {
      base: "/raids/prints/raid-twp-chefe-anathema",
      alt: "Anathema, o boss da TWP: criatura alada vermelha e preta numa arena clara",
      legenda: "Anathema, o boss da TWP. Print da guilda.",
    },
  },
];

export const raidGuidesLabels = {
  variant: "Versão",
  extraVideo: "Vídeo extra",
};

export const raidRewardsDescription =
  "Quando completa a raid, a party vai para a sala de recompensa. O baú final usa os [[pull|pulls]] e [[aspectPull|aspect pulls]] que vocês juntaram na run: quanto melhor foram as salas, mais tentativas.";

export const raidRewardOutcomes = [
  {
    label: "Sala sem mortes",
    value: "+3 pulls e +1 aspect pull",
    description: "Cada sala completa com a party inteira viva dá o máximo.",
  },
  {
    label: "Sala com morte",
    value: "+2 pulls",
    description: "A sala conta, mas dá menos e não dá aspect pull.",
  },
  {
    label: "Run falhada",
    value: "Sem baú final",
    description: "Sem completar, não tem recompensa, e a runa já foi gasta.",
  },
];

export const raidDailyBonus =
  "A primeira vez que você completa cada raid no dia dá um bônus: +60 XP de divisão, +5 pulls, +1 aspect pull e +1 reroll. Ele renova à meia-noite de Nova York (ET). Com a assinatura Silverbull, o bônus dobra.";

export const raidAspectDetails = [
  "Aspects melhoram habilidades da árvore e vêm em versão mítica, fabled e lendária, do Tier I ao IV.",
  "O aspect que sai no baú não precisa ser da classe que você usou na run, e serve em qualquer classe compatível.",
  "Só dá para usar 1 aspect mítico por classe.",
  "O pool de aspects de cada raid (3 míticos, 5 ou 6 fabled e 8 ou 9 lendários) troca toda sexta às 13h de Nova York: 15h de Brasília de novembro a março, 14h no resto do ano.",
];

export const raidAspectExamples = ["Área extra no Bash", "Anjos e summons", "Ice Snakes", "Clones", "Duração de Totem"];

export const raidRewardImages: RaidStepImage[] = [
  {
    src: "/raids/reward_chest.webp",
    alt: "Local do baú final da raid",
    caption: "O baú final, na sala de recompensa.",
  },
  {
    src: "/raids/rewards_raid.webp",
    alt: "Baú final aberto com recompensas",
    caption: "Baú aberto com aspects, pulls e tomes.",
  },
];

export const raidGambits = {
  slots: "4 slots, liberados nos ranks Rookie I, Sentinel I, Admiral e Master.",
  diarios: "Todo dia o jogo sorteia 4 [[gambit|gambits]], os mesmos para todo mundo, e troca às 13h de Nova York.",
  ativos:
    "A wiki fala em até 3 gambits ativos por run (o bônus de recompensa para no 3º), apesar dos 4 slots. Confira no jogo antes de planejar um 4º.",
  recompensa: "O 1º gambit dá +1 aspect pull e +1 pull; o 2º, +2 e +3; o 3º, +3 e +5.",
};

export const raidRanks: RaidRank[] = [
  { rank: "Rookie I", xpTotal: "0", libera: "1º slot de gambit" },
  { rank: "Rookie II", xpTotal: "150", libera: "+1 aspect pull em guild raids" },
  { rank: "Rookie III", xpTotal: "450", libera: "+1 opção de buff (3 baús na sala de buff)" },
  { rank: "Sentinel I", xpTotal: "950", libera: "+2 pulls base e 2º slot de gambit" },
  { rank: "Sentinel II", xpTotal: "1.700", libera: "+1 aspect pull em guild raids" },
  { rank: "Sentinel III", xpTotal: "2.850", libera: "+1 slot de aspect" },
  { rank: "Admiral", xpTotal: "4.550", libera: "3º slot de gambit" },
  { rank: "Commander", xpTotal: "6.950", libera: "+2 pulls base" },
  { rank: "Master", xpTotal: "10.350", libera: "4º slot de gambit" },
  { rank: "Grandmaster", xpTotal: "20.700", libera: "Topo do ranking" },
];

export const extras = [
  "Entre com tudo o que vai precisar: depois que a raid começa, o inventário trava.",
  "Cada raid completa dá 100 XP de divisão; run que falhou não dá XP.",
  "Para ver seu rank, abra a bússola do menu e passe o mouse no ícone de machado.",
];

export const supportImages: RaidStepImage[] = [
  { src: "/raids/gambit.webp", alt: "Tela com os slots de gambit", caption: "Tela inicial com os slots de gambit." },
  { src: "/raids/nivel_raid.webp", alt: "Nível e rank da raid", caption: "Nível de raid e posição no ranking." },
];

export const raidFontes = [
  { rotulo: "Raids, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Raids" },
  { rotulo: "Mapa oficial da Wynncraft", href: "https://map.wynncraft.com/" },
];

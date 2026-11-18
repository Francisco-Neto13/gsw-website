// Guia de Festivais: texto da guilda (revisado só na escrita; sentido e números como vieram).
// Marcações: [[chave]] abre a caixa de item do glossário; {{x, y, z}} vira uma coordenada copiável.
// Imagens em public/festivais/; cada uma só aparece depois de medida em lib/dimensoes-imagens.json.

export type Imagem = { src: string; alt: string; legenda?: string };
export type Destaque = { tipo: "info" | "aviso" | "dica"; titulo: string; texto: string };
export type LinkExterno = { titulo: string; descricao: string; href: string };
export type Recomendacao = { nome: string; cor: string; texto: string; opiniao?: string };

export type FestivalId = "heroes" | "bonfire" | "spirits" | "blizzard";

export type Festival = {
  id: FestivalId;
  nome: string;
  curto: string;
  /** Caixas da loja oferecidas de graça no começo do festival. */
  caixas: string;
  abertura: string[];
  imagemAbertura?: Imagem;
  avisoAbertura?: Destaque;
  missao: { nome: string; paragrafos: string[]; recompensa: string; imagem?: Imagem; extra?: Destaque; wiki: LinkExterno };
  minigame: { nome: string; paragrafos: string[]; imagem?: Imagem };
  recompensas: { paragrafos: string[]; recomendacoes?: Recomendacao[]; observacao?: string };
  extras: { titulo: string; paragrafos: string[]; lista?: string[]; glitch?: { antes: string; visivel: string; leitura: string; depois: string } }[];
};

export const festivaisIntroParagraphs = [
  "Os Festivais são eventos sazonais de tempo limitado que mudam o tema do servidor e trazem uma série de atividades exclusivas. Durante essas semanas, a cidade de Detlas ganha decorações temáticas e vira o grande ponto de encontro para as festividades.",
  "Este guia apresenta como esses eventos se estruturam: como funciona cada festival, suas missões, os minigames e as caixas comemorativas, para que qualquer membro da guilda entenda como participar e aproveite ao máximo sem se sentir perdido.",
];

export const imagemPromocional: Imagem = {
  src: "/festivais/festival-bonfire-promocional.webp",
  alt: "Imagem promocional do Festival of the Bonfire, com uma fogueira acesa",
  legenda: "Imagem promocional do Festival of the Bonfire.",
};

export const festivaisCicloIntro =
  "As datas mudam de um ano para o outro, mas sempre acontecem 4 festivais por ano, nesta ordem:";

export const estruturaIntro =
  "Cada evento tem o seu tema, mas a estrutura de todos os festivais é muito parecida. Durante o evento, espere:";

export const estruturaDoFestival = [
  {
    icone: "duracao",
    titulo: "Duração",
    texto:
      "Os festivais duram cerca de três a quatro semanas. A transição acontece sozinha no servidor, mudando a estética de Detlas e ativando os NPCs do evento.",
  },
  {
    icone: "cidade",
    titulo: "Cidade principal",
    texto:
      "Detlas sempre é, sempre foi e sempre será o coração do evento. Lá ficam os mercadores, o dirigível que leva aos minigames e os NPCs que começam as missões comemorativas.",
  },
  {
    icone: "missao",
    titulo: "Missão principal",
    texto:
      "Uma atividade que muda um pouco a cada festival e é liberada aos poucos, com os dias. Você recebe dicas para achar NPCs, lugares ou segredos escondidos pelas províncias; completar a missão rende uma lembrancinha, uma quantidade moderada de moedas do evento e alguns [[trinket|trinkets]] exclusivos.",
  },
  {
    icone: "minigame",
    titulo: "Minigame",
    texto:
      "Cada festival traz um modo de jogo instanciado, focado em combate ou sobrevivência. Todo mundo que joga ganha tokens exclusivos, a moeda oficial do evento (e quem vence leva um adicional, claro).",
  },
  {
    icone: "recompensas",
    titulo: "Recompensas sazonais",
    texto:
      "As moedas dos minigames e das missões podem ser vendidas para outros jogadores (geralmente por um preço alto) ou trocadas com mercadores em Detlas ou no hub do minigame. As recompensas incluem armas, armaduras e acessórios (também vendidos fora do evento na ilha Isles of Fiction, por esmeraldas) e, principalmente, trinkets que só saem nessa época do ano.",
  },
  {
    icone: "caixas",
    titulo: "Caixas comemorativas",
    texto:
      "Durante o evento, a loja oficial do Wynncraft vende caixas temáticas com efeitos visuais, emotes, pets e cosméticos raros do tema do festival. Dá para ganhar até 30 caixas de graça só fazendo os objetivos diários e semanais, e o dobro com a assinatura [[silverbull|Silverbull]].",
  },
];

export const avisoEquipamento =
  "Comprar peças de armadura com a moeda do evento não é recomendado: todos os equipamentos podem ser comprados com esmeraldas na Isle of Fiction.";

export const festivais: Festival[] = [
  {
    id: "heroes",
    nome: "Festival of the Heroes",
    curto: "Heroes",
    caixas: "Gilded Heroes",
    abertura: [
      "Quando o evento começa, três caixas Gilded Heroes são oferecidas de graça a todos os jogadores pela loja do Wynncraft, Detlas é decorada com vários balões e bandeiras e diversos NPCs chegam à cidade.",
      "A principal mudança é um grande palco bem no centro da cidade, no antigo lugar do Item Identifier. Nele, a NPC Aster faz uma performance a cada 5 horas, que dá um buff aleatório de 40 minutos a todos que estiverem assistindo: bônus de XP, Loot, Loot Quality, Gathering XP, Gathering Speed, Damage, Elemental Damage ou Mobilidade.",
    ],
    imagemAbertura: { src: "/festivais/heroes-aster.webp", alt: "Aster, NPC do palco do Festival of the Heroes, em Detlas", legenda: "Aster, a NPC das performances no palco." },
    avisoAbertura: {
      tipo: "aviso",
      titulo: "Chegue antes da performance",
      texto:
        "Você precisa estar perto do palco ANTES de a performance começar para receber o buff. Se ela começar e você não estiver perto, ou chegar tarde demais, não recebe nada.",
    },
    missao: {
      nome: "Scavenger Hunt",
      paragrafos: [
        "Ao lado do balão da housing fica o NPC da missão principal deste festival, a Scavenger Hunt. Funciona assim: você conversa com o funcionário, escolhe um local disponível e recebe um mapa com a imagem de um lugar do mundo. Aí é só ir até lá e resgatar o cache (um baú pequeno roxo e dourado) que estará por perto.",
      ],
      recompensa:
        "Além dos marcos resgatados com o NPC, cada cache rende um Reward Voucher. Abrir o voucher dá moedas do evento e uma recompensa aleatória: esmeraldas, [[powders]], [[runa|runas]], [[abilityShards|ability shards]] ou um Fragmented Jewel, usado para evoluir um dos trinkets do festival.",
      imagem: { src: "/festivais/heroes-scavenger-hunt.webp", alt: "Festival Worker, NPC da Scavenger Hunt, em Detlas", legenda: "Festival Worker, o NPC da Scavenger Hunt." },
      wiki: {
        titulo: "Scavenger Hunt, na wiki",
        descricao: "Todos os lugares com coordenadas e uma breve descrição de como chegar.",
        href: "https://wynncraft.wiki.gg/wiki/Festival_of_the_Heroes#Scavenger_Hunt",
      },
    },
    minigame: {
      nome: "The Claim to Heroism",
      paragrafos: [
        "Entre o NPC da missão principal e o balão da housing há um caminho com tapetes coloridos. Siga por ele, suba as escadas e entre no dirigível para ir até a ilha do minigame, Talespun Citadel. Lá você lê as regras e puxa uma partida (pelo NPC de party finder ou pelo comando /pf).",
        "Em resumo, é uma partida de todos contra todos: você mata mobs e bosses para comprar upgrades e armas que ajudam a matar mais bosses ou outros jogadores.",
        "Juntando recursos suficientes e cumprindo o mínimo de 6 jogadores e 3 bosses mortos, você pode ascender e virar um herói. Aí o seu objetivo passa a ser destruir a base de todos os outros e ganhar o jogo, enquanto todo mundo se une para te impedir.",
      ],
    },
    recompensas: {
      paragrafos: [
        "No fim da partida, todos ganham uma quantidade de Talespun Memory, usada para comprar peças de armadura, trinkets ou ser convertida em moedas do evento.",
      ],
      recomendacoes: [
        {
          nome: "Totem of Tales",
          cor: "#e6c47a",
          texto:
            "Trinket muito usado em [[war|wars]]: fortalece todos os aliados com +15% de melee e spell damage (7,5% fora do evento).",
          opiniao:
            "A não ser que você queira algo das outras lojas, é a recomendação pessoal. Dependendo da data em que você vender, tem gente disposta a pagar 1 [[stx]] por um único Totem of Tales.",
        },
      ],
    },
    extras: [
      {
        titulo: "NPCs, lojas e minigames na cidade",
        paragrafos: [
          "Além do minigame, há vários NPCs para conversar e alguns mercadores que vendem trinkets por moedas do evento. Outro trinket interessante é o Unbound Ring of Stories, um anel que dá XP Bonus ao interagir e pode ser evoluído com Fragmented Jewels, obtidos no Reward Voucher (comprado ou ganho na missão principal).",
          "Ele é vendido pelo Trinket Merchant, em {{437, 67, -1604}}, por 1 Diamond Festival Coin, junto com Reward Vouchers, caso os da missão principal não bastem.",
          "Há ainda um minigame de tiro ao alvo em {{424, 67, -1630}}, uma forma alternativa de ganhar moedas do evento, e um NPC em {{449, 67, -1607}} que converte à vontade as moedas do evento entre as versões de prata, ouro e diamante.",
        ],
      },
    ],
  },
  {
    id: "bonfire",
    nome: "Festival of the Bonfire",
    curto: "Bonfire",
    caixas: "Fiery Bonfire",
    abertura: [
      "Quando o evento começa, três caixas Fiery Bonfire são oferecidas de graça a todos os jogadores pela loja do Wynncraft, várias cidades e ilhas recebem uma fogueira, Detlas ganha a sua decoração e diversos NPCs chegam à cidade.",
      "A principal mudança é uma fogueira gigante no centro da cidade, no antigo lugar do Item Identifier. O NPC principal deste festival é o Bonfire Keeper, que inicia o minigame e também cuida da missão principal.",
    ],
    imagemAbertura: { src: "/festivais/bonfire-keeper.webp", alt: "Bonfire Keeper, NPC principal do Festival of the Bonfire", legenda: "Bonfire Keeper." },
    missao: {
      nome: "Hearthflame Hunt",
      paragrafos: [
        "Na frente da fogueira de Detlas fica o NPC da missão principal deste festival, a Hearthflame Hunt. Com a varinha que você recebe do Bonfire Keeper, você acende as fogueiras das outras cidades. O porém: enquanto carrega o fogo, não dá para usar scrolls de teleporte. Clicar com o botão direito segurando a varinha aponta para a fogueira mais próxima.",
      ],
      recompensa:
        "Cada fogueira acesa rende 9 blocos de esmeralda, além de garantir a lembrancinha, o cenário e os trinkets exclusivos das milestones com o Bonfire Keeper.",
      imagem: { src: "/festivais/bonfire-hearthflame.webp", alt: "Fogueira Hearthflame acesa numa praça", legenda: "Uma Hearthflame acesa." },
      extra: {
        tipo: "dica",
        titulo: "Buff diário da Aster",
        texto:
          "Acender a primeira Hearthflame libera o diálogo com a Aster, em {{453, 67, -1632}}. Uma vez por dia ela deixa você escolher 1 entre 3 buffs de 30 minutos: Boon of Wisdom (Combat e Gathering XP), Boon of Fortune (Loot Bonus e Loot Quality) ou Boon of Power (Damage e Walk Speed).",
      },
      wiki: {
        titulo: "Hearthflame Hunt, na wiki",
        descricao: "Onde fica a fogueira de cada cidade, com coordenadas (aba Hearthflame Hunt).",
        href: "https://wynncraft.wiki.gg/wiki/Festival_of_the_Bonfire#Scavenger_Hunt",
      },
    },
    minigame: {
      nome: "The Kindling",
      paragrafos: [
        "Um clássico Prop Hunt de até 10 jogadores: os Flamecatchers (caçadores) precisam eliminar os Embers (transformados em blocos e galinhas) escondidos pelo mapa antes que eles fujam (Kindling).",
        "Os Flamecatchers ganham pontos eliminando Embers. Os Embers ganham pontos sobrevivendo, miando e usando habilidades que entregam a posição deles em troca de muitos pontos.",
      ],
    },
    recompensas: {
      paragrafos: [
        "No fim da partida, todos ganham Sunlit Copper Coins conforme o desempenho individual (quantidade de pontos), usadas para comprar peças de armadura ou trinkets.",
      ],
      observacao: "Não há nenhum trinket tão interessante ou especial neste evento: pegue o que o seu coração mandar.",
    },
    extras: [
      {
        titulo: "Pela cidade",
        paragrafos: ["Há diversos NPCs para interagir na cidade, além de um vendedor de doces, um de comida e um de pão."],
      },
    ],
  },
  {
    id: "spirits",
    nome: "Festival of the Spirits",
    curto: "Spirits",
    caixas: "Misty Spirits",
    abertura: [
      "Quando o evento começa, três caixas Misty Spirits são oferecidas de graça a todos os jogadores pela loja do Wynncraft, Detlas ganha uma decoração de Halloween e diversos NPCs chegam à cidade.",
      "A principal mudança é um grande buraco no centro da cidade, no antigo lugar do Item Identifier. Este festival tem três NPCs principais: The Envoy, The Guide e The Seer. Converse com The Envoy ou The Guide no centro de Detlas para ver um mini tutorial e liberar os diálogos da missão principal.",
    ],
    imagemAbertura: {
      src: "/festivais/spirits-detlas.webp",
      alt: "Centro de Detlas no Festival of the Spirits, com um fantasma gigante, abóboras, velas e teias",
      legenda: "Detlas decorada para o Festival of the Spirits.",
    },
    missao: {
      nome: "Guiding of the Spirits",
      paragrafos: [
        "Conversando de novo com The Guide, você começa a Guiding of the Spirits. Nela, você segue as dicas do NPC para encontrar as almas perdidas pelo mapa e levá-las de volta ao centro de Detlas, de onde são enviadas para The Beyond.",
      ],
      recompensa:
        "Cada alma levada até Detlas rende um Spectral Ticket, além das milestones resgatadas conversando com o guia.",
      imagem: { src: "/festivais/spirits-alma.webp", alt: "Uma das almas perdidas da Guiding of the Spirits", legenda: "Uma alma perdida." },
      wiki: {
        titulo: "Guiding of the Spirits, na wiki",
        descricao: "Onde está cada alma, com descrição e coordenada.",
        href: "https://wynncraft.wiki.gg/wiki/Festival_of_the_Spirits#Guiding_of_the_Spirits",
      },
    },
    minigame: {
      nome: "Banish the Beyond",
      paragrafos: [
        "No lado sudoeste da cidade, perto do balão da housing, há um caminho com tapetes coloridos. Siga por ele, suba as escadas e entre no dirigível para ir até The Beyond. Lá você lê as regras e puxa uma partida (pelo NPC de party finder ou pelo comando /pf).",
        "Disparado o melhor minigame dos quatro festivais (literalmente [[dbd]]). É um 1v4 inspirado em Dead by Daylight: uma pessoa é escolhida como Spirit e as outras 4 são sobreviventes.",
        "O Spirit é muito poderoso. O objetivo dele é colocar armadilhas, sabotar as Spirit Wells e, no geral, usar seus poderes para achar e eliminar os quatro sobreviventes antes que algum escape. Cada espírito é inspirado num personagem do jogo: The Wanderer (Garvan), The Terror (Panic Zealot), The Taken (Aledar), The Vermin (Colossal Rat), The Keeper (Alem), The Executioner (Death) e The Stalker (Krolton).",
        "O objetivo dos sobreviventes é reviver os jogadores caídos, trabalhar em equipe e carregar 5 das 7 Spirit Wells, deixando as mais distantes para o fim, para que o Spirit não consiga proteger várias ao mesmo tempo. Depois de 5 Spirit Wells carregadas, começa a segunda fase: os dois portões do mapa podem ser abertos, e o objetivo vira escapar com o máximo de sobreviventes vivos.",
        "Para ajudar os sobreviventes, dá para escolher 1 entre 5 perks antes de começar; a cada 150 pontos na partida, você escolhe 1 entre 3 perks aleatórias. As perks incluem poderes como ver objetivos através das paredes, autorressurreição, transferir vida entre aliados e, em casos específicos, supervelocidade, invulnerabilidade temporária etc.",
        "Todos os mapas têm armários para se esconder e paletes espalhados em pontos-chave para atrasar o Spirit e cortar perseguições.",
      ],
    },
    recompensas: {
      paragrafos: [
        "No fim da partida, todos recebem Spiritual Essence conforme o desempenho. Essas moedas podem ser convertidas em Spectral Ticket ou Spiritual Shard no Trinket Merchant.",
        "As Spiritual Shards compram peças de armadura e trinkets, ou são convertidas em Condensed Soul Crystal no mercador de máscaras de Detlas.",
      ],
      recomendacoes: [
        {
          nome: "Well of Power",
          cor: "#6fa8ff",
          texto:
            "Também usado em [[war|wars]]: um totem que, posicionado, dá +25/5s de mana regen por 60 segundos (+15/5s fora do festival).",
          opiniao: "É o Totem of Tales do mana regen; dependendo da época, vende por um preço bem alto.",
        },
        {
          nome: "Sigil of the Terror",
          cor: "#b57bff",
          texto:
            "Trinket que sacrifica 99% da sua vida em troca de um buff alto de walk speed e dano por 15 segundos (7,5 segundos fora do festival).",
          opiniao:
            "De vez em quando alguém se interessa por ele e paga bem. Funciona bem com o corrupted do arquétipo Fallen.",
        },
      ],
    },
    extras: [
      {
        titulo: "Drawing of the Spirits",
        paragrafos: [
          "Outra atividade do festival. Você ganha Spectral Tickets de várias formas e leva para The Seer, na parte noroeste de Detlas, para ganhar prêmios. Cada ticket dá um prêmio: powders tier 2, powders tier 4, esmeraldas, runas, trinkets consumíveis, Spiritual Shards, Mask of the Spirits e Drawing of the Spirits (item).",
        ],
      },
      {
        titulo: "Pela cidade",
        paragrafos: [
          "Além das atividades, há vários NPCs novos espalhados pela cidade. Em {{455, 67, -1625}} fica um vendedor de máscaras, com equipáveis e um cosmético mítico, além de comerciantes de comida e de trinkets consumíveis.",
        ],
        glitch: {
          antes: "Ah... também há rumores de que",
          visivel: "u͓͓̽̽m͓̽ mi҉steri҉o҉ pair҉a n█ ██",
          leitura: "um mistério paira no ar",
          depois: "Aproveitem o festival!",
        },
      },
    ],
  },
  {
    id: "blizzard",
    nome: "Festival of the Blizzard",
    curto: "Blizzard",
    caixas: "Icy Blizzard",
    abertura: [
      "Quando o evento começa, três caixas Icy Blizzard são oferecidas de graça a todos os jogadores pela loja do Wynncraft, Detlas ganha uma decoração de Natal, começa a nevar e diversos NPCs chegam à cidade.",
      "A principal mudança é uma grande árvore de Natal no centro da cidade, no antigo lugar do Item Identifier. O NPC principal, The Traveler, fica no centro da cidade durante o festival.",
    ],
    imagemAbertura: { src: "/festivais/blizzard-the-traveler.webp", alt: "The Traveler, NPC principal do Festival of the Blizzard", legenda: "The Traveler." },
    missao: {
      nome: "Festival Invitations",
      paragrafos: [
        "Conversando com The Traveler, você começa as Festival Invitations. Nelas, você segue as dicas do Traveler para achar um NPC aleatório pelo mapa e convencê-lo a visitar Detlas para as festividades. Depois de convidado, o NPC aparece em Detlas e te dá um presente quando você fala com ele.",
      ],
      recompensa: "Cada NPC dá um presente diferente, além das milestones resgatadas conversando com o Traveler.",
      imagem: { src: "/festivais/blizzard-convites.webp", alt: "Quadro das Wynnter Invitations em Detlas", legenda: "Quadro dos convites." },
      extra: {
        tipo: "dica",
        titulo: "Missão demorada",
        texto: "Essa missão leva um tempo; use a wiki se você se sentir perdido.",
      },
      wiki: {
        titulo: "Festival Invitations, na wiki",
        descricao: "Onde encontrar cada NPC convidado.",
        href: "https://wynncraft.wiki.gg/wiki/Festival_of_the_Blizzard#Festival_Invitations",
      },
    },
    minigame: {
      nome: "Blizzard Brawl",
      paragrafos: [
        "No lado sudoeste da cidade, perto do balão da housing, há um caminho com tapetes coloridos. Siga por ele, suba as escadas e entre no dirigível para ir até Mountainside, um lugar escondido entre as montanhas perto de Lusuco. Lá você lê as regras e puxa uma partida (pelo NPC de party finder ou pelo comando /pf).",
        "É um 3v3 inspirado em hero shooters: você e o seu time escolhem um herói/classe antes da partida (Tank, DPS ou Suporte) e, ao sair do spawn, o objetivo é capturar os pontos de controle. Ganha o time que capturar 4 pontos no total ou 3 seguidos.",
      ],
      imagem: { src: "/festivais/blizzard-brawl-mapa.webp", alt: "Mapa do Blizzard Brawl com os pontos de controle de A a E", legenda: "Mapa com os pontos de controle." },
    },
    recompensas: {
      paragrafos: [
        "No fim da partida, os jogadores ganham Shard of the Mountain, que pode ser convertido em Fragment of the Storm, usado para comprar peças de armadura ou trinkets.",
      ],
      observacao:
        "Não há nenhum trinket especialmente útil nessa loja: compre o que o seu coração mandar. Tem o Heart of the Blizzard, mas, assim como nos outros festivais, não vale pegar o trinket mítico a não ser para colecionar: fazendo lootrun você ganha muito mais dinheiro, economiza tempo e ainda compra o trinket de outra pessoa.",
    },
    extras: [
      {
        titulo: "Wynnter Fair",
        paragrafos: [
          "A Wynnter Fair, também chamada de Wynnterfest, é um grande evento em North Lusuco durante o festival. Nela, você joga vários minigames que dão Craftmas Gifts, usados para comprar armas, armaduras, acessórios, trinkets únicos e outros itens de colecionador. Entre os trinkets dessa loja também não há nada muito útil ou valioso; mais uma vez, pegue o que o seu coração mandar.",
          "Se for comprar algo dessa loja, jogue o Parkour: dá para jogar solo, e classes como mago e warrior podem usar spells para terminar mais rápido.",
        ],
        lista: ["Parkour", "Santa Says", "Thin Ice", "Dodge 'Em", "Pig Puck"],
      },
      {
        titulo: "Pela cidade",
        paragrafos: [
          "Além das atividades, há vários NPCs novos pela cidade: um vendedor de roupas, um vendedor de doces e uma máquina de vendas de biscoitos, que dá um colecionável depois de 1024 biscoitos comprados (32 [[le|LE]] no total).",
        ],
      },
    ],
  },
];

export const festivaisFontes = [
  { rotulo: "Festival of the Heroes, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Festival_of_the_Heroes" },
  { rotulo: "Festival of the Bonfire, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Festival_of_the_Bonfire" },
  { rotulo: "Festival of the Spirits, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Festival_of_the_Spirits" },
  { rotulo: "Festival of the Blizzard, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Festival_of_the_Blizzard" },
];

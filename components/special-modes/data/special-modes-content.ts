// Guia de Modos especiais. Fatos conferidos na wiki (página "Special Gamemodes" e quest "A Hunter's Calling") em
// 18/11/2026, reescritos com as nossas palavras. O que a wiki não confirma fica dito como regra da comunidade.
// Marcações: [[chave]] abre a caixa de item do glossário.

export type Imagem = { src: string; alt: string; legenda?: string };
export type Destaque = { tipo: "info" | "aviso" | "dica"; titulo: string; texto: string };

export type ModoId = "hardcore" | "ironman" | "craftsman" | "hunted";

export type SpecialMode = {
  id: ModoId;
  nome: string;
  /** Ícone pixelado próprio (public/gamemodes/). */
  icone: string;
  /** Cor do modo (a do título na wiki), só em ícone e borda. */
  cor: string;
  resumo: string;
  desbloqueio: string;
  regras: string[];
  excecoes?: { titulo: string; itens: string[] };
  destaque?: Destaque;
  variante?: { nome: string; icone: string; cor: string; texto: string[] };
  imagens?: Imagem[];
};

export const specialModesIntroParagraphs = [
  "Modos especiais são regras extras que você liga ao criar um personagem, para jogar com mais desafio. Cada modo é liberado jogando e, depois disso, fica disponível para todo personagem novo da conta.",
  "Dá para ligar um modo só ou vários juntos, mas a escolha vale para sempre naquele personagem: nenhum modo pode ser ligado depois, e só o Ironman sai, com o comando /ironman.",
];

export const imagemIconesDoChat: Imagem = {
  src: "/terceiros/wynncraft/modos-icones-chat.webp",
  alt: "Ícones dos modos no chat: rosto vermelho do Hardcore, rosca laranja do Ironman e picareta verde-água do Craftsman",
  legenda: "Os ícones dos modos aparecem ao lado do nome, no chat e na nametag.",
};

export const comoFuncionaIntro =
  "Todos os modos seguem as mesmas regras básicas, não importa quantos você combine:";

export const regrasGerais = [
  "A escolha é feita na criação do personagem: o menu troca o botão de favoritar por um seletor de modos especiais.",
  "Cada modo é liberado uma vez por conta. Cumprido o requisito com qualquer personagem, ele aparece para todos os personagens novos.",
  "Você pode ligar qualquer combinação dos modos já liberados.",
  "Os modos só valem para aquele personagem; os outros da conta seguem normais.",
  "Cada modo ativo coloca um ícone colorido na nametag e no chat. Passar o mouse sobre o ícone do chat mostra uma descrição curta do modo.",
];

export const avisoIrreversivel: Destaque = {
  tipo: "aviso",
  titulo: "Não dá para voltar atrás",
  texto:
    "Nenhum modo pode ser ligado num personagem que já existe, e nenhum pode ser desligado depois, com uma exceção: o Ironman (e o Ultimate Ironman) sai com o comando /ironman, de forma irreversível.",
};

export const penalidadeDeMorte =
  "Desde a versão 2.1, morrer faz qualquer personagem perder ingredientes e materiais. No Hardcore e no Hunted, a perda pode incluir equipamento.";

export const specialModes: SpecialMode[] = [
  {
    id: "hardcore",
    nome: "Hardcore",
    icone: "/gamemodes/hardcore.svg",
    cor: "#ff5050",
    resumo: "Uma vida só: a primeira morte marca o personagem para sempre.",
    desbloqueio: "Chegar ao nível 30 com qualquer personagem.",
    regras: [
      "O ícone do modo é vermelho enquanto o personagem não morre.",
      "Na primeira morte que conta, o ícone fica cinza para sempre e o personagem sai do leaderboard.",
      "Ao morrer, além de ingredientes e materiais, o personagem pode perder equipamento.",
    ],
    excecoes: {
      titulo: "Mortes que não apagam o vermelho",
      itens: [
        "Morrer numa raid ou num lootrun.",
        "Morrer num world event que alguém vivo da sua party conclui.",
        "Usar o comando /kill.",
        "A morte de mentira da quest Beyond the Grave.",
        "Perder um /duel. Atenção: se o personagem morrer logo depois do duelo por sangramento, veneno ou queimadura, a morte conta.",
      ],
    },
  },
  {
    id: "ironman",
    nome: "Ironman",
    icone: "/gamemodes/ironman.svg",
    cor: "#fdb11f",
    resumo: "Tudo por conta própria: sem trocas, sem ajuda e sem banco da conta.",
    desbloqueio: "Chegar ao nível 50 com qualquer personagem.",
    regras: [
      "Não dá para trocar itens com outros jogadores, nem pelo [[tradeMarket|Trade Market]].",
      "O Account Bank, a bookshelf e os misc buckets ficam bloqueados. O Character Bank continua liberado e, no Ironman, não exige rank.",
      "Outros jogadores não conseguem curar nem dar buff no personagem, nem em raids e world events. Trinkets continuam funcionando.",
      "Para receber o drop de um mob, o personagem precisa causar 50% do dano dele (o normal é 5%).",
      "O Ingredient Pouch passa a guardar qualquer item (a venda rápida continua vendendo só ingredientes).",
    ],
    destaque: {
      tipo: "info",
      titulo: "Saindo do Ironman",
      texto: "O comando /ironman remove o modo. Ele pede confirmação e não tem volta.",
    },
    variante: {
      nome: "Ultimate Ironman",
      icone: "/gamemodes/ultimate_ironman.svg",
      cor: "#11aaff",
      texto: [
        "Todas as regras do Ironman e mais uma: nenhum banco, nem o Character Bank.",
        "É liberado junto com o Ironman (nível 50). Desde a versão 2.0.4, quem era Ironman antes dela virou Ultimate.",
        "O comando /ironman desce um degrau, do Ultimate para o Ironman normal. Também pede confirmação e não tem volta.",
      ],
    },
  },
  {
    id: "craftsman",
    nome: "Craftsman",
    icone: "/gamemodes/craftsman.svg",
    cor: "#21beb0",
    resumo: "Só equipamento feito por crafting.",
    desbloqueio: "Chegar ao nível 50 com qualquer personagem.",
    regras: [
      "O personagem só pode equipar itens craftados.",
      "Itens de quest são permitidos.",
      "Os materiais vêm da sua própria coleta, ou os itens craftados podem ser comprados de outros jogadores (se o personagem não for Ironman).",
    ],
    destaque: {
      tipo: "dica",
      titulo: "Item de quest não é tudo",
      texto:
        "Nem todo item ganho numa quest conta como item de quest. O capacete Tosach, da quest King's Recruit, por exemplo, não pode ser usado no Craftsman.",
    },
  },
  {
    id: "hunted",
    nome: "Hunted",
    icone: "/gamemodes/hunted.svg",
    cor: "#c65cf0",
    resumo: "PvP liberado com outros Hunted, em troca de XP extra.",
    desbloqueio: "Concluir a quest A Hunter's Calling (nível 103).",
    regras: [
      "PvP livre entre jogadores Hunted com até 10 níveis de combate de diferença, fora de cidades, entradas de dungeon e outras áreas seguras.",
      "Bônus de +50% de XP de mobs e +50% de XP de coleta.",
      "Ao morrer, a chance de perder itens é maior, e a perda pode incluir equipamento. Os itens caem no chão, e qualquer jogador pode pegá-los.",
      "Atacar ou ser atacado coloca você em combate, que só acaba depois de 10 segundos sem trocar golpes. Deslogar em combate faz perder itens como numa morte.",
      "Disfarces ficam desativados.",
    ],
    destaque: {
      tipo: "info",
      titulo: "A Hunter's Calling",
      texto:
        "Quest de história longa e difícil, de nível 103. Começa no Portal to Dern, na Silent Expanse, com o NPC \"???\". Antes, é preciso ter feito A Journey Beyond e A Journey Further, vencido a Eldritch Outlook uma vez e avançado em Dwarves and Doguns Part II e An Iron Heart Part II. Além do Hunted, dá 10.008.000 de XP e 1 Corrupted Soul Token.",
    },
    imagens: [
      { src: "/terceiros/wynncraft/hunted-npc-inicio.webp", alt: "O NPC \"???\" que inicia a quest A Hunter's Calling", legenda: "O \"???\", que inicia A Hunter's Calling." },
      { src: "/terceiros/wynncraft/hunted-aledar.webp", alt: "Aledar, the Exterminator, chefe final da quest A Hunter's Calling", legenda: "Aledar, o chefe final da quest." },
    ],
  },
];

export const combinacoesIntro =
  "As combinações ganham nome pelas iniciais dos modos. As mais conhecidas são HIC (Hardcore, Ironman e Craftsman), HICH (HIC mais Hunted) e HUICH (Hardcore, Ultimate Ironman, Craftsman e Hunted), consideradas pela comunidade as formas mais difíceis de jogar.";

export const combinacoesParagrafos = [
  "Não existe regra oficial para \"completar\" uma combinação. O objetivo costuma ser ir o mais longe possível no endgame; nas versões mais pesadas, isso inclui nível máximo, todas as quests e dungeons e vencer a [[legendaryIsland|Legendary Island]].",
];

export const desafioDaComunidade = {
  titulo: "Requisitos que a comunidade costuma usar",
  itens: ["[[contentBook|Content Book]] 100%", "Legendary Island solo", "Manter o ícone vermelho do Hardcore até o fim"],
  nota: "Estes requisitos são uma convenção da comunidade, não uma regra do jogo.",
};

export const imagemCombinacoes: Imagem = {
  src: "/gamemodes/gamemodes.webp",
  alt: "Tabela com todas as combinações dos modos especiais",
  legenda: "Todas as combinações de modos.",
};

export const specialModesFontes = [
  { rotulo: "Special Gamemodes, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Special_Gamemodes" },
  { rotulo: "A Hunter's Calling, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/A_Hunter%27s_Calling" },
];

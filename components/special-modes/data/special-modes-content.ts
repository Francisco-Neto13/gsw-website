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
  /** Dicas práticas tiradas das regras (wiki e patches oficiais). */
  dicas?: string[];
  variante?: { nome: string; icone: string; cor: string; texto: string[] };
  imagens?: Imagem[];
};

export const specialModesIntroParagraphs = [
  "Modos especiais são regras extras que você liga ao criar um personagem, para jogar com mais desafio. Você libera cada modo jogando e, a partir daí, ele fica disponível para todo personagem novo da conta.",
  "Dá para ligar um modo só ou vários juntos, mas a escolha vale para sempre naquele personagem: nenhum modo pode ser ligado depois, e só o Ironman sai, com o comando /ironman.",
];

export const imagemIconesDoChat: Imagem = {
  src: "/terceiros/wynncraft/modos-icones-chat.webp",
  alt: "Ícones dos modos no chat: rosto vermelho do Hardcore, rosca laranja do Ironman e picareta verde-água do Craftsman",
  legenda: "Os ícones dos modos aparecem ao lado do nome, no chat e na nametag.",
};

export const comoFuncionaIntro =
  "Todos os modos têm as mesmas regras básicas, não importa quantos você junte:";

export const regrasGerais = [
  "Você escolhe na criação do personagem: no lugar do botão de favoritar, o menu mostra um seletor de modos especiais.",
  "Cada modo é liberado uma vez por conta. Cumpriu o requisito com qualquer personagem, ele aparece para todos os personagens novos.",
  "Você pode ligar qualquer combinação dos modos já liberados.",
  "Os modos só valem para aquele personagem; os outros da conta continuam normais.",
  "Cada modo ativo coloca um ícone colorido na nametag e no chat. Passando o mouse no ícone do chat, aparece uma descrição curta do modo.",
];

export const avisoIrreversivel: Destaque = {
  tipo: "aviso",
  titulo: "Não dá para voltar atrás",
  texto:
    "Não dá para ligar um modo num personagem que já existe, nem desligar depois. A única exceção é o Ironman (e o Ultimate Ironman), que sai com o comando /ironman, sem volta.",
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
      "Quando morre, além de ingredientes e materiais, o personagem pode perder equipamento.",
    ],
    excecoes: {
      titulo: "Mortes que não apagam o vermelho",
      itens: [
        "Morrer numa raid ou num lootrun.",
        "Morrer num world event que alguém vivo da sua party completa.",
        "Usar o comando /kill.",
        "A morte falsa da quest Beyond the Grave.",
        "Perder um /duel. Cuidado: se o personagem morrer logo depois do duelo por sangramento, veneno ou queimadura, a morte conta.",
      ],
    },
    dicas: [
      "Depois de um duelo, espere os efeitos de dano contínuo (sangramento, veneno, queimadura) acabarem antes de sair da arena.",
      "Raids e lootruns são o lugar mais seguro para arriscar: morrer lá não apaga o vermelho.",
    ],
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
      "Para pegar o drop de um mob, o personagem precisa dar 50% do dano nele (o normal é 5%).",
      "O Ingredient Pouch passa a guardar qualquer item (a venda rápida continua vendendo só ingredientes).",
    ],
    destaque: {
      tipo: "info",
      titulo: "Saindo do Ironman",
      texto: "O comando /ironman remove o modo. Ele pede confirmação e não tem volta.",
    },
    dicas: [
      "Em luta de boss em party, só pega o drop quem der metade do dano: se o dano ficar dividido, você pode sair sem item.",
    ],
    variante: {
      nome: "Ultimate Ironman",
      icone: "/gamemodes/ultimate_ironman.svg",
      cor: "#11aaff",
      texto: [
        "Todas as regras do Ironman e mais uma: nenhum banco, nem o Character Bank.",
        "É liberado junto com o Ironman (nível 50). Desde a versão 2.0.4, quem era Ironman antes dela virou Ultimate.",
        "O comando /ironman desce um degrau, do Ultimate para o Ironman normal. Também pede confirmação e não tem volta.",
        "Sem as Pet Tasks (tiradas do Ultimate num hotfix da 2.0.4).",
        "Sem banco, o Ingredient Pouch vira o único espaço extra: vale organizar o inventário em volta dele.",
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
      "Os materiais vêm da sua própria coleta, ou você compra os itens craftados de outros jogadores (se o personagem não for Ironman).",
    ],
    destaque: {
      tipo: "dica",
      titulo: "Item de quest não é tudo",
      texto:
        "Nem todo item que você ganha numa quest conta como item de quest. O capacete Tosach, da quest King's Recruit, por exemplo, não pode ser usado no Craftsman.",
    },
    dicas: ["Junto com o Ironman, todo material precisa vir da sua própria coleta: upe as profissões de coleta cedo."],
  },
  {
    id: "hunted",
    nome: "Hunted",
    icone: "/gamemodes/hunted.svg",
    cor: "#c65cf0",
    resumo: "PvP liberado com outros Hunted, em troca de XP extra.",
    desbloqueio: "Completar a quest A Hunter's Calling (nível 103).",
    regras: [
      "PvP livre entre jogadores Hunted com até 10 níveis de combate de diferença, fora de cidades, entradas de dungeon e outras áreas seguras.",
      "Bônus de +50% de XP de mobs e +50% de XP de coleta.",
      "Quando você morre, a chance de perder itens é maior, e pode incluir equipamento. Os itens caem no chão, e qualquer jogador pode pegar.",
      "Atacar ou ser atacado coloca você em combate, que só acaba depois de 10 segundos sem ninguém bater. Deslogar em combate faz você perder itens como se tivesse morrido.",
      "Disfarces ficam desativados.",
    ],
    destaque: {
      tipo: "info",
      titulo: "A Hunter's Calling",
      texto:
        "Quest de história longa e difícil, de nível 103. Começa no Portal to Dern, na Silent Expanse, com o NPC \"???\". Antes, você precisa ter feito A Journey Beyond e A Journey Further, completado a Eldritch Outlook uma vez e avançado em Dwarves and Doguns Part II e An Iron Heart Part II. Além do Hunted, dá 10.008.000 de XP e 1 Corrupted Soul Token.",
    },
    dicas: ["Antes de sair do jogo, fique 10 segundos sem lutar ou vá para uma cidade, para não perder itens."],
    imagens: [
      { src: "/terceiros/wynncraft/hunted-npc-inicio.webp", alt: "O NPC \"???\" que começa a quest A Hunter's Calling", legenda: "O \"???\", que começa A Hunter's Calling." },
      { src: "/terceiros/wynncraft/hunted-aledar.webp", alt: "Aledar, the Exterminator, boss final da quest A Hunter's Calling", legenda: "Aledar, o boss final da quest." },
    ],
  },
];

export const combinacoesIntro =
  "As combinações levam o nome das iniciais dos modos. As mais conhecidas são HIC (Hardcore, Ironman e Craftsman), HICH (HIC mais Hunted) e HUICH (Hardcore, Ultimate Ironman, Craftsman e Hunted), que a comunidade considera os jeitos mais difíceis de jogar.";

export const combinacoesParagrafos = [
  "Não tem regra no jogo para \"completar\" uma combinação. Normalmente o objetivo é ir o mais longe possível no endgame; nas versões mais pesadas, isso inclui nível máximo, todas as quests e dungeons e completar a [[legendaryIsland|Legendary Island]].",
];

export const desafioDaComunidade = {
  titulo: "Requisitos que a comunidade costuma usar",
  itens: ["[[contentBook|Content Book]] 100%", "Legendary Island solo", "Manter o ícone vermelho do Hardcore até o fim"],
  nota: "Esses requisitos são um combinado da comunidade, não uma regra do jogo.",
};

export const imagemCombinacoes: Imagem = {
  src: "/gamemodes/gamemodes.webp",
  alt: "Tabela com todas as combinações dos modos especiais",
  legenda: "Todas as combinações de modos.",
};

export const specialModesFontes = [
  { rotulo: "Special Gamemodes, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Special_Gamemodes" },
  { rotulo: "A Hunter's Calling, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/A_Hunter%27s_Calling" },
  { rotulo: "Patch 1.18.1: novos modos (anúncio oficial)", href: "https://forums.wynncraft.com/threads/patch-1-18-1-trade-market-is-back-new-gamemodes.250542/" },
  { rotulo: "Changelog 1.19: Hunted (anúncio oficial)", href: "https://forums.wynncraft.com/threads/1-19-the-silent-expanse-changelog.256264/" },
  { rotulo: "Changelog 2.0.4: Ultimate Ironman (anúncio oficial)", href: "https://forums.wynncraft.com/threads/2-0-4-full-changelog-new-bank-lootruns-more.310535/" },
];

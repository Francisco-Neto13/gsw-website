// Guia da Guild House, a sede da GsW. Texto da guilda, revisado. Prints da guilda em public/guild-house/
// (conversão de PNG para WebP; o Next serve AVIF/WebP no tamanho da tela).

export type Imagem = { src: string; alt: string; legenda?: string };

const img = (nome: string, alt: string, legenda?: string): Imagem => ({
  src: `/guild-house/guild-house-${nome}.webp`,
  alt,
  legenda,
});

export const guildHouseDestaque = img(
  "entrada-destaque",
  "Entrada da Guild House: portão de pedra com estandartes roxos, árvores e um caminho de terra",
);

export const guildHouseIntroParagraphs = [
  "A Guild House é a casa da guilda dentro do servidor: o lugar onde a gente se encontra. Ela fica numa ilha de Housing (você chega pelo balão de cidades como Cinfras) e funciona como um hub só nosso, para conversar, relaxar e usar os serviços da ilha, longe do movimento das cidades.",
  "Neste guia você vê para que ela serve: os NPCs de serviço, o encontro antes dos eventos e os espaços para ficar com a galera.",
];

export const guildHouseResumo = [
  "NPCs de Banco, Trade Market, Item Identifier e Blacksmith, além da Bookshelf e do Misc. Bucket.",
  "Ponto de encontro da guilda e do grupo antes do Annihilation.",
  "Lugar seguro para ficar AFK sem ser desconectado.",
  "Cinco setores, um esgoto de teleportes e alguns segredos escondidos.",
];

// Funcionalidades
export const funcionalidadesIntro =
  "A ilha não é só decoração: ela ajuda de verdade no dia a dia do jogo.";

export type Funcionalidade = { id: "npcs" | "encontro" | "annihilation" | "afk"; titulo: string; texto: string };

export const funcionalidades: Funcionalidade[] = [
  {
    id: "npcs",
    titulo: "NPCs de serviço",
    texto:
      "Colocamos na ilha os NPCs que todo mundo usa: Banco, [[tradeMarket|Trade Market]], Item Identifier e Blacksmith, além da Bookshelf e do Misc. Bucket, que só existem dentro de Housings.",
  },
  {
    id: "encontro",
    titulo: "Ponto de encontro e conversa",
    texto:
      "É onde a galera se junta. Um lugar tranquilo para conversar no chat, combinar o que jogar com o pessoal ou só dar uma pausa entre uma quest e outra.",
  },
  {
    id: "annihilation",
    titulo: "Encontro para o Annihilation",
    texto:
      "Antes do Annihilation, o pessoal costuma se juntar aqui para esperar o evento começar. Assim a party já sai junta e organizada para a luta.",
  },
  {
    id: "afk",
    titulo: "AFK seguro",
    texto:
      "Vai sair do PC, mas quer continuar logado? O Housing é o melhor lugar para ficar AFK: dá para ficar parado por muito tempo sem ser desconectado por inatividade e voltar a jogar na hora.",
  },
];

// Como acessar
export const acessoIntro =
  "Chegar na nossa sede é fácil: você entra pelas Housing Islands das cidades principais (como Detlas, Cinfras e Rodoroc).";

export const acessoPassos = [
  { titulo: "Vá até o balão", texto: "Procure o balão colorido estacionado na cidade." },
  { titulo: "Selecione Guild Island", texto: "No menu que abrir, escolha a opção Guild Island." },
];

export const acessoImagens: Imagem[] = [
  img("acesso-balao", "Balão colorido das Housing Islands estacionado numa cidade", "1. O balão das Housing Islands."),
  img(
    "acesso-menu-guild-island",
    "Menu das Housing Islands com a opção Guild Islands e a ilha Guardian of Wynn's HQ",
    "2. No menu, a opção Guild Island leva à Guardian of Wynn's HQ.",
  ),
];

// Mapa
export type SetorId = "hall" | "fazenda" | "praca" | "coliseu" | "sede";

export const mapaIntro =
  "A ilha tem 5 setores principais, cada um com uma função no dia a dia ou na história da guilda. Clique num número do mapa para ir ao setor.";

export const mapaImagem = img(
  "mapa-da-ilha",
  "Mapa da ilha visto de cima, com os cinco setores circulados e numerados de 1 a 5",
  "A ilha vista de cima, com os cinco setores.",
);

export type Setor = {
  id: SetorId;
  numero: number;
  nome: string;
  /** Posição do número do setor no mapa, em % da largura e da altura da imagem. */
  posicao: { x: number; y: number };
  resumo: string;
  itens: { rotulo?: string; texto: string }[];
  aviso?: string;
  imagens: Imagem[];
};

export const setores: Setor[] = [
  {
    id: "hall",
    numero: 1,
    nome: "Hall de Entrada",
    posicao: { x: 49.5, y: 76.5 },
    resumo:
      "Fica logo na chegada da ilha, para quem quer usar os serviços rápido, sem andar muito.",
    itens: [{ rotulo: "Serviços", texto: "Banco, Trade Market, Bookshelf, Misc. Bucket, Item Identifier e Blacksmith." }],
    imagens: [
      img("hall-servicos-1", "NPCs de serviço no Hall de Entrada, entre árvores e estandartes roxos"),
      img("hall-servicos-2", "Outro canto do Hall de Entrada, com NPCs e um quadro de avisos"),
      img("hall-servicos-3", "Bancas de serviço do Hall de Entrada, com balões ao fundo"),
    ],
  },
  {
    id: "fazenda",
    numero: 2,
    nome: "Fazenda",
    posicao: { x: 74, y: 58.5 },
    resumo: "Uma propriedade particular, para plantar e descansar, com uma das vistas mais bonitas da ilha.",
    itens: [],
    aviso:
      "Área restrita, mantenha distância. Se invadir, você pode virar a próxima vítima da colheita.",
    imagens: [img("fazenda", "Casa da fazenda entre plantações de girassóis")],
  },
  {
    id: "praca",
    numero: 3,
    nome: "Praça Central",
    posicao: { x: 49.5, y: 49.5 },
    resumo:
      "O centro da ilha. A praça fica em volta da Fonte Central e é onde rola quase toda a vida social da guilda, além dos serviços mais completos.",
    itens: [
      {
        rotulo: "Destaques",
        texto:
          "Dentro da praça ficam a Taverna, o Cassino, o Banco Central, a Casa do Trade Market e a Casa do Ferreiro. Nos arredores fica a Feira, com todas as estações de profissões.",
      },
      { rotulo: "Residencial", texto: "Aqui ficam as casas de muitos dos nossos Chiefs e Strategists." },
    ],
    imagens: [
      img("praca-1", "Praça Central com a fonte e as fachadas das casas em volta"),
      img("praca-2", "Casas da Praça Central com placas penduradas"),
      img("praca-3", "Rua da Praça Central entre construções de madeira"),
      img("praca-4", "Outro ângulo da Praça Central, com a torre ao fundo"),
      img("praca-feira", "A Feira, com as estações de crafting das profissões", "A Feira, com as estações de profissões."),
    ],
  },
  {
    id: "coliseu",
    numero: 4,
    nome: "Coliseu",
    posicao: { x: 21, y: 49.5 },
    resumo: "O setor de treino, de combate e de honra.",
    itens: [
      { rotulo: "Arena PvP", texto: "Onde os membros resolvem as disputas entre si." },
      { rotulo: "Área de Dummies", texto: "Logo ao lado, ótima para testar o dano e ajustar as builds." },
      {
        rotulo: "Santuário do WarTeam",
        texto:
          "Com entrada pelos fundos, este memorial homenageia os guerreiros que encararam as guerras mais pesadas por território.",
      },
    ],
    imagens: [
      img("coliseu-arena", "Fachada do Coliseu, com o caminho de pedra até a entrada", "A entrada do Coliseu."),
      img("coliseu-dummies", "Área de Dummies, com bonecos de treino sobre a areia", "A Área de Dummies."),
      img("coliseu-santuario-warteam", "Santuário do WarTeam, um salão escuro com estátuas", "O Santuário do WarTeam."),
    ],
  },
  {
    id: "sede",
    numero: 5,
    nome: "Sede",
    posicao: { x: 49.5, y: 31 },
    resumo: "O ponto mais alto e mais respeitado da ilha.",
    itens: [
      { rotulo: "Lar dos Owners", texto: "É onde moram os líderes atuais da guilda." },
      { rotulo: "Memorial", texto: "Uma homenagem a todos os antigos Owners que ajudaram a construir a nossa história." },
      {
        rotulo: "Cemitério",
        texto: "Ao lado da sede, homenageamos os jogadores antigos que foram peças-chave na nossa trajetória.",
      },
    ],
    imagens: [
      img("sede", "A Sede, prédio principal com torre central e telhados azuis", "A Sede."),
      img("sede-memorial", "Memorial dos antigos Owners, com estátuas e placas com os anos de cada um", "O Memorial dos antigos Owners."),
      img("sede-cemiterio", "Cemitério ao lado da Sede, com lápides entre árvores", "O Cemitério."),
    ],
  },
];

// Outros pontos de interesse
export const outrosIntro =
  "Além dos setores principais, a ilha tem segredos, desafios e atalhos que deixam o passeio bem mais divertido.";

export type PontoId = "esgoto" | "parkour" | "labirinto" | "bosque";

export const outrosPontos: { id: PontoId; titulo: string; texto: string; imagem: Imagem }[] = [
  {
    id: "esgoto",
    titulo: "Esgoto (hub de teleporte)",
    texto:
      "Embaixo da ilha tem um esgoto que funciona de verdade. Ele é o hub de transporte: os teleportes de lá levam rápido para qualquer ponto da ilha. É o jeito mais rápido de se mover por ela.",
    imagem: img("esgoto", "Túnel do esgoto, com canal de água e passagens dos dois lados"),
  },
  {
    id: "parkour",
    titulo: "Parkour",
    texto:
      "Para quem curte parkour, um percurso difícil. Ele passa por cima das construções da ilha e termina no ponto mais alto da Housing, com uma vista de tudo.",
    imagem: img("parkour", "Vista do alto da ilha, com torres, telhados e balões ao fundo"),
  },
  {
    id: "labirinto",
    titulo: "Labirinto",
    texto:
      "Escondido numa área separada, é um desafio de paciência e atenção. O percurso é muito difícil, e poucos membros chegaram ao fim. Topa o desafio?",
    imagem: img("labirinto", "Entrada de pedra escondida entre árvores, marcada com um bloco verde"),
  },
  {
    id: "bosque",
    titulo: "Bosque",
    texto:
      "Para ter um pouco de paz, o bosque é o lugar: cercado de árvores, bom para descansar, sentar na fogueira com o pessoal e curtir a calma da ilha.",
    imagem: img("bosque", "Bosque de árvores altas com luz entrando entre as folhas"),
  },
];

// Arquitetura
export const arquiteturaIntro =
  "A sede foi planejada com cuidado, para ter a cara da guilda.";

/** Jogador creditado: o nick e o UUID da conta (o rosto continua certo se a pessoa trocar de nick). */
export type Jogador = { nick: string; uuid: string };

export const arquitetura: { conceito: string; projeto: Jogador; execucao: Jogador[] } = {
  conceito: "A arquitetura toda foi inspirada em Thesead, o que dá à ilha um visual único.",
  projeto: { nick: "Eduus", uuid: "c695f15210d24adca48650c4b308358b" },
  execucao: [
    { nick: "Atmisuki", uuid: "df94e4ddbfe74ba789ffd0b45ca7db92" },
    { nick: "iYasuo_", uuid: "81672dbf1ddf415ba6352444424d2cbd" },
    { nick: "Julinho", uuid: "9fca7262d45c44b89403a1e726e92e2b" },
    { nick: "Mor7ee", uuid: "44ecf926f4034f188044f1b3ea3945f5" },
    { nick: "RafaelGomes", uuid: "265ed9bdaf064e3b9c5158ec7c25b8a6" },
    { nick: "Victuwu", uuid: "6004d21407504313a5ef3f565b17a21e" },
    { nick: "Volkzz101", uuid: "40e11f26081e48189b3b19e81db2793d" },
  ],
};

export const convite =
  "Vale a pena explorar cada detalhe das construções e da decoração: a nossa casa é um dos lugares mais bonitos do servidor.";

export const segredos = "Também temos alguns segredos e lugares escondidos… será que você consegue achar todos?";

// Chamada na página da Comunidade e na Início
export const guildHouseChamada = {
  titulo: "A nossa casa: Guild House",
  texto: "A sede da guilda numa ilha de Housing: NPCs de serviço, cinco setores, um coliseu, um labirinto e segredos para achar.",
  acao: "Conhecer a Guild House",
};

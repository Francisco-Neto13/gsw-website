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
  "A Guild House é o nosso ponto de encontro oficial e um refúgio exclusivo dentro do servidor. Localizada nas Sedes de Guilda (como em Cinfras), ela funciona como um hub privado onde os membros se reúnem para socializar, relaxar e aproveitar as facilidades do espaço, longe da movimentação das cidades públicas.",
  "Neste guia, detalhamos as principais utilidades da nossa sede: a conveniência dos NPCs, o uso estratégico para eventos e o espaço de convivência para os membros.",
];

export const guildHouseResumo = [
  "NPCs de Banco, Trade Market, Item Identifier e Blacksmith, além da Bookshelf e do Misc. Bucket.",
  "Ponto de encontro da guilda e do grupo antes do Annihilation.",
  "Lugar seguro para ficar AFK sem ser desconectado.",
  "Cinco setores, um esgoto de teleportes e alguns segredos escondidos.",
];

// Funcionalidades
export const funcionalidadesIntro =
  "A nossa casa vai muito além de um espaço decorativo: ela oferece benefícios reais para a rotina no servidor.";

export type Funcionalidade = { id: "npcs" | "encontro" | "annihilation" | "afk"; titulo: string; texto: string };

export const funcionalidades: Funcionalidade[] = [
  {
    id: "npcs",
    titulo: "Praticidade com NPCs",
    texto:
      "Para facilitar a sua jornada, instalamos NPCs de serviços essenciais: acesso rápido ao Banco, ao [[tradeMarket|Trade Market]], ao Item Identifier e ao Blacksmith, além da Bookshelf e do Misc. Bucket, que só existem dentro de Housings.",
  },
  {
    id: "encontro",
    titulo: "Ponto de encontro e conversa",
    texto:
      "É o nosso quartel-general social. Um ambiente tranquilo para trocar ideias no chat, combinar atividades com outros jogadores ou simplesmente relaxar entre uma missão e outra.",
  },
  {
    id: "annihilation",
    titulo: "Encontro para o Annihilation",
    texto:
      "A Guild House é o lugar ideal para o \"pre-game\". Os membros costumam se reunir aqui para esperar o início do Annihilation, para que todos os participantes estejam juntos e organizados antes de partir para o evento.",
  },
  {
    id: "afk",
    titulo: "AFK seguro",
    texto:
      "Precisa se afastar do computador, mas quer continuar logado? O Housing é o melhor lugar para ficar AFK: dá para permanecer por longos períodos sem ser desconectado por inatividade e voltar à ação na hora.",
  },
];

// Como acessar
export const acessoIntro =
  "Entrar na nossa sede é simples: o acesso é pelas Housing Islands das principais cidades (como Detlas, Cinfras e Rodoroc).";

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
  "Nossa Guild House é dividida em 5 setores principais, cada um com uma função para o dia a dia e para a história da guilda. Clique num número do mapa para ir ao setor.";

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
      "Logo no início da ilha, é o ponto de conveniência imediata: perfeito para quem precisa de um acesso rápido sem se deslocar muito.",
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
    resumo: "Uma propriedade privada destinada à produção e ao descanso, com uma das vistas mais bonitas da ilha.",
    itens: [],
    aviso:
      "Mantenha distância: é uma área restrita. Não invada, ou você pode acabar se tornando a próxima vítima da colheita.",
    imagens: [img("fazenda", "Casa da fazenda entre plantações de girassóis")],
  },
  {
    id: "praca",
    numero: 3,
    nome: "Praça Central",
    posicao: { x: 49.5, y: 49.5 },
    resumo:
      "O coração pulsante da nossa Housing. Construída em volta da Fonte Central, a praça concentra a maior parte da nossa vida social e os serviços avançados.",
    itens: [
      {
        rotulo: "Destaques",
        texto:
          "Dentro da praça ficam a Taverna, o Cassino, o Banco Central, a Casa do Trade Market e a Casa do Ferreiro. Nos arredores fica a Feira, com todas as estações de profissões.",
      },
      { rotulo: "Residencial", texto: "É nesta área que ficam as residências de muitos dos nossos Chiefs e Strategists." },
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
    resumo: "O setor dedicado ao treinamento, ao combate e à honra.",
    itens: [
      { rotulo: "Arena PvP", texto: "O local oficial para disputas entre membros." },
      { rotulo: "Área de Dummies", texto: "Logo ao lado, ideal para testar o dano total e refinar as builds." },
      {
        rotulo: "Santuário do WarTeam",
        texto:
          "Acessado pela parte de trás, este memorial é dedicado aos guerreiros que enfrentaram as sofridas batalhas por territórios.",
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
    resumo: "O ponto mais alto e respeitado da nossa ilha.",
    itens: [
      { rotulo: "Lar dos Owners", texto: "A sede principal serve de residência para os atuais líderes da guilda." },
      { rotulo: "Memorial", texto: "Um espaço dedicado a todos os antigos Owners que ajudaram a construir a nossa história." },
      {
        rotulo: "Cemitério",
        texto: "Ao lado da sede, prestamos homenagem aos jogadores antigos que foram peças fundamentais na nossa trajetória.",
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
  "Além dos setores principais, a ilha esconde segredos, desafios e atalhos que deixam a exploração muito mais dinâmica.";

export type PontoId = "esgoto" | "parkour" | "labirinto" | "bosque";

export const outrosPontos: { id: PontoId; titulo: string; texto: string; imagem: Imagem }[] = [
  {
    id: "esgoto",
    titulo: "Esgoto (hub de teleporte)",
    texto:
      "O subsolo da ilha guarda um sistema de esgotos que funciona. Ele é o hub central de transporte: com teleportes estratégicos, leva rápido a qualquer ponto da ilha. É a forma mais eficiente de se deslocar.",
    imagem: img("esgoto", "Túnel do esgoto, com canal de água e passagens dos dois lados"),
  },
  {
    id: "parkour",
    titulo: "Parkour",
    texto:
      "Para quem gosta de agilidade, um percurso desafiador. Ele serpenteia pela arquitetura da ilha e leva até o ponto mais alto da Housing, com uma vista panorâmica sem igual.",
    imagem: img("parkour", "Vista do alto da ilha, com torres, telhados e balões ao fundo"),
  },
  {
    id: "labirinto",
    titulo: "Labirinto",
    texto:
      "Numa área reservada, um desafio de paciência e percepção. O percurso é extremamente difícil, e poucos membros conseguiram de fato chegar ao fim. Você aceita o desafio?",
    imagem: img("labirinto", "Entrada de pedra escondida entre árvores, marcada com um bloco verde"),
  },
  {
    id: "bosque",
    titulo: "Bosque",
    texto:
      "Para um momento de paz, o bosque é o lugar ideal: cercado de natureza, perfeito para descansar, aproveitar a fogueira com outros membros e apreciar a tranquilidade da ilha.",
    imagem: img("bosque", "Bosque de árvores altas com luz entrando entre as folhas"),
  },
];

// Arquitetura
export const arquiteturaIntro =
  "Nossa sede é um projeto de destaque, com uma estética planejada com cuidado para refletir a identidade da guilda.";

/** Jogador creditado: o nick e o UUID da conta (o rosto continua certo se a pessoa trocar de nick). */
export type Jogador = { nick: string; uuid: string };

export const arquitetura: { conceito: string; projeto: Jogador; execucao: Jogador[] } = {
  conceito: "A arquitetura foi inteiramente baseada em Thesead, o que dá um visual único e imersivo ao nosso espaço.",
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
  "Convidamos todos os membros a explorar cada detalhe das construções e das decorações temáticas que fazem da nossa casa um dos lugares mais impressionantes do servidor.";

export const segredos = "Também temos alguns segredos e lugares escondidos… será que você consegue achar todos?";

// Chamada na página da Comunidade e na Início
export const guildHouseChamada = {
  titulo: "A nossa casa: Guild House",
  texto: "A sede da guilda numa ilha de Housing: NPCs de serviço, cinco setores, um coliseu, um labirinto e segredos para achar.",
  acao: "Conhecer a Guild House",
};

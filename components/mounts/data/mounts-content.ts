// Guia de Montarias: texto da guilda (revisado só na escrita; sentido e números como vieram).
// Imagens em public/montarias/; a seção só mostra a imagem depois que ela estiver medida em lib/dimensoes-imagens.json.

export type Imagem = { src: string; alt: string; legenda?: string };

export type TipoDeMontaria = {
  id: string;
  nome: string;
  nomeIngles: string;
  nivel: number;
  quest: string;
  curral: string;
  regiao: string;
  coordenadas: string;
  caracteristicas: string;
  imagem: Imagem;
};

export type Atributo = { ingles: string; portugues: string; explicacao: string };

export type Destaque = { tipo: "info" | "aviso" | "dica"; titulo: string; texto: string };

export type RecursoExterno = { titulo: string; descricao: string; href?: string };

export const montariasIntroParagraphs = [
  "As montarias são o principal jeito de andar rápido pelo mapa.",
  "Hoje tem 3 tipos de montaria, e cada um se move de um jeito. Cada montaria tem atributos próprios, que definem como ela anda (velocidade, aceleração, curva etc.), e dá para melhorar ela de três formas.",
  "As montarias também mudam de cor e raridade, mas o que pesa de verdade no desempenho são os atributos.",
];

export const montariasSistemas = [
  { nome: "Treinamento (Training)", texto: "sobe os atributos da montaria.", href: "#treinamento" },
  { nome: "Alimentação (Feeding)", texto: "aumenta o limite de cada atributo.", href: "#alimentacao" },
  { nome: "Breeding", texto: "cruza duas montarias para gerar uma nova, com potencial maior.", href: "#breeding" },
];

export const tiposDeMontaria: TipoDeMontaria[] = [
  {
    id: "cavalo",
    nome: "Cavalo",
    nomeIngles: "Horse",
    nivel: 9,
    quest: "Stable Story",
    curral: "Ternaves",
    regiao: "Wynn",
    coordenadas: "852, 70, -1636",
    caracteristicas: "Maior velocidade final e boa curva, mas aceleração menor.",
    imagem: { src: "/montarias/montaria-cavalo.webp", alt: "Jogador montado num cavalo branco com sela marrom" },
  },
  {
    id: "wyvern",
    nome: "Dragão",
    nomeIngles: "Wyvern",
    nivel: 85,
    quest: "The Canyon Guides",
    curral: "Bantisu Quarters",
    regiao: "Gavel",
    coordenadas: "500, 107, -4720",
    caracteristicas:
      "Voa, numa altura definida pelo atributo Altitude, mas é mais lento e acelera menos.",
    imagem: { src: "/montarias/montaria-wyvern.webp", alt: "Jogador montado numa wyvern cinza-escura de asas abertas" },
  },
  {
    id: "adasaur",
    nome: "Adassauro",
    nomeIngles: "Adasaur",
    nivel: 115,
    quest: "Burning Bonds",
    curral: "Aldwell Sanctuary",
    regiao: "Fruma",
    coordenadas: "-1240, 83, -728",
    caracteristicas: "Acelera rápido e pula alto, mas perde muita velocidade nas curvas.",
    imagem: { src: "/montarias/montaria-adasaur.webp", alt: "Jogador montado num adassauro azul com crista vermelha" },
  },
];

export const montariasAtributosIntro =
  "Cada montaria tem atributos (stats) que definem como ela anda. Os valores mudam de um tipo para outro e são o que mais pesa no desempenho.";

export const atributos: Atributo[] = [
  { ingles: "Speed", portugues: "Velocidade", explicacao: "A velocidade máxima que a montaria alcança." },
  { ingles: "Acceleration", portugues: "Aceleração", explicacao: "O quão rápido a montaria chega na velocidade máxima." },
  {
    ingles: "Jump Height / Altitude",
    portugues: "Altura do pulo / Altitude",
    explicacao: "O quão alto a montaria pula (na wyvern, a altura do voo).",
  },
  { ingles: "Energy", portugues: "Energia", explicacao: "Por quanto tempo a montaria consegue treinar (veja Treinamento)." },
  {
    ingles: "Handling",
    portugues: "Controle",
    explicacao: "O quão rápido ela faz curva e quanta velocidade perde nelas.",
  },
  {
    ingles: "Toughness",
    portugues: "Resistência",
    explicacao: "Quanto mais alta, menor a chance de você cair da montaria quando leva dano.",
  },
  {
    ingles: "Boost",
    portugues: "Boost",
    explicacao: "Aumenta quanto de velocidade ou energia você ganha quando pega PowerUps de boost no treinamento.",
  },
  {
    ingles: "Training",
    portugues: "Treinamento",
    explicacao: "Aumenta quantos pontos cada PowerUp de atributo dá.",
  },
];

export const montariasNiveisIntro = "Na sua montaria, cada atributo mostra três informações:";

export const niveisDoAtributo = [
  {
    nome: "Level",
    cor: "verde",
    classe: "text-[#55ff55]",
    texto:
      "o valor atual do atributo, que também é o nível máximo de material que você pode usar para alimentar a montaria.",
  },
  {
    nome: "Limit",
    cor: "cinza claro",
    classe: "text-[#d4d4d4]",
    texto: "até onde o atributo sobe com treinamento.",
  },
  {
    nome: "Max",
    cor: "cinza escuro",
    classe: "text-[#8a8a8a]",
    texto: "até onde a sua montaria chega com alimentação.",
  },
];

export const montariaNova: Destaque = {
  tipo: "info",
  titulo: "Montaria recém-comprada",
  texto:
    "Toda montaria comprada começa com 1/10/30 (Level, Limit e Max, nessa ordem) e custa 1536 esmeraldas (24 blocos de esmeralda).",
};

export const imagemDosNiveis: Imagem = {
  src: "/montarias/montaria-atributos-level-limit-max.webp",
  alt: "Tooltip das rédeas de uma wyvern com os oito atributos em 1/10 (30)",
  legenda: "Level em verde, Limit em cinza claro e Max, entre parênteses, em cinza escuro.",
};

export const montariasTreinoIntro =
  "Para treinar, coloque a montaria no [[feeder]] do curral certo e use o item dela para chamar e sair andando.";

export const avisoMontado: Destaque = {
  tipo: "aviso",
  titulo: "Enquanto estiver montado",
  texto:
    "Você não consegue atacar nem usar spells, e pode cair da montaria quando leva dano de mob (a [[toughness]] diminui essa chance). Para descer, segure Shift parado no chão ou clique com o botão esquerdo segurando o item da montaria.",
};

export const montariasPowerUpsIntro =
  "Enquanto você anda pelo mapa, aparecem [[powerup|PowerUps]] em volta da montaria. Cada um que você pega sobe algum atributo ou dá um boost temporário. Tem dois tipos:";

export const tiposDePowerUp = [
  {
    titulo: "PowerUps de atributo (8 tipos, um para cada atributo)",
    texto:
      "Cada um sobe o seu atributo em +1 nível. Com o atributo Training mais alto, o valor pode ser maior (ex.: +1.1 por PowerUp).",
  },
  {
    titulo: "PowerUps de boost (2 tipos)",
    texto: "O Energy Boost recupera parte da energia da montaria. O Speed Boost dá muita velocidade por um tempo.",
  },
];

export const pontosDoTreino = [
  "Cada PowerUp que você pega gasta 2 de [[energy]], inclusive os de boost.",
  "Com a energia em 0, a montaria fica um pouco mais lenta e não pega PowerUps, mas eles continuam aparecendo.",
  "Para recuperar energia, pegue um Energy Boost ou alimente a montaria.",
  "Um atributo só sobe até o seu [[limitMontaria|Limit]] atual.",
];

export const powerUpsDeBoost: Imagem[] = [
  { src: "/montarias/powerup-speed-boost.webp", alt: "PowerUp Speed Boost", legenda: "Speed Boost" },
  { src: "/montarias/powerup-energy-boost.webp", alt: "PowerUp Energy Boost", legenda: "Energy Boost" },
];

export const powerUpsDeAtributo: Imagem[] = [
  { src: "/montarias/powerup-velocidade.webp", alt: "PowerUp de Velocidade", legenda: "Velocidade" },
  { src: "/montarias/powerup-aceleracao.webp", alt: "PowerUp de Aceleração", legenda: "Aceleração" },
  { src: "/montarias/powerup-altitude.webp", alt: "PowerUp de Altura do pulo e Altitude", legenda: "Altura do pulo / Altitude" },
  { src: "/montarias/powerup-energia.webp", alt: "PowerUp de Energia", legenda: "Energia" },
  { src: "/montarias/powerup-controle.webp", alt: "PowerUp de Controle", legenda: "Controle" },
  { src: "/montarias/powerup-resistencia.webp", alt: "PowerUp de Resistência", legenda: "Resistência" },
  { src: "/montarias/powerup-boost.webp", alt: "PowerUp de Boost", legenda: "Boost" },
  { src: "/montarias/powerup-treinamento.webp", alt: "PowerUp de Treinamento", legenda: "Treinamento" },
];

export const montariasAlimentacaoIntro =
  "A alimentação aumenta o Limit dos atributos (até o Max de cada um), para você treinar além dos valores iniciais. Para alimentar, vá ao curral da montaria e use o [[feeder]] com o material que quiser.";

export const comoFuncionaAlimentacao = [
  "Cada material de crafting que você usa aumenta o Limit de um ou mais atributos.",
  "Quanto cada material dá depende do tier (nível do material); material de qualidade maior (2 ou 3 estrelas) não dá bônus.",
  "Alimentar a montaria também recupera energia, para você continuar treinando.",
];

export const dicaDoLevel: Destaque = {
  tipo: "dica",
  titulo: "O Level limita o material",
  texto:
    "O [[levelMontaria|Level]] da montaria define o tier máximo de material que ela aceita: material acima desse nível não entra.",
};

export const recursosDeAlimentacao: RecursoExterno[] = [
  {
    titulo: "Tabela de Materiais e Atributos",
    descricao: "Quanto cada material dá para cada atributo.",
  },
  {
    titulo: "Calculadora de Alimentação (Wynnhub)",
    descricao: "A melhor ordem de materiais para chegar nos limites que você quer com o menor número de alimentações.",
  },
];

export const montariasBreedingIntro =
  "O breeding aumenta o [[maxMontaria|Max]] dos atributos: o único jeito de passar do teto de uma montaria é cruzar e gerar uma nova.";

export const comoFazerBreeding = [
  "Você cruza duas montarias no curral.",
  "Os dois pais somem e nasce um único filho, que fica no slot do primeiro pai.",
  "Leva 6 horas para terminar.",
];

export const requisitoDoBreeding = [
  "A média dos Limits da primeira montaria precisa ser 20 ou mais.",
  "Não arredonda: média 19.5 não serve.",
];

export const atributosDoFilho = [
  {
    nome: "Level",
    texto: "Sai do maior Level entre os dois pais, com um pouco de variação aleatória.",
    dica: "Basta treinar um dos pais para o filho manter os níveis.",
  },
  {
    nome: "Limit",
    texto:
      "Sai da média dos Limits dos dois pais, mais um bônus e um pouco de variação aleatória. Normalmente fica na média dos pais + 10 a 15 pontos.",
  },
  {
    nome: "Max",
    texto:
      "Também sai da média dos Limits dos pais, numa conta parecida, mas com valores e variação bem maiores. Normalmente soma de 20 a 40.",
  },
];

export const avisoDoBreeding: Destaque = {
  tipo: "aviso",
  titulo: "Pais desequilibrados",
  texto:
    "Se um dos pais for muito mais forte que o outro, a média pode gerar um filho pior que o pai mais forte. Para aproveitar bem, alimente os dois até o máximo antes do breeding e deixe os limites deles o mais parecidos possível.",
};

export const corDoFilho =
  "A cor do filho é uma mistura aleatória das cores dos pais. A cor primária (da esquerda) tem 50% de chance de vir de cada pai; a secundária tem 48% para cada pai e 4% de chance de ser uma cor aleatória.";

export const montariasFontes = [
  { rotulo: "Mounts, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Mounts" },
];

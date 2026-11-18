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
  "As montarias são um dos principais sistemas de mobilidade do jogo: com elas você se desloca mais rápido e com mais eficiência pelo mundo.",
  "Hoje existem 3 tipos de montaria, cada um com um estilo de movimentação diferente. Cada montaria tem atributos próprios, que definem seu comportamento (velocidade, aceleração, curva etc.), e pode ser melhorada por três sistemas.",
  "Cada montaria também tem variações de cor e raridade, mas o que realmente pesa no desempenho são os atributos.",
];

export const montariasSistemas = [
  { nome: "Treinamento (Training)", texto: "melhora diretamente os atributos da montaria.", href: "#treinamento" },
  { nome: "Alimentação (Feeding)", texto: "aumenta o limite dos atributos.", href: "#alimentacao" },
  { nome: "Breeding", texto: "combina duas montarias para gerar uma nova, com potencial melhor.", href: "#breeding" },
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
      "Pode voar, a uma altura definida pelo atributo Altitude, mas é mais lento e tem menos aceleração.",
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
    caracteristicas: "Alta aceleração e altura de pulo, mas perde muita velocidade ao curvar.",
    imagem: { src: "/montarias/montaria-adasaur.webp", alt: "Jogador montado num adassauro azul com crista vermelha" },
  },
];

export const montariasAtributosIntro =
  "Cada montaria tem atributos (stats) que definem diretamente como ela se comporta. Os valores variam entre os tipos de montaria e são o principal fator de desempenho.";

export const atributos: Atributo[] = [
  { ingles: "Speed", portugues: "Velocidade", explicacao: "Define a velocidade máxima que a montaria pode atingir." },
  { ingles: "Acceleration", portugues: "Aceleração", explicacao: "Determina quão rápido a montaria chega à velocidade máxima." },
  {
    ingles: "Jump Height / Altitude",
    portugues: "Altura do pulo / Altitude",
    explicacao: "Define o quão alto a montaria consegue pular (na wyvern, a altura de voo).",
  },
  { ingles: "Energy", portugues: "Energia", explicacao: "Representa por quanto tempo a montaria consegue treinar (veja Treinamento)." },
  {
    ingles: "Handling",
    portugues: "Controle",
    explicacao: "Afeta o quão rápido dá para curvar e quanto de velocidade se perde nas curvas.",
  },
  {
    ingles: "Toughness",
    portugues: "Resistência",
    explicacao: "Quanto mais alta, menor a chance de o jogador ser derrubado da montaria ao ser atacado.",
  },
  {
    ingles: "Boost",
    portugues: "Boost",
    explicacao: "Aumenta quanto de velocidade ou energia você ganha ao pegar PowerUps de boost no treinamento.",
  },
  {
    ingles: "Training",
    portugues: "Treinamento",
    explicacao: "Aumenta a quantidade de pontos que cada PowerUp de atributo fornece.",
  },
];

export const montariasNiveisIntro = "Na sua montaria, cada atributo mostra três informações:";

export const niveisDoAtributo = [
  {
    nome: "Level",
    cor: "verde",
    classe: "text-[#55ff55]",
    texto:
      "os atributos atuais, e também o nível máximo dos materiais que você pode usar para alimentar a montaria.",
  },
  {
    nome: "Limit",
    cor: "cinza claro",
    classe: "text-[#d4d4d4]",
    texto: "o limite que cada atributo consegue alcançar com o treinamento.",
  },
  {
    nome: "Max",
    cor: "cinza escuro",
    classe: "text-[#8a8a8a]",
    texto: "o máximo que a sua montaria atual consegue alcançar com a alimentação.",
  },
];

export const montariaNova: Destaque = {
  tipo: "info",
  titulo: "Montaria recém-comprada",
  texto:
    "Toda montaria comprada começa com 1/10/30 (Level, Limit e Max, respectivamente) e custa 1536 esmeraldas (24 blocos de esmeralda).",
};

export const imagemDosNiveis: Imagem = {
  src: "/montarias/montaria-atributos-level-limit-max.webp",
  alt: "Tooltip das rédeas de uma wyvern com os oito atributos em 1/10 (30)",
  legenda: "Level em verde, Limit em cinza claro e Max, entre parênteses, em cinza escuro.",
};

export const montariasTreinoIntro =
  "Para treinar, coloque a montaria no [[feeder]] do curral certo e use o item correspondente para chamá-la e começar a usar.";

export const avisoMontado: Destaque = {
  tipo: "aviso",
  titulo: "Enquanto estiver montado",
  texto:
    "Você não consegue atacar nem usar spells, e pode ser derrubado ao levar dano de mobs (chance reduzida pela [[toughness]]). Para desmontar, segure Shift parado no chão ou clique com o botão esquerdo segurando o item da montaria.",
};

export const montariasPowerUpsIntro =
  "Enquanto você anda pelo mundo, [[powerup|PowerUps]] aparecem em volta da montaria. Ao coletar um, a montaria ganha um aumento em algum atributo ou recebe um boost temporário. Existem dois tipos:";

export const tiposDePowerUp = [
  {
    titulo: "PowerUps de atributo (8 tipos, um para cada atributo)",
    texto:
      "Sobem o atributo correspondente em +1 nível ao serem coletados. O valor pode ser maior conforme o nível do atributo Training (ex.: +1.1 por PowerUp).",
  },
  {
    titulo: "PowerUps de boost (2 tipos)",
    texto: "Energy Boost restaura uma parte da energia da montaria. Speed Boost dá um aumento de velocidade grande e temporário.",
  },
];

export const pontosDoTreino = [
  "Cada PowerUp coletado gasta 2 de [[energy]], inclusive os de boost.",
  "Com a energia em 0, a montaria fica um pouco mais lenta e não consegue coletar PowerUps, mas eles continuam aparecendo.",
  "Para restaurar energia, colete um Energy Boost ou alimente a montaria.",
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
  "A alimentação aumenta o Limit dos atributos (até o Max de cada um), para você treinar além dos valores iniciais. Para alimentar, vá ao curral correspondente e use o [[feeder]] com o material desejado.";

export const comoFuncionaAlimentacao = [
  "Cada material de crafting usado aumenta diretamente o Limit de um ou mais atributos.",
  "Quanto cada material fornece varia com o tier (nível do material), mas materiais de qualidade maior (2 ou 3 estrelas) não fornecem bônus.",
  "Alimentar a montaria também restaura energia, para você continuar o treinamento.",
];

export const dicaDoLevel: Destaque = {
  tipo: "dica",
  titulo: "O Level limita o material",
  texto:
    "O [[levelMontaria|Level]] da montaria define o tier máximo de material que ela aceita na alimentação: materiais acima desse nível não podem ser usados.",
};

export const recursosDeAlimentacao: RecursoExterno[] = [
  {
    titulo: "Tabela de Materiais e Atributos",
    descricao: "Quanto cada material fornece para cada atributo.",
  },
  {
    titulo: "Calculadora de Alimentação (Wynnhub)",
    descricao: "Sequência ideal de materiais para chegar nos limites desejados com o menor número de alimentações.",
  },
];

export const montariasBreedingIntro =
  "O breeding aumenta o [[maxMontaria|Max]] dos atributos: o único jeito de passar do teto de uma montaria é gerar uma nova por reprodução.";

export const comoFazerBreeding = [
  "Você combina duas montarias no curral.",
  "O processo consome os dois pais e gera um único filho, que ocupa o slot do primeiro pai.",
  "Leva 6 horas para terminar.",
];

export const requisitoDoBreeding = [
  "A média dos Limits da primeira montaria precisa ser 20 ou mais.",
  "O valor não é arredondado: média 19.5 não basta.",
];

export const atributosDoFilho = [
  {
    nome: "Level",
    texto: "Baseado no maior Level entre os dois pais, com alguma variação aleatória.",
    dica: "Só é preciso treinar um dos pais para preservar os níveis no filho.",
  },
  {
    nome: "Limit",
    texto:
      "Baseado na média dos Limits dos dois pais, mais um bônus e alguma variação aleatória. Normalmente fica na média dos pais + 10 a 15 pontos.",
  },
  {
    nome: "Max",
    texto:
      "Também baseado na média dos Limits dos pais, num cálculo parecido, mas com valores e variação bem maiores. Normalmente soma de 20 a 40.",
  },
];

export const avisoDoBreeding: Destaque = {
  tipo: "aviso",
  titulo: "Pais desequilibrados",
  texto:
    "Se um dos pais for muito mais forte que o outro, a média dos limites pode gerar um filho pior que o pai mais forte. Para aproveitar o potencial, alimente os dois pais até o máximo antes do breeding e deixe os limites deles o mais próximos possível.",
};

export const corDoFilho =
  "A aparência (cor) do filho é uma combinação aleatória das cores dos pais. A cor primária (da esquerda) tem 50% de chance de vir de cada pai; a secundária tem 48% para cada pai e 4% de chance de ser uma cor aleatória.";

export const montariasFontes = [
  { rotulo: "Mounts, na wiki da Wynncraft", href: "https://wynncraft.wiki.gg/wiki/Mounts" },
];

// Glossário dos termos do jogo, com explicação própria em português.
// Usado pelo <Termo>: o termo fica em inglês (nome oficial), a explicação abre numa caixa de item.

export type TermoDoGlossario = {
  termo: string;
  tipo: string;
  explicacao: string;
};

export const glossario = {
  aspect: {
    termo: "Aspect",
    tipo: "Recompensa de raid",
    explicacao:
      "Melhoria para uma habilidade da árvore. Sai no baú final das raids, em versões lendária, fabled e mítica, e vai do Tier I ao IV.",
  },
  pull: {
    termo: "Pull",
    tipo: "Recompensa de raid",
    explicacao:
      "Cada tentativa de tirar um item do baú final. A run acumula pulls a cada sala concluída; quanto melhor a party joga, mais pulls no fim.",
  },
  aspectPull: {
    termo: "Aspect pull",
    tipo: "Recompensa de raid",
    explicacao: "Tentativa específica de tirar um aspect no baú final. Vem das salas concluídas sem mortes e de alguns ranks.",
  },
  gambit: {
    termo: "Gambit",
    tipo: "Modificador diário",
    explicacao:
      "Desafio opcional ativado antes da raid. Deixa a run mais difícil em troca de mais pulls e aspect pulls. Os gambits do dia são os mesmos para todo mundo.",
  },
  runa: {
    termo: "Runa",
    tipo: "Item de entrada",
    explicacao: "Item gasto para abrir a raid: Az, Uth, Tol ou Ek, conforme a raid. Se a run falhar, a runa já foi consumida.",
  },
  buff: {
    termo: "Buff",
    tipo: "Bônus temporário",
    explicacao: "Bônus escolhido nos baús entre as salas da raid. Vale até o fim da run e pesa muito contra o chefe.",
  },
  ehp: {
    termo: "EHP",
    tipo: "Atributo",
    explicacao:
      "Effective Health Points: quanto dano você aguenta de verdade, somando vida e defesas. Quem tem mais EHP costuma segurar as mecânicas de risco.",
  },
  party: {
    termo: "Party",
    tipo: "Grupo",
    explicacao: "Grupo de jogadores que entra junto no conteúdo. As raids exigem uma party de 4.",
  },
  guildRaid: {
    termo: "Guild raid",
    tipo: "Modo de raid",
    explicacao:
      "Raid feita com a party inteira da mesma guilda. É mais difícil e rende XP, pontos de temporada e aspects para a guilda.",
  },
  silverbull: {
    termo: "Silverbull",
    tipo: "Lugar",
    explicacao:
      "Centro de Divisão Silverbull, a leste de Cinfras. É onde se registra nas divisões de raid e de lootrun e onde fica a fila de party.",
  },
  feeder: {
    termo: "Feeder",
    tipo: "Bloco do curral",
    explicacao:
      "Cocho do curral de cada tipo de montaria. É nele que se guarda a montaria para treinar e onde se alimenta com materiais de crafting.",
  },
  powerup: {
    termo: "PowerUp",
    tipo: "Treino de montaria",
    explicacao:
      "Objeto que aparece em volta da montaria enquanto você anda. Os de atributo sobem um atributo; os de boost restauram energia ou dão velocidade por um tempo. Cada um gasta 2 de Energy.",
  },
  levelMontaria: {
    termo: "Level",
    tipo: "Atributo de montaria (verde)",
    explicacao:
      "Valor atual do atributo. Também define o tier máximo de material que a montaria aceita na alimentação.",
  },
  limitMontaria: {
    termo: "Limit",
    tipo: "Atributo de montaria (cinza claro)",
    explicacao: "Até onde o treino consegue levar o atributo. Sobe com a alimentação, até chegar no Max.",
  },
  maxMontaria: {
    termo: "Max",
    tipo: "Atributo de montaria (cinza escuro)",
    explicacao: "Teto do atributo para essa montaria. Só um filho de breeding passa desse valor.",
  },
  energy: {
    termo: "Energy",
    tipo: "Atributo de montaria",
    explicacao:
      "Quanto tempo a montaria aguenta treinar. Cada PowerUp coletado gasta 2; em 0, ela fica um pouco mais lenta e não coleta PowerUps.",
  },
  handling: {
    termo: "Handling",
    tipo: "Atributo de montaria",
    explicacao: "Controle nas curvas: quanto mais alto, mais rápido a montaria vira e menos velocidade perde ao curvar.",
  },
  toughness: {
    termo: "Toughness",
    tipo: "Atributo de montaria",
    explicacao: "Resistência: quanto mais alta, menor a chance de você ser derrubado da montaria ao levar dano.",
  },
} satisfies Record<string, TermoDoGlossario>;

export type ChaveDoGlossario = keyof typeof glossario;

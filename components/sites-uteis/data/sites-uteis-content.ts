// Guia de Sites úteis. Curadoria e texto de FurionSpeed (Labubu), da comunidade, revisados pela GsW.
// Endereços conferidos em 18/11/2026. Os sites pertencem aos seus criadores; a GsW não tem vínculo com nenhum.
// Prévias em public/terceiros/ (docs/CREDITOS.md): a imagem de compartilhamento do site ou uma captura da página.

export type CategoriaId = "builds" | "oficial" | "wiki" | "economia" | "estatisticas" | "avancado" | "crafting";

export const categorias: { id: CategoriaId; nome: string }[] = [
  { id: "builds", nome: "Builds" },
  { id: "oficial", nome: "Info oficial" },
  { id: "wiki", nome: "Wiki" },
  { id: "economia", nome: "Economia" },
  { id: "estatisticas", nome: "Estatísticas" },
  { id: "avancado", nome: "Avançado" },
  { id: "crafting", nome: "Crafting" },
];

export type SiteUtil = {
  id: string;
  nome: string;
  url: string;
  categorias: CategoriaId[];
  resumo: string;
  dentro: string[];
  serve: string[];
  /** Destaque da curadoria. `opiniao` marca o que é avaliação da comunidade, não fato. */
  destaque?: { texto: string; opiniao?: boolean };
  /** Problema encontrado ao conferir o link. */
  aviso?: string;
  /** Quem faz o site, para o crédito do card. */
  criadores: string;
  /** Prévia (public/terceiros/); sem ela, o card mostra uma prévia desenhada no padrão do site. */
  imagem?: string;
};

export const sitesIntroParagraphs = [
  "As ferramentas que a comunidade do Wynncraft mais usa no dia a dia: simular builds, acompanhar o mercado, consultar dados e tirar dúvidas.",
  "Nenhum desses sites é da GsW. Cada um pertence aos seus criadores, e os links levam direto aos endereços originais.",
];

export const curadoria = "Curadoria de FurionSpeed (Labubu), da comunidade, com texto revisado pela GsW.";

export const sites: SiteUtil[] = [
  {
    id: "wynnbuilder",
    nome: "WynnBuilder",
    url: "https://wynnbuilder.github.io/",
    categorias: ["builds"],
    resumo: "Simulador de builds.",
    dentro: [
      "Simulador completo de equipamento: armadura, arma e acessórios",
      "Cálculo de dano real (DPS, dano de spell e mais)",
      "Árvore de habilidades",
      "Teste de combinações de elementos (terra, fogo, água…)",
      "Importação de builds por link",
    ],
    serve: ["Montar a build antes de gastar esmeraldas", "Testar as builds do meta", "Equilibrar dano e defesa"],
    destaque: { texto: "A comunidade considera o WynnBuilder o mais preciso para calcular dano.", opiniao: true },
    criadores: "hppeng, ferricles e reschan",
    imagem: "/terceiros/sites/wynnbuilder.webp",
  },
  {
    id: "wynncraft",
    nome: "Wynncraft",
    url: "https://wynncraft.com/",
    categorias: ["oficial"],
    resumo: "O site oficial do jogo.",
    dentro: ["Perfis de jogadores", "Rankings e guildas", "Banco de itens", "Notícias e atualizações", "Stats de cada personagem"],
    serve: ["Acompanhar o próprio progresso", "Conferir informação oficial", "Ver o perfil de outros jogadores"],
    criadores: "Wynncraft Studios",
    imagem: "/terceiros/wynncraft/site-wynncraft-logo.webp",
  },
  {
    id: "wiki",
    nome: "Wynncraft Wiki",
    url: "https://wynncraft.wiki.gg/",
    categorias: ["wiki"],
    resumo: "A base de conhecimento completa do jogo.",
    dentro: ["Mecânicas em detalhe", "Todas as quests", "Classes e builds", "Crafting e profissões", "Dungeons e raids"],
    serve: ["Aprender o jogo a fundo", "Tirar dúvidas específicas", "Ler guias completos"],
    destaque: { texto: "São milhares de páginas, mantidas e atualizadas pela comunidade." },
    criadores: "os editores da Wynncraft Wiki, no wiki.gg",
    imagem: "/terceiros/wynncraft/site-wiki.webp",
  },
  {
    id: "wynnventory",
    nome: "Wynnventory",
    url: "https://www.wynnventory.com/",
    categorias: ["economia"],
    resumo: "Economia e mercado.",
    dentro: ["Histórico de preços", "Gráficos de valorização", "Comparação de itens", "Tendências do mercado"],
    serve: ["Comprar barato e vender caro", "Evitar prejuízo", "Analisar o mercado"],
    criadores: "a equipe do Wynnventory",
    imagem: "/terceiros/sites/wynnventory.webp",
  },
  {
    id: "wynnpool",
    nome: "Wynnpool",
    url: "https://www.wynnpool.com/",
    categorias: ["estatisticas"],
    resumo: "Dados e estatísticas.",
    dentro: ["Dados de jogadores", "Estatísticas globais", "Informações de itens", "Rankings"],
    serve: ["Comparar jogadores", "Analisar desempenho", "Consultar dados técnicos"],
    criadores: "a equipe do Wynnpool",
    imagem: "/terceiros/sites/wynnpool.webp",
  },
  {
    id: "nori-fish",
    nome: "nori.fish",
    url: "https://nori.fish/",
    categorias: ["avancado"],
    resumo: "Ferramentas avançadas.",
    dentro: ["Calculadoras específicas", "Ferramentas experimentais", "Testes de mecânicas"],
    serve: ["Jogadores avançados", "Testes pontuais de mecânicas do jogo"],
    criadores: "RawFish",
    imagem: "/terceiros/sites/nori-fish.webp",
  },
  {
    id: "wynncrafter",
    nome: "WynnCrafter",
    url: "https://wynnbuilder.github.io/crafter/",
    categorias: ["crafting"],
    resumo: "Simulador de crafting e otimização de itens, parte do WynnBuilder.",
    dentro: [
      "Simulador de crafting de itens",
      "Cálculo dos stats finais (identificações e rolls)",
      "Teste de materiais e ingredientes",
      "Otimização de builds via crafting",
      "Previsão do resultado antes de craftar",
    ],
    serve: [
      "Fazer itens melhores gastando menos",
      "Não desperdiçar materiais raros",
      "Ajustar os crafts para a build final",
      "Planejar itens valiosos para vender",
    ],
    destaque: { texto: "O foco é criar itens eficientes e lucrativos." },
    criadores: "hppeng, ferricles e reschan (os mesmos do WynnBuilder)",
    imagem: "/terceiros/sites/wynncrafter.webp",
  },
];

export const sitesDoGrupo = (categoria: CategoriaId) => sites.filter((site) => site.categorias.includes(categoria));

export const sitesFontes = sites.map((site) => ({ rotulo: `${site.nome} (${site.url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "")})`, href: site.url }));

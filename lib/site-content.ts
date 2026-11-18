// Registro único da navegação: top bar, sidebar dos guias, /guias, busca, redirects e teste de rotas.
// Arquivo só de dados (sem React), para o teste em tests/ importar direto.

export type SitePageLink = {
  label: string;
  href: string;
};

export type GrupoId = "progressao" | "endgame" | "economia" | "especiais";

export type GuiaSecao = {
  id: string;
  titulo: string;
  nivel?: 2 | 3;
  /** Siglas e sinônimos que a busca também reconhece (ex.: "TCC"). */
  busca?: string;
};

export type Guia = {
  slug: string;
  titulo: string;
  resumo: string;
  grupo: GrupoId;
  estado: "completo" | "em-construcao";
  /** Rota antiga, mantida com redirect permanente para não quebrar links compartilhados. */
  rotaAntiga: string;
  /** Versão do jogo em que o guia foi revisado; ausente = revisão pendente. */
  versaoDoJogo?: string;
  atualizadoEm?: string;
  /** Seções indexadas na busca. Guias ainda no modelo antigo não listam. */
  secoes?: GuiaSecao[];
  /** Termos que levam a este guia na busca, além do título e do resumo. */
  palavrasChave?: string;
};

export const grupos: { id: GrupoId; titulo: string }[] = [
  { id: "progressao", titulo: "Progressão" },
  { id: "endgame", titulo: "Endgame" },
  { id: "economia", titulo: "Economia" },
  { id: "especiais", titulo: "Especiais" },
];

export const raidsSecoes: GuiaSecao[] = [
  { id: "primeiros-passos", titulo: "Primeiros passos" },
  { id: "estrutura", titulo: "Como uma raid funciona" },
  { id: "raids-da-guilda", titulo: "Raids da guilda" },
  { id: "guia-por-raid", titulo: "Guia sala a sala" },
  { id: "notg", titulo: "Nest of the Grootslangs", nivel: 3, busca: "NOTG grootslang" },
  { id: "nol", titulo: "Orphion's Nexus of Light", nivel: 3, busca: "NOL orphion" },
  { id: "tcc", titulo: "The Canyon Colossus", nivel: 3, busca: "TCC colossus" },
  { id: "tna", titulo: "The Nameless Anomaly", nivel: 3, busca: "TNA nameless" },
  { id: "twp", titulo: "The Wartorn Palace", nivel: 3, busca: "TWP anathema" },
  { id: "recompensas", titulo: "Recompensas", busca: "aspect aspects pull pulls baú" },
  { id: "extras", titulo: "Gambits, ranking e dicas", busca: "gambit rank divisão" },
  { id: "fontes", titulo: "Fontes" },
];

export const montariasSecoes: GuiaSecao[] = [
  { id: "tipos", titulo: "Tipos de montaria", busca: "horse cavalo wyvern dragão adasaur adassauro curral" },
  { id: "atributos", titulo: "Atributos", busca: "speed acceleration altitude energy handling toughness boost training stats" },
  { id: "level-limit-max", titulo: "Level, Limit e Max", nivel: 3 },
  { id: "treinamento", titulo: "Treinamento", busca: "training treinar" },
  { id: "powerups", titulo: "PowerUps", nivel: 3, busca: "powerup speed boost energy boost" },
  { id: "alimentacao", titulo: "Alimentação", busca: "feeding feeder materiais alimentar" },
  { id: "breeding", titulo: "Breeding", busca: "reprodução cruzamento filho" },
  { id: "fontes", titulo: "Fontes" },
];

export const festivaisSecoes: GuiaSecao[] = [
  { id: "ciclo", titulo: "Ordem dos festivais" },
  { id: "estrutura", titulo: "O que esperar de um festival", busca: "duração caixas crates detlas" },
  { id: "heroes", titulo: "Festival of the Heroes", busca: "aster palco scavenger hunt claim to heroism talespun totem of tales" },
  { id: "bonfire", titulo: "Festival of the Bonfire", busca: "fogueira hearthflame hunt kindling prop hunt bonfire keeper" },
  { id: "spirits", titulo: "Festival of the Spirits", busca: "halloween guiding of the spirits banish the beyond dead by daylight dbd well of power" },
  { id: "blizzard", titulo: "Festival of the Blizzard", busca: "natal traveler festival invitations blizzard brawl wynnter fair" },
  { id: "fontes", titulo: "Fontes" },
];

export const modosSecoes: GuiaSecao[] = [
  { id: "como-funciona", titulo: "Como escolher um modo", busca: "criar personagem gamemode irreversível" },
  { id: "comparacao", titulo: "Comparação rápida" },
  { id: "hardcore", titulo: "Hardcore", busca: "morte vida emblema vermelho cinza leaderboard" },
  { id: "ironman", titulo: "Ironman e Ultimate Ironman", busca: "uim banco trade market /ironman" },
  { id: "craftsman", titulo: "Craftsman", busca: "itens craftados crafting" },
  { id: "hunted", titulo: "Hunted", busca: "pvp a hunter's calling xp" },
  { id: "combinacoes", titulo: "Combinações e desafios", busca: "hic hich huich huic" },
  { id: "fontes", titulo: "Fontes" },
];

export const guias: Guia[] = [
  {
    slug: "leveling",
    palavrasChave: "xp nível level spots grind party",
    titulo: "Leveling",
    resumo: "Spots de XP do nível 1 ao 121, party e builds de grind.",
    grupo: "progressao",
    estado: "completo",
    rotaAntiga: "/leveling",
  },
  {
    slug: "profissoes",
    palavrasChave: "professions crafting coleta mining woodcutting fishing farming",
    titulo: "Profissões",
    resumo: "Coleta e criação, ferramentas, spots de ingredientes e waypoints.",
    grupo: "progressao",
    estado: "completo",
    rotaAntiga: "/professions",
  },
  {
    slug: "montarias",
    palavrasChave: "mounts horse cavalo wyvern adasaur",
    titulo: "Montarias",
    resumo: "Horse, Wyvern e Adasaur: como conseguir, treinar e cruzar.",
    grupo: "progressao",
    estado: "completo",
    rotaAntiga: "/montarias",
    secoes: montariasSecoes,
  },
  {
    slug: "lootrun",
    palavrasChave: "beacon beacons camp boons curses missão trial",
    titulo: "Lootrun",
    resumo: "Camps, divisões, desafios, beacons e combos de missões.",
    grupo: "endgame",
    estado: "completo",
    rotaAntiga: "/lootrun",
  },
  {
    slug: "raids",
    palavrasChave: "raid notg nol tcc tna twp aspect gambit runa",
    titulo: "Raids",
    resumo: "As cinco raids sala a sala, com POVs da guilda.",
    grupo: "endgame",
    estado: "completo",
    rotaAntiga: "/raids",
    versaoDoJogo: "2.2.4",
    atualizadoEm: "nov/2026",
    secoes: raidsSecoes,
  },
  {
    slug: "dungeons",
    palavrasChave: "dungeon forgery corrompida corrupted boss token fragmento",
    titulo: "Dungeons",
    resumo: "Todas as dungeons, versões corrompidas, Forgery e Boss Tokens.",
    grupo: "endgame",
    estado: "completo",
    rotaAntiga: "/dungeons",
  },
  {
    slug: "world-events",
    palavrasChave: "world event annihilation evento",
    titulo: "World Events",
    resumo: "Eventos no mapa e o Annihilation.",
    grupo: "endgame",
    estado: "completo",
    rotaAntiga: "/world-events",
  },
  {
    slug: "silverbull-shares",
    palavrasChave: "shares rank loja bomba token assinatura",
    titulo: "Silverbull Shares",
    resumo: "Shares, ranks, assinatura, crates, bombas e tokens.",
    grupo: "economia",
    estado: "completo",
    rotaAntiga: "/silverbull-shares",
  },
  {
    slug: "modos-especiais",
    palavrasChave: "hardcore ironman craftsman hunted gamemode",
    titulo: "Modos especiais",
    resumo: "Hardcore, Ironman, Craftsman e Hunted: regras, como liberar e combinações.",
    grupo: "especiais",
    estado: "completo",
    rotaAntiga: "/modos-especiais",
    secoes: modosSecoes,
  },
  {
    slug: "festivais",
    palavrasChave: "festival festivais evento sazonal heroes bonfire spirits blizzard minigame trinket",
    titulo: "Festivais",
    resumo: "Heroes, Bonfire, Spirits e Blizzard: missões, minigames e recompensas.",
    grupo: "especiais",
    estado: "completo",
    rotaAntiga: "/festivais",
    secoes: festivaisSecoes,
  },
];

export const guiaHref = (slug: string) => `/guias/${slug}`;

/** Título e descrição da aba e dos buscadores para a página de um guia. */
export const metadataDoGuia = (slug: string) => {
  const guia = guias.find((item) => item.slug === slug);
  return guia ? { title: guia.titulo, description: `${guia.resumo} Guia de Wynncraft em português, feito pela GsW.` } : {};
};

export const guiasDoGrupo = (grupo: GrupoId) => guias.filter((guia) => guia.grupo === grupo);

/** Ordem de leitura: a mesma da sidebar (grupos na ordem, guias na ordem do grupo). */
export const guiasEmOrdem: Guia[] = grupos.flatMap((grupo) => guiasDoGrupo(grupo.id));

export const areas: SitePageLink[] = [
  { label: "Início", href: "/" },
  { label: "Guias", href: "/guias" },
  { label: "Comunidade", href: "/historia" },
];

export const sitePageLinks: SitePageLink[] = [
  { label: "Início", href: "/" },
  { label: "Guias", href: "/guias" },
  { label: "História", href: "/historia" },
  ...guias.map((guia) => ({ label: guia.titulo, href: guiaHref(guia.slug) })),
];

export const redirecionamentos = guias.map((guia) => ({
  source: guia.rotaAntiga,
  destination: guiaHref(guia.slug),
  permanent: true,
}));

export const discordUrl = "https://discord.gg/Ec2YPWTN9E";

// Contato real exigido pelas regras da Mojang no aviso de site não oficial (docs/CREDITOS.md).
// shortcut: vazio até o dono informar o e-mail; o rodapé mostra "contato a definir" enquanto isso.
export const contatoEmail = "";

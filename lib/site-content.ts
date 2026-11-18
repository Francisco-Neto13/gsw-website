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
    estado: "em-construcao",
    rotaAntiga: "/montarias",
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
    resumo: "Hardcore, Ironman, Craftsman, Hunted e combinações.",
    grupo: "especiais",
    estado: "completo",
    rotaAntiga: "/modos-especiais",
  },
  {
    slug: "festivais",
    palavrasChave: "festival heroes bonfire spirits blizzard",
    titulo: "Festivais",
    resumo: "Heroes, Bonfire, Spirits e Blizzard.",
    grupo: "especiais",
    estado: "em-construcao",
    rotaAntiga: "/festivais",
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

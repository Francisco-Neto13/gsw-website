export type SectionLink = {
  label: string;
  href: string;
};

export type SitePageLink = {
  label: string;
  href: string;
};

export const sitePageLinks: SitePageLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Historia", href: "/historia" },
  { label: "Leveling", href: "/leveling" },
  { label: "Profissoes", href: "/professions" },
  { label: "Lootrun", href: "/lootrun" },
  { label: "Shares", href: "/silverbull-shares" },
  { label: "Modos", href: "/modos-especiais" },
  { label: "World Events", href: "/world-events" },
  { label: "Raids", href: "/raids" },
  { label: "Dungeons", href: "/dungeons" },
];

export const homeSectionLinks: SectionLink[] = [
  { label: "Inicio", href: "#gsw" },
  { label: "Sobre", href: "#sobre" },
];

export const historySectionLinks: SectionLink[] = [
  { label: "Inicio", href: "#topo" },
  { label: "Historia", href: "#historia" },
  { label: "Membros", href: "#membros" },
  { label: "Pilares", href: "#pilares" },
  { label: "Galeria", href: "#galeria" },
  { label: "Essencia", href: "#essencia" },
];

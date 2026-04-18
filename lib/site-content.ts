export type SectionLink = {
  label: string;
  href: string;
};

export type SitePageLink = {
  label: string;
  href: string;
};

export const sitePageLinks: SitePageLink[] = [
  { label: "In\u00edcio", href: "/" },
  { label: "Hist\u00f3ria", href: "/historia" },
  { label: "Leveling", href: "/leveling" },
  { label: "Profiss\u00f5es", href: "/professions" },
  { label: "Lootrun", href: "/lootrun" },
  { label: "Silverbull Shares", href: "/silverbull-shares" },
  { label: "Modos", href: "/modos-especiais" },
  { label: "World Events", href: "/world-events" },
  { label: "Raids", href: "/raids" },
  { label: "Dungeons", href: "/dungeons" },
];

export const homeSectionLinks: SectionLink[] = [
  { label: "In\u00edcio", href: "#gsw" },
  { label: "Sobre", href: "#sobre" },
];

export const historySectionLinks: SectionLink[] = [
  { label: "In\u00edcio", href: "#topo" },
  { label: "Hist\u00f3ria", href: "#historia" },
  { label: "Membros", href: "#membros" },
  { label: "Pilares", href: "#pilares" },
  { label: "Galeria", href: "#galeria" },
  { label: "Ess\u00eancia", href: "#essencia" },
];

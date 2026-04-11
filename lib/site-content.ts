export type SectionLink = {
  label: string;
  href: string;
};

export type SitePageLink = {
  label: string;
  href: string;
};

export const sitePageLinks: SitePageLink[] = [
  { label: "Início", href: "/" },
  { label: "História", href: "/historia" },
  { label: "Leveling", href: "/leveling" },
  { label: "Profissões", href: "/professions" },
  { label: "Raids", href: "/raids" },
];

export const homeSectionLinks: SectionLink[] = [
  { label: "Início", href: "#gsw" },
  { label: "Sobre", href: "#sobre" },
];

export const historySectionLinks: SectionLink[] = [
  { label: "Início", href: "#topo" },
  { label: "História", href: "#historia" },
  { label: "Membros", href: "#membros" },
  { label: "Pilares", href: "#pilares" },
  { label: "Galeria", href: "#galeria" },
  { label: "Essência", href: "#essencia" },
];

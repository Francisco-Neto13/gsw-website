export type SectionLink = {
  label: string;
  href: string;
};

export type SitePageLink = {
  label: string;
  href: string;
};

export type NavbarMenuSection = {
  title: string;
  links: SitePageLink[];
};

export type NavbarLinkItem = {
  type: "link";
  label: string;
  href: string;
};

export type NavbarMenuItem = {
  type: "menu";
  label: string;
  matchHrefs: string[];
  sections: NavbarMenuSection[];
};

export type NavbarItem = NavbarLinkItem | NavbarMenuItem;

export const sitePageLinks: SitePageLink[] = [
  { label: "In\u00EDcio", href: "/" },
  { label: "Hist\u00F3ria", href: "/historia" },
  { label: "Leveling", href: "/leveling" },
  { label: "Profiss\u00F5es", href: "/professions" },
  { label: "Montarias", href: "/montarias" },
  { label: "Festivais", href: "/festivais" },
  { label: "Lootrun", href: "/lootrun" },
  { label: "Shares", href: "/silverbull-shares" },
  { label: "Modos", href: "/modos-especiais" },
  { label: "World Events", href: "/world-events" },
  { label: "Raids", href: "/raids" },
  { label: "Dungeons", href: "/dungeons" },
];

const guideProgressionLinks: SitePageLink[] = [
  { label: "Leveling", href: "/leveling" },
  { label: "Profiss\u00F5es", href: "/professions" },
  { label: "Montarias", href: "/montarias" },
];

const guideEndgameLinks: SitePageLink[] = [
  { label: "Lootrun", href: "/lootrun" },
  { label: "Raids", href: "/raids" },
  { label: "Dungeons", href: "/dungeons" },
  { label: "World Events", href: "/world-events" },
];

const guideSpecialLinks: SitePageLink[] = [
  { label: "Modos Especiais", href: "/modos-especiais" },
  { label: "Festivais", href: "/festivais" },
];

const communityLinks: SitePageLink[] = [
  { label: "Hist\u00F3ria", href: "/historia" },
  { label: "Shares", href: "/silverbull-shares" },
];

export const navbarItems: NavbarItem[] = [
  { type: "link", label: "In\u00EDcio", href: "/" },
  {
    type: "menu",
    label: "Guias",
    matchHrefs: [
      ...guideProgressionLinks.map((item) => item.href),
      ...guideEndgameLinks.map((item) => item.href),
      ...guideSpecialLinks.map((item) => item.href),
    ],
    sections: [
      { title: "Progress\u00E3o", links: guideProgressionLinks },
      { title: "Endgame", links: guideEndgameLinks },
      { title: "Especiais", links: guideSpecialLinks },
    ],
  },
  {
    type: "menu",
    label: "Comunidade",
    matchHrefs: communityLinks.map((item) => item.href),
    sections: [{ title: "GsW", links: communityLinks }],
  },
];

export const homeSectionLinks: SectionLink[] = [
  { label: "In\u00EDcio", href: "#gsw" },
  { label: "Sobre", href: "#sobre" },
];

export const historySectionLinks: SectionLink[] = [
  { label: "In\u00EDcio", href: "#topo" },
  { label: "Hist\u00F3ria", href: "#historia" },
  { label: "Membros", href: "#membros" },
  { label: "Pilares", href: "#pilares" },
  { label: "Galeria", href: "#galeria" },
  { label: "Ess\u00EAncia", href: "#essencia" },
];

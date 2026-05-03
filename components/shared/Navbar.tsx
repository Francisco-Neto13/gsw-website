"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navbarItems, type NavbarMenuItem } from "@/lib/site-content";
import ThemeToggle from "@/components/shared/ThemeToggle";

type NavbarProps = {
  currentPath: string;
};

type InPageLink = {
  id: string;
  label: string;
};

const SECTION_TOP_OFFSET_PX = 112;

function toSlug(value: string) {
  const normalized = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "section";
}

function getInPageLinks() {
  const main = document.querySelector("main");
  if (!main) {
    return [];
  }

  const slugUseCount = new Map<string, number>();
  const links: InPageLink[] = [];
  const children = Array.from(main.children) as HTMLElement[];

  children.forEach((child) => {
    const tagName = child.tagName.toLowerCase();
    if (tagName !== "section" && tagName !== "article") {
      return;
    }

    const heading = child.querySelector("h2");
    const label = heading?.textContent?.trim();
    if (!label) {
      return;
    }

    const baseSlug = toSlug(label);
    const existingCount = slugUseCount.get(baseSlug) ?? 0;
    const nextCount = existingCount + 1;
    slugUseCount.set(baseSlug, nextCount);
    const resolvedSlug = nextCount > 1 ? `${baseSlug}-${nextCount}` : baseSlug;

    if (!child.id) {
      child.id = resolvedSlug;
    }

    const scrollMarginTop = `${SECTION_TOP_OFFSET_PX}px`;
    if (child.style.scrollMarginTop !== scrollMarginTop) {
      child.style.scrollMarginTop = scrollMarginTop;
    }
    links.push({ id: child.id, label });
  });

  return links;
}

function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId);
  if (!target) {
    return;
  }

  const y = target.getBoundingClientRect().top + window.scrollY - SECTION_TOP_OFFSET_PX;
  window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
}

function isMenuItemActive(item: NavbarMenuItem, activePath: string) {
  return item.matchHrefs.includes(activePath);
}

export default function Navbar({ currentPath }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [inPageLinks, setInPageLinks] = useState<InPageLink[]>([]);
  const [mobileExpandedMenus, setMobileExpandedMenus] = useState<string[]>([]);
  const navRootRef = useRef<HTMLElement | null>(null);
  const sectionsMenuRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const syncInPageLinks = () => {
      const nextLinks = getInPageLinks();
      setInPageLinks((previous) => {
        if (
          previous.length === nextLinks.length &&
          previous.every((item, index) => item.id === nextLinks[index]?.id && item.label === nextLinks[index]?.label)
        ) {
          return previous;
        }
        return nextLinks;
      });
    };

    const frame = window.requestAnimationFrame(() => {
      setSectionsOpen(false);
      syncInPageLinks();
    });
    const delayedSync = window.setTimeout(syncInPageLinks, 180);
    window.addEventListener("resize", syncInPageLinks);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(delayedSync);
      window.removeEventListener("resize", syncInPageLinks);
    };
  }, [currentPath]);

  useEffect(() => {
    if (!sectionsOpen && !openDesktopMenu) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!navRootRef.current?.contains(event.target as Node)) {
        setSectionsOpen(false);
        setOpenDesktopMenu(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSectionsOpen(false);
        setOpenDesktopMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openDesktopMenu, sectionsOpen]);

  const activePath = pathname ?? currentPath;
  const showInPageDropdown = inPageLinks.length >= 2;
  const showSectionsShortcut = showInPageDropdown && activePath !== "/";

  return (
    <nav ref={navRootRef} className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:grid xl:h-[72px] xl:grid-cols-3">
        <div className="group flex items-center justify-self-start gap-3">
          <Image
            src="/icon.webp"
            alt="GsW Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full transition-transform group-hover:scale-105"
            priority
          />
          <span className="relative text-xs font-medium tracking-widest text-zinc-400 transition-colors group-hover:text-gsw">
            GsW
          </span>
        </div>

        <ul className="hidden justify-self-center gap-4 2xl:gap-8 xl:flex">
          {navbarItems.map((item) => {
            if (item.type === "link") {
              const isActive = activePath === item.href;

              return (
                <li key={item.href} className="relative shrink-0">
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      setOpenDesktopMenu(null);
                      setSectionsOpen(false);
                    }}
                    className={`inline-flex h-7 items-center whitespace-nowrap border-b text-[11px] font-medium uppercase tracking-[0.18em] transition-colors 2xl:text-xs ${
                      isActive
                        ? "pointer-events-none border-gsw text-white"
                        : "border-transparent text-zinc-400 hover:border-gsw/80 hover:text-gsw"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            const isActive = isMenuItemActive(item, activePath);
            const menuSlug = toSlug(item.label);
            const menuId = `navbar-menu-${menuSlug}`;
            const isOpen = openDesktopMenu === item.label;

            return (
              <li key={item.label} className="relative shrink-0">
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  aria-controls={menuId}
                  onClick={() => {
                    setSectionsOpen(false);
                    setOpenDesktopMenu((current) => (current === item.label ? null : item.label));
                  }}
                  className={`inline-flex h-7 items-center gap-1.5 whitespace-nowrap border-b text-[11px] font-medium uppercase tracking-[0.18em] transition-colors 2xl:text-xs ${
                    isActive
                      ? "border-gsw text-white"
                      : "border-transparent text-zinc-400 hover:border-gsw/80 hover:text-gsw"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`text-[10px] leading-none transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    {"\u25BE"}
                  </span>
                </button>

                {isOpen ? (
                  <div
                    id={menuId}
                    role="menu"
                    className="absolute top-[calc(100%+0.55rem)] left-0 z-50 w-[360px] rounded-xl border border-white/10 bg-black/95 p-4 shadow-2xl"
                  >
                    <div className="grid gap-4">
                      {item.sections.map((section) => (
                        <div key={`${item.label}-${section.title}`}>
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-gsw/80">
                            {section.title}
                          </p>
                          <ul className="grid gap-1.5">
                            {section.links.map((link) => {
                              const isChildActive = activePath === link.href;
                              return (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    role="menuitem"
                                    aria-current={isChildActive ? "page" : undefined}
                                    onClick={() => setOpenDesktopMenu(null)}
                                    className={`block rounded-md px-2.5 py-2 text-sm transition-colors ${
                                      isChildActive
                                        ? "bg-gsw/15 text-white"
                                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                                    }`}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            );
          })}

          {showSectionsShortcut ? (
            <li key="sections-shortcut" ref={sectionsMenuRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => {
                  setOpenDesktopMenu(null);
                  setSectionsOpen((current) => !current);
                }}
                className={`inline-flex h-7 items-center gap-1.5 whitespace-nowrap border-b text-[11px] font-medium uppercase tracking-[0.18em] transition-colors 2xl:text-xs ${
                  sectionsOpen
                    ? "border-gsw text-white"
                    : "border-transparent text-zinc-400 hover:border-gsw/80 hover:text-gsw"
                }`}
                aria-label="Abrir seções da página atual"
                aria-haspopup="menu"
                aria-expanded={sectionsOpen}
                aria-controls="navbar-in-page-menu"
              >
                <span>Seções</span>
                <span
                  className={`text-[10px] leading-none transition-transform duration-200 ${sectionsOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  {"\u25BE"}
                </span>
              </button>

              {sectionsOpen ? (
                <div
                  id="navbar-in-page-menu"
                  role="menu"
                  className="absolute top-[calc(100%+0.55rem)] left-0 z-50 w-72 overflow-hidden rounded-xl border border-white/10 bg-black/95 shadow-2xl"
                >
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setSectionsOpen(false);
                    }}
                    className="block w-full border-b border-white/10 px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white/5"
                  >
                    Topo
                  </button>
                  <ul className="max-h-[60vh] overflow-y-auto py-1">
                    {inPageLinks.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            scrollToSection(item.id);
                            setSectionsOpen(false);
                          }}
                          className="block w-full px-4 py-2.5 text-left text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ) : null}
        </ul>

        <div className="flex items-center justify-end justify-self-end gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-8 w-8 cursor-pointer flex-col items-end justify-center gap-1.5 xl:hidden"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 bg-zinc-400 transition-all duration-300 ${
                menuOpen ? "w-6 translate-y-2 rotate-45 !bg-gsw" : "w-6"
              }`}
            />
            <span
              className={`block h-0.5 bg-zinc-400 transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-zinc-400 transition-all duration-300 ${
                menuOpen ? "w-6 -translate-y-2 -rotate-45 !bg-gsw" : "w-5"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`bg-black/95 transition-[max-height] duration-300 xl:hidden ${
          menuOpen
            ? "max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 overscroll-contain"
            : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 py-6">
          {navbarItems.map((item) => {
            if (item.type === "link") {
              const isActive = activePath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block whitespace-nowrap border-b border-white/5 py-4 text-xs font-medium uppercase tracking-widest transition-colors last:border-0 ${
                      isActive ? "pointer-events-none text-white" : "text-zinc-400 hover:text-gsw"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            const expanded = mobileExpandedMenus.includes(item.label);

            return (
              <li key={item.label} className="border-b border-white/5 pb-2">
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpandedMenus((current) =>
                      current.includes(item.label) ? current.filter((value) => value !== item.label) : [...current, item.label]
                    )
                  }
                  className="flex w-full items-center justify-between py-3 text-left text-xs font-semibold uppercase tracking-widest text-zinc-200"
                  aria-expanded={expanded}
                  aria-controls={`mobile-group-${toSlug(item.label)}`}
                >
                  <span>{item.label}</span>
                  <span className={`text-xs transition-transform ${expanded ? "rotate-180 text-gsw" : "text-zinc-500"}`}>{"\u25BE"}</span>
                </button>

                {expanded ? (
                  <div id={`mobile-group-${toSlug(item.label)}`} className="space-y-3 pb-2">
                    {item.sections.map((section) => (
                      <div key={`${item.label}-${section.title}`}>
                        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-gsw/70">
                          {section.title}
                        </p>
                        <ul className="space-y-1">
                          {section.links.map((link) => {
                            const isChildActive = activePath === link.href;
                            return (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  onClick={() => setMenuOpen(false)}
                                  aria-current={isChildActive ? "page" : undefined}
                                  className={`block rounded-md px-2 py-2 text-sm transition-colors ${
                                    isChildActive
                                      ? "bg-gsw/15 text-white"
                                      : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                                  }`}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}


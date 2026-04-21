"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { sitePageLinks } from "@/lib/site-content";

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

export default function Navbar({ currentPath }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const [inPageLinks, setInPageLinks] = useState<InPageLink[]>([]);
  const sectionsMenuRef = useRef<HTMLLIElement | null>(null);

  const visiblePageLinks = sitePageLinks.filter((link) =>
    !link.label.toLowerCase().includes("comunidade") &&
    !link.href.toLowerCase().includes("comunidade") &&
    !link.href.toLowerCase().includes("community")
  );

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
    if (!sectionsOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!sectionsMenuRef.current?.contains(event.target as Node)) {
        setSectionsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSectionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [sectionsOpen]);

  const activePath = pathname ?? currentPath;
  const showInPageDropdown = inPageLinks.length >= 2;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:grid xl:h-[72px] xl:grid-cols-3">
        <Link href="/" className="group flex items-center justify-self-start gap-3">
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
        </Link>

        <ul className="hidden justify-self-center gap-4 2xl:gap-8 xl:flex">
          {visiblePageLinks.map((link) => {
            const isActive = activePath === link.href;
            const canShowSections = isActive && showInPageDropdown;

            return (
              <li
                key={link.href}
                ref={canShowSections ? sectionsMenuRef : null}
                className={`relative shrink-0 ${canShowSections ? "pr-1" : ""}`}
              >
                <div className="flex items-center gap-1.5">
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => {
                      if (!isActive) {
                        setSectionsOpen(false);
                      }
                    }}
                    className={`inline-flex h-7 items-center whitespace-nowrap border-b text-[11px] font-medium uppercase tracking-[0.18em] transition-colors 2xl:text-xs ${
                      isActive
                        ? "pointer-events-none border-gsw text-white"
                        : "border-transparent text-zinc-400 hover:border-gsw/80 hover:text-gsw"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {canShowSections ? (
                    <button
                      type="button"
                      onClick={() => setSectionsOpen((current) => !current)}
                      className="flex h-5 w-5 items-center justify-center text-zinc-400 transition-colors hover:text-gsw"
                      aria-label="Abrir secoes da pagina atual"
                      aria-haspopup="menu"
                      aria-expanded={sectionsOpen}
                      aria-controls="navbar-in-page-menu"
                    >
                      <span
                        className={`text-[10px] transition-transform duration-200 ${sectionsOpen ? "rotate-180 text-gsw" : ""}`}
                        aria-hidden="true"
                      >
                        v
                      </span>
                    </button>
                  ) : null}
                </div>

                {canShowSections && sectionsOpen ? (
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
            );
          })}
        </ul>

        <div className="flex items-center justify-end justify-self-end">
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
          {visiblePageLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={activePath === link.href ? "page" : undefined}
                className={`block whitespace-nowrap border-b border-white/5 py-4 text-xs font-medium uppercase tracking-widest transition-colors last:border-0 ${
                  activePath === link.href
                    ? "pointer-events-none text-white"
                    : "text-zinc-400 hover:text-gsw"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}


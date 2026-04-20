"use client";

import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { usePathname } from "next/navigation";

interface TocItem {
  id: string;
  label: string;
}

interface InPageNavigationProps {
  minSections?: number;
}

const TOP_OFFSET_PX = 112;

function toSlug(value: string) {
  const normalized = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "section";
}

function scrollToElement(id: string) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const y = target.getBoundingClientRect().top + window.scrollY - TOP_OFFSET_PX;
  window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
}

export default function InPageNavigation({ minSections = 2 }: InPageNavigationProps) {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  const itemIds = useMemo(() => items.map((item) => item.id), [items]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const main = document.querySelector("main");
      if (!main) {
        setItems([]);
        setActiveId("");
        return;
      }

      const slugUseCount = new Map<string, number>();
      const nextItems: TocItem[] = [];
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

        child.style.scrollMarginTop = `${TOP_OFFSET_PX}px`;

        nextItems.push({
          id: child.id,
          label,
        });
      });

      setItems(nextItems);
      setActiveId("");
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    if (itemIds.length === 0) {
      return;
    }

    let rafId = 0;
    const setCurrentSection = () => {
      if (window.scrollY < TOP_OFFSET_PX) {
        setActiveId("");
        return;
      }

      const marker = window.scrollY + TOP_OFFSET_PX + 8;
      let currentId = itemIds[0];

      itemIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) {
          return;
        }

        if (section.offsetTop <= marker) {
          currentId = id;
        }
      });

      setActiveId(currentId);
    };

    const handleScroll = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }

      rafId = window.requestAnimationFrame(setCurrentSection);
    };

    setCurrentSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [itemIds]);

  const handleBackToTop = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveId("");
  };

  const handleGoToSection = (event: MouseEvent<HTMLElement>, id: string) => {
    event.preventDefault();
    scrollToElement(id);
    setActiveId(id);
  };

  if (items.length < minSections) {
    return null;
  }

  return (
    <div className="sticky top-[72px] z-30 border-y border-white/10 bg-black/90 px-4 py-3 backdrop-blur lg:hidden">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.4em] text-gsw/90">Nesta página</p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <a
            href="#top"
            onClick={handleBackToTop}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              activeId === ""
                ? "border-gsw/70 bg-gsw/20 text-white"
                : "border-white/15 bg-black/40 text-zinc-400 hover:border-gsw/35 hover:text-zinc-200"
            }`}
          >
            Topo
          </a>
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleGoToSection(event, item.id)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-gsw/70 bg-gsw/20 text-white"
                    : "border-white/15 bg-black/40 text-zinc-400 hover:border-gsw/35 hover:text-zinc-200"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { sitePageLinks } from "@/lib/site-content";

type NavbarProps = {
  currentPath: string;
};

export default function Navbar({ currentPath }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const visiblePageLinks = sitePageLinks.filter((link) =>
    !link.label.toLowerCase().includes("comunidade") &&
    !link.href.toLowerCase().includes("comunidade") &&
    !link.href.toLowerCase().includes("community")
  );

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:grid sm:grid-cols-3">
        <Link href="/" className="group flex items-center gap-3 justify-self-start">
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

        <ul className="hidden justify-self-center gap-8 sm:flex">
          {visiblePageLinks.map((link) => {
            const isActive = currentPath === link.href;

            return (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className={`relative whitespace-nowrap text-xs font-medium uppercase tracking-widest transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:transition-all ${
                    isActive
                      ? "text-white after:w-full after:bg-gsw"
                      : "text-zinc-400 hover:text-gsw after:w-0 after:bg-gsw hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-end justify-self-end">
          <button
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-8 w-8 cursor-pointer flex-col items-end justify-center gap-1.5 sm:hidden"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-0.5 bg-zinc-400 transition-all duration-300 ${menuOpen ? "w-6 translate-y-2 rotate-45 !bg-gsw" : "w-6"}`} />
            <span className={`block h-0.5 bg-zinc-400 transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
            <span className={`block h-0.5 bg-zinc-400 transition-all duration-300 ${menuOpen ? "w-6 -translate-y-2 -rotate-45 !bg-gsw" : "w-5"}`} />
          </button>
        </div>
      </div>

      <div className={`overflow-hidden bg-black/95 transition-all duration-300 sm:hidden ${menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"}`}>
        <ul className="flex flex-col gap-2 px-6 py-6">
          {visiblePageLinks.map((link) => (
            <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block whitespace-nowrap border-b border-white/5 py-4 text-xs font-medium uppercase tracking-widest transition-colors last:border-0 ${
                  currentPath === link.href ? "text-white" : "text-zinc-400 hover:text-gsw"
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

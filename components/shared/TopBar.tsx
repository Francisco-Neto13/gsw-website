"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Busca from "@/components/shared/Busca";
import GuiaNavLista from "@/components/shared/GuiaNavLista";
import { areas, discordUrl } from "@/lib/site-content";

const areaAtiva = (href: string, pathname: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

function IconeDiscord() {
  return (
    <svg aria-hidden width="18" height="14" viewBox="0 0 127.14 96.36" fill="currentColor">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.48,80.21h0A105.73,105.73,0,0,0,32.47,96.36,77.7,77.7,0,0,0,39.2,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.73,11.1,105.32,105.32,0,0,0,32.05-16.14h0C129.58,52.84,121.21,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.07,65.69,84.69,65.69Z" />
    </svg>
  );
}

export default function TopBar() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDialogElement>(null);

  // Troca de página fecha o menu do celular.
  useEffect(() => {
    menuRef.current?.close();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 h-[var(--topbar-h)] border-b border-caixa-fora bg-chao shadow-[inset_0_-1px_0_rgba(113,22,173,0.55)]">
      <div className="casca flex h-full items-center gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 rounded-md" aria-label="GsW, página inicial">
          <Image src="/icon.webp" alt="" width={32} height={32} priority className="rounded-full" />
          <span className="font-titulo text-titulo-4 leading-none text-texto">GsW</span>
        </Link>

        <nav aria-label="Áreas do site" className="ml-4 hidden md:block">
          <ul className="flex items-center gap-1">
            {areas.map((area) => {
              const ativo = areaAtiva(area.href, pathname);
              return (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    aria-current={ativo ? "page" : undefined}
                    className={`relative flex h-[var(--topbar-h)] items-center px-3 text-apoio transition-colors duration-150 ${
                      ativo ? "text-texto" : "text-texto-2 hover:text-texto"
                    }`}
                  >
                    {area.label}
                    {ativo ? (
                      <span aria-hidden className="absolute inset-x-3 bottom-0 h-0.5 rounded-t bg-violeta-borda" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Busca />
          <a
            href={discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-2 rounded-md px-3 text-apoio text-texto-2 transition-colors duration-150 hover:bg-elevada hover:text-texto sm:flex"
          >
            <IconeDiscord />
            Discord
          </a>
          <button
            type="button"
            onClick={() => menuRef.current?.showModal()}
            className="flex h-11 w-11 items-center justify-center rounded-md text-texto-2 hover:bg-elevada hover:text-texto md:hidden"
            aria-label="Abrir menu"
          >
            <Menu aria-hidden size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <dialog
        ref={menuRef}
        aria-label="Menu"
        className="m-0 ml-auto h-dvh max-h-dvh w-[min(22rem,88vw)] border-l border-caixa-fora bg-chao p-0 text-texto backdrop:bg-black/70"
        onClick={(evento) => {
          if (evento.target === menuRef.current) menuRef.current?.close();
        }}
      >
        <div className="flex h-[var(--topbar-h)] items-center justify-between border-b border-linha px-4">
          <span className="font-titulo text-titulo-4">Menu</span>
          <button
            type="button"
            onClick={() => menuRef.current?.close()}
            className="flex h-11 w-11 items-center justify-center rounded-md text-texto-2 hover:bg-elevada hover:text-texto"
            aria-label="Fechar menu"
          >
            <X aria-hidden size={22} strokeWidth={1.75} />
          </button>
        </div>
        <nav aria-label="Menu do site" className="flex flex-col gap-6 overflow-y-auto px-2 py-4">
          <ul className="flex flex-col gap-0.5">
            {areas.map((area) => (
              <li key={area.href}>
                <Link
                  href={area.href}
                  aria-current={areaAtiva(area.href, pathname) ? "page" : undefined}
                  className="flex min-h-11 items-center rounded-md px-3 text-corpo text-texto-2 hover:bg-elevada hover:text-texto aria-[current=page]:text-texto aria-[current=page]:underline aria-[current=page]:decoration-violeta-borda aria-[current=page]:decoration-2"
                >
                  {area.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-2 rounded-md px-3 text-corpo text-texto-2 hover:bg-elevada hover:text-texto">
                <IconeDiscord />
                Discord
              </a>
            </li>
          </ul>
          <div className="border-t border-linha pt-4">
            <GuiaNavLista onNavigate={() => menuRef.current?.close()} />
          </div>
        </nav>
      </dialog>
    </header>
  );
}

"use client";

import type { ReactNode } from "react";

/** Abre a mesma busca da top bar (Ctrl+K), por evento. */
export default function BotaoBuscar({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("gsw:buscar"))}
      className="flex h-11 items-center gap-2 rounded-md bg-gsw px-4 font-medium text-white hover:bg-[#7f1bc2]"
    >
      {children}
    </button>
  );
}

"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Entrada de página a cada navegação: a chave remonta o conteúdo e o keyframe `pagina-entra` roda de novo.
 * Entre guias a chave é a mesma ("/guias/"), para a sidebar e o índice não piscarem: quem entra é só o
 * artigo (GuiaLayout tem a própria chave). Do keyframe só sobram opacidade e transform "none" no fim,
 * então nada prende os elementos sticky.
 */
export default function TransicaoDePagina({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const chave = pathname.startsWith("/guias/") ? "/guias/" : pathname;
  return (
    <div key={chave} className="pagina-entra">
      {children}
    </div>
  );
}

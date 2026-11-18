"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { guiaHref, guiasDoGrupo, grupos } from "@/lib/site-content";

type GuiaNavListaProps = {
  /** Chamado ao escolher um link (fecha a gaveta do celular). */
  onNavigate?: () => void;
};

/** Lista de guias por grupo: sidebar no desktop e menu no celular. */
export default function GuiaNavLista({ onNavigate }: GuiaNavListaProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      {grupos.map((grupo) => (
        <div key={grupo.id}>
          <p className="mb-1.5 px-3 text-[0.8125rem] font-bold text-texto-3">{grupo.titulo}</p>
          <ul className="flex flex-col gap-0.5">
            {guiasDoGrupo(grupo.id).map((guia) => {
              const href = guiaHref(guia.slug);
              const ativo = pathname === href;
              return (
                <li key={guia.slug}>
                  <Link
                    href={href}
                    onClick={onNavigate}
                    aria-current={ativo ? "page" : undefined}
                    className={`flex items-center justify-between gap-2 rounded-md px-3 py-2 text-[0.95rem] leading-tight transition-colors duration-150 ${
                      ativo
                        ? "bg-gsw font-medium text-white"
                        : "text-texto-2 hover:bg-elevada hover:text-texto"
                    }`}
                  >
                    <span>{guia.titulo}</span>
                    {guia.estado === "em-construcao" ? (
                      <span
                        className={`rounded border border-dashed px-1.5 py-px text-[0.7rem] ${
                          ativo ? "border-white/60 text-white" : "border-texto-3/60 text-texto-3"
                        }`}
                      >
                        em breve
                      </span>
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

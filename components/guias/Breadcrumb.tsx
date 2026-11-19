import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { grupos, type Guia } from "@/lib/site-content";

type Passo = { rotulo: string; href?: string };

/** Trilha de navegação: o último passo é a página atual. */
export function Trilha({ passos }: { passos: Passo[] }) {
  return (
    <nav aria-label="Você está em">
      <ol className="flex flex-wrap items-center gap-1 text-apoio text-texto-3">
        {passos.map((passo, indice) => {
          const atual = indice === passos.length - 1;
          return (
            <Fragment key={passo.rotulo}>
              {indice > 0 ? (
                <li aria-hidden>
                  <ChevronRight size={14} strokeWidth={1.75} />
                </li>
              ) : null}
              <li aria-current={atual ? "page" : undefined} className={atual ? "text-texto-2" : undefined}>
                {passo.href && !atual ? (
                  <Link href={passo.href} className="hover:text-texto-2">
                    {passo.rotulo}
                  </Link>
                ) : (
                  passo.rotulo
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default function Breadcrumb({ guia }: { guia: Guia }) {
  const grupo = grupos.find((item) => item.id === guia.grupo);
  return <Trilha passos={[{ rotulo: "Guias", href: "/guias" }, { rotulo: grupo?.titulo ?? "" }, { rotulo: guia.titulo }]} />;
}

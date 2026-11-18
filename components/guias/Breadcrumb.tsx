import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { grupos, type Guia } from "@/lib/site-content";

export default function Breadcrumb({ guia }: { guia: Guia }) {
  const grupo = grupos.find((item) => item.id === guia.grupo);
  return (
    <nav aria-label="Você está em">
      <ol className="flex flex-wrap items-center gap-1 text-apoio text-texto-3">
        <li>
          <Link href="/guias" className="hover:text-texto-2">
            Guias
          </Link>
        </li>
        <li aria-hidden>
          <ChevronRight size={14} strokeWidth={1.75} />
        </li>
        <li>{grupo?.titulo}</li>
        <li aria-hidden>
          <ChevronRight size={14} strokeWidth={1.75} />
        </li>
        <li aria-current="page" className="text-texto-2">
          {guia.titulo}
        </li>
      </ol>
    </nav>
  );
}

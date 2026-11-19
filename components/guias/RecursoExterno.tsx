import { ExternalLink, type LucideIcon } from "lucide-react";

type RecursoExternoProps = { titulo: string; descricao: string; href?: string; Icone: LucideIcon };

/** Cartão de ferramenta ou página externa, abrindo em nova aba. Sem link ainda: tracejado ("ainda não existe"). */
export default function RecursoExterno({ titulo, descricao, href, Icone }: RecursoExternoProps) {
  const corpo = (
    <>
      <Icone aria-hidden size={22} strokeWidth={1.75} className="mt-0.5 shrink-0 text-violeta" />
      <span className="flex-1">
        <span className="flex items-center gap-1.5 font-bold text-texto">
          {titulo}
          {href ? <ExternalLink aria-hidden size={14} strokeWidth={1.75} className="text-texto-3" /> : null}
        </span>
        <span className="mt-1 block text-apoio text-texto-2">{descricao}</span>
        {href ? null : <span className="mt-2 block text-detalhe text-texto-3">Link a definir</span>}
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full gap-3 rounded-md border border-linha bg-carvao px-4 py-4 transition-colors hover:border-violeta-borda hover:bg-elevada"
    >
      {corpo}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  ) : (
    <div className="flex h-full gap-3 rounded-md border border-dashed border-linha-forte px-4 py-4">{corpo}</div>
  );
}

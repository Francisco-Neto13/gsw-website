import { CircleAlert, CircleCheck, Hammer } from "lucide-react";
import type { Guia } from "@/lib/site-content";

/** Estado do guia por ícone e texto, nunca só por cor. */
export default function SeloVersao({ guia }: { guia: Guia }) {
  if (guia.estado === "em-construcao") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded border border-dashed border-texto-3/70 px-2 py-0.5 text-[0.9rem] text-texto-2">
        <Hammer aria-hidden size={14} strokeWidth={1.75} />
        Em construção
      </span>
    );
  }
  if (guia.versaoDoJogo) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded border border-linha-forte px-2 py-0.5 text-[0.9rem] text-texto-2">
        <CircleCheck aria-hidden size={14} strokeWidth={1.75} className="text-violeta" />
        Revisado para a {guia.versaoDoJogo}
        {guia.atualizadoEm ? <span className="text-texto-3">· {guia.atualizadoEm}</span> : null}
      </span>
    );
  }
  return (
    <span title="Este guia ainda não foi revisado para a versão atual do jogo; pode haver dados desatualizados." className="inline-flex items-center gap-1.5 rounded border border-ambar/50 px-2 py-0.5 text-[0.9rem] text-ambar">
      <CircleAlert aria-hidden size={14} strokeWidth={1.75} />
      Revisão pendente
    </span>
  );
}

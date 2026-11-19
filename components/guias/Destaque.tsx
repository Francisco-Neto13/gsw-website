import { CircleAlert, Info, Lightbulb } from "lucide-react";
import TextoComTermos from "@/components/guias/TextoComTermos";

type DestaqueProps = { tipo: "info" | "aviso" | "dica"; titulo: string; texto: string; className?: string };

const estilos = {
  info: { Icone: Info, borda: "border-violeta-borda/50", cor: "text-violeta", rotulo: "Informação" },
  aviso: { Icone: CircleAlert, borda: "border-ambar/40", cor: "text-ambar", rotulo: "Atenção" },
  dica: { Icone: Lightbulb, borda: "border-gold/40", cor: "text-gold", rotulo: "Dica" },
};

/** Bloco de destaque de um guia (informação, atenção ou dica): ícone do site, nunca emoji. */
export default function Destaque({ tipo, titulo, texto, className = "" }: DestaqueProps) {
  const { Icone, borda, cor, rotulo } = estilos[tipo];
  return (
    <aside aria-label={rotulo} className={`flex max-w-leitura gap-3 rounded-md border ${borda} bg-carvao px-4 py-3 ${className}`}>
      <Icone aria-hidden size={20} strokeWidth={1.75} className={`mt-1 shrink-0 ${cor}`} />
      <div>
        <p className="font-bold text-texto">{titulo}</p>
        <p className="mt-1 text-texto-2">
          <TextoComTermos texto={texto} />
        </p>
      </div>
    </aside>
  );
}

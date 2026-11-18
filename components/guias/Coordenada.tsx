"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

/** Coordenada do jogo no meio do texto: um clique copia "x y z" (o formato que o /compass e os mods aceitam). */
export default function Coordenada({ valor }: { valor: string }) {
  const [copiada, setCopiada] = useState(false);
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(valor.replace(/,\s*/g, " "));
      setCopiada(true);
      window.setTimeout(() => setCopiada(false), 1600);
    } catch {
      // Sem permissão de área de transferência: o texto continua visível para copiar à mão.
    }
  };
  return (
    <button
      type="button"
      onClick={copiar}
      title="Copiar coordenada"
      className="numeros mx-0.5 inline-flex items-baseline gap-1.5 rounded-[4px] border border-linha-forte bg-poco px-1.5 py-px align-baseline font-mono text-[0.9em] text-texto transition-colors hover:border-violeta-borda"
    >
      {valor}
      {copiada ? (
        <Check aria-hidden size={13} strokeWidth={2} className="self-center text-violeta" />
      ) : (
        <Copy aria-hidden size={13} strokeWidth={1.75} className="self-center text-texto-3" />
      )}
      <span className="sr-only" aria-live="polite">
        {copiada ? "Coordenada copiada" : "Copiar coordenada"}
      </span>
    </button>
  );
}

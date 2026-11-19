"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { glossario, type ChaveDoGlossario } from "@/lib/glossario";

type TermoProps = {
  id: ChaveDoGlossario;
  /** Texto exibido; padrão é o nome do termo. */
  children?: ReactNode;
};

/**
 * Termo do jogo no meio do texto. Ao passar o mouse, focar pelo teclado ou tocar, abre uma caixa
 * de item com a explicação (a interação de assinatura da direção "Caixa de Item"). Esc fecha.
 */
export default function Termo({ id, children }: TermoProps) {
  const item = glossario[id];
  const caixaId = useId();
  const ancoraRef = useRef<HTMLSpanElement>(null);
  const [aberto, setAberto] = useState(false);
  const [deslocamento, setDeslocamento] = useState(0);
  const [acima, setAcima] = useState(false);

  // Abre já posicionada: recua da borda direita e vira para cima quando não cabe embaixo.
  const abrir = () => {
    const ancora = ancoraRef.current;
    if (ancora) {
      const caixa = ancora.getBoundingClientRect();
      const largura = Math.min(288, window.innerWidth - 32);
      const sobra = window.innerWidth - 16 - (caixa.left + largura);
      setDeslocamento(Math.min(0, sobra));
      // ~190px é a altura da caixa com a explicação mais longa do glossário
      setAcima(window.innerHeight - caixa.bottom < 200 && caixa.top > 200);
    }
    setAberto(true);
  };

  useEffect(() => {
    if (!aberto) return;
    const fecharNoEsc = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", fecharNoEsc);
    return () => window.removeEventListener("keydown", fecharNoEsc);
  }, [aberto]);

  return (
    <span ref={ancoraRef} className="relative inline-block" onMouseEnter={abrir} onMouseLeave={() => setAberto(false)}>
      <button
        type="button"
        aria-describedby={caixaId}
        aria-expanded={aberto}
        onFocus={abrir}
        onBlur={() => setAberto(false)}
        onClick={() => (aberto ? setAberto(false) : abrir())}
        className="cursor-help text-texto underline decoration-violeta/70 decoration-dotted decoration-2 underline-offset-4 hover:decoration-violeta"
      >
        {children ?? item.termo}
      </button>
      <span
        id={caixaId}
        role="tooltip"
        // Fechada, sai do layout; ao abrir, .caixa-abre roda o surgimento e o recorte em degraus (motion.css).
        style={{ left: deslocamento }}
        className={`caixa-item caixa-abre absolute z-50 w-72 whitespace-normal max-w-[calc(100vw-2rem)] px-4 py-3 text-left ${
          acima ? "bottom-full mb-2 [--caixa-y:6px]" : "top-full mt-2 [--caixa-y:-6px]"
        } ${aberto ? "block" : "hidden"}`}
      >
        <span className="block font-titulo text-titulo-4 leading-tight text-violeta">{item.termo}</span>
        <span className="mt-0.5 block text-apoio italic text-texto-3">{item.tipo}</span>
        <span className="mt-2 block text-apoio leading-snug text-texto-2">{item.explicacao}</span>
      </span>
    </span>
  );
}

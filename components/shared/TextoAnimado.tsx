import type { CSSProperties } from "react";

type TextoAnimadoProps = {
  texto: string;
  /** Atraso inicial, em número de palavras (para encadear com outro texto). */
  inicio?: number;
};

/**
 * Título que entra palavra por palavra, cada uma subindo de dentro de uma máscara (`.palavras` em motion.css).
 * É CSS puro: o primeiro desenho já sai com as palavras no ponto de partida, sem esperar JavaScript.
 * Leitores de tela recebem o texto inteiro; as palavras soltas ficam escondidas deles.
 */
export default function TextoAnimado({ texto, inicio = 0 }: TextoAnimadoProps) {
  const palavras = texto.split(/\s+/).filter(Boolean);
  return (
    <span className="palavras">
      <span className="sr-only">{texto}</span>
      <span aria-hidden>
        {palavras.map((palavra, indice) => (
          <span key={`${palavra}-${indice}`}>
            <span className="palavra">
              <span style={{ "--i": inicio + indice } as CSSProperties}>{palavra}</span>
            </span>
            {indice < palavras.length - 1 ? " " : null}
          </span>
        ))}
      </span>
    </span>
  );
}

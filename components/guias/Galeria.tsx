import type { CSSProperties } from "react";
import Figura from "@/components/guias/Figura";
import { tamanhos } from "@/lib/tamanhos";

export type ItemDaGaleria = { src: string; alt: string; legenda?: string };

type GaleriaProps = {
  itens: ItemDaGaleria[];
  /** Proporção do quadro de todas as figuras (ex.: "16 / 9" para cenas, "4 / 3" para telas de interface). */
  proporcao?: string;
  /** Numera as legendas (1., 2., ...) para sequências de passos. */
  numerar?: boolean;
  className?: string;
};

/** Colunas pela quantidade: até 4 lado a lado; 5, 6 e 9 em três; o resto em quatro. */
const colunasPara = (quantidade: number) => (quantidade <= 4 ? quantidade : [5, 6, 9].includes(quantidade) ? 3 : 4);
const sizesPara = (colunas: number) => [tamanhos.artigo, tamanhos.metade, tamanhos.terco, tamanhos.quarto][colunas - 1];

/**
 * Galeria padrão dos guias: todas as figuras no mesmo quadro (mesma altura, legendas na mesma linha de base),
 * colunas pela quantidade, última linha centralizada (sem buraco) e ampliação no clique.
 * Celular: uma por linha; tablet: duas.
 */
export default function Galeria({ itens, proporcao = "16 / 9", numerar = false, className = "" }: GaleriaProps) {
  const colunas = colunasPara(itens.length);
  return (
    <ul className={`galeria ${className}`} style={{ "--colunas": colunas } as CSSProperties}>
      {itens.map((item, indice) => (
        <li key={item.src}>
          <Figura
            src={item.src}
            alt={item.alt}
            legenda={numerar ? `${indice + 1}. ${item.legenda ?? item.alt}` : item.legenda}
            sizes={sizesPara(colunas)}
            proporcao={proporcao}
          />
        </li>
      ))}
    </ul>
  );
}

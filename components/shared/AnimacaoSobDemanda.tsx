"use client";

import { Play } from "lucide-react";
import { type CSSProperties, useEffect, useRef, useState, useSyncExternalStore } from "react";
import dimensoes from "@/lib/dimensoes-imagens.json";

type AnimacaoSobDemandaProps = {
  /** Animação WebP sem perda; o pôster fica ao lado com o sufixo .poster.webp. */
  src: string;
  alt: string;
  className?: string;
};

const posterDe = (src: string) => src.replace(/\.webp$/, ".poster.webp");
const tabela = dimensoes as unknown as Record<string, [number, number]>;

const CONSULTA_MOVIMENTO = "(prefers-reduced-motion: reduce)";
const lerMovimentoReduzido = () => window.matchMedia(CONSULTA_MOVIMENTO).matches;
const assinarMovimento = (avisar: () => void) => {
  const preferencia = window.matchMedia(CONSULTA_MOVIMENTO);
  preferencia.addEventListener("change", avisar);
  return () => preferencia.removeEventListener("change", avisar);
};

/**
 * Pôster sem perda na hora; a animação (sem perda, até alguns MB) só baixa quando chega perto da tela,
 * entra por cima do pôster com fade quando termina de carregar e é descarregada quando sai para longe.
 * Com movimento reduzido, não toca sozinha: o leitor pede.
 */
export default function AnimacaoSobDemanda({ src, alt, className = "" }: AnimacaoSobDemandaProps) {
  const caixa = useRef<HTMLDivElement>(null);
  const [perto, setPerto] = useState(false);
  const [pedida, setPedida] = useState(false);
  const [carregada, setCarregada] = useState(false);
  const reduzido = useSyncExternalStore(assinarMovimento, lerMovimentoReduzido, () => false);

  useEffect(() => {
    const elemento = caixa.current;
    if (!elemento) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        setPerto(entrada.isIntersecting);
        if (!entrada.isIntersecting) setCarregada(false);
      },
      { rootMargin: "400px 0px" },
    );
    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);

  const tocar = perto && (!reduzido || pedida);
  // Os GIFs do jogo têm 360 a 480 px: a caixa mostra em 1x e, em quadro de 960 px ou mais, dobra em 2x exato com
  // pixels nítidos (foundation.css, .animacao-caixa), em vez de esticar em escala quebrada e borrar.
  const medida = tabela[posterDe(src)];
  const caixaEstilo = medida ? ({ "--w": `${medida[0]}px`, aspectRatio: `${medida[0]} / ${medida[1]}` } as CSSProperties) : undefined;
  const classeImagem = medida ? "h-full w-full rounded-lg" : className;

  return (
    <div ref={caixa} className="animacao-quadro relative flex h-full w-full items-center justify-center">
      <div className={medida ? "animacao-caixa relative" : "relative h-full w-full"} style={caixaEstilo}>
      {/* eslint-disable-next-line @next/next/no-img-element -- pôster sem perda gerado por scripts/gif-para-webp.mjs */}
      <img src={posterDe(src)} alt={tocar ? "" : alt} className={classeImagem} loading="lazy" decoding="async" />
      {tocar ? (
        // eslint-disable-next-line @next/next/no-img-element -- animação WebP servida como está; o otimizador do Next não anima
        <img
          src={src}
          alt={alt}
          decoding="async"
          onLoad={() => setCarregada(true)}
          className={`absolute inset-0 transition-opacity duration-500 ease-[var(--ease-saida)] ${carregada ? "opacity-100" : "opacity-0"} ${classeImagem}`}
        />
      ) : null}
      </div>
      {reduzido && !pedida ? (
        <button
          type="button"
          onClick={() => setPedida(true)}
          className="group absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-150 hover:bg-black/10"
          aria-label={`Ver animação: ${alt}`}
        >
          <span className="flex items-center gap-2 rounded-md bg-gsw px-3 py-2 text-apoio font-medium text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)]">
            <Play aria-hidden size={16} strokeWidth={1.75} fill="currentColor" />
            Ver animação
          </span>
        </button>
      ) : null}
    </div>
  );
}

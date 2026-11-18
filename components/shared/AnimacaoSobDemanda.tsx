"use client";

import { Play } from "lucide-react";
import { useState } from "react";

type AnimacaoSobDemandaProps = {
  /** Animação WebP; o pôster fica ao lado com o sufixo .poster.webp. */
  src: string;
  alt: string;
  className?: string;
};

const posterDe = (src: string) => src.replace(/\.webp$/, ".poster.webp");

/** Mostra o pôster leve e só baixa a animação (até alguns MB) quando o leitor pede. */
export default function AnimacaoSobDemanda({ src, alt, className = "" }: AnimacaoSobDemandaProps) {
  const [tocando, setTocando] = useState(false);

  if (tocando) {
    // eslint-disable-next-line @next/next/no-img-element -- animação WebP servida como está; o otimizador do Next não anima
    return <img src={src} alt={alt} className={className} decoding="async" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTocando(true)}
      className="group relative block h-full w-full"
      aria-label={`Ver animação: ${alt}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- pôster estático já redimensionado no build de assets */}
      <img src={posterDe(src)} alt="" className={className} loading="lazy" decoding="async" />
      <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-150 group-hover:bg-black/10">
        <span className="flex items-center gap-2 rounded-md bg-gsw px-3 py-2 text-[0.95rem] font-medium text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)]">
          <Play aria-hidden size={16} strokeWidth={1.75} fill="currentColor" />
          Ver animação
        </span>
      </span>
    </button>
  );
}

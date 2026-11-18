"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { GalleryPhoto } from "@/components/history/data/gallery";

type LenisPausavel = { stop: () => void; start: () => void };

/** Mesmo `sizes` das miniaturas da grade (GallerySection), para a prévia sair do cache. */
export const TAMANHO_DA_MINIATURA = "(min-width: 1024px) 15vw, 50vw";

type GaleriaDialogoProps = {
  fotos: GalleryPhoto[];
  /** Foto aberta; null fecha o diálogo. */
  indice: number | null;
  aoMudar: (indice: number | null) => void;
};

/**
 * Foto da galeria ampliada, no padrão dos diálogos do site (busca e zoom): <dialog> nativo em painel carvão,
 * foco preso dentro, Esc e clique fora fecham, setas navegam. Enquanto aberto, a página de trás não rola.
 */
export default function GaleriaDialogo({ fotos, indice, aoMudar }: GaleriaDialogoProps) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const foto = indice !== null ? fotos[indice] : null;
  const total = fotos.length;

  const ir = (passo: number) => {
    if (indice === null || total === 0) return;
    aoMudar((indice + passo + total) % total);
  };

  useEffect(() => {
    const elemento = dialogo.current;
    if (!elemento) return;
    if (indice !== null && !elemento.open) elemento.showModal();
    if (indice === null && elemento.open) elemento.close();
  }, [indice]);

  // Trava a rolagem do fundo (inclusive a do Lenis) enquanto o diálogo está aberto.
  const aberto = indice !== null;
  useEffect(() => {
    if (!aberto) return;
    const html = document.documentElement;
    const lenis = (window as Window & { __lenis?: LenisPausavel }).__lenis;
    const anterior = html.style.overflow;
    html.style.overflow = "hidden";
    lenis?.stop();
    return () => {
      html.style.overflow = anterior;
      lenis?.start();
    };
  }, [aberto]);

  return (
    <dialog
      ref={dialogo}
      aria-labelledby="galeria-titulo"
      aria-describedby={foto?.description ? "galeria-descricao" : undefined}
      onClose={() => aoMudar(null)}
      onClick={(evento) => {
        if (evento.target === dialogo.current) aoMudar(null);
      }}
      onKeyDown={(evento) => {
        if (evento.key === "ArrowRight") ir(1);
        if (evento.key === "ArrowLeft") ir(-1);
      }}
      className="m-auto max-h-[calc(100dvh-2rem)] w-[min(72rem,calc(100vw-2rem))] overflow-y-auto rounded-md border border-linha-forte bg-carvao p-0 text-texto shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)] transition-[opacity,translate] duration-200 [transition-timing-function:var(--ease-saida)] backdrop:bg-black/80 starting:open:translate-y-1 starting:open:opacity-0 motion-reduce:transition-opacity motion-reduce:duration-[120ms] motion-reduce:starting:open:translate-y-0"
    >
      {foto ? (
        <>
          <div className="flex items-center gap-3 border-b border-linha py-2 pl-4 pr-2 sm:pl-5">
            <h2 id="galeria-titulo" className="min-w-0 flex-1 truncate font-texto text-titulo-5 font-bold text-texto">
              {foto.title}
            </h2>
            <span className="numeros shrink-0 font-mono text-apoio text-texto-3">
              {indice! + 1} / {total}
            </span>
            <button
              type="button"
              onClick={() => aoMudar(null)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-texto-2 transition-colors duration-[var(--dur-ui)] hover:bg-elevada hover:text-texto"
              aria-label="Fechar foto"
            >
              <X aria-hidden size={20} strokeWidth={1.75} />
            </button>
          </div>

          <div className="relative aspect-video w-full bg-chao">
            {/* A chave troca a imagem a cada foto e roda a entrada curta de novo. */}
            <div key={foto.src} className="entra absolute inset-0 [--subida:8px]">
              {/* Prévia instantânea: a miniatura da grade, com os mesmos src, sizes e qualidade, já está no cache.
                  A versão grande cobre por cima quando termina de carregar. */}
              <Image
                quality={90}
                src={foto.thumbSrc || foto.src}
                alt=""
                fill
                sizes={TAMANHO_DA_MINIATURA}
                className="object-contain"
              />
              <Image
                quality={90}
                src={foto.src}
                alt={foto.title}
                fill
                sizes="(min-width: 1152px) 72rem, calc(100vw - 2rem)"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div className="min-w-0">
              <p id="galeria-descricao" className="text-texto-2">
                {foto.description || "Registro da galeria da guilda."}
              </p>
              <p className="mt-1 hidden text-detalhe text-texto-3 sm:block">
                <kbd className="rounded border border-linha-forte px-1 font-mono">←</kbd>{" "}
                <kbd className="rounded border border-linha-forte px-1 font-mono">→</kbd> para navegar,{" "}
                <kbd className="rounded border border-linha-forte px-1 font-mono">Esc</kbd> para fechar
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => ir(-1)}
                className="flex h-11 items-center gap-2 rounded-md border border-linha-forte px-4 text-texto hover:border-violeta-borda"
              >
                <ChevronLeft aria-hidden size={18} strokeWidth={1.75} />
                Anterior
              </button>
              <button
                type="button"
                onClick={() => ir(1)}
                className="flex h-11 items-center gap-2 rounded-md bg-gsw px-4 font-medium text-white hover:bg-[#7f1bc2]"
              >
                Próxima
                <ChevronRight aria-hidden size={18} strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </>
      ) : null}
    </dialog>
  );
}

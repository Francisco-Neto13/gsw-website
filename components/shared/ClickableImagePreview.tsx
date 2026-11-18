"use client";

import { X } from "lucide-react";
import { type ReactNode, useRef, useState } from "react";

type ClickableImagePreviewProps = {
  src: string;
  alt: string;
  children: ReactNode;
  buttonClassName?: string;
};

/**
 * Amplia uma imagem em tela cheia. Usa o <dialog> nativo: o foco entra no modal e fica preso nele,
 * Esc fecha e o foco volta para a miniatura (achado P1 da auditoria).
 */
export default function ClickableImagePreview({ src, alt, children, buttonClassName }: ClickableImagePreviewProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [aberto, setAberto] = useState(false);

  const abrir = () => {
    setAberto(true);
    dialogRef.current?.showModal();
  };
  const fechar = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={abrir}
        className={buttonClassName ?? "block w-full cursor-zoom-in"}
        aria-label={`Ampliar imagem: ${alt}`}
      >
        {children}
      </button>

      <dialog
        ref={dialogRef}
        aria-label={alt}
        onClose={() => setAberto(false)}
        onClick={(evento) => {
          if (evento.target === dialogRef.current) fechar();
        }}
        className="m-auto h-[calc(100dvh-2rem)] max-h-none w-[calc(100vw-2rem)] max-w-6xl bg-transparent p-0 backdrop:bg-black/90"
      >
        <div className="relative flex h-full w-full items-center justify-center" onClick={fechar}>
          <button
            type="button"
            onClick={fechar}
            className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-md bg-black/60 text-texto hover:bg-black/80"
            aria-label="Fechar imagem ampliada"
          >
            <X aria-hidden size={22} strokeWidth={1.75} />
          </button>
          {aberto ? (
            // eslint-disable-next-line @next/next/no-img-element -- tamanho original para ampliar; só baixa ao abrir
            <img
              src={src}
              alt={alt}
              onClick={(evento) => evento.stopPropagation()}
              className="max-h-full max-w-full rounded-md object-contain"
            />
          ) : null}
        </div>
      </dialog>
    </>
  );
}

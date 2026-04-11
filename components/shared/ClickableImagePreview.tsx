"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ClickableImagePreviewProps = {
  src: string;
  alt: string;
  children: ReactNode;
  buttonClassName?: string;
};

export default function ClickableImagePreview({
  src,
  alt,
  children,
  buttonClassName,
}: ClickableImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const portalTarget = typeof document !== "undefined" ? document.body : null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={buttonClassName ?? "block w-full cursor-zoom-in"}
        aria-label={`Ampliar imagem: ${alt}`}
      >
        {children}
      </button>

      {isOpen && portalTarget
        ? createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-2 sm:p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 z-50 text-3xl font-light text-white/60 transition-colors hover:text-white sm:top-6 sm:right-6"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar"
          >
            x
          </button>

          <div
            className="relative flex w-full max-w-5xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
            style={{ height: "calc(100vh - 160px)" }}
          >
            <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-black/60 p-2 sm:p-3">
              <Image
                src={src}
                alt={alt}
                width={2000}
                height={1400}
                className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                sizes="100vw"
              />
            </div>
          </div>
        </div>,
        portalTarget
      )
        : null}
    </>
  );
}

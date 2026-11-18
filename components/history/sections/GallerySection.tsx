"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { galleryPhotos } from "@/components/history/data/gallery";

export default function GallerySection() {
  const photos = galleryPhotos;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const selectedPhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;
  const modalTitleId =
    selectedPhotoIndex !== null ? `history-gallery-modal-title-${selectedPhotoIndex}` : undefined;
  const modalDescriptionId =
    selectedPhotoIndex !== null ? `history-gallery-modal-description-${selectedPhotoIndex}` : undefined;

  const goToNext = useCallback(() => {
    if (photos.length === 0) return;

    setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, [photos.length]);

  const goToPrev = useCallback(() => {
    if (photos.length === 0) return;

    setSelectedPhotoIndex((prev) =>
      prev !== null ? (prev - 1 + photos.length) % photos.length : null
    );
  }, [photos.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;

      if (event.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (event.key === "ArrowRight") {
        goToNext();
      } else if (event.key === "ArrowLeft") {
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, goToNext, goToPrev]);

  useEffect(() => {
    if (selectedPhotoIndex === null) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedPhotoIndex]);

  return (
    <section id="galeria" className="border-t border-linha py-16 sm:py-20">

      <div className="casca grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="mb-10 max-w-leitura lg:sticky lg:top-24 lg:mb-0 lg:self-start">
          <h2 className="text-titulo-2 text-texto">
            Galeria dos Guardiões
          </h2>
          <p className="mt-3 text-texto-2">
            &ldquo;Cada imagem conta uma história, cada momento eternizado na memória dos
            Guardiões.&rdquo;
          </p>
        </div>
        <div className="min-w-0">

        <div>
          {photos.length > 0 ? (
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
              {photos.map((photo, index) => (
                <div
                  key={`${photo.title}-${index}`}
                  className="group relative aspect-[3/2] cursor-pointer overflow-hidden rounded-xl border border-linha bg-zinc-900 transition-colors duration-200 hover:border-gsw/35 sm:aspect-video"
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  <Image quality={90}
                    src={photo.thumbSrc || photo.src}
                    alt={photo.title}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:p-4">
                    <h3 className="text-titulo-4 mb-1 font-bold text-texto">{photo.title}</h3>
                    {photo.description && (
                      <p className="hidden text-detalhe text-texto-2 sm:block">{photo.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-dashed border-linha bg-carvao px-6 py-12 text-center sm:px-10 sm:py-16">
              <p className="text-texto-2">
                Adicione as imagens em{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-detalhe text-violeta">public/gallery</code>{" "}
                e preencha a lista em{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-detalhe text-violeta">
                  components/history/data/gallery.ts
                </code>
                .
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 max-w-leitura">
          <p className="border-l border-linha-forte pl-4 italic text-texto-2">
            &ldquo;Onde houver uma batalha, haverá um{" "}
            <span className="font-medium text-texto">Guardião</span>.
            O legado da GsW é eterno.&rdquo;
          </p>
        </div>
        </div>
      </div>

      {selectedPhoto && typeof document !== "undefined"
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={modalTitleId}
              aria-describedby={modalDescriptionId}
              className="history-gallery-modal-overlay fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8"
              onClick={() => setSelectedPhotoIndex(null)}
            >
              <div
                className="history-gallery-modal-shell relative w-full max-w-6xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="history-gallery-modal-frame relative flex max-h-[92vh] w-full flex-col overflow-y-auto rounded-md border border-linha bg-black/55 p-2.5 sm:max-h-[90vh] sm:p-4 md:max-h-[88vh] lg:p-6">
                  <div className="history-gallery-modal-header mb-2.5 flex items-center justify-between border-b border-linha pb-2.5 sm:mb-3 sm:pb-3">
                    <div className="min-w-0">
                      <p className="history-gallery-modal-label text-detalhe font-bold uppercase tracking-[0.35em]">
                        Arquivo Visual
                      </p>
                      <p className="history-gallery-modal-counter mt-1 text-detalhe font-semibold">
                        {selectedPhotoIndex !== null && `${selectedPhotoIndex + 1} de ${photos.length}`}
                      </p>
                    </div>

                    <button
                      className="history-gallery-modal-close-button inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-1.5 text-detalhe font-bold uppercase tracking-wide transition-colors"
                      onClick={() => setSelectedPhotoIndex(null)}
                      aria-label="Fechar"
                      type="button"
                    >
                      <span className="hidden sm:inline">Fechar</span>
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>

                  <div className="history-gallery-modal-content grid gap-3 md:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.85fr)] lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)]">
                    <div className="history-gallery-modal-media relative flex items-center justify-center">
                      <div className="history-gallery-modal-canvas relative h-[33vh] w-full overflow-hidden rounded-md border border-linha bg-black/45 sm:h-[40vh] md:h-[44vh] lg:h-[60vh]">
                        <Image quality={90}
                          src={selectedPhoto.src}
                          alt={selectedPhoto.title}
                          fill
                          sizes="(max-width: 1024px) 92vw, 72vw"
                          className="object-contain p-2 sm:p-4"
                        />
                      </div>
                    </div>

                    <aside className="history-gallery-modal-info rounded-md border border-linha bg-carvao p-3 sm:p-4 lg:p-5">
                      <h3
                        id={modalTitleId}
                        className="text-titulo-4 mb-1.5 font-black tracking-tight text-white sm:mb-2"
                      >
                        {selectedPhoto.title}
                      </h3>

                      <p id={modalDescriptionId} className="mb-3 text-detalhe leading-relaxed text-texto-2 sm:mb-4">
                        {selectedPhoto.description || "Registro histórico da galeria da guilda da GsW."}
                      </p>

                      <div className="history-gallery-modal-meta mb-3 hidden flex-wrap gap-2 sm:mb-4 sm:flex">
                        <span className="history-gallery-modal-chip">←/→ Navegar</span>
                        <span className="history-gallery-modal-chip">ESC Fechar</span>
                        <span className="history-gallery-modal-chip">Clique fora para sair</span>
                      </div>

                      <div className="history-gallery-modal-actions flex flex-col gap-2">
                        <button
                          className="history-gallery-modal-action-btn"
                          onClick={goToNext}
                          type="button"
                        >
                          Próxima →
                        </button>
                        <button
                          className="history-gallery-modal-action-btn"
                          onClick={goToPrev}
                          type="button"
                        >
                          ← Anterior
                        </button>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </section>
  );
}

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
    <section id="galeria" className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-32">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(113,22,173,0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="reveal-on-scroll mb-10 text-center sm:mb-20">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-4">
            Memórias Eternas
          </span>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:mb-8 sm:text-5xl lg:text-7xl">
            Galeria dos <span className="text-gsw">Guardiões</span>
          </h2>
          <p className="mx-auto max-w-2xl px-2 text-sm italic leading-relaxed text-zinc-400 sm:text-base">
            &ldquo;Cada imagem conta uma história, cada momento eternizado na memória dos
            Guardiões.&rdquo;
          </p>
        </div>

        <div className="history-gallery-frame reveal-on-scroll rounded-3xl border border-white/10 bg-black/35 p-3 sm:p-5 lg:p-6">
          {photos.length > 0 ? (
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {photos.map((photo, index) => (
                <div
                  key={`${photo.title}-${index}`}
                  className="history-sheen-card history-tilt-gallery group relative aspect-[3/2] cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition-colors duration-200 hover:border-gsw/35 sm:aspect-video"
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  <Image
                    src={photo.thumbSrc || photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="history-tilt-media object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:p-4">
                    <h3 className="mb-1 text-xs font-bold text-white sm:text-sm">{photo.title}</h3>
                    {photo.description && (
                      <p className="hidden text-xs text-zinc-300 sm:block">{photo.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 bg-zinc-900/20 px-6 py-12 text-center sm:px-10 sm:py-16">
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                Adicione as imagens em{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-gsw">public/gallery</code>{" "}
                e preencha a lista em{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-gsw">
                  components/history/data/gallery.ts
                </code>
                .
              </p>
            </div>
          )}
        </div>

        <div className="reveal-on-scroll mt-16 text-center sm:mt-24">
          <p className="inline-block border-t border-white/5 px-6 pt-10 text-sm italic leading-relaxed text-zinc-500 sm:px-12 sm:pt-12">
            &ldquo;Onde houver uma batalha, haverá um{" "}
            <span className="text-sm font-bold uppercase tracking-widest text-gsw/60">Guardião</span>.
            O legado da GsW é eterno.&rdquo;
          </p>
        </div>
      </div>

      {selectedPhoto && typeof document !== "undefined"
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={modalTitleId}
              aria-describedby={modalDescriptionId}
              className="history-gallery-modal-overlay fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8"
              onClick={() => setSelectedPhotoIndex(null)}
            >
              <div
                className="history-gallery-modal-shell relative w-full max-w-6xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="history-gallery-modal-frame relative flex w-full flex-col rounded-3xl border border-white/10 bg-black/55 p-3 sm:p-5 lg:p-6">
                  <div className="history-gallery-modal-header mb-3 flex items-center justify-between border-b border-white/10 pb-3 sm:mb-4 sm:pb-4">
                    <div className="min-w-0">
                      <p className="history-gallery-modal-label text-[10px] font-bold uppercase tracking-[0.35em] sm:text-xs">
                        Arquivo Visual
                      </p>
                      <p className="history-gallery-modal-counter mt-1 text-xs font-semibold sm:text-sm">
                        {selectedPhotoIndex !== null && `${selectedPhotoIndex + 1} de ${photos.length}`}
                      </p>
                    </div>

                    <button
                      className="history-gallery-modal-close-button inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors sm:text-sm"
                      onClick={() => setSelectedPhotoIndex(null)}
                      aria-label="Fechar"
                      type="button"
                    >
                      <span>Fechar</span>
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>

                  <div className="history-gallery-modal-content grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)]">
                    <div className="history-gallery-modal-media relative flex items-center justify-center">
                      <div className="history-gallery-modal-canvas relative h-[52vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/45 sm:h-[60vh]">
                        <Image
                          src={selectedPhoto.src}
                          alt={selectedPhoto.title}
                          fill
                          sizes="(max-width: 1024px) 92vw, 72vw"
                          className="object-contain p-2 sm:p-4"
                        />
                      </div>
                    </div>

                    <aside className="history-gallery-modal-info rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-5">
                      <h3
                        id={modalTitleId}
                        className="mb-2 text-lg font-black tracking-tight text-white sm:text-2xl"
                      >
                        {selectedPhoto.title}
                      </h3>

                      <p id={modalDescriptionId} className="mb-4 text-sm leading-relaxed text-zinc-300 sm:mb-5">
                        {selectedPhoto.description || "Registro histórico da galeria oficial da GsW."}
                      </p>

                      <div className="history-gallery-modal-meta mb-4 flex flex-wrap gap-2 sm:mb-5">
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

"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { galleryPhotos } from "@/features/gallery/data/gallery";

export default function GallerySection() {
  const photos = galleryPhotos;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const selectedPhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

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

        {photos.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {photos.map((photo, index) => (
              <div
                key={`${photo.title}-${index}`}
                className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-zinc-900 transition-transform duration-200 will-change-transform hover:scale-[1.02]"
                onClick={() => setSelectedPhotoIndex(index)}
              >
                <Image
                  src={photo.thumbSrc || photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
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
          <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-900/20 px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
              Adicione as imagens em{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-gsw">public/gallery</code>{" "}
              e preencha a lista em{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-gsw">
                features/gallery/data/gallery.ts
              </code>
              .
            </p>
          </div>
        )}

        <div className="reveal-on-scroll mt-16 text-center sm:mt-24">
          <p className="inline-block border-t border-white/5 px-6 pt-10 text-sm italic leading-relaxed text-zinc-500 sm:px-12 sm:pt-12">
            &ldquo;Onde houver uma batalha, haverá um{" "}
            <span className="text-sm font-bold uppercase tracking-widest text-gsw/60">Guardião</span>.
            O legado da GsW é eterno.&rdquo;
          </p>
        </div>
      </div>

      {selectedPhoto && (
<div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={() => setSelectedPhotoIndex(null)}
          >
          <button
            className="absolute top-4 right-4 z-50 text-3xl font-light text-white/60 transition-colors hover:text-white sm:top-6 sm:right-6"
            onClick={() => setSelectedPhotoIndex(null)}
            aria-label="Fechar"
          >
            x
          </button>

          <button
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white/70 transition-transform duration-200 hover:scale-110 hover:text-white sm:left-6 sm:p-4"
            onClick={(event) => {
              event.stopPropagation();
              goToPrev();
            }}
            aria-label="Foto anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white/70 transition-transform duration-200 hover:scale-110 hover:text-white sm:right-6 sm:p-4"
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
            aria-label="Próxima foto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            className="relative flex w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="relative flex w-full items-center justify-center px-12"
              style={{ maxHeight: "calc(100vh - 180px)" }}
            >
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                width={1600}
                height={1200}
                className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>

            <div className="mt-6 mb-4 max-w-2xl px-6 text-center sm:mt-10 sm:mb-6">
              <h3 className="mb-2 text-xl font-black text-white sm:mb-3 sm:text-2xl">
                {selectedPhoto.title}
              </h3>
              {selectedPhoto.description && (
                <p className="text-sm italic text-zinc-400">{selectedPhoto.description}</p>
              )}
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-6 text-sm text-zinc-500 sm:bottom-8">
            <span className="hidden sm:inline">
              Use <kbd className="rounded bg-white/10 px-2 py-1">←</kbd>{" "}
              <kbd className="rounded bg-white/10 px-2 py-1">→</kbd> para navegar
            </span>
            <span className="hidden border-l border-white/20 pl-4 sm:block" />
            <span className="hidden sm:inline">
              Pressione <kbd className="rounded bg-white/10 px-2 py-1">ESC</kbd> para fechar
            </span>
          </div>

          <div className="absolute top-4 left-4 text-xs font-medium text-white/60 sm:top-6 sm:left-6 sm:text-sm">
            {selectedPhotoIndex !== null && `${selectedPhotoIndex + 1} / ${photos.length}`}
          </div>
        </div>
      )}
    </section>
  );
}

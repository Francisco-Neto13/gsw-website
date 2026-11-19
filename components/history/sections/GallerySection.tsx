"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryPhotos } from "@/components/history/data/gallery";
import GaleriaDialogo, { TAMANHO_DA_MINIATURA } from "@/components/history/sections/GaleriaDialogo";

export default function GallerySection() {
  const photos = galleryPhotos;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

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
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
              {photos.map((photo, index) => (
                <button
                  type="button"
                  key={`${photo.title}-${index}`}
                  data-revelar-item
                  aria-label={`Abrir foto: ${photo.title}`}
                  className="group relative block aspect-[3/2] cursor-zoom-in overflow-hidden rounded-md border border-linha bg-elevada text-left transition-colors duration-[var(--dur-ui)] hover:border-violeta-borda sm:aspect-video"
                  onClick={() => setSelectedPhotoIndex(index)}
                >
                  <Image quality={90}
                    src={photo.thumbSrc || photo.src}
                    alt={photo.title}
                    fill
                    sizes={TAMANHO_DA_MINIATURA}
                    className="object-cover transition-transform duration-[900ms] ease-[var(--ease-saida)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:p-4">
                    <span className="block font-bold text-texto">{photo.title}</span>
                    {photo.description && (
                      <span className="hidden text-apoio text-texto-2 sm:block">{photo.description}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-dashed border-linha bg-carvao px-6 py-12 text-center sm:px-10 sm:py-16">
              <p className="text-texto-2">
                Adicione as imagens em{" "}
                <code className="rounded bg-gsw/15 px-1.5 py-0.5 text-detalhe text-violeta">public/gallery</code>{" "}
                e preencha a lista em{" "}
                <code className="rounded bg-gsw/15 px-1.5 py-0.5 text-detalhe text-violeta">
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

      <GaleriaDialogo fotos={photos} indice={selectedPhotoIndex} aoMudar={setSelectedPhotoIndex} />
    </section>
  );
}

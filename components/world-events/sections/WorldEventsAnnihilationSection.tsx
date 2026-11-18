import Image from "next/image";
import {
  worldEventsAnnihilationLabels,
  annihilationVideo,
  annihilationImages,
  annihilationPartyTips,
  annihilationSunTips,
  worldEventsAnnihilationIntro,
} from "@/components/world-events/data/world-events-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import LazyYouTubeEmbed from "@/components/shared/LazyYouTubeEmbed";
import { tamanhos } from "@/lib/tamanhos";

export default function WorldEventsAnnihilationSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {worldEventsAnnihilationIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {worldEventsAnnihilationIntro.description}
          </p>
        </div>

        {/* O vídeo divide a linha com a composição da party (o que levar), na mesma altura. */}
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div className="flex flex-col overflow-hidden rounded-md border border-linha bg-carvao">
            <div className="flex flex-1 items-center bg-poco">
              <div className="w-full">
                <LazyYouTubeEmbed videoId={annihilationVideo.videoId} title={annihilationVideo.title} />
              </div>
            </div>
            <p className="px-4 py-3 text-apoio text-texto-3 sm:px-5">{annihilationVideo.caption}</p>
          </div>
          <article className="rounded-md border border-linha bg-carvao p-6 sm:p-8">
            <h3 className="text-titulo-4 mb-4 font-bold tracking-tight text-texto">{worldEventsAnnihilationLabels.partyTitle}</h3>
            <ul className="space-y-3">
              {annihilationPartyTips.map((item) => (
                <li key={item} className="flex gap-3 text-texto-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="mt-4 rounded-md border border-linha bg-carvao p-6 sm:mt-6 sm:p-8">
          <h3 className="text-titulo-4 mb-4 font-bold tracking-tight text-texto">{worldEventsAnnihilationLabels.sunTitle}</h3>
            <ul className="grid gap-x-10 gap-y-3 md:grid-cols-2">
              {annihilationSunTips.map((item) => (
                <li key={item} className="flex gap-3 text-texto-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
        </article>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {annihilationImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-md border border-linha bg-carvao">
              <ClickableImagePreview src={image.src} alt={image.alt}>
                <div className="relative aspect-video w-full">
                  <Image quality={90}
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={tamanhos.metade}
                    className="object-cover"
                  />
                </div>
              </ClickableImagePreview>
              <p className="px-4 py-3 text-apoio text-texto-3 sm:px-5">{image.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

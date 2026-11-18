import {
  participationCards,
  worldEventsParticipationIntro,
  participationImages,
} from "@/components/world-events/data/world-events-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { tamanhos } from "@/lib/tamanhos";
import ImagemNoQuadro from "@/components/shared/ImagemNoQuadro";

export default function WorldEventsParticipationSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {worldEventsParticipationIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {worldEventsParticipationIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {participationCards.map((card) => (
            <article
              key={card.title}
              className="group relative rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8"
            >
              <h3 className="text-titulo-4 mb-3 font-bold tracking-tight text-texto sm:mb-4">
                {card.title}
              </h3>
              <p className="text-texto-2">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {participationImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-md border border-linha bg-carvao">
              <div className="border-b border-linha px-4 py-3 sm:px-5">
                <h4 className="text-titulo-5 font-semibold tracking-widest text-violeta">{image.title}</h4>
              </div>
              <ClickableImagePreview src={image.src} alt={image.alt}>
                <div className="relative aspect-video w-full bg-poco">
                  <ImagemNoQuadro src={image.src} alt={image.alt} sizes={tamanhos.metade} className="p-2" />
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

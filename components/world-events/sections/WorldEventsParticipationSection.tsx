import Image from "next/image";
import {
  participationCards,
  worldEventsParticipationIntro,
  participationImages,
} from "@/components/world-events/data/world-events-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

export default function WorldEventsParticipationSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
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
              <h3 className="mb-3 text-xl font-bold tracking-tight text-texto sm:mb-4 sm:text-2xl">
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
                <h4 className="text-xs font-semibold tracking-widest text-violeta">{image.title}</h4>
              </div>
              <ClickableImagePreview src={image.src} alt={image.alt}>
                <div className="relative aspect-video w-full bg-black/60">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-contain p-2"
                  />
                </div>
              </ClickableImagePreview>
              <p className="px-4 py-3 text-[0.9rem] text-texto-3 sm:px-5">{image.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

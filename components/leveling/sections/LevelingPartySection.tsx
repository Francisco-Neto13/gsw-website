import Image from "next/image";
import {
  levelingPartyCards,
  levelingPartyImage,
  levelingPartyIntro,
} from "@/components/leveling/data/leveling-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { tamanhos } from "@/lib/tamanhos";

export default function LevelingPartySection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {levelingPartyIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {levelingPartyIntro.description}
          </p>
        </div>

        <div className="leveling-panel-3d mb-10 max-w-2xl overflow-hidden rounded-md border border-linha bg-carvao sm:mb-16">
          <ClickableImagePreview src={levelingPartyImage.src} alt={levelingPartyImage.alt}>
            <div className="leveling-media-pop relative aspect-video w-full">
              <Image quality={90}
                src={levelingPartyImage.src}
                alt={levelingPartyImage.alt}
                fill
                sizes={tamanhos.solta}
                className="object-cover"
              />
            </div>
          </ClickableImagePreview>
          <p className="px-4 py-3 text-apoio text-texto-3 sm:px-5">
            {levelingPartyImage.caption}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {levelingPartyCards.map((card) => (
            <div
              key={card.title}
              className="leveling-card-soft group rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8"
            >
              <h3 className="text-titulo-4 mb-3 font-bold tracking-tight text-texto sm:mb-4">
                {card.title}
              </h3>
              <p className="text-texto-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

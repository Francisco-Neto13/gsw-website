import Image from "next/image";
import {
  rewardCards,
  rewardChestCaption,
  rewardChestImage,
  worldEventsRewardsIntro,
} from "@/components/world-events/data/world-events-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { tamanhos } from "@/lib/tamanhos";

export default function WorldEventsRewardsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {worldEventsRewardsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {worldEventsRewardsIntro.description}
          </p>
        </div>

        {/* Cartões e imagem lado a lado: a imagem não fica sozinha pela metade com a outra metade vazia. */}
        <div className="grid items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] sm:gap-6">
            {rewardCards.map((item) => (
              <article
                key={item.title}
                className="group relative rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8"
              >
                <h3 className="text-titulo-4 mb-3 font-bold tracking-tight text-texto">{item.title}</h3>
                <p className="text-apoio text-texto-2">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="overflow-hidden rounded-md border border-linha bg-carvao">
            <ClickableImagePreview src={rewardChestImage.src} alt={rewardChestImage.alt}>
              <div className="relative aspect-video w-full">
                <Image quality={90}
                  src={rewardChestImage.src}
                  alt={rewardChestImage.alt}
                  fill
                  sizes={tamanhos.lateral}
                  className="object-cover"
                />
              </div>
            </ClickableImagePreview>
            <p className="px-4 py-3 text-apoio text-texto-3 sm:px-5">
              {rewardChestCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import {
  rewardCards,
  rewardChestCaption,
  rewardChestImage,
  worldEventsRewardsIntro,
} from "@/components/world-events/data/world-events-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

export default function WorldEventsRewardsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
            {worldEventsRewardsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {worldEventsRewardsIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {rewardCards.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8"
            >
              <h3 className="mb-3 text-lg font-bold tracking-tight text-texto sm:text-xl">{item.title}</h3>
              <p className="text-[0.95rem] text-texto-2">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-md border border-linha bg-carvao sm:mt-10">
          <ClickableImagePreview src={rewardChestImage.src} alt={rewardChestImage.alt}>
            <div className="relative aspect-video w-full">
              <Image
                src={rewardChestImage.src}
                alt={rewardChestImage.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 42rem"
                className="object-cover"
              />
            </div>
          </ClickableImagePreview>
          <p className="px-4 py-3 text-[0.9rem] text-texto-3 sm:px-5">
            {rewardChestCaption}
          </p>
        </div>
      </div>
    </section>
  );
}

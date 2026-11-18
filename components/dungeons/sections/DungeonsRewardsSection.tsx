import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import {
  dungeonsRewardsCards,
  dungeonsRewardsImage,
  dungeonsRewardsIntro,
} from "@/components/dungeons/data/dungeons-content";

export default function DungeonsRewardsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {dungeonsRewardsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {dungeonsRewardsIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {dungeonsRewardsCards.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8"
            >
              <h3 className="text-titulo-4 mb-3 font-bold tracking-tight text-texto">{item.title}</h3>
              <p className="text-apoio text-texto-2">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 max-w-2xl overflow-hidden rounded-md border border-linha bg-carvao sm:mt-8">
          <ClickableImagePreview src={dungeonsRewardsImage.src} alt={dungeonsRewardsImage.alt}>
            <div className="relative aspect-video w-full">
              <Image
                src={dungeonsRewardsImage.src}
                alt={dungeonsRewardsImage.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 42rem"
                className="object-contain p-2"
              />
            </div>
          </ClickableImagePreview>
          <p className="px-4 py-3 text-apoio text-texto-3 sm:px-5">
            {dungeonsRewardsImage.caption?.trim() || dungeonsRewardsImage.alt}
          </p>
        </div>
      </div>
    </section>
  );
}

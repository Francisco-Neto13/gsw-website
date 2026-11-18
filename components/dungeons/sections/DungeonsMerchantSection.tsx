import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import {
  dungeonsMerchantCards,
  dungeonsMerchantImages,
  dungeonsMerchantIntro,
} from "@/components/dungeons/data/dungeons-content";

export default function DungeonsMerchantSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-titulo-2 text-texto">
            {dungeonsMerchantIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {dungeonsMerchantIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {dungeonsMerchantCards.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8"
            >
              <h3 className="text-titulo-4 mb-3 font-bold tracking-tight text-texto">{item.title}</h3>
              <p className="text-apoio text-texto-2">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {dungeonsMerchantImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-md border border-linha bg-carvao">
              <ClickableImagePreview src={image.src} alt={image.alt}>
                <div className="relative aspect-video w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-contain p-2"
                  />
                </div>
              </ClickableImagePreview>
              <p className="px-4 py-3 text-apoio text-texto-3 sm:px-5">{image.caption?.trim() || image.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import {
  dungeonsMerchantCards,
  dungeonsMerchantImages,
  dungeonsMerchantIntro,
} from "@/components/dungeons/data/dungeons-content";

export default function DungeonsMerchantSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 right-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {dungeonsMerchantIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {dungeonsMerchantIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {dungeonsMerchantIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {dungeonsMerchantCards.map((item, index) => (
            <article
              key={item.title}
              className="group relative rounded-2xl border border-white/10 bg-zinc-900/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8"
            >
              <span className="absolute right-4 bottom-3 select-none text-4xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-lg font-bold tracking-tight text-white sm:text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {dungeonsMerchantImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
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
              <p className="px-4 py-3 text-center text-xs text-zinc-500 sm:px-5">{image.caption?.trim() || image.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

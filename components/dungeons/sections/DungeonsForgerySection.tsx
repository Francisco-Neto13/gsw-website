import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import {
  dungeonsForgeryCards,
  dungeonsForgeryImage,
  dungeonsForgeryIntro,
} from "@/components/dungeons/data/dungeons-content";

export default function DungeonsForgerySection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {dungeonsForgeryIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {dungeonsForgeryIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {dungeonsForgeryIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {dungeonsForgeryCards.map((item, index) => (
            <article
              key={item.title}
              className="group relative rounded-2xl border border-white/10 bg-black/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8"
            >
              <span className="absolute right-4 bottom-3 select-none text-4xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 sm:mt-8">
          <ClickableImagePreview src={dungeonsForgeryImage.src} alt={dungeonsForgeryImage.alt}>
            <div className="relative aspect-video w-full">
              <Image src={dungeonsForgeryImage.src} alt={dungeonsForgeryImage.alt} fill className="object-contain p-2" />
            </div>
          </ClickableImagePreview>
          <p className="px-4 py-3 text-center text-xs text-zinc-500 sm:px-5">
            {dungeonsForgeryImage.caption?.trim() || dungeonsForgeryImage.alt}
          </p>
        </div>
      </div>
    </section>
  );
}

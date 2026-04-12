import Image from "next/image";
import {
  levelingPartyCards,
  levelingPartyImage,
  levelingPartyIntro,
} from "@/components/leveling/data/leveling-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

export default function LevelingPartySection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {levelingPartyIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {levelingPartyIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {levelingPartyIntro.description}
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 sm:mb-16">
          <ClickableImagePreview src={levelingPartyImage.src} alt={levelingPartyImage.alt}>
            <div className="relative aspect-video w-full">
              <Image src={levelingPartyImage.src} alt={levelingPartyImage.alt} fill className="object-cover" />
            </div>
          </ClickableImagePreview>
          <p className="px-4 py-3 text-center text-xs text-zinc-500 sm:px-5">
            {levelingPartyImage.caption}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {levelingPartyCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-white/10 bg-black/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8"
            >
              <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

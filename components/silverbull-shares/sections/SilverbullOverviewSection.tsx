import {
  acquisitionCards,
  inGameStoreCategoryImages,
  inGameStoreSupportImage,
  inGameStoreIntro,
  silverbullOverviewIntro,
  storeEntryImages,
  tradableVsUntradable,
} from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {silverbullOverviewIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {silverbullOverviewIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {silverbullOverviewIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {acquisitionCards.map((card, index) => (
            <article
              key={card.title}
              className="group relative rounded-2xl border border-white/10 bg-zinc-900/20 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gsw/40 sm:p-6"
            >
              <span className="absolute right-4 bottom-3 select-none text-4xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/15">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {tradableVsUntradable.map((card) => (
            <article key={card.title} className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6">
              <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950/60 p-5 sm:p-7">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.4em] text-gsw/80">
            {inGameStoreIntro.eyebrow}
          </span>
          <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{inGameStoreIntro.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{inGameStoreIntro.description}</p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {storeEntryImages.map((item) => (
              <SilverbullImageSlot key={item.label} label={item.label} src={item.src} alt={item.alt} />
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inGameStoreCategoryImages.map((item) => (
              <SilverbullImageSlot key={item.label} label={item.label} src={item.src} alt={item.alt} compact />
            ))}
            <SilverbullImageSlot
              label={inGameStoreSupportImage.label}
              src={inGameStoreSupportImage.src}
              alt={inGameStoreSupportImage.alt}
              compact
            />
          </div>

        </div>
      </div>
    </section>
  );
}

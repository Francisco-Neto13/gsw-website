import {
  chestStoreImage,
  crateExtraImages,
  cratePricingNotes,
  crateSources,
  crateTierImage,
  cratesIntro,
} from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullCratesSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {cratesIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {cratesIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {cratesIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {crateSources.map((card) => (
            <article key={card.title} className="rounded-2xl border border-white/10 bg-zinc-900/20 p-5 sm:p-6">
              <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SilverbullImageSlot label={crateTierImage.label} src={crateTierImage.src} alt={crateTierImage.alt} />
          <SilverbullImageSlot label={chestStoreImage.label} src={chestStoreImage.src} alt={chestStoreImage.alt} />
        </div>

        <div
          className={`mt-4 grid grid-cols-1 gap-4 ${
            crateExtraImages.length > 1 ? "sm:grid-cols-2" : ""
          } ${crateExtraImages.length > 2 ? "lg:grid-cols-3" : ""}`}
        >
          {crateExtraImages.map((item) => (
            <SilverbullImageSlot key={item.label} label={item.label} src={item.src} alt={item.alt} compact />
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.35em] text-gsw/80">Detalhe importante</span>
          <div className="space-y-2">
            {cratePricingNotes.map((note) => (
              <p key={note} className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                - {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
            {cratesIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {cratesIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {crateSources.map((card) => (
            <article key={card.title} className="rounded-md border border-linha bg-carvao p-5 sm:p-6">
              <h3 className="text-lg font-bold tracking-tight text-texto sm:text-xl">{card.title}</h3>
              <p className="mt-3 text-texto-2">{card.description}</p>
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

        <div className="mt-6 rounded-md border border-linha bg-carvao p-5 sm:p-6">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.35em] text-violeta/80">Detalhe importante</span>
          <div className="space-y-2">
            {cratePricingNotes.map((note) => (
              <p key={note} className="text-texto-2">
                - {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

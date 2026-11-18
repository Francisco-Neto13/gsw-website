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
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-titulo-2 text-texto">
            {silverbullOverviewIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {silverbullOverviewIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {acquisitionCards.map((card) => (
            <article
              key={card.title}
              className="group relative rounded-md border border-linha bg-carvao p-5 transition-all duration-200 hover:border-gsw/40 sm:p-6"
            >
              <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{card.title}</h3>
              <p className="mt-3 text-texto-2">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {tradableVsUntradable.map((card) => (
            <article key={card.title} className="rounded-md border border-linha bg-carvao p-5 sm:p-6">
              <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{card.title}</h3>
              <p className="mt-3 text-texto-2">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-md border border-linha bg-carvao p-5 sm:p-7">
          <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{inGameStoreIntro.title}</h3>
          <p className="mt-3 text-texto-2">{inGameStoreIntro.description}</p>

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

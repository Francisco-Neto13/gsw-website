import RaidImageCard from "@/components/raids/sections/RaidImageCard";
import {
  localAccessImage,
  offerImage,
  sharesExtraHighlights,
  sharesExtrasIntro,
  sharesExtrasLabels,
  sharesOfferNotes,
} from "@/components/silverbull-shares/data/silverbull-shares-content";

export default function SilverbullExtrasSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {sharesExtrasIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {sharesExtrasIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {sharesExtraHighlights.map((item) => (
            <div key={item.title} className="rounded-md border border-linha bg-carvao p-5 sm:p-6">
              <span className="mb-3 block text-detalhe font-bold uppercase tracking-[0.35em] text-violeta/80">{sharesExtrasLabels.highlight}</span>
              <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{item.title}</h3>
              <p className="mt-3 text-texto-2">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {sharesOfferNotes.map((item, index) => (
            <div
              key={item}
              className="group relative rounded-md border border-linha bg-carvao p-5 transition-all duration-200 hover:border-gsw/40 hover:bg-black/60 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-linha pb-4">
                <span className="text-detalhe font-bold uppercase tracking-[0.35em] text-violeta/75">
                  {sharesExtrasLabels.note} {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-texto-2">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          <RaidImageCard src={offerImage.src} alt={offerImage.alt} caption={offerImage.label} />
          <RaidImageCard src={localAccessImage.src} alt={localAccessImage.alt} caption={localAccessImage.label} />
        </div>
      </div>
    </section>
  );
}

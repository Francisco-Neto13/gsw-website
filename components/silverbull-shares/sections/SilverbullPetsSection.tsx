import { bundlesStoreImage, petsIntro, petBundles } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullPetsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-titulo-2 text-texto">
            {petsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {petsIntro.description}
          </p>
        </div>

        <div className="mb-6 mx-auto max-w-lg">
          <SilverbullImageSlot label={bundlesStoreImage.label} src={bundlesStoreImage.src} alt={bundlesStoreImage.alt} compact />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {petBundles.map((bundle) => (
            <article key={bundle.name} className="rounded-md border border-linha bg-carvao p-5 sm:p-6">
              <span className="mb-2 block text-detalhe font-bold uppercase tracking-[0.35em] text-violeta/80">{bundle.colorLabel}</span>
              <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{bundle.name}</h3>
              <div className="mt-4 space-y-2">
                {bundle.notes.map((note) => (
                  <p key={note} className="text-apoio text-texto-2">- {note}</p>
                ))}
              </div>
              <div className="mt-5">
                <SilverbullImageSlot label={bundle.image.label} src={bundle.image.src} alt={bundle.image.alt} compact />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

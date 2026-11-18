import { bundlesStoreImage, petsIntro, petBundles } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullPetsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div>
        {/* A vitrine da loja fica ao lado do título e da descrição, onde antes sobrava espaço. */}
        <div className="mb-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
          <div className="max-w-leitura">
            <h2 className="text-titulo-2 text-texto">
              {petsIntro.title}
            </h2>
            <p className="mt-3 text-texto-2">
              {petsIntro.description}
            </p>
          </div>
          <SilverbullImageSlot label={bundlesStoreImage.label} src={bundlesStoreImage.src} alt={bundlesStoreImage.alt} compact />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {petBundles.map((bundle) => (
            <article key={bundle.name} className="rounded-md border border-linha bg-carvao p-5 sm:p-6">
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

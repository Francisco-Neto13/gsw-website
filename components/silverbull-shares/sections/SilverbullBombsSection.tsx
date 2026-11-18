import IconeShares from "@/components/silverbull-shares/sections/IconeShares";
import { bombCards, bombStoreImage, bombsIntro } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullBombsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div>
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {bombsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {bombsIntro.description}
          </p>
        </div>

        {/* Cartões e imagem lado a lado: a imagem não fica sozinha pela metade com a outra metade vazia. */}
        <div className="grid items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] sm:gap-4">
            {bombCards.map((bomb) => (
              <article key={bomb.name} className="rounded-md border border-linha bg-carvao p-4 sm:p-5">
                <div className="mb-2 flex items-center gap-2">
                  <IconeShares nome={bomb.icon} />
                  <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{bomb.name}</h3>
                </div>
                <p className="text-apoio text-texto-2">{bomb.description}</p>
              </article>
            ))}
          </div>
          <div >
            <SilverbullImageSlot label={bombStoreImage.label} src={bombStoreImage.src} alt={bombStoreImage.alt} compact />
          </div>
        </div>
      </div>
    </section>
  );
}

import CreditoImagem from "@/components/guias/CreditoImagem";
import IconeShares from "@/components/silverbull-shares/sections/IconeShares";
import ImagemNoQuadro from "@/components/shared/ImagemNoQuadro";
import { bombCards, bombStoreImage, bombsIntro } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";
import { dimensoesDe } from "@/lib/imagens";

const TAMANHO_DA_ILUSTRACAO = "(min-width: 1024px) 14rem, (min-width: 640px) 40vw, 80vw";

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
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] sm:gap-4">
            {bombCards.map((bomb) => {
              // A ilustração da loja (wiki) no lugar do ícone; as bombas sem ilustração mostram o ícone no mesmo quadro.
              const temImagem = bomb.imagem && dimensoesDe(bomb.imagem);
              return (
                <article key={bomb.name} className="flex flex-col rounded-md border border-linha bg-carvao p-4">
                  <div className="relative mb-3 aspect-[3/2] overflow-hidden rounded-md bg-poco">
                    {temImagem ? (
                      <span className="absolute inset-2">
                        <ImagemNoQuadro src={bomb.imagem!} alt="" sizes={TAMANHO_DA_ILUSTRACAO} />
                      </span>
                    ) : (
                      <span className="absolute inset-0 grid place-items-center">
                        <IconeShares nome={bomb.icon} grande />
                      </span>
                    )}
                  </div>
                  <h3 className="text-titulo-5 font-bold text-texto">{bomb.name}</h3>
                  <p className="mt-1 flex-1 text-apoio text-texto-2">{bomb.description}</p>
                  {temImagem ? (
                    <p className="mt-2">
                      <CreditoImagem src={bomb.imagem!} rotulo="Ilustração" />
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
          <div >
            <SilverbullImageSlot label={bombStoreImage.label} src={bombStoreImage.src} alt={bombStoreImage.alt} compact />
          </div>
        </div>
      </div>
    </section>
  );
}

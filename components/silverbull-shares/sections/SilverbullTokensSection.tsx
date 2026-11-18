import IconeShares from "@/components/silverbull-shares/sections/IconeShares";
import { tokenCards, tokenStoreImage, tokensIntro } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullTokensSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {tokensIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {tokensIntro.description}
          </p>
        </div>

        {/* Cartões e imagem lado a lado: a imagem não fica sozinha pela metade com a outra metade vazia. */}
        <div className="grid items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] sm:gap-4">
            {tokenCards.map((token) => (
              <article
                key={token.name}
                className="group relative rounded-md border border-linha bg-carvao p-5 transition-all duration-200 hover:border-gsw/40"
              >
                <div className="mb-3 flex items-center gap-2 border-b border-linha pb-3">
                  <IconeShares nome={token.icon} />
                  <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{token.name}</h3>
                </div>
                <p className="text-texto-2">{token.description}</p>
              </article>
            ))}
          </div>
          <div >
            <SilverbullImageSlot label={tokenStoreImage.label} src={tokenStoreImage.src} alt={tokenStoreImage.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}

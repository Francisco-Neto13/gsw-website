import IconeShares from "@/components/silverbull-shares/sections/IconeShares";
import { tokenCards, tokenStoreImage, tokensIntro } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullTokensSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-titulo-2 text-texto">
            {tokensIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {tokensIntro.description}
          </p>
        </div>

        <div className="mb-6 mx-auto max-w-3xl">
          <SilverbullImageSlot label={tokenStoreImage.label} src={tokenStoreImage.src} alt={tokenStoreImage.alt} />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
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
      </div>
    </section>
  );
}

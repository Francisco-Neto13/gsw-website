import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import IconeShares from "@/components/silverbull-shares/sections/IconeShares";
import { tokenCards, tokensImagem, tokensIntro } from "@/components/silverbull-shares/data/silverbull-shares-content";
import { tamanhos } from "@/lib/tamanhos";

export default function SilverbullTokensSection() {
  return (
    <SecaoGuia id="tokens" titulo="Tokens" introducao={tokensIntro}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <dl className="grid gap-4 sm:grid-cols-2">
          {tokenCards.map((token) => (
            <div key={token.name} className="rounded-md border border-linha bg-carvao px-5 py-4">
              <dt className="flex items-center gap-2 font-bold text-texto">
                <IconeShares nome={token.icon} />
                {token.name}
              </dt>
              <dd className="mt-1 text-texto-2">{token.description}</dd>
            </div>
          ))}
        </dl>
        <FiguraNoTamanho imagem={tokensImagem} sizes={tamanhos.lateral} />
      </div>
    </SecaoGuia>
  );
}

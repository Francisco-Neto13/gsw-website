import CreditoImagem from "@/components/guias/CreditoImagem";
import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import IconeShares from "@/components/silverbull-shares/sections/IconeShares";
import ImagemNoQuadro from "@/components/shared/ImagemNoQuadro";
import { bombasImagem, bombasIntro, bombCards } from "@/components/silverbull-shares/data/silverbull-shares-content";
import { dimensoesDe } from "@/lib/imagens";
import { tamanhos } from "@/lib/tamanhos";

const TAMANHO_DA_ILUSTRACAO = "(min-width: 1024px) 14rem, (min-width: 640px) 40vw, 80vw";

export default function SilverbullBombsSection() {
  return (
    <SecaoGuia id="bombas" titulo="Bombas" introducao={bombasIntro}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))] sm:gap-4">
          {bombCards.map((bomb) => {
            // A ilustração da loja (wiki) no lugar do ícone; as bombas sem ilustração mostram o ícone no mesmo quadro.
            const temImagem = bomb.imagem && dimensoesDe(bomb.imagem);
            return (
              <li key={bomb.name} className="flex flex-col rounded-md border border-linha bg-carvao p-4">
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
              </li>
            );
          })}
        </ul>
        <FiguraNoTamanho imagem={bombasImagem} sizes={tamanhos.lateral} />
      </div>
    </SecaoGuia>
  );
}

import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { petBundles, petsImagem, petsIntro, petsRank } from "@/components/silverbull-shares/data/silverbull-shares-content";
import { tamanhos } from "@/lib/tamanhos";

export default function SilverbullPetsSection() {
  return (
    <SecaoGuia id="pets" titulo="Pets" introducao={petsIntro}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div className="flex flex-col gap-6">
          {petBundles.map((bundle) => (
            <div key={bundle.nome}>
              <h3 className="text-titulo-4 font-bold text-texto">{bundle.nome}</h3>
              <p className="mt-1 text-texto-2">{bundle.pets}.</p>
              <FiguraNoTamanho imagem={bundle.imagem} sizes={tamanhos.artigo} className="mt-3" />
            </div>
          ))}
        </div>
        <FiguraNoTamanho imagem={petsImagem} sizes={tamanhos.lateral} />
      </div>
      <p className="mt-8 max-w-leitura text-texto-2">{petsRank}</p>
    </SecaoGuia>
  );
}

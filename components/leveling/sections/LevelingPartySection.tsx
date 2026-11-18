import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { partyImagem, partyIntro, partyPapeis } from "@/components/leveling/data/leveling-content";
import { tamanhos } from "@/lib/tamanhos";

export default function LevelingPartySection() {
  return (
    <SecaoGuia id="party" titulo="Party" introducao={partyIntro}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <dl className="flex max-w-leitura flex-col gap-4">
          {partyPapeis.map((papel) => (
            <div key={papel.titulo} className="rounded-md border border-linha bg-carvao px-5 py-4">
              <dt className="font-bold text-texto">{papel.titulo}</dt>
              <dd className="mt-1 text-texto-2">{papel.texto}</dd>
            </div>
          ))}
        </dl>
        <FiguraNoTamanho imagem={partyImagem} sizes={tamanhos.lateral} />
      </div>
    </SecaoGuia>
  );
}

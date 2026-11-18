import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import {
  recompensas,
  recompensasAnnihilation,
  recompensasImagem,
  recompensasIntro,
} from "@/components/world-events/data/world-events-content";
import { tamanhos } from "@/lib/tamanhos";

export default function WorldEventsRewardsSection() {
  return (
    <SecaoGuia id="recompensas" titulo="Recompensas" introducao={recompensasIntro}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <dl className="grid gap-4 sm:grid-cols-2">
          {recompensas.map((item) => (
            <div key={item.titulo} className="rounded-md border border-linha bg-carvao px-5 py-4">
              <dt className="font-bold text-texto">{item.titulo}</dt>
              <dd className="mt-1 text-texto-2">{item.texto}</dd>
            </div>
          ))}
        </dl>
        <FiguraNoTamanho imagem={recompensasImagem} sizes={tamanhos.lateral} />
      </div>
      <h3 className="mt-10 text-titulo-4 font-bold text-texto">No Annihilation</h3>
      <p className="mt-3 max-w-leitura text-texto-2">
        <TextoComTermos texto={recompensasAnnihilation} />
      </p>
    </SecaoGuia>
  );
}

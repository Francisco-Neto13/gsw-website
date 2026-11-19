import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { recompensas, recompensasImagem, recompensasIntro } from "@/components/dungeons/data/dungeons-content";
import { tamanhos } from "@/lib/tamanhos";

export default function DungeonsRewardsSection() {
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
    </SecaoGuia>
  );
}

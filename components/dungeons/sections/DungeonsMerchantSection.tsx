import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import { merchantImagens, merchantIntro, merchantMoedas } from "@/components/dungeons/data/dungeons-content";
import { tamanhos } from "@/lib/tamanhos";

export default function DungeonsMerchantSection() {
  const [npc, loja] = merchantImagens;
  return (
    <SecaoGuia id="merchant" titulo="Dungeon Merchant" introducao={merchantIntro}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div>
          <dl className="flex max-w-leitura flex-col gap-4">
            {merchantMoedas.map((moeda) => (
              <div key={moeda.titulo} className="rounded-md border border-linha bg-carvao px-5 py-4">
                <dt className="font-bold text-texto">{moeda.titulo}</dt>
                <dd className="mt-1 text-texto-2">
                  <TextoComTermos texto={moeda.texto} />
                </dd>
              </div>
            ))}
          </dl>
          <FiguraNoTamanho imagem={loja} sizes={tamanhos.solta} className="mt-6" />
        </div>
        <FiguraNoTamanho imagem={npc} sizes={tamanhos.lateral} />
      </div>
    </SecaoGuia>
  );
}

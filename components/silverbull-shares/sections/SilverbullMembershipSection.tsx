import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { assinaturaBeneficios, assinaturaImagem, assinaturaIntro } from "@/components/silverbull-shares/data/silverbull-shares-content";
import { tamanhos } from "@/lib/tamanhos";

export default function SilverbullMembershipSection() {
  return (
    <SecaoGuia id="assinatura" titulo="Assinatura Silverbull" introducao={assinaturaIntro}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <dl className="grid gap-4 sm:grid-cols-2">
          {assinaturaBeneficios.map((beneficio) => (
            <div key={beneficio.titulo} className="rounded-md border border-linha bg-carvao px-5 py-4">
              <dt className="font-bold text-texto">{beneficio.titulo}</dt>
              <dd className="mt-1 text-texto-2">{beneficio.texto}</dd>
            </div>
          ))}
        </dl>
        <FiguraNoTamanho imagem={assinaturaImagem} sizes={tamanhos.lateral} />
      </div>
    </SecaoGuia>
  );
}

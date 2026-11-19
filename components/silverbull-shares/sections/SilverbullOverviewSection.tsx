import Galeria from "@/components/guias/Galeria";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import { comoConseguir, lojaImagens, oQueSaoIntro, tiposDeShare } from "@/components/silverbull-shares/data/silverbull-shares-content";
import { dimensoesDe } from "@/lib/imagens";

export default function SilverbullOverviewSection() {
  const imagens = lojaImagens.filter((imagem) => dimensoesDe(imagem.src));
  return (
    <SecaoGuia id="o-que-sao" titulo="O que são Shares" introducao={oQueSaoIntro}>
      <dl className="grid gap-4 sm:grid-cols-2">
        {tiposDeShare.map((tipo) => (
          <div key={tipo.titulo} className="rounded-md border border-linha bg-carvao px-5 py-4">
            <dt className="font-bold text-texto">{tipo.titulo}</dt>
            <dd className="mt-1 text-texto-2">{tipo.texto}</dd>
          </div>
        ))}
      </dl>
      <h3 className="mt-10 text-titulo-4 font-bold text-texto">Como conseguir</h3>
      <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {comoConseguir.map((item) => (
          <li key={item}>
            <TextoComTermos texto={item} />
          </li>
        ))}
      </ul>
      {imagens.length > 0 ? <Galeria className="mt-8 lg:max-w-[60rem]" proporcao="4 / 3" itens={imagens} /> : null}
    </SecaoGuia>
  );
}

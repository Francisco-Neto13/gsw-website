import Destaque from "@/components/guias/Destaque";
import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import { acessoImagens, acessoIntro, acessoModos, secondChance } from "@/components/dungeons/data/dungeons-content";
import { tamanhos } from "@/lib/tamanhos";

export default function DungeonsAccessSection() {
  return (
    <SecaoGuia id="acesso" titulo="Como entrar" introducao={acessoIntro}>
      <div className="grid gap-6 md:grid-cols-2">
        {acessoModos.map((modo, indice) => (
          <div key={modo.titulo} className="flex flex-col gap-4">
            <div className="rounded-md border border-linha bg-carvao px-5 py-4">
              <h3 className="text-titulo-4 font-bold text-texto">{modo.titulo}</h3>
              <ol className="mt-3 flex list-decimal flex-col gap-2 pl-5 text-texto-2 marker:text-violeta">
                {modo.passos.map((passo) => (
                  <li key={passo}>
                    <TextoComTermos texto={passo} />
                  </li>
                ))}
              </ol>
            </div>
            {acessoImagens[indice] ? <FiguraNoTamanho imagem={acessoImagens[indice]} sizes={tamanhos.metade} /> : null}
          </div>
        ))}
      </div>
      <Destaque {...secondChance} className="mt-6" />
    </SecaoGuia>
  );
}

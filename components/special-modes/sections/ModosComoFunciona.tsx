import Destaque from "@/components/guias/Destaque";
import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import {
  avisoIrreversivel,
  comoFuncionaIntro,
  imagemIconesDoChat,
  penalidadeDeMorte,
  regrasGerais,
} from "@/components/special-modes/data/special-modes-content";
import { dimensoesDe } from "@/lib/imagens";
import { tamanhos } from "@/lib/tamanhos";

export default function ModosComoFunciona() {
  const medida = dimensoesDe(imagemIconesDoChat.src);
  return (
    <SecaoGuia id="como-funciona" titulo="Como escolher um modo" introducao={comoFuncionaIntro}>
      <div className={`grid items-start gap-6 ${medida ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]" : ""}`}>
        <div>
          <ul className="flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {regrasGerais.map((regra) => (
              <li key={regra}>{regra}</li>
            ))}
          </ul>
          <Destaque {...avisoIrreversivel} className="mt-6" />
          <Destaque tipo="info" titulo="Morrer custa itens" texto={penalidadeDeMorte} className="mt-4" />
        </div>
        <FiguraNoTamanho imagem={imagemIconesDoChat} sizes={tamanhos.lateral} />
      </div>
    </SecaoGuia>
  );
}

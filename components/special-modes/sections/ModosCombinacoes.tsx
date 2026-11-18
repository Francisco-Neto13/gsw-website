import { Users } from "lucide-react";
import Figura from "@/components/guias/Figura";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import {
  combinacoesIntro,
  combinacoesParagrafos,
  desafioDaComunidade,
  imagemCombinacoes,
} from "@/components/special-modes/data/special-modes-content";
import { dimensoesDe } from "@/lib/imagens";
import { tamanhos } from "@/lib/tamanhos";

export default function ModosCombinacoes() {
  const medida = dimensoesDe(imagemCombinacoes.src);
  return (
    <SecaoGuia id="combinacoes" titulo="Combinações e desafios" introducao={combinacoesIntro}>
      {combinacoesParagrafos.map((paragrafo) => (
        <p key={paragrafo} className="max-w-leitura text-texto-2">
          <TextoComTermos texto={paragrafo} />
        </p>
      ))}

      <div className="mt-6 max-w-leitura rounded-md border border-dashed border-linha-forte px-5 py-4">
        <p className="flex items-center gap-2.5 font-bold text-texto">
          <Users aria-hidden size={18} strokeWidth={1.75} className="shrink-0 text-violeta" />
          {desafioDaComunidade.titulo}
        </p>
        <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
          {desafioDaComunidade.itens.map((item) => (
            <li key={item}>
              <TextoComTermos texto={item} />
            </li>
          ))}
        </ul>
        <p className="mt-3 text-apoio text-texto-3">{desafioDaComunidade.nota}</p>
      </div>

      {medida ? (
        <Figura
          src={imagemCombinacoes.src}
          alt={imagemCombinacoes.alt}
          legenda={imagemCombinacoes.legenda}
          largura={medida[0]}
          altura={medida[1]}
          sizes={tamanhos.artigo}
          className="mt-10 max-w-[68.375rem]"
        />
      ) : null}
    </SecaoGuia>
  );
}

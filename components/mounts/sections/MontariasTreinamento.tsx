import Destaque from "@/components/guias/Destaque";
import Galeria from "@/components/guias/Galeria";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import {
  avisoMontado,
  montariasPowerUpsIntro,
  montariasTreinoIntro,
  pontosDoTreino,
  powerUpsDeAtributo,
  powerUpsDeBoost,
  tiposDePowerUp,
} from "@/components/mounts/data/mounts-content";
import { dimensoesDe } from "@/lib/imagens";

// Só as imagens já medidas (lib/dimensoes-imagens.json) entram na grade.
const comImagem = <T extends { src: string }>(itens: T[]) => itens.filter((item) => dimensoesDe(item.src));

export default function MontariasTreinamento() {
  const boost = comImagem(powerUpsDeBoost);
  const atributo = comImagem(powerUpsDeAtributo);
  return (
    <SecaoGuia id="treinamento" titulo="Treinamento" introducao={montariasTreinoIntro}>
      <Destaque {...avisoMontado} />

      <h3 id="powerups" className="mt-10 max-w-leitura scroll-mt-12 text-titulo-4 font-bold text-texto xl:scroll-mt-0">
        PowerUps
      </h3>
      <p className="mt-2 max-w-leitura text-texto-2">
        <TextoComTermos texto={montariasPowerUpsIntro} />
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
        {tiposDePowerUp.map((tipo) => (
          <div key={tipo.titulo} className="rounded-md border border-linha bg-carvao px-4 py-3">
            <p className="font-bold text-texto">{tipo.titulo}</p>
            <p className="mt-1 text-texto-2">{tipo.texto}</p>
          </div>
        ))}
      </div>

      {boost.length > 0 ? (
        <>
          <h4 className="mt-8 text-titulo-5 font-bold text-texto">De boost</h4>
          {/* Prints de 215 px, nunca ampliadas: grades estreitas para o quadro ficar do tamanho da imagem.
              A de boost tem metade da largura, para os dois quadros saírem do tamanho dos de atributo. */}
          <Galeria className="mt-3 lg:max-w-[29.25rem]" proporcao="1 / 1" itens={boost} />
        </>
      ) : null}
      {atributo.length > 0 ? (
        <>
          <h4 className="mt-8 text-titulo-5 font-bold text-texto">De atributo</h4>
          <Galeria className="mt-3 lg:max-w-[60rem]" proporcao="1 / 1" itens={atributo} />
        </>
      ) : null}

      <h3 className="mt-10 max-w-leitura text-titulo-4 font-bold text-texto">Pontos importantes</h3>
      <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {pontosDoTreino.map((ponto) => (
          <li key={ponto}>
            <TextoComTermos texto={ponto} />
          </li>
        ))}
      </ul>
    </SecaoGuia>
  );
}

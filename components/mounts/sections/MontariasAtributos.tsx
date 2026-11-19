import Destaque from "@/components/guias/Destaque";
import Figura from "@/components/guias/Figura";
import SecaoGuia from "@/components/guias/SecaoGuia";
import {
  atributos,
  imagemDosNiveis,
  montariaNova,
  montariasAtributosIntro,
  montariasNiveisIntro,
  niveisDoAtributo,
} from "@/components/mounts/data/mounts-content";
import { dimensoesDe } from "@/lib/imagens";
import { tamanhos } from "@/lib/tamanhos";

export default function MontariasAtributos() {
  const medida = dimensoesDe(imagemDosNiveis.src);
  return (
    <SecaoGuia id="atributos" titulo="Atributos" introducao={montariasAtributosIntro}>
      <div className="overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[36rem] border-collapse text-left text-apoio">
          <caption className="sr-only">Atributos das montarias, com o nome no jogo e em português</caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                No jogo
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Em português
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                O que faz
              </th>
            </tr>
          </thead>
          <tbody>
            {atributos.map((atributo) => (
              <tr key={atributo.ingles} className="border-t border-linha align-top">
                <th scope="row" className="whitespace-nowrap px-4 py-3 font-bold text-texto">
                  {atributo.ingles}
                </th>
                <td className="whitespace-nowrap px-4 py-3 text-texto">{atributo.portugues}</td>
                <td className="px-4 py-3 text-texto-2">{atributo.explicacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 id="level-limit-max" className="mt-10 scroll-mt-12 text-titulo-4 font-bold text-texto xl:scroll-mt-0">
        Level, Limit e Max
      </h3>
      <div className={`mt-4 grid items-start gap-6 ${medida ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]" : ""}`}>
        <div>
          <p className="max-w-leitura text-texto-2">{montariasNiveisIntro}</p>
          <dl className="mt-4 flex max-w-leitura flex-col gap-3">
            {niveisDoAtributo.map((nivel) => (
              <div key={nivel.nome} className="rounded-md border border-linha bg-carvao px-4 py-3">
                <dt className="font-mono font-bold">
                  <span className={nivel.classe}>{nivel.nome}</span>{" "}
                  <span className="font-texto text-apoio font-normal text-texto-3">({nivel.cor})</span>
                </dt>
                <dd className="mt-1 text-texto-2">Representa {nivel.texto}</dd>
              </div>
            ))}
          </dl>
          <Destaque {...montariaNova} className="mt-6" />
        </div>
        {medida ? (
          <Figura
            src={imagemDosNiveis.src}
            alt={imagemDosNiveis.alt}
            legenda={imagemDosNiveis.legenda}
            sizes={tamanhos.lateral}
            proporcao="3 / 4"
          />
        ) : null}
      </div>
    </SecaoGuia>
  );
}

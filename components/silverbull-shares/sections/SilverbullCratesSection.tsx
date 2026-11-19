import DicaGsw from "@/components/guias/DicaGsw";
import Galeria from "@/components/guias/Galeria";
import SecaoGuia from "@/components/guias/SecaoGuia";
import {
  cratesChances,
  cratesImagens,
  cratesIntro,
  cratesOrigem,
  dicaDeCrate,
  raridades,
  scrap,
} from "@/components/silverbull-shares/data/silverbull-shares-content";
import { dimensoesDe } from "@/lib/imagens";

export default function SilverbullCratesSection() {
  const imagens = cratesImagens.filter((imagem) => dimensoesDe(imagem.src));
  return (
    <SecaoGuia id="crates" titulo="Crates" introducao={cratesIntro}>
      <h3 className="text-titulo-4 font-bold text-texto">De onde vêm</h3>
      <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {cratesOrigem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="mt-10 text-titulo-4 font-bold text-texto">Chance de cada raridade</h3>
      <div className="mt-4 overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[36rem] border-collapse text-left text-apoio">
          <caption className="sr-only">Chance de cada raridade de cosmético por tier de crate</caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Crate
              </th>
              {raridades.map((raridade) => (
                <th key={raridade} scope="col" className="px-4 py-2.5 text-right font-bold">
                  {raridade}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="numeros font-mono">
            {cratesChances.map((linha) => (
              <tr key={linha.tier} className="border-t border-linha">
                <th scope="row" className="px-4 py-2 text-left font-medium text-texto">
                  {linha.tier}
                </th>
                {linha.valores.map((valor, indice) => (
                  <td key={raridades[indice]} className="px-4 py-2 text-right text-texto-2">
                    {valor}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 max-w-leitura text-texto-2">{scrap}</p>

      <div className="mt-8">
        <DicaGsw titulo="Dica da GsW">{dicaDeCrate}</DicaGsw>
      </div>

      {imagens.length > 0 ? <Galeria className="mt-8" proporcao="3 / 2" itens={imagens} /> : null}
    </SecaoGuia>
  );
}

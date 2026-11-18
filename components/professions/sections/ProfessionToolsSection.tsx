import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import {
  coletaImagens,
  coletaIntro,
  coletaRegras,
  ferramentas,
  ferramentasNotas,
} from "@/components/professions/data/professions-content";
import { tamanhos } from "@/lib/tamanhos";

export default function ProfessionToolsSection() {
  return (
    <SecaoGuia id="coleta" titulo="Coleta e ferramentas" introducao={coletaIntro}>
      <ul className="flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {coletaRegras.map((regra) => (
          <li key={regra}>{regra}</li>
        ))}
      </ul>

      <h3 className="mt-10 text-titulo-4 font-bold text-texto">Ferramentas</h3>
      <div className="mt-4 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div className="overflow-x-auto rounded-md border border-linha">
          <table className="w-full min-w-[26rem] border-collapse text-left text-apoio">
            <caption className="sr-only">Tier, nível mínimo e onde comprar cada ferramenta de coleta</caption>
            <thead className="bg-carvao text-texto">
              <tr>
                <th scope="col" className="px-4 py-2.5 font-bold">
                  Ferramenta
                </th>
                <th scope="col" className="px-4 py-2.5 text-right font-bold">
                  Nível
                </th>
                <th scope="col" className="px-4 py-2.5 font-bold">
                  Onde comprar
                </th>
              </tr>
            </thead>
            <tbody>
              {ferramentas.map((ferramenta) => (
                <tr key={ferramenta.tier} className="border-t border-linha">
                  <th scope="row" className="px-4 py-2 font-medium text-texto">
                    <span className="numeros font-mono text-violeta">{ferramenta.tier}</span> {ferramenta.nome}
                  </th>
                  <td className="numeros px-4 py-2 text-right font-mono text-texto">{ferramenta.nivel}</td>
                  <td className="px-4 py-2 text-texto-2">{ferramenta.origem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-6">
          {coletaImagens.map((imagem) => (
            <FiguraNoTamanho key={imagem.src} imagem={imagem} sizes={tamanhos.lateral} />
          ))}
        </div>
      </div>
      <ul className="mt-6 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {ferramentasNotas.map((nota) => (
          <li key={nota}>{nota}</li>
        ))}
      </ul>
    </SecaoGuia>
  );
}

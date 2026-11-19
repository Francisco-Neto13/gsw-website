import SecaoGuia from "@/components/guias/SecaoGuia";
import { specialModes } from "@/components/special-modes/data/special-modes-content";

/** Uma linha por modo (o Ultimate entra como linha própria, logo abaixo do Ironman). */
const linhas = specialModes.flatMap((modo) => [
  { id: modo.id, nome: modo.nome, icone: modo.icone, cor: modo.cor, desbloqueio: modo.desbloqueio, resumo: modo.resumo },
  ...(modo.variante
    ? [
        {
          id: modo.id,
          nome: modo.variante.nome,
          icone: modo.variante.icone,
          cor: modo.variante.cor,
          desbloqueio: modo.desbloqueio,
          resumo: "Ironman sem nenhum banco, nem o do personagem.",
        },
      ]
    : []),
]);

export default function ModosComparacao() {
  return (
    <SecaoGuia id="comparacao" titulo="Comparação rápida" introducao="Os cinco modos lado a lado. Clique no nome para ver as regras completas.">
      <div className="overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[40rem] border-collapse text-left text-apoio">
          <caption className="sr-only">Modos especiais, como liberar e o que cada um muda</caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Modo
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Como liberar
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Em uma frase
              </th>
            </tr>
          </thead>
          <tbody>
            {linhas.map((linha) => (
              <tr key={linha.nome} className="border-t border-linha align-top">
                <th scope="row" className="whitespace-nowrap px-4 py-3 font-normal">
                  <a
                    href={`#${linha.id}`}
                    className="inline-flex items-center gap-2 font-bold text-texto underline decoration-violeta/40 hover:decoration-violeta"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- ícone SVG pixelado de 8x8 */}
                    <img src={linha.icone} alt="" width={16} height={16} className="[image-rendering:pixelated]" />
                    {linha.nome}
                  </a>
                </th>
                <td className="px-4 py-3 text-texto">{linha.desbloqueio}</td>
                <td className="px-4 py-3 text-texto-2">{linha.resumo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SecaoGuia>
  );
}

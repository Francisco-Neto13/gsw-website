import SecaoGuia from "@/components/guias/SecaoGuia";
import { lootrunDivisions, lootrunDivisoesTabela } from "@/components/lootrun/data/lootrun-content";

export default function LootrunDivisionsSection() {
  return (
    <SecaoGuia id="divisoes" titulo="Divisões" introducao={lootrunDivisions.description}>
      <ul className="flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {lootrunDivisions.points.map((ponto) => (
          <li key={ponto}>{ponto}</li>
        ))}
      </ul>

      <div className="mt-8 overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[34rem] border-collapse text-left text-apoio">
          <caption className="sr-only">Divisões da lootrun, XP total para chegar e o que cada uma libera</caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Divisão
              </th>
              <th scope="col" className="px-4 py-2.5 text-right font-bold">
                XP total
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Libera
              </th>
            </tr>
          </thead>
          <tbody>
            {lootrunDivisoesTabela.map((divisao) => (
              <tr key={divisao.rank} className="border-t border-linha">
                <th scope="row" className="px-4 py-2 font-medium text-texto">
                  {divisao.rank}
                </th>
                <td className="numeros px-4 py-2 text-right font-mono text-texto">{divisao.xpTotal.toLocaleString("pt-BR")}</td>
                <td className="px-4 py-2 text-texto-2">{divisao.libera}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SecaoGuia>
  );
}

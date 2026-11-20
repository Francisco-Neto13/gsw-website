import Destaque from "@/components/guias/Destaque";
import Image from "next/image";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { dicaDeRank, ranks, ranksDestaques, ranksIntro, ranksTabela } from "@/components/silverbull-shares/data/silverbull-shares-content";

export default function SilverbullRanksSection() {
  return (
    <SecaoGuia id="ranks" titulo="Ranks" introducao={ranksIntro}>
      <div className="overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[44rem] border-collapse text-left text-apoio">
          <caption className="sr-only">Preço e principais benefícios de cada rank</caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                <span className="sr-only">Benefício</span>
              </th>
              {ranks.map((rank) => (
                <th key={rank.nome} scope="col" className="px-4 py-2.5 text-right font-bold">
                  <span className="inline-flex flex-col items-end gap-1">
                    <Image src={rank.badge} alt="" width={28} height={40} className="h-10 w-auto" />
                    {rank.nome}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-linha">
              <th scope="row" className="px-4 py-2 font-medium text-texto">
                Preço
              </th>
              {ranks.map((rank) => (
                <td key={rank.nome} className="numeros px-4 py-2 text-right font-mono text-violeta">
                  {rank.shares} Shares
                </td>
              ))}
            </tr>
            {ranksTabela.map((linha) => (
              <tr key={linha.rotulo} className="border-t border-linha">
                <th scope="row" className="px-4 py-2 font-medium text-texto">
                  {linha.rotulo}
                </th>
                {linha.valores.map((valor, indice) => (
                  <td key={ranks[indice].nome} className="numeros px-4 py-2 text-right text-texto-2">
                    {valor}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-10 text-titulo-4 font-bold text-texto">O que cada rank acrescenta</h3>
      <dl className="mt-3 flex max-w-leitura flex-col gap-2 text-texto-2">
        {ranksDestaques.map((item) => (
          <div key={item.rank}>
            <dt className="inline font-bold text-texto">{item.rank}: </dt>
            <dd className="inline">{item.texto}</dd>
          </div>
        ))}
      </dl>

      <Destaque className="mt-8" tipo="dica" titulo="Dica" texto={dicaDeRank} />
    </SecaoGuia>
  );
}

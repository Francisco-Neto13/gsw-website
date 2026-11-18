import { CircleAlert } from "lucide-react";
import Figura from "@/components/guias/Figura";
import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import { extras, raidGambits, raidRanks, supportImages } from "@/components/raids/data/raids-content";
import { tamanhoDe } from "@/components/raids/data/raids-midia";
import { tamanhos } from "@/lib/tamanhos";

export default function RaidsExtras() {
  return (
    <SecaoGuia
      id="extras"
      titulo="Gambits, ranking e dicas"
      introducao="O que não depende de uma sala específica, mas pesa na preparação da party."
    >
      <h3 className="text-titulo-4 max-w-leitura font-bold text-texto">
        <TextoComTermos texto="[[gambit|Gambits]]" />
      </h3>
      <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        <li>
          <TextoComTermos texto={raidGambits.diarios} />
        </li>
        <li>{raidGambits.slots}</li>
        <li>{raidGambits.recompensa}</li>
      </ul>
      <p className="mt-4 flex max-w-leitura gap-2 rounded-md border border-ambar/40 px-4 py-3 text-texto-2">
        <CircleAlert aria-hidden size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-ambar" />
        <span>{raidGambits.ativos}</span>
      </p>

      <h3 className="text-titulo-4 mt-10 max-w-leitura font-bold text-texto">Ranking da divisão de raids</h3>
      <p className="mt-2 max-w-leitura text-texto-2">
        O rank sobe com XP de divisão, ganho a cada raid concluída. Depois de Sentinel vem Admiral: na divisão de
        raids não existe Elite.
      </p>
      <div className="mt-4 overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[30rem] border-collapse text-left text-apoio">
          <caption className="sr-only">Ranks da divisão de raids, XP total e o que cada um libera</caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Rank
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
            {raidRanks.map((linha) => (
              <tr key={linha.rank} className="border-t border-linha">
                <th scope="row" className="whitespace-nowrap px-4 py-2 font-normal text-texto">
                  {linha.rank}
                </th>
                <td className="numeros px-4 py-2 text-right font-mono text-texto-2">{linha.xpTotal}</td>
                <td className="px-4 py-2 text-texto-2">{linha.libera}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-titulo-4 mt-10 max-w-leitura font-bold text-texto">Antes de entrar</h3>
      <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {extras.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {supportImages.map((imagem) => (
          <Figura
            key={imagem.src}
            src={imagem.src}
            alt={imagem.alt}
            legenda={imagem.caption}
            sizes={tamanhos.metade}
            {...tamanhoDe(imagem.src)}
          />
        ))}
      </div>
    </SecaoGuia>
  );
}

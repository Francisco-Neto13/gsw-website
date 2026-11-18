import FiguraNoTamanho from "@/components/guias/FiguraNoTamanho";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { levelingSpots, spotsIntro } from "@/components/leveling/data/leveling-content";
import { tamanhos } from "@/lib/tamanhos";

const idDoSpot = (nome: string) => `spot-${nome.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function LevelingSpotsSection() {
  return (
    <SecaoGuia id="spots" titulo="Spots do 1 ao 121" introducao={spotsIntro}>
      <div className="overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[30rem] border-collapse text-left text-apoio">
          <caption className="sr-only">Spots de leveling, faixa de nível e coordenadas</caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Spot
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Níveis
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Coordenadas (X, Z)
              </th>
            </tr>
          </thead>
          <tbody>
            {levelingSpots.map((spot) => (
              <tr key={spot.name} className="border-t border-linha">
                <th scope="row" className="px-4 py-2 font-medium">
                  <a href={`#${idDoSpot(spot.name)}`} className="text-texto underline decoration-violeta/40 hover:decoration-violeta">
                    {spot.name}
                  </a>
                </th>
                <td className="numeros px-4 py-2 text-texto-2">{spot.range.replace("Lvl ", "")}</td>
                <td className="numeros px-4 py-2 font-mono text-texto-2">{spot.coords}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex flex-col gap-10">
        {levelingSpots.map((spot) => (
          <div
            key={spot.name}
            id={idDoSpot(spot.name)}
            className="grid scroll-mt-12 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] xl:scroll-mt-0"
          >
            <div>
              <h3 className="text-titulo-4 font-bold text-texto">{spot.name}</h3>
              <p className="numeros mt-1 text-apoio text-violeta">
                {spot.range.replace("Lvl ", "Nível ")} · <span className="font-mono">{spot.coords}</span>
              </p>
              <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
                {spot.notes.map((nota) => (
                  <li key={nota}>{nota}</li>
                ))}
              </ul>
            </div>
            <FiguraNoTamanho imagem={{ src: spot.image, alt: `O spot ${spot.name}` }} sizes={tamanhos.lateral} />
          </div>
        ))}
      </div>
    </SecaoGuia>
  );
}

import Coordenada from "@/components/guias/Coordenada";
import Galeria from "@/components/guias/Galeria";
import SecaoGuia from "@/components/guias/SecaoGuia";
import IconeProfissao from "@/components/professions/sections/IconeProfissao";
import { craftingProfessions, grindSpots, spotsImagens, spotsIntro } from "@/components/professions/data/professions-content";
import { dimensoesDe } from "@/lib/imagens";

const COORDENADA = /^-?\d+, -?\d+, -?\d+$/;
const iconeDe = (nome: string) => craftingProfessions.find((profissao) => profissao.name === nome)?.icone;

export default function ProfessionGrindSpotsSection() {
  const imagens = spotsImagens.filter((imagem) => dimensoesDe(imagem.src));
  return (
    <SecaoGuia id="spots" titulo="Spots de ingredientes" introducao={spotsIntro}>
      <div className="flex flex-col gap-6">
        {grindSpots.map((profissao) => {
          const icone = iconeDe(profissao.profession);
          return (
            <div key={profissao.profession} className="overflow-x-auto rounded-md border border-linha">
              <table className="w-full min-w-[34rem] table-fixed border-collapse text-left text-apoio">
                <caption className="bg-carvao px-4 py-2.5 text-left">
                  <span className="flex items-center gap-2.5 font-bold text-texto">
                    {icone ? <IconeProfissao src={icone} /> : null}
                    {profissao.profession}
                    <span className="font-normal text-texto-3">{profissao.resources}</span>
                  </span>
                </caption>
                <thead className="border-t border-linha text-texto-3">
                  <tr>
                    <th scope="col" className="w-20 px-4 py-2 text-right font-medium">
                      Nível
                    </th>
                    <th scope="col" className="w-1/2 px-4 py-2 font-medium">
                      Ingrediente
                    </th>
                    <th scope="col" className="px-4 py-2 font-medium">
                      Coordenadas
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {profissao.spots.map((spot) => (
                    <tr key={`${spot.level}-${spot.name}`} className="border-t border-linha">
                      <td className="numeros px-4 py-2 text-right font-mono text-violeta">{spot.level}</td>
                      <th scope="row" className="px-4 py-2 font-medium text-texto">
                        {spot.name}
                        {spot.isNpc ? <span className="ml-2 text-detalhe font-normal text-texto-3">NPC</span> : null}
                        {spot.maxLevel ? <span className="ml-2 text-detalhe font-normal text-ambar">Até +10</span> : null}
                      </th>
                      <td className="px-4 py-2 text-texto-2">
                        {COORDENADA.test(spot.coords) ? <Coordenada valor={spot.coords} /> : "Vendido por NPC"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
      {imagens.length > 0 ? <Galeria className="mt-8" itens={imagens} /> : null}
    </SecaoGuia>
  );
}

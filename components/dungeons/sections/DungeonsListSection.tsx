import Galeria from "@/components/guias/Galeria";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { dimensoesDe } from "@/lib/imagens";
import {
  dungeonsCorrompidas,
  dungeonsListaIntro,
  dungeonsNormais,
  type DungeonDaLista,
} from "@/components/dungeons/data/dungeons-content";

function TabelaDeDungeons({ titulo, lista }: { titulo: string; lista: DungeonDaLista[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-linha">
      <table className="w-full min-w-[38rem] border-collapse text-left text-apoio">
        <caption className="bg-carvao px-4 py-2.5 text-left font-bold text-texto">{titulo}</caption>
        <thead className="border-t border-linha text-texto-3">
          <tr>
            <th scope="col" className="px-4 py-2 font-medium">
              Dungeon
            </th>
            <th scope="col" className="px-4 py-2 text-right font-medium">
              Nível
            </th>
            <th scope="col" className="px-4 py-2 font-medium">
              Chefe final
            </th>
            <th scope="col" className="px-4 py-2 font-medium">
              Onde
            </th>
          </tr>
        </thead>
        <tbody>
          {lista.map((dungeon) => (
            <tr key={dungeon.nome} className="border-t border-linha align-top">
              <th scope="row" className="px-4 py-2.5 font-medium text-texto">
                {dungeon.nome}
                {dungeon.quest ? (
                  <span className="block text-apoio font-normal text-texto-3">Exige a quest {dungeon.quest}</span>
                ) : null}
              </th>
              <td className="numeros px-4 py-2.5 text-right font-mono text-texto">{dungeon.nivel}+</td>
              <td className="px-4 py-2.5 text-texto-2">{dungeon.chefe}</td>
              <td className="px-4 py-2.5 text-texto-2">{dungeon.regiao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Uma imagem por dungeon, na galeria padrão (só as que existem e estão medidas). */
function ImagensDasDungeons({ lista }: { lista: DungeonDaLista[] }) {
  const itens = lista
    .filter((dungeon) => dungeon.imagem && dimensoesDe(dungeon.imagem))
    .map((dungeon) => ({ src: dungeon.imagem!, alt: `Cenário da dungeon ${dungeon.nome}`, legenda: `${dungeon.nome}, nível ${dungeon.nivel}+` }));
  return itens.length > 0 ? <Galeria itens={itens} className="mt-2" /> : null;
}

export default function DungeonsListSection() {
  return (
    <SecaoGuia id="lista" titulo="Todas as dungeons" introducao={dungeonsListaIntro}>
      <div className="flex flex-col gap-6">
        <TabelaDeDungeons titulo="Dungeons normais" lista={dungeonsNormais} />
        <ImagensDasDungeons lista={dungeonsNormais} />
        <TabelaDeDungeons titulo="Dungeons corrompidas" lista={dungeonsCorrompidas} />
        <ImagensDasDungeons lista={dungeonsCorrompidas} />
      </div>
      <p className="mt-2 max-w-leitura text-apoio text-texto-3">
        Níveis mínimos e chefes conferidos na wiki da Wynncraft para a versão 2.2.4.
      </p>
    </SecaoGuia>
  );
}

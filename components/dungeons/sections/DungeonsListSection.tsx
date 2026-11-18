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

export default function DungeonsListSection() {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-10">
      <div className="max-w-leitura">
        <h2 className="text-titulo-2 text-texto">{dungeonsListaIntro.title}</h2>
        <p className="mt-3 text-texto-2">{dungeonsListaIntro.description}</p>
      </div>
      <div className="mt-6 flex flex-col gap-6">
        <TabelaDeDungeons titulo="Dungeons normais" lista={dungeonsNormais} />
        <TabelaDeDungeons titulo="Dungeons corrompidas" lista={dungeonsCorrompidas} />
      </div>
      <p className="mt-2 max-w-leitura text-apoio text-texto-3">
        Níveis mínimos e chefes conferidos na wiki da Wynncraft para a versão 2.2.4.
      </p>
    </section>
  );
}

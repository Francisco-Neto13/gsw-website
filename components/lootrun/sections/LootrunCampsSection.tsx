import Coordenada from "@/components/guias/Coordenada";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { lootrunCamps, lootrunCampsIntro } from "@/components/lootrun/data/lootrun-content";
import MidiasLootrun from "@/components/lootrun/sections/MidiasLootrun";

const idDoCamp = (nome: string) => `camp-${nome.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}`;

export default function LootrunCampsSection() {
  return (
    <SecaoGuia id="camps" titulo="Camps" introducao={lootrunCampsIntro.description}>
      <div className="overflow-x-auto rounded-md border border-linha">
        <table className="w-full min-w-[46rem] border-collapse text-left text-apoio">
          <caption className="sr-only">
            Lootcamps: onde ficam, dificuldade, tempo ganho por desafio e quanto os mobs ficam mais fortes a cada desafio
          </caption>
          <thead className="bg-carvao text-texto">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Camp
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Coordenadas
              </th>
              <th scope="col" className="px-4 py-2.5 font-bold">
                Dificuldade
              </th>
              <th scope="col" className="px-4 py-2.5 text-right font-bold">
                Tempo por desafio
              </th>
              <th scope="col" className="px-4 py-2.5 text-right font-bold">
                Mobs por desafio
              </th>
            </tr>
          </thead>
          <tbody>
            {lootrunCamps.map((camp) => (
              <tr key={camp.name} className="border-t border-linha align-top">
                <th scope="row" className="px-4 py-2.5 font-medium">
                  <a href={`#${idDoCamp(camp.name)}`} className="text-texto underline decoration-violeta/40 hover:decoration-violeta">
                    {camp.name}
                  </a>
                  <span className="block font-normal text-texto-3">perto de {camp.perto}</span>
                </th>
                <td className="px-4 py-2.5">
                  <Coordenada valor={camp.coordinates} />
                </td>
                <td className="px-4 py-2.5 text-texto-2">{camp.difficulty}</td>
                <td className="numeros px-4 py-2.5 text-right text-texto-2">
                  +{camp.tempo[0]} s ao chegar
                  <span className="block">+{camp.tempo[1]} s ao concluir</span>
                </td>
                <td className="numeros px-4 py-2.5 text-right text-texto-2">
                  +{camp.escala[0]} de dano
                  <span className="block">+{camp.escala[1]} de vida</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 max-w-leitura text-apoio text-texto-3">
        Tempo e força dos mobs conferidos na wiki da Wynncraft. A dificuldade é a avaliação da guilda.
      </p>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <ul className="flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
          {lootrunCampsIntro.notes.map((nota) => (
            <li key={nota}>{nota}</li>
          ))}
        </ul>
        <MidiasLootrun itens={lootrunCampsIntro.media} />
      </div>

      <div className="mt-12 flex flex-col gap-12">
        {lootrunCamps.map((camp) => (
          <div key={camp.name} id={idDoCamp(camp.name)} className="scroll-mt-12 xl:scroll-mt-0">
            <h3 className="text-titulo-4 font-bold text-texto">{camp.name}</h3>
            <p className="mt-1 text-apoio text-texto-3">
              {camp.difficulty} · perto de {camp.perto}
            </p>
            <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
              {camp.notes.map((nota) => (
                <li key={nota}>{nota}</li>
              ))}
            </ul>
            {camp.dangerousChallenges && camp.dangerousChallenges.length > 0 ? (
              <>
                <p className="mt-4 font-bold text-texto">Desafios que pedem atenção</p>
                <ul className="mt-2 flex max-w-leitura list-disc flex-col gap-1 pl-5 text-texto-2 marker:text-ambar">
                  {camp.dangerousChallenges.map((desafio) => (
                    <li key={desafio}>{desafio}</li>
                  ))}
                </ul>
              </>
            ) : null}
            <MidiasLootrun itens={camp.media ?? []} className="mt-6" />
          </div>
        ))}
      </div>
    </SecaoGuia>
  );
}

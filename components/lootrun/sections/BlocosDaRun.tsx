import type { LootrunMechanicBlock } from "@/components/lootrun/data/lootrun-content";
import MidiasLootrun from "@/components/lootrun/sections/MidiasLootrun";

/** Blocos de mecânica (Desafios, Timer, Rerolls...): subtítulo, regras e as mídias que mostram cada uma. */
export default function BlocosDaRun({ blocos }: { blocos: LootrunMechanicBlock[] }) {
  return (
    <div className="flex flex-col gap-12">
      {blocos.map((bloco) => (
        <div key={bloco.title}>
          <h3 className="text-titulo-4 font-bold text-texto">{bloco.title}</h3>
          <p className="mt-1 max-w-leitura text-texto-2">{bloco.description}</p>
          <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {bloco.points.map((ponto) => (
              <li key={ponto}>{ponto}</li>
            ))}
          </ul>
          <MidiasLootrun itens={bloco.media ?? []} className="mt-6" />
        </div>
      ))}
    </div>
  );
}

import SecaoGuia from "@/components/guias/SecaoGuia";
import { lootrunCombos, lootrunCombosIntro } from "@/components/lootrun/data/lootrun-content";

function ListaDoCombo({ titulo, itens }: { titulo: string; itens?: string[] }) {
  if (!itens || itens.length === 0) return null;
  return (
    <div>
      <dt className="text-apoio font-bold text-texto-3">{titulo}</dt>
      <dd className="mt-1 text-texto-2">{itens.join(", ")}</dd>
    </div>
  );
}

export default function LootrunCombosSection() {
  return (
    <SecaoGuia id="combos" titulo="Combos de missões e trials" introducao={lootrunCombosIntro.description}>
      <div className="grid gap-4 lg:grid-cols-2">
        {lootrunCombos.map((combo) => (
          <div key={combo.title} className="rounded-md border border-linha bg-carvao px-5 py-4">
            <h3 className="font-bold text-texto">{combo.title}</h3>
            <p className="numeros text-apoio text-violeta">{combo.challengeRange}</p>
            <p className="mt-2 text-texto-2">{combo.summary}</p>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <ListaDoCombo titulo="Missões necessárias" itens={combo.missionRequired} />
              <ListaDoCombo titulo="Missões recomendadas" itens={combo.missionRecommended} />
              <ListaDoCombo titulo="Trials necessárias" itens={combo.trialRequired} />
              <ListaDoCombo titulo="Trials recomendadas" itens={combo.trialRecommended} />
            </dl>
          </div>
        ))}
      </div>
    </SecaoGuia>
  );
}

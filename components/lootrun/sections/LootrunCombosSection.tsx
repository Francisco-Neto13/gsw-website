import { lootrunCombos, lootrunCombosIntro } from "@/components/lootrun/data/lootrun-content";

function ComboList({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="text-apoio font-bold text-texto-3">{title}</p>
      <div className="mt-2 space-y-1.5">
        {items.map((item) => (
          <p key={item} className="text-texto-2">
            - {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function LootrunCombosSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-titulo-2 text-texto">
            {lootrunCombosIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {lootrunCombosIntro.description}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {lootrunCombos.map((combo, index) => (
            <article
              key={combo.title}
              className="rounded-md border border-linha bg-carvao p-5 sm:p-7"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="text-detalhe font-bold uppercase tracking-[0.35em] text-violeta/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{combo.title}</h3>
                <span className="rounded-md border border-linha bg-white/5 px-2 py-1 text-detalhe text-texto-2">
                  {combo.challengeRange}
                </span>
              </div>

              <p className="mb-5 text-texto-2">{combo.summary}</p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <ComboList title="Missões necessárias" items={combo.missionRequired} />
                <ComboList title="Missões recomendadas" items={combo.missionRecommended} />
                <ComboList title="Trials necessárias" items={combo.trialRequired} />
                <ComboList title="Trials recomendadas" items={combo.trialRecommended} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


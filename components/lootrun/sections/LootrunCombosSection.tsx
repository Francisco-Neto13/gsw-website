import { lootrunCombos, lootrunCombosIntro } from "@/components/lootrun/data/lootrun-content";

function ComboList({ title, items }: { title: string; items?: string[] }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-gsw/80">{title}</p>
      <div className="mt-2 space-y-1.5">
        {items.map((item) => (
          <p key={item} className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            - {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function LootrunCombosSection() {
  return (
    <section className="bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {lootrunCombosIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunCombosIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {lootrunCombosIntro.description}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {lootrunCombos.map((combo, index) => (
            <article
              key={combo.title}
              className="rounded-2xl border border-white/10 bg-black/35 p-5 sm:p-7"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-gsw/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{combo.title}</h3>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-300">
                  {combo.challengeRange}
                </span>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-zinc-400 sm:text-base">{combo.summary}</p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <ComboList title="Miss\u00f5es necess\u00e1rias" items={combo.missionRequired} />
                <ComboList title="Miss\u00f5es recomendadas" items={combo.missionRecommended} />
                <ComboList title="Trials necess\u00e1rias" items={combo.trialRequired} />
                <ComboList title="Trials recomendadas" items={combo.trialRecommended} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


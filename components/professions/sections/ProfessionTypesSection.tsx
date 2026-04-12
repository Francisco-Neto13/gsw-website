import {
  craftingProfessions,
  gatheringProfessions,
  professionCategoryTitles,
  professionTypesIntro,
} from "@/components/professions/data/professions-content";

export default function ProfessionTypesSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {professionTypesIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {professionTypesIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {professionTypesIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/20 p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {professionCategoryTitles.gathering}
            </h3>
            <div className="space-y-3">
              {gatheringProfessions.map((profession) => (
                <div
                  key={profession.name}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-black/40 px-4 py-3"
                >
                  <div>
                    <span className="block text-sm font-bold text-white">{profession.name}</span>
                    <span className="text-xs text-zinc-500">{profession.resources}</span>
                  </div>
                  <span className="rounded-lg bg-gsw/10 px-3 py-1 text-xs font-semibold text-gsw">
                    {profession.tool}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/20 p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {professionCategoryTitles.crafting}
            </h3>
            <div className="space-y-3">
              {craftingProfessions.map((profession) => (
                <div
                  key={profession.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-black/40 px-4 py-3"
                >
                  <div>
                    <span className="block text-sm font-bold text-white">{profession.name}</span>
                    <span className="text-xs text-zinc-500">{profession.produces}</span>
                  </div>
                  <span className="shrink-0 rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                    {profession.resources}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

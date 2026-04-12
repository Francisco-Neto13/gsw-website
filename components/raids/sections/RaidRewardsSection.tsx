import RaidImageCard from "@/components/raids/sections/RaidImageCard";
import {
  raidAspectDetails,
  raidAspectExamples,
  raidFinalPullsTips,
  raidRewardImages,
  raidRewardOutcomes,
  raidRewardsIntro,
  raidRewardsLabels,
} from "@/components/raids/data/raids-content";

export default function RaidRewardsSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
      <div className="pointer-events-none absolute top-20 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {raidRewardsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {raidRewardsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {raidRewardsIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {raidRewardOutcomes.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-white/10 bg-zinc-900/20 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-6"
            >
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.35em] text-gsw/80">
                {item.label}
              </span>
              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{item.value}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/20 p-6 sm:p-8">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-gsw">
              {raidRewardsLabels.finalPulls}
            </span>
            <ul className="space-y-3">
              {raidFinalPullsTips.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-gsw">
              {raidRewardsLabels.aspects}
            </span>
            <ul className="space-y-3">
              {raidAspectDetails.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-white/5 pt-6">
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.35em] text-zinc-500">
                {raidRewardsLabels.aspectExamples}
              </span>
              <div className="flex flex-wrap gap-2">
                {raidAspectExamples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {raidRewardImages.map((item) => (
            <RaidImageCard key={item.src} src={item.src} alt={item.alt} caption={item.caption} />
          ))}
        </div>
      </div>
    </section>
  );
}

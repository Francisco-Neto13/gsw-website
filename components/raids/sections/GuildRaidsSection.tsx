import RaidImageCard from "@/components/raids/sections/RaidImageCard";
import {
  guildRaidAvailableImage,
  guildRaidAspectDistribution,
  guildRaidRewards,
  guildRaidsDescription,
} from "@/components/raids/data/raids-content";

export default function GuildRaidsSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            Conteúdo de guilda
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Guild Raids
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {guildRaidsDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="group rounded-2xl border border-white/10 bg-zinc-900/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8">
            <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">
              Recompensas da Guilda
            </h3>
            <ul className="space-y-3">
              {guildRaidRewards.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-zinc-900/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8">
            <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">
              Distribuição de Aspects
            </h3>
            <ul className="space-y-3">
              {guildRaidAspectDistribution.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl sm:mt-10">
          <RaidImageCard
            src={guildRaidAvailableImage.src}
            alt={guildRaidAvailableImage.alt}
            caption={guildRaidAvailableImage.caption}
          />
        </div>
      </div>
    </section>
  );
}

import {
  lootrunCamps,
  lootrunCampsIntro,
} from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";

function isGif(src?: string) {
  return Boolean(src && src.toLowerCase().endsWith(".gif"));
}

export default function LootrunCampsSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {lootrunCampsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunCampsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {lootrunCampsIntro.description}
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-white/10 bg-zinc-950/60 p-5 sm:p-7">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gsw/80">Lista literal de camps</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {lootrunCamps.map((camp, index) => (
              <article
                key={`${camp.name}-${camp.coordinates}`}
                className="rounded-xl border border-white/10 bg-black/35 px-4 py-3"
              >
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-gsw/80">
                    Camp {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-semibold text-zinc-300">
                    {camp.difficulty}
                  </span>
                </div>
                <p className="text-sm font-semibold leading-relaxed text-zinc-200">{camp.name}</p>
                <p className="mt-1 text-xs text-zinc-400 sm:text-sm">[{camp.coordinates}]</p>
              </article>
            ))}
          </div>
        </div>

        {lootrunCampsIntro.media.length > 0 ? (
          <div className="mb-8 grid grid-cols-1 gap-4">
            {lootrunCampsIntro.media.map((item) => (
              <LootrunMediaPlaceholder key={item.name} item={item} />
            ))}
          </div>
        ) : null}

        <div className="mb-8 rounded-2xl border border-white/10 bg-zinc-950/60 p-5 sm:p-7">
          <div className="space-y-3">
            {lootrunCampsIntro.notes.map((note) => (
              <div key={note} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {lootrunCamps.map((camp, index) => {
            const media = camp.media ?? [];
            const featuredMedia = media.find((item) => !isGif(item.src)) ?? media[0];
            const secondaryMedia = media.filter((item) => item !== featuredMedia);

            return (
              <article key={camp.name} className="rounded-2xl border border-white/10 bg-zinc-900/20 p-4 sm:p-5">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-gsw/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">{camp.name}</h3>
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-300">
                    {camp.difficulty}
                  </span>
                </div>

                <p className="text-sm text-zinc-400 sm:text-base">
                  Coordenadas: <span className="font-medium text-zinc-200">{camp.coordinates}</span>
                </p>

                <div className="mt-3 space-y-2">
                  {camp.notes.map((note) => (
                    <div key={note} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>

                {featuredMedia ? (
                  <div className="mt-4 space-y-4">
                    <LootrunMediaPlaceholder item={featuredMedia} />

                    {secondaryMedia.length > 0 ? (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {secondaryMedia.map((item) => (
                          <div key={item.name} className="mx-auto w-full max-w-sm">
                            <LootrunMediaPlaceholder item={item} />
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}

                {camp.dangerousChallenges && camp.dangerousChallenges.length > 0 ? (
                  <div className="mt-4 rounded-xl border border-white/10 bg-zinc-900/40 p-3 sm:p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-gsw/80">Desafios de atenção</p>
                    <div className="mt-2 space-y-1.5">
                      {camp.dangerousChallenges.map((challenge) => (
                        <p key={challenge} className="text-sm text-zinc-400 sm:text-base">
                          - {challenge}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


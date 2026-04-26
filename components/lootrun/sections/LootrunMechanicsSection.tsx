import {
  lootrunMechanicBlocks,
  lootrunMechanicsIntro,
} from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";

export default function LootrunMechanicsSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {lootrunMechanicsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunMechanicsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {lootrunMechanicsIntro.description}
          </p>
        </div>

        <div className="space-y-6">
          {lootrunMechanicBlocks.map((block) => {
            const mediaItems = block.media ?? [];
            const hasMedia = mediaItems.length > 0;
            const hasMobileFeatured = mediaItems.length > 2;

            return (
              <article
                key={block.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20"
              >
                <div className="border-b border-white/5 px-5 py-5 sm:px-7">
                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{block.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">{block.description}</p>
                </div>

                <div className="px-5 py-5 sm:px-7 sm:py-6">
                  {hasMedia ? (
                    <div
                      className={`grid gap-4 ${
                        hasMobileFeatured ? "grid-cols-2" : "grid-cols-1"
                      } ${mediaItems.length > 2 ? "sm:grid-cols-2" : ""}`}
                    >
                      {mediaItems.map((item, index) => (
                        <div
                          key={item.name}
                          className={hasMobileFeatured && index === 0 ? "col-span-2 sm:col-span-1" : undefined}
                        >
                          <LootrunMediaPlaceholder item={item} compact={hasMobileFeatured && index > 0} />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 space-y-3">
                    {block.points.map((point) => (
                      <div key={point} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


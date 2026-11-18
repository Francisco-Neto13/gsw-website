import {
  lootrunMechanicBlocks,
  lootrunMechanicsIntro,
} from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";

export default function LootrunMechanicsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
            {lootrunMechanicsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
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
                className="overflow-hidden rounded-md border border-linha bg-carvao"
              >
                <div className="border-b border-linha px-5 py-5 sm:px-7">
                  <h3 className="text-xl font-bold tracking-tight text-texto sm:text-2xl">{block.title}</h3>
                  <p className="mt-2 text-texto-2">{block.description}</p>
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
                      <div key={point} className="flex gap-3 text-texto-2">
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


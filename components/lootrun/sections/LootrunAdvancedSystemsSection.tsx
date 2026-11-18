import {
  lootrunAdvancedSystems,
  lootrunAdvancedSystemsIntro,
} from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";
import { tamanhos } from "@/lib/tamanhos";
import { ehPrintPequena } from "@/lib/imagens";

export default function LootrunAdvancedSystemsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div>
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {lootrunAdvancedSystemsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {lootrunAdvancedSystemsIntro.description}
          </p>
        </div>

        <div className="space-y-6">
          {lootrunAdvancedSystems.map((block) => {
            const mediaItems = block.media ?? [];
            const hasMedia = mediaItems.length > 0;
            const hasMobileFeatured = mediaItems.length > 2;
            // Uma print pequena só: vai ao lado da lista, em vez de ficar perdida num quadro largo.
            const lateral = mediaItems.length === 1 && ehPrintPequena(mediaItems[0].src);

            return (
              <article
                key={block.title}
                className="overflow-hidden rounded-md border border-linha bg-carvao"
              >
                <div className="border-b border-linha px-5 py-5 sm:px-7">
                  <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{block.title}</h3>
                  <p className="mt-2 text-texto-2">{block.description}</p>
                </div>

                <div className={`px-5 py-5 sm:px-7 sm:py-6 ${lateral ? "grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]" : ""}`}>
                  <div className="space-y-3">
                    {block.points.map((point) => (
                      <div key={point} className="flex gap-3 text-texto-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {hasMedia ? (
                    <div
                      className={`${lateral ? "lg:mt-0" : ""} mt-5 grid gap-4 ${
                        hasMobileFeatured ? "grid-cols-2" : "grid-cols-1"
                      } ${mediaItems.length > 1 ? "sm:grid-cols-2" : ""}`}
                    >
                      {mediaItems.map((item, index) => (
                        <div
                          key={item.name}
                          className={hasMobileFeatured && index === 0 ? "col-span-2 sm:col-span-1" : undefined}
                        >
                          <LootrunMediaPlaceholder item={item} compact={hasMobileFeatured && index > 0} sizes={lateral ? tamanhos.lateral : tamanhos.metade} />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


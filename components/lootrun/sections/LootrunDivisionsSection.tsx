import { lootrunDivisions } from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";

export default function LootrunDivisionsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
            {lootrunDivisions.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {lootrunDivisions.description}
          </p>
        </div>

        <div className="rounded-md border border-linha bg-carvao p-5 sm:p-7">
          <div className="space-y-3">
            {lootrunDivisions.points.map((point) => (
              <div key={point} className="flex gap-3 text-texto-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-6 grid grid-cols-1 gap-4 ${
            lootrunDivisions.media.length > 1 ? "sm:grid-cols-2 sm:gap-6" : ""
          }`}
        >
          {lootrunDivisions.media.map((item) => (
            <LootrunMediaPlaceholder key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}


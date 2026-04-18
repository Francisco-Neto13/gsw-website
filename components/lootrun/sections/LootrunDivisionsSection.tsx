import { lootrunDivisions } from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";

export default function LootrunDivisionsSection() {
  return (
    <section className="bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {lootrunDivisions.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunDivisions.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {lootrunDivisions.description}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-7">
          <div className="space-y-3">
            {lootrunDivisions.points.map((point) => (
              <div key={point} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
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


import { lootrunParticipation } from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";

export default function LootrunParticipationSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {lootrunParticipation.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunParticipation.title}
          </h2>
          {lootrunParticipation.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
          <p className="mx-auto mt-4 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Localização: <span className="font-medium text-white">{lootrunParticipation.location}</span>.
            <br />
            {lootrunParticipation.npcNote}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 gap-4 ${
            lootrunParticipation.media.length > 1 ? "sm:grid-cols-2 sm:gap-6" : ""
          }`}
        >
          {lootrunParticipation.media.map((item) => (
            <LootrunMediaPlaceholder key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}


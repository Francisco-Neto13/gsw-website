import Image from "next/image";
import {
  levelingSpots,
  levelingSpotsClosingQuote,
  levelingSpotsDescription,
} from "@/components/leveling/data/leveling-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

export default function LevelingSpotsSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            Do nível 1 ao 106
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">Spots</h2>
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {levelingSpotsDescription}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {levelingSpots.map((spot, index) => (
            <article
              key={spot.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30"
            >
              <div className="flex flex-col gap-2 border-b border-white/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5">
                <div className="flex items-center gap-4">
                  <span className="select-none text-3xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/15 sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">{spot.name}</h3>
                    <span className="text-xs font-semibold text-gsw">{spot.range}</span>
                  </div>
                </div>
                <code className="w-fit rounded-lg bg-white/5 px-3 py-1.5 text-xs font-mono text-zinc-400">
                  {spot.coords}
                </code>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <ul className="space-y-3 px-5 py-5 sm:px-7 sm:py-6">
                  {spot.notes.map((note) => (
                    <li key={`${spot.name}-${note}`} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
                <ClickableImagePreview src={spot.image} alt={`Screenshot do spot ${spot.name}`}>
                  <div className="relative aspect-video w-full border-t border-white/5 lg:border-t-0 lg:border-l">
                    <Image src={spot.image} alt={`Screenshot do spot ${spot.name}`} fill className="object-cover" />
                  </div>
                </ClickableImagePreview>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center sm:mt-20">
          <p className="inline-block border-t border-white/5 px-6 pt-10 text-sm leading-relaxed text-zinc-500 italic sm:px-12 sm:pt-12">
            &ldquo;{levelingSpotsClosingQuote}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

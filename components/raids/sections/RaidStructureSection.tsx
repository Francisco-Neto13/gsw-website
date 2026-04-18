import {
  raidStructureCards,
  raidStructureIntro,
} from "@/components/raids/data/raids-content";

export default function RaidStructureSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {raidStructureIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {raidStructureIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {raidStructureIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {raidStructureCards.map((item, index) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-white/10 bg-black/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8"
            >
              <span className="absolute right-4 bottom-3 select-none text-4xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


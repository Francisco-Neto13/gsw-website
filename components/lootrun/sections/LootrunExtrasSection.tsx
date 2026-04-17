import {
  lootrunExtraSupportMedia,
  lootrunExtras,
  lootrunExtrasIntro,
} from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";

export default function LootrunExtrasSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {lootrunExtrasIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunExtrasIntro.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {lootrunExtras.map((item, index) => (
            <article
              key={item}
              className="group relative rounded-2xl border border-white/10 bg-zinc-900/20 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gsw/40 hover:bg-black/60 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/5 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-gsw/75">
                  Nota {String(index + 1).padStart(2, "0")}
                </span>
                <span className="select-none text-3xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{item}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {lootrunExtraSupportMedia.map((item) => (
            <LootrunMediaPlaceholder key={item.name} item={item} kind="Imagem" />
          ))}
        </div>
      </div>
    </section>
  );
}

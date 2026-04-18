import { bombCards, bombStoreImage, bombsIntro } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullImageSlot from "@/components/silverbull-shares/sections/SilverbullImageSlot";

export default function SilverbullBombsSection() {
  return (
    <section className="bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {bombsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {bombsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {bombsIntro.description}
          </p>
        </div>

        <div className="mb-6 mx-auto max-w-2xl">
          <SilverbullImageSlot label={bombStoreImage.label} src={bombStoreImage.src} alt={bombStoreImage.alt} compact />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {bombCards.map((bomb) => (
            <article key={bomb.name} className="rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">{bomb.icon}</span>
                <h3 className="text-sm font-bold tracking-tight text-white sm:text-base">{bomb.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">{bomb.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

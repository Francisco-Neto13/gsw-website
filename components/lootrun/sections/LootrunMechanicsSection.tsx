import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { lootrunMechanicCards, lootrunMechanicsIntro } from "@/components/lootrun/data/lootrun-content";

export default function LootrunMechanicsSection() {
  return (
    <section className="bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {lootrunMechanicsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunMechanicsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {lootrunMechanicsIntro.description}
          </p>
        </div>

        <div className="space-y-6">
          {lootrunMechanicCards.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="space-y-3 px-5 py-5 sm:px-7 sm:py-6">
                  <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">{item.title}</h3>
                  {item.notes.map((note) => (
                    <div key={note} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
                <div className="flex min-h-[300px] items-center justify-center border-t border-white/5 bg-zinc-950/50 p-4 lg:border-t-0 lg:border-l">
                  <ClickableImagePreview src={item.image} alt={item.title}>
                    <div className="relative h-[260px] w-full overflow-hidden rounded-lg sm:h-[320px] lg:h-[360px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  </ClickableImagePreview>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

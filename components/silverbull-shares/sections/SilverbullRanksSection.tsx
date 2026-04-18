import Image from "next/image";
import { rankCards, rankIntro, rankTip } from "@/components/silverbull-shares/data/silverbull-shares-content";

export default function SilverbullRanksSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {rankIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {rankIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {rankIntro.description}
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-zinc-500 sm:text-sm">
            Referencia oficial de beneficios:{" "}
            <a
              href="https://wynncraft.com/store/ranks"
              target="_blank"
              rel="noreferrer"
              className="text-gsw transition-colors hover:text-white"
            >
              wynncraft.com/store/ranks
            </a>
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {rankCards.map((rank) => (
            <article
              key={rank.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30"
            >
              <div className="border-b border-white/5 px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-md border border-white/10 bg-black/40 sm:h-14 sm:w-14">
                    <Image src={rank.badge.src} alt={rank.badge.alt} fill className="object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{rank.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-gsw sm:text-sm">Custa {rank.costShares} Shares.</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 px-5 py-5 sm:px-7 sm:py-6">
                <li className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{rank.summary}</span>
                </li>
                <li className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>Ideal para: {rank.bestFor}</span>
                </li>
                {rank.highlights.map((item) => (
                  <li key={`${rank.name}-${item}`} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-gsw/30 bg-gsw/5 p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">{rankTip}</p>
        </div>
      </div>
    </section>
  );
}

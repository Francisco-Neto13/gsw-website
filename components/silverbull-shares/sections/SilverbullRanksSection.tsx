import Image from "next/image";
import { rankCards, rankIntro, rankTip } from "@/components/silverbull-shares/data/silverbull-shares-content";

export default function SilverbullRanksSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-titulo-2 text-texto">
            {rankIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {rankIntro.description}
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-detalhe leading-relaxed text-texto-3">
            Referência de benefícios no site da Wynncraft:{" "}
            <a
              href="https://wynncraft.com/store/ranks"
              target="_blank"
              rel="noreferrer"
              className="text-violeta transition-colors hover:text-white"
            >
              wynncraft.com/store/ranks
            </a>
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {rankCards.map((rank) => (
            <article
              key={rank.name}
              className="group overflow-hidden rounded-md border border-linha bg-carvao transition-all duration-300 hover:border-gsw/30"
            >
              <div className="border-b border-linha px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-md border border-linha bg-carvao sm:h-14 sm:w-14">
                    <Image
                      src={rank.badge.src}
                      alt={rank.badge.alt}
                      fill
                      sizes="(max-width: 640px) 48px, 56px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{rank.name}</h3>
                    <p className="mt-1 text-detalhe font-semibold text-violeta">Custa {rank.costShares} Shares.</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 px-5 py-5 sm:px-7 sm:py-6">
                <li className="flex gap-3 text-texto-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{rank.summary}</span>
                </li>
                <li className="flex gap-3 text-texto-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>Ideal para: {rank.bestFor}</span>
                </li>
                {rank.highlights.map((item) => (
                  <li key={`${rank.name}-${item}`} className="flex gap-3 text-texto-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-md border border-gsw/30 bg-gsw/5 p-5 sm:p-6">
          <p className="text-texto-2">{rankTip}</p>
        </div>
      </div>
    </section>
  );
}

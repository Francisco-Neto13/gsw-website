import Image from "next/image";
import Link from "next/link";
import { homeContentSection, homeGuideCards } from "@/components/home/data/home-content";

export default function HomeContentSection() {
  return (
    <section id="conteudo" className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-28">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="reveal-on-scroll mb-10 text-center sm:mb-14">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.45em] text-gsw">
            {homeContentSection.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            {homeContentSection.title} <span className="text-gsw">{homeContentSection.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {homeContentSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeGuideCards.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="reveal-on-scroll group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-300 hover:-translate-y-1 hover:border-gsw/45"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <span className="inline-flex w-fit rounded-full border border-white/20 bg-black/45 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-gsw/85">
                  {card.eyebrow}
                </span>
                <h3 className="mt-2 text-xl font-black tracking-tight text-white">{card.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

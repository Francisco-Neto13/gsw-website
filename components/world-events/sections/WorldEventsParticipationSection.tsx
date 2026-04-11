import Image from "next/image";
import {
  participationCards,
  participationImages,
} from "@/components/world-events/data/world-events-content";

export default function WorldEventsParticipationSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            Primeiros passos
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Como Participar
          </h2>
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Os eventos acontecem em diversas localidades do mapa e aparecem de forma aleatória com
            uma notificação no chat, indicando nome, tempo disponível e localização.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {participationCards.map((card, index) => (
            <article
              key={card.title}
              className="group relative rounded-2xl border border-white/10 bg-zinc-900/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8"
            >
              <span className="absolute right-4 bottom-3 select-none text-4xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{card.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {participationImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
              <div className="border-b border-white/5 px-4 py-3 sm:px-5">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gsw">{image.title}</h4>
              </div>
              <div className="relative aspect-video w-full bg-black/60">
                <Image src={image.src} alt={image.alt} fill className="object-contain p-2" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

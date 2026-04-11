import Image from "next/image";
import { specialModes } from "@/components/special-modes/data/special-modes-content";

export default function SpecialModesListSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            Modos
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Regras Especiais
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Cada modo altera como você progride no personagem. Escolha com cuidado, porque os efeitos
            ficam fixos até o fim daquela classe.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {specialModes.map((mode) => (
            <article
              key={mode.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30"
            >
              <div className="border-b border-white/5 px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-md border border-white/10 bg-black/40 sm:h-10 sm:w-10">
                    <Image src={mode.icon} alt={`Ícone do modo ${mode.name}`} fill className="object-contain p-1" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{mode.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-gsw sm:text-sm">{mode.unlock}</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 px-5 py-5 sm:px-7 sm:py-6">
                {mode.description.map((point) => (
                  <li key={`${mode.name}-${point}`} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

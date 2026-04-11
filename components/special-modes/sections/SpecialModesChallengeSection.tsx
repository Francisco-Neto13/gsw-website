import Image from "next/image";
import {
  combinedModesParagraph,
  combinedModesRequirements,
} from "@/components/special-modes/data/special-modes-content";

export default function SpecialModesChallengeSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute right-0 bottom-0 h-[360px] w-[360px] rounded-full bg-gsw/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            Comunidade
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Combinações e Desafio
          </h2>
          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {combinedModesParagraph}
          </p>
        </div>

        <article className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <div className="border-b border-white/5 px-6 py-5 sm:px-8 sm:py-6">
            <h3 className="text-lg font-bold text-white sm:text-xl">Requisitos e referência visual</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Base usada pela comunidade para validar runs completas nos modos especiais.
            </p>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gsw">
              Requisitos do desafio geral
            </h4>
            <ul className="space-y-3">
              {combinedModesRequirements.map((requirement) => (
                <li key={requirement} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 bg-zinc-950/40 p-4 sm:p-5">
            <h4 className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Todos os modos de jogo
            </h4>
            <div className="relative aspect-[25/9] w-full overflow-hidden rounded-xl border border-white/10 bg-black/60">
              <Image
                src="/gamemodes/gamemodes.png"
                alt="Tabela de combinações dos modos especiais da comunidade"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

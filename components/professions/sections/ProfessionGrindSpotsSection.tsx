import { grindSpots } from "@/components/professions/data/professions-content";

export default function ProfessionGrindSpotsSection() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            Crafting
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Grind Spots de Ingredients
          </h2>
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Melhores spots por profissão com nível e coordenadas.{" "}
            <span className="font-medium text-white">NPC</span> indica item comprado de vendedor.{" "}
            <span className="font-medium text-white">Até 10</span> indica que o spot funciona até
            cerca de 10 níveis além do indicado.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {grindSpots.map((professionSpots, index) => (
            <article
              key={professionSpots.profession}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30"
            >
              <div className="flex flex-col gap-2 border-b border-white/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5">
                <div className="flex items-center gap-4">
                  <span className="select-none text-3xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/15 sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                      {professionSpots.profession}
                    </h3>
                    <span className="text-xs font-semibold text-gsw">{professionSpots.resources}</span>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-zinc-500 sm:px-7">
                        Nível
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Ingredient
                      </th>
                      <th className="px-3 py-3 text-left text-xs font-bold uppercase tracking-widest text-zinc-500">
                        Coordenadas
                      </th>
                      <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-widest text-zinc-500 sm:px-7">
                        Tags
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {professionSpots.spots.map((spot) => (
                      <tr
                        key={`${professionSpots.profession}-${spot.level}-${spot.name}`}
                        className="border-b border-white/5 transition-colors duration-150 hover:bg-white/[0.02] last:border-0"
                      >
                        <td className="px-5 py-3 sm:px-7">
                          <span className="font-mono text-xs font-semibold text-gsw">{spot.level}</span>
                        </td>
                        <td className="px-3 py-3">
                          <span className="text-sm text-white">{spot.name}</span>
                        </td>
                        <td className="px-3 py-3">
                          <code className="rounded bg-white/5 px-2 py-0.5 text-xs font-mono text-zinc-400">
                            {spot.coords}
                          </code>
                        </td>
                        <td className="px-5 py-3 sm:px-7">
                          <div className="flex flex-wrap gap-1">
                            {spot.isNpc ? (
                              <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
                                NPC
                              </span>
                            ) : null}
                            {spot.maxLevel ? (
                              <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400">
                                Até 10
                              </span>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

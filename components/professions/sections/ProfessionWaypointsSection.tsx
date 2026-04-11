import {
  waypointImportSteps,
  waypointSnippet,
} from "@/components/professions/data/professions-content";

export default function ProfessionWaypointsSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-gsw/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            Wynntils
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Waypoints de Profissão
          </h2>
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Se você usa o Wynntils, importe os waypoints de recursos diretamente pelo Content Book
            para facilitar a visualização no mapa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
            <h3 className="mb-6 text-lg font-bold text-white sm:text-xl">Como importar</h3>
            <ol className="space-y-4">
              {waypointImportSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gsw/15 text-xs font-bold text-gsw">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-zinc-400 sm:text-base">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white sm:text-xl">profwaypoints.txt</h3>
              <a
                href="/professions/profwaypoints.txt"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-gsw/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-gsw transition-colors duration-200 hover:bg-gsw hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/5 bg-zinc-950">
              <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-zinc-400">
                <code>{waypointSnippet}</code>
              </pre>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              Prévia do conteúdo. O arquivo .txt completo está disponível para download acima.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center sm:mt-20">
          <p className="inline-block border-t border-white/5 px-6 pt-10 text-sm leading-relaxed text-zinc-500 italic sm:px-12 sm:pt-12">
            &ldquo;Profissões são uma maratona, não uma corrida. Se precisar de ajuda, a{" "}
            <span className="text-sm font-bold uppercase tracking-widest text-gsw/60">guilda</span> está
            aqui.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

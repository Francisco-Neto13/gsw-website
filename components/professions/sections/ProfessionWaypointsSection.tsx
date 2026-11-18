import {
  professionWaypointsIntro,
  professionWaypointsLabels,
  waypointImportSteps,
  waypointSnippet,
} from "@/components/professions/data/professions-content";

export default function ProfessionWaypointsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {professionWaypointsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {professionWaypointsIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <div className="rounded-md border border-linha bg-carvao p-6 sm:p-8">
            <h3 className="text-titulo-4 mb-6 font-bold text-texto">
              {professionWaypointsLabels.importTitle}
            </h3>
            <ol className="space-y-4">
              {waypointImportSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gsw/15 text-detalhe font-bold text-violeta">
                    {index + 1}
                  </span>
                  <span className="text-texto-2">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-md border border-linha bg-carvao p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-titulo-4 font-bold text-texto">
                {professionWaypointsLabels.fileTitle}
              </h3>
              <a
                href="/professions/profwaypoints.txt"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-gsw/10 px-3 py-1.5 text-detalhe font-bold uppercase tracking-widest text-violeta transition-colors duration-200 hover:bg-gsw hover:text-white"
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
                {professionWaypointsLabels.download}
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-linha bg-zinc-950">
              <pre className="overflow-x-auto p-4 text-detalhe leading-relaxed text-texto-2">
                <code>{waypointSnippet}</code>
              </pre>
            </div>
            <p className="mt-3 text-detalhe text-texto-3">
              {professionWaypointsLabels.preview}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

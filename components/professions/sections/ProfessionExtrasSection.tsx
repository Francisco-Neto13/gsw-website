import {
  professionExtraHighlights,
  professionExtraNotes,
  professionExtrasIntro,
} from "@/components/professions/data/professions-content";

export default function ProfessionExtrasSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
            {professionExtrasIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {professionExtrasIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {professionExtraHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-md border border-linha bg-carvao p-5 sm:p-6"
            >
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.35em] text-violeta/80">
                Destaque
              </span>
              <h3 className="text-xl font-bold tracking-tight text-texto sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-texto-2">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {professionExtraNotes.map((item, index) => (
            <article
              key={item}
              className="group relative rounded-md border border-linha bg-carvao p-5 transition-all duration-200 hover:border-gsw/40 hover:bg-black/60 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-4 border-b border-linha pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-violeta/75">
                  Nota {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-texto-2">{item}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

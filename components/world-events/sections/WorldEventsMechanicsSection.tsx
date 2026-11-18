import {
  mechanicsCards,
  worldEventsMechanicsIntro,
} from "@/components/world-events/data/world-events-content";

export default function WorldEventsMechanicsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {worldEventsMechanicsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {worldEventsMechanicsIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {mechanicsCards.map((item) => (
            <article
              key={item.title}
              className="group relative rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8"
            >
              <h3 className="text-titulo-4 mb-3 font-bold tracking-tight text-texto sm:mb-4">
                {item.title}
              </h3>
              <p className="text-texto-2">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import {
  specialModes,
  specialModesListIntro,
} from "@/components/special-modes/data/special-modes-content";

export default function SpecialModesListSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
            {specialModesListIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {specialModesListIntro.description}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {specialModes.map((mode) => (
            <article
              key={mode.name}
              className="group overflow-hidden rounded-md border border-linha bg-carvao transition-all duration-300 hover:border-gsw/30"
            >
              <div className="border-b border-linha px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-md border border-linha bg-carvao sm:h-10 sm:w-10">
                    <Image
                      src={mode.icon}
                      alt={`Ícone do modo ${mode.name}`}
                      fill
                      sizes="(max-width: 640px) 36px, 40px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-texto sm:text-2xl">{mode.name}</h3>
                    <p className="mt-1 text-xs font-semibold text-violeta sm:text-sm">{mode.unlock}</p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 px-5 py-5 sm:px-7 sm:py-6">
                {mode.description.map((point) => (
                  <li key={`${mode.name}-${point}`} className="flex gap-3 text-texto-2">
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

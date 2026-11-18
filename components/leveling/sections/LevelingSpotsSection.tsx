import Image from "next/image";
import {
  levelingSpots,
  levelingSpotsIntro,
} from "@/components/leveling/data/leveling-content";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { tamanhos } from "@/lib/tamanhos";

export default function LevelingSpotsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {levelingSpotsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {levelingSpotsIntro.description}
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {levelingSpots.map((spot, index) => (
            <article
              key={spot.name}
              className={`leveling-card-medium group overflow-hidden rounded-md border border-linha bg-carvao transition-all duration-300 hover:border-gsw/30 ${
                index % 2 === 0 ? "leveling-tilt-right" : "leveling-tilt-left"
              }`}
            >
              <div className="flex flex-col gap-2 border-b border-linha px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5">
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{spot.name}</h3>
                    <span className="text-detalhe font-semibold text-violeta">{spot.range}</span>
                  </div>
                </div>
                <code className="leveling-badge-pop w-fit rounded-lg bg-white/5 px-3 py-1.5 text-detalhe font-mono text-texto-2">
                  {spot.coords}
                </code>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <ul className="space-y-3 px-5 py-5 sm:px-7 sm:py-6">
                  {spot.notes.map((note) => (
                    <li key={`${spot.name}-${note}`} className="flex gap-3 text-texto-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
                <div className="overflow-hidden border-t border-linha bg-zinc-950 lg:border-t-0 lg:border-l">
                  <ClickableImagePreview src={spot.image} alt={`Screenshot do spot ${spot.name}`}>
                    <div className="leveling-media-pop relative aspect-video w-full p-1 sm:p-2">
                      <Image quality={90}
                        src={spot.image}
                        alt={`Screenshot do spot ${spot.name}`}
                        fill
                        sizes={tamanhos.metade}
                        className="object-contain"
                      />
                    </div>
                  </ClickableImagePreview>
                  <p className="px-4 py-3 text-apoio text-texto-3 sm:px-5">
                    Imagem de referência do spot {spot.name}.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

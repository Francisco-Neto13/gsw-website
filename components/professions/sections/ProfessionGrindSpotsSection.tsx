import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { tamanhos } from "@/lib/tamanhos";
import {
  grindSpots,
  professionGrindSpotsIntro,
  professionGrindSpotsTableHeaders,
} from "@/components/professions/data/professions-content";

const professionSpotMedia = [
  {
    src: "/professions/spot1.webp",
    alt: "Exemplo de rota de farming de ingredients",
    title: "Spot Ilustrativo 1",
  },
  {
    src: "/professions/spot2.webp",
    alt: "Exemplo de spot com mobs para ingredients",
    title: "Spot Ilustrativo 2",
  },
  {
    src: "/professions/spot3.webp",
    alt: "Exemplo de área para farm de ingredients",
    title: "Spot Ilustrativo 3",
  },
];

const craftingSpotImageByProfession: Record<string, string> = {
  Cooking: "/professions/cooking.webp",
  Scribing: "/professions/scribing.webp",
  Alchemism: "/professions/alchemism.webp",
  Jeweling: "/professions/jeweling.webp",
  Weaponsmithing: "/professions/weaponsmithing.webp",
  Woodworking: "/professions/woodworking.webp",
  Armouring: "/professions/armouring.webp",
  Tailoring: "/professions/tailoring.webp",
};

export default function ProfessionGrindSpotsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {professionGrindSpotsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {professionGrindSpotsIntro.description}
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {professionSpotMedia.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-md border border-linha bg-carvao">
              <ClickableImagePreview src={item.src} alt={item.alt}>
                <div className="relative aspect-video w-full bg-black">
                  <Image quality={90}
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={tamanhos.terco}
                    className="object-cover"
                  />
                </div>
              </ClickableImagePreview>
              <div className="px-4 py-3 sm:px-5">
                <p className="text-apoio font-semibold tracking-tight text-texto-2">{item.title}</p>
                <p className="mt-1 text-detalhe leading-relaxed text-texto-3">
                  Referência visual do tipo de spot. Use a tabela abaixo para coordenadas e progressão.
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-6">
          {grindSpots.map((professionSpots) => (
            <article
              key={professionSpots.profession}
              className="group overflow-hidden rounded-md border border-linha bg-carvao transition-all duration-300 hover:border-gsw/30"
            >
              <div className="flex flex-col gap-2 border-b border-linha px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5">
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-linha bg-zinc-950">
                    <Image quality={90}
                      src={craftingSpotImageByProfession[professionSpots.profession] ?? "/icon.webp"}
                      alt={`Ícone ${professionSpots.profession}`}
                      fill
                      sizes="40px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <h3 className="text-titulo-4 font-bold tracking-tight text-texto">
                      {professionSpots.profession}
                    </h3>
                    <span className="text-detalhe font-semibold text-violeta">{professionSpots.resources}</span>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-apoio">
                  <thead>
                    <tr className="border-b border-linha">
                      <th className="px-5 py-3 text-left text-detalhe font-bold uppercase tracking-widest text-texto-3 sm:px-7">
                        {professionGrindSpotsTableHeaders.level}
                      </th>
                      <th className="px-3 py-3 text-left text-detalhe font-bold uppercase tracking-widest text-texto-3">
                        {professionGrindSpotsTableHeaders.ingredient}
                      </th>
                      <th className="px-3 py-3 text-left text-detalhe font-bold uppercase tracking-widest text-texto-3">
                        {professionGrindSpotsTableHeaders.coords}
                      </th>
                      <th className="px-5 py-3 text-left text-detalhe font-bold uppercase tracking-widest text-texto-3 sm:px-7">
                        {professionGrindSpotsTableHeaders.tags}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {professionSpots.spots.map((spot) => (
                      <tr
                        key={`${professionSpots.profession}-${spot.level}-${spot.name}`}
                        className="border-b border-linha transition-colors duration-150 hover:bg-white/[0.02] last:border-0"
                      >
                        <td className="px-5 py-3 sm:px-7">
                          <span className="font-mono text-detalhe font-semibold text-violeta">{spot.level}</span>
                        </td>
                        <td className="px-3 py-3">
                          <span className="text-apoio text-white">{spot.name}</span>
                        </td>
                        <td className="px-3 py-3">
                          <code className="rounded bg-white/5 px-2 py-0.5 text-detalhe font-mono text-texto-2">
                            {spot.coords}
                          </code>
                        </td>
                        <td className="px-5 py-3 sm:px-7">
                          <div className="flex flex-wrap gap-1">
                            {spot.isNpc ? (
                              <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-detalhe font-medium text-blue-400">
                                {professionGrindSpotsTableHeaders.npcTag}
                              </span>
                            ) : null}
                            {spot.maxLevel ? (
                              <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-detalhe font-medium text-amber-400">
                                {professionGrindSpotsTableHeaders.maxLevelTag}
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


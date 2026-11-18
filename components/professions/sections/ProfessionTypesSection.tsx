import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import {
  craftingProfessions,
  gatheringProfessions,
  professionCategoryTitles,
  professionTypesIntro,
} from "@/components/professions/data/professions-content";

const overviewMedia = [
  {
    src: "/professions/professions.webp",
    alt: "Visão das profissões de crafting e seus tipos de item",
    title: "Profissões de Crafting",
    description: "Resumo de quais profissões criam armas, armaduras, acessórios e consumíveis.",
  },
  {
    src: "/professions/professions2.webp",
    alt: "Exemplo de coleta de profissão com ferramenta e recurso",
    title: "Fluxo de Gathering",
    description: "Mostra ferramenta de coleta, recurso obtido e progressão da profissão no mapa.",
  },
];

const gatheringImageByName: Record<string, string> = {
  Farming: "/professions/farming.webp",
  Fishing: "/professions/fishing.webp",
  Mining: "/professions/mining.webp",
  Woodcutting: "/professions/woodcuting.webp",
};

const craftingImageByName: Record<string, string> = {
  Cooking: "/professions/cooking.webp",
  Alchemism: "/professions/alchemism.webp",
  Scribing: "/professions/scribing.webp",
  Jeweling: "/professions/jeweling.webp",
  Armouring: "/professions/armouring.webp",
  Tailoring: "/professions/tailoring.webp",
  Weaponsmithing: "/professions/weaponsmithing.webp",
  Woodworking: "/professions/woodworking.webp",
};

export default function ProfessionTypesSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-8 max-w-[60ch]">
          <h2 className="text-titulo-2 text-texto">
            {professionTypesIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {professionTypesIntro.description}
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6">
          {overviewMedia.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-md border border-linha bg-carvao">
              <ClickableImagePreview src={item.src} alt={item.alt}>
                <div className="relative aspect-video w-full bg-black">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </ClickableImagePreview>
              <div className="p-4 sm:p-5">
                <h3 className="text-titulo-4 font-bold tracking-tight text-texto">{item.title}</h3>
                <p className="mt-1 text-apoio text-texto-2">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-md border border-linha bg-carvao p-6 sm:p-8">
            <h3 className="text-titulo-4 mb-6 font-bold tracking-tight text-texto">
              {professionCategoryTitles.gathering}
            </h3>
            <div className="space-y-3">
              {gatheringProfessions.map((profession) => (
                <div
                  key={profession.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-linha bg-carvao px-4 py-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-linha bg-zinc-950">
                      <Image
                        src={gatheringImageByName[profession.name] ?? "/icon.webp"}
                        alt={`Ícone ${profession.name}`}
                        fill
                        sizes="36px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-apoio font-bold text-white">{profession.name}</span>
                      <span className="text-detalhe text-texto-3">{profession.resources}</span>
                    </div>
                  </div>
                  <span className="rounded-lg bg-gsw/10 px-3 py-1 text-detalhe font-semibold text-violeta">
                    {profession.tool}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-linha bg-carvao p-6 sm:p-8">
            <h3 className="text-titulo-4 mb-6 font-bold tracking-tight text-texto">
              {professionCategoryTitles.crafting}
            </h3>
            <div className="space-y-3">
              {craftingProfessions.map((profession) => (
                <div
                  key={profession.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-linha bg-carvao px-4 py-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-linha bg-zinc-950">
                      <Image
                        src={craftingImageByName[profession.name] ?? "/icon.webp"}
                        alt={`Ícone ${profession.name}`}
                        fill
                        sizes="36px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-apoio font-bold text-white">{profession.name}</span>
                      <span className="text-detalhe text-texto-3">{profession.produces}</span>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-lg bg-white/5 px-3 py-1 text-detalhe font-medium text-texto-2">
                    {profession.resources}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


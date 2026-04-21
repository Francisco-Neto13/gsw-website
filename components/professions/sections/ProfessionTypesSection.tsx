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
    <section className="relative overflow-hidden bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-0 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-gsw/5 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {professionTypesIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {professionTypesIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {professionTypesIntro.description}
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6">
          {overviewMedia.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20">
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
                <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/20 p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {professionCategoryTitles.gathering}
            </h3>
            <div className="space-y-3">
              {gatheringProfessions.map((profession) => (
                <div
                  key={profession.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-black/40 px-4 py-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
                      <Image
                        src={gatheringImageByName[profession.name] ?? "/icon.webp"}
                        alt={`Ícone ${profession.name}`}
                        fill
                        sizes="36px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-sm font-bold text-white">{profession.name}</span>
                      <span className="text-xs text-zinc-500">{profession.resources}</span>
                    </div>
                  </div>
                  <span className="rounded-lg bg-gsw/10 px-3 py-1 text-xs font-semibold text-gsw">
                    {profession.tool}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/20 p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {professionCategoryTitles.crafting}
            </h3>
            <div className="space-y-3">
              {craftingProfessions.map((profession) => (
                <div
                  key={profession.name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-black/40 px-4 py-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
                      <Image
                        src={craftingImageByName[profession.name] ?? "/icon.webp"}
                        alt={`Ícone ${profession.name}`}
                        fill
                        sizes="36px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-sm font-bold text-white">{profession.name}</span>
                      <span className="text-xs text-zinc-500">{profession.produces}</span>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
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


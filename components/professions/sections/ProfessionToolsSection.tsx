import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import {
  bombTips,
  craftingXpTips,
  professionToolsCardTitles,
  professionToolsIntro,
  toolTips,
} from "@/components/professions/data/professions-content";

const professionFlowMedia = [
  {
    src: "/professions/materiais.webp",
    alt: "Materiais base das profissões de gathering",
    title: "1. Materiais",
    description: "Recursos coletados com Mining, Woodcutting, Farming e Fishing.",
  },
  {
    src: "/professions/ingredientes.webp",
    alt: "Ingredientes de crafting",
    title: "2. Ingredientes",
    description: "Drops de mobs, quests e loot chests que adicionam status e efeitos no craft.",
  },
  {
    src: "/professions/exemplo_de_craftado.webp",
    alt: "Exemplo de item craftado",
    title: "3. Item Craftado",
    description: "Combinação de materiais e ingredientes define nível, duração e desempenho do item.",
  },
];

const optimizationMedia = [
  {
    src: "/professions/tools.webp",
    alt: "Ferramentas de coleta das profissões",
    title: "Ferramentas",
    description: "A qualidade da ferramenta melhora o ritmo de gathering e reduz tempo total de rota.",
  },
  {
    src: "/professions/tiers_percent.webp",
    alt: "Tabela de tiers e chance dos materiais",
    title: "Tiers de Material",
    description: "Materiais vêm em diferentes tiers e isso impacta o resultado final do crafting.",
  },
];

export default function ProfessionToolsSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {professionToolsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {professionToolsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {professionToolsIntro.description}
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-10 sm:grid-cols-2 sm:gap-6">
          {optimizationMedia.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <ClickableImagePreview src={item.src} alt={item.alt}>
                <div className="relative aspect-video w-full bg-black">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    className="object-contain p-1 sm:p-2"
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

        <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {professionFlowMedia.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-2xl border border-white/10 bg-black/35">
              <ClickableImagePreview src={item.src} alt={item.alt}>
                <div className="relative aspect-[4/3] w-full bg-black">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-1 sm:p-2"
                  />
                </div>
              </ClickableImagePreview>
              <div className="p-4 sm:p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gsw">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <article className="group relative rounded-2xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8">
            <span className="absolute right-6 bottom-4 select-none text-4xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/10">
              01
            </span>
            <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">
              {professionToolsCardTitles.tools}
            </h3>
            <ul className="space-y-3">
              {toolTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="group relative rounded-2xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8">
            <span className="absolute right-6 bottom-4 select-none text-4xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/10">
              02
            </span>
            <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">
              {professionToolsCardTitles.bombs}
            </h3>
            <ul className="space-y-3">
              {bombTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="group relative rounded-2xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:col-span-2 sm:p-8">
            <span className="absolute right-6 bottom-4 select-none text-4xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/10">
              03
            </span>
            <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:mb-4 sm:text-2xl">
              {professionToolsCardTitles.craftingXp}
            </h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {craftingXpTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}


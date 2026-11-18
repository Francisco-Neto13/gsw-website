import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { tamanhos } from "@/lib/tamanhos";
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
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">

      <div className="relative">
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {professionToolsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {professionToolsIntro.description}
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-10 sm:grid-cols-2 sm:gap-6">
          {optimizationMedia.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-md border border-linha bg-carvao">
              <ClickableImagePreview src={item.src} alt={item.alt}>
                <div className="relative aspect-video w-full bg-poco">
                  <Image quality={90}
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={tamanhos.metade}
                    className="object-contain p-1 sm:p-2"
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

        <div className="mb-8 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {professionFlowMedia.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-md border border-linha bg-carvao">
              <ClickableImagePreview src={item.src} alt={item.alt}>
                <div className="relative aspect-[4/3] w-full bg-poco">
                  <Image quality={90}
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={tamanhos.quarto}
                    className="object-contain p-1 sm:p-2"
                  />
                </div>
              </ClickableImagePreview>
              <div className="p-4 sm:p-5">
                <h3 className="text-titulo-4 font-bold tracking-wider text-violeta">{item.title}</h3>
                <p className="mt-1 text-apoio text-texto-2">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <article className="group relative rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8">
            <h3 className="text-titulo-4 mb-3 font-bold tracking-tight text-texto sm:mb-4">
              {professionToolsCardTitles.tools}
            </h3>
            <ul className="space-y-3">
              {toolTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-texto-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="group relative rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:p-8">
            <h3 className="text-titulo-4 mb-3 font-bold tracking-tight text-texto sm:mb-4">
              {professionToolsCardTitles.bombs}
            </h3>
            <ul className="space-y-3">
              {bombTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-texto-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="group relative rounded-md border border-linha bg-carvao p-6 transition-all duration-300 hover:border-gsw/40 sm:col-span-2 sm:p-8">
            <h3 className="text-titulo-4 mb-3 font-bold tracking-tight text-texto sm:mb-4">
              {professionToolsCardTitles.craftingXp}
            </h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {craftingXpTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-texto-2">
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


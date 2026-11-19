import { ExternalLink } from "lucide-react";
import Image from "next/image";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { arvoresIntro, levelingAbilityTrees, xpBonus } from "@/components/leveling/data/leveling-content";

/** Árvore de habilidade recomendada por classe, com link para a árvore pronta no WynnBuilder. */
export default function LevelingBuildsSection() {
  return (
    <SecaoGuia id="arvores" titulo="Árvores de habilidade" introducao={arvoresIntro}>
      <div className="grid gap-4 md:grid-cols-2">
        {levelingAbilityTrees.map((arvore) => (
          <div key={arvore.className} className="flex flex-col rounded-md border border-linha bg-carvao px-5 py-4">
            <div className="flex items-center gap-3">
              <Image src={arvore.icon} alt="" width={32} height={32} className="h-8 w-8 [image-rendering:pixelated]" />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-texto">{arvore.className}</h3>
                <p className="text-apoio text-violeta">{arvore.archetype}</p>
              </div>
              <a
                href={arvore.treeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-apoio text-violeta underline decoration-violeta/40 hover:decoration-violeta"
              >
                Ver árvore
                <ExternalLink aria-hidden size={14} strokeWidth={1.75} />
                <span className="sr-only">(abre o WynnBuilder em nova aba)</span>
              </a>
            </div>
            <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
              {arvore.notes.map((nota) => (
                <li key={nota}>{nota}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-leitura text-texto-2">{xpBonus}</p>
    </SecaoGuia>
  );
}

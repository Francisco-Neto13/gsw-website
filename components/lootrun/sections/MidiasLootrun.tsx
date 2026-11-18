import type { MediaPlaceholder } from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";
import { ehPrintPequena } from "@/lib/imagens";
import { tamanhos } from "@/lib/tamanhos";

/**
 * Grade de prints, animações e vídeos do Lootrun: uma mídia pequena fica na coluna lateral;
 * as outras vão em duas colunas (três a partir de cinco).
 */
export default function MidiasLootrun({ itens, className = "" }: { itens: MediaPlaceholder[]; className?: string }) {
  if (itens.length === 0) return null;
  if (itens.length === 1) {
    const [item] = itens;
    return (
      <div className={`${ehPrintPequena(item.src) ? "lg:max-w-[26rem]" : "lg:max-w-[48rem]"} ${className}`}>
        <LootrunMediaPlaceholder item={item} sizes={ehPrintPequena(item.src) ? tamanhos.lateral : tamanhos.solta} />
      </div>
    );
  }
  const tres = itens.length >= 5;
  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${tres ? "lg:grid-cols-3" : ""} ${className}`}>
      {itens.map((item) => (
        <LootrunMediaPlaceholder key={item.name} item={item} compact sizes={tres ? tamanhos.terco : tamanhos.metade} />
      ))}
    </div>
  );
}

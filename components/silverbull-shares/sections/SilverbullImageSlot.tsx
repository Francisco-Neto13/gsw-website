import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import { tamanhos } from "@/lib/tamanhos";
import ImagemNoQuadro from "@/components/shared/ImagemNoQuadro";

type SilverbullImageSlotProps = {
  label: string;
  src?: string;
  alt?: string;
  compact?: boolean;
};

export default function SilverbullImageSlot({ label, src, alt, compact = false }: SilverbullImageSlotProps) {
  const frameClass = compact ? "aspect-[4/3]" : "aspect-[2/1] sm:aspect-video";
  const imageDescription = alt && alt.trim() !== label.trim() ? alt : label;

  if (src) {
    return (
      <article className="overflow-hidden rounded-md border border-linha bg-carvao">
        <ClickableImagePreview src={src} alt={alt ?? label}>
          <div className={`relative w-full bg-poco p-2 ${frameClass}`}>
            <ImagemNoQuadro src={src} alt={alt ?? label} sizes={compact ? tamanhos.terco : tamanhos.metade} />
          </div>
        </ClickableImagePreview>
        <div className={`px-4 ${compact ? "py-2.5" : "py-3"} sm:px-5`}>
          <p className="text-detalhe leading-relaxed text-texto-3">{imageDescription}</p>
        </div>
      </article>
    );
  }

  return (
    <div className="rounded-md border border-dashed border-linha bg-carvao p-6 text-center">
      <p className="text-apoio font-semibold text-texto-2">{label}</p>
    </div>
  );
}

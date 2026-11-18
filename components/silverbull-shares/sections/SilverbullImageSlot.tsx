import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

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
          <div className={`relative w-full bg-zinc-900/60 p-2 ${frameClass}`}>
            <Image
              src={src}
              alt={alt ?? label}
              fill
              sizes={compact ? "(max-width: 1024px) 100vw, 25vw" : "(max-width: 1024px) 100vw, 50vw"}
              className="object-contain"
            />
          </div>
        </ClickableImagePreview>
        <div className={`px-4 ${compact ? "py-2.5" : "py-3"} sm:px-5`}>
          <p className="text-detalhe leading-relaxed text-texto-3">{imageDescription}</p>
        </div>
      </article>
    );
  }

  return (
    <div className="rounded-md border border-dashed border-white/20 bg-carvao p-6 text-center">
      <p className="text-apoio font-semibold text-texto-2">{label}</p>
    </div>
  );
}

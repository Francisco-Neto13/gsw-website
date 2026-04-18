import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

type SilverbullImageSlotProps = {
  label: string;
  src?: string;
  alt?: string;
  compact?: boolean;
};

export default function SilverbullImageSlot({ label, src, alt, compact = false }: SilverbullImageSlotProps) {
  const frameClass = compact ? "aspect-[4/3]" : "aspect-video";

  if (src) {
    return (
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
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
          <p className={`font-semibold text-zinc-200 ${compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"}`}>
            {label}
          </p>
        </div>
      </article>
    );
  }

  return (
    <div className="rounded-2xl border border-dashed border-white/20 bg-black/35 p-6 text-center">
      <p className="text-sm font-semibold text-zinc-300 sm:text-base">{label}</p>
    </div>
  );
}

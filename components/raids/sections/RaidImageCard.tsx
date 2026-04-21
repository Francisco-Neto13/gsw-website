import Image from "next/image";
import type { ReactNode } from "react";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";

type RaidImageCardProps = {
  src: string;
  alt: string;
  caption?: ReactNode;
  aspectClassName?: string;
  sizes?: string;
};

export default function RaidImageCard({
  src,
  alt,
  caption,
  aspectClassName = "aspect-[2/1] sm:aspect-video",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw",
}: RaidImageCardProps) {
  const normalizedCaption =
    typeof caption === "string" ? caption.trim() || alt : caption ?? alt;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
      <ClickableImagePreview src={src} alt={alt}>
        <div className={`relative w-full overflow-hidden bg-zinc-950 ${aspectClassName}`}>
          <Image src={src} alt={alt} fill sizes={sizes} className="object-contain p-2 sm:p-3" />
        </div>
      </ClickableImagePreview>
      {normalizedCaption ? (
        <p className="px-4 py-3 text-center text-xs text-zinc-500 sm:px-5">{normalizedCaption}</p>
      ) : null}
    </div>
  );
}


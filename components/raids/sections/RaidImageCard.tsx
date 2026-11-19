import type { ReactNode } from "react";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import ImagemNoQuadro from "@/components/shared/ImagemNoQuadro";

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
    <div className="overflow-hidden rounded-md border border-linha bg-poco">
      <ClickableImagePreview src={src} alt={alt}>
        <div className={`relative w-full overflow-hidden bg-poco ${aspectClassName}`}>
          <ImagemNoQuadro src={src} alt={alt} sizes={sizes} className="p-2 sm:p-3" />
        </div>
      </ClickableImagePreview>
      {normalizedCaption ? (
        <p className="px-4 py-3 text-center text-detalhe text-zinc-500 sm:px-5">{normalizedCaption}</p>
      ) : null}
    </div>
  );
}


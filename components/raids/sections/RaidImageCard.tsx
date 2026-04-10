import Image from "next/image";
import type { ReactNode } from "react";

type RaidImageCardProps = {
  src: string;
  alt: string;
  caption?: ReactNode;
  aspectClassName?: string;
};

export default function RaidImageCard({
  src,
  alt,
  caption,
  aspectClassName = "aspect-video",
}: RaidImageCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
      <div className={`relative w-full overflow-hidden bg-zinc-950 ${aspectClassName}`}>
        <Image src={src} alt={alt} fill className="object-contain p-2 sm:p-3" />
      </div>
      {caption ? <p className="px-4 py-3 text-center text-xs text-zinc-500 sm:px-5">{caption}</p> : null}
    </div>
  );
}

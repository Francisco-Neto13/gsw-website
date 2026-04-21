"use client";

import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import type { MediaPlaceholder } from "@/components/lootrun/data/lootrun-content";

type LootrunMediaPlaceholderProps = {
  item: MediaPlaceholder;
};

function resolveMediaDescription(item: MediaPlaceholder) {
  const caption = item.caption?.trim();
  if (caption) {
    return caption;
  }

  const alt = item.alt?.trim();
  if (alt) {
    return alt;
  }

  const note = item.note?.trim();
  if (note) {
    return note;
  }

  return `Visual de apoio: ${item.name}.`;
}

export default function LootrunMediaPlaceholder({
  item,
}: LootrunMediaPlaceholderProps) {
  const isLocalVideo = item.src?.startsWith("/") && item.src.toLowerCase().endsWith(".mp4");
  const mediaDescription = resolveMediaDescription(item);

  if (isLocalVideo && item.src) {
    return (
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <div className="relative aspect-[2/1] w-full bg-zinc-900/50 p-1 sm:aspect-video sm:p-2">
          <video
            src={item.src}
            className="pointer-events-none h-full w-full rounded-lg object-contain"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          />
        </div>
        <div className="px-4 py-3 sm:px-5">
          <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">{mediaDescription}</p>
        </div>
      </article>
    );
  }

  if (item.src && item.src.startsWith("/")) {
    return (
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <ClickableImagePreview src={item.src} alt={item.alt ?? item.name}>
          <div className="relative aspect-[2/1] w-full bg-zinc-900/50 p-1 sm:aspect-video sm:p-2">
<Image
              src={item.src}
              alt={item.alt ?? item.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
              unoptimized
            />
          </div>
        </ClickableImagePreview>
        <div className="px-4 py-3 sm:px-5">
          <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">{mediaDescription}</p>
        </div>
      </article>
    );
  }

  if (item.src && item.src.startsWith("http")) {
    return (
      <article className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className="block break-all text-xs text-zinc-400 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white sm:text-sm"
        >
          {item.src}
        </a>
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">{mediaDescription}</p>
      </article>
    );
  }

  return (
    <div className="flex min-h-36 flex-col justify-between rounded-2xl border border-dashed border-white/20 bg-black/40 p-4 sm:min-h-40 sm:p-5">
      <div className="rounded-xl border border-white/10 bg-zinc-900/50 px-3 py-6 text-center text-sm font-semibold text-zinc-300 sm:px-4 sm:py-7 sm:text-base">
        {item.name}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-zinc-500">{mediaDescription}</p>
    </div>
  );
}


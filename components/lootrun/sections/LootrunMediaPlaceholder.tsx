"use client";

import Image from "next/image";
import AnimacaoSobDemanda from "@/components/shared/AnimacaoSobDemanda";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import type { MediaPlaceholder } from "@/components/lootrun/data/lootrun-content";

type LootrunMediaPlaceholderProps = {
  item: MediaPlaceholder;
  compact?: boolean;
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
  compact = false,
}: LootrunMediaPlaceholderProps) {
  const isLocalVideo = item.src?.startsWith("/") && item.src.toLowerCase().endsWith(".mp4");
  const mediaDescription = resolveMediaDescription(item);
  const frameClassName = compact
    ? "relative aspect-[4/3] w-full bg-zinc-900/50 p-1 sm:aspect-video sm:p-2"
    : "relative aspect-[2/1] w-full bg-zinc-900/50 p-1 sm:aspect-video sm:p-2";
  const captionClassName = compact ? "px-3 py-2.5 sm:px-4" : "px-4 py-3 sm:px-5";

  if (isLocalVideo && item.src) {
    return (
      <article className="h-full overflow-hidden rounded-md border border-linha bg-carvao">
        <div className={frameClassName}>
          {/* Sem autoplay: só baixa o vídeo quando o leitor dá play (preload só dos metadados). */}
          <video
            src={item.src}
            className="h-full w-full rounded-lg object-contain"
            preload="metadata"
            muted
            loop
            playsInline
            controls
            aria-label={item.alt ?? item.name}
          />
        </div>
        <div className={captionClassName}>
          <p className="text-xs leading-relaxed text-texto-3 sm:text-sm">{mediaDescription}</p>
        </div>
      </article>
    );
  }

  if (item.animado && item.src) {
    return (
      <article className="h-full overflow-hidden rounded-md border border-linha bg-carvao">
        <div className={frameClassName}>
          <AnimacaoSobDemanda src={item.src} alt={item.alt ?? item.name} className="h-full w-full rounded-lg object-contain" />
        </div>
        <div className={captionClassName}>
          <p className="text-xs leading-relaxed text-texto-3 sm:text-sm">{mediaDescription}</p>
        </div>
      </article>
    );
  }

  if (item.src && item.src.startsWith("/")) {
    return (
      <article className="h-full overflow-hidden rounded-md border border-linha bg-carvao">
        <ClickableImagePreview src={item.src} alt={item.alt ?? item.name}>
          <div className={frameClassName}>
            <Image
              src={item.src}
              alt={item.alt ?? item.name}
              fill
              sizes={compact ? "(max-width: 768px) 50vw, 33vw" : "(max-width: 1024px) 100vw, 50vw"}
              className="object-contain"

            />
          </div>
        </ClickableImagePreview>
        <div className={captionClassName}>
          <p className="text-xs leading-relaxed text-texto-3 sm:text-sm">{mediaDescription}</p>
        </div>
      </article>
    );
  }

  if (item.src && item.src.startsWith("http")) {
    return (
      <article className="h-full rounded-md border border-linha bg-carvao p-4 sm:p-5">
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className="block break-all text-xs text-texto-2 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white sm:text-sm"
        >
          {item.src}
        </a>
        <p className="mt-3 text-xs leading-relaxed text-texto-3">{mediaDescription}</p>
      </article>
    );
  }

  return (
    <div className="flex h-full min-h-36 flex-col justify-between rounded-md border border-dashed border-white/20 bg-carvao p-4 sm:min-h-40 sm:p-5">
      <div className="rounded-xl border border-linha bg-zinc-900/50 px-3 py-6 text-center text-sm font-semibold text-texto-2 sm:px-4 sm:py-7 sm:text-base">
        {item.name}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-texto-3">{mediaDescription}</p>
    </div>
  );
}


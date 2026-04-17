"use client";

import Image from "next/image";
import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import type { MediaPlaceholder } from "@/components/lootrun/data/lootrun-content";

type LootrunMediaPlaceholderProps = {
  item: MediaPlaceholder;
  kind: "Imagem" | "Vídeo";
};

export default function LootrunMediaPlaceholder({
  item,
  kind,
}: LootrunMediaPlaceholderProps) {
  const isLocalVideo = item.src?.startsWith("/") && item.src.toLowerCase().endsWith(".mp4");

  if (isLocalVideo && item.src) {
    return (
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <div className="relative aspect-video w-full bg-zinc-900/50 p-1 sm:p-2">
          <video
            src={item.src}
            className="h-full w-full rounded-lg object-contain"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
            onPause={(event) => {
              event.currentTarget.play().catch(() => undefined);
            }}
          />
        </div>
        <div className="space-y-1 px-4 py-3 sm:px-5">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gsw/80">{kind}</p>
          <p className="text-sm font-semibold text-zinc-200 sm:text-base">{item.name}</p>
          {item.caption ? <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">{item.caption}</p> : null}
        </div>
      </article>
    );
  }

  if (item.src && item.src.startsWith("/")) {
    return (
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
        <ClickableImagePreview src={item.src} alt={item.alt ?? item.name}>
          <div className="relative aspect-video w-full bg-zinc-900/50 p-1 sm:p-2">
            <Image
              src={item.src}
              alt={item.alt ?? item.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </ClickableImagePreview>
        <div className="space-y-1 px-4 py-3 sm:px-5">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gsw/80">{kind}</p>
          <p className="text-sm font-semibold text-zinc-200 sm:text-base">{item.name}</p>
          {item.caption ? <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">{item.caption}</p> : null}
        </div>
      </article>
    );
  }

  if (item.src && item.src.startsWith("http")) {
    return (
      <article className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gsw/80">{kind}</p>
        <p className="mt-2 text-sm font-semibold text-zinc-200 sm:text-base">{item.name}</p>
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 block break-all text-xs text-zinc-400 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white sm:text-sm"
        >
          {item.src}
        </a>
        {item.note ? <p className="mt-3 text-xs leading-relaxed text-zinc-500">{item.note}</p> : null}
      </article>
    );
  }

  return (
    <div className="flex min-h-36 flex-col justify-between rounded-2xl border border-dashed border-white/20 bg-black/40 p-4 sm:min-h-40 sm:p-5">
      <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-gsw/80">
        {kind}
      </span>
      <div className="rounded-xl border border-white/10 bg-zinc-900/50 px-3 py-6 text-center text-sm font-semibold text-zinc-300 sm:px-4 sm:py-7 sm:text-base">
        {item.name}
      </div>
      {item.note ? <p className="mt-3 text-xs leading-relaxed text-zinc-500">{item.note}</p> : null}
    </div>
  );
}

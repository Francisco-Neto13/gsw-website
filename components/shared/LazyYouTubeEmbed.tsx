"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type LazyYouTubeEmbedProps = {
  videoId: string;
  title: string;
  priority?: boolean;
};

export default function LazyYouTubeEmbed({
  videoId,
  title,
  priority = false,
}: LazyYouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  if (isPlaying) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-md border border-linha bg-carvao">
        <iframe
          // Ao dar play, o foco vai para o vídeo (antes caía no <body>).
          ref={(iframe) => iframe?.focus()}
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className="group relative aspect-video w-full overflow-hidden rounded-md border border-linha bg-carvao"
      aria-label={`Assistir vídeo: ${title}`}
    >
      <Image quality={90}
        src={thumbnail}
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 22rem, 100vw"
        className="h-full w-full object-cover"
      />
      <span className="pointer-events-none absolute inset-0 bg-black/35 transition-colors duration-150 group-hover:bg-black/15" />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="flex items-center gap-2 rounded-md bg-gsw px-3 py-2 text-apoio font-medium text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)]">
          <Play aria-hidden size={16} strokeWidth={1.75} fill="currentColor" />
          Ver POV
        </span>
      </span>
    </button>
  );
}

"use client";

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
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
        <iframe
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
      className="group relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900"
      aria-label={`Reproduzir vídeo: ${title}`}
    >
      <img
        src={thumbnail}
        alt={title}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <span className="pointer-events-none absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="rounded-full bg-black/65 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white">
          Play
        </span>
      </span>
    </button>
  );
}

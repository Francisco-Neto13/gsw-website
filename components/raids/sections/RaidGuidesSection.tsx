"use client";

import { useEffect, useRef } from "react";
import {
  raidGuideGroups,
  raidGuidesDescription,
  upcomingRaidGuides,
  type RaidGuideRoom,
  type RaidGuideVariant,
} from "@/components/raids/data/raids-content";

function RaidVariantCard({
  roomLabel,
  variant,
  variantIndex,
}: {
  roomLabel: string;
  variant: RaidGuideVariant;
  variantIndex: number;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      <div data-raid-text className="flex flex-col">
        <div className="border-b border-white/5 px-5 py-5 sm:px-6">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.35em] text-gsw/80">
            Variação {String(variantIndex + 1).padStart(2, "0")}
          </span>
          <h5 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{variant.name}</h5>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{variant.summary}</p>
        </div>

        <div className="p-5 sm:p-6">
          <ul className="space-y-3">
            {variant.points.map((point, index) => (
              <li
                key={`${variant.name}-${index}`}
                className="flex gap-3 text-sm leading-relaxed text-zinc-400 sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gsw" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div data-raid-media className="mt-auto space-y-5 px-5 pb-5 sm:px-6 sm:pb-6">
        <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
          <iframe
            src={`https://www.youtube.com/embed/${variant.videoId}`}
            title={`${roomLabel} - ${variant.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>

        {variant.secondaryVideoId ? (
          <div className="space-y-3">
            <span className="block text-center text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
              {variant.secondaryLabel ?? "Vídeo extra"}
            </span>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
              <iframe
                src={`https://www.youtube.com/embed/${variant.secondaryVideoId}`}
                title={`${roomLabel} - ${variant.secondaryLabel ?? "Vídeo extra"}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function RaidRoomCard({ room, roomIndex }: { room: RaidGuideRoom; roomIndex: number }) {
  const roomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = roomRef.current;
    if (!root) return;

    const syncHeights = () => {
      const textBlocks = Array.from(root.querySelectorAll<HTMLElement>("[data-raid-text]"));
      const mediaBlocks = Array.from(root.querySelectorAll<HTMLElement>("[data-raid-media]"));

      [...textBlocks, ...mediaBlocks].forEach((element) => {
        element.style.minHeight = "";
      });

      if (window.innerWidth < 1280) {
        return;
      }

      const maxTextHeight = Math.max(...textBlocks.map((element) => element.offsetHeight), 0);
      const maxMediaHeight = Math.max(...mediaBlocks.map((element) => element.offsetHeight), 0);

      textBlocks.forEach((element) => {
        element.style.minHeight = `${maxTextHeight}px`;
      });

      mediaBlocks.forEach((element) => {
        element.style.minHeight = `${maxMediaHeight}px`;
      });
    };

    const frame = requestAnimationFrame(syncHeights);
    const resizeObserver = new ResizeObserver(syncHeights);
    resizeObserver.observe(root);
    window.addEventListener("resize", syncHeights);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
  }, [room]);

  return (
    <div
      ref={roomRef}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30"
    >
      <div className="border-b border-white/5 px-5 py-4 sm:px-7 sm:py-5">
        <div className="flex items-start gap-4">
          <span className="select-none text-3xl font-black italic text-white/5 transition-colors duration-300 group-hover:text-gsw/15 sm:text-4xl">
            {String(roomIndex + 1).padStart(2, "0")}
          </span>
          <div>
            <span className="mb-1 block text-xs font-bold uppercase tracking-[0.35em] text-gsw">
              {room.room}
            </span>
            <h4 className="text-lg font-bold tracking-tight text-white sm:text-2xl">{room.title}</h4>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              {room.description}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 gap-4 p-5 sm:gap-6 sm:p-7 ${
          room.variants.length > 1 ? "xl:grid-cols-2" : ""
        }`}
      >
        {room.variants.map((variant, variantIndex) => (
          <RaidVariantCard
            key={variant.name}
            roomLabel={room.room}
            variant={variant}
            variantIndex={variantIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default function RaidGuidesSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gsw/5 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-12 text-center sm:mb-20">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            Guias das raids
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            Salas e Bossfights
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {raidGuidesDescription}
          </p>
        </div>

        {raidGuideGroups.map((group, groupIndex) => (
          <div
            key={group.shortName}
            className={groupIndex === 0 ? undefined : "mt-16 border-t border-white/5 pt-16 sm:mt-20 sm:pt-20"}
          >
            <div className="mb-10 text-center sm:mb-14">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
                {group.eyebrow}
              </span>
              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-5xl">
                {group.shortName}
              </h3>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                {group.description}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {group.rooms.map((room, roomIndex) => (
                <RaidRoomCard key={room.room} room={room} roomIndex={roomIndex} />
              ))}
            </div>
          </div>
        ))}

        {upcomingRaidGuides.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14">
            {upcomingRaidGuides.map((name) => (
              <div key={name} className="rounded-2xl border border-white/10 bg-black/35 p-5 text-center sm:p-6">
                <span className="mb-3 block text-xs font-bold uppercase tracking-[0.4em] text-gsw">
                  Próxima
                </span>
                <h4 className="text-lg font-bold tracking-tight text-white sm:text-xl">{name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Estrutura reservada para receber a explicação completa dessa raid depois.
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

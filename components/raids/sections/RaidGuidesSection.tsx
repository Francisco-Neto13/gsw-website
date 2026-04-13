import {
  raidGuideGroups,
  raidGuidesIntro,
  raidGuidesLabels,
  upcomingRaidGuides,
  type RaidGuideRoom,
  type RaidGuideVariant,
} from "@/components/raids/data/raids-content";
import LazyYouTubeEmbed from "@/components/shared/LazyYouTubeEmbed";

function RaidVariantCard({
  roomLabel,
  variant,
  variantIndex,
  priorityVideo = false,
}: {
  roomLabel: string;
  variant: RaidGuideVariant;
  variantIndex: number;
  priorityVideo?: boolean;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      <div className="flex flex-col">
        <div className="border-b border-white/5 px-5 py-5 sm:px-6">
          <span className="mb-3 block text-xs font-bold uppercase tracking-[0.35em] text-gsw/80">
            {raidGuidesLabels.variant} {String(variantIndex + 1).padStart(2, "0")}
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

      <div className="mt-auto space-y-5 px-5 pb-5 sm:px-6 sm:pb-6">
        <LazyYouTubeEmbed
          videoId={variant.videoId}
          title={`${roomLabel} - ${variant.name}`}
          priority={priorityVideo}
        />

        {variant.secondaryVideoId ? (
          <div className="space-y-3">
            <span className="block text-center text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
              {variant.secondaryLabel ?? raidGuidesLabels.extraVideo}
            </span>
            <LazyYouTubeEmbed
              videoId={variant.secondaryVideoId}
              title={`${roomLabel} - ${variant.secondaryLabel ?? raidGuidesLabels.extraVideo}`}
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}

function RaidRoomCard({ room, roomIndex }: { room: RaidGuideRoom; roomIndex: number }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-all duration-300 hover:border-gsw/30">
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
            priorityVideo={roomIndex === 0 && variantIndex === 0}
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
            {raidGuidesIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {raidGuidesIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl px-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {raidGuidesIntro.description}
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
                  {raidGuidesLabels.upcoming}
                </span>
                <h4 className="text-lg font-bold tracking-tight text-white sm:text-xl">{name}</h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {raidGuidesLabels.upcomingDescription}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

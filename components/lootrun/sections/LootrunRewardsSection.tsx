import LazyYouTubeEmbed from "@/components/shared/LazyYouTubeEmbed";
import {
  lootrunRewardItems,
  lootrunRewardMedia,
  lootrunRewardsIntro,
} from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";

export default function LootrunRewardsSection() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center sm:mb-16">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw">
            {lootrunRewardsIntro.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
            {lootrunRewardsIntro.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {lootrunRewardsIntro.lead}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {lootrunRewardsIntro.body}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-zinc-900/25 p-5 sm:p-7">
          <div className="space-y-2">
            {lootrunRewardItems.map((item) => (
              <p key={item} className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                - {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {lootrunRewardMedia.videos.map((video, index) => (
            <article key={video.id} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20">
              <div className="border-b border-white/5 px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gsw/90">{video.title}</h3>
              </div>
              <div className="px-4 pt-4 sm:px-5 sm:pt-5">
                <LazyYouTubeEmbed videoId={video.id} title={video.title} priority={index === 0} />
              </div>
              <p className="px-5 py-4 text-sm leading-relaxed text-zinc-400 sm:px-6 sm:py-5 sm:text-base">
                {video.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <LootrunMediaPlaceholder item={lootrunRewardMedia.image} />
        </div>
      </div>
    </section>
  );
}

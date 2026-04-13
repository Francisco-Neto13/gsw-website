import ClickableImagePreview from "@/components/shared/ClickableImagePreview";
import {
  lootrunRewardChest,
  lootrunRewardItems,
  lootrunRewardVideos,
  lootrunRewardsIntro,
} from "@/components/lootrun/data/lootrun-content";

export default function LootrunRewardsSection() {
  return (
    <section className="bg-zinc-950 px-4 py-16 sm:px-6 sm:py-24">
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

        <div className="mx-auto max-w-3xl space-y-2 rounded-2xl border border-white/10 bg-black/40 p-6">
          {lootrunRewardItems.map((item) => (
            <p key={item} className="text-sm leading-relaxed text-zinc-300 sm:text-base">
              - {item}
            </p>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {lootrunRewardsIntro.scaling}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {lootrunRewardVideos.map((video) => (
            <article key={video.title} className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <div className="border-b border-white/5 px-5 py-4">
                <span className="block text-xs font-bold uppercase tracking-[0.35em] text-gsw/80">
                  {video.title}
                </span>
              </div>
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <p className="px-5 py-4 text-sm leading-relaxed text-zinc-400">{video.description}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black/40">
          <div className="relative aspect-video w-full">
            <ClickableImagePreview src={lootrunRewardChest.src} alt={lootrunRewardChest.alt}>
              <img src={lootrunRewardChest.src} alt={lootrunRewardChest.alt} className="h-full w-full object-cover" />
            </ClickableImagePreview>
          </div>
          <p className="px-5 py-4 text-center text-sm leading-relaxed text-zinc-400">
            {lootrunRewardChest.caption}
          </p>
        </div>
      </div>
    </section>
  );
}

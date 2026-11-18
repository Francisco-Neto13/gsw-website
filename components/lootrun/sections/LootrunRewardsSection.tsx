import LazyYouTubeEmbed from "@/components/shared/LazyYouTubeEmbed";
import {
  lootrunRewardItems,
  lootrunRewardMedia,
  lootrunRewardsIntro,
} from "@/components/lootrun/data/lootrun-content";
import LootrunMediaPlaceholder from "@/components/lootrun/sections/LootrunMediaPlaceholder";

export default function LootrunRewardsSection() {
  return (
    <section className="relative border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <div>
        <div className="mb-8 max-w-leitura">
          <h2 className="text-titulo-2 text-texto">
            {lootrunRewardsIntro.title}
          </h2>
          <p className="mt-3 text-texto-2">
            {lootrunRewardsIntro.lead}
          </p>
          <p className="mt-4 max-w-leitura text-texto-2">
            {lootrunRewardsIntro.body}
          </p>
        </div>

        <div className="rounded-md border border-linha bg-zinc-900/25 p-5 sm:p-7">
          <div className="space-y-2">
            {lootrunRewardItems.map((item) => (
              <p key={item} className="text-texto-2">
                - {item}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {lootrunRewardMedia.videos.map((video, index) => (
            <article key={video.id} className="overflow-hidden rounded-md border border-linha bg-carvao">
              <div className="border-b border-linha px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="text-titulo-4 font-bold tracking-[0.2em] text-violeta/90">{video.title}</h3>
              </div>
              <div className="px-4 pt-4 sm:px-5 sm:pt-5">
                <LazyYouTubeEmbed videoId={video.id} title={video.title} priority={index === 0} />
              </div>
              <p className="px-5 py-4 text-apoio text-texto-2 sm:px-6 sm:py-5">
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


import SecaoGuia from "@/components/guias/SecaoGuia";
import LazyYouTubeEmbed from "@/components/shared/LazyYouTubeEmbed";
import { lootrunRewardItems, lootrunRewardMedia, lootrunRewardsIntro } from "@/components/lootrun/data/lootrun-content";
import MidiasLootrun from "@/components/lootrun/sections/MidiasLootrun";

export default function LootrunRewardsSection() {
  return (
    <SecaoGuia id="recompensas" titulo="Recompensas" introducao={`${lootrunRewardsIntro.lead} ${lootrunRewardsIntro.body}`}>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div>
          <h3 className="text-titulo-4 font-bold text-texto">O que pode sair do baú</h3>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {lootrunRewardItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <MidiasLootrun itens={[lootrunRewardMedia.image]} />
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {lootrunRewardMedia.videos.map((video) => (
          <figure key={video.id}>
            <div className="overflow-hidden rounded-md border border-linha bg-poco">
              <LazyYouTubeEmbed videoId={video.id} title={video.title} />
            </div>
            <figcaption className="mt-2 text-apoio text-texto-3">
              <span className="font-bold text-texto-2">{video.title}.</span> {video.description}
            </figcaption>
          </figure>
        ))}
      </div>
    </SecaoGuia>
  );
}

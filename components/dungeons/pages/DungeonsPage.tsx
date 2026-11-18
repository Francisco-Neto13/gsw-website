import GuideIntro from "@/components/shared/GuideIntro";
import { dungeonsIntroParagraphs } from "@/components/dungeons/data/dungeons-content";
import DungeonsAccessSection from "@/components/dungeons/sections/DungeonsAccessSection";
import DungeonsExtrasSection from "@/components/dungeons/sections/DungeonsExtrasSection";
import DungeonsListSection from "@/components/dungeons/sections/DungeonsListSection";
import DungeonsForgerySection from "@/components/dungeons/sections/DungeonsForgerySection";
import DungeonsMerchantSection from "@/components/dungeons/sections/DungeonsMerchantSection";
import DungeonsRewardsSection from "@/components/dungeons/sections/DungeonsRewardsSection";

export default function DungeonsPage() {
  return (
    <div className="min-h-screen bg-black">
        <GuideIntro
          title="Dungeons"
          paragraphs={dungeonsIntroParagraphs}
        />
        <DungeonsListSection />
        <DungeonsAccessSection />
        <DungeonsForgerySection />
        <DungeonsMerchantSection />
        <DungeonsRewardsSection />
        <DungeonsExtrasSection />
      </div>
  );
}

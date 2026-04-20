import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import InPageNavigation from "@/components/shared/InPageNavigation";
import Navbar from "@/components/shared/Navbar";
import { dungeonsIntroParagraphs } from "@/components/dungeons/data/dungeons-content";
import DungeonsAccessSection from "@/components/dungeons/sections/DungeonsAccessSection";
import DungeonsExtrasSection from "@/components/dungeons/sections/DungeonsExtrasSection";
import DungeonsForgerySection from "@/components/dungeons/sections/DungeonsForgerySection";
import DungeonsMerchantSection from "@/components/dungeons/sections/DungeonsMerchantSection";
import DungeonsRewardsSection from "@/components/dungeons/sections/DungeonsRewardsSection";

export default function DungeonsPage() {
  return (
    <>
      <Navbar currentPath="/dungeons" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow="Guia Oficial"
          title="Dungeons"
          paragraphs={dungeonsIntroParagraphs}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <InPageNavigation />

        <DungeonsAccessSection />
        <DungeonsForgerySection />
        <DungeonsMerchantSection />
        <DungeonsRewardsSection />
        <DungeonsExtrasSection />
      </main>
      <Footer />
    </>
  );
}

import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import Navbar from "@/components/shared/Navbar";
import { silverbullGuideIntro } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SilverbullBombsSection from "@/components/silverbull-shares/sections/SilverbullBombsSection";
import SilverbullCratesSection from "@/components/silverbull-shares/sections/SilverbullCratesSection";
import SilverbullExtrasSection from "@/components/silverbull-shares/sections/SilverbullExtrasSection";
import SilverbullMembershipSection from "@/components/silverbull-shares/sections/SilverbullMembershipSection";
import SilverbullOverviewSection from "@/components/silverbull-shares/sections/SilverbullOverviewSection";
import SilverbullPetsSection from "@/components/silverbull-shares/sections/SilverbullPetsSection";
import SilverbullRanksSection from "@/components/silverbull-shares/sections/SilverbullRanksSection";
import SilverbullTokensSection from "@/components/silverbull-shares/sections/SilverbullTokensSection";

export default function SilverbullSharesPage() {
  return (
    <>
      <Navbar currentPath="/silverbull-shares" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow={silverbullGuideIntro.eyebrow}
          title={silverbullGuideIntro.title}
          paragraphs={silverbullGuideIntro.paragraphs}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <SilverbullOverviewSection />
        <SilverbullRanksSection />
        <SilverbullMembershipSection />
        <SilverbullCratesSection />
        <SilverbullBombsSection />
        <SilverbullPetsSection />
        <SilverbullTokensSection />
        <SilverbullExtrasSection />
      </main>
      <Footer />
    </>
  );
}

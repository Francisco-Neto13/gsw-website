import GuideIntro from "@/components/shared/GuideIntro";
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
    <div className="min-h-screen bg-black">
        <GuideIntro
          eyebrow={silverbullGuideIntro.eyebrow}
          title={silverbullGuideIntro.title}
          paragraphs={silverbullGuideIntro.paragraphs}
        />
        <SilverbullOverviewSection />
        <SilverbullRanksSection />
        <SilverbullMembershipSection />
        <SilverbullCratesSection />
        <SilverbullBombsSection />
        <SilverbullPetsSection />
        <SilverbullTokensSection />
        <SilverbullExtrasSection />
      </div>
  );
}

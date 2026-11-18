import FimDoGuia from "@/components/guias/FimDoGuia";
import { sharesFontes } from "@/components/silverbull-shares/data/silverbull-shares-content";
import SharesAbertura from "@/components/silverbull-shares/sections/SharesAbertura";
import SilverbullBombsSection from "@/components/silverbull-shares/sections/SilverbullBombsSection";
import SilverbullCratesSection from "@/components/silverbull-shares/sections/SilverbullCratesSection";
import SilverbullExtrasSection from "@/components/silverbull-shares/sections/SilverbullExtrasSection";
import SilverbullMembershipSection from "@/components/silverbull-shares/sections/SilverbullMembershipSection";
import SilverbullOverviewSection from "@/components/silverbull-shares/sections/SilverbullOverviewSection";
import SilverbullPetsSection from "@/components/silverbull-shares/sections/SilverbullPetsSection";
import SilverbullRanksSection from "@/components/silverbull-shares/sections/SilverbullRanksSection";
import SilverbullTokensSection from "@/components/silverbull-shares/sections/SilverbullTokensSection";

/** Guia de Silverbull Shares, no modelo de Raids (docs/redesign/estrutura-do-guia.md). */
export default function SilverbullSharesPage() {
  return (
    <article>
      <SharesAbertura />
      <SilverbullOverviewSection />
      <SilverbullRanksSection />
      <SilverbullMembershipSection />
      <SilverbullCratesSection />
      <SilverbullBombsSection />
      <SilverbullPetsSection />
      <SilverbullTokensSection />
      <SilverbullExtrasSection />
      <FimDoGuia slug="silverbull-shares" fontes={sharesFontes} />
    </article>
  );
}

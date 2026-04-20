import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import InPageNavigation from "@/components/shared/InPageNavigation";
import Navbar from "@/components/shared/Navbar";
import { specialModesIntroParagraphs } from "@/components/special-modes/data/special-modes-content";
import SpecialModesChallengeSection from "@/components/special-modes/sections/SpecialModesChallengeSection";
import SpecialModesListSection from "@/components/special-modes/sections/SpecialModesListSection";

export default function SpecialModesPage() {
  return (
    <>
      <Navbar currentPath="/modos-especiais" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow="Guia Oficial"
          title="Modos Especiais"
          paragraphs={specialModesIntroParagraphs}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <InPageNavigation />

        <SpecialModesListSection />
        <SpecialModesChallengeSection />
      </main>
      <Footer />
    </>
  );
}

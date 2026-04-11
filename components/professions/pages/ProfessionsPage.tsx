import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import Navbar from "@/components/shared/Navbar";
import { professionsIntroParagraphs } from "@/components/professions/data/professions-content";
import ProfessionGrindSpotsSection from "@/components/professions/sections/ProfessionGrindSpotsSection";
import ProfessionToolsSection from "@/components/professions/sections/ProfessionToolsSection";
import ProfessionTypesSection from "@/components/professions/sections/ProfessionTypesSection";
import ProfessionWaypointsSection from "@/components/professions/sections/ProfessionWaypointsSection";

export default function ProfessionsPage() {
  return (
    <>
      <Navbar currentPath="/professions" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow="Guia Oficial"
          title="Profissões"
          paragraphs={professionsIntroParagraphs}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <ProfessionTypesSection />
        <ProfessionToolsSection />
        <ProfessionGrindSpotsSection />
        <ProfessionWaypointsSection />
      </main>
      <Footer />
    </>
  );
}

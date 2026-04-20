import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import InPageNavigation from "@/components/shared/InPageNavigation";
import Navbar from "@/components/shared/Navbar";
import { worldEventsIntroParagraphs } from "@/components/world-events/data/world-events-content";
import WorldEventsAnnihilationSection from "@/components/world-events/sections/WorldEventsAnnihilationSection";
import WorldEventsExtrasSection from "@/components/world-events/sections/WorldEventsExtrasSection";
import WorldEventsMechanicsSection from "@/components/world-events/sections/WorldEventsMechanicsSection";
import WorldEventsParticipationSection from "@/components/world-events/sections/WorldEventsParticipationSection";
import WorldEventsRewardsSection from "@/components/world-events/sections/WorldEventsRewardsSection";

export default function WorldEventsPage() {
  return (
    <>
      <Navbar currentPath="/world-events" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow="Guia Oficial"
          title="World Events"
          paragraphs={worldEventsIntroParagraphs}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <InPageNavigation />

        <WorldEventsParticipationSection />
        <WorldEventsMechanicsSection />
        <WorldEventsAnnihilationSection />
        <WorldEventsRewardsSection />
        <WorldEventsExtrasSection />
      </main>
      <Footer />
    </>
  );
}

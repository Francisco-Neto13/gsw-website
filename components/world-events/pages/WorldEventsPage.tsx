import GuideIntro from "@/components/shared/GuideIntro";
import { worldEventsIntroParagraphs } from "@/components/world-events/data/world-events-content";
import WorldEventsAnnihilationSection from "@/components/world-events/sections/WorldEventsAnnihilationSection";
import WorldEventsExtrasSection from "@/components/world-events/sections/WorldEventsExtrasSection";
import WorldEventsMechanicsSection from "@/components/world-events/sections/WorldEventsMechanicsSection";
import WorldEventsParticipationSection from "@/components/world-events/sections/WorldEventsParticipationSection";
import WorldEventsRewardsSection from "@/components/world-events/sections/WorldEventsRewardsSection";

export default function WorldEventsPage() {
  return (
    <div>
        <GuideIntro
          title="World Events"
          paragraphs={worldEventsIntroParagraphs}
        />
        <WorldEventsParticipationSection />
        <WorldEventsMechanicsSection />
        <WorldEventsAnnihilationSection />
        <WorldEventsRewardsSection />
        <WorldEventsExtrasSection />
      </div>
  );
}

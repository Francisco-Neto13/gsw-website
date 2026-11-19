import FimDoGuia from "@/components/guias/FimDoGuia";
import { worldEventsFontes } from "@/components/world-events/data/world-events-content";
import WorldEventsAbertura from "@/components/world-events/sections/WorldEventsAbertura";
import WorldEventsAnnihilationSection from "@/components/world-events/sections/WorldEventsAnnihilationSection";
import WorldEventsExtrasSection from "@/components/world-events/sections/WorldEventsExtrasSection";
import WorldEventsMechanicsSection from "@/components/world-events/sections/WorldEventsMechanicsSection";
import WorldEventsParticipationSection from "@/components/world-events/sections/WorldEventsParticipationSection";
import WorldEventsRewardsSection from "@/components/world-events/sections/WorldEventsRewardsSection";

/** Guia de World Events, no modelo de Raids (docs/redesign/estrutura-do-guia.md). */
export default function WorldEventsPage() {
  return (
    <article>
      <WorldEventsAbertura />
      <WorldEventsParticipationSection />
      <WorldEventsMechanicsSection />
      <WorldEventsAnnihilationSection />
      <WorldEventsRewardsSection />
      <WorldEventsExtrasSection />
      <FimDoGuia slug="world-events" fontes={worldEventsFontes} />
    </article>
  );
}

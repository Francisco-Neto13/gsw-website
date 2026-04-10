import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import Navbar from "@/components/shared/Navbar";
import GuildRaidsSection from "@/components/raids/sections/GuildRaidsSection";
import RaidExtrasSection from "@/components/raids/sections/RaidExtrasSection";
import RaidFirstStepsSection from "@/components/raids/sections/RaidFirstStepsSection";
import RaidGuidesSection from "@/components/raids/sections/RaidGuidesSection";
import RaidRewardsSection from "@/components/raids/sections/RaidRewardsSection";
import RaidStructureSection from "@/components/raids/sections/RaidStructureSection";

export default function RaidsPage() {
  return (
    <>
      <Navbar currentPath="/raids" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow="Guia Oficial"
          title="Raids"
          paragraphs={[
            "Raids são conteúdos em grupo com salas de desafio, buffs intermediários e um chefe final. Além da dificuldade própria de cada mapa, elas também entregam recompensas únicas que não aparecem em outras partes do jogo.",
            "Aqui você encontra o essencial para começar: como entrar, o que cada raid exige, como funciona a progressão interna e o que esperar das recompensas no final.",
          ]}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <RaidFirstStepsSection />
        <RaidStructureSection />
        <GuildRaidsSection />
        <RaidGuidesSection />
        <RaidRewardsSection />
        <RaidExtrasSection />
      </main>
      <Footer />
    </>
  );
}

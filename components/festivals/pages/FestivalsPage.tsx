import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import InPageNavigation from "@/components/shared/InPageNavigation";
import Navbar from "@/components/shared/Navbar";
import FestivalsDevelopmentSection from "@/components/festivals/sections/FestivalsDevelopmentSection";

const festivalsIntroParagraphs = [
  "Esta \u00E1rea vai centralizar os festivais, eventos sazonais e recompensas tempor\u00E1rias do Wynncraft.",
  "Enquanto o conte\u00FAdo oficial n\u00E3o \u00E9 publicado, esta p\u00E1gina permanece como marcador da estrutura futura do guia.",
];

export default function FestivalsPage() {
  return (
    <>
      <Navbar currentPath="/festivais" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow="Guia Oficial"
          title="Festivais"
          paragraphs={festivalsIntroParagraphs}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <InPageNavigation />
        <FestivalsDevelopmentSection />
      </main>
      <Footer />
    </>
  );
}

import Footer from "@/components/shared/Footer";
import GuideIntro from "@/components/shared/GuideIntro";
import InPageNavigation from "@/components/shared/InPageNavigation";
import Navbar from "@/components/shared/Navbar";
import MountsDevelopmentSection from "@/components/mounts/sections/MountsDevelopmentSection";

const mountsIntroParagraphs = [
  "Esta \u00E1rea vai reunir informa\u00E7\u00F5es sobre montarias, aquisi\u00E7\u00E3o, melhoria e uso estrat\u00E9gico durante a progress\u00E3o.",
  "Enquanto o conte\u00FAdo oficial n\u00E3o \u00E9 publicado, esta p\u00E1gina permanece como marcador da estrutura futura do guia.",
];

export default function MountsPage() {
  return (
    <>
      <Navbar currentPath="/montarias" />
      <main className="min-h-screen bg-black">
        <GuideIntro
          eyebrow="Guia Oficial"
          title="Montarias"
          paragraphs={mountsIntroParagraphs}
          sectionClassName="bg-zinc-950"
          decorations={
            <>
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gsw/5 blur-[130px]" />
            </>
          }
        />

        <InPageNavigation />
        <MountsDevelopmentSection />
      </main>
      <Footer />
    </>
  );
}

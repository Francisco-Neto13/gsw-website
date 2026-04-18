import Navbar from "@/components/shared/Navbar";
import History from "@/components/history/sections/History";
import Pillars from "@/components/history/sections/Pillars";
import Essence from "@/components/history/sections/Essence";
import Footer from "@/components/shared/Footer";
import MembersSection from "@/components/history/sections/MembersSection";
import GallerySection from "@/components/history/sections/GallerySection";

export default function HistoryPage() {
  return (
    <>
      <Navbar currentPath="/historia" />

      <main id="topo" className="min-h-screen bg-black">
        <History />
        <MembersSection />
        <Pillars />
        <GallerySection />
        <Essence />
      </main>

      <Footer />
    </>
  );
}

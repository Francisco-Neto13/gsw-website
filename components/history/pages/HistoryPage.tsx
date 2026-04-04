import Navbar from "@/components/shared/Navbar";
import History from "@/components/history/sections/History";
import Pillars from "@/components/history/sections/Pillars";
import Essence from "@/components/history/sections/Essence";
import Footer from "@/components/shared/Footer";
import MembersSection from "@/features/members/components/public/MembersSection";
import GallerySection from "@/features/gallery/components/public/GallerySection";

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

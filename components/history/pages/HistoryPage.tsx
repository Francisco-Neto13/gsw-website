import History from "@/components/history/sections/History";
import Pillars from "@/components/history/sections/Pillars";
import Essence from "@/components/history/sections/Essence";
import MembersSection from "@/components/history/sections/MembersSection";
import GallerySection from "@/components/history/sections/GallerySection";

export default function HistoryPage() {
  return (
    <div id="topo">
        <History />
        <MembersSection />
        <Pillars />
        <GallerySection />
        <Essence />
      </div>
  );
}

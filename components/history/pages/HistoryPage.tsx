import History from "@/components/history/sections/History";
import Pillars from "@/components/history/sections/Pillars";
import Essence from "@/components/history/sections/Essence";
import MembersSection from "@/components/history/sections/MembersSection";
import GallerySection from "@/components/history/sections/GallerySection";
import GuildHouseChamada from "@/components/history/sections/GuildHouseChamada";

export default function HistoryPage() {
  return (
    <div id="topo">
        <History />
        <MembersSection />
        <Pillars />
        <GuildHouseChamada />
        <GallerySection />
        <Essence />
      </div>
  );
}

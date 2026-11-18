import LootrunPage from "@/components/lootrun/pages/LootrunPage";
import { metadataDoGuia } from "@/lib/site-content";

export const metadata = metadataDoGuia("lootrun");

export default function Pagina() {
  return <LootrunPage />;
}

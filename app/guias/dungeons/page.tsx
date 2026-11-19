import DungeonsPage from "@/components/dungeons/pages/DungeonsPage";
import { metadataDoGuia } from "@/lib/site-content";

export const metadata = metadataDoGuia("dungeons");

export default function Pagina() {
  return <DungeonsPage />;
}

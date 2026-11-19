import FestivalsPage from "@/components/festivals/pages/FestivalsPage";
import { metadataDoGuia } from "@/lib/site-content";

export const metadata = metadataDoGuia("festivais");

export default function Pagina() {
  return <FestivalsPage />;
}

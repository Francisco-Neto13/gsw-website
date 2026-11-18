import SitesUteisPage from "@/components/sites-uteis/pages/SitesUteisPage";
import { metadataDoGuia } from "@/lib/site-content";

export const metadata = metadataDoGuia("sites-uteis");

export default function Pagina() {
  return <SitesUteisPage />;
}

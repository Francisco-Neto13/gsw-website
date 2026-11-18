import MountsPage from "@/components/mounts/pages/MountsPage";
import { metadataDoGuia } from "@/lib/site-content";

export const metadata = metadataDoGuia("montarias");

export default function Pagina() {
  return <MountsPage />;
}

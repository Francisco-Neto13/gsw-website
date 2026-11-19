import SpecialModesPage from "@/components/special-modes/pages/SpecialModesPage";
import { metadataDoGuia } from "@/lib/site-content";

export const metadata = metadataDoGuia("modos-especiais");

export default function Pagina() {
  return <SpecialModesPage />;
}

import ProfessionsPage from "@/components/professions/pages/ProfessionsPage";
import { metadataDoGuia } from "@/lib/site-content";

export const metadata = metadataDoGuia("profissoes");

export default function Pagina() {
  return <ProfessionsPage />;
}

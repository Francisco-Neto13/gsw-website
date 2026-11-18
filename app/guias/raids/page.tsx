import RaidsPage from "@/components/raids/pages/RaidsPage";
import { metadataDoGuia } from "@/lib/site-content";

export const metadata = metadataDoGuia("raids");

export default function Pagina() {
  return <RaidsPage />;
}

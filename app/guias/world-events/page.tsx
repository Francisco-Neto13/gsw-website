import WorldEventsPage from "@/components/world-events/pages/WorldEventsPage";
import { metadataDoGuia } from "@/lib/site-content";

export const metadata = metadataDoGuia("world-events");

export default function Pagina() {
  return <WorldEventsPage />;
}

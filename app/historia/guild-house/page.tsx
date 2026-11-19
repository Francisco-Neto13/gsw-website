import GuildHousePage from "@/components/guild-house/pages/GuildHousePage";
import { metadataDoGuia } from "@/lib/site-content";

export const metadata = metadataDoGuia("guild-house");

export default function Pagina() {
  return <GuildHousePage />;
}

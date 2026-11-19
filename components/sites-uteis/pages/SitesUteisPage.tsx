import FimDoGuia from "@/components/guias/FimDoGuia";
import { sitesFontes } from "@/components/sites-uteis/data/sites-uteis-content";
import SitesAbertura from "@/components/sites-uteis/sections/SitesAbertura";
import SitesGuia from "@/components/sites-uteis/sections/SitesGuia";

/** Sites úteis: guia rápido das ferramentas da comunidade, no modelo de Raids. */
export default function SitesUteisPage() {
  return (
    <article>
      <SitesAbertura />
      <SitesGuia />
      <FimDoGuia
        slug="sites-uteis"
        fontes={sitesFontes}
        introducao="Endereços originais de cada site, conferidos em 18/11/2026. Os sites pertencem aos seus criadores; se algum link mudar, avise a guilda no Discord."
      />
    </article>
  );
}

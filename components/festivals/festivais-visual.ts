import { Flame, Ghost, PartyPopper, Snowflake, type LucideIcon } from "lucide-react";
import type { CSSProperties } from "react";
import type { FestivalId } from "@/components/festivals/data/festivals-content";

/** Logo oficial do festival (arte da Wynncraft, em public/terceiros/; some sozinho se a pasta for removida). */
export const logoDoFestival = (id: FestivalId) => `/terceiros/wynncraft/festival-${id}-logo.webp`;

/** Ícone e cor de cada festival (cores em foundation.css). A cor entra como --festival no elemento. */
export const visualDoFestival: Record<FestivalId, { Icone: LucideIcon; estilo: CSSProperties }> = {
  heroes: { Icone: PartyPopper, estilo: { "--festival": "var(--color-festival-heroes)" } as CSSProperties },
  bonfire: { Icone: Flame, estilo: { "--festival": "var(--color-festival-bonfire)" } as CSSProperties },
  spirits: { Icone: Ghost, estilo: { "--festival": "var(--color-festival-spirits)" } as CSSProperties },
  blizzard: { Icone: Snowflake, estilo: { "--festival": "var(--color-festival-blizzard)" } as CSSProperties },
};

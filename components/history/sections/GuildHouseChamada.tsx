import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { guildHouseChamada, guildHouseDestaque } from "@/components/guild-house/data/guild-house-content";
import { dimensoesDe } from "@/lib/imagens";
import { guiaHref } from "@/lib/site-content";

/** Na página da Comunidade: chamada para o guia da Guild House, a sede da guilda. */
export default function GuildHouseChamada() {
  const medida = dimensoesDe(guildHouseDestaque.src);
  return (
    <section id="guild-house" className="border-t border-linha py-16 sm:py-20">
      <div className="casca grid gap-x-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="mb-8 max-w-leitura lg:mb-0">
          <h2 className="text-titulo-2 text-texto">{guildHouseChamada.titulo}</h2>
          <p className="mt-3 text-texto-2">{guildHouseChamada.texto}</p>
          <Link
            href={guiaHref("guild-house")}
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-violeta-borda px-4 py-2 font-bold text-violeta transition-colors hover:bg-violeta/10"
          >
            {guildHouseChamada.acao}
            <ArrowRight aria-hidden size={16} strokeWidth={1.75} />
          </Link>
        </div>
        {medida ? (
          <Link
            href={guiaHref("guild-house")}
            data-revelar-item
            className="zoom-hover holofote relative block overflow-hidden rounded-md border border-linha"
            aria-label={guildHouseChamada.acao}
          >
            <Image
              src={guildHouseDestaque.src}
              alt={guildHouseDestaque.alt}
              width={medida[0]}
              height={medida[1]}
              sizes="(min-width: 1024px) 60vw, calc(100vw - 2rem)"
              quality={90}
              className="h-auto w-full"
            />
          </Link>
        ) : null}
      </div>
    </section>
  );
}

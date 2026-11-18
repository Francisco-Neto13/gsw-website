import Link from "next/link";
import { areas, contatoEmail, discordUrl } from "@/lib/site-content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-caixa-fora bg-carvao shadow-[inset_0_1px_0_rgba(113,22,173,0.45)]">
      <div className="casca grid gap-8 py-10 md:grid-cols-[1.4fr_1fr]">
        <div className="max-w-[60ch]">
          <p className="font-titulo text-titulo-4 text-texto">GsW · Guardians of Wynn</p>
          <p className="mt-2 text-texto-2">
            Guia de Wynncraft em português, escrito e mantido pela guilda GsW.
          </p>

          {/* Aviso exigido pelas Minecraft Usage Guidelines (docs/CREDITOS.md). */}
          <p className="mt-6 max-w-[56ch] text-apoio leading-relaxed text-texto-2">
            <strong className="text-texto">Site de fãs.</strong> Não é um site oficial do Minecraft. Não aprovado por
            nem associado à Mojang ou à Microsoft. Não afiliado à Wynncraft Studios. Wynncraft e seus assets ©
            Wynncraft Studios; Minecraft © Mojang AB.
          </p>
          <p className="mt-3 text-apoio text-texto-2">
            Responsável: guilda GsW.{" "}
            {contatoEmail ? (
              <>
                Contato:{" "}
                <a href={`mailto:${contatoEmail}`} className="text-violeta underline decoration-violeta/40 hover:decoration-violeta">
                  {contatoEmail}
                </a>
              </>
            ) : (
              <span>Contato: a definir.</span>
            )}
          </p>
        </div>

        <nav aria-label="Rodapé" className="grid grid-cols-2 gap-6 text-apoio md:justify-self-end">
          <ul className="flex flex-col gap-2">
            {areas.map((area) => (
              <li key={area.href}>
                <Link href={area.href} className="text-texto-2 hover:text-texto">
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="text-texto-2 hover:text-texto">
                Discord da guilda
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Francisco-Neto13/gsw-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-texto-2 hover:text-texto"
              >
                Código no GitHub
              </a>
            </li>
            <li>
              <a href="https://wynncraft.wiki.gg/" target="_blank" rel="noopener noreferrer" className="text-texto-2 hover:text-texto">
                Wiki da Wynncraft
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="border-t border-linha px-4 py-4 text-center text-apoio text-texto-3 sm:px-6">
        © 2024–2026 GsW. Textos próprios; fontes citadas em cada guia.
      </p>
    </footer>
  );
}

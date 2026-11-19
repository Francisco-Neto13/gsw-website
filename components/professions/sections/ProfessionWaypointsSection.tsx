import { Download } from "lucide-react";
import SecaoGuia from "@/components/guias/SecaoGuia";
import { waypointImportSteps, waypointSnippet, waypointsIntro } from "@/components/professions/data/professions-content";

export default function ProfessionWaypointsSection() {
  return (
    <SecaoGuia id="waypoints" titulo="Waypoints no Wynntils" introducao={waypointsIntro}>
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-titulo-4 font-bold text-texto">Como importar</h3>
          <ol className="mt-3 flex list-decimal flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {waypointImportSteps.map((passo) => (
              <li key={passo}>{passo}</li>
            ))}
          </ol>
          <a
            href="/professions/profwaypoints.txt"
            download
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-violeta-borda px-4 py-2 font-bold text-violeta transition-colors hover:bg-violeta/10"
          >
            <Download aria-hidden size={16} strokeWidth={1.75} />
            Baixar profwaypoints.txt
          </a>
        </div>
        <figure>
          <pre className="overflow-x-auto rounded-md border border-linha bg-poco p-4 text-detalhe leading-relaxed text-texto-2">
            <code>{waypointSnippet}</code>
          </pre>
          <figcaption className="mt-2 text-apoio text-texto-3">O começo do arquivo; o completo está no download.</figcaption>
        </figure>
      </div>
    </SecaoGuia>
  );
}

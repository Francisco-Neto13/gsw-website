import SecaoGuia from "@/components/guias/SecaoGuia";
import { mecanicas, mecanicasIntro } from "@/components/world-events/data/world-events-content";

export default function WorldEventsMechanicsSection() {
  return (
    <SecaoGuia id="como-funciona" titulo="Como funciona" introducao={mecanicasIntro}>
      <ol className="grid gap-4 sm:grid-cols-2">
        {mecanicas.map((etapa, indice) => (
          <li key={etapa.titulo} className="rounded-md border border-linha bg-carvao px-5 py-4">
            <p className="flex items-baseline gap-2 font-bold text-texto">
              <span className="numeros font-mono text-violeta">{indice + 1}.</span>
              {etapa.titulo}
            </p>
            <p className="mt-1 text-texto-2">{etapa.texto}</p>
          </li>
        ))}
      </ol>
    </SecaoGuia>
  );
}

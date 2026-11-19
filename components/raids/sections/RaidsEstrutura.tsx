import SecaoGuia from "@/components/guias/SecaoGuia";
import TextoComTermos from "@/components/guias/TextoComTermos";
import { raidStructureSteps } from "@/components/raids/data/raids-content";

export default function RaidsEstrutura() {
  return (
    <SecaoGuia
      id="estrutura"
      titulo="Como uma raid funciona"
      introducao="Todas as raids seguem a mesma sequência. O que muda de uma para outra é a mecânica de cada sala."
    >
      <ol className="relative max-w-leitura">
        {raidStructureSteps.map((etapa, indice) => (
          <li key={etapa.title} className="relative flex gap-4 pb-8 last:pb-0">
            {indice < raidStructureSteps.length - 1 ? (
              <span aria-hidden className="absolute left-[1.0625rem] top-10 h-[calc(100%-2.5rem)] w-px bg-linha-forte" />
            ) : null}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gsw font-mono font-medium text-white">
              {indice + 1}
            </span>
            <div className="pt-1">
              <h3 className="font-bold text-texto">{etapa.title}</h3>
              <p className="mt-1 text-texto-2">
                <TextoComTermos texto={etapa.description} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </SecaoGuia>
  );
}

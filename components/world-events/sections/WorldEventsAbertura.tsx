import Breadcrumb from "@/components/guias/Breadcrumb";
import FichaGuia from "@/components/guias/FichaGuia";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoComTermos from "@/components/guias/TextoComTermos";
import TextoAnimado from "@/components/shared/TextoAnimado";
import type { CSSProperties } from "react";
import { worldEventsIntroParagraphs, worldEventsResumo } from "@/components/world-events/data/world-events-content";
import { guias } from "@/lib/site-content";

const guia = guias.find((item) => item.slug === "world-events")!;

export default function WorldEventsAbertura() {
  return (
    <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <div className="grid gap-x-12 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
        <div className="max-w-leitura xl:col-start-1">
          <div className="entra">
            <Breadcrumb guia={guia} />
          </div>
          <h1 className="mt-3 text-titulo-1 text-texto">
            <TextoAnimado texto="World Events" inicio={1} />
          </h1>
          <p className="entra mt-3 text-lede text-texto-2" style={{ "--i": 2 } as CSSProperties}>
            Como os eventos do mapa funcionam, o que eles dão e como vencer o Annihilation.
          </p>
        </div>

        <div className="mt-8 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:mt-0">
          <FichaGuia
            titulo="World Events"
            tipo="Eventos do mapa · Endgame"
            linhas={[
              { rotulo: "Party", valor: "Sozinho ou em party; até 10 no Annihilation" },
              { rotulo: "Nível", valor: <span className="numeros">3 a 120, conforme o evento</span> },
              { rotulo: "Precisa de", valor: "Nada no começo; quest nas regiões de nível alto" },
              { rotulo: "Duração", valor: <span className="numeros">Poucos minutos; até 30 no Annihilation</span> },
              { rotulo: "Annihilation", valor: "A cada 3 dias, nível 30+" },
            ]}
            rodape={<SeloVersao guia={guia} />}
          />
        </div>

        <div className="entra mt-8 max-w-leitura xl:col-start-1" style={{ "--i": 4 } as CSSProperties}>
          {worldEventsIntroParagraphs.map((paragrafo) => (
            <p key={paragrafo} className="mt-3 text-texto-2 first:mt-0">
              {paragrafo}
            </p>
          ))}
          <h2 className="mt-8 text-titulo-4 text-texto">Resumo rápido</h2>
          <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
            {worldEventsResumo.map((item) => (
              <li key={item}>
                <TextoComTermos texto={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

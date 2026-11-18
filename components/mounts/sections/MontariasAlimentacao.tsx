import { Calculator, ExternalLink, Table } from "lucide-react";
import Destaque from "@/components/guias/Destaque";
import SecaoGuia from "@/components/guias/SecaoGuia";
import {
  comoFuncionaAlimentacao,
  dicaDoLevel,
  montariasAlimentacaoIntro,
  recursosDeAlimentacao,
} from "@/components/mounts/data/mounts-content";

const icones = [Table, Calculator];

export default function MontariasAlimentacao() {
  return (
    <SecaoGuia id="alimentacao" titulo="Alimentação" introducao={montariasAlimentacaoIntro}>
      <h3 className="max-w-leitura text-titulo-4 font-bold text-texto">Como funciona</h3>
      <ul className="mt-3 flex max-w-leitura list-disc flex-col gap-1.5 pl-5 text-texto-2 marker:text-violeta">
        {comoFuncionaAlimentacao.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Destaque {...dicaDoLevel} className="mt-6" />

      <h3 className="mt-10 max-w-leitura text-titulo-4 font-bold text-texto">Ferramentas</h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
        {recursosDeAlimentacao.map((recurso, indice) => {
          const Icone = icones[indice % icones.length];
          const corpo = (
            <>
              <Icone aria-hidden size={22} strokeWidth={1.75} className="mt-0.5 shrink-0 text-violeta" />
              <span className="flex-1">
                <span className="flex items-center gap-1.5 font-bold text-texto">
                  {recurso.titulo}
                  {recurso.href ? <ExternalLink aria-hidden size={14} strokeWidth={1.75} className="text-texto-3" /> : null}
                </span>
                <span className="mt-1 block text-apoio text-texto-2">{recurso.descricao}</span>
                {recurso.href ? null : <span className="mt-2 block text-detalhe text-texto-3">Link a definir</span>}
              </span>
            </>
          );
          return (
            <li key={recurso.titulo}>
              {recurso.href ? (
                <a
                  href={recurso.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full gap-3 rounded-md border border-linha bg-carvao px-4 py-4 transition-colors hover:border-violeta-borda hover:bg-elevada"
                >
                  {corpo}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              ) : (
                // Tracejado: ainda não existe (DESIGN.md, formas).
                <div className="flex h-full gap-3 rounded-md border border-dashed border-linha-forte px-4 py-4">{corpo}</div>
              )}
            </li>
          );
        })}
      </ul>
    </SecaoGuia>
  );
}

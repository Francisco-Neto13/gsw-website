import type { ReactNode } from "react";
import TextoComTermos from "@/components/guias/TextoComTermos";

type SecaoGuiaProps = {
  id: string;
  titulo: string;
  introducao?: string;
  children: ReactNode;
};

/** Bloco padrão de um guia: âncora para o índice, título e texto na largura de leitura. */
export default function SecaoGuia({ id, titulo, introducao, children }: SecaoGuiaProps) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-28 border-t border-linha px-4 py-12 sm:px-6 lg:px-10">
      <header className="max-w-[60ch]">
        <h2 id={`${id}-titulo`} className="text-[clamp(1.5rem,2.4vw,1.875rem)] text-texto">
          {titulo}
        </h2>
        {introducao ? (
          <p className="mt-3 text-texto-2">
            <TextoComTermos texto={introducao} />
          </p>
        ) : null}
      </header>
      <div className="mt-8">{children}</div>
    </section>
  );
}

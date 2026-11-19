"use client";

import type { CSSProperties, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/guias/Breadcrumb";
import SeloVersao from "@/components/guias/SeloVersao";
import TextoAnimado from "@/components/shared/TextoAnimado";
import { guias, guiaHref } from "@/lib/site-content";

interface GuideIntroProps {
  id?: string;
  /** Mantido por compatibilidade com os guias antigos; não é mais exibido (sem rótulo acima do título). */
  eyebrow?: string;
  title: ReactNode;
  paragraphs: string[];
  sectionClassName?: string;
  contentClassName?: string;
  decorations?: ReactNode;
}

/** Cabeçalho dos guias no modelo antigo: compacto, sem a tela inteira vazia de antes. */
export default function GuideIntro({ id, title, paragraphs }: GuideIntroProps) {
  const pathname = usePathname();
  const guia = guias.find((item) => guiaHref(item.slug) === pathname);

  return (
    <section id={id} className="px-4 pb-10 pt-8 sm:px-6 lg:px-10 lg:pt-10">
      <header className="max-w-leitura">
        {guia ? (
          <div className="entra">
            <Breadcrumb guia={guia} />
          </div>
        ) : null}
        <h1 className="mt-3 text-titulo-1 text-texto">
          {typeof title === "string" ? <TextoAnimado texto={title} inicio={1} /> : title}
        </h1>
        {guia ? (
          <div className="entra mt-4" style={{ "--i": 3 } as CSSProperties}>
            <SeloVersao guia={guia} />
          </div>
        ) : null}
        <div className="mt-5 flex flex-col gap-4 text-texto-2">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="entra" style={{ "--i": 4 + index } as CSSProperties}>
              {paragraph}
            </p>
          ))}
        </div>
      </header>
    </section>
  );
}

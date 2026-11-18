"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/guias/Breadcrumb";
import SeloVersao from "@/components/guias/SeloVersao";
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
        {guia ? <Breadcrumb guia={guia} /> : null}
        <h1 className="mt-3 text-titulo-1 text-texto">{title}</h1>
        {guia ? (
          <div className="mt-4">
            <SeloVersao guia={guia} />
          </div>
        ) : null}
        <div className="mt-5 flex flex-col gap-4 text-texto-2">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </header>
    </section>
  );
}

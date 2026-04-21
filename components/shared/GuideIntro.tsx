"use client";

import type { ReactNode } from "react";

interface GuideIntroProps {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  paragraphs: string[];
  sectionClassName?: string;
  contentClassName?: string;
  decorations?: ReactNode;
}

export default function GuideIntro({
  id,
  eyebrow,
  title,
  paragraphs,
  sectionClassName = "bg-black",
  contentClassName = "",
  decorations,
}: GuideIntroProps) {
  return (
    <section
      id={id}
      className={`relative flex min-h-[88svh] items-center overflow-hidden px-4 pb-14 pt-24 sm:min-h-screen sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24 ${sectionClassName}`.trim()}
    >
      {decorations}

      <div className={`relative z-10 mx-auto max-w-5xl ${contentClassName}`.trim()}>
        <div className="reveal-on-scroll mx-auto flex min-h-[360px] max-w-3xl flex-col justify-center text-center sm:min-h-[420px] sm:h-[520px] sm:justify-start sm:pt-24">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.6em] text-gsw sm:mb-6">
            {eyebrow}
          </span>
          <h1 className="mb-6 text-[2.15rem] font-black tracking-tight text-white sm:mb-8 sm:text-5xl lg:text-7xl">
            {title}
          </h1>
          <div className="mx-auto flex max-w-3xl flex-col justify-start sm:min-h-[168px] sm:h-[220px]">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`${index === 0 ? "" : "mt-5 "}px-2 text-sm leading-relaxed text-zinc-400 sm:text-base`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

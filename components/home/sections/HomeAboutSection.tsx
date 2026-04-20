import Image from "next/image";
import {
  type HomePillarIcon,
  homeAboutContent,
  homeAboutShowcase,
  homePillars,
} from "@/components/home/data/home-content";

function PillarIcon({ icon }: { icon: HomePillarIcon }) {
  if (icon === "book") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    );
  }

  if (icon === "clock") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function HomeAboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-28">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="reveal-on-scroll">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.45em] text-gsw">
              {homeAboutContent.eyebrow}
            </span>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
              {homeAboutContent.title} <span className="text-gsw">{homeAboutContent.titleHighlight}</span>
            </h2>

            <div className="mt-7 space-y-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
              {homeAboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {homeAboutShowcase.map((item) => (
              <article
                key={item.src}
                className="reveal-on-scroll overflow-hidden rounded-3xl border border-white/10 bg-black/50"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <p className="absolute right-4 bottom-4 left-4 text-sm font-semibold text-white">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 sm:mt-16">
          {homePillars.map((item, index) => (
            <article
              key={item.title}
              className="reveal-on-scroll group relative rounded-2xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gsw/10 p-3 text-gsw transition-all duration-200 group-hover:bg-gsw group-hover:text-white">
                <PillarIcon icon={item.icon} />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
              <span className="absolute right-5 bottom-4 select-none text-4xl font-black italic text-white/5 group-hover:text-gsw/15">
                0{index + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

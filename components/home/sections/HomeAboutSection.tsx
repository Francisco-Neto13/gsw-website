import { type HomePillarIcon, homeAboutContent, homePillars } from "@/components/home/data/home-content";

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
    <section id="sobre" className="relative -mt-px overflow-hidden bg-zinc-950 px-4 py-16 sm:px-6 sm:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gsw/5 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-900/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center reveal-on-scroll">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.45em] text-gsw">
            {homeAboutContent.eyebrow}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            {homeAboutContent.title} <span className="text-gsw">{homeAboutContent.titleHighlight}</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-sm leading-relaxed text-zinc-400 reveal-on-scroll sm:mt-14 sm:text-base">
          {homeAboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 sm:mt-20">
          {homePillars.map((item, index) => (
            <article
              key={item.title}
              className="reveal-on-scroll group relative rounded-3xl border border-white/10 bg-black/40 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gsw/40 sm:p-8"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gsw/10 p-3 text-gsw transition-all duration-200 group-hover:bg-gsw group-hover:text-white">
                <PillarIcon icon={item.icon} />
              </div>
              <h3 className="mb-3 text-lg font-bold tracking-tight text-white sm:text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-300">
                {item.description}
              </p>
              <div className="absolute right-6 bottom-4 select-none text-4xl font-black italic text-white/5 group-hover:text-gsw/10">
                0{index + 1}
              </div>
            </article>
          ))}
        </div>

        <div className="reveal-on-scroll mt-14 text-center sm:mt-20">
          <p className="inline-block border-t border-white/5 px-6 pt-10 text-sm italic leading-relaxed text-zinc-500 sm:px-12 sm:pt-12">
            &ldquo;{homeAboutContent.closingQuote}{" "}
            <span className="text-sm font-bold uppercase tracking-widest text-gsw/60">
              {homeAboutContent.closingQuoteHighlight}
            </span>.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

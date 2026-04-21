import Image from "next/image";
import Link from "next/link";
import { homeHeroContent, homeHeroSpotlights } from "@/components/home/data/home-content";

export default function HomeHeroSection() {
  return (
    <>
      <section data-reveal-ignore="true" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${homeHeroContent.backgroundImage}')` }}
        />
        <div className="absolute inset-0 z-[1] bg-black/75" />
        <div className="absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-b from-transparent to-zinc-950" />

        <div className="relative z-10 mx-auto max-w-7xl -translate-y-10 text-center">
          <h1 className="text-7xl font-black italic leading-none tracking-tight text-gsw sm:text-9xl">
            {homeHeroContent.brand}
          </h1>
          <p className="mx-auto -mt-0.5 max-w-md text-xs font-bold uppercase tracking-[0.35em] text-zinc-300">
            {homeHeroContent.brandSubtitle}
          </p>
        </div>
      </section>

      <section
        data-reveal-ignore="true"
        className="relative isolate overflow-hidden bg-black px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div
              data-reveal="left"
              data-reveal-delay="40"
              className="reveal-on-scroll rounded-3xl border border-white/10 bg-black/45 p-6 backdrop-blur sm:p-8"
            >
              <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[0.45em] text-gsw/90">
                {homeHeroContent.eyebrow}
              </span>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                {homeHeroContent.title}
                <span className="block text-gsw">{homeHeroContent.titleHighlight}</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base">{homeHeroContent.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{homeHeroContent.description}</p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={homeHeroContent.secondaryCta.href}
                  className="rounded-xl border border-white/20 bg-black/45 px-5 py-3 text-xs font-bold uppercase tracking-widest text-zinc-200 transition hover:border-gsw/45 hover:text-white"
                >
                  {homeHeroContent.secondaryCta.label}
                </Link>
              </div>
            </div>

            <aside
              data-reveal="right"
              data-reveal-delay="140"
              className="reveal-on-scroll rounded-3xl border border-white/10 bg-black/50 p-3 backdrop-blur sm:p-4"
            >
              <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-gsw/85">Em destaque</p>
              <div className="space-y-3">
                {homeHeroSpotlights.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group grid grid-cols-[112px_1fr] gap-3 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/65 p-2 transition hover:border-gsw/45 hover:bg-black/80"
                  >
                    <div className="relative h-24 overflow-hidden rounded-xl bg-black">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col justify-center pr-1">
                      <span className="text-sm font-bold tracking-tight text-white">{item.label}</span>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-400">{item.note}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

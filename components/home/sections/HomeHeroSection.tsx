import { homeHeroContent } from "@/components/home/data/home-content";

export default function HomeHeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${homeHeroContent.backgroundImage}')` }}
      />
      <div className="absolute inset-0 z-[1] bg-black/75" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-b from-transparent to-zinc-950" />

      <div className="relative z-10 mx-auto max-w-7xl -translate-y-10 text-center animate-fade-in">
        <h1 className="text-7xl font-black italic leading-none tracking-tight text-gsw sm:text-9xl">
          {homeHeroContent.title}
        </h1>
        <p className="mx-auto -mt-0.5 max-w-md text-xs font-bold uppercase tracking-[0.35em] text-zinc-300">
          {homeHeroContent.subtitle}
        </p>
      </div>
    </section>
  );
}

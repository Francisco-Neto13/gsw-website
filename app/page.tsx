import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
        <div 
          className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-guilda.jpeg')" }}
        />
        
        <div className="absolute inset-0 z-[1] bg-black/75" />

        <div className="absolute z-[2] h-[400px] w-[400px] rounded-full bg-gsw/20 blur-[120px] animate-pulse" />

        <div className="relative z-10 text-center">
          <h1 className="text-7xl font-black italic tracking-tighter text-white sm:text-9xl">
            <span className="text-gsw not-italic">GsW</span>
          </h1>
          
          <p className="mx-auto mt-4 max-w-md text-sm font-bold uppercase tracking-[0.4em] text-zinc-400">
            <span className="text-zinc-100">Guardians Of Wynn</span>
          </p>

          <div className="mt-12 flex justify-center">
            <a 
              href="#historia"
              className="group relative w-64 overflow-hidden border border-white/20 bg-white/5 py-4 font-black tracking-[0.2em] text-white transition-all hover:border-gsw hover:bg-gsw/20 text-center"
            >
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gsw shadow-[0_0_10px_#7116ad]" />
              NOSSA HISTÓRIA
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
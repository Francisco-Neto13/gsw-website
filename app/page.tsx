import Navbar from "./components/Navbar"; 
import History from "./components/History"; 
import Members from "./components/Members";
import Pillars from "./components/Pillars";
import Gallery from "./components/Gallery";
import Essence from "./components/Essence";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="gsw" className="relative min-h-screen bg-black"> 
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center animate-fade-in"
          style={{
            backgroundImage: "url('/bg-guilda.jpeg')",
            animationDelay: "200ms",
          }}
        />

        <div className="absolute inset-0 z-[1] bg-black/75" />

        <div className="relative z-10 mx-auto max-w-7xl text-center animate-fade-in -translate-y-10">
          <h1 className="text-7xl font-black italic tracking-tight leading-none text-gsw sm:text-9xl">
            GsW
          </h1>

          <p className="mx-auto -mt-0.5 max-w-md text-xs font-bold uppercase tracking-[0.35em] text-zinc-300">
            Guardians of Wynn
          </p>
        </div>
      </section>
      <History />
      <Members />
      <Pillars />
      <Gallery />
      <Essence />
      <Footer />
    </main>
  );
}
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import HomeAboutSection from "@/components/home/sections/HomeAboutSection";
import HomeContentSection from "@/components/home/sections/HomeContentSection";
import HomeHeroSection from "@/components/home/sections/HomeHeroSection";

export default function HomePage() {
  return (
    <main id="gsw" className="relative min-h-screen bg-black">
      <Navbar currentPath="/" />
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeContentSection />
      <Footer />
    </main>
  );
}

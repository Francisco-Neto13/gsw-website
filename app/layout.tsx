import type { Metadata, Viewport } from "next";
import { Alegreya_Sans, JetBrains_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import AnimationInitializer from "@/components/shared/AnimationInitializer";
import SiteFooter from "@/components/shared/SiteFooter";
import TopBar from "@/components/shared/TopBar";

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});
const alegreya = Alegreya_Sans({
  variable: "--font-alegreya",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "GsW · Guia de Wynncraft em português",
    template: "%s · GsW",
  },
  description:
    "Guia de Wynncraft (servidor de Minecraft) em português, feito pela guilda GsW: raids, lootrun, dungeons, profissões e mais. Site de fãs, não oficial.",
};

export const viewport: Viewport = {
  themeColor: "#0f0d11",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${pixelify.variable} ${alegreya.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <a href="#conteudo" className="pular-para-conteudo">
          Pular para o conteúdo
        </a>
        <AnimationInitializer />
        <TopBar />
        <main id="conteudo" tabIndex={-1} className="min-h-[calc(100vh-var(--topbar-h))] outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

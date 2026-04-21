import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimationInitializer from "@/components/shared/AnimationInitializer"; 

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Guardians Of Wynn | GsW",
  description: "Guilda oficial GsW no servidor Wynncraft",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth theme-dark" data-theme="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = window.localStorage.getItem("gsw-theme");
                  var theme = stored === "light" || stored === "dark"
                    ? stored
                    : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
                  var root = document.documentElement;
                  root.dataset.theme = theme;
                  root.classList.remove("theme-dark", "theme-light");
                  root.classList.add(theme === "light" ? "theme-light" : "theme-dark");
                } catch (error) {}
              })();
            `,
          }}
        />
        <AnimationInitializer />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guardians Of Wynn | GsW",
  description: "Guilda oficial GsW no servidor Wynncraft",
};

function ScrollObserver() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          };

          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, observerOptions);

          const observeElements = () => {
            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach((el) => observer.observe(el));
          };

          // Executa na carga inicial
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', observeElements);
          } else {
            observeElements();
          }
          
          // Monitora mudanças dinâmicas no DOM (essencial para Next.js)
          const mutationObserver = new MutationObserver(observeElements);
          mutationObserver.observe(document.body, { childList: true, subtree: true });
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen bg-[var(--background)]">
          {children}
        </div>
        
        <ScrollObserver />
      </body>
    </html>
  );
}
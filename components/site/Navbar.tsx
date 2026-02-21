"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "História", hash: "#historia" },
    { name: "Membros", hash: "#membros" },
    { name: "Pilares", hash: "#pilares" },
    { name: "Galeria", hash: "#galeria" },
    { name: "Essência", hash: "#essencia" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center sm:grid sm:grid-cols-3">
        
        <a href="#gsw" className="group flex items-center gap-3 justify-self-start">
          <img
            src="/icon.webp"
            alt="GsW Logo"
            className="h-10 w-10 rounded-full transition-transform group-hover:scale-105"
          />
          <span className="relative text-xs font-medium tracking-widest text-zinc-400 transition-colors group-hover:text-gsw">
            GsW
          </span>
        </a>

        <ul className="hidden justify-self-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.hash}
                className="relative text-xs font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-gsw after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-gsw after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end justify-self-end">
          
          <div className="relative hidden sm:block group">
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 scale-0 whitespace-nowrap rounded bg-zinc-800 px-3 py-1.5 text-[10px] font-medium text-zinc-300 transition-all duration-200 group-hover:scale-100">
              Acessar o servidor no Discord
            </span>
            <a 
              href="https://discord.gg/Ec2YPWTN9E"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-gsw px-5 py-2 text-xs font-black uppercase tracking-widest text-white transition-transform hover:scale-105 hover:bg-gsw-dark text-center"
            >
              Comunidade
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 cursor-pointer"
            aria-label="Menu"
          >
            <span className={`block h-0.5 bg-zinc-400 transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2 !bg-gsw' : 'w-6'}`} />
            <span className={`block h-0.5 bg-zinc-400 transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`block h-0.5 bg-zinc-400 transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2 !bg-gsw' : 'w-5'}`} />
          </button>
        </div>
      </div>

      <div className={`sm:hidden overflow-hidden transition-all duration-300 bg-black/95 ${menuOpen ? 'max-h-96 border-t border-white/10' : 'max-h-0'}`}>
        <ul className="flex flex-col px-6 py-6 gap-2">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.hash}
                onClick={() => setMenuOpen(false)}
                className="block py-4 text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-gsw border-b border-white/5 last:border-0"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a 
              href="https://discord.gg/Ec2YPWTN9E"
              className="block w-full rounded-md bg-gsw py-3 text-[10px] font-black uppercase text-white text-center"
            >
              Comunidade
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
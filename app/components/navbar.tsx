export default function Navbar() {
  const links = [
    { name: "História", hash: "#historia" },
    { name: "Membros", hash: "#membros" },
    { name: "Galeria", hash: "#galeria" },
    { name: "Wynncraft", hash: "#servidor" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-2">
          <img 
            src="/icon.png" 
            alt="GsW Logo" 
            className="h-10 w-10 rounded-full" 
          />
        </div>

        <ul className="hidden gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.hash} 
                className="text-sm font-medium uppercase tracking-widest text-zinc-400 transition-colors hover:text-gsw"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden rounded-md bg-gsw px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_15px_rgba(113,22,173,0.4)] transition-all hover:bg-purple-800 sm:block">
          Comunidade
        </button>
      </div>
    </nav>
  );
}
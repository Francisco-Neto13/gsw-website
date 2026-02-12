export default function Navbar() {
  const links = [
    { name: "História", hash: "#historia" },
    { name: "Membros", hash: "#membros" },
    { name: "Pilares", hash: "#pilares" },
    { name: "Galeria", hash: "#galeria" },
    { name: "Regras", hash: "#regras" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-4">
        
        <a href="#gsw" className="group flex items-center gap-3 justify-self-start">
          <img
            src="/icon.png"
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

        <div className="justify-self-end">
          <button className="hidden rounded-md bg-gsw px-5 py-2 text-xs font-black uppercase tracking-widest text-white transition-transform hover:scale-105 hover:bg-gsw-dark sm:block">
            Comunidade
          </button>
        </div>

      </div>
    </nav>
  );
}

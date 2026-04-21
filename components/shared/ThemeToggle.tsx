"use client";

type ThemeMode = "dark" | "light";

const STORAGE_KEY = "gsw-theme";

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.remove("theme-dark", "theme-light");
  root.classList.add(theme === "light" ? "theme-light" : "theme-dark");
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Alternar tema"
      title="Alternar tema"
      onClick={() => {
        const currentTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
        const updated: ThemeMode = currentTheme === "dark" ? "light" : "dark";
        applyTheme(updated);
        window.localStorage.setItem(STORAGE_KEY, updated);
      }}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/30 text-zinc-300 transition-colors hover:border-gsw/60 hover:text-gsw"
    >
      <span aria-hidden="true" className="theme-icon theme-icon-sun text-sm leading-none">☀</span>
      <span aria-hidden="true" className="theme-icon theme-icon-moon text-sm leading-none">☾</span>
    </button>
  );
}

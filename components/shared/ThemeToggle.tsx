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
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="theme-icon theme-icon-sun h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="theme-icon theme-icon-moon h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7.2 7.2 0 1 0 9.8 9.8Z" />
      </svg>
    </button>
  );
}

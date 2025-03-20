"use client";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="size-8 rounded-xl flex items-center justify-center cursor-pointer hover:bg-muted/10 transition-colors text-muted-foreground hover:text-foreground"
    >
      {theme === "light" ? (
        <MoonIcon className="size-6" />
      ) : (
        <SunIcon className="size-6" />
      )}

      <span className="sr-only">Alterar tema</span>
    </button>
  );
}

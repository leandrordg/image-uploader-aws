"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

type Size = "sm" | "lg";

export function ThemeToggle({ size = "sm" }: { size?: Size }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  if (size === "lg") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className="size-12 rounded-xl flex items-center justify-center cursor-pointer bg-muted/10 hover:bg-muted/15 shadow-sm transition-colors text-muted-foreground hover:text-foreground"
      >
        {theme === "light" ? (
          <MoonIcon className="size-5" />
        ) : (
          <SunIcon className="size-5" />
        )}

        <span className="sr-only">Alterar tema</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="size-8 rounded-xl flex items-center justify-center cursor-pointer hover:bg-muted/10 transition-colors text-muted-foreground hover:text-foreground"
    >
      {theme === "light" ? (
        <MoonIcon className="size-5" />
      ) : (
        <SunIcon className="size-5" />
      )}

      <span className="sr-only">Alterar tema</span>
    </button>
  );
}

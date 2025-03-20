import Image from "next/image";
import Link from "next/link";

import { SignOutButton } from "@/components/sign-out-button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-4 border border-border rounded-xl mt-8 bg-transparent backdrop-blur-2xl">
      <div className="flex items-center gap-4 flex-1">
        <Link href="/dashboard">
          <div className="relative size-6 hover:scale-105 transition-transform select-none">
            <Image src="/logo.png" alt="Logo" fill />
          </div>
        </Link>
      </div>

      <nav className="flex flex-1 justify-center items-center space-x-4">
        <Link
          href="#"
          className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Meus uploads
        </Link>
      </nav>

      <div className="flex flex-1 justify-end items-center space-x-4">
        <ThemeToggle />

        <SignOutButton />
      </div>
    </header>
  );
}

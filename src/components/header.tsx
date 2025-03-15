"use client";

import Image from "next/image";
import Link from "next/link";

import { signOut } from "next-auth/react";

import { LogOutIcon } from "lucide-react";

export function Header() {
  const handleSignOut = async () => {
    await signOut({ redirectTo: "/" });
  };

  return (
    <header className="flex items-center justify-between h-16 px-4 border border-border rounded-xl mt-8 bg-transparent backdrop-blur-2xl">
      <Link href="/dashboard">
        <div className="relative size-6 hover:scale-105 transition-transform">
          <Image src="/logo.png" alt="Logo" fill />
        </div>
      </Link>

      <nav className="flex items-center space-x-4">
        <Link
          href="#"
          className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Meus uploads
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={handleSignOut}
          className="size-8 rounded-xl flex items-center justify-center cursor-pointer text-muted-foreground hover:bg-muted/10 hover:text-foreground transition-colors"
        >
          <LogOutIcon className="size-5" />
        </button>
      </div>
    </header>
  );
}

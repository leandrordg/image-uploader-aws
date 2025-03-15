"use client";

import { signOut } from "next-auth/react";

import { LogOutIcon } from "lucide-react";

export function SignOutButton() {
  const handleSignOut = async () => {
    await signOut({ redirectTo: "/" });
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="size-8 rounded-xl flex items-center justify-center cursor-pointer text-muted-foreground hover:bg-muted/10 hover:text-foreground transition-colors"
    >
      <LogOutIcon className="size-5" />
    </button>
  );
}

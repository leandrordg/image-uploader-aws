"use client";

import { Google } from "@/utils/icons";
import { signIn } from "next-auth/react";

export function SignInGoogle() {
  return (
    <form
      className="flex flex-col gap-4"
      action={async () => {
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <button
        type="submit"
        className="w-full h-10 px-4 bg-muted/10 border border-border backdrop-blur-2xl rounded-xl flex items-center justify-center cursor-pointer focus:outline-2 outline-border-foreground"
      >
        <Google className="size-4 fill-muted-foreground" />
        <span className="text-muted-foreground text-sm font-semibold ml-2">
          Continuar com Google
        </span>
      </button>
    </form>
  );
}

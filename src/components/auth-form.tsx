"use client";

import Link from "next/link";

import { Google } from "@/utils/icons";
import { motion } from "framer-motion";

export function AuthForm() {
  return (
    <form className="flex flex-col gap-4">
      <Link href="/dashboard">
        <motion.button
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3 }}
          type="button"
          className="w-full h-10 px-4 bg-muted/10 border border-border backdrop-blur-2xl rounded-xl flex items-center justify-center cursor-pointer focus:outline-2 outline-border-foreground"
        >
          <Google className="size-4 fill-muted-foreground" />
          <span className="text-muted-foreground text-sm font-semibold ml-2">
            Continuar com Google
          </span>
        </motion.button>
      </Link>

      <div className="flex items-center">
        <div className="flex-1 border-b border-border" />
        <span className="text-muted-foreground text-sm mx-4">ou</span>
        <div className="flex-1 border-b border-border" />
      </div>

      <input
        placeholder="digite seu email"
        className="w-full h-10 px-4 bg-muted/10 border border-border backdrop-blur-2xl rounded-xl text-sm focus:outline-2 outline-border-foreground"
      />

      <p className="text-xs text-muted-foreground">
        Onde está a senha?{" "}
        <Link href="#" className="text-foreground hover:underline">
          Saiba mais.
        </Link>
      </p>

      <Link href="/dashboard">
        <motion.button
          type="button"
          className="w-full h-10 px-4 bg-gradient-to-r text-sm from-blue-500 to-emerald-500 text-white rounded-xl shadow-sm font-semibold cursor-pointer select-none focus:outline-2 outline-border-foreground"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.3 }}
        >
          Continar com email
        </motion.button>
      </Link>
    </form>
  );
}

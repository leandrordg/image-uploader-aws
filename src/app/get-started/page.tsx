"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { AuthForm } from "@/components/auth-form";
import { ChevronLeftIcon } from "lucide-react";

export default function GetStartedPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="absolute top-0 h-screen w-screen bg-[radial-gradient(#c9c9c906_1px,#04040405_1px)] bg-[size:20px_20px] -z-50" />

      <motion.div
        className="flex justify-center absolute top-0 left-0 right-0 p-4 md:p-8"
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="p-2 rounded-xl text-center border border-border w-full max-w-xl text-xs md:text-sm text-muted-foreground bg-transparent backdrop-blur-2xl">
          <Link
            href="/"
            className="flex items-center gap-1 text-foreground hover:underline text-xs"
          >
            <ChevronLeftIcon className="size-4" />
            Voltar para a página inicial
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="md:border md:border-border p-4 md:p-8 rounded-xl bg-transparent md:backdrop-blur-xs space-y-4 max-w-xl w-full z-50"
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold">Vamos começar!</h1>

        <p className="text-muted-foreground mt-4">
          Acesse a sua conta ou crie uma nova para começar a usar a plataforma.
        </p>

        <AuthForm />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 text-center text-xs text-muted-foreground p-4 md:p-8"
      >
        Ao continuar, você concorda com os{" "}
        <Link href="/terms" className="text-foreground hover:underline">
          Termos de Serviço
        </Link>{" "}
        e a{" "}
        <Link href="/privacy" className="text-foreground hover:underline">
          Política de Privacidade
        </Link>{" "}
        da plataforma.
      </motion.div>
    </main>
  );
}

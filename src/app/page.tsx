"use client";

import Link from "next/link";

import { GitHub, Instagram, X } from "@/utils/icons";
import { motion } from "framer-motion";

import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#c9c9c905_1px,transparent_1px),linear-gradient(to_bottom,#4b4b4b05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none -z-50" />

      <motion.div
        className="flex items-center justify-center gap-4 absolute top-0 left-0 right-0 p-4 md:p-8"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="p-2 rounded-xl text-center border border-border w-full max-w-xl text-xs md:text-sm text-muted-foreground bg-transparent backdrop-blur-2xl">
          Atualização: Personalize suas preferências de conta no painel!
          <Link href="#" className="ml-1 text-cyan-500 hover:underline">
            Saiba mais.
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="relative text-foreground p-4 md:p-8 space-y-4 text-balance md:text-center"
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center md:justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Link
              target="_blank"
              href="https://instagram.com/leandro.rodriguesz"
            >
              <Instagram className="size-6 fill-muted-foreground hover:fill-foreground transition-colors duration-200" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Link target="_blank" href="https://github.com/leandrordg">
              <GitHub className="size-6 fill-muted-foreground hover:fill-foreground transition-colors duration-200" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Link target="_blank" href="https://x.com/bertalhiaa">
              <X className="size-6 fill-muted-foreground hover:fill-foreground transition-colors duration-200" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <ThemeToggle />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Envie, Armazene e Acesse suas Imagens
          <motion.span
            className="block bg-gradient-to-r from-blue-500 to-emerald-500 text-transparent bg-clip-text drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Descubra o poder do AWS S3
          </motion.span>
        </motion.h1>

        <motion.p
          className="md:text-lg max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Gerencie suas imagens com facilidade e aproveite a escalabilidade da
          AWS S3 para um armazenamento confiável e seguro.
        </motion.p>

        <Link href="/get-started">
          <motion.button
            className="mt-8 w-full max-w-sm px-8 py-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-xl shadow-sm font-semibold cursor-pointer select-none"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, #4CAF50, #2196F3)",
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            Começar agora
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 text-center p-4 md:p-8"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link
          target="_blank"
          href="https://github.com/leandrordg"
          className="text-sm hover:underline text-muted-foreground"
        >
          Feito com ❤️ por Leandro Rodrigues.
        </Link>
      </motion.div>
    </main>
  );
}

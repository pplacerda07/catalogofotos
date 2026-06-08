"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background image (placeholder) */}
      <div className="absolute inset-0">
        <Image
          src="/portfolio/paisagem-01.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover opacity-60"
        />
        {/* layered dark gradients for premium depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,10,0.85)_100%)]" />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
          className="mb-8"
        >
          <Image
            src="/brand/fiora-logo.svg"
            alt="Fiora"
            width={96}
            height={120}
            priority
            className="h-auto w-[72px] opacity-95 md:w-[96px]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="font-display text-6xl font-light tracking-brand text-bone md:text-8xl"
        >
          FIORA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.35 }}
          className="mt-6 max-w-xl font-display text-xl font-light italic text-smoke md:text-2xl"
        >
          Fotografia autoral, olhar preciso e estética atemporal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.55 }}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row"
        >
          <a href="#portfolio" className="btn-outline">
            Ver portfólio
          </a>
          <a href="#contato" className="btn-ghost">
            Vamos conversar →
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-wide2 text-smoke">
            Role
          </span>
          <span className="block h-12 w-px bg-gradient-to-b from-gold/70 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

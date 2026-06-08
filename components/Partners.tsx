"use client";

import { motion } from "framer-motion";
import { partners } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function Partners() {
  return (
    <section id="parceiros" className="relative py-28 md:py-36">
      {/* top divider */}
      <div className="container-site">
        <div className="section-line" />
      </div>

      <div className="container-site mt-20">
        <SectionHeader
          align="center"
          kicker="Confiança"
          title="Marcas & parceiros"
          description="Pessoas e empresas que confiaram seus momentos e suas histórias ao olhar da Fiora."
        />

        {/* Logo grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink-600/60 bg-ink-600/40 sm:grid-cols-3 md:grid-cols-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (i % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex h-28 items-center justify-center bg-ink-900 px-6 transition-colors duration-500 hover:bg-ink-800"
            >
              <span className="font-display text-2xl font-light tracking-wide text-smoke transition-colors duration-500 group-hover:text-gold-soft">
                {p.name}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-wide2 text-smoke/70">
          E muitos outros momentos ao longo do caminho.
        </p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

type Props = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease }}
      className={`flex max-w-2xl flex-col gap-5 ${
        align === "center" ? "mx-auto items-center text-center" : ""
      }`}
    >
      <span className="kicker">{kicker}</span>
      <h2 className="font-display text-4xl font-light leading-[1.05] text-bone md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-smoke md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

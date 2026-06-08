"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { categories, photos, type Photo } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import Lightbox from "./Lightbox";

const spanClass: Record<NonNullable<Photo["span"]>, string> = {
  normal: "row-span-1",
  wide: "sm:col-span-2",
  tall: "row-span-2",
};

function Card({
  photo,
  onOpen,
}: {
  photo: Photo;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.button
      layout
      onClick={onOpen}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative w-full overflow-hidden rounded-sm bg-ink-800 text-left ${
        spanClass[photo.span ?? "normal"]
      }`}
    >
      {!loaded && (
        <div className="img-skeleton absolute inset-0 animate-shimmer" />
      )}
      <Image
        src={photo.src}
        alt={photo.alt}
        width={900}
        height={1200}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <div>
          <p className="text-[10px] uppercase tracking-wide2 text-gold">
            {categories.find((c) => c.id === photo.category)?.label}
          </p>
          <h3 className="mt-1 font-display text-2xl font-light text-bone">
            {photo.title}
          </h3>
        </div>
        <span className="mb-1 text-lg text-bone/80">↗</span>
      </div>

      {/* thin gold frame on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/40" />
    </motion.button>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "all"
        ? photos
        : photos.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="portfolio" className="relative py-28 md:py-36">
      <div className="container-site">
        <SectionHeader
          kicker="Portfólio"
          title="Coleção de momentos"
          description="Um corpo de trabalho que atravessa vinhos, gastronomia e paisagem, sempre em busca da luz certa e do instante verdadeiro."
        />

        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 md:mt-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative pb-2 text-xs uppercase tracking-wide2 transition-colors duration-300 ${
                active === cat.id
                  ? "text-bone"
                  : "text-smoke hover:text-bone"
              }`}
            >
              {cat.label}
              {active === cat.id && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute inset-x-0 bottom-0 h-px bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-3 sm:gap-4 md:auto-rows-[280px] lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((photo) => (
              <Card
                key={photo.id}
                photo={photo}
                onOpen={() =>
                  setOpenIndex(filtered.findIndex((p) => p.id === photo.id))
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        photos={filtered}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}

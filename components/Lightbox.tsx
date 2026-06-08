"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Photo } from "@/lib/content";

type Props = {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
};

export default function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: Props) {
  const open = index !== null;
  const photo = open ? photos[index] : null;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      const next = (index + dir + photos.length) % photos.length;
      onNavigate(next);
    },
    [index, photos.length, onNavigate]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go, onClose]);

  return (
    <AnimatePresence>
      {open && photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-6 top-6 z-10 text-3xl font-light text-smoke transition-colors hover:text-bone"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Anterior"
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center text-2xl text-smoke transition-colors hover:text-gold md:left-10"
          >
            ‹
          </button>

          {/* Image */}
          <motion.figure
            key={photo.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[85vh] max-w-[90vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[78vh] overflow-hidden rounded-sm">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={1500}
                className="max-h-[78vh] w-auto object-contain"
                priority
              />
            </div>
            <figcaption className="mt-5 text-center">
              <h3 className="font-display text-2xl font-light text-bone">
                {photo.title}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wide2 text-smoke">
                {photo.alt}
              </p>
            </figcaption>
          </motion.figure>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Próxima"
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center text-2xl text-smoke transition-colors hover:text-gold md:right-10"
          >
            ›
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

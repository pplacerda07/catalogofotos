"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#parceiros", label: "Parceiros" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink-600/60 bg-ink-950/80 py-4 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <nav className="container-site flex items-center justify-between">
        <a href="#top" aria-label="Fiora, início" className="relative z-50">
          <Logo size={34} />
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-xs uppercase tracking-wide2 text-smoke transition-colors duration-300 hover:text-bone"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a href="#contato" className="btn-outline">
              Orçamento
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-bone transition-all duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-bone transition-all duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink-950/97 backdrop-blur-xl transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-4xl font-light tracking-wide text-bone transition-colors hover:text-gold"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contato"
          onClick={() => setOpen(false)}
          className="btn-outline mt-4"
        >
          Orçamento
        </a>
      </div>
    </header>
  );
}

import { contact } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-600/60 py-14">
      <div className="container-site flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
        <Logo size={30} />

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <a href="#portfolio" className="btn-ghost">
            Portfólio
          </a>
          <a href="#parceiros" className="btn-ghost">
            Parceiros
          </a>
          <a href="#contato" className="btn-ghost">
            Contato
          </a>
        </nav>
      </div>

      <div className="container-site mt-10 flex flex-col items-center gap-2 border-t border-ink-700/50 pt-8 text-center md:flex-row md:justify-between">
        <p className="text-[11px] uppercase tracking-wide2 text-smoke/60">
          © {year} Fiora · Fotografia. Todos os direitos reservados.
        </p>
        <p className="text-[11px] uppercase tracking-wide2 text-smoke/60">
          {contact.name}
        </p>
      </div>
    </footer>
  );
}

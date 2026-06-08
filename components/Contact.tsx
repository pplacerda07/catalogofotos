"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";
import SectionHeader from "./SectionHeader";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = data.get("nome");
    const contato = data.get("contato");
    const tipo = data.get("tipo");
    const mensagem = data.get("mensagem");
    const texto = encodeURIComponent(
      `Olá, ${contact.name}! Sou ${nome}.\n` +
        `Tipo de projeto: ${tipo}\n` +
        `Meu contato: ${contato}\n\n` +
        `${mensagem}`
    );
    window.open(
      `https://wa.me/${contact.whatsappNumber}?text=${texto}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section id="contato" className="relative py-28 md:py-36">
      <div className="container-site">
        <div className="section-line" />
      </div>

      <div className="container-site mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: invite */}
        <div>
          <SectionHeader
            kicker="Contato"
            title="Vamos criar algo memorável"
            description="Conte sobre o seu projeto, um ensaio, um evento ou uma marca. Respondo pessoalmente cada mensagem."
          />

          <div className="mt-12 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-wide2 text-gold">
                Fotógrafo
              </span>
              <span className="font-display text-2xl font-light text-bone">
                {contact.name}
              </span>
            </div>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1"
            >
              <span className="text-[10px] uppercase tracking-wide2 text-gold">
                WhatsApp
              </span>
              <span className="font-display text-2xl font-light text-bone transition-colors group-hover:text-gold-soft">
                {contact.phone}
              </span>
            </a>

            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1"
            >
              <span className="text-[10px] uppercase tracking-wide2 text-gold">
                Instagram
              </span>
              <span className="font-display text-2xl font-light text-bone transition-colors group-hover:text-gold-soft">
                @fiora
              </span>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease }}
          className="flex flex-col gap-7 rounded-sm border border-ink-600/60 bg-ink-900/50 p-8 backdrop-blur-sm md:p-10"
        >
          <Field label="Nome" name="nome" placeholder="Seu nome" required />
          <Field
            label="Telefone ou e-mail"
            name="contato"
            placeholder="Como te respondo?"
            required
          />

          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-wide2 text-smoke">
              Tipo de projeto
            </label>
            <select
              name="tipo"
              className="border-b border-ink-600 bg-transparent py-3 text-bone outline-none transition-colors focus:border-gold"
            >
              <option className="bg-ink-900">Retrato / Ensaio</option>
              <option className="bg-ink-900">Evento</option>
              <option className="bg-ink-900">Comercial / Marca</option>
              <option className="bg-ink-900">Outro</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-wide2 text-smoke">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Conte um pouco sobre a ideia..."
              className="resize-none border-b border-ink-600 bg-transparent py-3 text-bone placeholder:text-smoke/50 outline-none transition-colors focus:border-gold"
            />
          </div>

          <button type="submit" className="btn-outline mt-2 self-start">
            Enviar pelo WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase tracking-wide2 text-smoke">
        {label}
      </label>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="border-b border-ink-600 bg-transparent py-3 text-bone placeholder:text-smoke/50 outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Check } from "lucide-react";

export function Cta() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-gradient-to-b from-white to-[#f8f8f6] shadow-[0_35px_110px_rgba(0,0,0,0.06)] sm:rounded-[2.2rem] lg:rounded-[2.4rem]"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-80px] top-[-80px] h-[180px] w-[180px] rounded-full bg-zinc-200/30 blur-3xl sm:h-[220px] sm:w-[220px]" />
            <div className="absolute bottom-[-100px] right-[-60px] h-[180px] w-[180px] rounded-full bg-[#ecebe7] blur-3xl sm:h-[240px] sm:w-[240px]" />
          </div>

          <div className="relative grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-12 lg:py-14">
            <div className="max-w-xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px] md:text-xs">
                Contact
              </p>

              <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
                Parlons de votre projet.
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-zinc-600 md:text-lg">
                Décrivez-moi votre besoin en quelques lignes. Le premier échange
                se fait par email, pour aller à l’essentiel et vous répondre avec
                une direction claire.
              </p>

              <div className="mt-8 space-y-3 text-sm text-zinc-600">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white">
                    <Mail className="h-4 w-4 text-zinc-900" />
                  </span>
                  <span className="leading-6">
                    Premier échange par email, pour une réponse claire et structurée.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900" />
                  <span>Réponse rapide</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900" />
                  <span>Projet sur-mesure</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900" />
                  <span>Échange simple et structuré</span>
                </div>
              </div>

              <div className="mt-8 inline-flex items-center rounded-2xl border border-black/5 bg-white px-4 py-3 text-sm text-zinc-500 shadow-[0_12px_30px_rgba(0,0,0,0.04)] sm:mt-10">
                {success
                  ? "✓ Demande envoyée. Je reviens vers vous rapidement."
                  : "Réponse sous 24h en moyenne"}
              </div>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (loading || success) return;

                setLoading(true);

                const form = e.currentTarget;
                const data = Object.fromEntries(new FormData(form));

                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                });

                setLoading(false);

                if (res.ok) {
                  setSuccess(true);
                  form.reset();
                }
              }}
              className="rounded-[1.6rem] border border-black/5 bg-white/80 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.05)] backdrop-blur-md sm:rounded-[1.8rem] sm:p-5 lg:rounded-[2rem] lg:p-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="name"
                  id="name"
                  placeholder="Votre nom"
                  className="h-12 w-full rounded-2xl border border-black/10 px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
                />

                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="vous@email.com"
                  className="h-12 w-full rounded-2xl border border-black/10 px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
                />

                <input
                  name="business"
                  id="business"
                  placeholder="Activité"
                  className="h-12 w-full rounded-2xl border border-black/10 px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
                />

                <select
                  name="projectType"
                  id="projectType"
                  className="h-12 w-full rounded-2xl border border-black/10 px-4 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Type de projet
                  </option>
                  <option value="site-vitrine">Site vitrine</option>
                  <option value="rdv">Prise de RDV</option>
                  <option value="conversion">Conversion</option>
                </select>

                <input
                  name="goal"
                  id="goal"
                  placeholder="Objectif"
                  className="h-12 w-full rounded-2xl border border-black/10 px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 md:col-span-2"
                />

                <input
                  name="timeline"
                  id="timeline"
                  placeholder="Délai"
                  className="h-12 w-full rounded-2xl border border-black/10 px-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 md:col-span-2"
                />

                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="Décrivez votre projet"
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 md:col-span-2"
                />
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-zinc-500">
                  {success
                    ? "Merci, votre demande a bien été transmise."
                    : "Premier échange par email."}
                </p>

                <button
                  type="submit"
                  disabled={loading || success}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {loading ? (
                    "Envoi..."
                  ) : success ? (
                    <>
                      Envoyé
                      <Check className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Envoyer la demande
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const services = [
  {
    title: "Site vitrine premium",
    description:
      "Un site sur-mesure pour présenter votre activité avec une image forte, moderne et crédible.",
    features: [
      "Design sur-mesure",
      "Responsive mobile & desktop",
      "Chargement rapide",
      "Structure claire",
    ],
    highlight: false,
  },
  {
    title: "Prise de rendez-vous",
    description:
      "Automatisez vos réservations et simplifiez l’expérience client avec un système fluide et efficace.",
    features: [
      "Agenda en ligne",
      "Réservations automatisées",
      "Notifications clients",
      "Gain de temps",
    ],
    highlight: true,
  },
  {
    title: "Site orienté conversion",
    description:
      "Une structure pensée pour transformer vos visiteurs en demandes, réservations ou ventes.",
    features: [
      "UX optimisée",
      "Call-to-action stratégique",
      "Parcours utilisateur clair",
      "Objectif business",
    ],
    highlight: false,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px] md:text-xs">
            Services
          </p>

          <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Des solutions pensées pour développer
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            votre activité.
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-600 md:text-lg">
            Chaque projet est conçu pour allier image de marque, performance et
            conversion, selon vos objectifs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:mt-16 sm:gap-8 md:mt-20 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`group relative flex h-full flex-col rounded-[1.6rem] border p-5 transition duration-300 sm:rounded-[1.8rem] sm:p-6 ${
                service.highlight
                  ? "border-zinc-900 bg-gradient-to-b from-white to-[#f7f7f6] shadow-[0_30px_90px_rgba(0,0,0,0.10)] hover:-translate-y-2 hover:shadow-[0_60px_160px_rgba(0,0,0,0.16)]"
                  : "border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(0,0,0,0.08)]"
              }`}
            >
              {service.highlight && (
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:right-5 sm:top-5 sm:text-[11px]">
                  <Sparkles className="h-3 w-3" />
                  Le plus demandé
                </div>
              )}

              <h3 className="pr-24 text-lg font-semibold tracking-tight text-zinc-950 sm:pr-28 sm:text-xl">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-zinc-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

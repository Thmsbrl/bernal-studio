"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Échange et cadrage",
    description:
      "On définit ensemble vos besoins, vos objectifs et la direction du projet.",
    highlight: false,
  },
  {
    number: "02",
    title: "Structure et direction visuelle",
    description:
      "Je pose une base claire, moderne et cohérente avec votre image.",
    highlight: false,
  },
  {
    number: "03",
    title: "Développement sur-mesure",
    description:
      "Le site est construit proprement avec un vrai soin du responsive et de la fluidité.",
    highlight: true,
  },
  {
    number: "04",
    title: "Ajustements et mise en ligne",
    description:
      "Nous affinons les détails avant une mise en ligne propre et rassurante.",
    highlight: false,
  },
];

export function Process() {
  return (
    <section id="method" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px] md:text-xs">
            Méthode
          </p>

          <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Une méthode simple, claire
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            et efficace.
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-600 md:text-lg">
            Je vous accompagne de l’idée à la mise en ligne avec un process
            fluide, sans complexité inutile.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative rounded-[1.5rem] border p-5 transition duration-300 sm:rounded-[1.7rem] sm:p-6 md:rounded-[1.8rem] ${
                step.highlight
                  ? "border-zinc-900/10 bg-gradient-to-b from-white to-[#f7f7f6] shadow-[0_30px_90px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_45px_110px_rgba(0,0,0,0.12)]"
                  : "border-black/5 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.07)]"
              }`}
            >
              {step.highlight && (
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent sm:inset-x-6" />
              )}

              <p
                className={`text-sm font-medium ${
                  step.highlight ? "text-zinc-900" : "text-zinc-400"
                }`}
              >
                {step.number}
              </p>

              <h3 className="mt-4 text-lg font-medium tracking-tight text-zinc-950 sm:text-xl">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

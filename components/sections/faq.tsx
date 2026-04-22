"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer:
      "Le délai dépend du projet, mais un site vitrine peut généralement être conçu en quelques semaines. Tout dépend du niveau de personnalisation, du contenu disponible et des fonctionnalités à intégrer.",
  },
  {
    question: "Le site sera-t-il adapté au mobile ?",
    answer:
      "Oui. Chaque site est pensé pour être fluide, lisible et agréable à utiliser sur mobile, tablette et ordinateur.",
  },
  {
    question: "Est-ce que je pourrai modifier le contenu ?",
    answer:
      "Oui, selon la structure retenue. L’objectif est que votre site reste simple à faire évoluer si vous avez besoin de mettre à jour certains textes, images ou informations.",
  },
  {
    question: "Travaillez-vous à distance ?",
    answer:
      "Oui. Le projet peut être géré à distance de manière simple et fluide, avec un premier échange par email puis un suivi clair tout au long de l’avancement.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px]">
            FAQ
          </p>

          <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl">
            Les questions qu’on se pose souvent
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            avant de lancer un projet.
          </h2>
        </motion.div>

        <div className="mt-10 space-y-3 sm:mt-12 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-[1.25rem] border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition hover:-translate-y-[2px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:rounded-2xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-[15px] font-medium leading-6 text-zinc-900 sm:text-base">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 shrink-0 text-zinc-500 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pt-1 pb-5 text-sm leading-7 text-zinc-600 sm:px-6 sm:pb-6">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

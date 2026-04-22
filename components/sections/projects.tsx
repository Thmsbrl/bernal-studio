"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Atelier Noir Tattoo",
    category: "Site vitrine premium",
    description:
      "Site haut de gamme conçu pour valoriser l’univers du studio, renforcer l’image de marque et maximiser les demandes de réservation.",
    benefit: "Direction visuelle forte et prise de contact simplifiée.",
    image: "/projects/hero-mockup.jpg",
    tags: ["Design", "Responsive", "UI premium"],
    liveUrl: "",
    caseUrl: "#contact",
    overlayImage: "",
    overlayAlt: "",
    overlayStyle: "",
  },
  {
    title: "Cabinet de psychologie",
    category: "Site vitrine + prise de rendez-vous",
    description:
      "Site sobre et rassurant pensé pour inspirer confiance, clarifier l’offre et faciliter la prise de contact.",
    benefit: "Parcours plus fluide et réservation mise en avant.",
    image: "/projects/psy-hero.jpg",
    overlayImage: "/projects/psy-agenda-ui.jpg",
    overlayAlt: "Aperçu agenda mobile",
    tags: ["UX", "Responsive", "Réservation"],
    liveUrl: "https://oliviaponzio-psychopraticienne-nimes.fr/",
    caseUrl: "",
    overlayStyle:
      "bottom-[-10px] right-[-4px] w-[82px] sm:w-[92px] md:bottom-[-10px] md:right-[-6px] md:w-[110px] rotate-[-2deg]",
  },
  {
    title: "NOXRA",
    category: "E-commerce streetwear",
    description:
      "Boutique en ligne au branding fort, conçue pour mettre en valeur les produits, renforcer l’identité de marque et rendre l’expérience d’achat plus fluide.",
    benefit: "Univers visuel fort et expérience e-commerce plus immersive.",
    image: "/projects/noxra-hero.jpg",
    overlayImage: "/projects/noxra-products.jpg",
    overlayAlt: "Aperçu panier mobile",
    tags: ["Branding", "E-commerce", "UI"],
    liveUrl: "",
    caseUrl: "#contact",
    overlayStyle:
      "bottom-[-16px] right-[8px] w-[86px] sm:w-[96px] md:bottom-[-22px] md:right-[12px] md:w-[115px] rotate-[1deg]",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px] md:text-xs">
            Projets sélectionnés
          </p>

          <h2 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            Des réalisations pensées pour marquer
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            et convertir.
          </h2>

          <p className="mt-4 max-w-xl text-[15px] leading-7 text-zinc-600 md:text-lg">
            Une sélection de projets conçus pour allier image de marque,
            lisibilité et expérience utilisateur sur tous les écrans.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:mt-16 sm:gap-10">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group grid items-center gap-6 rounded-[1.8rem] border border-black/5 bg-gradient-to-b from-white to-[#f9f9f8] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.07)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_60px_160px_rgba(0,0,0,0.12)] sm:gap-8 sm:rounded-[2rem] sm:p-5 md:grid-cols-[1.06fr_0.94fr] md:rounded-[2.3rem] md:p-7 lg:p-8"
              >
                {/* IMAGE */}
                <div className={`${isReversed ? "md:order-2" : ""} relative`}>
                  <div className="relative overflow-visible rounded-[1.4rem] bg-[#f3f2ef] p-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.05)] sm:rounded-[1.6rem] sm:p-3 md:rounded-[1.8rem]">
                    <div className="relative overflow-hidden rounded-[1.15rem] bg-white sm:rounded-[1.3rem] md:rounded-[1.45rem]">
                      <div className="relative aspect-[1.26/1] w-full overflow-hidden sm:aspect-[1.36/1] md:aspect-[1.5/1]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover brightness-[0.97] contrast-[1.05] transition duration-700 group-hover:scale-[1.02]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                      </div>
                    </div>

                    {project.overlayImage && (
                      <div
                        className={`absolute z-20 overflow-hidden rounded-[1rem] border border-black/10 bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:rounded-[1.1rem] md:rounded-[1.2rem] ${project.overlayStyle}`}
                      >
                        <img
                          src={project.overlayImage}
                          alt={project.overlayAlt}
                          className="h-full w-full object-cover opacity-[0.98]"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* TEXTE */}
                <div className={`${isReversed ? "md:order-1" : ""}`}>
                  <p className="text-sm font-medium text-zinc-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-[1.6rem] font-medium tracking-tight text-zinc-950 sm:text-3xl lg:text-[2rem]">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-[15px] leading-7 text-zinc-700 sm:text-base">
                    {project.description}
                  </p>

                  <p className="mt-4 text-sm font-medium text-zinc-900">
                    {project.benefit}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-[#f6f6f4] px-3 py-1 text-xs text-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-800"
                      >
                        Voir le site
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <Link
                        href={project.caseUrl}
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-50"
                      >
                        Voir la démo
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

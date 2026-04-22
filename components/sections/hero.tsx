"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const proofItems = [
    "Design sur-mesure",
    "Responsive mobile & desktop",
    "SEO-ready",
    "Performance optimisée",
];

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f8f6] via-white to-[#f8f8f6]">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[-120px] h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-zinc-200/25 blur-3xl sm:h-[260px] sm:w-[440px] lg:h-[280px] lg:w-[640px]" />
                <div className="absolute right-[6%] top-[80px] h-[160px] w-[160px] rounded-full bg-[#ecebe7] blur-3xl sm:h-[190px] sm:w-[190px] lg:right-[10%] lg:top-[90px] lg:h-[240px] lg:w-[240px]" />
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[1fr_1.1fr] lg:gap-8 lg:px-8 lg:py-12">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="order-2 lg:order-1"
                >
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px] md:text-xs">
                        Sites web sur-mesure pour indépendants & entreprises
                    </p>

                    <h1 className="max-w-xl text-[2.15rem] font-semibold leading-[0.98] tracking-tight text-zinc-950 sm:text-5xl lg:text-[58px]">
                        Des sites qui attirent
                        <br />
                        rassurent et convertissent.
                    </h1>

                    <p className="mt-5 max-w-lg text-[15px] leading-7 text-zinc-600 md:text-base">
                        Je crée des sites modernes, rapides et soignés pour les
                        indépendants, commerçants et petites entreprises qui veulent une
                        image forte et plus de demandes.
                    </p>

                    <p className="mt-2 text-sm text-zinc-500">
                        Basé à Montréal, j’accompagne des indépendants et entreprises à distance.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="w-full rounded-full px-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:w-auto"
                        >
                            <Link href="#contact">
                                Parler de votre projet
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full rounded-full border-black/10 bg-white px-6 text-zinc-900 hover:bg-zinc-50 sm:w-auto"
                        >
                            <Link href="#projects">Voir les réalisations</Link>
                        </Button>
                    </div>

                    <div className="mt-8 grid gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-x-6">
                        {proofItems.map((item) => (
                            <div key={item} className="flex items-center gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-zinc-900" />
                                <span className="text-sm text-zinc-600">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
                    className="order-1 mx-auto w-full max-w-[680px] lg:order-2 lg:mx-0 lg:-ml-6"
                >
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.14)] sm:rounded-[1.75rem] lg:rounded-[2rem] lg:shadow-[0_40px_120px_rgba(0,0,0,0.18)] lg:scale-[1.05]"
                    >
                        <div className="relative aspect-[1.18/1] w-full overflow-hidden sm:aspect-[1.28/1] lg:aspect-[1.45/1]">
                            <img
                                src="/projects/hero-mockup.jpg"
                                alt="Mockup projet premium desktop et mobile"
                                className="h-full w-full object-contain p-1 sm:p-2 lg:scale-[1.1]"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
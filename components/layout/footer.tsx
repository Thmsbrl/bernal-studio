import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-black/5 py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* TOP */}
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                    {/* Logo + phrase */}
                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                        <img
                            src="/logo.png"
                            alt="Bernal Studio"
                            className="h-8 w-auto object-contain"
                        />
                        <p className="text-sm leading-6 text-zinc-600">
                            Création de sites web premium pour indépendants et entreprises.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-600">
                        <Link href="#services" className="transition hover:text-zinc-950">
                            Services
                        </Link>
                        <Link href="#projects" className="transition hover:text-zinc-950">
                            Projets
                        </Link>
                        <Link href="#contact" className="transition hover:text-zinc-950">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-8 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} Bernal Studio</p>
                    <p className="text-zinc-400">
                        Montréal • Disponible à distance
                    </p>
                </div>
            </div>
        </footer>
    );
}

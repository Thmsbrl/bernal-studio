"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Méthode", href: "#method" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-black/5 bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 ease-out hover:scale-[1.02] hover:-translate-y-[1px]"
        >
          <img
            src="/logo.png"
            alt="Bernal Studio"
            className="h-10 w-auto object-contain md:h-14 lg:h-18"
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-600 transition hover:text-zinc-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden md:block">
          <Button asChild className="rounded-full px-6">
            <Link href="#contact">Discutons de votre projet</Link>
          </Button>
        </div>

        {/* MENU MOBILE */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Ouvrir le menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-[88%] max-w-sm border-l border-black/10 bg-white px-6 py-6">
              <SheetTitle className="text-left text-sm font-semibold uppercase tracking-[0.22em] text-zinc-950">
                Navigation
              </SheetTitle>

              <div className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-zinc-800 transition hover:text-zinc-500"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>

              <div className="mt-8">
                <SheetClose asChild>
                  <Button asChild className="w-full rounded-full">
                    <Link href="#contact">
                      Discutons de votre projet
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}

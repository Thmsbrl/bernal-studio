import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-zinc-900">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}

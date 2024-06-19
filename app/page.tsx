import AboutSection from "@/components/AboutSection";
import Colaborations from "@/components/Colaborations";
import CollabProjects from "@/components/CollabProjects";
import { CompanyProvides } from "@/components/CompanyProvides";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";

import Hero from "@/components/Hero";
import { SparklesCore } from "@/components/ui/Sparkles";


export default function Home() {
  return (
    <main className="h-full w-full relative overflow-clip bg-gradient-to-br from-teal-950 to-rose-950 flex flex-col">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
      <div className="relative z-10 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-20">

        <Hero />
        <CompanyProvides />
        <AboutSection />
        <CollabProjects />
        <Colaborations />
        <Footer />
      </div>
    </main>
  );
}

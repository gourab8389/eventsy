import AboutSection from "@/components/AboutSection";
import Colaborations from "@/components/Colaborations";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="h-full w-full relative overflow-hidden bg-gradient-to-br from-teal-950 to-rose-950">
      <div className="relative z-10 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-20">

        <Hero />
        <AboutSection />
        <Grid/>
        <Colaborations />
        <Footer />
      </div>
    </main>
  );
}

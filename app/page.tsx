import AboutSection from "@/components/AboutSection";
import Colaborations from "@/components/Colaborations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="h-full w-full relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
      <div className="relative z-10 flex flex-col gap-20">
        <Hero />
        <Colaborations />
        <AboutSection/>
        <Footer/>
      </div>
      
    </main>
  );
}

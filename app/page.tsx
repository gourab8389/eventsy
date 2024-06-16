import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center h-screen bg-blue-500 dark:bg-black-100">
      <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>
      <Hero />
    </main>
  );
}

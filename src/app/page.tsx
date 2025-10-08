import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Vision } from "@/components/Vision";
import { Solution } from "@/components/Solution";
import { Trust } from "@/components/Trust";
import { Proof } from "@/components/Proof";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Vision />
        <Solution />
        <Trust />
        <Proof />
        <PrimaryCTA />
      </main>
      <Footer />
    </>
  );
}

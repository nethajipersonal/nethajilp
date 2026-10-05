import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { TechStackSection } from "@/components/TechStackSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <TechStackSection />
      <CTA />
    </>
  );
}

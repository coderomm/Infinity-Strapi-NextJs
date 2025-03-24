import BlogSection from "@/components/blog-section";
import FatfishHero from "@/components/fatfish-hero";
import { Footer } from "@/components/Footer";
import Hero from "@/components/hero";
import TeamSection from "@/components/team-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FatfishHero />
      <TeamSection />
      <BlogSection />
      <Footer />
    </main>
  );
}

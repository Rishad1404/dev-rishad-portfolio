import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <p className="text-xs font-mono text-muted-foreground/40 mb-2">
              coming next
            </p>
            <h2 className="text-3xl font-bold text-foreground">Contact</h2>
            <p className="text-muted-foreground mt-2 font-mono text-sm">
              Step 8...
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />

        <section
          id="education"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <p className="text-xs font-mono text-muted-foreground/40 mb-2">
              coming next
            </p>
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
            <p className="text-muted-foreground mt-2 font-mono text-sm">
              Step 5...
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <p className="text-xs font-mono text-muted-foreground/40 mb-2">
              coming next
            </p>
            <h2 className="text-3xl font-bold text-foreground">Tech Stack</h2>
            <p className="text-muted-foreground mt-2 font-mono text-sm">
              Step 6...
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <p className="text-xs font-mono text-muted-foreground/40 mb-2">
              coming next
            </p>
            <h2 className="text-3xl font-bold text-foreground">Projects</h2>
            <p className="text-muted-foreground mt-2 font-mono text-sm">
              Step 7...
            </p>
          </div>
        </section>

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
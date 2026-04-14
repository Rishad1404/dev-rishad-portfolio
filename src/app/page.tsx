import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold gradient-text">
              Md. Rishad Islam
            </h1>
            <p className="text-muted-foreground text-xl">Full Stack Developer</p>
            <p className="text-sm text-muted-foreground">
              Hero section coming next... 🚀
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text">About Me</h2>
            <p className="text-muted-foreground mt-2">Coming in Step 4...</p>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Education</h2>
            <p className="text-muted-foreground mt-2">Coming in Step 5...</p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Tech Stack</h2>
            <p className="text-muted-foreground mt-2">Coming in Step 6...</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Projects</h2>
            <p className="text-muted-foreground mt-2">Coming in Step 7...</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text">Contact</h2>
            <p className="text-muted-foreground mt-2">Coming in Step 8...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Code2 } from "lucide-react";
import { socials } from "@/data/socials";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* Back to Top */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full w-10 h-10 shadow-lg cursor-pointer bg-foreground text-background hover:bg-foreground/90"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-cyan-400" />
              <span className="text-lg font-bold">
                <span className="text-foreground">Rishad</span>
                <span className="text-cyan-400">.dev</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Crafting Modern Web Experiences with Code & Creativity. Full Stack
              Developer based in Bangladesh.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Home",
                "About",
                "Education",
                "Skills",
                "Projects",
                "Contact",
              ].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const el = document.querySelector(
                      `#${link.toLowerCase()}`
                    );
                    if (el) {
                      const top =
                        el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors duration-200"
                  title={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-sm text-muted-foreground"
          >
            © {currentYear} Md. Rishad Islam. Built with{" "}
            <Heart className="inline h-3 w-3 text-red-500 mx-1" />
            using{" "}
            <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span> &{" "}
            <span className="text-foreground font-medium">Framer Motion</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
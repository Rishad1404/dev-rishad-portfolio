"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Mail, MapPin, ArrowUpRight, Terminal } from "lucide-react";
import { socials, freelanceProfiles, contactInfo } from "@/data/socials";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border/40 bg-background/95 backdrop-blur-xl overflow-hidden">
      {/* ===== Premium Tech Background ===== */}
      {/* Subtle Blueprint/IDE Grid */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      {/* Subtle top glowing line */}
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-1/4 bg-linear-to-r from-transparent via-primary/60 to-transparent blur-sm" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 pt-16 sm:px-10 lg:px-16">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          
          {/* ===== Brand Column ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start lg:col-span-4"
          >
            {/* Elegant Avatar & Name Integration */}
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 rounded-full border border-primary/20 p-0.5 bg-background shadow-[0_0_15px_rgba(var(--primary),0.1)]">
                <Image
                  src="https://i.ibb.co.com/jvLSdVkv/1646196416119.jpg"
                  alt="Md. Rishad Islam"
                  fill
                  className="rounded-full object-cover"
                  sizes="48px"
                />
                {/* Techy ring around avatar */}
                <svg className="absolute inset-0 h-full w-full -rotate-90 text-primary/30" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="20 10" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-mono">
                  <Terminal className="h-4 w-4 text-primary" />
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    Rishad
                  </h2>
                  <span className="text-xl font-bold text-primary">.dev</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  Full Stack Web Developer
                </p>
              </div>
            </div>

            <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground/80">
              Crafting modern web experiences with clean code and creative design. Always
              open to discussing exciting projects and new opportunities.
            </p>

            {/* Clean Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex w-fit items-center gap-3 text-sm text-muted-foreground transition-all hover:text-foreground"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border/50 bg-secondary/30 text-primary transition-all group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:shadow-[0_0_10px_rgba(var(--primary),0.2)]">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs">{contactInfo.email}</span>
              </a>
              <div className="flex w-fit items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border/50 bg-secondary/30 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-mono text-xs">{contactInfo.location}</span>
              </div>
            </div>
          </motion.div>

          {/* ===== Navigation Column ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="mb-6 font-mono text-sm font-semibold tracking-wider text-foreground flex items-center gap-2">
              <span className="text-primary">/</span> Navigation
            </h3>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="group flex items-center text-sm text-muted-foreground/80 transition-all hover:text-primary"
                  >
                    <span className="mr-0 inline-block overflow-hidden text-primary/0 transition-all duration-300 group-hover:mr-2 group-hover:text-primary">
                      {`//`}
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== Freelance Column ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 font-mono text-sm font-semibold tracking-wider text-foreground flex items-center gap-2">
              <span className="text-primary">/</span> Hire Me On
            </h3>
            <ul className="flex flex-col gap-4">
              {freelanceProfiles.map((profile) => (
                <li key={profile.name}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-muted-foreground/80 transition-colors hover:text-foreground"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border/50 bg-secondary/30 transition-all group-hover:border-primary/30 group-hover:bg-primary/5">
                      <profile.icon
                        className="h-3.5 w-3.5 transition-transform group-hover:scale-110"
                        style={{ color: profile.color }}
                      />
                    </div>
                    <span className="flex-1 font-medium">{profile.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ===== Socials Column ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h3 className="mb-6 font-mono text-sm font-semibold tracking-wider text-foreground flex items-center gap-2">
              <span className="text-primary">/</span> Socials
            </h3>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-secondary/30 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-[0_4px_15px_rgba(var(--primary),0.1)]"
                  title={social.name}
                >
                  <social.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </a>
              ))}

            </div>
          </motion.div>
        </div>

        {/* ===== Divider ===== */}
        <div className="mb-8 h-px w-full bg-linear-to-r from-transparent via-border/60 to-transparent" />

        {/* ===== Bottom Bar ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          {/* Copyright & System Status */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {currentYear}{" "}
            <span className="font-medium text-foreground">Md. Rishad Islam</span>. All
            rights reserved.
          </p>
          </div>

          {/* Built with - Styled as tech badges */}
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            Built with
            <Heart className="h-3 w-3 text-red-500/80" />
            using
            <span className="rounded bg-secondary/50 px-1.5 py-0.5 font-mono text-[10px] font-medium text-primary border border-border/50">Next.js</span>
            <span className="rounded bg-secondary/50 px-1.5 py-0.5 font-mono text-[10px] font-medium text-primary border border-border/50">TS</span>
            <span className="rounded bg-secondary/50 px-1.5 py-0.5 font-mono text-[10px] font-medium text-primary border border-border/50">Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
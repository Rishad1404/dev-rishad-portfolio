"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { socials, freelanceProfiles, contactInfo } from "@/data/socials";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-card/20 backdrop-blur-sm">
      {/* Back to Top */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={scrollToTop}
            size="icon"
            className="h-10 w-10 cursor-pointer rounded-full border border-border bg-card shadow-lg hover:border-primary/40 hover:bg-card"
          >
            <ArrowUp className="h-4 w-4 text-primary" />
          </Button>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-16 sm:px-10 lg:px-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">

          {/* ===== Brand Column ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-5"
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                <svg
                  viewBox="0 0 36 36"
                  className="h-5 w-5"
                  fill="none"
                >
                  <path
                    d="M13 10L7 18L13 26"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 10L29 18L23 26"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 8L16 28"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex items-center">
                <span className="text-base font-bold text-foreground">
                  Rishad
                </span>
                <span className="text-base font-bold text-primary">.dev</span>
                <motion.span
                  className="ml-0.5 inline-block h-4 w-[2px] rounded-full bg-primary"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-sm leading-relaxed text-muted-foreground">
              Crafting Modern Web Experiences with Code & Creativity.
              Full Stack Developer based in Bangladesh.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-xs text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary/60" />
                <span className="font-mono">{contactInfo.email}</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/60" />
                <span>{contactInfo.location}</span>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 w-fit rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5">
              <motion.div
                className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                animate={{
                  boxShadow: [
                    "0 0 0px #10b981",
                    "0 0 6px #10b98188",
                    "0 0 0px #10b981",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-mono text-[10px] font-medium text-emerald-500">
                Available for work
              </span>
            </div>
          </motion.div>

          {/* ===== Quick Links ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              Navigation
            </h3>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-2 text-left text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground cursor-pointer w-fit"
                >
                  <span className="h-px w-3 bg-border transition-all duration-200 group-hover:w-5 group-hover:bg-primary" />
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* ===== Hire Me ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              Hire Me On
            </h3>
            <div className="flex flex-col gap-3">
              {freelanceProfiles.map((profile, index) => (
                <motion.a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-3 w-fit"
                >
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-lg border transition-all duration-200 group-hover:scale-110"
                    style={{
                      background: `${profile.color}15`,
                      borderColor: `${profile.color}30`,
                    }}
                  >
                    <profile.icon
                      className="h-3.5 w-3.5"
                      style={{ color: profile.color }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                      {profile.name}
                    </p>
                    <p
                      className="font-mono text-[10px]"
                      style={{ color: profile.color }}
                    >
                      {profile.badge}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ===== Connect ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-5"
          >
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              Connect
            </h3>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card/50 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            {/* GitHub CTA */}
            <motion.a
              href="https://github.com/rishadislam"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-3 transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                <SiGithub className="h-4 w-4 text-foreground" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  GitHub Profile
                </p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  @rishadislam
                </p>
              </div>
              <div className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </motion.a>
          </motion.div>
        </div>

        {/* ===== Divider ===== */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4">
              <motion.div
                className="h-1 w-1 rounded-full bg-primary/40"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          {/* Copyright */}
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {currentYear}{" "}
            <span className="font-medium text-foreground">
              Md. Rishad Islam
            </span>
            . All rights reserved.
          </p>

          {/* Built with */}
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with
            <Heart className="h-3 w-3 text-red-500" />
            using
            <span className="font-mono font-medium text-primary">
              Next.js
            </span>
            <span className="text-border">·</span>
            <span className="font-mono font-medium text-primary">
              TypeScript
            </span>
            <span className="text-border">·</span>
            <span className="font-mono font-medium text-primary">
              Framer Motion
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
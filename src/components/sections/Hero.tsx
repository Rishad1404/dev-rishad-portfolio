/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/socials";
import Image from "next/image";

/* ===== Typewriter Hook ===== */
function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, delayBetween = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Word complete, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetween);
          return;
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Deletion complete, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetween]);

  return currentText;
}

/* ===== Animated Typewriter Display ===== */
function TypewriterText({ words }: { words: string[] }) {
  const text = useTypewriter(words, 100, 50, 2000);

  return (
    <div className="flex items-center justify-center lg:justify-start gap-2 h-12">
      <span className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-4xl">
        {text}
      </span>
      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 0.5, 1],
        }}
        className="inline-block h-8 w-1 bg-primary align-middle sm:h-10 lg:h-12"
      />
    </div>
  );
}

/* ===== Mouse Spotlight ===== */
function MouseSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 h-150 w-150 rounded-full"
      style={{
        left: springX,
        top: springY,
        background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 65%)",
      }}
    />
  );
}

/* ===== Profile Image Component ===== */
function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Subtle, professional background glow instead of harsh colors */}
      <motion.div
        className="absolute -inset-8 rounded-full bg-primary/10 opacity-50 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Sleek rotating tech borders */}
      <motion.div
        className="absolute -inset-3 rounded-full border border-primary/30"
        style={{ borderTopColor: "transparent", borderBottomColor: "transparent" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -inset-3 rounded-full border border-muted-foreground/20"
        style={{ borderLeftColor: "transparent", borderRightColor: "transparent" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner border */}
      <div className="absolute -inset-1.5 rounded-full bg-background" />

      {/* Profile image - Increased size slightly for a bigger hero feel */}
      <motion.div
        className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-background shadow-2xl sm:h-80 sm:w-80 lg:h-[400px] lg:w-[400px]"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="https://i.ibb.co.com/SXB1QbDK/profile-removebg-preview.png"
          alt="Md. Rishad Islam"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Floating particles - refined color to match the new vibe */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
}

/* ===== Main Hero ===== */
export function Hero() {
  const [mounted, setMounted] = useState(false);

  // Typewriter texts - customize these!
  const typewriterWords = [
    "Full Stack Developer",
    "React & Next.js Expert",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Clean Code Advocate",
    "Tech Innovator",
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-32"
    >
      <MouseSpotlight />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_80%)]" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Main content grid - removed code card, centered content perfectly */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-sm font-semibold tracking-[0.2em] text-primary uppercase"
            >
              Full Stack Web Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              <span className="text-4xl font-light text-muted-foreground/70 sm:text-5xl lg:text-6xl xl:text-7xl">
                Md.{" "}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Rishad
              </span>
              <br />
              <span className="text-foreground">Islam</span>
            </motion.h1>

            {/* Typewriter effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <TypewriterText words={typewriterWords} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-10 max-w-lg mx-auto text-base text-muted-foreground sm:text-lg lg:mx-0"
            >
              Crafting Modern Web Experiences with Code & Creativity
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  onClick={() => handleScrollTo("#projects")}
                  size="lg"
                  className="h-14 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg cursor-pointer hover:bg-primary/90 hover:shadow-primary/20"
                >
                  View Projects
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <a href="/resume.pdf" download="Md_Rishad_Islam_Resume.pdf" tabIndex={-1}>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="h-14 gap-2 rounded-lg border-border px-8 text-base font-semibold cursor-pointer transition-all duration-200 hover:border-primary/40 hover:bg-accent"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center gap-4 lg:justify-start"
            >
              <span className="mr-2 text-xs font-semibold tracking-widest text-muted-foreground/50 uppercase">
                Connect
              </span>
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.07, duration: 0.3 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm transition-all duration-200 hover:border-primary/50 hover:bg-accent hover:text-foreground hover:shadow-md"
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <ProfileImage />
          </div>
        </div>
      </div>

      <motion.button
        onClick={() => handleScrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="group absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 pointer-events-auto"
      >
        <span className="text-[10px] font-semibold tracking-widest text-muted-foreground/40 uppercase transition-colors group-hover:text-primary/70">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:bg-accent"
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
        </motion.div>
      </motion.button>
    </section>
  );
}
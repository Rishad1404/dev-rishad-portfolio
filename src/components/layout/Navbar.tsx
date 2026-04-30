/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/* ===== Animated Code Icon ===== */
function AnimatedCodeIcon({ isHovered }: { isHovered: boolean }) {
  return (
    <motion.div
      className="relative flex items-center justify-center w-12 h-12"
      animate={{
        scale: isHovered ? 1.1 : 1,
        rotate: isHovered ? [0, -10, 10, 0] : 0,
      }}
      transition={{
        scale: { duration: 0.2 },
        rotate: { duration: 0.6, ease: "easeInOut" }
      }}
    >
      {/* Glowing background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md"
        animate={{
          scale: isHovered ? 1.3 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Code icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="relative z-10 text-cyan-400"
      >
        <motion.path
          d="M16 18L22 12L16 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            x: isHovered ? 1.5 : 0,
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          d="M8 6L2 12L8 18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            x: isHovered ? -1.5 : 0,
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        />
        {/* Middle line that appears on hover */}
        <motion.path
          d="M12 4L10 20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 0.9 : 0.4,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>

      {/* Orbiting dots */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          style={{
            top: "50%",
            left: "50%",
            marginTop: "-3px",
            marginLeft: "-3px",
          }}
          animate={{
            x: isHovered
              ? [0, Math.cos((i * Math.PI * 2) / 3) * 20]
              : 0,
            y: isHovered
              ? [0, Math.sin((i * Math.PI * 2) / 3) * 20]
              : 0,
            opacity: isHovered ? [0, 1, 0.5] : 0,
            scale: isHovered ? [0, 1, 0.8] : 0,
          }}
          transition={{
            duration: 1.2,
            delay: i * 0.15,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}

/* ===== Signature Logo with Icon ===== */
function SignatureLogo({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-2 md:gap-3 group cursor-pointer relative outline-none"
      whileTap={{ scale: 0.95 }}
    >
      {/* Font import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
          .font-signature {
            font-family: 'Alex Brush', cursive;
          }
        `}
      </style>

      {/* Animated Code Icon */}
      <AnimatedCodeIcon isHovered={isHovered} />

      {/* Signature Container */}
      <div className="relative flex flex-col items-start justify-center pt-1 pr-4">
        {/* Signature Text */}
        <motion.div
          className="text-4xl md:text-5xl font-signature text-foreground z-10 tracking-wide"
          animate={{
            color: isHovered ? "var(--tw-prose-links)" : "currentColor", // Failsafes to current text, overrides on hover
            textShadow: isHovered 
              ? "0 0 15px rgba(34, 211, 238, 0.4)" 
              : "0 0 0px rgba(34, 211, 238, 0)"
          }}
          transition={{ duration: 0.3 }}
        >
          <span className={cn("transition-colors duration-300", isHovered && "text-cyan-400")}>
            Rishad
          </span>
        </motion.div>

        {/* Animated Underline Swoosh */}
        <svg
          viewBox="0 0 120 30"
          className="absolute -bottom-3 -left-[5%] w-[110%] h-auto text-cyan-400 z-0 pointer-events-none"
          fill="none"
        >
          <motion.path
            d="M 5 20 Q 35 5, 60 20 T 115 15"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: isHovered ? 1 : 0.3,
              opacity: isHovered ? 1 : 0.5,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {/* Secondary decorative swoosh */}
          <motion.path
            d="M 40 28 Q 70 20, 100 25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: isHovered ? 1 : 0,
              opacity: isHovered ? 0.7 : 0,
            }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          />
        </svg>

        {/* Floating Sparkles on Hover */}
        <AnimatePresence>
          {isHovered && (
            <>
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0, rotate: -45 }}
                  animate={{ 
                    scale: 1, 
                    opacity: [0, 1, 0], 
                    rotate: [0, 180, 360],
                    x: [0, (i % 2 === 0 ? 15 : -10)],
                    y: [0, (i % 2 === 0 ? -15 : -25)],
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute text-cyan-400"
                  style={{
                    right: i % 2 === 0 ? '5px' : '20px',
                    top: i % 2 === 0 ? '0px' : '10px',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}

/* ===== Magnetic Nav Link ===== */
function MagneticNavLink({
  link,
  isActive,
  onClick,
  index,
}: {
  link: { name: string; href: string };
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 + 0.3, duration: 0.4 }}
      style={{ x: springX, y: springY }}
      className={cn(
        "relative px-4 py-2 text-[15px] font-medium rounded-lg transition-colors duration-200 cursor-pointer group outline-none",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {/* Hover background */}
      <div className="absolute inset-0 rounded-lg bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <span className="relative z-10">{link.name}</span>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        >
          <div className="w-5 h-0.5 rounded-full bg-cyan-400" />
        </motion.div>
      )}
    </motion.button>
  );
}

/* ===== Main Navbar ===== */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ===== Smart Scroll Handler ===== */
  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress bar
      setIsScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Special case: very top of page
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Special case: very bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActiveSection(navLinks[navLinks.length - 1].href.slice(1));
        return;
      }

      // Find section in viewport center
      const viewportMiddle = window.innerHeight / 2;
      const sections = navLinks
        .map((link) => {
          const el = document.querySelector(link.href);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            id: link.href.slice(1),
            top: rect.top,
            bottom: rect.bottom,
          };
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[];

      for (const section of sections) {
        if (section.top <= viewportMiddle && section.bottom >= viewportMiddle) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Run on mount to set initial active state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== Close mobile on resize ===== */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===== Lock body scroll ===== */
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);

    // Immediately set active section on click
    setActiveSection(href.slice(1));

    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent",
        )}
      >
        {/* Scroll Progress */}
        <motion.div
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16">
            <SignatureLogo onClick={() => handleNavClick("#home")} />

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <MagneticNavLink
                  key={link.name}
                  link={link}
                  isActive={activeSection === link.href.slice(1)}
                  onClick={() => handleNavClick(link.href)}
                  index={index}
                />
              ))}
            </div>

            {/* Right Side */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              {/* Status Badge */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                  animate={{
                    boxShadow: [
                      "0 0 0px #10b981",
                      "0 0 6px #10b98188",
                      "0 0 0px #10b981",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-muted-foreground font-medium">
                  Available
                </span>
              </div>

              <ThemeToggle />

              {/* Mobile Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden relative w-9 h-9 cursor-pointer"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-3/4 max-w-sm bg-card border-l border-border md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>

                {/* Status */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 mb-6 rounded-lg bg-secondary border border-border"
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                    animate={{
                      boxShadow: [
                        "0 0 0px #10b981",
                        "0 0 6px #10b98188",
                        "0 0 0px #10b981",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs text-muted-foreground font-medium">
                    Available for work
                  </span>
                </motion.div>

                {/* Nav Links */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.href.slice(1);
                    return (
                      <motion.button
                        type="button"
                        key={link.name}
                        onClick={() => handleNavClick(link.href)}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: index * 0.06 + 0.15,
                          duration: 0.3,
                        }}
                        className={cn(
                          "relative text-left px-4 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-200 cursor-pointer overflow-hidden",
                          isActive
                            ? "text-foreground bg-secondary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                        )}
                      >
                        <span className="relative z-10 flex items-center gap-4">
                          <span className="text-xs font-mono text-muted-foreground/40">
                            0{index + 1}
                          </span>
                          {link.name}
                        </span>

                        {isActive && (
                          <motion.div
                            layoutId="activeMobileNav"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-cyan-400"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="mt-auto pb-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="border-t border-border pt-6 space-y-2"
                  >
                    <p className="text-xs text-muted-foreground/40 font-mono">
                      // Let&apos;s build something amazing
                    </p>
                    <p className="text-sm font-bold">
                      <span className="text-foreground">Rishad</span>
                      <span className="text-cyan-400">.dev</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
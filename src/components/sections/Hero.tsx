/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Download, FolderOpen, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/socials";
import dynamic from "next/dynamic";

/* ===== Dynamically import 3D (no SSR) ===== */
const TechSphere = dynamic(
  () => import("@/components/three/TechSphere").then((m) => m.TechSphere),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative h-40 w-40">
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-6 rounded-full border border-primary/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs text-muted-foreground">loading...</span>
          </div>
        </div>
      </div>
    ),
  },
);

/* ===== Typing Hook ===== */
function useTypingAnimation(
  lines: { text: string; delay: number }[],
  speed: number = 45,
) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];
    let charIndex = 0;
    setCurrentText("");

    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (charIndex < line.text.length) {
          setCurrentText(line.text.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
          setDisplayLines((prev) => [...prev, line.text]);
          setCurrentText("");
          setCurrentLine((prev) => prev + 1);
        }
      }, speed);
      return () => clearInterval(interval);
    }, line.delay);

    return () => clearTimeout(startDelay);
  }, [currentLine, lines, speed]);

  return { displayLines, currentText };
}

/* ===== Terminal Window ===== */
function TerminalWindow() {
  const terminalLines = [
    { text: "whoami", delay: 600 },
    { text: "Md. Rishad Islam", delay: 150 },
    { text: "cat role.txt", delay: 500 },
    { text: "Full Stack Web Developer", delay: 150 },
    { text: "cat location.txt", delay: 500 },
    { text: "Dinajpur, Bangladesh", delay: 150 },
    { text: "echo $STATUS", delay: 500 },
    { text: "Available for opportunities ✓", delay: 150 },
  ];

  const { displayLines, currentText } = useTypingAnimation(terminalLines, 40);
  const commands = ["whoami", "cat role.txt", "cat location.txt", "echo $STATUS"];
  const isCommand = (text: string) => commands.includes(text);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-border/60 bg-card/80 shadow-2xl backdrop-blur-md"
    >
      <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#ED6A5E]" />
        <div className="h-3 w-3 rounded-full bg-[#F4BF4F]" />
        <div className="h-3 w-3 rounded-full bg-[#61C554]" />
        <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <Terminal className="h-3 w-3" />
          rishad ~ zsh
        </span>
      </div>

      <div className="min-h-65 space-y-2 p-5 font-mono text-sm">
        {displayLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-2"
          >
            {isCommand(line) ? (
              <>
                <span className="shrink-0 select-none text-emerald-500">❯</span>
                <span className="text-primary">{line}</span>
              </>
            ) : (
              <>
                <span className="w-4 shrink-0" />
                <span
                  className={
                    line.includes("✓") ? "text-emerald-500" : "text-foreground/80"
                  }
                >
                  {line}
                </span>
              </>
            )}
          </motion.div>
        ))}

        {currentText && (
          <div className="flex items-start gap-2">
            {isCommand(currentText) ? (
              <>
                <span className="shrink-0 select-none text-emerald-500">❯</span>
                <span className="text-primary">{currentText}</span>
              </>
            ) : (
              <>
                <span className="w-4 shrink-0" />
                <span className="text-foreground/80">{currentText}</span>
              </>
            )}
            <motion.span
              className="inline-block h-4 w-0.5 shrink-0 align-middle bg-primary"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.5, 0.5, 1],
              }}
            />
          </div>
        )}

        {!currentText && displayLines.length === terminalLines.length && (
          <div className="flex items-center gap-2">
            <span className="text-emerald-500">❯</span>
            <motion.span
              className="inline-block h-4 w-0.5 bg-primary"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.5, 0.5, 1],
              }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ===== Code Card ===== */
function CodeCard() {
  const lines = [
    {
      number: 1,
      content: (
        <>
          <span className="text-[#cf222e] dark:text-[#ff7b72]">const </span>
          <span className="text-[#8250df] dark:text-[#d2a8ff]">developer</span>
          <span className="text-foreground"> = {"{"}</span>
        </>
      ),
    },
    {
      number: 2,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">name</span>
          <span className="text-foreground">: </span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">
            &quot;Md. Rishad Islam&quot;
          </span>
          <span className="text-foreground">,</span>
        </>
      ),
    },
    {
      number: 3,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">role</span>
          <span className="text-foreground">: </span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">
            &quot;Full Stack Developer&quot;
          </span>
          <span className="text-foreground">,</span>
        </>
      ),
    },
    {
      number: 4,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">location</span>
          <span className="text-foreground">: </span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">
            &quot;Bangladesh 🇧🇩&quot;
          </span>
          <span className="text-foreground">,</span>
        </>
      ),
    },
    {
      number: 5,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">skills</span>
          <span className="text-foreground">: [</span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">&quot;Next.js&quot;</span>
          <span className="text-foreground">, </span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">&quot;Node.js&quot;</span>
          <span className="text-foreground">,</span>
        </>
      ),
    },
    {
      number: 6,
      content: (
        <>
          <span className="text-foreground">{"           "}</span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">
            &quot;PostgreSQL&quot;
          </span>
          <span className="text-foreground">, </span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">&quot;Docker&quot;</span>
          <span className="text-foreground">],</span>
        </>
      ),
    },
    {
      number: 7,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">available</span>
          <span className="text-foreground">: </span>
          <span className="text-[#cf222e] dark:text-[#ff7b72]">true</span>
          <span className="text-foreground">,</span>
        </>
      ),
    },
    {
      number: 8,
      content: <span className="text-foreground">{"}"}</span>,
    },
    {
      number: 9,
      content: <></>,
    },
    {
      number: 10,
      content: (
        <span className="font-style: italic text-[#6e7781] dark:text-[#8b949e]">
          Ready to build something great! 🚀
        </span>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.7 }}
      className="mx-auto w-full max-w-md overflow-hidden rounded-xl border border-border/60 bg-card/80 shadow-2xl backdrop-blur-md"
    >
      <div className="flex items-center gap-2 border-b border-border/50 bg-muted/30 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#ED6A5E]" />
        <div className="h-3 w-3 rounded-full bg-[#F4BF4F]" />
        <div className="h-3 w-3 rounded-full bg-[#61C554]" />
        <div className="ml-2 flex items-center gap-1.5">
          <FolderOpen className="h-3 w-3 text-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground">developer.ts</span>
        </div>
      </div>

      <div className="space-y-0.5 p-5 font-mono text-xs leading-6">
        {lines.map((line, i) => (
          <motion.div
            key={line.number}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
            className="group flex gap-4"
          >
            <span className="min-w-4 select-none text-right text-muted-foreground/30 transition-colors duration-200 group-hover:text-muted-foreground/60">
              {line.number}
            </span>
            <span className="whitespace-pre-wrap">{line.content}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
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

/* ===== Main Hero ===== */
export function Hero() {
  const [mounted, setMounted] = useState(false);

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
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24 pb-24"
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
        <div className="mb-12 text-center">
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
            className="mb-5 text-5xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-4xl font-light text-muted-foreground/70 sm:text-5xl md:text-6xl lg:text-7xl">
              Md.{" "}
            </span>
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Rishad
            </span>
            <br />
            <span className="text-foreground">Islam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto max-w-lg text-base text-muted-foreground sm:text-lg"
          >
            Crafting Modern Web Experiences with Code & Creativity
          </motion.p>
        </div>

        <div className="mb-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          <div className="w-full lg:col-span-1">
            <TerminalWindow />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            // ✅ INCREASED CONTAINER HEIGHT to give the sphere more breathing room
            className="relative h-95 w-full sm:h-112.5 lg:col-span-1"
          >
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
            <div className="pointer-events-auto relative z-30 h-full w-full">
              <TechSphere />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium text-[10px] tracking-widest text-muted-foreground/40 uppercase"
            >
              Drag to Rotate
            </motion.p>
          </motion.div>

          <div className="w-full lg:col-span-1">
            <CodeCard />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              onClick={() => handleScrollTo("#projects")}
              size="lg"
              className="h-12 rounded-lg bg-primary px-8 font-semibold text-primary-foreground shadow-lg cursor-pointer hover:bg-primary/90 hover:shadow-primary/20"
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
                className="h-12 gap-2 rounded-lg border-border px-8 font-semibold cursor-pointer transition-all duration-200 hover:border-primary/40 hover:bg-accent"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex items-center justify-center gap-4"
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
              transition={{ delay: 1.05 + index * 0.07, duration: 0.3 }}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm transition-all duration-200 hover:border-primary/50 hover:bg-accent hover:text-foreground hover:shadow-md"
              title={social.name}
            >
              <social.icon className="h-4 w-4" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => handleScrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="group absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 pointer-events-auto"
      >
        <span className="text-[10px] font-semibold tracking-widest text-muted-foreground/40 uppercase transition-colors group-hover:text-primary/70">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:bg-accent"
        >
          <ArrowDown className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
        </motion.div>
      </motion.button>
    </section>
  );
}

/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Code2,
  Coffee,
  Briefcase,
  Heart,
  Terminal,
  type LucideIcon,
} from "lucide-react";

/* ===== Section Header ===== */
function SectionHeader() {
  return (
    <div className="mb-16 flex flex-col items-center text-center lg:items-start lg:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs tracking-widest text-primary"
      >
        <span className="font-bold">01.</span>
        <span className="opacity-80">ABOUT_ME</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      >
        Get to know{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          me.
        </span>
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "circOut" }}
        className="h-[2px] w-24 origin-left rounded-full bg-gradient-to-r from-cyan-400 to-transparent lg:w-32"
      />
    </div>
  );
}

/* ===== Bio Card — VS Code Style ===== */
function BioCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bioLines = [
    {
      number: 1,
      content: (
        <>
          <span className="text-[#cf222e] dark:text-[#ff7b72]">interface </span>
          <span className="text-[#8250df] dark:text-[#d2a8ff]">Developer</span>
          <span className="text-foreground"> {"{"}</span>
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
          <span className="text-[#cf222e] dark:text-[#ff7b72]">string</span>
          <span className="text-foreground">;</span>
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
          <span className="text-[#cf222e] dark:text-[#ff7b72]">string</span>
          <span className="text-foreground">;</span>
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
          <span className="text-[#cf222e] dark:text-[#ff7b72]">string</span>
          <span className="text-foreground">;</span>
        </>
      ),
    },
    {
      number: 5,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">skills</span>
          <span className="text-foreground">: </span>
          <span className="text-[#cf222e] dark:text-[#ff7b72]">string[]</span>
          <span className="text-foreground">;</span>
        </>
      ),
    },
    {
      number: 6,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">learning</span>
          <span className="text-foreground">: </span>
          <span className="text-[#cf222e] dark:text-[#ff7b72]">boolean</span>
          <span className="text-foreground">;</span>
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
          <span className="text-[#cf222e] dark:text-[#ff7b72]">boolean</span>
          <span className="text-foreground">;</span>
        </>
      ),
    },
    {
      number: 8,
      content: <span className="text-foreground">{"}"}</span>,
    },
    { number: 9, content: <></> },
    {
      number: 10,
      content: (
        <>
          <span className="text-[#cf222e] dark:text-[#ff7b72]">const </span>
          <span className="text-[#8250df] dark:text-[#d2a8ff]">rishad</span>
          <span className="text-foreground">: </span>
          <span className="text-[#8250df] dark:text-[#d2a8ff]">Developer</span>
          <span className="text-foreground"> = {"{"}</span>
        </>
      ),
    },
    {
      number: 11,
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
      number: 12,
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
      number: 13,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">location</span>
          <span className="text-foreground">: </span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">
            &quot;Dinajpur, Bangladesh 🇧🇩&quot;
          </span>
          <span className="text-foreground">,</span>
        </>
      ),
    },
    {
      number: 14,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">skills</span>
          <span className="text-foreground">: [</span>
        </>
      ),
    },
    {
      number: 15,
      content: (
        <>
          <span className="text-foreground">{"    "}</span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">&quot;React&quot;</span>
          <span className="text-foreground">, </span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">&quot;Next.js&quot;</span>
          <span className="text-foreground">, </span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">&quot;TypeScript&quot;</span>
          <span className="text-foreground">,</span>
        </>
      ),
    },
    {
      number: 16,
      content: (
        <>
          <span className="text-foreground">{"    "}</span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">&quot;Node.js&quot;</span>
          <span className="text-foreground">, </span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">&quot;PostgreSQL&quot;</span>
          <span className="text-foreground">, </span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">&quot;Docker&quot;</span>
        </>
      ),
    },
    {
      number: 17,
      content: (
        <>
          <span className="text-foreground">{"  ],"}</span>
        </>
      ),
    },
    {
      number: 18,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">learning</span>
          <span className="text-foreground">: </span>
          <span className="text-[#cf222e] dark:text-[#ff7b72]">true</span>
          <span className="text-foreground">,</span>
        </>
      ),
    },
    {
      number: 19,
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
      number: 20,
      content: <span className="text-foreground">{"};"}</span>,
    },
    { number: 21, content: <></> },
    {
      number: 22,
      content: (
        <>
          <span className="text-[#cf222e] dark:text-[#ff7b72]">function </span>
          <span className="text-[#8250df] dark:text-[#d2a8ff]">introduce</span>
          <span className="text-foreground">(</span>
          <span className="text-[#ffa657] dark:text-[#ffa657]">dev</span>
          <span className="text-foreground">: </span>
          <span className="text-[#8250df] dark:text-[#d2a8ff]">Developer</span>
          <span className="text-foreground">) {"{"}</span>
        </>
      ),
    },
    {
      number: 23,
      content: (
        <>
          <span className="text-foreground">{"  "}</span>
          <span className="text-[#cf222e] dark:text-[#ff7b72]">return </span>
          <span className="text-foreground">`</span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">Hi, I&apos;m </span>
          <span className="text-foreground">{"${"}</span>
          <span className="text-[#ffa657] dark:text-[#ffa657]">dev</span>
          <span className="text-foreground">.</span>
          <span className="text-[#0550ae] dark:text-[#79c0ff]">name</span>
          <span className="text-foreground">{"}"}</span>
          <span className="text-[#0a3069] dark:text-[#a5d6ff]">!</span>
          <span className="text-foreground">`;</span>
        </>
      ),
    },
    {
      number: 24,
      content: <span className="text-foreground">{"}"}</span>,
    },
    { number: 25, content: <></> },
    {
      number: 26,
      content: (
        <>
          <span className="italic text-[#6e7781] dark:text-[#8b949e]">
            {`// Output: "Hi, I'm Md. Rishad Islam!"`}
          </span>
        </>
      ),
    },
    {
      number: 27,
      content: (
        <>
          <span className="text-foreground">console.</span>
          <span className="text-[#8250df] dark:text-[#d2a8ff]">log</span>
          <span className="text-foreground">(</span>
          <span className="text-[#8250df] dark:text-[#d2a8ff]">introduce</span>
          <span className="text-foreground">(</span>
          <span className="text-[#ffa657] dark:text-[#ffa657]">rishad</span>
          <span className="text-foreground">));</span>
        </>
      ),
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-2xl backdrop-blur-md"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border/50 bg-muted/30 px-4 py-3.5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ED6A5E] shadow-sm" />
          <div className="h-3 w-3 rounded-full bg-[#F4BF4F] shadow-sm" />
          <div className="h-3 w-3 rounded-full bg-[#61C554] shadow-sm" />
          <div className="ml-3 flex items-center gap-2 opacity-60">
            <Terminal className="h-3.5 w-3.5" />
            <span className="font-mono text-xs font-medium text-foreground">
              about.ts
            </span>
          </div>
        </div>

        {/* Tab-like indicator */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-muted-foreground/40">
            TypeScript
          </span>
          <span className="font-mono text-[10px] text-muted-foreground/40">
            UTF-8
          </span>
        </div>
      </div>

      {/* Code lines */}
      <div className="overflow-x-auto p-5 font-mono text-[12px] leading-[1.8] space-y-0.5">
        {bioLines.map((line, i) => (
          <motion.div
            key={line.number}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.04, duration: 0.3 }}
            className="group -mx-5 flex gap-4 rounded px-5 transition-colors duration-150 hover:bg-muted/30"
          >
            <span className="min-w-[20px] select-none text-right text-muted-foreground/25 transition-colors duration-200 group-hover:text-muted-foreground/50">
              {line.number}
            </span>
            <span className="whitespace-pre">{line.content}</span>
          </motion.div>
        ))}
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between border-t border-border/50 bg-muted/20 px-4 py-1.5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-muted-foreground/40">
            Ln 27, Col 32
          </span>
          <span className="font-mono text-[10px] text-muted-foreground/40">
            Spaces: 2
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="font-mono text-[10px] text-muted-foreground/40">
            No issues
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ===== Info Card ===== */
function InfoCard({
  icon: Icon,
  label,
  value,
  delay,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="group relative flex items-center gap-4 rounded-2xl border border-border/50 bg-card/40 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="relative min-w-0 flex-1">
        <p className="mb-1 font-mono text-[10px] font-semibold tracking-widest text-muted-foreground/60 uppercase">
          {label}
        </p>
        <p className="truncate text-sm font-semibold text-foreground">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

/* ===== Trait Badge ===== */
function TraitBadge({
  icon: Icon,
  text,
  delay,
}: {
  icon: LucideIcon;
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
      className="group flex cursor-default items-center gap-2.5 rounded-xl border border-border/50 bg-card/30 px-4 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/80"
    >
      <Icon className="h-4 w-4 text-primary opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {text}
      </span>
    </motion.div>
  );
}

/* ===== Bio Text ===== */
function BioText() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col justify-between space-y-10"
    >
      {/* Bio paragraphs */}
      <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hi! I am a passionate{" "}
          <strong className="font-semibold text-foreground">
            Full Stack Developer
          </strong>{" "}
          who loves crafting clean, responsive, and robust applications. I thrive
          on designing intuitive user interfaces and architecting secure, scalable
          backend systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I am always eager to tackle{" "}
          <strong className="font-semibold text-foreground">
            complex challenges
          </strong>{" "}
          and expand my skill set. Currently pursuing my{" "}
          <strong className="font-semibold text-foreground">
            B.Sc. Engineering in CSE
          </strong>{" "}
          at Bangladesh Army University of Science and Technology.
        </motion.p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InfoCard
          icon={MapPin}
          label="Location"
          value="Dinajpur, Bangladesh"
          delay={0.5}
        />
        <InfoCard
          icon={GraduationCap}
          label="Education"
          value="B.Sc. CSE @ BAUST"
          delay={0.6}
        />
        <InfoCard
          icon={Briefcase}
          label="Status"
          value="Open to Opportunities"
          delay={0.7}
        />
        <InfoCard
          icon={Code2}
          label="Experience"
          value="2+ Years Learning"
          delay={0.8}
        />
      </div>

      {/* Traits - Clean Grid Layout */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <p className="mb-4 font-mono text-xs font-semibold tracking-widest text-foreground/40 uppercase">
          Core Traits
        </p>
        <div className="flex flex-wrap gap-3">
          <TraitBadge icon={Code2} text="Clean Code" delay={1.0} />
          <TraitBadge icon={Coffee} text="Coffee Driven" delay={1.05} />
          <TraitBadge icon={Heart} text="Open Source" delay={1.1} />
          <TraitBadge icon={GraduationCap} text="Always Learning" delay={1.15} />
          <TraitBadge icon={Briefcase} text="Team Player" delay={1.2} />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ===== Main About Section ===== */
export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden py-32"
    >
      {/* Subtle Background Elements */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_75%)]" />

      {/* Primary Glow */}
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader />

        <div className="grid grid-cols-1 items-stretch gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left — Bio Text */}
          <BioText />

          {/* Right — Code Card */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[500px]">
              <BioCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
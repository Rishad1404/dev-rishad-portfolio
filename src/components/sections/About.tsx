"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  TerminalSquare,
  Globe2,
  Server,
  LucideIcon,
} from "lucide-react";

/* ===== Lightweight Floating Coding Background ===== */
function FloatingCodingElements() {
  const elements = [
    { text: "npm start", top: "15%", left: "5%", delay: 0, rotate: -10, color: "text-emerald-500/10" },
    { text: "{}", top: "60%", left: "8%", delay: 2, rotate: 15, color: "text-indigo-500/10" },
    { text: "SELECT *", top: "25%", right: "8%", delay: 1, rotate: 10, color: "text-cyan-500/10" },
    { text: "< />", top: "75%", right: "5%", delay: 3, rotate: -15, color: "text-primary/10" },
    { text: "git push", top: "85%", left: "45%", delay: 1.5, rotate: 0, color: "text-rose-500/10" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -20, 0],
            rotate: [el.rotate, el.rotate + 5, el.rotate],
          }}
          transition={{
            opacity: { duration: 1, delay: el.delay },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: el.delay },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: el.delay },
          }}
          className={`absolute font-mono text-2xl md:text-4xl font-bold select-none ${el.color}`}
          style={{ top: el.top, left: el.left, right: el.right }}
        >
          {el.text}
        </motion.div>
      ))}
    </div>
  );
}

/* ===== Section Header ===== */
function SectionHeader() {
  return (
    <div className="mb-12 flex flex-col items-center text-center lg:items-start lg:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs tracking-widest text-primary backdrop-blur-sm"
      >
        <span className="font-bold">01.</span>
        <span className="opacity-80">ABOUT_ME</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        Get to know{" "}
        <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          me.
        </span>
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "circOut" }}
        className="h-0.5 w-20 origin-left rounded-full bg-linear-to-r from-cyan-400 to-transparent lg:w-28"
      />
    </div>
  );
}

/* ===== Premium API JSON Response Card ===== */
function ApiProfileCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const jsonContent = [
    { line: 1, text: <span className="text-foreground">{"{"}</span> },
    { line: 2, text: <>  <span className="text-cyan-400">&quot;status&quot;</span><span className="text-foreground">: </span><span className="text-emerald-400">200</span><span className="text-foreground">,</span></> },
    { line: 3, text: <>  <span className="text-cyan-400">&quot;data&quot;</span><span className="text-foreground">: {"{"}</span></> },
    { line: 4, text: <>    <span className="text-indigo-400">&quot;developer&quot;</span><span className="text-foreground">: </span><span className="text-yellow-300">&quot;Md. Rishad Islam&quot;</span><span className="text-foreground">,</span></> },
    { line: 5, text: <>    <span className="text-indigo-400">&quot;role&quot;</span><span className="text-foreground">: </span><span className="text-yellow-300">&quot;Full Stack Web Developer&quot;</span><span className="text-foreground">,</span></> },
    { line: 6, text: <>    <span className="text-indigo-400">&quot;location&quot;</span><span className="text-foreground">: </span><span className="text-yellow-300">&quot;Dinajpur, Bangladesh&quot;</span><span className="text-foreground">,</span></> },
    { line: 7, text: <>    <span className="text-indigo-400">&quot;education&quot;</span><span className="text-foreground">: </span><span className="text-yellow-300">&quot;B.Sc. CSE @ BAUST&quot;</span><span className="text-foreground">,</span></> },
    { line: 8, text: <>    <span className="text-indigo-400">&quot;experience&quot;</span><span className="text-foreground">: </span><span className="text-emerald-400">2</span><span className="text-foreground">,</span></> },
    { line: 9, text: <>    <span className="text-indigo-400">&quot;core_traits&quot;</span><span className="text-foreground">: [</span></> },
    { line: 10, text: <>      <span className="text-yellow-300">&quot;Clean Code Architecture&quot;</span><span className="text-foreground">,</span></> },
    { line: 11, text: <>      <span className="text-yellow-300">&quot;Problem Solver&quot;</span><span className="text-foreground">,</span></> },
    { line: 12, text: <>      <span className="text-yellow-300">&quot;Continuous Learner&quot;</span></> },
    { line: 13, text: <>    <span className="text-foreground">]</span></> },
    { line: 14, text: <>  <span className="text-foreground">{"}"}</span></> },
    { line: 15, text: <span className="text-foreground">{"}"}</span> },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full max-w-125 overflow-hidden rounded-2xl border border-border/50 bg-[#0d1117]/90 shadow-2xl backdrop-blur-xl"
    >
      {/* Browser / API Header */}
      <div className="flex flex-col border-b border-border/50 bg-[#161b22]/90">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <div className="ml-4 flex h-6 flex-1 items-center gap-2 rounded-md bg-[#0d1117] px-3 font-mono text-[10px] text-muted-foreground">
            <Server className="h-3 w-3 text-cyan-500" />
            <span>api.rishad.dev/v1/profile</span>
          </div>
        </div>
        
        {/* API Method & Status Bar */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <span className="rounded bg-indigo-500/20 px-2 py-0.5 font-mono text-[10px] font-bold text-indigo-400">
              GET
            </span>
            <span className="font-mono text-[11px] text-foreground/80">/v1/profile</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="font-mono text-[10px] font-bold text-emerald-400">200 OK</span>
            <span className="ml-2 font-mono text-[10px] text-muted-foreground">42ms</span>
          </div>
        </div>
      </div>

      {/* JSON Payload */}
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.8]">
        {jsonContent.map((item, i) => (
          <motion.div
            key={item.line}
            initial={{ opacity: 0, y: 5 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.04, duration: 0.3 }}
            className="flex gap-4 px-2 hover:bg-white/5 rounded transition-colors"
          >
            <span className="min-w-6 select-none text-right text-muted-foreground/30">
              {item.line}
            </span>
            <span className="whitespace-pre">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ===== Info Pill (Premium minimal look) ===== */
function InfoPill({
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
      className="flex items-center gap-3 rounded-lg border border-border/40 bg-card/30 px-4 py-3 shadow-sm backdrop-blur-md transition-colors hover:border-primary/40 hover:bg-card/50"
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="font-mono text-[9px] font-semibold tracking-wider text-muted-foreground uppercase">
          {label}
        </p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </motion.div>
  );
}

/* ===== React Tag Style Trait ===== */
function TraitTag({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
      className="flex cursor-default items-center rounded bg-primary/10 px-2.5 py-1 transition-colors hover:bg-primary/20"
    >
      <span className="font-mono text-xs font-medium text-primary">
        <span className="text-primary/50">&lt;</span>
        {text.replace(" ", "")}
        <span className="text-primary/50" /> /&gt;
      </span>
    </motion.div>
  );
}

/* ===== Bio Text Area ===== */
function BioText() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col gap-8"
    >
      {/* Bio paragraphs */}
      <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
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
          I am always eager to tackle complex challenges and expand my skill set. Currently pursuing my{" "}
          <strong className="font-semibold text-foreground">
            B.Sc. Engineering in CSE
          </strong>{" "}
          at Bangladesh Army University of Science and Technology.
        </motion.p>
      </div>

      {/* Compact Info Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <InfoPill icon={MapPin} label="Location" value="Dinajpur, Bangladesh" delay={0.5} />
        <InfoPill icon={GraduationCap} label="Education" value="B.Sc. CSE @ BAUST" delay={0.6} />
        <InfoPill icon={TerminalSquare} label="Experience" value="2+ Years Dev" delay={0.7} />
        <InfoPill icon={Globe2} label="Timezone" value="GMT+6 (Dhaka)" delay={0.8} />
      </div>

      {/* React Styled Traits */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="pt-2"
      >
        <p className="mb-3 font-mono text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
          Component_Traits
        </p>
        <div className="flex flex-wrap gap-2.5">
          <TraitTag text="Clean Code" delay={1.0} />
          <TraitTag text="Problem Solver" delay={1.05} />
          <TraitTag text="Open Source" delay={1.1} />
          <TraitTag text="Always Learning" delay={1.15} />
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
      className="relative overflow-hidden py-20 lg:py-24"
    >
      {/* Base Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Floating Syntax Elements */}
      <FloatingCodingElements />

      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--background)_80%)]" />

      {/* Subtle Primary Glow */}
      <div className="pointer-events-none absolute right-0 top-[20%] z-0 h-100 w-100 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — Bio Text & Info */}
          <div className="lg:col-span-7">
            <BioText />
          </div>

          {/* Right — API JSON Visualizer */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <ApiProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
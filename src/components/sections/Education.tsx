"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { education } from "@/data/education";

/* ===== Section Header ===== */
function SectionHeader() {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs tracking-widest text-primary"
      >
        <span className="font-bold">02.</span>
        <span className="opacity-80">EDUCATION</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      >
        My{" "}
        <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Journey.
        </span>
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "circOut" }}
        className="h-0.5 w-24 rounded-full bg-linear-to-r from-cyan-400 to-transparent"
      />
    </div>
  );
}

/* ===== Timeline Line — Scroll Animated ===== */
function TimelineLine({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:flex lg:flex-col lg:items-center">
      {/* Track */}
      <div className="absolute inset-0 w-[2px] bg-border/50 rounded-full" />

      {/* Animated fill */}
      <motion.div
        className="absolute top-0 w-[2px] rounded-full origin-top"
        style={{
          scaleY,
          height: "100%",
          background:
            "linear-gradient(to bottom, #22d3ee, #60a5fa, #a78bfa)",
        }}
      />
    </div>
  );
}

/* ===== Education Card ===== */
function EducationCard({
  item,
  index,
}: {
  item: (typeof education)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex w-full items-center gap-8 lg:gap-0 ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* ===== Card ===== */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -60 : 60,
        }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`w-full lg:w-[calc(50%-48px)] ${
          isLeft ? "lg:mr-auto" : "lg:ml-auto"
        }`}
      >
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-primary/5 hover:shadow-xl"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Top Row */}
          <div className="relative mb-4 flex items-start justify-between gap-3">
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>

            {/* Status badge */}
            <div
              className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                item.status === "ongoing"
                  ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                  : "bg-muted text-muted-foreground border border-border"
              }`}
            >
              <div
                className={`h-1.5 w-1.5 rounded-full ${
                  item.status === "ongoing"
                    ? "bg-emerald-500 animate-pulse"
                    : "bg-muted-foreground"
                }`}
              />
              {item.status === "ongoing" ? "Ongoing" : "Completed"}
            </div>
          </div>

          {/* Degree */}
          <div className="relative mb-2">
            <h3 className="text-lg font-bold text-foreground leading-tight">
              {item.degree}
            </h3>
          </div>

          {/* Institution */}
          <div className="relative mb-4 flex items-center gap-2">
            <BookOpen className="h-3.5 w-3.5 shrink-0 text-primary/60" />
            <p className="text-sm font-medium text-primary/80">
              {item.institution}
            </p>
          </div>

          {/* Period & Result Row */}
          <div className="relative mb-4 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5 text-primary/50" />
              <span className="font-mono">{item.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <Award className="h-3.5 w-3.5 text-primary/50" />
              <span
                className={`font-mono font-semibold ${
                  item.result === "Ongoing"
                    ? "text-emerald-500"
                    : "text-primary"
                }`}
              >
                {item.result}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="relative text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>

          {/* Bottom animated border */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
          />
        </motion.div>
      </motion.div>

      {/* ===== Center Node ===== */}
      <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex h-12 w-12 items-center justify-center"
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/30"
            animate={
              item.status === "ongoing"
                ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Inner circle */}
          <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
            <div
              className={`h-3 w-3 rounded-full ${
                item.status === "ongoing"
                  ? "bg-emerald-500"
                  : "bg-primary"
              }`}
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile left line dot */}
      <div className="absolute left-0 flex h-full items-center lg:hidden">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="h-3 w-3 rounded-full border-2 border-primary bg-background"
        />
      </div>
    </div>
  );
}

/* ===== Main Education Section ===== */
export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="education"
      className="relative flex items-center overflow-hidden py-20"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_75%)]" />

      {/* Left glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      {/* Right glow */}
      <div className="pointer-events-none absolute right-[-10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader />

        {/* Timeline Container */}
        <div
          ref={containerRef}
          className="relative ml-6 flex flex-col gap-12 border-l border-border/50 pl-8 lg:ml-0 lg:border-l-0 lg:pl-0"
        >
          {/* Animated timeline line — desktop only */}
          <TimelineLine containerRef={containerRef} />

          {/* Education Cards */}
          {education.map((item, index) => (
            <EducationCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-6 py-3 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Currently enrolled at{" "}
              <span className="font-semibold text-foreground">BAUST</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
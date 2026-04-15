"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiHtml5,
} from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { IconType } from "react-icons";

/* ===== Skill Data ===== */
interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level: number;
  description: string;
}

const frontendSkills: Skill[] = [
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
    level: 95,
    description: "Semantic markup & accessibility",
  },
  {
    name: "CSS3",
    icon: FaCss3,
    color: "#1572B6",
    level: 90,
    description: "Layouts, animations & responsive",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: 88,
    description: "ES6+, async patterns & DOM",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: 85,
    description: "Type safety & advanced types",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    level: 88,
    description: "Hooks, context & state mgmt",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#71717A", // Updated for Light/Dark visibility
    level: 85,
    description: "SSR, SSG, App Router & API",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: 92,
    description: "Utility-first styling system",
  },
  {
    name: "Shadcn/ui",
    icon: SiReact,
    color: "#71717A", // Updated for Light/Dark visibility
    level: 82,
    description: "Accessible component library",
  },
];

const backendSkills: Skill[] = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    level: 84,
    description: "Server-side JS runtime",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#8b949e",
    level: 82,
    description: "REST APIs & middleware",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#a5d6ff",
    level: 78,
    description: "Type-safe ORM & migrations",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    level: 80,
    description: "Relational DB & complex queries",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    level: 75,
    description: "NoSQL & document modeling",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    level: 72,
    description: "Containerization & deployment",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    level: 88,
    description: "Version control & collaboration",
  },
];

/* ===== All icons for floating background ===== */
const allIcons = [
  { icon: SiHtml5, color: "#E34F26" },
  { icon: FaCss3, color: "#1572B6" },
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiNextdotjs, color: "#71717A" }, // Updated
  { icon: SiTailwindcss, color: "#06B6D4" },
  { icon: SiNodedotjs, color: "#339933" },
  { icon: SiExpress, color: "#8b949e" },
  { icon: SiPrisma, color: "#a5d6ff" },
  { icon: SiPostgresql, color: "#4169E1" },
  { icon: SiMongodb, color: "#47A248" },
  { icon: SiDocker, color: "#2496ED" },
  { icon: SiGit, color: "#F05032" },
];

/* ===== Floating Icons Background ===== */
function FloatingIcons() {
  const positions = [
    { x: "5%", y: "10%" },
    { x: "15%", y: "75%" },
    { x: "25%", y: "35%" },
    { x: "35%", y: "85%" },
    { x: "48%", y: "15%" },
    { x: "60%", y: "65%" },
    { x: "70%", y: "25%" },
    { x: "80%", y: "80%" },
    { x: "90%", y: "45%" },
    { x: "8%", y: "50%" },
    { x: "42%", y: "55%" },
    { x: "55%", y: "90%" },
    { x: "75%", y: "10%" },
    { x: "92%", y: "20%" },
  ];

  return (
    // Added dark/light mode opacity wrapper for perfect visibility scaling
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-100 dark:opacity-40">
      {allIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: positions[i].x,
            top: positions[i].y,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, i % 2 === 0 ? 8 : -8, 0],
            rotate: [0, i % 2 === 0 ? 8 : -8, 0],
            opacity: [0.08, 0.15, 0.08], // Increased baseline opacity for light mode
          }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          <item.icon
            style={{
              color: item.color,
              fontSize: "48px",
              filter: `blur(0.5px)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ===== 3D Tilt Skill Card ===== */
function SkillCard({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-50, 50], [6, -6]);
  const rotateY = useTransform(springX, [-50, 50], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group cursor-default"
    >
      <div
        className="relative overflow-hidden rounded-xl border bg-card/60 p-4 backdrop-blur-sm transition-all duration-300"
        style={{
          borderColor: isHovered
            ? `${skill.color}55`
            : "var(--border)",
          boxShadow: isHovered
            ? `0 8px 32px ${skill.color}18, 0 0 0 1px ${skill.color}20`
            : "none",
        }}
      >
        {/* Top glow on hover */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-300"
          style={{
            background: `linear-gradient(90deg, transparent, ${skill.color}88, transparent)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Icon */}
        <div className="mb-4 flex items-center justify-between">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <skill.icon
              className="h-9 w-9 transition-all duration-300"
              style={{
                color: skill.color,
                filter: isHovered
                  ? `drop-shadow(0 0 8px ${skill.color}88)`
                  : "none",
              }}
            />
          </motion.div>

          {/* Level */}
          <span
            className="font-mono text-[11px] font-semibold"
            style={{ color: skill.color }}
          >
            {skill.level}%
          </span>
        </div>

        {/* Name */}
        <h3 className="mb-1 text-sm font-bold text-foreground">
          {skill.name}
        </h3>

        {/* Description */}
        <p className="mb-3 text-[11px] leading-relaxed text-muted-foreground">
          {skill.description}
        </p>

        {/* Progress */}
        <div className="h-0.75 w-full overflow-hidden rounded-full bg-border/40">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
            }}
            initial={{ width: "0%" }}
            animate={
              isInView ? { width: `${skill.level}%` } : { width: "0%" }
            }
            transition={{
              duration: 1.2,
              delay: index * 0.07 + 0.3,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ===== Category Block ===== */
function SkillCategory({
  title,
  subtitle,
  skills,
  accentColor,
  gradientFrom,
  gradientTo,
}: {
  title: string;
  subtitle: string;
  skills: Skill[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="mb-16">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-center gap-4"
      >
        <div>
          <div className="mb-1 flex items-center gap-2">
            <motion.div
              className="h-2 w-2 rounded-full"
              style={{ background: accentColor }}
              animate={{
                boxShadow: [
                  `0 0 0px ${accentColor}`,
                  `0 0 10px ${accentColor}`,
                  `0 0 0px ${accentColor}`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className="font-mono text-[11px] font-semibold uppercase tracking-widest"
              style={{ color: accentColor }}
            >
              {subtitle}
            </span>
          </div>

          <h3
            className="text-2xl font-bold sm:text-3xl"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h3>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px flex-1 origin-left"
          style={{
            background: `linear-gradient(90deg, ${accentColor}40, transparent)`,
          }}
        />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

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
        <span className="font-bold">03.</span>
        <span className="opacity-80">TECH_STACK</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      >
        What I Work{" "}
        <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          With.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 max-w-lg text-sm leading-relaxed text-muted-foreground"
      >
        A curated set of technologies I use to build fast, scalable, and
        beautiful web applications — from frontend to backend.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: "circOut" }}
        className="h-0.5 w-24 rounded-full bg-linear-to-r from-cyan-400 to-transparent"
      />
    </div>
  );
}

/* ===== Main Skills Section ===== */
export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20">
      {/* Grid background - Updated for Light/Dark visibility */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial fade over grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_75%)]" />

      {/* Floating tech icons in background */}
      <FloatingIcons />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader />

        {/* Frontend */}
        <SkillCategory
          title="Frontend Development"
          subtitle="Client Side"
          skills={frontendSkills}
          accentColor="#22d3ee"
          gradientFrom="#22d3ee"
          gradientTo="#818cf8"
        />

        {/* Backend */}
        <SkillCategory
          title="Backend Development"
          subtitle="Server Side"
          skills={backendSkills}
          accentColor="#a78bfa"
          gradientFrom="#a78bfa"
          gradientTo="#34d399"
        />
      </div>
    </section>
  );
}
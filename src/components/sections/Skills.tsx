/* eslint-disable react/jsx-no-comment-textnodes */
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
  SiRedis,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
  SiStripe,
  SiFirebase,
  SiFramer,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { 
  FaCss3, 
  FaRocket, 
  FaCheckDouble, 
  FaUserSecret, 
  FaCloudUploadAlt,
  FaShieldAlt
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
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
    description: "Semantic markup",
  },
  {
    name: "CSS3",
    icon: FaCss3,
    color: "#1572B6",
    level: 90,
    description: "Styling & layouts",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: 88,
    description: "ES6+ & DOM logic",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: 85,
    description: "Type-safe JS",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    level: 88,
    description: "UI component library",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#71717A",
    level: 85,
    description: "React framework",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: 92,
    description: "Utility styling",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#0055FF",
    level: 85,
    description: "Animation library",
  },
  {
    name: "Shadcn/ui",
    icon: SiReact,
    color: "#71717A",
    level: 82,
    description: "Accessible components",
  },
];

const backendSkills: Skill[] = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    level: 84,
    description: "JS runtime",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#8b949e",
    level: 82,
    description: "Web framework",
  },
  {
    name: "Zod",
    icon: FaCheckDouble,
    color: "#3178C6",
    level: 85,
    description: "Schema validation",
  },
  {
    name: "Bcrypt",
    icon: FaUserSecret,
    color: "#F7DF1E",
    level: 80,
    description: "Password hashing",
  },
  {
    name: "Stripe",
    icon: SiStripe,
    color: "#008CDD",
    level: 78,
    description: "Payments gateway",
  },
  {
    name: "Cloudinary",
    icon: FaCloudUploadAlt,
    color: "#3448C5",
    level: 75,
    description: "Media management",
  },
];

const databaseSkills: Skill[] = [
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    level: 82,
    description: "NoSQL database",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    level: 80,
    description: "Relational database",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    color: "#a5d6ff",
    level: 78,
    description: "Type-safe ORM",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "#DC382D",
    level: 65,
    description: "In-memory caching",
  },
];

const authSkills: Skill[] = [
  {
    name: "NextAuth.js",
    icon: MdSecurity,
    color: "#8b949e",
    level: 82,
    description: "Next.js authentication",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    level: 78,
    description: "Managed auth system",
  },
  {
    name: "Better Auth",
    icon: FaShieldAlt,
    color: "#6C47FF",
    level: 75,
    description: "Modern auth logic",
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    color: "#FB015B",
    level: 85,
    description: "Stateless tokens",
  },
];

const toolSkills: Skill[] = [
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    level: 88,
    description: "Version control",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
    level: 72,
    description: "Containerization",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#71717A",
    level: 85,
    description: "Cloud deployment",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    level: 82,
    description: "API testing",
  },
  {
    name: "VS Code",
    icon: BiLogoVisualStudio,
    color: "#007ACC",
    level: 90,
    description: "Code editor",
  },
  {
    name: "Antigravity",
    icon: FaRocket,
    color: "#a78bfa",
    level: 100,
    description: "import antigravity;",
  },
];

/* ===== All icons for floating background ===== */
const allIcons = [
  { icon: SiHtml5, color: "#E34F26" },
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiFramer, color: "#0055FF" },
  { icon: SiNodedotjs, color: "#339933" },
  { icon: SiPostgresql, color: "#4169E1" },
  { icon: SiMongodb, color: "#47A248" },
  { icon: SiDocker, color: "#2496ED" },
  { icon: SiGit, color: "#F05032" },
  { icon: SiStripe, color: "#008CDD" },
  { icon: FaRocket, color: "#a78bfa" },
];

/* ===== Floating Icons Background ===== */
function FloatingIcons() {
  const positions = [
    { x: "10%", y: "15%" }, { x: "85%", y: "20%" },
    { x: "20%", y: "75%" }, { x: "75%", y: "85%" },
    { x: "40%", y: "35%" }, { x: "60%", y: "45%" },
    { x: "50%", y: "80%" }, { x: "30%", y: "10%" },
    { x: "90%", y: "60%" }, { x: "5%", y: "50%" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-100 dark:opacity-30">
      {allIcons.slice(0, 10).map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: positions[i].x, top: positions[i].y }}
          animate={{
            y: [0, -15, 0],
            x: [0, i % 2 === 0 ? 5 : -5, 0],
            rotate: [0, i % 2 === 0 ? 5 : -5, 0],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        >
          <item.icon
            style={{ color: item.color, fontSize: "36px", filter: `blur(0.5px)` }}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* ===== 3D Tilt Skill Card (COMPACT VERSION) ===== */
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
  const rotateX = useTransform(springY, [-30, 30], [8, -8]);
  const rotateY = useTransform(springX, [-30, 30], [-8, 8]);

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
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group h-full cursor-default"
    >
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-xl border bg-card/60 p-3 backdrop-blur-sm transition-all duration-300"
        style={{
          borderColor: isHovered ? `${skill.color}55` : "var(--border)",
          boxShadow: isHovered
            ? `0 4px 20px ${skill.color}15, 0 0 0 1px ${skill.color}20`
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

        {/* Compact Icon Row */}
        <div className="mb-2 flex items-center justify-between">
          <motion.div animate={{ scale: isHovered ? 1.1 : 1 }} transition={{ duration: 0.2 }}>
            <skill.icon
              className="h-6 w-6 transition-all duration-300"
              style={{
                color: skill.color,
                filter: isHovered ? `drop-shadow(0 0 6px ${skill.color}88)` : "none",
              }}
            />
          </motion.div>
          <span className="font-mono text-[10px] font-semibold" style={{ color: skill.color }}>
            {skill.level}%
          </span>
        </div>

        {/* Compact Text */}
        <h3 className="mb-0.5 text-xs font-bold text-foreground line-clamp-1">{skill.name}</h3>
        <p className="mb-2.5 flex-grow text-[10px] leading-tight text-muted-foreground line-clamp-2">
          {skill.description}
        </p>

        {/* Thin Progress Bar */}
        <div className="mt-auto h-0.5 w-full overflow-hidden rounded-full bg-border/50">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` }}
            initial={{ width: "0%" }}
            animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
            transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: "easeOut" }}
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
}: {
  title: string;
  subtitle: string;
  skills: Skill[];
  accentColor: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-12">
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center gap-4"
      >
        <div>
          <div className="mb-1 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: accentColor }} />
            <span
              className="font-mono text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: accentColor }}
            >
              {subtitle}
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground sm:text-2xl">{title}</h3>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </motion.div>

      {/* COMPACT GRID: More columns, smaller gaps */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

/* ===== Section Header (Matched to About Section) ===== */
function SectionHeader() {
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs tracking-widest text-primary backdrop-blur-sm"
      >
        <span className="font-bold">03.</span>
        <span className="opacity-80">SKILLS</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        Technology{" "}
        <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Stack.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-muted-foreground"
      >
        A curated collection of the technologies I use to build robust, scalable, and beautiful web applications.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "circOut" }}
        className="h-0.5 w-20 rounded-full bg-linear-to-r from-cyan-400 to-transparent lg:w-28"
      />
    </div>
  );
}

/* ===== Main Skills Section ===== */
export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,var(--background)_80%)]" />
      <FloatingIcons />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">
        
        {/* Updated Section Header */}
        <SectionHeader />

        {/* Categories */}
        <SkillCategory
          title="Frontend"
          subtitle="Client Side"
          skills={frontendSkills}
          accentColor="#22d3ee"
        />

        <SkillCategory
          title="Backend"
          subtitle="Server Side"
          skills={backendSkills}
          accentColor="#a78bfa"
        />

        <SkillCategory
          title="Database"
          subtitle="Storage"
          skills={databaseSkills}
          accentColor="#4169E1"
        />

        <SkillCategory
          title="Auth & Security"
          subtitle="Protection"
          skills={authSkills}
          accentColor="#FB015B"
        />

        <SkillCategory
          title="Tools & DevOps"
          subtitle="Workflow"
          skills={toolSkills}
          accentColor="#F05032"
        />
      </div>
    </section>
  );
}
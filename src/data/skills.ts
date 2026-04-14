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
  SiCss,
  SiShadcnui,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export const skills: Skill[] = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "frontend" },
  { name: "CSS3", icon: SiCss, color: "#1572B6", category: "frontend" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "frontend",
  },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "frontend" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#ffffff",
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "frontend",
  },
  {
    name: "Shadcn/ui",
    icon: SiShadcnui,
    color: "#ffffff",
    category: "frontend",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    category: "backend",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#ffffff",
    category: "backend",
  },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "backend" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    category: "database",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    category: "database",
  },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "tools" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "tools" },
];

export const skillCategories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "DevOps & Tools" },
] as const;
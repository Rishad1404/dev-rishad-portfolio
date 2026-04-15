/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  FolderOpen,
  Star,
  GitFork,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

/* ===== Developer Aesthetics Background ===== */
function BackgroundDeveloperElements() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03] dark:opacity-[0.05]">
      {/* Floating Code Snippets */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[15%] font-mono text-4xl text-primary/50"
      >
        <pre>{`const build = async () => {\n  await compile();\n};`}</pre>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] top-[40%] font-mono text-3xl text-indigo-500/50"
      >
        <pre>{`<Container>\n  <ProjectCard />\n</Container>`}</pre>
      </motion.div>

      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[20%] font-mono text-5xl text-cyan-500/40"
      >
        {`{ }`}
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[15%] font-mono text-5xl text-purple-500/40"
      >
        {`< >`}
      </motion.div>

      {/* Decorative Network Nodes */}
      <svg className="absolute left-[15%] top-[60%] h-64 w-64 stroke-primary/30" fill="none">
        <path d="M10 10 L100 50 L50 150 Z" strokeWidth="1" />
        <circle cx="10" cy="10" r="3" className="fill-primary/50" />
        <circle cx="100" cy="50" r="3" className="fill-primary/50" />
        <circle cx="50" cy="150" r="3" className="fill-primary/50" />
      </svg>
      
      <svg className="absolute right-[20%] top-[10%] h-64 w-64 stroke-primary/30" fill="none">
        <path d="M50 20 L150 60 L100 120 Z" strokeWidth="1" />
        <circle cx="50" cy="20" r="3" className="fill-primary/50" />
        <circle cx="150" cy="60" r="3" className="fill-primary/50" />
        <circle cx="100" cy="120" r="3" className="fill-primary/50" />
      </svg>
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
        <span className="font-bold">04.</span>
        <span className="opacity-80">PROJECTS</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      >
        What I&apos;ve{" "}
        <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Built.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 max-w-lg text-center text-sm leading-relaxed text-muted-foreground"
      >
        A collection of projects I have built with passion and purpose.
        Each one crafted with clean code and modern technologies.
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

/* ===== Project Card ===== */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-500"
        style={{
          boxShadow: isHovered
            ? "0 20px 60px rgba(34,211,238,0.08), 0 0 0 1px rgba(34,211,238,0.15)"
            : "none",
        }}
      >
        {/* Top gradient line */}
        <motion.div
          className="absolute inset-x-0 top-0 h-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, #22d3ee, #818cf8, transparent)",
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div
          className={`flex flex-col lg:flex-row ${
            isEven ? "" : "lg:flex-row-reverse"
          }`}
        >
          {/* Browser Mockup */}
          <div className="relative w-full overflow-hidden lg:w-[55%]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <div className="ml-2 flex flex-1 items-center gap-2 rounded-md border border-border/40 bg-background/40 px-3 py-1">
                <div className="h-2 w-2 rounded-full bg-emerald-500/60" />
                <span className="truncate font-mono text-[11px] text-muted-foreground/60">
                  {project.liveUrl !== "#"
                    ? project.liveUrl
                    : `https://${project.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}.vercel.app`}
                </span>
              </div>
            </div>

            {/* Image Area */}
            <div className="relative aspect-video w-full overflow-hidden bg-secondary/20">
              {project.image && project.image !== "" ? (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-3">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm transition-colors hover:bg-primary/20"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </motion.a>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 rounded-lg border border-border bg-card/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
                        >
                          <FaGithub className="h-4 w-4" />
                          Source Code
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                    <motion.div
                      className="w-full max-w-xs space-y-2"
                      animate={isHovered ? { y: -5 } : { y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {[80, 65, 90, 55, 75].map((width, i) => (
                        <motion.div
                          key={i}
                          className="h-2 rounded-full bg-border/60"
                          style={{ width: `${width}%` }}
                          animate={
                            isHovered
                              ? {
                                  backgroundColor: [
                                    "rgba(34,211,238,0.1)",
                                    "rgba(129,140,248,0.1)",
                                    "rgba(34,211,238,0.1)",
                                  ],
                                }
                              : {}
                          }
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                    <FolderOpen className="h-12 w-12 text-muted-foreground/20" />
                    <p className="font-mono text-xs text-muted-foreground/30">
                      {project.title}
                    </p>
                  </div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-3">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm transition-colors hover:bg-primary/20"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </motion.a>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 rounded-lg border border-border bg-card/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
                        >
                          <FaGithub className="h-4 w-4" />
                          Source Code
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Project Info */}
          <div className="flex w-full flex-col justify-between p-6 lg:w-[45%] lg:p-8">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-primary/60">
                  Project 0{index + 1}
                </span>
                {project.featured && (
                  <span className="flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] text-amber-500">
                    <Star className="h-3 w-3" />
                    Featured
                  </span>
                )}
              </div>

              <h3 className="mb-3 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                {project.title}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.longDescription}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-md border border-border/60 bg-secondary/50 font-mono text-[11px] text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 border-t border-border/50 pt-5">
              {project.githubUrl && project.githubUrl !== "#" ? (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  <FaGithub className="h-4 w-4" />
                  <span className="font-mono text-xs">View Code</span>
                  <GitFork className="h-3 w-3" />
                </motion.a>
              ) : (
                <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground/40">
                  <FaGithub className="h-4 w-4" />
                  Private Repository
                </span>
              )}

              {project.liveUrl && project.liveUrl !== "#" ? (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="ml-auto flex items-center gap-1.5 text-sm font-medium text-primary transition-colors duration-200 hover:text-primary/80"
                >
                  <span className="font-mono text-xs">Live Preview</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              ) : (
                <span className="ml-auto font-mono text-xs text-muted-foreground/40">
                  Coming soon...
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ===== More Projects ===== */
function MoreProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-16 flex flex-col items-center gap-4"
    >
      <div className="h-px w-32 bg-linear-to-r from-transparent via-border to-transparent" />
      <p className="text-center text-sm text-muted-foreground">
        More projects are on the way.{" "}
        <a
          href="https://github.com/Rishad1404"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
        >
          Visit my GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>{" "}
        to see all my work.
      </p>
    </motion.div>
  );
}

/* ===== Main Section ===== */
export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20">
      {/* Grid background */}
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

      {/* Developer UI Background Elements */}
      <BackgroundDeveloperElements />

      {/* Glow accents */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-100 w-100 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-100 w-100 rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader />

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <MoreProjects />
      </div>
    </section>
  );
}
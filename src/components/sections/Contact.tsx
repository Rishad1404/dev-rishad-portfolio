/* eslint-disable react-hooks/purity */
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  socials,
  freelanceProfiles,
  contactInfo,
} from "@/data/socials";

/* ===== 3D Coding Scene ===== */
function ContactScene() {
  // Refs for all meshes
  const bracketLeftRef = useRef<THREE.Mesh>(null);
  const bracketRightRef = useRef<THREE.Mesh>(null);
  const slashRef = useRef<THREE.Mesh>(null);
  const curlyLeftRef = useRef<THREE.Mesh>(null);
  const curlyRightRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Slowly rotate entire group
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.08;
    }

    // Floating brackets < >
    if (bracketLeftRef.current) {
      bracketLeftRef.current.position.x = -3.5 + Math.sin(t * 0.4) * 0.15;
      bracketLeftRef.current.position.y = 0.5 + Math.sin(t * 0.5) * 0.2;
      bracketLeftRef.current.rotation.z = Math.sin(t * 0.3) * 0.08;
    }
    if (bracketRightRef.current) {
      bracketRightRef.current.position.x = 3.5 + Math.sin(t * 0.4 + 1) * 0.15;
      bracketRightRef.current.position.y = 0.5 + Math.sin(t * 0.5 + 1) * 0.2;
      bracketRightRef.current.rotation.z = Math.sin(t * 0.3 + 1) * 0.08;
    }

    // Floating slash /
    if (slashRef.current) {
      slashRef.current.position.y = Math.sin(t * 0.6) * 0.3;
      slashRef.current.rotation.z = 0.4 + Math.sin(t * 0.2) * 0.05;
    }

    // Floating curly braces { }
    if (curlyLeftRef.current) {
      curlyLeftRef.current.position.x = -2 + Math.sin(t * 0.35) * 0.1;
      curlyLeftRef.current.position.y = -1.5 + Math.sin(t * 0.45) * 0.2;
    }
    if (curlyRightRef.current) {
      curlyRightRef.current.position.x = 2 + Math.sin(t * 0.35 + 1) * 0.1;
      curlyRightRef.current.position.y = -1.5 + Math.sin(t * 0.45 + 1) * 0.2;
    }

    // Rotating orbit rings
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.2;
      ring1Ref.current.rotation.x = Math.PI / 3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.15;
      ring2Ref.current.rotation.y = Math.PI / 4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = t * 0.1;
      ring3Ref.current.rotation.z = Math.PI / 5;
    }
  });

  // Particles
  const particles = new Float32Array(
    Array.from({ length: 60 }, () => [
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 5 - 2,
    ]).flat()
  );

  // Create bracket shape < using box geometries
  const bracketThickness = 0.08;
  const bracketLength = 0.8;

  return (
    <group ref={groupRef}>
      {/* ===== < Left Bracket ===== */}
      <group ref={bracketLeftRef} position={[-3.5, 0.5, 0]}>
        {/* Top arm */}
        <mesh position={[-0.2, 0.35, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[bracketThickness, bracketLength, 0.06]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
        </mesh>
        {/* Bottom arm */}
        <mesh position={[-0.2, -0.35, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[bracketThickness, bracketLength, 0.06]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
        </mesh>
      </group>

      {/* ===== > Right Bracket ===== */}
      <group ref={bracketRightRef} position={[3.5, 0.5, 0]}>
        {/* Top arm */}
        <mesh position={[0.2, 0.35, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[bracketThickness, bracketLength, 0.06]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
        </mesh>
        {/* Bottom arm */}
        <mesh position={[0.2, -0.35, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[bracketThickness, bracketLength, 0.06]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
        </mesh>
      </group>

      {/* ===== / Slash ===== */}
      <mesh ref={slashRef} position={[0, 0, 0]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.08, 2.2, 0.06]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.45} />
      </mesh>

      {/* ===== { Left Curly ===== */}
      <group ref={curlyLeftRef} position={[-2, -1.5, 0]}>
        {/* Top vertical */}
        <mesh position={[0.15, 0.4, 0]}>
          <boxGeometry args={[0.07, 0.5, 0.06]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
        {/* Middle bump left */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.3, 0.07, 0.06]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
        {/* Bottom vertical */}
        <mesh position={[0.15, -0.4, 0]}>
          <boxGeometry args={[0.07, 0.5, 0.06]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
        {/* Top cap */}
        <mesh position={[0.25, 0.65, 0]}>
          <boxGeometry args={[0.2, 0.07, 0.06]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
        {/* Bottom cap */}
        <mesh position={[0.25, -0.65, 0]}>
          <boxGeometry args={[0.2, 0.07, 0.06]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* ===== } Right Curly ===== */}
      <group ref={curlyRightRef} position={[2, -1.5, 0]}>
        {/* Top vertical */}
        <mesh position={[-0.15, 0.4, 0]}>
          <boxGeometry args={[0.07, 0.5, 0.06]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
        {/* Middle bump right */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.3, 0.07, 0.06]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
        {/* Bottom vertical */}
        <mesh position={[-0.15, -0.4, 0]}>
          <boxGeometry args={[0.07, 0.5, 0.06]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
        {/* Top cap */}
        <mesh position={[-0.25, 0.65, 0]}>
          <boxGeometry args={[0.2, 0.07, 0.06]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
        {/* Bottom cap */}
        <mesh position={[-0.25, -0.65, 0]}>
          <boxGeometry args={[0.2, 0.07, 0.06]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* ===== Orbit Rings ===== */}
      <mesh ref={ring1Ref} position={[0, 0, -2]}>
        <torusGeometry args={[3.5, 0.012, 8, 100]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.07} />
      </mesh>

      <mesh ref={ring2Ref} position={[0, 0, -2]}>
        <torusGeometry args={[2.8, 0.01, 8, 100]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.06} />
      </mesh>

      <mesh ref={ring3Ref} position={[0, 0, -2]}>
        <torusGeometry args={[4.2, 0.008, 8, 100]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.04} />
      </mesh>

      {/* ===== Floating Particles ===== */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#22d3ee"
          transparent
          opacity={0.25}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

/* ===== 3D Canvas ===== */
function Background3D() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        legacy={false}
      >
        <ContactScene />
      </Canvas>
    </div>
  );
}

const Background3DClient = dynamic(
  () => Promise.resolve(Background3D),
  { ssr: false }
);

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
        <span className="font-bold">05.</span>
        <span className="opacity-80">CONTACT</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      >
        Let&apos;s Work{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Together.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 max-w-lg text-center text-sm leading-relaxed text-muted-foreground"
      >
        Have a project in mind or want to collaborate? Feel free to
        reach out. I am always open to discussing new opportunities.
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: "circOut" }}
        className="h-[2px] w-24 rounded-full bg-gradient-to-r from-cyan-400 to-transparent"
      />
    </div>
  );
}

/* ===== Contact Info Card ===== */
function ContactInfoCard({
  icon: Icon,
  label,
  value,
  href,
  delay,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  delay: number;
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 4 }}
      className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="mb-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
          {label}
        </p>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
      {href && (
        <ExternalLink className="ml-auto h-3.5 w-3.5 text-muted-foreground/30 transition-colors duration-300 group-hover:text-primary/60" />
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}

/* ===== Freelance Card ===== */
function FreelanceCard({
  profile,
  index,
}: {
  profile: (typeof freelanceProfiles)[0];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
    >
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${profile.color}, transparent)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top left, ${profile.color}08, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300"
            style={{
              background: `${profile.color}15`,
              border: `1px solid ${profile.color}30`,
            }}
          >
            <profile.icon
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              style={{ color: profile.color }}
            />
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground">
              {profile.name}
            </h3>
            <span
              className="rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold"
              style={{
                background: `${profile.color}15`,
                color: profile.color,
              }}
            >
              {profile.badge}
            </span>
          </div>
        </div>

        <ExternalLink className="h-4 w-4 text-muted-foreground/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary/60" />
      </div>

      <p className="relative mt-3 text-xs leading-relaxed text-muted-foreground">
        {profile.description}
      </p>
    </motion.a>
  );
}

/* ===== Contact Form — No blank space ===== */
function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="h-fit overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-2xl backdrop-blur-sm"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-border/50 bg-secondary/30 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            new_message.ts
          </span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            animate={{
              boxShadow: [
                "0 0 0px #10b981",
                "0 0 6px #10b98188",
                "0 0 0px #10b981",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-[10px] text-muted-foreground/50">
            ready
          </span>
        </div>
      </div>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 p-5"
      >
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="space-y-1.5"
        >
          <label className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="text-primary/60">const</span>
            <span className="text-foreground/80">name</span>
            <span className="text-muted-foreground/40">=</span>
          </label>
          <Input
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder='"Your full name"'
            required
            className="border-border/50 bg-secondary/30 font-mono text-sm placeholder:text-muted-foreground/30 focus:border-primary/50"
          />
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="space-y-1.5"
        >
          <label className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="text-primary/60">const</span>
            <span className="text-foreground/80">email</span>
            <span className="text-muted-foreground/40">=</span>
          </label>
          <Input
            name="from_email"
            type="email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder='"your@email.com"'
            required
            className="border-border/50 bg-secondary/30 font-mono text-sm placeholder:text-muted-foreground/30 focus:border-primary/50"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="space-y-1.5"
        >
          <label className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="text-primary/60">const</span>
            <span className="text-foreground/80">message</span>
            <span className="text-muted-foreground/40">=</span>
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='"Tell me about your project..."'
            required
            rows={6}
            className="resize-none border-border/50 bg-secondary/30 font-mono text-sm placeholder:text-muted-foreground/30 focus:border-primary/50"
          />
        </motion.div>

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full gap-2 font-mono text-sm font-semibold"
            size="lg"
          >
            {status === "idle" && (
              <>
                <Send className="h-4 w-4" />
                send_message()
              </>
            )}
            {status === "loading" && (
              <>
                <motion.div
                  className="h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                sending...
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                message_sent!
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle className="h-4 w-4 text-destructive" />
                try_again()
              </>
            )}
          </Button>
        </motion.div>

        {/* Status Messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3"
          >
            <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
            <p className="font-mono text-xs text-emerald-400">
              Message sent! I will get back to you soon.
            </p>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 p-3"
          >
            <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
            <p className="font-mono text-xs text-destructive">
              Something went wrong. Please email me directly.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}

/* ===== Left Panel ===== */
function LeftPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-8"
    >
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">
          I am currently available for{" "}
          <span className="font-medium text-foreground">
            freelance work
          </span>{" "}
          and{" "}
          <span className="font-medium text-foreground">
            full-time opportunities
          </span>
          . Whether you have a project in mind or just want to say
          hello, my inbox is always open.
        </p>

        {/* Availability */}
        <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
          <motion.div
            className="h-2 w-2 rounded-full bg-emerald-500"
            animate={{
              boxShadow: [
                "0 0 0px #10b981",
                "0 0 8px #10b98188",
                "0 0 0px #10b981",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-mono text-xs font-medium text-emerald-500">
            Currently available for work
          </span>
        </div>
      </div>

      {/* Direct Contact */}
      <div className="space-y-3">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">
          Direct Contact
        </h3>
        <ContactInfoCard
          icon={Mail}
          label="Email"
          value={contactInfo.email}
          href={`mailto:${contactInfo.email}`}
          delay={0.1}
        />
        <ContactInfoCard
          icon={Phone}
          label="Phone"
          value={contactInfo.phone}
          href={`tel:${contactInfo.phone}`}
          delay={0.2}
        />
        <ContactInfoCard
          icon={MapPin}
          label="Location"
          value={contactInfo.location}
          delay={0.3}
        />
      </div>

      {/* Freelance Profiles */}
      <div className="space-y-3">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">
          Hire Me On
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {freelanceProfiles.map((profile, index) => (
            <FreelanceCard
              key={profile.name}
              profile={profile}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Socials */}
      <div className="space-y-3">
        <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">
          Find Me On
        </h3>
        <div className="flex flex-wrap gap-3">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:text-foreground"
              title={social.name}
            >
              <social.icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ===== Main Contact Section ===== */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20">
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

      {/* 3D Background */}
      <Background3DClient />

      {/* Glow accents */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/3 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <LeftPanel />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
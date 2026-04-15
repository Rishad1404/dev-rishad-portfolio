"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
import { GridBackground } from "@/components/ui/GridBackground"; // Your custom grid component
import {
  socials,
  freelanceProfiles,
  contactInfo,
} from "@/data/socials";

/* ===== Lightweight Floating Coding Elements ===== */
function FloatingCodingElements() {
  const elements = [
    { text: "< />", top: "15%", left: "8%", delay: 0, rotate: -15, color: "text-cyan-500/20" },
    { text: "{ }", top: "60%", left: "4%", delay: 2, rotate: 10, color: "text-indigo-500/20" },
    { text: "() =>", top: "25%", right: "8%", delay: 1, rotate: 15, color: "text-purple-500/20" },
    { text: "const", top: "75%", right: "5%", delay: 3, rotate: -10, color: "text-emerald-500/20" },
    { text: "</>", top: "85%", left: "45%", delay: 1.5, rotate: 0, color: "text-blue-500/10" },
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
          className={`absolute font-mono text-4xl font-bold select-none md:text-6xl ${el.color}`}
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
    <div className="mb-16 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-xs tracking-widest text-primary backdrop-blur-sm"
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
        <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
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
        className="h-0.5 w-24 rounded-full bg-linear-to-r from-cyan-400 to-transparent"
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
      className="group flex items-center gap-4 rounded-xl border border-border/40 bg-card/40 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-card/60"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="mb-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
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
      className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
    >
      <div
        className="absolute inset-x-0 top-0 h-0.5 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${profile.color}, transparent)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div
        className="absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top left, ${profile.color}08, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
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
              className="rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide"
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

/* ===== Contact Form ===== */
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
      className="h-fit rounded-2xl border border-border/40 bg-card/30 p-8 shadow-2xl backdrop-blur-md sm:p-10"
    >
      <div className="mb-8 space-y-2">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          Send a Message
        </h3>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <label className="text-sm font-medium text-foreground/90">
              Your Name
            </label>
            <Input
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="h-12 border-border/50 bg-background/50 placeholder:text-muted-foreground/40 focus-visible:ring-1 focus-visible:ring-primary/50"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <label className="text-sm font-medium text-foreground/90">
              Email Address
            </label>
            <Input
              name="from_email"
              type="email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="h-12 border-border/50 bg-background/50 placeholder:text-muted-foreground/40 focus-visible:ring-1 focus-visible:ring-primary/50"
            />
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <label className="text-sm font-medium text-foreground/90">
            Project Details
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a little bit about what you are looking for..."
            required
            rows={5}
            className="resize-none border-border/50 bg-background/50 placeholder:text-muted-foreground/40 focus-visible:ring-1 focus-visible:ring-primary/50"
          />
        </motion.div>

        {/* Submit */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="pt-2"
        >
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="h-12 w-full gap-2 text-sm font-medium transition-all"
            size="lg"
          >
            {status === "idle" && (
              <>
                <Send className="h-4 w-4" />
                Send Message
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
                Sending...
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle className="h-4 w-4" />
                Message Sent Successfully
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle className="h-4 w-4" />
                Failed to Send. Try Again
              </>
            )}
          </Button>
        </motion.div>

        {/* Status Messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3"
          >
            <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
            <p className="text-sm font-medium text-emerald-500">
              Thanks for reaching out! I will get back to you soon.
            </p>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/10 p-3"
          >
            <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
            <p className="text-sm font-medium text-destructive">
              Something went wrong. Please try emailing me directly.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}

/* ===== Left Panel (Intro & Direct Contact) ===== */
function LeftPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-10"
    >
      {/* Intro */}
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
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
        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-5 py-2.5 backdrop-blur-sm">
          <motion.div
            className="h-2 w-2 rounded-full bg-emerald-500"
            animate={{
              boxShadow: [
                "0 0 0px #10b981",
                "0 0 12px #10b981",
                "0 0 0px #10b981",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-emerald-500">
            Available for new opportunities
          </span>
        </div>
      </div>

      {/* Direct Contact */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60">
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
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60">
          Hire Me On
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {freelanceProfiles.map((profile, index) => (
            <FreelanceCard
              key={profile.name}
              profile={profile}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ===== Right Panel Socials (Find Me On) ===== */
function SocialsPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="rounded-2xl border border-border/40 bg-card/30 p-8 shadow-lg backdrop-blur-md"
    >
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-foreground">Find Me On</h3>
          <p className="text-sm text-muted-foreground">
            Connect with me across the web.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.05 }}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-background/50 text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground hover:shadow-lg"
              title={social.name}
            >
              <social.icon className="h-5 w-5" />
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
    <section id="contact" className="relative overflow-hidden py-24">
      {/* 1. Base Grid Component */}
      <div className="absolute inset-0 z-0">
        <GridBackground />
      </div>

      {/* 2. Floating Code Elements */}
      <FloatingCodingElements />

      {/* 3. Subtle Glow accents */}
      <div className="pointer-events-none absolute left-0 top-1/4 z-0 h-125 w-125 rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 z-0 h-125 w-125 rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeader />

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          {/* Left Column */}
          <LeftPanel />

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <ContactForm />
            <SocialsPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
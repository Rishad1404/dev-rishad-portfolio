"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileCode2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Grid & Glow Effects */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      {/* Floating Syntax */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [10, 15, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[20%] top-[30%] font-mono text-6xl font-bold text-primary/5 select-none"
      >
        {"</>"}
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [-10, -5, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[20%] top-[60%] font-mono text-6xl font-bold text-primary/5 select-none"
      >
        {"{ }"}
      </motion.div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-border/50 bg-secondary/30 backdrop-blur-md shadow-2xl"
        >
          <FileCode2 className="h-10 w-10 text-muted-foreground" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-2 font-mono text-6xl font-bold tracking-tighter text-foreground sm:text-8xl"
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 space-y-2"
        >
          <p className="text-xl font-semibold tracking-tight text-foreground">
            Module Not Found
          </p>
          <p className="max-w-md font-mono text-sm text-muted-foreground">
            <span className="text-destructive">Error:</span> Route{" "}
            <span className="text-primary">undefined</span>. The page you are
            looking for has been moved, deleted, or never existed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/">
            <Button size="lg" className="gap-2 font-mono text-sm transition-all hover:scale-105">
              <ArrowLeft className="h-4 w-4" />
              return true; // Go Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
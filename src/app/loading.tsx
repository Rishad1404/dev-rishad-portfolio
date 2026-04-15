"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const loadingMessages = [
  "Initializing environment...",
  "Resolving dependencies...",
  "Compiling assets...",
  "Building UI components...",
  "Establishing connection...",
];

export default function Loading() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl">
      {/* Subtle Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Glowing Orbital Loader */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          <motion.div
            className="absolute h-full w-full rounded-full border border-primary/20 border-t-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute h-16 w-16 rounded-full border border-indigo-500/20 border-b-indigo-500"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.3)]">
            <Terminal className="h-4 w-4 text-primary" />
          </div>
        </div>

        {/* Console Text */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="h-2 w-2 bg-primary"
            />
            <span className="font-mono tracking-wider text-primary">System.init()</span>
          </div>
          
          <div className="h-6 overflow-hidden">
            <motion.p
              key={messageIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-mono text-xs text-muted-foreground"
            >
              <span className="mr-2 text-primary/50">{`>`}</span>
              {loadingMessages[messageIndex]}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
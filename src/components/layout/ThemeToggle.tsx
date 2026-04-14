"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-secondary border border-border" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-7 rounded-full cursor-pointer p-1 border transition-all duration-500"
      style={{
        background: isDark ? "#21262d" : "#ddf4ff",
        borderColor: isDark ? "#30363d" : "#54aeff66",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Stars (dark mode) */}
      <AnimatePresence>
        {isDark && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.15 }}
              className="absolute top-1.5 left-2 w-1 h-1 rounded-full bg-cyan-300/70"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.25 }}
              className="absolute top-3.5 left-3.5 w-0.5 h-0.5 rounded-full bg-cyan-400/60"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-1.5 left-2.5 w-0.5 h-0.5 rounded-full bg-blue-300/70"
            />
          </>
        )}
      </AnimatePresence>

      {/* Clouds (light mode) */}
      <AnimatePresence>
        {!isDark && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 0.8, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ delay: 0.15 }}
              className="absolute top-1 right-2.5 w-3 h-1.5 rounded-full bg-white"
            />
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 0.5, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ delay: 0.25 }}
              className="absolute bottom-1.5 right-3.5 w-2 h-1 rounded-full bg-white/80"
            />
          </>
        )}
      </AnimatePresence>

      {/* Toggle Knob */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="relative w-5 h-5 rounded-full flex items-center justify-center overflow-hidden"
        style={{
          marginLeft: isDark ? "auto" : "0px",
          background: isDark
            ? "linear-gradient(135deg, #8b949e, #6e7781)"
            : "linear-gradient(135deg, #fbbf24, #f59e0b)",
          boxShadow: isDark
            ? "0 0 6px #8b949e44"
            : "0 0 10px #fbbf2466, 0 0 20px #fbbf2422",
        }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full relative"
            >
              <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-white/20" />
              <div className="absolute bottom-1 left-0.5 w-1.5 h-1.5 rounded-full bg-white/10" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-100/90" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{
          boxShadow: isDark
            ? "0 0 0px transparent"
            : "0 0 12px #fbbf2422",
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
}
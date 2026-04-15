/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a completely blank placeholder of the exact same size to prevent layout shift before hydration
  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-border bg-transparent" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      aria-label="Toggle theme"
    >
      {/* Sun Icon (Visible in Light Mode) */}
      <Sun
        className={cn(
          "absolute h-4 w-4 transition-all duration-300 ease-in-out",
          isDark
            ? "scale-0 -rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        )}
      />
      
      {/* Moon Icon (Visible in Dark Mode) */}
      <Moon
        className={cn(
          "absolute h-4 w-4 transition-all duration-300 ease-in-out",
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 rotate-90 opacity-0"
        )}
      />
    </motion.button>
  );
}
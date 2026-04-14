import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Md. Rishad Islam | Full Stack Developer",
  description:
    "Crafting Modern Web Experiences with Code & Creativity. Full Stack Developer specializing in React, Next.js, Node.js, and more.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "Rishad Islam",
  ],
  authors: [{ name: "Md. Rishad Islam" }],
  openGraph: {
    title: "Md. Rishad Islam | Full Stack Developer",
    description: "Crafting Modern Web Experiences with Code & Creativity",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
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
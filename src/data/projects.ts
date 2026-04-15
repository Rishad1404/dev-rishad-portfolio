export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ScholarTrack - Enterprise SaaS",
    description:
      "A comprehensive SaaS platform streamlining scholarship management with secure authentication and automated Stripe billing.",
    longDescription:
      "Engineered a decoupled, enterprise-grade architecture using Next.js 15 and Express.js. Features include secure cross-domain authentication, automated subscription tier management via Stripe webhooks, and a real-time university admin dashboard powered by TanStack Query and Prisma.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Stripe API",
    ],
    liveUrl: "https://frontend-scholar-track.vercel.app",
    githubUrl: "https://github.com/Rishad1404/frontend-scholar-track",
    image: "https://i.ibb.co.com/1JZxfTYP/Screenshot-2026-04-13-215221.png", 
    featured: true,
  },
  {
    id: 2,
    title: "Medicine Corner - E-Commerce",
    description:
      "A high-performance full-stack e-commerce platform designed to modernize the online pharmacy experience.",
    longDescription:
      "Developed a secure and responsive marketplace connecting patients with essential medicines. Built a comprehensive admin command center for real-time inventory and order tracking, alongside a customer-facing dashboard featuring verified reviews and instant client-side filtering without page reloads.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "PostgreSQL",
      "Prisma",
    ],
    liveUrl: "https://medicine-corner-client.vercel.app",
    githubUrl: "https://github.com/Rishad1404/medicine-corner-client",
    image: "https://i.ibb.co.com/SwrHPvRD/Screenshot-2026-04-13-220721.png", 
    featured: true,
  },
  {
    id: 3,
    title: "StudyMate - Peer EdTech Platform",
    description:
      "An interactive educational platform facilitating collaborative group study, assignment tracking, and peer-to-peer grading.",
    longDescription:
      "Designed a collaborative environment to improve student engagement through accountability. Users can create, submit, and peer-grade assignments in real-time. Built utilizing a robust MERN stack architecture to handle dynamic user relationships and continuous data updates seamlessly.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
    liveUrl: "https://stydy-mate.netlify.app",
    githubUrl: "https://github.com/Rishad1404/assignment-11-client",
    image: "https://i.ibb.co.com/Q3nrSRGH/Screenshot-2026-04-15-122101.png", 
    featured: true,
  },
];
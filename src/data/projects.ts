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
    title: "ScholarTrack SaaS",
    description:
      "An enterprise-grade platform centralizing and streamlining scholarship management for university administrators.",
    longDescription:
      "A comprehensive, decoupled SaaS architecture built to handle complex user roles and secure cross-origin authentication. Features include automated Stripe subscription processing via robust webhooks, a custom real-time notification engine, and a scalable relational database schema managed through Prisma.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Stripe API",
      "Tailwind CSS",
    ],
    liveUrl: "https://frontend-scholar-track.vercel.app",
    githubUrl: "https://github.com/Rishad1404/frontend-scholar-track",
    image: "/projects/scholartrack.png", // Make sure to add a screenshot to your public/projects folder!
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Architecture",
    description:
      "A full-stack headless e-commerce solution with dynamic routing and advanced state management.",
    longDescription:
      "A high-performance digital storefront utilizing Server-Side Rendering (SSR) for optimal SEO. Features include a custom shopping cart context, integration with a headless CMS for inventory management, and a secure checkout flow.",
    techStack: ["React", "Node.js", "MongoDB", "Redux", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/project2.png",
    featured: true,
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    description:
      "A data visualization dashboard providing real-time metrics and filtering capabilities.",
    longDescription:
      "Designed to process and display complex datasets intuitively. Built with a focus on component reusability and fast rendering cycles, utilizing containerized microservices for backend data aggregation.",
    techStack: ["Next.js", "TypeScript", "Docker", "Prisma", "Shadcn UI"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/project3.png",
    featured: false, // Set to true if you want it prominent on the home page
  },
];
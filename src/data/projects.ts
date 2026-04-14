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
    title: "Project One",
    description:
      "A brief description of your first project. Update this later.",
    longDescription:
      "Detailed description of the project including what problems it solves and your role in building it.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/project1.png",
    featured: true,
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "A brief description of your second project. Update this later.",
    longDescription:
      "Detailed description of the project including what problems it solves and your role in building it.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/project2.png",
    featured: true,
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A brief description of your third project. Update this later.",
    longDescription:
      "Detailed description of the project including what problems it solves and your role in building it.",
    techStack: ["Next.js", "TypeScript", "Docker", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    image: "/projects/project3.png",
    featured: true,
  },
];
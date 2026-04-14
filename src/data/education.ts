export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  result: string;
  description: string;
  status: "ongoing" | "completed";
}

export const education: Education[] = [
  {
    id: 1,
    degree: "B.Sc. Engineering in CSE",
    institution:
      "Bangladesh Army University of Science and Technology (BAUST)",
    period: "2021 - Present",
    result: "Ongoing",
    description:
      "Studying Computer Science & Engineering with focus on software development, algorithms, and system design.",
    status: "ongoing",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Dinajpur Government College",
    period: "2018 - 2020",
    result: "GPA 5.00",
    description:
      "Science group. Achieved perfect GPA in higher secondary education.",
    status: "completed",
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Ranipur High School",
    period: "2016 - 2018",
    result: "GPA 5.00",
    description:
      "Science group. Achieved perfect GPA in secondary education.",
    status: "completed",
  },
];
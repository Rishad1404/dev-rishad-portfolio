import {
  SiDevdotto,
  SiStackoverflow,
  SiFacebook,
  SiInstagram,
  SiFiverr,
  SiUpwork,
  SiFreelancer,
} from "react-icons/si";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { IconType } from "react-icons";

export interface Social {
  name: string;
  url: string;
  icon: IconType;
  color: string;
}
export interface FreelanceProfile {
  name: string;
  url: string;
  icon: IconType;
  color: string;
  description: string;
  badge: string;
}

export const socials: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rishad-islam14/",
    icon: FaLinkedinIn,
    color: "#0A66C2",
  },
  {
    name: "Dev.to",
    url: "https://dev.to/rishad_islam",
    icon: SiDevdotto,
    color: "#0A0A0A",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/25929758/rishad-islam",
    icon: SiStackoverflow,
    color: "#F58025",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/rishad.islam.9250",
    icon: SiFacebook,
    color: "#1877F2",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rishadislaam",
    icon: SiInstagram,
    color: "#E4405F",
  },
  {
    name: "Github",
    url: "https://github.com/Rishad1404",
    icon: FaGithub,
    color: "#181717",
  },
];

export const freelanceProfiles: FreelanceProfile[] = [
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/s/EgB64oK",
    icon: SiFiverr,
    color: "#1DBF73",
    description: "Hire me on Fiverr for quick and quality deliveries.",
    badge: "Available",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~018ed5768eae4a1ad5",
    icon: SiUpwork,
    color: "#14A800",
    description: "Find my full profile and reviews on Upwork.",
    badge: "Available",
  },
  {
    name: "Freelancer",
    url: "https://www.freelancer.com/u/Rishad14",
    icon: SiFreelancer,
    color: "#29B2FE",
    description: "Connect with me on Freelancer.com.",
    badge: "Active",
  },
];

export const contactInfo = {
  email: "rishadislam2019@gmail.com",
  phone: "+8801302124098",
  location: "Dinajpur, Bangladesh",
};
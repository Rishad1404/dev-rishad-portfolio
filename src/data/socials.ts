import {
  SiDevdotto,
  SiStackoverflow,
  SiFacebook,
  SiInstagram,
} from "react-icons/si";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { IconType } from "react-icons";

export interface Social {
  name: string;
  url: string;
  icon: IconType;
  color: string;
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

export const contactInfo = {
  email: "rishadislam2019@gmail.com",
  phone: "+8801302124098",
  location: "Dinajpur, Bangladesh",
};
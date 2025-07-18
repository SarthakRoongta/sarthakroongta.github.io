import {
  backend,
  mobilealt,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  lingotranslate,
  mongodb,
  git,
  nl2,
  sql,
  threejs,
  startup,
  TKD,
  rutgers,
  arcangel,
  swift,
  target,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobilealt,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Co-Founder & Technology Officer",
    icon: startup,             
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: swift,
  },
  {
    name: "SQL",
    icon: sql
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Co Founder",
    company_name: "Arcangel",
    icon: arcangel,
    iconBg: "#3A9EA8",
    date: "May 2024 - Present",
    points: [
      "Won $50,000 “Rocket Mixer” pitch competition (NYC, Aug 2025) and secured an Antler accelerator due diligence round ($200,000 under discussion).",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Wrote the technical deck and live-demoed the product to 30+ VCs, helping secure initial prize funding.",
    ],
  },
  
  {
    title: "Undergraduate Research Assistant",
    company_name: "Rutgers Computer Science Department",
    icon: rutgers,
    iconBg: "#f9f9f9",
    date: "Jan 2024 - June 2024",
    points: [
      "Fine-tuned language models using OpenAI’s API to assist researchers in utilizing the Mathematica package xAct, empowering users to generate code the user needs without prior knowledge of the package or how to use it, making it accessible to users of differing skill levels.",
      "Adapted DeepMind’s AlphaGeometry code in a virtual Linux environment by updating packages and dependencies that no longer worked.",
      "Collaborated with students and professors from multiple universities to create new questions to feed to the AlphaGeometry model. ",
    ],
  },
  {
    title: "Senior Taekwondo Instructor",
    company_name: "Black K. Taekwondo",
    icon: TKD,
    iconBg: "#ffffff",
    date: "Jan 2022 - June 2023",
    points: [
      
      "Lead regular classes through warmups and stretching, as well as individually correcting students on form throughout classes.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Collaborating with Adapted teaching techniques to accommodate students of various ages and skill levels, ensuring apositive and eﬀective learning environment.",
    ],
  },
];

const projects = [
  {
    name: "Target-Stock-Bot",
    description:
      "Web application that enables users to login to a site and track certain items at target. The target items are stored, and when the item comes back online, the user is notified via email.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "swift",
        color: "orange-text-gradient",
      },
    ],
    image: target,
    source_code_link: "https://github.com/SarthakRoongta/target-stock-checker",
  },
  {
    name: "LingoTranslate",
    description:
      "Web application that lets users enter text, and instantly translate it into dozens of languages with AI assistance, and keep a searchable history of every translation for later reuse.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "translate-api",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "orange-text-gradient",
      },
    ],
    image: lingotranslate,
    source_code_link: "https://github.com/SarthakRoongta/LingoTranslate",
  },
  {
    name: "NL2SQL-Converter",
    description:
      "Takes english requests and converts them into SQL queries, then feeds those commands and queries the database. Allows users with minimal experience to use SQL commands.",
    tags: [
      {
        name: "postgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "spaCy",
        color: "pink-text-gradient",
      },
      {
        name: "ilab",
        color: "orange-text-gradient",
      },
    ],
    image: nl2,
    source_code_link: "https://github.com/SarthakRoongta/NL2SQL-Converter",
  },
];

export { services, technologies, experiences, projects };
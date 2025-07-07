import {
  mobile,
  backend,
  creator,
  mobilealt,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  sql,
  tripguide,
  threejs,
  startup,
  TKD,
  rutgers,
  arcangel,
  swift,
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
    title: "Co Founder",
    company_name: "Arcangel",
    icon: arcangel,
    iconBg: "#3A9EA8",
    date: "May 2024 - Present",
    points: [
      "Won $50,000 “Rocket Mixer” pitch competition (NYC, Aug 2024) and secured an Antler accelerator due diligence round ($200,000 under discussion).",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Wrote the technical deck and live-demoed the product to 30+ VCs, helping secure initial prize funding.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
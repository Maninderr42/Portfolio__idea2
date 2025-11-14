import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Angular.js",
    image: "Angular.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jsp",
    image: "jsp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jspt",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  }, 
  
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Alok290",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/alok-kumar-a84b061a9",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/alok_kumar_290?igsh=MXduNGh2NXdpNzgzYw==",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Spring Boot",
    image: "icons8-spring-boot-1052.png", 
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "kubernetes ",
    image: "kubernetes.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "jwt ",
    image: "jwt.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "microservices",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Restful API",
    image: "cloud-api.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "loadbalancer",
    image: "ts.png",
    width: 80,
    height: 80,
  },
   
  // {
  //   skill_name: "Next.js 14",
  //   image: "next.png",
  //   width: 80,
  //   height: 80,
  // },
] as const;

export const BACKEND_SKILL = [
 
  // {
  //   skill_name: "MongoDB",
  //   image: "mongodb.png",
  //   width: 40,
  //   height: 40,
  // },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Docker",
  //   image: "prisma.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "GitHub",
    image: "github.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

 
] as const;

export const OTHER_SKILL = [
  // {
  //   skill_name: "Go",
  //   image: "go.png",
  //   width: 60,
  //   height: 60,
  // },
] as const;

export const PROJECTS = [
  {
    title: "TripBuddy - Travel Microservices Platform",
    description:
      'Full-fledged trip platform with microservices. Create and manage trips, collaborate and share itineraries, book experiences, and handle payments. Includes user auth, notifications, and admin tools.',
    image: "/projects/project-1.png",
    link: "https://github.com/Alok290",
  },
  {
    title: "Renting Flats - Property Rental App",
    description:
      'End-to-end rental platform to list, search, and book flats. Features availability calendars, filters, secure bookings, landlord dashboard, and messaging between owners and tenants.',
    image: "/projects/project-2.png",
    link: "https://github.com/Alok290",
  },
  {
    title: "Employee Management System",
    description:
      'Enterprise EMS with employee profiles, roles & permissions, attendance, payroll-ready exports, analytics, and expiry/renewal tracking for IDs and documents.',
    image: "/projects/project-3.png",
    link: "https://github.com/Alok290",
  },
  {
    title: "BookMyShow Replica",
    description:
      'Ticketing clone with events catalog, seat selection, showtimes, cart/checkout, bookings history, and organizer tools. Focus on scalability and smooth UX.',
    image: "/projects/project-1.png",
    link: "https://github.com/Alok290",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Work",
    link: "#work-experience",
  },
  {
    title: "Contact Us",
    link: "#contact-us",
  },
] as const;

export const LINKS = {
  sourceCode: "",
};

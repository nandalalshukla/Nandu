import { ExpressJsIcon, Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Brain } from "lucide-react";
import { ReactLight } from "@/components/icons/svgs/reactLight";
import { NextjsIconDark } from "@/components/icons/svgs/nextjsIconDark";
import { Typescript } from "@/components/icons/svgs/typescript";
import { Nodejs } from "@/components/icons/svgs/nodejs";
import { Python } from "@/components/icons/svgs/python";
import { Postgresql } from "@/components/icons/svgs/postgresql";
import { Docker } from "@/components/icons/svgs/docker";
import { Kubernetes } from "@/components/icons/svgs/kubernetes";
import { Java } from "@/components/icons/svgs/java";
import { Csharp } from "@/components/icons/svgs/csharp";

export const DATA = {
  name: "Nandalal Shukla",
  initials: "NS",
  url: "https://nandalalshukla.com",
  location: "Greater Noida, India",
  locationLink: "https://www.google.com/maps/place/greater+noida",
  description:
    "Full-Stack Developer | Building production-grade web applications with React, Next.js, and Node.js and typescript. Turning ideas into products that users actually love.",
  summary:
    "Full Stack developer with 1+ years of experience in building production-grade projects. I contribute to Open Source, and regularly participate in hackathons and tech events. Beyond fullstack development, I am also passionate about community-driven technology, content creation and entrepreneurship.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: ExpressJsIcon },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Mongodb", icon: Icons.mongodb },
    { name: "Zustand", icon: Icons.zustand },
    { name: "React Query", icon: Icons.reactQuery },
    { name: "Prisma", icon: Icons.prisma },
    { name: "Tailwind CSS", icon: Icons.tailwindCss },
    { name: "React Hook Form", icon: Icons.reactHookForm },
    { name: "Zod", icon: Icons.zod },
    { name: "Firebase", icon: Icons.firebase },
    { name: "Supabase", icon: Icons.supabase },
    { name: "ESLint", icon: Icons.eslint },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Git", icon: Icons.git },
    { name: "GitHub", icon: Icons.github },
    { name: "Bash", icon: Icons.bash },
    { name: "Redis", icon: Icons.redis },
    { name: "AI Agents", icon: Brain },
    { name: "Vercel", icon: Icons.vercel },
    { name: "OpenAI", icon: Icons.openai },
    { name: "Figma", icon: Icons.figma },
    { name: "Postman", icon: Icons.postman },
    { name: "NPM", icon: Icons.npm },
    { name: "Bun", icon: Icons.bun },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shuklanandalal@gmail.com",
    tel: "+9778368234868",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nandalalshukla",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nandalalshukla",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/nandalal_shukla",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PASS The Excellence",
      href: "https://passtheexcellence.com",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/ptelogo2.png",
      start: "Jan 2025",
      end: "Present",
      work: "Single handedly Developed and deployed a full-stack educational platform with features including course enrollment, quizzes, contact forms, certificate generator etc. Built using React, Next.js, TypeScript, Tailwind CSS. Did the SEO and also created the google my business profile for the educational institute.",
      impact:
        "Drastically increased the institutes visibility on google searches by ranking the website in top 5 on google searches in its desired keyword. Simplified course enrollment, increased students engagement through quizzes and automated repititive tasks by creating internal tools",
      urls: ["https://passtheexcellence.com"],
    },
  ],
  education: [
    {
      school: "Sharda University",
      href: "https://sharda.ac.in",
      degree:
        "Bachelor of Technology (B.Tech) - Computer Science and Engineering",
      logoUrl: "/sharda.png",
      start: "2024",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Sharda Online Library",
      href: "https://notes-pyqssharda.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Full-stack web platform providing easy access to previous year questions (PYQs), notes, and syllabus for Sharda University students. Built with secure authentication, role-based authorization, file uploads, and a RAG-based AI chatbot for university-related queries.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Zod",
        "Multer",
        "Nodemailer",
        "Cloudinary",
        "Vercel",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://notes-pyqssharda.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "PASS The Excellence",
      href: "https://passtheexcellence.com",
      dates: "2024 - 2025",
      active: true,
      description:
        "Educational institute platform with features including course enrollment, contact forms, quizzes, and online study resources. Integrated Google Sheets using Apps Script for seamless data collection and management.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Nodemailer",
        "Google Sheets API",
        "Vercel",
        "Git",
        "GitHub",
      ],
      links: [
        {
          type: "Website",
          href: "https://passtheexcellence.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AuthHero",
      href: "https://www.npmjs.com/package/@nandalalshukla/auth-hero",
      dates: "2024",
      active: true,
      description:
        "NPM package with 300+ downloads. Ready-to-use authentication system with email/password signup, magic link verification, OAuth integration (Google, GitHub, Facebook), and multi-factor authentication using authenticator apps.",
      technologies: [
        "TypeScript",
        "Express.js",
        "Zod",
        "PostgreSQL",
        "Prisma",
        "OAuth",
        "NPM",
      ],
      links: [
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/@nandalalshukla/auth-hero",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathonsAndEvents: [
    {
      title: "NASA Space Apps Challenge",
      dates: "2022",
      location: "Global",
      description:
        "Built a website to educate people about habitable exoplanets and the possibility of life on them. Explored the cosmos through interactive visualization and data-driven insights.",
      image: "",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "2024",
      location: "India",
      description:
        "Developed a Resume-CV Matcher that helps HR teams easily filter the best candidates matching to their job descriptions from a large pool of candidates. Leveraging advanced matching algorithms for efficient recruitment.",
      image: "",
      links: [],
    },
    {
      title: "WICS Online Hackathon",
      dates: "2025",
      location: "Online",
      description:
        "Created Sharda Online Library, an online library platform for the university. Providing students with digital access to educational resources and research materials.",
      image: "",
      links: [],
    },
  ],
} as const;

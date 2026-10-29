import Link from "next/link";
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
import { JavascriptIcon } from "@/components/icons/tech";
// import { Csharp } from "@/components/icons/svgs/csharp";

const summaryLinkClassName =
  "underline underline-offset-4 transition-colors duration-200 hover:text-foreground cursor-pointer";

export const DATA = {
  name: "Nandalal Shukla",
  initials: "NS",
  url: "https://nandalalshukla.com.np",
  location: "Greater Noida, India",
  locationLink: "https://www.google.com/maps/place/greater+noida",
  description:
    "Full-Stack Developer passionate about building real-world, scalable web applications across frontend, backend, databases, and AI integrations.",
  summary: (
    <>
      <Link href="/work" className={summaryLinkClassName}>
        Full Stack developer with 1+ years of experience{" "}
      </Link>
      in building production-grade projects. I contribute to{" "}
      <Link href="/open-source" className={summaryLinkClassName}>
        Open Source
      </Link>
      , and regularly participate in{" "}
      <Link href="/hackathons" className={summaryLinkClassName}>
        hackathons and tech events
      </Link>
      . Beyond fullstack development, I am also passionate about{" "}
      <Link href="/projects" className={summaryLinkClassName}>
        community-driven technology
      </Link>
      ,{" "}
      <Link href="/content-creation" className={summaryLinkClassName}>
        content creation
      </Link>{" "}
      and{" "}
      <Link href="/projects" className={summaryLinkClassName}>
        entrepreneurship
      </Link>
      .
    </>
  ),
  avatarUrl: "/me.png",
  skills: [
    { name: "JavaScript", icon: JavascriptIcon },
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
    { name: "Drizzle", icon: Icons.drizzleOrm },
    { name: "FastAPI", icon: undefined },
    { name: "Vercel AI SDK", icon: Icons.vertexAi },
    { name: "Tailwind CSS", icon: Icons.tailwindCss },
    { name: "React Hook Form", icon: Icons.reactHookForm },
    { name: "Zod", icon: Icons.zod },
    { name: "Firebase", icon: Icons.firebase },
    { name: "Supabase", icon: Icons.supabase },
    { name: "ESLint", icon: Icons.eslint },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
    { name: "C", icon: undefined },
    { name: "SQL", icon: undefined },
    { name: "Azure", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Git", icon: Icons.git },
    { name: "GitHub", icon: Icons.github },
    { name: "GitHub Actions", icon: undefined },
    { name: "VS Code", icon: Icons.vscode },
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
    tel: "+9779817628971",
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
        url: "https://www.youtube.com/@nandalalshukla",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shuklanandalal@gmail.com",
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
      end: "Dec 2025",
      work: [
        "Built and deployed the institute's full-stack educational platform end-to-end as the sole developer.",
        "Implemented course enrollment, quizzes, contact forms, certificate generation, and internal workflow tools.",
        "Handled SEO improvements and set up the institute's Google Business presence to strengthen discoverability.",
      ],
      impact: [
        "Ranked the website in the top 5 Google results for its target keyword.",
        "Made student enrollment and inquiry flows simpler and faster to use.",
        "Improved engagement through quizzes and reduced repetitive manual work with internal tools.",
      ],
      tools: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Nodemailer",
        "Vercel",
        "Git",
        "GitHub",
      ],
      urls: [
        {
          label: "Website",
          href: "https://passtheexcellence.com",
        },
        {
          label: "Github",
          href: "https://github.com/nandalalshukla/passtheexcellence",
        },
      ],
    },
    {
      company: "Chem School",
      href: "https://chemschool.academy",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "",
      start: "Feb 2026",
      end: "Jun 2026",
      work: [
        "Built secure email/password and Google OAuth authentication with Better Auth and role-based access control for Admin, Tutor, and Student roles.",
        "Developed a custom admin panel and CMS for managing users, chemistry notes, chapters, blogs, and broadcast emails through Resend.",
        "Implemented a WordPress-style blog CMS with Tiptap, tutor booking, and role-specific dashboards for admins, tutors, and students.",
      ],
      impact: [],
      tools: [
        "Node.js",
        "TypeScript",
        "Better Auth",
        "Tiptap",
        "Resend",
        "PostgreSQL",
      ],
      urls: [
        {
          label: "Website",
          href: "https://chemschool.academy",
        },
      ],
    },
  ],
  education: [
    {
      school: "Sharda University",
      href: "https://sharda.ac.in",
      logoUrl: "/sharda.png",
      start: "2024",
      end: "Present",
      program: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science and Engineering",
      details: [
        "Pursuing Bachelor of Technology (B.Tech) in Computer Science and Engineering.",
        "Maintaining a cumulative CGPA of 9.5.",
      ],
      highlights: [
        "COMPEX Scholarship recipient, fully funded by the Embassy of India in Nepal based on academic excellence.",
      ],
    },
  ],
  projects: [
    {
      title: "Sharda Social",
      href: "https://sharda.social/",
      dates: "Featured project",
      active: true,
      description:
        "Social media platform and online library for Sharda University students. Students can create accounts, manage posts with CRUD operations, and share study materials. Reached 1,000+ unique visitors at peak with 200+ registered users.",
      technologies: [
        "Next.js",
        "Express.js",
        "MongoDB",
        "Cloudinary",
        "Resend",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://sharda.social/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "PhotoMatch AI",
      href: "https://photomatch.southeastasia.cloudapp.azure.com/",
      dates: "Featured project",
      active: true,
      description:
        "AI-powered photo search for large event albums: users upload a selfie to find their photos using InsightFace models and cosine-similarity vector search. Built with a TypeScript and Express.js backend, Next.js frontend, FastAPI services, PostgreSQL with pgvector, PgBoss, Cloudinary, and ONNX Runtime.",
      technologies: [
        "TypeScript",
        "Express.js",
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "pgvector",
        "PgBoss",
        "Cloudinary",
        "ONNX Runtime",
      ],
      links: [
        {
          type: "Website",
          href: "https://photomatch.southeastasia.cloudapp.azure.com/",
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
        "Ready-made authentication service built from scratch with email/password and OAuth authentication plus multi-factor authentication. Published on NPM with 500+ downloads.",
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
          icon: <Icons.npm className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/nandalalshukla/AuthHero",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://auth-hero-xi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "authhero.png",
      video: "",
    },
    {
      title: "Realtime Chess",
      href: "https://chess.nandalalshukla.com.np/",
      dates: "Featured project",
      active: true,
      description:
        "Realtime two-player chess application built with TypeScript, Express.js, and WebSockets.",
      technologies: ["TypeScript", "Express.js", "WebSockets"],
      links: [
        {
          type: "Website",
          href: "https://chess.nandalalshukla.com.np/",
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
      image: "/nasaspaceapps.jpeg",
      links: [
        {
          label: "NASA Space Apps Challenge",
          href: "https://www.spaceappschallenge.org/2023/find-a-team/creative-astrophiles/?tab=project",
        },
      ],
    },
    {
      title: "Smart India Hackathon",
      dates: "2024",
      location: "India",
      description:
        "Developed a Resume-CV Matcher that helps HR teams easily filter the best candidates matching to their job descriptions from a large pool of candidates. Leveraging advanced matching algorithms for efficient recruitment.",
      image: "/sih.jpg",
      links: [
        {
          label: "Website",
          href: "https://sih.gov.in/sih2025PS",
        },
      ],
    },
    {
      title: "WICS Online Hackathon",
      dates: "2025",
      location: "Online",
      description:
        "Created Sharda Online Library, an online library platform for the university. Providing students with digital access to educational resources and research materials.",
      image: "/wics.png",
      links: [
        {
          label: "Youtube",
          href: "https://youtu.be/gcgYS4RhYzs",
        },
      ],
    },
  ],
} as const;

import { Icons } from "@/components/icons";
import { Docker } from "@/components/ui/svgs/docker";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { FileTextIcon, HomeIcon, PhoneIcon } from "lucide-react";
import type { ReactNode } from "react";

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  mlh?: string;
  win?: string;
  icon?: string;
  links: {
    title: string;
    icon: ReactNode;
    href: string;
  }[];
};

export const DATA = {
  name: "U Shivakumar",
  initials: "US",
  url: "https://github.com/Shivakumarsullagaddi/portfolio_shivakuamar",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Bangalore,+Karnataka",
  description:
    "Computer Science student at PES University focused on agentic AI, applied machine learning, and practical automation systems.",
  summary:
    "I am pursuing a Bachelor of Technology in Computer Science at PES University and building across AI/ML, agentic systems, and automation. As a Research Intern at CDSAML, PES University, I work on Alzheimer's Disease classification from MRI scans using deep learning architectures such as VGG, ResNet, DenseNet, and EfficientNet-B2. I also serve as a Teaching Assistant for C and Python programming courses, where I create practical exercises and help students strengthen their problem-solving skills.",
  avatarUrl: "/ushivakumar.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "C", icon: Icons.c },
    { name: "JavaScript", icon: Icons.javascript },
    { name: "SQL", icon: Postgresql },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "Apps Script", icon: Icons.appsScript },
    { name: "Agentic AI", icon: Icons.agenticAi },
    { name: "LLMs", icon: Icons.llms },
    { name: "RAG", icon: Icons.rag },
    { name: "Vector Embeddings", icon: Icons.vectorEmbeddings },
    { name: "Git", icon: Icons.github },
    { name: "Docker", icon: Docker },
    { name: "GCP", icon: Icons.gcp },
    { name: "BigQuery", icon: Icons.bigQuery },
    { name: "MCP", icon: Icons.mcp },
    { name: "n8n", icon: Icons.n8n },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "shivakumarullagaddi855@gmail.com",
    tel: "+918884607380",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Shivakumarsullagaddi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ushivakumar",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:shivakumarullagaddi855@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Phone: {
        name: "Phone",
        url: "tel:+918884607380",
        icon: PhoneIcon,
        navbar: true,
      },
    },
  },
  work: [
    {
      company:
        "Center for Data Sciences and Applied Machine Learning (CDSAML), PES University",
      href: "https://pes.edu/",
      badges: [],
      location: "Bangalore, India",
      title: "Research Intern",
      logoUrl: "/pes-logo.png",
      start: "June 2020",
      end: "Present",
      description:
        "Developed Alzheimer's Disease classification using MRI scans from the ADNI dataset. Created YouTube tutorials on ADNI dataset access and preprocessing, compared VGG, ResNet, DenseNet, and EfficientNet-B2 for CN/MCI/AD classification, implemented CBAM with ResNet-34 and Squeeze-and-Excitation blocks with EfficientNet-B2, and achieved 92% accuracy.",
    },
    {
      company: "PES University",
      href: "https://pes.edu/",
      badges: [],
      location: "Bangalore, India",
      title: "Teaching Assistant - Problem Solving With Python",
      logoUrl: "/pes-logo.png",
      start: "Aug 2025",
      end: "Jan 2026",
      description:
        "Assisted 50+ students during lab sessions, provided one-on-one support for Python concepts, and guided students through problem-solving approaches to build logical thinking for coding challenges.",
    },
    {
      company: "PES University",
      href: "https://pes.edu/",
      badges: [],
      location: "Bangalore, India",
      title: "Teaching Assistant - Problem Solving With C",
      logoUrl: "/pes-logo.png",
      start: "Jan 2025",
      end: "May 2025",
      description:
        "Designed instructional slides, developed real-life application-based questions, and created practical programming exercises that connect theoretical concepts with real-world scenarios.",
    },
  ],
  education: [
    {
      school: "PES University",
      href: "https://pes.edu/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/pes-logo.png",
      start: "Sept 2023",
      end: "Sept 2027",
    },
  ],
  projects: [
    {
      title: "PES Mentor Student Management System",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Built an agentic AI-powered platform to help students discover mentors for academic guidance, research, and capstone projects. Enabled professor discovery with hybrid search, connected Google ADK tools to BigQuery for embedding-based retrieval, used MCP with Tavily for external data gathering and summarization, and deployed the application on Google Cloud.",
      technologies: [
        "Agentic AI",
        "Google ADK",
        "BigQuery",
        "MCP",
        "Tavily",
        "Google Cloud",
        "Vector Embeddings",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI Automation Systems",
      href: "",
      dates: "2025",
      active: true,
      description:
        "Developed an AI-powered Telegram shopping assistant with text and voice support for personalized product discovery. Integrated Groq API for audio transcription, built real-time product search workflows, and created a Gemini-powered news summarization system that sends structured technology updates through scheduled email newsletters.",
      technologies: [
        "n8n",
        "Telegram API",
        "Groq API",
        "Gemini API",
        "Automation",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as Hackathon[],
} as const;

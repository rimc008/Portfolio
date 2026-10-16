

export const personal = {
  name: "ROMAN CHAKRABORTY",
  tagline: "FULL-STACK DEVELOPER | AI ENGINEER",
  heroHeading: "Building Intelligent Products for the Web.",
  heroSubtext:
    "I'm a postgraduate computer applications student passionate about full-stack engineering and AI-powered applications. I build scalable web experiences and intelligent systems that solve practical problems.",
  email: "rikuc08@gmail.com",
  resumePath: "/cv/CV___2.pdf",
  social: {
    github: "https://github.com/rimc008",
    linkedin: "https://www.linkedin.com/in/romanchakraborty",
  },
};

export const about = {
  text: [
    "I bring a unique perspective shaped by a background in Physics and postgraduate studies in Computer Applications. I approach software with an analytical mindset, combining first-principles thinking with hands-on engineering.",
    "My focus spans full-stack development, backend engineering, RAG systems, LLM integration, semantic search, and building AI applications that are genuinely useful — not just impressive demos.",
    "I care about clean architecture, reliable systems, and solving real problems. Whether it's designing REST APIs, building retrieval pipelines with vector databases, or shipping a polished frontend, I work across the stack to turn ideas into working products.",
  ],
};

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Qdrant", "SQL"],
  },
  {
    category: "AI & LLM Engineering",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Semantic Retrieval",
      "Prompt Engineering",
      "LLM Integration",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "Postman"],
  },
];

export const projects = [
  {
    name: "YojanaAI",
    category: "AI-Powered Government Scheme Discovery",
    description:
      "An intelligent platform designed to help users discover relevant Indian government schemes through natural-language queries and personalized recommendations.",
    technologies: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "FastAPI",
      "MongoDB",
      "Qdrant",
      "LangChain",
      "LangGraph",
    ],
    features: [
      "Built YojanaAI, an AI-powered government scheme discovery platform that helps users find relevant Indian government schemes based on their needs, eligibility, and natural-language queries across 4,900+ schemes.",
      "Engineered an end-to-end RAG system that converts scheme data into 24,850+ vector embeddings in Qdrant and uses semantic retrieval with MMR to identify diverse, contextually relevant schemes instead of relying on keyword matching.",
      "Built a multimodel AI pipeline integrating 3 LLMs with LangChain and LangGraph, and developed the full-stack platform with Next.js, FastAPI, MongoDB, Qdrant, Docker, and REST APIs for eligibility filtering, scheme details, official application links, and AI-powered recommendations."

    ],
    github: "https://github.com/rimc008/YojanaAi",
    liveDemo: null,
    visual: "yojanaai",
  },
  {
    name: "RAGeniusAI",
    category: "Retrieval-Augmented Generation / AI Learning Workspace",
    description:
      "An AI-powered learning application that enables users to interact with PDF documents, generate summaries and notes, and create quizzes from their learning material.",
    technologies: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "MongoDB",
      "Qdrant",
      "LangChain",
      "Embeddings",
      "LLM Integration",
    ],
    features: [

      "Built a Retrieval-Augmented Generation pipeline for conversational PDF search, chunking documents and indexing embeddings in Qdrant, cutting re-reading of 10 to 100+ page documents down to a single query.",
      "Tested retrieval across 25+ PDFs and refined chunking to improve retrieval on multi-column documents.", 
      "Generated summaries and notes with Gemini and built quiz and PDF Q&A features with Grok.",
    ],
    github: "https://github.com/rimc008/Rag_project2",
    liveDemo: null,
    visual: "ragenius",
  },
  {
    name: "Ecommerce Application",
    category: "Full-Stack Web Application",
    description:
      "A full-stack ecommerce application with a responsive frontend, backend APIs, database integration, authentication, product management, and payment integration.",
    technologies: [
      "React",
      "Vite",
      "React Router",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Razorpay",
    ],
    features: [
      "Designed the MongoDB schema and REST API for product listings using MVC architecture, with category and price filtering, search, and browsing.",
      "Built a shopping cart with size selection, secured with JWT authentication, protected routes, and rate-limited login/signup.",
      "Integrated Razorpay in test mode with failed/pending payment handling, and built an admin dashboard for inventory and order management with low coupling and high cohesion.",

    ],
    github: "https://github.com/rimc008/Ecommerce",
    liveDemo: null,
    visual: "ecommerce",
  },
];

export const engineeringHighlights = [
  {
    title: "Full-Stack Engineering",
    description:
      "UI architecture, REST APIs, authentication, databases, and end-to-end integration across the stack.",
    icon: "Layers",
  },
  {
    title: "AI Application Engineering",
    description:
      "RAG pipelines, embeddings, vector databases, and LLM orchestration for practical AI-powered features.",
    icon: "BrainCircuit",
  },
  {
    title: "Practical Problem Solving",
    description:
      "Translating requirements into working applications — testing, debugging, and iterating until it ships.",
    icon: "Wrench",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Kalyani Government Engineering College / MAKAUT",
    cgpa: "8.26",
    period: "2024 — 2026",
  },
  {
    degree: "Bachelor of Science in Physics",
    institution: "University of Calcutta",
    cgpa: "7.87",
    period: "2020 — 2023",
  },
];

export const contact = {
  heading: "Have a problem worth solving?",
  subtext:
    "I'm open to software development internships, entry-level engineering opportunities, and projects involving full-stack development or AI applications.",
};

export const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ENGINEERING", href: "#engineering" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Mail, ArrowDown, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "@/lib/portfolio.config";

export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center px-6 pt-20 md:pt-30"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Soft glows */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-drift-slow rounded-full bg-cocoa-700/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 animate-drift-reverse rounded-full bg-cocoa-500/5 blur-[100px]" />

      <div className="relative z-10 flex flex-wrap gap-15 lg:gap-10 justify-center">
        {/* Left: text content */}
        <div className="w-[90vw] md:w-[35vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#3E2723] bg-cocoa-700/5 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cocoa-700" />
            <span className="font-mono text-xs tracking-wider text-cocoa-700">
              {personal.tagline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Building Intelligent{" "}
            <span className="text-gradient-cocoa">Products</span> for the Web.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {personal.heroSubtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "#projects")}
              className="inline-flex items-center gap-2 rounded-lg bg-cocoa-700 px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-cocoa-600 hover:glow-cocoa"
            >
              Explore My Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={personal.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border shadow-xl/30 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-[#3E2723] hover:text-cocoa-700"
            >
              <FileDown className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex items-center gap-3"
          >
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#6F4E37] text-cocoa-600 transition-all hover:border-[#3E2723] hover:text-cocoa-700"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#6F4E37] text-cocoa-600 transition-all hover:border-[#3E2723] hover:text-cocoa-700"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#6F4E37] text-cocoa-600 transition-all hover:border-[#3E2723] hover:text-cocoa-700"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Right: code visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-[90vw] md:w-[40vw]"
        >
          <CodeVisual />
        </motion.div>
      </div>
    </section>
  );
}





function CodeVisual() {
  const lines = [
    { n: "01", content: <><span className="text-[#d6a16f]">const</span> <span className="text-[#f3d5b5]">developer</span> = {"{"}</> },
    { n: "02", content: <>  <span className="text-[#d6a16f]">name</span>: <span className="text-[#b9c99a]">"Roman Chakraborty"</span>,</> },
    { n: "03", content: <>  <span className="text-[#d6a16f]">role</span>: <span className="text-[#b9c99a]">"Full-Stack & AI Developer"</span>,</> },
    { n: "04", content: <>  <span className="text-[#d6a16f]">skills</span>: {"{"}</> },
    { n: "05", content: <>    <span className="text-[#e9bc8c]">languages</span>: [<span className="text-[#b9c99a]">"JavaScript"</span>, <span className="text-[#b9c99a]">"Python"</span>],</> },
    { n: "06", content: <>    <span className="text-[#e9bc8c]">frontend</span>: [<span className="text-[#b9c99a]">"React"</span>, <span className="text-[#b9c99a]">"Next.js"</span>, <span className="text-[#b9c99a]">"Tailwind CSS"</span>],</> },
    { n: "07", content: <>    <span className="text-[#e9bc8c]">backend</span>: [<span className="text-[#b9c99a]">"Node.js"</span>, <span className="text-[#b9c99a]">"Express.js"</span>,</> },
    { n: "08", content: <>      <span className="text-[#b9c99a]">"FastAPI"</span>, <span className="text-[#b9c99a]">"REST APIs"</span>],</> },
    { n: "09", content: <>    <span className="text-[#e9bc8c]">databases</span>: [<span className="text-[#b9c99a]">"MongoDB"</span>, <span className="text-[#b9c99a]">"Qdrant"</span>, <span className="text-[#b9c99a]">"SQL"</span>],</> },
    { n: "10", content: <>    <span className="text-[#e9bc8c]">aiEngineering</span>: [</> },
    { n: "11", content: <>      <span className="text-[#b9c99a]">"LangChain"</span>, <span className="text-[#b9c99a]">"LangGraph"</span>, <span className="text-[#b9c99a]">"RAG"</span>,</> },
    { n: "12", content: <>      <span className="text-[#b9c99a]">"Embeddings"</span>, <span className="text-[#b9c99a]">"Vector Search"</span>,</> },
    { n: "13", content: <>      <span className="text-[#b9c99a]">"Semantic Retrieval"</span>,</> },
    { n: "14", content: <>      <span className="text-[#b9c99a]">"Prompt Engineering"</span>,</> },
    { n: "15", content: <>      <span className="text-[#b9c99a]">"LLM Integration"</span></> },
    { n: "16", content: <>    ],</> },
    { n: "17", content: <>    <span className="text-[#e9bc8c]">tools</span>: [<span className="text-[#b9c99a]">"Git"</span>, <span className="text-[#b9c99a]">"GitHub"</span>,</> },
    { n: "18", content: <>      <span className="text-[#b9c99a]">"Docker"</span>, <span className="text-[#b9c99a]">"Postman"</span>]</> },
    { n: "19", content: <>  {"}"}</> },
    { n: "20", content: <>{"}"};</> },
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Warm brown glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#9a6b46]/30 via-[#c49a6c]/15 to-[#6d4932]/25 blur-3xl" />

      {/* Editor window */}
      <div className="relative overflow-hidden rounded-2xl border border-[#b68b66]/35 bg-[#493123] shadow-2xl shadow-[#493123]/20">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#c5a080]/20 bg-[#5a3b29] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#d98270]" />
            <span className="h-3 w-3 rounded-full bg-[#e6b76c]" />
            <span className="h-3 w-3 rounded-full bg-[#9fb58b]" />
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-[#d1ad8b]/20 bg-[#432d21]/60 px-3 py-1.5">
            <span className="font-mono text-xs text-[#d6a16f]">JS</span>
            <span className="font-mono text-xs text-[#f0ddca]">
              developer.js
            </span>
          </div>

          <span className="font-mono text-[10px] text-[#d6b18b]">
            PROFILE
          </span>
        </div>

        {/* Skills code */}
        <div className="overflow-x-auto px-3 py-5 sm:px-5 sm:py-6">
          <div className="min-w-[510px] font-mono text-[11px] leading-7 sm:text-xs sm:leading-8">
            {lines.map((line) => (
              <div
                key={line.n}
                className="flex rounded-md transition-colors duration-200 hover:bg-[#f1d5b5]/[0.05]"
              >
                <span className="w-9 shrink-0 select-none pr-3 text-right text-[#a1846c]">
                  {line.n}
                </span>
                <pre className="whitespace-pre text-[#f0ddca]">
                  {line.content}
                </pre>
              </div>
            ))}

            <div className="mt-3 flex items-center gap-2 pl-9">
              <span className="text-[#d6a16f]">➜</span>
              <span className="text-[#c2a58b]">
                building what's next
              </span>
              <span className="inline-block h-4 w-1.5 animate-pulse rounded-sm bg-[#d6a16f]" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#c5a080]/20 bg-[#523727] px-4 py-3 sm:px-5">
          <div className="flex gap-3 text-[10px] text-[#d0b49a] sm:text-xs">
            <span>JavaScript</span>
            <span>Python</span>
            <span>AI / LLM</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-[#d9c2ab] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b9ce92]" />
            <span>Developer profile</span>
          </div>
        </div>
      </div>

      {/* Floating skill card */}
      <div className="absolute -bottom-5 -right-2 rounded-xl border border-[#b68b66]/40 bg-[#68462f] px-4 py-3 shadow-xl sm:-right-4">
        <p className="text-xs font-semibold text-[#f3dfcc]">
          Full-Stack + AI
        </p>
        <p className="mt-1 text-[10px] text-[#e0bd99]">
          Web development meets intelligence ✦
        </p>
      </div>
    </div>
  );
}


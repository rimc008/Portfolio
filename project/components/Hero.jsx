"use client";

import { motion } from "framer-motion";
import { Code2, BriefcaseBusiness, Mail, ArrowDown, FileDown } from "lucide-react";
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Soft glows */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-drift-slow rounded-full bg-cocoa-700/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 animate-drift-reverse rounded-full bg-cocoa-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 py-20 lg:grid-cols-[1.2fr_1fr]">
        {/* Left: text content */}
        <div>
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
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-[#3E2723] hover:text-cocoa-700"
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
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#6F4E37] text-muted-foreground transition-all hover:border-[#3E2723] hover:text-cocoa-700"
              aria-label="GitHub"
            >
              <Code2 className="h-5 w-5" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#6F4E37] text-muted-foreground transition-all hover:border-[#3E2723] hover:text-cocoa-700"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#6F4E37] text-muted-foreground transition-all hover:border-[#3E2723] hover:text-cocoa-700"
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
          className="hidden lg:block"
        >
          <CodeVisual />
        </motion.div>
      </div>
    </section>
  );
}

function CodeVisual() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-xl bg-cocoa-700/10 blur-2xl" />
      <div className="relative rounded-xl border border-border bg-card/80 backdrop-blur-sm">
        {/* Terminal header */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-green-500/70" />
          </div>
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            rag-pipeline.js
          </span>
        </div>

        {/* Code body */}
        <div className="overflow-hidden p-5 font-mono text-xs leading-relaxed">
          <pre className="text-muted-foreground">
            <span className="text-cocoa-700">const</span>{" "}
            <span className="text-cocoa-500">pipeline</span>{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-cocoa-700">async</span>{" "}
            <span className="text-muted-foreground">{"("}</span>
            <span className="text-orange-400">query</span>
            <span className="text-muted-foreground">{") => {"}</span>
          </pre>
          <pre className="pl-4 text-muted-foreground">
            <span className="text-cocoa-700">{"// "}1. Embed the query</span>
          </pre>
          <pre className="pl-4 text-muted-foreground">
            <span className="text-cocoa-500">{"const"}</span> embedding{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-cocoa-500">await</span> embed
            <span className="text-muted-foreground">(</span>
            <span className="text-orange-400">query</span>
            <span className="text-muted-foreground">);</span>
          </pre>
          <pre className="mt-2 pl-4 text-muted-foreground">
            <span className="text-cocoa-700">{"// "}2. Vector search</span>
          </pre>
          <pre className="pl-4 text-muted-foreground">
            <span className="text-cocoa-500">const</span> docs{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-cocoa-500">await</span> qdrant
            <span className="text-muted-foreground">.</span>
            <span className="text-cocoa-700">search</span>
            <span className="text-muted-foreground">(embedding);</span>
          </pre>
          <pre className="mt-2 pl-4 text-muted-foreground">
            <span className="text-cocoa-700">{"// "}3. Generate response</span>
          </pre>
          <pre className="pl-4 text-muted-foreground">
            <span className="text-cocoa-500">const</span> answer{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-cocoa-500">await</span> llm
            <span className="text-muted-foreground">.</span>
            <span className="text-cocoa-700">generate</span>
            <span className="text-muted-foreground">(docs);</span>
          </pre>
          <pre className="mt-2 text-muted-foreground">
            <span className="text-muted-foreground">{"  "}</span>
            <span className="text-cocoa-500">return</span> answer
            <span className="text-muted-foreground">;</span>
          </pre>
          <pre className="text-muted-foreground">
            <span className="text-muted-foreground">{"};"}</span>
          </pre>

          {/* Animated cursor */}
          <div className="mt-1 flex items-center gap-1 text-cocoa-700">
            <span className="text-muted-foreground">{">"}</span>
            <span className="inline-block h-3.5 w-2 animate-pulse bg-cocoa-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

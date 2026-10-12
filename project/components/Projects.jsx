"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";
import { projects, personal } from "@/lib/portfolio.config";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-10">
      <div className="absolute right-1/4 top-0 h-72 w-72 rounded-full bg-cocoa-700/5 blur-[120px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 — PROJECTS"
          title="Featured work"
          description="A selection of projects spanning full-stack engineering and AI-powered applications."
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl border border-[#3E2723] bg-linear-to-t from-[#D2B48C] to-[#A67C52] transition-all hover:border-cocoa-700/30"
    >
      <div
        className={`grid gap-0 lg:grid-cols-[1fr_1.1fr] ${
          isReversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Visual preview */}
        <div className="[direction:ltr]">
          <ProjectVisual type={project.visual} />
        </div>

        {/* Content */}
        <div className="[direction:ltr] flex flex-col justify-center p-6 sm:p-8">
          <div className="mb-3 font-mono text-s tracking-wider text-white">
            {project.category}
          </div>
          <h3 className="mb-3 text-2xl font-bold tracking-tight text-black">
            {project.name}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-white">
            {project.description}
          </p>

          {/* Features */}
          <ul className="mb-5 space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm font-bold text-[#3E2723]"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cocoa-700" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-cocoa-700 bg-[#3E2723] px-2.5 py-1 font-mono text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium bg-[#65432F] text-white transition-all hover:border-cocoa-700/50 hover:bg-white hover:text-[#65432F]"
            >
              <Code2 className="h-4 w-4" />
              View Code
            </a>
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cocoa-700 px-4 py-2 text-sm font-semibold text-background transition-all hover:bg-cocoa-600"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-border/50 px-4 py-2 text-sm font-medium text-muted-foreground/50">
                <ExternalLink className="h-4 w-4" />
                Demo coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

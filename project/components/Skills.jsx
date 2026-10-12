"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Languages,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/portfolio.config";

const iconMap = {
  Languages: Languages,
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
  "AI & LLM Engineering": BrainCircuit,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-10">
      <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-cocoa-700/5 blur-[100px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 — SKILLS"
          title="Technical stack"
          description="Technologies and tools I've used across full-stack and AI engineering projects."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => {
            const Icon = iconMap[group.category] || Code2;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-xl border border-[#3E2723] bg-card/40 p-6 transition-all hover:border-cocoa-700/30 hover:bg-card/60"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cocoa-700/10 transition-colors group-hover:bg-cocoa-600/20">
                    <Icon className="h-5 w-5 text-cocoa-700" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[#3E2723] bg-[#805A40] px-3 py-1.5 font-mono text-xs text-white transition-colors hover:bg-white hover:text-[#3E2723] hover:font-bold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

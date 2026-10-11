"use client";

import { motion } from "framer-motion";
import { Atom, Cpu, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { about } from "@/lib/portfolio.config";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl text-[#3E2723]">
        <SectionHeading eyebrow="01 — ABOUT" title="A bit about me" />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            {about.text.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <InfoCard
              icon={<GraduationCap className="h-5 w-5 text-cocoa-700" />}
              title="Education"
              value="MCA — Postgraduate"
            />
            <InfoCard
              icon={<Atom className="h-5 w-5 text-cocoa-700" />}
              title="Background"
              value="B.Sc. Physics"
            />
            <InfoCard
              icon={<Cpu className="h-5 w-5 text-cocoa-700" />}
              title="Focus"
              value="Full-Stack & AI Engineering"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-[#3E2723] bg-card/50 p-4 transition-colors hover:border-cocoa-700/30">
      <div className="flex h-10 w-10 shrink-0 items-center border border-[#3E2723] justify-center rounded-lg bg-cocoa-700/10">
        {icon}
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{title}</div>
        <div className="text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}

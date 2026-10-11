"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/portfolio.config";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="05 — EDUCATION"
          title="Academic background"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cocoa-700/40 via-cocoa-700/20 to-transparent" />

          <div className="space-y-6">
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-6 h-3 w-3 rounded-full border-2 border-cocoa-700 bg-background" />

                <div className="rounded-xl border border-[#A87950] bg-card/40 p-6 transition-all ">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cocoa-700/10">
                        <GraduationCap className="h-5 w-5 text-cocoa-700" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">
                          {item.degree}
                        </h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="rounded-md border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-[#3E2723]">
                        CGPA: {item.cgpa}
                      </span>
                      <span className="font-mono text-xs text-[#65432F]">
                        {item.period}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

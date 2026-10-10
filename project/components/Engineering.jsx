"use client";

import { motion } from "framer-motion";
import { Layers, BrainCircuit, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { engineeringHighlights } from "@/lib/portfolio.config";

const iconMap = {
  Layers,
  BrainCircuit,
  Wrench,
};

export default function Engineering() {
  return (
    <section id="engineering" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 — APPROACH"
          title="How I build"
          description="The three pillars that guide my engineering work across full-stack and AI projects."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {engineeringHighlights.map((item, i) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/40 p-6 transition-all hover:border-cocoa-700/30"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cocoa-700/5 blur-2xl transition-all group-hover:bg-cocoa-600/10" />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-cocoa-700/20 bg-cocoa-700/10">
                    <Icon className="h-6 w-6 text-cocoa-700" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 font-mono text-xs text-cocoa-700/40">
                  0{i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

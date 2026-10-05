"use client";

import { Compass, Hammer, Sparkles, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/FadeInView";

const now = [
  {
    icon: Hammer,
    color: "#4ade80",
    label: "Building",
    detail: "Personal AI projects and experiments with generative UI.",
  },
  {
    icon: Sparkles,
    color: "#a855f7",
    label: "Learning",
    detail: "Generative UI patterns and WebGL for interactive interfaces.",
  },
  {
    icon: Compass,
    color: "#60a5fa",
    label: "Exploring",
    detail: "Open source contributions and technical writing.",
  },
  {
    icon: UserCheck,
    color: "#fb923c",
    label: "Available",
    detail: "Open to new frontend engineering opportunities.",
  },
];

export default function NowPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="orb orb-purple pointer-events-none absolute -top-32 left-1/3"
        style={{ width: 400, height: 400, opacity: 0.22 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 py-16">
        <FadeInView>
          <div className="mb-4 flex items-center gap-3">
            <p className="text-accent-purple text-xs font-semibold tracking-[0.3em]">NOW</p>
            <span className="bg-accent-purple/50 h-px w-10" />
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl">
            What I&apos;m Doing <span className="text-gradient">Right Now.</span>
          </h1>
          <p className="text-muted mt-4 max-w-xl text-sm">
            A snapshot of what&apos;s taking up my attention right now, inspired by{" "}
            <a
              href="https://nownownow.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground underline"
            >
              the now page movement
            </a>
            .
          </p>
        </FadeInView>

        <div className="mt-10 space-y-4">
          {now.map((item, i) => (
            <FadeInView key={item.label} delay={i * 0.1} direction="left">
              <motion.div whileHover={{ x: 4 }} className="glass-card flex items-start gap-4 rounded-2xl p-5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${item.color}1a`, color: item.color }}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{item.label}</p>
                  <p className="text-muted mt-1 text-sm">{item.detail}</p>
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

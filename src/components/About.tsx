"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  BarChart3,
  Code2,
  Download,
  Infinity as InfinityIcon,
  Layers,
  Lightbulb,
  Users,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { FadeInView } from "@/components/FadeInView";
import { StatCounter } from "@/components/StatCounter";
import { CodeEditorCard } from "@/components/CodeEditorCard";

const features = [
  { icon: Code2, label: "Clean Code" },
  { icon: Lightbulb, label: "Creative Thinking" },
  { icon: Users, label: "User Focused" },
  { icon: BarChart3, label: "Continuous Learning" },
];

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: Layers, value: "30+", label: "Projects Delivered" },
  { icon: Users, value: "10+", label: "Happy Clients" },
  { icon: InfinityIcon, value: "Always", label: "Learning New Things" },
];

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="border-border relative overflow-hidden border-b">
      <div
        className="orb orb-purple pointer-events-none absolute -top-40 -left-40"
        style={{ width: 450, height: 450, opacity: 0.25 }}
        aria-hidden="true"
      />
      <div
        className="orb orb-pink pointer-events-none absolute -bottom-32 -right-32"
        style={{ width: 350, height: 350, opacity: 0.18 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FadeInView>
            <div className="mb-4 flex items-center gap-3">
              <p className="text-accent-purple text-xs font-semibold tracking-[0.3em]">
                01. ABOUT ME
              </p>
              <span className="bg-accent-purple/50 h-px w-10" />
            </div>
            <h2 className="max-w-xl text-4xl leading-tight font-bold sm:text-5xl">
              A Developer Who Cares About{" "}
              <span className="text-gradient">The Details.</span>
            </h2>
            <p className="text-muted mt-5 max-w-xl text-sm sm:text-base">
              I&apos;m Nethaji, a frontend engineer with 5+ years of experience building
              modern web applications. I enjoy turning complex problems into simple,
              beautiful and functional interfaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/resume.pdf"
                  className="bg-gradient-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 hover:shadow-[0_0_24px_rgba(168,85,247,0.5)]"
                >
                  Download Resume
                  <Download className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/#contact"
                  className="border-border hover:bg-surface inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition"
                >
                  Let&apos;s Talk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </FadeInView>

          <FadeInView direction="right" delay={0.15}>
            <CodeEditorCard />
          </FadeInView>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, label }, i) => (
            <FadeInView key={label} delay={i * 0.08}>
              <TiltCard className="glass-card flex h-full cursor-default flex-col items-center gap-3 rounded-2xl p-6 text-center">
                <span className="bg-accent-purple/10 text-accent-purple flex h-12 w-12 items-center justify-center rounded-full">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </TiltCard>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.15}>
          <div className="border-border glass-card mt-6 flex flex-col gap-8 rounded-2xl border p-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="bg-accent-purple/10 text-accent-purple flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold">
                      <StatCounter value={value} />
                    </p>
                    <p className="text-muted text-xs">{label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-border flex items-start gap-4 border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <Lightbulb className="text-accent-purple h-6 w-6 shrink-0" />
              <div>
                <p className="text-sm font-medium">
                  Good ideas build a brighter tomorrow.
                </p>
                <p className="text-muted mt-2 text-[10px] tracking-[0.25em] uppercase">
                  — Nethaji LP
                </p>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

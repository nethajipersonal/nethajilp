"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Download,
  GraduationCap,
  Rocket,
} from "lucide-react";
import {
  SiAngular,
  SiCss,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/FadeInView";
import { StatCounter } from "@/components/StatCounter";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "3+", label: "Countries Worked" },
];

const experience = [
  {
    icon: Rocket,
    role: "Frontend Engineer",
    period: "2021 — Present",
    description:
      "Building product interfaces with React, Next.js and TypeScript, focused on performance and accessibility.",
  },
  {
    icon: Briefcase,
    role: "Frontend Developer",
    period: "2019 — 2021",
    description: "Shipped design systems and customer-facing web applications for a growing product team.",
  },
  {
    icon: GraduationCap,
    role: "Started Frontend Journey",
    period: "2018 — 2019",
    description: "Learned the fundamentals of HTML, CSS and JavaScript and built my first real projects.",
  },
];

const stack = [
  {
    label: "FRONTEND",
    items: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiAngular, name: "Angular", color: "#DD0031" },
      { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
    ],
  },
  {
    label: "LANGUAGES",
    items: [
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss, name: "CSS3", color: "#1572B6" },
    ],
  },
  {
    label: "TOOLS",
    items: [
      { icon: SiGit, name: "Git", color: "#F05032" },
      { icon: SiGithub, name: "GitHub", color: "#ffffff" },
      { icon: SiFigma, name: "Figma", color: "#F24E1E" },
      { icon: VscVscode, name: "VS Code", color: "#007ACC" },
    ],
  },
  {
    label: "BACKEND",
    items: [
      { icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="orb orb-purple pointer-events-none absolute -top-40 -left-40"
        style={{ width: 500, height: 500, opacity: 0.3 }}
        aria-hidden="true"
      />
      <div
        className="orb orb-pink pointer-events-none absolute top-40 -right-40"
        style={{ width: 350, height: 350, opacity: 0.18 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <FadeInView>
            <div className="mb-4 flex items-center gap-3">
              <p className="text-accent-purple text-xs font-semibold tracking-[0.3em]">ABOUT ME</p>
              <span className="bg-accent-purple/50 h-px w-10" />
            </div>
            <h1 className="text-4xl leading-tight font-bold sm:text-5xl">
              A Developer Who Cares About <span className="text-gradient">The Details.</span>
            </h1>
            <p className="text-muted mt-6 max-w-lg">
              I&apos;m Nethaji, a frontend engineer with 5+ years of experience building modern
              web applications. I enjoy turning complex problems into simple, beautiful and
              functional interfaces — and I care as much about the details users never notice
              as the ones they do.
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
            <div className="relative mx-auto w-56 sm:w-64">
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.25) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div
                className="glass-card relative overflow-hidden rounded-2xl"
                style={{ aspectRatio: "1021 / 1188" }}
              >
                <Image
                  src="/hero-person.png"
                  alt="Nethaji LP"
                  width={1021}
                  height={1188}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeInView>
        </div>

        <FadeInView delay={0.1}>
          <div className="border-border glass-card mt-14 grid grid-cols-2 gap-6 rounded-2xl border p-7 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-shimmer">
                  <StatCounter value={value} />
                </p>
                <p className="text-muted mt-1 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </FadeInView>

        <div className="mt-20">
          <FadeInView>
            <div className="mb-4 flex items-center gap-3">
              <p className="text-accent-purple text-xs font-semibold tracking-[0.3em]">EXPERIENCE</p>
              <span className="bg-accent-purple/50 h-px w-10" />
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">Where I&apos;ve Worked.</h2>
          </FadeInView>

          <div className="mt-8 space-y-5">
            {experience.map((item, i) => (
              <FadeInView key={item.role} delay={i * 0.1} direction="left">
                <div className="glass-card flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-start">
                  <span className="bg-accent-purple/10 text-accent-purple flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold">{item.role}</h3>
                      <span className="text-muted text-xs">{item.period}</span>
                    </div>
                    <p className="text-muted mt-2 text-sm">{item.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>

        <div id="stack" className="mt-20 scroll-mt-24">
          <FadeInView>
            <div className="mb-4 flex items-center gap-3">
              <p className="text-accent-purple text-xs font-semibold tracking-[0.3em]">TECH STACK</p>
              <span className="bg-accent-purple/50 h-px w-10" />
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Tools I Use to <span className="text-gradient">Build the Web.</span>
            </h2>
          </FadeInView>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((category, ci) => (
              <FadeInView key={category.label} delay={ci * 0.1}>
                <div className="glass-card h-full rounded-2xl p-5">
                  <p className="text-accent-purple mb-4 text-xs font-semibold tracking-[0.2em]">
                    {category.label}
                  </p>
                  <div className="grid grid-cols-4 gap-3">
                    {category.items.map(({ icon: Icon, name, color }) => (
                      <motion.span
                        key={name}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="border-border bg-background flex h-10 w-10 items-center justify-center rounded-lg border"
                        title={name}
                      >
                        <Icon className="h-4 w-4" style={{ color }} />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>

        <FadeInView delay={0.1}>
          <div className="glass-card mt-20 flex flex-col items-center gap-5 rounded-2xl p-10 text-center">
            <span className="bg-accent-purple/10 text-accent-purple flex h-12 w-12 items-center justify-center rounded-full">
              <Code2 className="h-5 w-5" />
            </span>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Have a Project in <span className="text-gradient">Mind?</span>
            </h2>
            <p className="text-muted max-w-md text-sm">
              Let&apos;s talk about how I can help bring your idea to life.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#contact"
                className="bg-gradient-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 hover:shadow-[0_0_24px_rgba(168,85,247,0.5)]"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

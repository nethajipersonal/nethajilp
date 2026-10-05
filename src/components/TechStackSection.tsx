"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Code2, Database, ExternalLink, Globe, Layers, Lightbulb, Trophy, Users } from "lucide-react";
import { FloatingGeometry } from "@/components/FloatingGeometry";
import { FadeInView } from "@/components/FadeInView";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import {
  SiCss,
  SiDocker,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const categories = [
  {
    label: "FRONTEND",
    icon: Code2,
    description: "Building modern, responsive and performant user interfaces.",
    items: [
      { icon: SiReact,       name: "React",       color: "#61DAFB" },
      { icon: SiNextdotjs,   name: "Next.js",     color: "#ffffff" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
      { icon: SiMui,         name: "MUI",         color: "#007FFF" },
    ],
  },
  {
    label: "LANGUAGES",
    icon: Layers,
    description: "Writing clean, scalable and maintainable code.",
    items: [
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiHtml5,      name: "HTML5",      color: "#E34F26" },
      { icon: SiCss,        name: "CSS3",       color: "#1572B6" },
    ],
  },
  {
    label: "TOOLS & OTHERS",
    icon: Box,
    description: "Tools that make development easier and faster.",
    items: [
      { icon: SiGit,     name: "Git",     color: "#F05032" },
      { icon: SiGithub,  name: "GitHub",  color: "#ffffff" },
      { icon: VscVscode, name: "VS Code", color: "#007ACC" },
      { icon: SiDocker,  name: "Docker",  color: "#2496ED" },
    ],
  },
  {
    label: "BACKEND & DATABASE",
    icon: Database,
    description: "Powering applications with reliable backend technologies.",
    items: [
      { icon: SiNodedotjs, name: "Node.js",  color: "#5FA04E" },
      { icon: SiMongodb,   name: "MongoDB",  color: "#47A248" },
      { icon: SiMysql,     name: "MySQL",    color: "#4479A1" },
      { icon: SiFirebase,  name: "Firebase", color: "#FFCA28" },
    ],
  },
];

const stats = [
  { icon: Code2,  value: "30+", label: "Projects Delivered" },
  { icon: Users,  value: "10+", label: "Happy Clients" },
  { icon: Trophy, value: "5+",  label: "Years Experience" },
  { icon: Globe,  value: "3+",  label: "Countries Worked" },
];

function TechIconCard({ icon: Icon, name, color }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; name: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 400, damping: 25 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), spring);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.12 }}
      className="flex flex-col items-center gap-2 cursor-default"
    >
      <motion.span
        className="border-border bg-background flex h-11 w-11 items-center justify-center rounded-xl border transition-shadow"
        whileHover={{ boxShadow: `0 0 18px ${color}60, 0 0 6px ${color}40` }}
        title={name}
      >
        <Icon className="h-5 w-5" style={{ color }} />
      </motion.span>
      <span className="text-muted text-center text-[11px]">{name}</span>
    </motion.div>
  );
}

export function TechStackSection() {
  return (
    <section id="stack" className="border-border border-b">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <FadeInView>
          <div className="relative overflow-hidden rounded-2xl lg:h-[440px]">
            <Image
              src="/tech-stack.png"
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
            <div className="from-background via-background/80 to-background/10 absolute inset-0 bg-gradient-to-r" />

            <div className="relative px-6 py-16 sm:px-10 sm:py-20">
              <div className="mb-4 flex items-center gap-3">
                <p className="text-accent-purple text-xs font-semibold tracking-[0.3em]">
                  03. TECH STACK
                </p>
                <span className="bg-accent-purple/50 h-px w-10" />
              </div>
              <h2 className="max-w-2xl text-4xl leading-tight font-bold">
                Tools I Use to <span className="text-gradient">Build the Web.</span>
              </h2>
              <p className="text-muted mt-4 max-w-md text-sm">
                A combination of modern tools, frameworks and technologies to bring ideas to
                life.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/about#stack"
                    className="bg-gradient-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 hover:shadow-[0_0_24px_rgba(168,85,247,0.5)]"
                  >
                    Explore My Stack
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/work"
                    className="border-border hover:bg-surface-hover inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition"
                  >
                    View Projects
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Floating 3D torus */}
            <motion.div
              className="absolute hidden lg:block"
              style={{ left: "62%", top: "10%", zIndex: 2 }}
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <FloatingGeometry shape="torus" color="#a855f7" wireframe size={65} speed={0.8} />
            </motion.div>
          </div>
        </FadeInView>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, ci) => (
            <FadeInView key={category.label} delay={ci * 0.1}>
              <div className="glass-card rounded-2xl p-5 h-full">
                <div className="mb-4 flex items-start gap-3">
                  <span className="bg-accent-purple/10 text-accent-purple flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <category.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.15em]">{category.label}</p>
                    <p className="text-muted mt-1 text-[11px] leading-snug">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <TechIconCard key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.2}>
          <div className="border-border mt-6 flex flex-col gap-6 rounded-2xl border p-8 lg:flex-row lg:items-center lg:justify-between glass-card">
            <div className="flex items-center gap-4">
              <span className="bg-accent-purple/10 text-accent-purple flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                <Lightbulb className="h-5 w-5" />
              </span>
              <p className="max-w-xs text-sm font-medium">
                The right tools don&apos;t just make development faster, they make{" "}
                <span className="text-accent-purple">ideas go further.</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="bg-accent-purple/10 text-accent-purple flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-lg font-bold text-shimmer">{value}</p>
                    <p className="text-muted text-xs">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

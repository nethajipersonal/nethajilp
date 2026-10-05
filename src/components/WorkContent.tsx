"use client";

import Link from "next/link";
import { ArrowUpRight, Folder, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { FadeInView } from "@/components/FadeInView";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), spring);

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
    <FadeInView delay={(index % 3) * 0.1}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl"
      >
        <div className="from-accent-purple/15 to-accent-pink/10 relative flex h-32 items-center justify-center bg-gradient-to-br">
          <Folder className="text-accent-purple/40 h-12 w-12" />
          {project.featured && (
            <span className="bg-gradient-accent absolute top-4 right-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-white">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h2 className="group-hover:text-accent-purple font-semibold transition">{project.title}</h2>
          <p className="text-muted mt-2 flex-1 text-sm">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border-accent-purple/20 text-muted rounded-full border px-2.5 py-1 text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-accent-purple mt-5 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              Visit Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </motion.div>
    </FadeInView>
  );
}

export function WorkContent({ projects }: { projects: Project[] }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="orb orb-purple pointer-events-none absolute -top-40 -right-40"
        style={{ width: 450, height: 450, opacity: 0.25 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <FadeInView>
          <div className="mb-4 flex items-center gap-3">
            <p className="text-accent-purple text-xs font-semibold tracking-[0.3em]">WORK</p>
            <span className="bg-accent-purple/50 h-px w-10" />
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Projects I&apos;ve <span className="text-gradient">Designed & Built.</span>
          </h1>
          <p className="text-muted mt-4 max-w-lg text-sm">
            A collection of products and experiments — from client work to personal explorations.
          </p>
        </FadeInView>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

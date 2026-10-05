"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/icons/social";
import { MoonSphere } from "@/components/MoonSphere";
import { motion } from "framer-motion";

const techStack = [
  { label: "React", Icon: SiReact, bg: "#0b2530", fg: "#61DAFB" },
  { label: "WordPress", Icon: SiWordpress, bg: "#21759b", fg: "#ffffff" },
  { label: "Next.js", Icon: SiNextdotjs, bg: "#000000", fg: "#ffffff" },
  { label: "TypeScript", Icon: SiTypescript, bg: "#3178C6", fg: "#ffffff" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, bg: "#0b2530", fg: "#38BDF8" },
  { label: "JavaScript", Icon: SiJavascript, bg: "#F7DF1E", fg: "#111111" },
  { label: "HTML5", Icon: SiHtml5, bg: "#E34F26", fg: "#ffffff" },
  { label: "CSS3", Icon: SiCss, bg: "#1572B6", fg: "#ffffff" },
];

const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/nethajilp07/", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/nethajipersonal", label: "GitHub" },
  { icon: XIcon, href: "https://x.com/NethajiLalitha", label: "X" },
  { icon: InstagramIcon, href: "https://www.instagram.com/nethaji_lalitha/", label: "Instagram" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" as const },
  },
};

export function Hero() {
  return (
    <section id="top" className="border-border relative overflow-hidden border-b">
      {/* Background orbs */}
      <div
        className="orb orb-purple pointer-events-none absolute -top-40 -left-40"
        style={{ width: 500, height: 500, opacity: 0.35 }}
        aria-hidden="true"
      />
      <div
        className="orb orb-pink pointer-events-none absolute -right-20 -bottom-20"
        style={{ width: 350, height: 350, opacity: 0.2 }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pt-16 pb-0 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: intro copy */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.p
            variants={itemVariants}
            className="text-accent-purple mb-4 text-xs font-semibold tracking-[0.3em]"
          >
            FRONTEND ENGINEER
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl"
          >
            I BUILD
            <br />
            <span className="text-shimmer">DIGITAL</span>
            <br />
            EXPERIENCES
            <span className="cursor-blink bg-foreground ml-1 inline-block h-10 w-[3px] translate-y-1 align-middle sm:h-12" />
          </motion.h1>

          <motion.p variants={itemVariants} className="text-muted mt-6 max-w-md">
            Turning ideas into beautiful, scalable and high-performance web applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4"
          >
            {techStack.map(({ label, Icon, bg, fg }) => (
              <motion.span
                key={label}
                variants={badgeVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="border-border glass-card flex cursor-default items-center gap-2 rounded-xl border px-3 py-2 text-xs"
              >
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
                  style={{ background: bg }}
                >
                  <Icon className="h-3.5 w-3.5" style={{ color: fg }} />
                </span>
                {label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/work"
                className="bg-gradient-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 hover:shadow-[0_0_24px_rgba(168,85,247,0.5)]"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/blog"
                className="border-border hover:bg-surface inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition"
              >
                Read My Blog
                <BookOpen className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <p className="text-muted mb-3 text-xs font-semibold tracking-[0.3em]">
              LET&apos;S CONNECT
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-border text-muted hover:text-foreground hover:bg-surface hover:border-accent-purple/40 flex h-10 w-10 items-center justify-center rounded-full border transition"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: portrait + moon */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          {/* Glow ring behind portrait */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(168,85,247,0.2) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="relative overflow-hidden rounded-2xl bg-black"
            style={{ aspectRatio: "1021 / 1188" }}
          >
            <MoonSphere />
            <Image
              src="/hero-person.png"
              alt="Nethaji LP"
              width={1021}
              height={1188}
              priority
              className="pointer-events-none relative w-full"
            />
          </div>

          {/* Floating badge — top-right */}
          <motion.div
            className="glass absolute -top-4 -right-4 hidden rounded-2xl px-4 py-3 sm:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-accent-purple text-xs font-bold tracking-wider">
              5+ YEARS
            </p>
            <p className="text-muted text-[10px]">Frontend Experience</p>
          </motion.div>

          {/* Floating badge — bottom-left */}
          <motion.div
            className="glass absolute -bottom-4 -left-4 hidden rounded-2xl px-4 py-3 sm:block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <p className="text-accent-pink text-xs font-bold tracking-wider">
              30+ PROJECTS
            </p>
            <p className="text-muted text-[10px]">Delivered</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

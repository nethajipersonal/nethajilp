"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/FadeInView";
import { StatCounter } from "@/components/StatCounter";
import {
  ArrowRight,
  BarChart3,
  Code2,
  GraduationCap,
  Globe,
  Quote,
  Rocket,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// dotX/dotY traced pixel-exact from the actual rendered banner (object-cover crop of journey-bg.png)
const milestones = [
  { year: "2020",  icon: GraduationCap, title: "Started",        description: "Began my journey as a Frontend Developer.",                dotX: 6.5,  dotY: 98.0, labelAbove: true },
  { year: "2021",  icon: Code2,         title: "Learned & Built", description: "Worked on real projects, improved my skills.",              dotX: 26.0, dotY: 85.4 },
  { year: "2022",  icon: Users,         title: "Collaborated",    description: "Worked with amazing teams and clients.",                    dotX: 46.0, dotY: 78.3 },
  { year: "2023",  icon: Rocket,        title: "Scaled",          description: "Delivered complex applications with better performance.",   dotX: 57.0, dotY: 64.6 },
  { year: "2024",  icon: Target,        title: "Explored",        description: "Diversified into new technologies and architectures.",      dotX: 73.0, dotY: 58.6 },
  { year: "2025+", icon: BarChart3,     title: "Keep Growing",    description: "Building bigger ideas and creating more impact.",           dotX: 80.0, dotY: 43.0 },
];

const stats = [
  { icon: Code2,  value: "30+", label: "Projects Delivered" },
  { icon: Users,  value: "10+", label: "Happy Clients" },
  { icon: Trophy, value: "5+",  label: "Years Experience" },
  { icon: Globe,  value: "3+",  label: "Countries Worked" },
];

export function Journey() {
  const cardRef  = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <section id="journey" className="border-border border-b">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div ref={cardRef} className="relative overflow-hidden rounded-2xl" style={{ height: "clamp(400px, 50vw, 650px)" }}>
          <Image src="/journey-bg.png" alt="Mountain journey" fill priority className="absolute inset-0 object-cover object-center" sizes="(min-width:1280px) 1280px, 100vw" />

          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 32%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 45%)" }} />

          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="absolute"
                style={{ left: `${m.dotX}%`, top: `${m.dotY}%` }}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.55, delay: 0.65 + i * 0.15, ease: "easeOut" }}
              >
                {/* dot, pinned exactly on the traced path point regardless of label content */}
                <motion.span
                  className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full bg-[#a855f7]"
                  animate={{ boxShadow: ["0 0 6px 2px rgba(168,85,247,0.4)", "0 0 16px 6px rgba(168,85,247,0.7)", "0 0 6px 2px rgba(168,85,247,0.4)"] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.35 }}
                />

                {m.labelAbove ? (
                  <>
                    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col-reverse items-center">
                      <div className="mb-1 h-6 w-px bg-white/30" />
                      <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-[#a855f7] backdrop-blur-sm ring-1 ring-white/10">
                        <m.icon className="h-4 w-4" />
                      </span>
                      <div className="mb-2 w-[120px] text-center">
                        <p className="text-[11px] font-semibold leading-snug text-white" style={{ textShadow: "0 1px 6px rgba(0,0,0,1)" }}>{m.title}</p>
                        <p className="mt-0.5 text-[9.5px] leading-snug text-gray-300" style={{ textShadow: "0 1px 4px rgba(0,0,0,1)" }}>{m.description}</p>
                      </div>
                    </div>
                    <p className="absolute top-2 left-1/2 -translate-x-1/2 text-[11px] font-bold leading-none whitespace-nowrap text-white" style={{ textShadow: "0 1px 8px rgba(0,0,0,1)" }}>{m.year}</p>
                  </>
                ) : (
                  <>
                    <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] font-bold leading-none whitespace-nowrap text-white" style={{ textShadow: "0 1px 8px rgba(0,0,0,1)" }}>{m.year}</p>
                    <div className="absolute top-2 left-1/2 flex -translate-x-1/2 flex-col items-center">
                      <div className="h-6 w-px bg-white/30" />
                      <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-[#a855f7] backdrop-blur-sm ring-1 ring-white/10">
                        <m.icon className="h-4 w-4" />
                      </span>
                      <div className="mt-2 w-[120px] text-center">
                        <p className="text-[11px] font-semibold leading-snug text-white" style={{ textShadow: "0 1px 6px rgba(0,0,0,1)" }}>{m.title}</p>
                        <p className="mt-0.5 text-[9.5px] leading-snug text-gray-300" style={{ textShadow: "0 1px 4px rgba(0,0,0,1)" }}>{m.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          <FadeInView>
            <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16 lg:max-w-[40%]">
              <div className="mb-4 flex items-center gap-3">
                <p className="text-[#a855f7] text-xs font-semibold tracking-[0.3em]">02. MY JOURNEY</p>
                <span className="h-px w-10 bg-[#a855f7]/50" />
              </div>
              <h2 className="text-3xl font-bold leading-snug text-white sm:text-4xl">
                A Journey of <span className="text-gradient">Learning, Building</span><br />and Growing.
              </h2>
              <p className="mt-4 max-w-xs text-sm text-gray-300">Every project, every challenge and every experience has shaped who I am today.</p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="mt-7 inline-block">
                <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#6d28d9] hover:shadow-[0_0_24px_rgba(124,58,237,0.6)]">
                  View Full Journey <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </FadeInView>

          <span
            className="pointer-events-none absolute top-10 right-10 hidden rotate-[-4deg] text-2xl font-bold leading-snug text-white/75 lg:block"
            style={{ fontFamily: "var(--font-caveat), cursive", textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
            aria-hidden="true"
          >
            Progress<br />Creates<br />Possibilities
          </span>
        </div>

        <div className="mt-10 space-y-7 lg:hidden">
          {milestones.map((m, i) => (
            <motion.div key={m.year} className="flex gap-4" initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "0px 0px -40px 0px" }} transition={{ duration: 0.5, delay: 0.05 }}>
              <div className="flex flex-col items-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#a855f7]/10 text-[#a855f7]"><m.icon className="h-5 w-5" /></span>
                <div className="mt-2 w-px flex-1 bg-white/10" />
              </div>
              <div className="pb-2 pt-1">
                <p className="text-xs font-bold text-[#a855f7]">{m.year}</p>
                <p className="mt-1 text-sm font-semibold">{m.title}</p>
                <p className="text-muted mt-0.5 text-xs">{m.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeInView delay={0.15}>
          <div className="border-border glass-card mt-6 flex flex-col gap-8 rounded-2xl border p-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#a855f7]/10 text-[#a855f7]"><Icon className="h-5 w-5" /></span>
                  <div>
                    <p className="font-bold"><StatCounter value={value} /></p>
                    <p className="text-muted text-xs">{label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-border flex items-start gap-4 border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <Quote className="h-6 w-6 shrink-0 text-[#a855f7]" />
              <div>
                <p className="text-sm font-medium">A little progress each day adds up to big results.</p>
                <p className="text-muted mt-2 text-[10px] tracking-[0.25em] uppercase">— Nethaji LP</p>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

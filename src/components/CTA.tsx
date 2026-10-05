"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  ExternalLink,
  Lightbulb,
  MapPin,
  MessageCircle,
  Send,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { FadeInView } from "@/components/FadeInView";
import { MailIcon, LinkedinIcon } from "@/components/icons/social";

const contactMethods = [
  {
    icon: MailIcon,
    label: "Email Me",
    value: "nethajilp@gmail.com",
    href: "mailto:nethajilp@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Let's connect",
    href: "https://www.linkedin.com/in/nethajilp07/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: null,
  },
];

const availability = [
  { icon: MessageCircle, text: "Open to Freelance Projects" },
  { icon: Users, text: "Interested in Full-time Opportunities" },
  { icon: Lightbulb, text: "Happy to Collaborate on Ideas" },
  { icon: Code2, text: "Always Excited to Work on New Challenges" },
];

export function CTA() {
  return (
    <section id="contact" className="border-border relative overflow-hidden border-b">
      <div
        className="orb orb-purple pointer-events-none absolute -top-32 left-1/4"
        style={{ width: 500, height: 400, opacity: 0.22 }}
        aria-hidden="true"
      />
      <div
        className="orb orb-pink pointer-events-none absolute -bottom-20 -right-20"
        style={{ width: 300, height: 300, opacity: 0.18 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: intro + contact methods + photo */}
          <FadeInView>
            <div className="mb-4 flex items-center gap-3">
              <p className="text-accent-purple text-xs font-semibold tracking-[0.3em]">04. CONTACT</p>
              <span className="bg-accent-purple/50 h-px w-10" />
            </div>
            <h2 className="text-4xl leading-tight font-bold sm:text-5xl">
              Let&apos;s Create Something Amazing{" "}
              <span className="text-gradient">Together.</span>
            </h2>
            <p className="text-muted mt-5 max-w-md text-sm sm:text-base">
              Have a project in mind, a question, or just want to say hi? I&apos;d love to hear
              from you. Let&apos;s build something great together.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {contactMethods.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="glass-card group flex h-full items-center gap-3 rounded-xl p-4">
                    <span className="bg-accent-purple/10 text-accent-purple flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold">{label}</p>
                      <p className="text-muted truncate text-[11px]">{value}</p>
                    </div>
                    {href && (
                      <ExternalLink className="text-muted group-hover:text-accent-purple h-3.5 w-3.5 shrink-0 transition" />
                    )}
                  </div>
                );
                return href ? (
                  <Link key={label} href={href} target="_blank" rel="noreferrer">
                    {content}
                  </Link>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>

            <div className="relative mt-8 overflow-hidden rounded-2xl" style={{ height: "280px" }}>
              <Image
                src="/tech-stack.png"
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }}
              />
            </div>
          </FadeInView>

          {/* Right: form card */}
          <FadeInView direction="right" delay={0.1}>
            <div className="glass-card relative rounded-2xl p-8">
              <div className="border-border mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5">
                <motion.span
                  className="h-2 w-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-xs font-medium">I usually reply within 24 hours</span>
              </div>

              <h3 className="text-2xl font-bold">
                Send Me a <span className="text-gradient">Message</span>
              </h3>
              <p className="text-muted mt-2 text-sm">
                Fill out the form and I&apos;ll get back to you as soon as possible.
              </p>

              <ContactForm />
            </div>
          </FadeInView>
        </div>

        {/* decorative paper plane + handwritten note, tucked in the outer margin */}
        <div className="pointer-events-none absolute top-16 right-4 hidden flex-col items-end gap-3 2xl:flex" aria-hidden="true">
          <motion.span
            className="text-accent-purple drop-shadow-[0_0_16px_rgba(168,85,247,0.6)]"
            animate={{ y: [0, -10, 0], rotate: [-12, -4, -12] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Send className="h-9 w-9" fill="currentColor" />
          </motion.span>
          <span className="font-handwritten text-accent-purple -rotate-6 text-xl leading-tight">
            Let&apos;s<br />Build<br />Together
          </span>
        </div>

        <FadeInView delay={0.2}>
          <div className="border-border glass-card mt-10 grid gap-5 rounded-2xl border p-6 sm:grid-cols-2 lg:grid-cols-4">
            {availability.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="bg-accent-purple/10 text-accent-purple flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium">{text}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/icons/social";

const links = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/nethajilp07/", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/nethajipersonal", label: "GitHub" },
  { icon: XIcon, href: "https://x.com/NethajiLalitha", label: "X" },
  { icon: InstagramIcon, href: "https://www.instagram.com/nethaji_lalitha/", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-border relative mt-auto overflow-hidden border-t">
      <div
        className="orb orb-purple pointer-events-none absolute -bottom-32 left-1/4"
        style={{ width: 350, height: 250, opacity: 0.15 }}
        aria-hidden="true"
      />
      <div
        className="orb orb-pink pointer-events-none absolute -bottom-24 right-1/4"
        style={{ width: 280, height: 200, opacity: 0.12 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/#top" className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest">
            <Image src="/logo-mark.png" alt="" width={28} height={29} className="h-6 w-auto" />
            NETHAJI LP
          </Link>
          <p className="text-muted mt-1 text-xs">Frontend Engineer — building digital experiences.</p>
        </div>

        <nav className="text-muted flex flex-wrap gap-6 text-sm">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-foreground transition">
              {link.label}
            </Link>
          ))}
        </nav>

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
              className="border-border text-muted hover:text-foreground hover:bg-surface hover:border-accent-purple/40 flex h-9 w-9 items-center justify-center rounded-full border transition"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          ))}
          <motion.a
            href="#top"
            aria-label="Back to top"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-accent ml-1 flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.a>
        </div>
      </div>

      <p className="border-border text-muted relative border-t py-4 text-center text-xs">
        © {new Date().getFullYear()} Nethaji LP. All rights reserved.
      </p>
    </footer>
  );
}

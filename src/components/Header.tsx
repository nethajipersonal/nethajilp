"use client";

import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navItems = [
  { label: "Home",    href: "/#top",     match: "/" },
  { label: "About",   href: "/#about",   match: "/about" },
  { label: "Work",    href: "/work",     match: "/work" },
  { label: "Blog",    href: "/blog",     match: "/blog" },
  { label: "Contact", href: "/#contact", match: "" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <header
        className={`border-border sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-background/60 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/#top" className="flex items-center gap-2.5 leading-tight" onClick={() => setMenuOpen(false)}>
            <motion.span whileHover={{ scale: 1.08, rotate: -4 }} transition={{ duration: 0.2 }}>
              <Image src="/logo-mark.png" alt="" width={32} height={33} className="h-8 w-auto" priority />
            </motion.span>
            <span>
              <motion.span
                className="block text-sm font-semibold tracking-widest"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                NETHAJI LP
              </motion.span>
              <span className="text-muted text-[10px] tracking-[0.25em]">
                FRONTEND ENGINEER
              </span>
            </span>
          </Link>

          <nav className="text-muted hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => {
              const isActive = item.match !== "" && pathname === item.match;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative hover:text-foreground pb-1 transition group ${
                    isActive ? "text-foreground" : ""
                  }`}
                >
                  {item.label}
                  {/* Animated underline */}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="bg-accent-purple absolute bottom-0 left-0 h-px w-full"
                    />
                  ) : (
                    <span className="bg-muted/50 absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/resume.pdf"
                className="bg-gradient-accent hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] sm:inline-flex"
              >
                Download Resume
                <Download className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
            <motion.button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              whileTap={{ scale: 0.9 }}
              className="border-border hover:bg-surface flex h-9 w-9 items-center justify-center rounded-full border transition md:hidden"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="border-border bg-background flex flex-col gap-1 border-t px-6 py-4 text-sm overflow-hidden md:hidden"
            >
              {navItems.map((item, i) => {
                const isActive = item.match !== "" && pathname === item.match;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-lg px-3 py-2.5 transition ${
                        isActive
                          ? "bg-surface text-foreground"
                          : "text-muted hover:bg-surface hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/FadeInView";
import type { Post } from "@/types";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function BlogContent({ posts }: { posts: Post[] }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="orb orb-pink pointer-events-none absolute -top-40 -left-40"
        style={{ width: 450, height: 450, opacity: 0.22 }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <FadeInView>
          <div className="mb-4 flex items-center gap-3">
            <p className="text-accent-purple text-xs font-semibold tracking-[0.3em]">BLOG</p>
            <span className="bg-accent-purple/50 h-px w-10" />
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Writing on <span className="text-gradient">Frontend & Growth.</span>
          </h1>
          <p className="text-muted mt-4 max-w-lg text-sm">
            Notes on frontend engineering, performance and the lessons that stuck.
          </p>
        </FadeInView>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <FadeInView key={post.id} delay={(i % 3) * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl"
                >
                  <div className="from-accent-purple/15 to-accent-pink/10 flex h-28 items-center justify-center bg-gradient-to-br">
                    <FileText className="text-accent-purple/40 h-10 w-10" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="text-muted flex items-center gap-4 text-xs">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(post.publishedAt)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime} min read
                      </span>
                    </div>
                    <h2 className="group-hover:text-accent-purple mt-3 leading-snug font-semibold transition">
                      {post.title}
                    </h2>
                    <p className="text-muted mt-2 flex-1 text-sm">{post.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border-accent-purple/20 text-muted rounded-full border px-2.5 py-1 text-[11px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-accent-purple mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
                      Read Article
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

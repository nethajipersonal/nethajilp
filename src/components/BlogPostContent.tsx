"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/FadeInView";
import type { Post } from "@/types";

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function BlogPostContent({ post }: { post: Post }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="orb orb-purple pointer-events-none absolute -top-40 -right-40"
        style={{ width: 400, height: 400, opacity: 0.2 }}
        aria-hidden="true"
      />

      <article className="relative mx-auto max-w-3xl px-6 py-16">
        <motion.div whileHover={{ x: -2 }} className="inline-block">
          <Link
            href="/blog"
            className="text-muted hover:text-foreground inline-flex items-center gap-1.5 text-sm transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Blog
          </Link>
        </motion.div>

        <FadeInView delay={0.05}>
          <div className="text-muted mt-6 flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} min read
            </span>
          </div>

          <h1 className="mt-3 text-3xl leading-tight font-bold sm:text-4xl">{post.title}</h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border-accent-purple/20 text-accent-purple rounded-full border px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="glass-card text-muted mt-10 max-w-none space-y-4 rounded-2xl p-7 leading-relaxed">
            <p>{post.content || post.excerpt}</p>
          </div>
        </FadeInView>
      </article>
    </section>
  );
}

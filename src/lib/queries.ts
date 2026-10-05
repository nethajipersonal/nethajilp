import type { WithId } from "mongodb";
import { prisma } from "@/lib/prisma";
import { getBlogDb } from "@/lib/mongodb";
import { fallbackPosts, fallbackProjects } from "@/lib/fallback-data";
import type { Post, Project } from "@/types";

type PostDocument = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string | null;
  tags?: string[];
  readTime?: number;
  published: boolean;
  publishedAt: Date;
};

/**
 * Falls back to static content when the database isn't configured yet, or the
 * collection/table is empty, so the site works before and after it's connected.
 */
export async function getProjects(): Promise<Project[]> {
  if (!process.env.DATABASE_URL) return fallbackProjects;

  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
    });
    return projects.length > 0 ? projects : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    const db = await getBlogDb();
    if (!db) return fallbackPosts;

    const docs = await db
      .collection<PostDocument>("posts")
      .find({ published: true })
      .sort({ publishedAt: -1 })
      .toArray();
    if (docs.length === 0) return fallbackPosts;

    return docs.map(toPost);
  } catch {
    return fallbackPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const db = await getBlogDb();
    if (!db) return fallbackPosts.find((post) => post.slug === slug) ?? null;

    const doc = await db.collection<PostDocument>("posts").findOne({ slug });
    return doc ? toPost(doc) : (fallbackPosts.find((p) => p.slug === slug) ?? null);
  } catch {
    return fallbackPosts.find((post) => post.slug === slug) ?? null;
  }
}

function toPost(doc: WithId<PostDocument>): Post {
  return {
    id: doc._id.toString(),
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    content: doc.content,
    coverImage: doc.coverImage ?? null,
    tags: doc.tags ?? [],
    readTime: doc.readTime ?? 5,
    publishedAt: doc.publishedAt,
  };
}

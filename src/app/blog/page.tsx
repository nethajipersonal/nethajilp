import type { Metadata } from "next";
import { getPosts } from "@/lib/queries";
import { BlogContent } from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Blog | Nethaji LP",
  description: "Writing on frontend engineering, performance and career growth.",
};

export default async function BlogPage() {
  const posts = await getPosts();
  return <BlogContent posts={posts} />;
}

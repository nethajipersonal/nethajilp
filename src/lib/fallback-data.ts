import type { Post, Project } from "@/types";

/**
 * Shown when the database has no rows yet (e.g. fresh deploy before `db:seed`
 * has been run). Keeps the site fully functional without a DB connection.
 */
export const fallbackProjects: Project[] = [
  {
    id: "ai-productivity-platform",
    title: "AI Productivity Platform",
    description:
      "A modern AI-powered productivity tool to organize work, ideas and teams.",
    image: null,
    tags: ["Next.js", "TypeScript", "OpenAI"],
    link: null,
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-featured storefront with cart, checkout and admin dashboard.",
    image: null,
    tags: ["React", "Node.js"],
    link: null,
    featured: false,
  },
  {
    id: "design-system",
    title: "Design System",
    description: "A reusable component library and design language for product teams.",
    image: null,
    tags: ["Angular", "Storybook"],
    link: null,
    featured: false,
  },
];

export const fallbackPosts: Post[] = [
  {
    id: "1",
    slug: "how-i-structure-large-react-applications",
    title: "How I Structure Large React Applications",
    excerpt:
      "Patterns and folder structures that keep large React codebases maintainable as they grow.",
    content: "",
    coverImage: null,
    tags: ["React", "Architecture", "Best Practices"],
    readTime: 8,
    publishedAt: new Date("2026-08-20"),
  },
  {
    id: "2",
    slug: "frontend-performance-that-actually-matters",
    title: "Frontend Performance That Actually Matters",
    excerpt:
      "Cutting through the noise on web performance to focus on the metrics users actually feel.",
    content: "",
    coverImage: null,
    tags: ["Performance", "Web Vitals", "Optimization"],
    readTime: 6,
    publishedAt: new Date("2026-08-15"),
  },
  {
    id: "3",
    slug: "what-5-years-of-frontend-taught-me",
    title: "What 5 Years of Frontend Taught Me",
    excerpt:
      "Lessons on career growth, technical depth and staying curious as a frontend engineer.",
    content: "",
    coverImage: null,
    tags: ["Career", "Growth", "Lessons"],
    readTime: 5,
    publishedAt: new Date("2026-08-10"),
  },
  {
    id: "4",
    slug: "building-a-developer-mindset",
    title: "Building a Developer Mindset",
    excerpt:
      "Why the way you think about problems matters more than the tools you use to solve them.",
    content: "",
    coverImage: null,
    tags: ["Productivity", "Mindset", "Life"],
    readTime: 4,
    publishedAt: new Date("2026-08-05"),
  },
];

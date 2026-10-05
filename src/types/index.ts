export type Project = {
  id: string;
  title: string;
  description: string;
  image: string | null;
  tags: string[];
  link: string | null;
  featured: boolean;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  tags: string[];
  readTime: number;
  publishedAt: Date;
};

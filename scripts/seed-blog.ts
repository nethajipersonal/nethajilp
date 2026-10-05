import "dotenv/config";
import { MongoClient } from "mongodb";
import { fallbackPosts } from "../src/lib/fallback-data";

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set. Add it to .env first.");
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("portfolio");
  const posts = db.collection("posts");

  await posts.createIndex({ slug: 1 }, { unique: true });

  for (const post of fallbackPosts) {
    await posts.updateOne(
      { slug: post.slug },
      {
        $setOnInsert: {
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          content: post.content || post.excerpt,
          coverImage: post.coverImage,
          tags: post.tags,
          readTime: post.readTime,
          published: true,
          publishedAt: post.publishedAt,
        },
      },
      { upsert: true },
    );
  }

  console.log(`Seeded ${fallbackPosts.length} blog posts.`);
  await client.close();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

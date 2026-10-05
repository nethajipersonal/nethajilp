import { PrismaClient } from "@prisma/client";
import { fallbackProjects } from "../src/lib/fallback-data";

const prisma = new PrismaClient();

async function main() {
  for (const [index, project] of fallbackProjects.entries()) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: {},
      create: {
        id: project.id,
        title: project.title,
        description: project.description,
        image: project.image,
        tags: project.tags,
        link: project.link,
        featured: project.featured,
        order: index,
      },
    });
  }

  console.log("Seed complete.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

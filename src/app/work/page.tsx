import type { Metadata } from "next";
import { getProjects } from "@/lib/queries";
import { WorkContent } from "@/components/WorkContent";

export const metadata: Metadata = {
  title: "Work | Nethaji LP",
  description: "Projects I've designed and built.",
};

export default async function WorkPage() {
  const projects = await getProjects();
  return <WorkContent projects={projects} />;
}

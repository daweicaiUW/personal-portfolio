import { notFound } from "next/navigation";
import { ProjectDetailClient } from "./project-detail-client";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.title.en || "Project",
    description: project?.description.en || "Project detail page"
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }
  return <ProjectDetailClient project={project} />;
}

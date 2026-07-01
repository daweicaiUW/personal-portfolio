"use client";

import { projects } from "@/data/projects";
import { useLanguage } from "@/components/common/LanguageProvider";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <SectionHeading title={language === "en" ? "Projects" : "项目"}>
        {language === "en" ? "Selected academic and engineering projects with detail pages for implementation notes, outcomes, and media." : "精选学术与工程项目，包含实现过程、结果产出与媒体资料。"}
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </PageContainer>
  );
}

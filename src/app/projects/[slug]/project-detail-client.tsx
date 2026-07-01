"use client";

import Link from "next/link";
import { Download, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { translations } from "@/data/translations";
import { localize, localizeList } from "@/lib/i18n";
import { useLanguage } from "@/components/common/LanguageProvider";
import { PageContainer } from "@/components/layout/PageContainer";
import { SafeImage } from "@/components/common/SafeImage";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { VideoPlayer } from "@/components/projects/VideoPlayer";

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-husky-purple/10 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-husky-ink">{title}</h2>
      <div className="mt-3 leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export function ProjectDetailClient({ project }: { project: Project }) {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <Link href="/projects" className="focus-ring mb-6 inline-flex rounded-full text-sm font-bold text-husky-purple hover:text-husky-violet">← {language === "en" ? "Back to projects" : "返回项目"}</Link>
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-husky-gold">{localize(project.category, language)}</p>
          <h1 className="mt-3 text-4xl font-black text-husky-ink">{localize(project.title, language)}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{localize(project.description, language)}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => <span key={tech} className="rounded-full bg-husky-purple/10 px-3 py-1 text-sm font-semibold text-husky-purple">{tech}</span>)}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-husky-purple px-4 py-2 text-sm font-bold text-white"><Github size={16} />GitHub</a> : null}
            {project.report ? <a href={project.report} className="focus-ring inline-flex items-center gap-2 rounded-full border border-husky-purple/15 px-4 py-2 text-sm font-bold text-husky-purple"><Download size={16} />{localize(translations.projectDetail.report, language)}</a> : null}
          </div>
        </div>
        <SafeImage src={project.thumbnail} alt={localize(project.title, language)} label={localize(project.title, language)} className="aspect-[16/10] w-full rounded-lg shadow-soft" />
      </div>

      <div className="mt-10 grid gap-5">
        <DetailSection title={localize(translations.projectDetail.background, language)}>{localize(project.background, language)}</DetailSection>
        <DetailSection title={localize(translations.projectDetail.problem, language)}>{localize(project.problem, language)}</DetailSection>
        <DetailSection title={localize(translations.projectDetail.approach, language)}>{localize(project.approach, language)}</DetailSection>
        <DetailSection title={localize(translations.projectDetail.architecture, language)}>{localize(project.architecture, language)}</DetailSection>
        <DetailSection title={localize(translations.projectDetail.implementation, language)}>{localize(project.implementation, language)}</DetailSection>
        <DetailSection title={localize(translations.projectDetail.challenges, language)}>
          <ul className="list-inside list-disc space-y-1">{localizeList(project.challenges, language).map((item) => <li key={item}>{item}</li>)}</ul>
        </DetailSection>
        <DetailSection title={localize(translations.projectDetail.results, language)}>
          <ul className="list-inside list-disc space-y-1">{localizeList(project.results, language).map((item) => <li key={item}>{item}</li>)}</ul>
        </DetailSection>
        <DetailSection title={localize(translations.projectDetail.reflection, language)}>{localize(project.reflection, language)}</DetailSection>
        {project.video ? (
          <DetailSection title={localize(translations.projectDetail.video, language)}>
            <VideoPlayer src={project.video} title={localize(project.title, language)} />
          </DetailSection>
        ) : null}
        {project.gallery.length > 0 ? (
          <DetailSection title={localize(translations.projectDetail.gallery, language)}>
            <ProjectGallery gallery={project.gallery} />
          </DetailSection>
        ) : null}
      </div>
    </PageContainer>
  );
}

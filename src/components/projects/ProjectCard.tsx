"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { translations } from "@/data/translations";
import { localize } from "@/lib/i18n";
import { useLanguage } from "@/components/common/LanguageProvider";
import { SafeImage } from "@/components/common/SafeImage";

export function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-husky-purple/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <SafeImage src={project.thumbnail} alt={localize(project.title, language)} label={localize(project.category, language)} className="aspect-[16/10] w-full" />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-husky-purple/10 px-3 py-1 text-xs font-bold text-husky-purple">{localize(project.category, language)}</span>
          <span className="rounded-full bg-husky-gold/20 px-3 py-1 text-xs font-bold text-husky-ink">{localize(project.duration, language)}</span>
        </div>
        <h2 className="text-xl font-bold text-husky-ink">{localize(project.title, language)}</h2>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{localize(project.description, language)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">{tech}</span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={`/projects/${project.slug}`} className="focus-ring inline-flex items-center gap-2 rounded-full bg-husky-purple px-4 py-2 text-sm font-bold text-white transition hover:bg-husky-violet">
            {localize(translations.common.viewDetails, language)}
            <ExternalLink size={15} aria-hidden="true" />
          </Link>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-husky-purple/15 px-4 py-2 text-sm font-bold text-husky-purple hover:bg-husky-mist">
              <Github size={15} aria-hidden="true" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

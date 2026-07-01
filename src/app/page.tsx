"use client";

import Link from "next/link";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { translations } from "@/data/translations";
import { localize } from "@/lib/i18n";
import { useLanguage } from "@/components/common/LanguageProvider";
import { PageContainer } from "@/components/layout/PageContainer";
import { ContactButton } from "@/components/common/ContactButton";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SafeImage } from "@/components/common/SafeImage";
import { SectionHeading } from "@/components/common/SectionHeading";

const featuredProjectsIntro = {
  en: "A quick look at engineering work across hardware, robotics, Java systems, and AI perception.",
  zh: "\u5feb\u901f\u6d4f\u89c8\u786c\u4ef6\u3001\u673a\u5668\u4eba\u3001Java \u7cfb\u7edf\u4e0e AI \u611f\u77e5\u65b9\u5411\u7684\u5de5\u7a0b\u9879\u76ee\u3002"
};

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <PageContainer className="py-10">
      <section className="relative overflow-hidden rounded-lg border border-husky-purple/10 bg-white px-6 py-10 shadow-soft md:grid md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-10 lg:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-husky-purple via-husky-gold to-husky-purple" />
        <div className="absolute right-5 top-5 hidden sm:block">
          <SafeImage
            src={profile.schoolEmblem}
            alt={`${localize(profile.school, language)} emblem`}
            label="School Emblem"
            className="aspect-square w-16 rounded-full border border-husky-purple/10 bg-white shadow-sm lg:w-20"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-husky-gold">{localize(profile.school, language)}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-husky-ink sm:text-5xl">{localize(profile.localizedDisplayName, language)}</h1>
          <p className="mt-4 text-xl font-semibold text-husky-purple">{localize(profile.title, language)}</p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{localize(profile.tagline, language)}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/projects" className="focus-ring rounded-full bg-husky-purple px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-husky-violet">
              {localize(translations.common.viewProjects, language)}
            </Link>
            <Link href="/resume" className="focus-ring inline-flex items-center gap-2 rounded-full bg-husky-gold px-5 py-3 text-sm font-bold text-husky-ink shadow-sm transition hover:-translate-y-0.5">
              <Download size={16} aria-hidden="true" />
              {localize(translations.nav.downloadResume, language)}
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <ContactButton href={`mailto:${profile.email}`} label="Email" icon={Mail} />
            <ContactButton href={`tel:${profile.phoneHref}`} label="Phone" icon={Phone} />
            <ContactButton href={profile.github} label="GitHub" icon={Github} external />
            <ContactButton href={profile.linkedin} label="LinkedIn" icon={Linkedin} external />
            <ContactButton href="/contact" label="WeChat" icon={Send} />
          </div>
        </div>

        <div className="mt-10 w-full md:mt-0">
          <div className="ml-auto max-w-sm rounded-lg border border-husky-purple/10 bg-husky-mist/60 p-5">
            <div className="flex items-center gap-4">
              <SafeImage
                src={profile.avatar}
                alt={`${localize(profile.localizedDisplayName, language)} profile photo`}
                label="Profile Photo"
                className="aspect-square w-28 shrink-0 rounded-full border-4 border-white shadow-sm sm:w-32"
              />
              <div>
                <p className="text-sm font-bold text-husky-purple">{localize(profile.localizedPreferredName, language)}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{localize(profile.tagline, language)}</p>
              </div>
            </div>

            <div className="mt-5 rounded-lg bg-white p-4 text-husky-ink shadow-sm">
              <p className="text-sm font-bold text-husky-purple">{localize(translations.home.educationSummary, language)}</p>
              <p className="mt-2 font-semibold">{localize(profile.school, language)}</p>
              <p className="text-sm text-slate-600">
                {profile.degree} in {localize(profile.major, language)}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={15} aria-hidden="true" />
                {localize(profile.location, language)}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {localize(translations.home.expected, language)}: {profile.expectedGraduation}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading title={localize(translations.home.featuredProjects, language)}>
          {featuredProjectsIntro[language]}
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}

"use client";

import { Building2, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { localize, localizeList } from "@/lib/i18n";
import { useLanguage } from "@/components/common/LanguageProvider";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SafeImage } from "@/components/common/SafeImage";

export default function ExperiencePage() {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <SectionHeading title={language === "en" ? "Internship / Professional Experience" : "实习与专业经历"}>
        {language === "en"
          ? "Professional entries focused on robot delivery, on-site deployment, calibration, validation, operations handoff, and documentation."
          : "聚焦机器人实施交付、现场部署、传感器标定、功能验证、运维交接与技术文档的专业经历。"}
      </SectionHeading>
      <div className="grid gap-6">
        {experiences.map((experience) => (
          <article key={experience.company.en} className="rounded-lg border border-husky-purple/10 bg-white p-6 shadow-sm">
            <div className="grid gap-7 lg:grid-cols-[1fr_320px]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-husky-gold">{localize(experience.department, language)}</p>
                <h2 className="mt-2 text-2xl font-bold text-husky-ink">{localize(experience.role, language)}</h2>
                <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                  <span className="inline-flex items-center gap-2"><Building2 size={16} />{localize(experience.company, language)}</span>
                  <span className="inline-flex items-center gap-2"><MapPin size={16} />{localize(experience.location, language)}</span>
                  <span className="inline-flex items-center gap-2"><Calendar size={16} />{localize(experience.duration, language)}</span>
                </div>
                <p className="mt-5 leading-7 text-slate-600">{localize(experience.description, language)}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <h3 className="font-bold text-husky-ink">{language === "en" ? "Responsibilities" : "职责"}</h3>
                    <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">
                      {localizeList(experience.responsibilities, language).map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-husky-ink">{language === "en" ? "Key Contributions" : "关键贡献"}</h3>
                    <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-slate-600">
                      {localizeList(experience.contributions, language).map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tools.map((tool) => <span key={tool} className="rounded-full bg-husky-purple/10 px-3 py-1 text-sm font-semibold text-husky-purple">{tool}</span>)}
                </div>
              </div>
              <SafeImage src={experience.media[0]} alt={localize(experience.company, language)} label={localize(experience.company, language)} className="aspect-[4/3] w-full rounded-lg" />
            </div>
          </article>
        ))}
      </div>
    </PageContainer>
  );
}

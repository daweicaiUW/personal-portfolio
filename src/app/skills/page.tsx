"use client";

import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/components/common/LanguageProvider";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SkillGroup } from "@/components/skills/SkillGroup";

export default function SkillsPage() {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <SectionHeading title={language === "en" ? "Skills" : "技能"}>
        {language === "en" ? "Grouped technical skills without inflated percentage bars, organized for quick recruiter and collaborator scanning." : "按类别组织的技术技能，便于招聘者与合作者快速浏览。"}
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => <SkillGroup key={group.title.en} group={group} />)}
      </div>
    </PageContainer>
  );
}

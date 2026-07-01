"use client";

import { researchExperiences } from "@/data/research";
import { useLanguage } from "@/components/common/LanguageProvider";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ResearchCard } from "@/components/research/ResearchCard";

export default function ResearchPage() {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <SectionHeading title={language === "en" ? "Research Experience" : "科研经历"}>
        {language === "en" ? "Research work connecting vision-language models, humanoid robot perception, and experimental evaluation." : "连接视觉语言模型、人形机器人感知与实验评估的科研工作。"}
      </SectionHeading>
      <div className="grid gap-6">
        {researchExperiences.map((item) => <ResearchCard key={item.title.en} item={item} />)}
      </div>
    </PageContainer>
  );
}

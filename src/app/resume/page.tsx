"use client";

import { documents } from "@/data/documents";
import { useLanguage } from "@/components/common/LanguageProvider";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { DocumentCard } from "@/components/documents/DocumentCard";

export default function ResumePage() {
  const { language } = useLanguage();

  return (
    <PageContainer>
      <SectionHeading title={language === "en" ? "Resume and Reports" : "简历与报告"}>
        {language === "en" ? "Place PDFs in the matching public document folders to enable preview and download links." : "将 PDF 放入对应 public 文档文件夹后，即可使用预览与下载链接。"}
      </SectionHeading>
      <div className="grid gap-5 md:grid-cols-2">
        {documents.map((document) => <DocumentCard key={document.href} document={document} />)}
      </div>
    </PageContainer>
  );
}

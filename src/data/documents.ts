import type { LocalizedText } from "@/types";

export type DocumentItem = {
  title: LocalizedText;
  category: LocalizedText;
  href: string;
  description: LocalizedText;
};

export const documents: DocumentItem[] = [
  {
    title: { en: "English Resume", zh: "英文简历" },
    category: { en: "Resume", zh: "简历" },
    href: "/documents/resume/Dawei_Cai_Resume_EN.pdf",
    description: { en: "Primary resume for internships and academic opportunities.", zh: "用于实习与学术机会的主要英文简历。" }
  },
  {
    title: { en: "Chinese Resume", zh: "中文简历" },
    category: { en: "Resume", zh: "简历" },
    href: "/documents/resume/Dawei_Cai_Resume_CN.pdf",
    description: { en: "Chinese-language resume version.", zh: "中文简历版本。" }
  },
  {
    title: { en: "LocateAnything Research Report", zh: "LocateAnything 研究报告" },
    category: { en: "Research Reports", zh: "科研报告" },
    href: "/documents/research/LocateAnything_Report.pdf",
    description: {
      en: "Nine-page mini-pilot report evaluating LocateAnything on 39 valid language-guided tabletop localization samples.",
      zh: "9 页 mini-pilot 研究报告，评估 LocateAnything 在 39 个有效语言引导桌面定位样本上的表现。"
    }
  },
  {
    title: { en: "RO-MAN Poster", zh: "RO-MAN 海报" },
    category: { en: "Posters", zh: "海报" },
    href: "/documents/posters/ROMAN2026_Poster.pdf",
    description: { en: "Poster for research presentation and conference-style sharing.", zh: "用于科研展示和会议风格汇报的海报。" }
  }
];

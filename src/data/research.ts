import type { LocalizedList, LocalizedText } from "@/types";

export type ResearchExperience = {
  title: LocalizedText;
  duration: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedList;
  report?: string;
  poster?: string;
  frameworkImage?: string;
  images: string[];
  results: { metric: LocalizedText; observation: LocalizedText }[];
};

export const researchExperiences: ResearchExperience[] = [
  {
    title: {
      en: "Evaluating LocateAnything for Language-Guided Pre-Grasp Object Localization in Humanoid Robot Perception",
      zh: "评估 LocateAnything 在人形机器人语言引导预抓取目标定位中的应用"
    },
    duration: { en: "2026", zh: "2026" },
    summary: {
      en: "This mini-pilot evaluates LocateAnything as a language-guided 2D visual grounding module for humanoid robot pre-grasp perception. The study uses cluttered tabletop and desk scenes with natural-language prompts, manual ground-truth boxes, and IoU-based evaluation. Across 39 valid image-prompt pairs, LocateAnything achieved a mean IoU of 0.646, a median center-point error of 17.2 pixels, and a 76.9% success rate using IoU >= 0.5.",
      zh: "该 mini-pilot 研究评估 LocateAnything 作为人形机器人预抓取感知阶段的语言引导 2D 视觉定位模块。实验使用杂乱桌面场景、自然语言提示、人工标注框与 IoU 指标进行评估。在 39 个有效图像-提示样本中，LocateAnything 达到 0.646 的平均 IoU、17.2 像素的中位中心点误差，并在 IoU >= 0.5 标准下取得 76.9% 的成功率。"
    },
    highlights: {
      en: [
        "39 valid tabletop image-prompt pairs",
        "Mean IoU: 0.646",
        "Median center-point error: 17.2 px",
        "Overall success rate: 76.9% at IoU >= 0.5",
        "Spatial-relation prompts: 93.8% success",
        "Similar-object prompts: 100.0% success in the pilot set",
        "Small-object and ambiguous prompts were the main failure sources"
      ],
      zh: [
        "39 个有效桌面图像-提示样本",
        "平均 IoU：0.646",
        "中位中心点误差：17.2 像素",
        "IoU >= 0.5 标准下总体成功率：76.9%",
        "空间关系提示成功率：93.8%",
        "相似物体提示在 pilot 数据中成功率：100.0%",
        "小目标与歧义提示是主要失败来源"
      ]
    },
    report: "/documents/research/LocateAnything_Report.pdf",
    poster: "/documents/posters/ROMAN2026_Poster.pdf",
    frameworkImage: "/media/research/locateanything-framework.png",
    images: ["/media/projects/language-guided-pre-grasp-localization/fail.jpg"],
    results: [
      {
        metric: { en: "Overall Performance", zh: "总体表现" },
        observation: {
          en: "39 valid samples; mean IoU 0.646; median center-point error 17.2 px; success rate 76.9% at IoU >= 0.5.",
          zh: "39 个有效样本；平均 IoU 0.646；中位中心点误差 17.2 像素；IoU >= 0.5 下成功率 76.9%。"
        }
      },
      {
        metric: { en: "Strong Prompt Types", zh: "表现较强的提示类型" },
        observation: {
          en: "Spatial-relation prompts reached 93.8% success; similar-object prompts reached 100.0% success in this small pilot.",
          zh: "空间关系提示成功率为 93.8%；相似物体提示在该小规模 pilot 中达到 100.0%。"
        }
      },
      {
        metric: { en: "Difficult Cases", zh: "困难场景" },
        observation: {
          en: "Small-object prompts reached 58.3% success, and ambiguous prompts reached 33.3% success.",
          zh: "小目标提示成功率为 58.3%，歧义提示成功率为 33.3%。"
        }
      },
      {
        metric: { en: "Scope", zh: "研究范围" },
        observation: {
          en: "The report evaluates 2D perception-stage localization only; it does not test physical grasping or robot control.",
          zh: "该报告仅评估 2D 感知阶段目标定位，不包含真实抓取、机器人控制或完整部署测试。"
        }
      }
    ]
  }
];

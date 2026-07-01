import type { LocalizedList, LocalizedText } from "@/types";

export type Experience = {
  company: LocalizedText;
  role: LocalizedText;
  location: LocalizedText;
  duration: LocalizedText;
  department: LocalizedText;
  description: LocalizedText;
  responsibilities: LocalizedList;
  tools: string[];
  contributions: LocalizedList;
  media: string[];
};

export const experiences: Experience[] = [
  {
    company: { en: "Zhejiang Humanoid Robot Innovation Center", zh: "浙江人形机器人创新中心" },
    role: { en: "Robotics / Embedded Systems Intern", zh: "机器人 / 嵌入式系统实习生" },
    location: { en: "Zhejiang, China", zh: "中国浙江" },
    duration: { en: "Summer 2026", zh: "2026 年夏季" },
    department: { en: "Robotics Engineering", zh: "机器人工程" },
    description: {
      en: "Assisted with robotics-related engineering tasks, including deployment preparation, system testing, embedded systems, robot perception, and technical documentation.",
      zh: "参与机器人相关工程任务，包括部署准备、系统测试、嵌入式系统、机器人感知与技术文档。"
    },
    responsibilities: {
      en: [
        "Supported project managers and engineers in understanding deployment environments",
        "Documented hardware configurations, software versions, and system requirements",
        "Prepared test notes for robotics and embedded-system workflows"
      ],
      zh: [
        "协助项目经理和工程师梳理部署环境",
        "记录硬件配置、软件版本和系统需求",
        "整理机器人与嵌入式系统测试记录"
      ]
    },
    tools: ["Linux / Ubuntu", "ROS / ROS2", "rviz", "rosbag", "Embedded Systems"],
    contributions: {
      en: ["Deployment preparation", "System testing support", "Technical documentation"],
      zh: ["部署准备", "系统测试支持", "技术文档整理"]
    },
    media: ["/media/experience/zhejiang-humanoid-robot-center.jpg"]
  }
];

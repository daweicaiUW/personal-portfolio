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
    role: { en: "Implementation Delivery Intern", zh: "实施交付实习生" },
    location: { en: "Ningbo, Zhejiang, China", zh: "浙江宁波" },
    duration: { en: "July 5, 2026 -- September 27, 2026", zh: "2026 年 7 月 5 日 - 2026 年 9 月 27 日" },
    department: { en: "Delivery and Operations Team", zh: "交付运维组" },
    description: {
      en: "Supporting humanoid robot deployment and delivery workflows, including deployment preparation, on-site setup, sensor calibration, mapping, validation, documentation, and operations handoff.",
      zh: "参与人形机器人实施交付相关工作，支持部署准备、现场配置、传感器标定、建图导航、功能验证、文档整理与运维交接。"
    },
    responsibilities: {
      en: [
        "Assist with deployment preparation by checking customer scenarios, robot models, software versions, hardware lists, and technical documents.",
        "Support on-site robot setup, including unpacking, power-on checks, basic configuration, network access, and deployment SOP execution.",
        "Participate in sensor calibration and system checks involving Camera, IMU, LiDAR, coordinate alignment, mapping, navigation tuning, and perception-planning-control health checks.",
        "Collect and package multimodal operation logs such as rosbag files, document site issues, and support acceptance reports and operations handoff."
      ],
      zh: [
        "协助交付准备，核对客户部署场景、机器人机型、软件版本、硬件清单与技术文档。",
        "支持现场开箱、上电检查、基础配置、网络接入以及部署 SOP 执行。",
        "参与 Camera、IMU、LiDAR 等传感器标定，以及坐标对齐、建图、导航参数整定和感知-规划-控制链路健康检查。",
        "按规范采集并打包 rosbag 等多模态运行日志，整理现场问题，支持验收报告与运维交接。"
      ]
    },
    tools: ["ROS 2", "rosbag", "LiDAR", "Camera / IMU", "SLAM", "Linux", "Networking", "Office"],
    contributions: {
      en: [
        "Robot deployment preparation and technical documentation",
        "On-site calibration, mapping, validation, and troubleshooting support",
        "Planned WRC 2026 exhibition support in August 2026"
      ],
      zh: [
        "机器人部署准备与技术文档整理",
        "现场标定、建图、验证与问题反馈支持",
        "计划于 2026 年 8 月参与 WRC 2026 展会现场支持"
      ]
    },
    media: ["/media/experience/zhejiang-humanoid-robot-center.jpg"]
  }
];

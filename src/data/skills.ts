import type { LocalizedText } from "@/types";

export type SkillGroup = {
  title: LocalizedText;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: { en: "Programming Languages", zh: "编程语言" }, skills: ["Java", "Python", "C / C++", "SystemVerilog", "JavaScript / TypeScript"] },
  { title: { en: "Hardware & Embedded Systems", zh: "硬件与嵌入式系统" }, skills: ["FPGA", "DE1-SoC", "Arduino", "PCB Design", "Sensors", "Digital Logic", "FSM Design", "Datapath Design"] },
  { title: { en: "Robotics", zh: "机器人" }, skills: ["ROS / ROS2", "rviz", "rosbag", "tf", "Basic Navigation", "Robot Perception", "Object Localization"] },
  { title: { en: "Software & Tools", zh: "软件与工具" }, skills: ["Git", "GitHub", "GitLab", "VS Code", "Quartus", "ModelSim", "Fusion 360", "MATLAB", "Linux / Ubuntu", "VMware"] },
  { title: { en: "AI / Research", zh: "AI 与科研" }, skills: ["Vision-Language Models", "LocateAnything", "Object Detection", "Language-Guided Localization", "Experimental Evaluation", "Technical Writing"] }
];

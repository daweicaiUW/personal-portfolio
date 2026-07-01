import type { LocalizedText } from "@/types";

export const profile = {
  name: "Dawei Cai",
  preferredName: "David Cai",
  displayName: "Dawei Cai / David Cai",
  localizedDisplayName: {
    en: "Dawei Cai / David Cai",
    zh: "蔡大卫"
  },
  localizedPreferredName: {
    en: "David Cai",
    zh: "蔡大卫"
  },
  title: {
    en: "Electrical & Computer Engineering Student",
    zh: "电气与计算机工程本科生"
  } satisfies LocalizedText,
  school: {
    en: "University of Washington, Seattle",
    zh: "华盛顿大学西雅图校区"
  } satisfies LocalizedText,
  major: {
    en: "Electrical & Computer Engineering",
    zh: "电气与计算机工程"
  } satisfies LocalizedText,
  degree: "B.S.",
  expectedGraduation: "2027",
  tagline: {
    en: "Robotics, Embedded Systems, FPGA, and AI-powered Perception",
    zh: "关注机器人、嵌入式系统、FPGA 与 AI 视觉感知方向"
  } satisfies LocalizedText,
  location: {
    en: "Seattle, WA / China",
    zh: "西雅图 / 中国"
  } satisfies LocalizedText,
  email: "daweic@uw.edu",
  phone: "(+86) 17321209926",
  phoneHref: "+8617321209926",
  wechat: "Cai7370001294",
  github: "https://github.com/daweicaiUW",
  linkedin: "https://www.linkedin.com/in/dawei-cai",
  avatar: "/media/profile/profile.jpg",
  schoolEmblem: "/media/profile/school-emblem.png",
  resume: "/documents/resume/Dawei_Cai_Resume_EN.pdf"
};

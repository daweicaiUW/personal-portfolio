import type { LocalizedList, LocalizedText } from "@/types";

export type Project = {
  slug: string;
  title: LocalizedText;
  duration: LocalizedText;
  category: LocalizedText;
  techStack: string[];
  description: LocalizedText;
  thumbnail?: string;
  video?: string;
  github?: string;
  report?: string;
  featured?: boolean;
  background: LocalizedText;
  problem: LocalizedText;
  approach: LocalizedText;
  architecture: LocalizedText;
  implementation: LocalizedText;
  challenges: LocalizedList;
  results: LocalizedList;
  reflection: LocalizedText;
  gallery: { src: string; alt: LocalizedText }[];
};

const text = (en: string, zh: string): LocalizedText => ({ en, zh });

const list = (en: string[], zh: string[]): LocalizedList => ({ en, zh });

const galleryFromFileNames = (slug: string, fileNames: string[]) =>
  fileNames.map((fileName) => {
    const label = fileName.replace(/\.[^.]+$/, "");

    return {
      src: `/media/projects/${slug}/${fileName}`,
      alt: text(label, label)
    };
  });

export const projects: Project[] = [
  {
    slug: "fpga-digital-system-design",
    title: text("FPGA Digital System Design", "FPGA 数字系统设计"),
    duration: text("2024 - 2025", "2024 - 2025"),
    category: text("FPGA / Digital Design", "FPGA / 数字逻辑设计"),
    techStack: ["SystemVerilog", "Quartus", "ModelSim", "DE1-SoC"],
    description: text(
      "Designed and implemented multiple FPGA-based digital system modules, including search acceleration, VGA graphics display, and audio processing.",
      "设计并实现多个基于 FPGA 的数字系统模块，包括搜索加速、VGA 图形显示与音频处理。"
    ),
    thumbnail: "/media/projects/fpga-digital-system-design/cover.jpg",
    featured: true,
    background: text(
      "Course and lab projects explored how digital logic becomes reliable hardware behavior on an FPGA board.",
      "课程与实验项目聚焦于数字逻辑如何在 FPGA 开发板上转化为稳定可靠的硬件行为。"
    ),
    problem: text(
      "Build hardware modules that combine state-machine control, datapaths, memory interfaces, graphics output, and audio processing under real timing constraints.",
      "在真实时序约束下构建结合状态机、数据通路、存储接口、图形输出与音频处理的硬件模块。"
    ),
    approach: text(
      "Separated each design into control and datapath blocks, validated behavior in simulation, and iterated on board-level debugging with waveform traces.",
      "将设计拆分为控制逻辑与数据通路，通过仿真验证行为，并结合波形分析进行板级调试迭代。"
    ),
    architecture: text(
      "FSM controllers coordinate datapath registers, memory reads, VGA timing logic, and audio signal modules.",
      "FSM 控制器协调数据通路寄存器、存储读取、VGA 时序逻辑和音频信号模块。"
    ),
    implementation: text(
      "Implemented modules in SystemVerilog, simulated with ModelSim, synthesized in Quartus, and tested on DE1-SoC hardware.",
      "使用 SystemVerilog 实现模块，在 ModelSim 中仿真，在 Quartus 中综合，并在 DE1-SoC 上测试。"
    ),
    challenges: list(
      ["Timing-sensitive visual output", "State transition debugging", "Hardware/software mismatch between simulation and board behavior"],
      ["对时序敏感的图形输出", "状态转换调试", "仿真行为与板级行为之间的差异"]
    ),
    results: list(
      ["Built working FPGA modules for graphics and signal tasks", "Improved waveform-based debugging workflow", "Gained stronger intuition for digital hardware design"],
      ["完成可运行的图形与信号处理 FPGA 模块", "提升基于波形的调试流程", "加深对数字硬件设计的理解"]
    ),
    reflection: text(
      "The project strengthened my ability to reason from specification to timing-aware implementation.",
      "该项目提升了我从规格定义推导到时序感知实现的工程能力。"
    ),
    gallery: galleryFromFileNames("fpga-digital-system-design", [
      "binary_search_FPGA_framework.png",
      "binary_search_waveform.png",
      "Binary-search-accelerator.jpg",
      "vgadisplay1.png",
      "vgadisplay2.png",
      "VGA-line-drawer.jpg"
    ])
  },
  {
    slug: "embedded-line-following-robot",
    title: text("Embedded Line-Following Robot System", "嵌入式循迹机器人系统"),
    duration: text("2024", "2024"),
    category: text("Embedded Systems / Robotics", "嵌入式系统 / 机器人"),
    techStack: ["Arduino", "PCB Design", "Fusion 360", "Sensors"],
    description: text(
      "Built an embedded line-following robot system involving sensor integration, PCB-level debugging, mechanical design, and control logic.",
      "搭建嵌入式循迹机器人系统，涵盖传感器集成、PCB 调试、机械设计与控制逻辑。"
    ),
    thumbnail: "/media/projects/embedded-line-following-robot/cover.jpg",
    featured: true,
    background: text(
      "The system connected physical sensing, control behavior, and mechanical reliability in one compact robot.",
      "该系统将物理传感、控制行为和机械可靠性整合到一个小型机器人中。"
    ),
    problem: text(
      "Create a robot that reliably detects and follows a line while surviving real hardware imperfections.",
      "构建能稳定检测并跟随线路、同时应对真实硬件误差的机器人。"
    ),
    approach: text(
      "Integrated photoresistors and control logic, then tuned the robot through repeated hardware tests.",
      "集成光敏电阻与控制逻辑，并通过反复硬件测试完成调参。"
    ),
    architecture: text(
      "Sensor inputs feed an Arduino controller, which drives motor decisions through calibrated thresholds.",
      "传感器输入进入 Arduino 控制器，再通过校准阈值决定电机动作。"
    ),
    implementation: text(
      "Designed mechanical parts in Fusion 360, assembled electronics, and debugged soldering and sensor issues.",
      "使用 Fusion 360 进行机械设计，完成电子装配，并调试焊接与传感器问题。"
    ),
    challenges: list(
      ["Photoresistor failure from soldering issues", "Noisy sensor readings", "Mechanical alignment"],
      ["焊接问题导致光敏电阻失效", "传感器读数噪声", "机械结构对齐"]
    ),
    results: list(
      ["Recovered system behavior through board-level diagnosis", "Improved testing discipline", "Built a working robot prototype"],
      ["通过板级诊断恢复系统行为", "改进测试流程", "完成可运行机器人原型"]
    ),
    reflection: text(
      "The most valuable lesson was treating hardware debugging as a disciplined measurement process.",
      "最重要的收获是把硬件调试视为严谨的测量与排查过程。"
    ),
    gallery: galleryFromFileNames("embedded-line-following-robot", [
      "3d print.jpg",
      "3d-print model.jpg",
      "group members.jpg"
    ])
  },
  {
    slug: "husky-maps-custom-collections",
    title: text("Husky Maps Map Features", "Husky Maps 地图功能开发"),
    duration: text("2024", "2024"),
    category: text("Java / Data Structures", "Java / 数据结构"),
    techStack: ["Java", "GitLab CI/CD", "JUnit 5", "Data Structures", "Testing"],
    description: text(
      "Developed Java-based map application features including autocomplete search, map markers, shortest-path routing, custom collections, validation, and tests.",
      "为 Java 地图应用开发自动补全搜索、地图标记、最短路径、自定义收藏夹、数据校验与测试等功能。"
    ),
    thumbnail: "/media/projects/husky-maps-custom-collections/cover.jpg",
    featured: true,
    background: text(
      "Husky Maps is a map-based Java application for exploring locations, searching places, placing markers, and navigating routes.",
      "Husky Maps 是一个基于 Java 的地图应用，用于地点搜索、地图标记和路线导航。"
    ),
    problem: text(
      "Support reliable map interactions, search suggestions, route behavior, and collection updates without exposing mutable internals.",
      "支持稳定的地图交互、搜索建议、路径功能和收藏夹更新，同时避免暴露可变内部状态。"
    ),
    approach: text(
      "Designed feature behavior around data-structure choices, validation rules, defensive copying, and clear failure modes.",
      "围绕数据结构选择、校验规则、防御性拷贝与清晰失败路径设计功能行为。"
    ),
    architecture: text(
      "Search, marker, routing, and collection behavior are organized through Java service-level methods and tested with JUnit.",
      "搜索、标记、路径和收藏夹行为通过 Java 服务层方法组织，并使用 JUnit 测试。"
    ),
    implementation: text(
      "Implemented application logic and tests for normal, invalid, and edge-case map workflows in CI-friendly Java code.",
      "使用适配 CI 的 Java 代码实现地图应用逻辑，并覆盖正常、非法与边界工作流测试。"
    ),
    challenges: list(
      ["Maintaining invariants", "Avoiding accidental mutation", "Testing search and routing edge cases"],
      ["维护状态不变量", "避免意外修改", "测试搜索与路径边界场景"]
    ),
    results: list(
      ["Delivered map interaction features", "Improved test coverage", "Practiced robust Java API design"],
      ["完成地图交互功能", "提升测试覆盖", "训练稳健 Java API 设计"]
    ),
    reflection: text(
      "This project sharpened my understanding of defensive software design in data-structure-heavy applications.",
      "该项目加深了我对数据结构应用中防御式软件设计的理解。"
    ),
    gallery: galleryFromFileNames("husky-maps-custom-collections", [
      "autocomplete.jpg",
      "Marker.jpg",
      "husky map.jpg"
    ])
  },
  {
    slug: "language-guided-pre-grasp-localization",
    title: text("Language-Guided Pre-Grasp Object Localization", "语言引导的预抓取目标定位"),
    duration: text("2025 - 2026", "2025 - 2026"),
    category: text("AI / Robotics / Research", "AI / 机器人 / 科研"),
    techStack: ["Vision-Language Models", "LocateAnything", "Object Localization", "Experimental Evaluation"],
    description: text(
      "Evaluated LocateAnything on 39 valid tabletop image-prompt pairs for language-guided pre-grasp 2D object localization, achieving 0.646 mean IoU and 76.9% success at IoU >= 0.5.",
      "基于 39 个有效桌面图像-提示样本评估 LocateAnything 的语言引导预抓取 2D 目标定位能力，平均 IoU 为 0.646，IoU >= 0.5 下成功率为 76.9%。"
    ),
    thumbnail: "/media/projects/language-guided-pre-grasp-localization/cover.jpg",
    report: "/documents/research/LocateAnything_Report.pdf",
    background: text(
      "Humanoid robots need perception modules that can interpret natural-language instructions such as object names, spatial relations, and task-relevant referring expressions.",
      "人形机器人需要能够理解自然语言指令的感知模块，包括物体名称、空间关系和任务相关指代表达。"
    ),
    problem: text(
      "Determine whether LocateAnything can localize intended tabletop targets accurately enough to support the perception stage before grasp planning.",
      "判断 LocateAnything 是否能足够准确地定位桌面目标，从而支持抓取规划前的感知阶段。"
    ),
    approach: text(
      "Collected cluttered desk and tabletop scenes, wrote natural-language prompts, manually annotated ground-truth 2D boxes, and evaluated predictions with IoU, center-point error, success rate, and qualitative failure modes.",
      "收集杂乱桌面场景，编写自然语言提示，人工标注 2D ground-truth 框，并使用 IoU、中心点误差、成功率和失败案例类别评估模型输出。"
    ),
    architecture: text(
      "An RGB image and text prompt are passed into LocateAnything. The predicted region is converted into a box or center point and compared against manual annotations.",
      "RGB 图像与文本提示输入 LocateAnything，模型预测区域被转换为边界框或中心点，并与人工标注进行比较。"
    ),
    implementation: text(
      "Built a 39-sample valid mini-pilot after excluding one no-target prompt. Prompt groups included spatial relation, similar object, small object, occlusion, and ambiguous prompt cases.",
      "在排除一个无有效目标提示后，构建 39 个有效样本的 mini-pilot。提示类别包括空间关系、相似物体、小目标、遮挡和歧义提示。"
    ),
    challenges: list(
      ["Small or thin target objects", "Ambiguous referring expressions", "Partial occlusion and spatial confusion", "No reliable per-query timing from the web demo"],
      ["小型或细长目标", "存在歧义的指代表达", "部分遮挡与空间关系混淆", "Web demo 未提供可靠的单次推理时间"]
    ),
    results: list(
      ["39 valid image-prompt pairs", "Mean IoU: 0.646", "Median center-point error: 17.2 px", "Overall success rate: 76.9% at IoU >= 0.5", "Spatial-relation prompts: 93.8% success", "Small-object prompts: 58.3% success", "Ambiguous prompts: 33.3% success"],
      ["39 个有效图像-提示样本", "平均 IoU：0.646", "中位中心点误差：17.2 像素", "IoU >= 0.5 下总体成功率：76.9%", "空间关系提示成功率：93.8%", "小目标提示成功率：58.3%", "歧义提示成功率：33.3%"]
    ),
    reflection: text(
      "The project showed that open-vocabulary visual grounding can be useful for pre-grasp perception when the target is clearly described, but robust humanoid deployment would require depth sensing, segmentation, confidence estimation, clarification dialogue, and real robot validation.",
      "该项目表明，当目标描述清晰时，开放词汇视觉定位可用于预抓取感知；但要实现稳健的人形机器人部署，还需要深度感知、分割、置信度估计、澄清对话与真实机器人验证。"
    ),
    gallery: galleryFromFileNames("language-guided-pre-grasp-localization", [
      "success_attribute.jpg",
      "success_spatial.jpg",
      "sucess_small_object.jpg",
      "fail.jpg"
    ])
  }
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

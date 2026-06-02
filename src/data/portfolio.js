export const heroData = {
  title: "Krie",
  tagline: "profile",
  subtitle: "个人简介"
};

export const statusBarData = {
  id: "ARCHITECT_X",
  leftMeta: ["[grid_lock:on]", "axis: 18/68"],
  rightMeta: [
    "[spec_sheet_v2.0.0]",
    "paper_noise: 0.038",
    "draft_mode: active",
    "clock: local_time"
  ]
};

export const profileData = {
  id: "ARCHITECT_X",
  title: "极客产品人",
  bio:
    "这里是个人描述文本区域。当前版本保留克制、可公开展示的说明口径，用来承接后续正式简历、项目经历与方法论表达。",
  status: "READY // 可按正式求职节奏更新",
  logLabel: "[0] LOG_STREAM_01: RUNTIME_SPEC"
};

export const contactData = {
  title: "Contact",
  subtitle: "联系入口",
  labelEmail: "[PORTAL: EMAIL]",
  labelGithub: "[PORTAL: GITHUB]",
  email: "hello@your-domain.com",
  github: "github.com/your-handle"
};

export const skillsData = {
  title: "Technical",
  subtitle: "技术规格",
  label: "[TECHNICAL_SPECIFICATION]",
  items: [
    {
      category: "产品方法",
      items: ["需求抽象_01", "信息架构_02", "流程设计_03"]
    },
    {
      category: "技术协作",
      items: ["Prompt_System_04", "RAG_Workflow_05", "Function_Calling_06"]
    },
    {
      category: "视觉表达",
      items: ["FangSong_Grid_07", "Brutal_UI_08", "Spec_Sheet_09"]
    }
  ]
};

export const portfolioData = {
  title: "Portfolio",
  subtitle: "作品矩阵",
  featuredLabel: "[FEATURED_SHOWCASE // STAGGERED_POSTER]",
  archiveLabel: "[ARCHIVE_TABLE // ENGINEERING_BOM]"
};

export const projects = [
  {
    id: "01",
    title: "Conflux",
    subtitle: "知识底座",
    featured: true,
    status: "ACTIVE",
    version: "v1.0.0",
    tags: ["React", "RAG", "Search"],
    link: "#",
    description:
      "围绕知识检索与工作流收敛搭建的个人知识底座，用静默期、模糊匹配和结构化回写降低大模型调用噪音。"
  },
  {
    id: "02",
    title: "Krie",
    subtitle: "个人基座",
    featured: true,
    status: "MAINTAINING",
    version: "v0.8.2",
    tags: ["Vite", "React", "Design"],
    link: "#",
    description:
      "以白底硬边和制图式结构线为核心语言，构建一个可持续扩展的个人网站基线，用来承接作品、经历与方法论。"
  },
  {
    id: "03",
    title: "Spec Flow",
    subtitle: "规格流转",
    featured: false,
    status: "COMPLETED",
    version: "v1.2.0",
    tags: ["Schema", "Docs", "PM"],
    link: "#",
    description:
      "围绕需求拆解、规格抽象与执行对齐建立的流程实验，用文档结构和状态标识收束多角色协作。"
  },
  {
    id: "04",
    title: "Archive Node",
    subtitle: "归档节点",
    featured: false,
    status: "ACTIVE",
    version: "v0.6.4",
    tags: ["Rust", "Index", "Infra"],
    link: "#",
    description:
      "面向长期工程归档的轻量节点，聚焦索引、版本和状态追踪，用于展示持续维护型项目。"
  }
];

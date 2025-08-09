import type { Service } from "@/components/service-card"

export const services: Service[] = [
  {
    id: "agaistock",
    name: "Ag股票智能分析助手",
    description: "面向A股的智能行情与策略分析助手，助力研究与决策提效。",
    href: "https://agaistock.cn",
    status: "active",
    badge: "可靠 · 高效 · 可扩展",
    imageSrc: "/images/agaistock.png",
    imageAlt: "Ag智能股票分析助手 主题图",
    logoSrc: "/images/ag-logo.png",
    logoAlt: "Ag智能股票分析助手 Logo",
    icon: "waves",
  },
  {
    id: "yihe-stt",
    name: "智能录音助手",
    description: "高质量语音识别与文本清洗，支持多语种与多场景的知识沉淀。",
    href: "https://s2t.xinguang.online",
    status: "active",
    badge: "支持批量处理 · 标点恢复 · 分段对齐",
    imageSrc: "/images/s2t-screenshot.png",
    imageAlt: "智能录音助手 页面截图",
    icon: "rocket",
  },
  {
    id: "nextcloud",
    name: "Nextcloud 云服务",
    description: "私有化云盘与协作空间，安全存储、共享与同步团队资料。",
    href: "https://nextcloud.xinguang.online",
    status: "active",
    badge: "端到端加密 · 多端同步 · 细粒度权限",
    imageSrc: "/images/nextcloud-screenshot.png",
    imageAlt: "Nextcloud 服务页面截图",
    icon: "cloud",
  },
]

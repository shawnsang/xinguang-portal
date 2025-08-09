# 心光全栈智造工场 - 门户网站

> 点亮创意 · 锻造数字未来

## 🌟 项目简介

心光全栈智造工场是一个专业的数字化解决方案提供商，致力于为客户提供从咨询到交付的全生命周期服务。本项目是我们的官方门户网站，展示我们的核心价值主张、服务能力和产品矩阵。

## 🎯 核心价值主张

### 四位一体的方法论

- **"心光"指引** - 用心倾听、深度洞察，以智慧之光点亮业务需求与创新构想
- **"全栈"赋能** - 从咨询、架构、Web/App/AI开发、测试、翻译到部署运维，覆盖全生命周期
- **"智造"精工** - 融合人工智能与创新技术，在数字熔炉中锻造稳定、高效、智能的解决方案
- **"工场"协作** - 依托 xinguang.online 高效互联，透明协同，只为交付卓越

## 🚀 主要功能模块

### 1. 首页展示 (Hero Section)
- 品牌价值主张展示
- 核心服务概览
- 快速联系入口
- 视觉化品牌形象

### 2. 价值主张展示 (Pillars Section)
- 四大核心理念详细阐述
- 图标化展示，直观易懂
- 方法论体系介绍

### 3. 服务产品矩阵 (Services Section)
当前集成的核心服务包括：

#### 🔹 Ag股票智能分析助手
- **功能**: 面向A股的智能行情与策略分析助手
- **特色**: 可靠 · 高效 · 可扩展
- **访问**: [agaistock.cn](https://agaistock.cn)

#### 🔹 智能录音助手
- **功能**: 高质量语音识别与文本清洗
- **特色**: 支持批量处理 · 标点恢复 · 分段对齐
- **支持**: 多语种与多场景的知识沉淀
- **访问**: [xinguang.online/s2t](https://xinguang.online/s2t)

#### 🔹 Nextcloud 云服务
- **功能**: 私有化云盘与协作空间
- **特色**: 端到端加密 · 多端同步 · 细粒度权限
- **用途**: 安全存储、共享与同步团队资料
- **访问**: [xinguang.online/nextcloud](https://xinguang.online/nextcloud)

### 4. 联系咨询 (Contact CTA)
- 项目咨询入口
- 免费初步咨询服务
- 技术路线建议
- 邮件联系: shawn.sang@hotmail.com

## 🛠️ 技术架构

### 前端技术栈
- **框架**: Next.js 15.2.4 (React 19)
- **样式**: Tailwind CSS 4.1.9
- **UI组件**: Radix UI + shadcn/ui
- **图标**: Lucide React
- **主题**: next-themes (支持暗色模式)
- **动画**: tailwindcss-animate

### 开发工具
- **包管理**: pnpm
- **语言**: TypeScript 5
- **代码规范**: ESLint
- **构建**: Next.js 内置构建系统

### 部署方案
- **容器化**: Docker + Docker Compose
- **输出模式**: Next.js Standalone
- **生产优化**: 多阶段构建，Alpine Linux基础镜像

## 📁 项目结构

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/             # React 组件
│   ├── ui/                # shadcn/ui 基础组件
│   ├── hero-section.tsx   # 首页英雄区
│   ├── pillars-section.tsx # 价值主张展示
│   ├── services-section.tsx # 服务展示
│   ├── contact-cta.tsx    # 联系咨询
│   ├── site-header.tsx    # 网站头部
│   └── site-footer.tsx    # 网站底部
├── data/                   # 数据配置
│   └── services.ts        # 服务配置
├── lib/                    # 工具函数
├── public/                 # 静态资源
│   └── images/            # 图片资源
└── styles/                 # 样式文件
```

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

### Docker 部署

```bash
# 使用 Docker Compose（推荐）
docker-compose up --build

# 或使用 Docker 命令
docker build -t xinguang-portal .
docker run -p 3000:3000 xinguang-portal
```

详细的 Docker 部署说明请参考 [README-Docker.md](./README-Docker.md)

## 🔧 配置说明

### 添加新服务

要添加新的服务到产品矩阵，请编辑 `data/services.ts` 文件：

```typescript
export const services: Service[] = [
  // 现有服务...
  {
    id: "new-service",
    name: "新服务名称",
    description: "服务描述",
    href: "https://service-url.com",
    status: "active",
    badge: "特色标签",
    imageSrc: "/images/service-screenshot.jpg",
    imageAlt: "服务截图",
    icon: "icon-name",
  },
]
```

### 自定义样式

项目使用 Tailwind CSS，可以通过以下方式自定义：
- 修改 `tailwind.config.js` 配置主题
- 在 `app/globals.css` 中添加全局样式
- 使用 CSS 变量定义颜色主题

## 📞 联系我们

- **邮箱**: shawn.sang@hotmail.com
- **网站**: xinguang.online
- **服务范围**: 前沿咨询 · 架构设计 · 敏捷开发（Web / App / AI）· 测试 · 翻译 · 部署 · 运维全生命周期

## 📄 许可证

本项目为私有项目，版权所有 © 心光全栈智造工场

---

*用心倾听，智慧锻造，为您的数字化转型保驾护航。*
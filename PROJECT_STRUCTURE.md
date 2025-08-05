# 项目目录结构说明

## 📁 目录结构概览

```
src/
├── app/                    # 页面路由 (类Next.js App Router结构)
│   ├── about/             # 关于页面
│   ├── agency/            # 代理页面
│   ├── api/               # API页面
│   ├── code/              # 代码下载页面
│   ├── demo/              # 演示页面
│   ├── docs/              # 文档页面
│   ├── download/          # 下载页面
│   ├── news/              # 新闻页面
│   ├── products/          # 产品页面
│   ├── service/           # 服务页面
│   ├── tips/              # 技巧页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 首页组件
├── components/            # 组件目录 (已重构为PascalCase命名)
│   ├── ui/                # 基础UI组件 (shadcn/ui)
│   ├── clients/           # 客户相关组件
│   ├── news/              # 新闻相关组件
│   ├── AboutComponent.tsx      # 关于组件
│   ├── AdvantagesSection.tsx   # 优势展示组件
│   ├── BackToTop.tsx          # 返回顶部组件
│   ├── CasesSection.tsx       # 案例展示组件
│   ├── ContactSection.tsx     # 联系我们组件
│   ├── FAQ.tsx               # 常见问题组件
│   ├── FooterSection.tsx     # 页脚组件
│   ├── FunctionSection.tsx   # 功能展示组件
│   ├── HeaderSection.tsx     # 页头组件
│   ├── HeroSection.tsx       # 英雄区域组件
│   ├── HotProducts.tsx       # 热门产品组件
│   ├── ProductShowcase.tsx   # 产品展示组件
│   ├── ProductsSection.tsx   # 产品区域组件
│   ├── ScenarioSection.tsx   # 场景展示组件
│   └── TerminalSection.tsx   # 终端展示组件
├── content/               # 内容管理
│   └── news/             # 新闻内容
├── constants/            # 常量定义 (新增)
│   └── index.ts          # 全局常量
├── hooks/                # 自定义Hook
│   ├── use-mobile.tsx    # 移动端检测Hook
│   ├── use-toast.ts      # Toast通知Hook
│   └── usePageMetadata.ts # 页面元数据Hook
├── lib/                  # 工具库
│   ├── autoUpdater.ts    # 自动更新工具
│   ├── fileScanner.ts    # 文件扫描工具
│   ├── imageUtils.ts     # 图片处理工具
│   ├── markdownLoader.ts # Markdown加载器
│   ├── newsApi.ts        # 新闻API
│   ├── newsFileIndex.ts  # 新闻文件索引
│   └── utils.ts          # 通用工具函数
├── styles/               # 样式文件
│   └── markdown.css      # Markdown样式
├── types/                # 类型定义 (新增)
│   └── index.ts          # 全局类型定义
├── App.tsx               # 应用主组件
├── main.tsx              # 应用入口
├── globals.css           # 全局样式
└── vite-env.d.ts         # Vite类型定义
```

## 🔧 改进内容

### 1. 组件命名规范化
- ✅ 统一使用 PascalCase 命名
- ✅ 删除重复的旧文件
- ✅ 更新所有导入路径

### 2. 新增目录结构
- ✅ `src/types/` - 集中管理TypeScript类型定义
- ✅ `src/constants/` - 集中管理常量配置

### 3. 代码组织优化
- ✅ 组件按功能分组
- ✅ 工具函数模块化
- ✅ 类型定义标准化

## 📋 命名规范

### 组件命名
- **文件名**: PascalCase (如 `HeaderSection.tsx`)
- **组件名**: PascalCase (如 `HeaderSection`)
- **Props接口**: PascalCase + Props (如 `HeaderSectionProps`)

### 文件命名
- **页面文件**: `page.tsx`
- **布局文件**: `layout.tsx`
- **工具文件**: camelCase (如 `imageUtils.ts`)
- **类型文件**: camelCase (如 `index.ts`)

### 目录命名
- **页面目录**: kebab-case (如 `about/`, `products/`)
- **组件目录**: camelCase (如 `clients/`, `news/`)

## 🚀 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **路由**: React Router DOM
- **样式**: Tailwind CSS
- **UI组件**: shadcn/ui + Radix UI
- **动画**: Framer Motion
- **图标**: Lucide React

## 📝 开发规范

1. **组件开发**
   - 使用函数式组件 + Hooks
   - 优先使用TypeScript类型定义
   - 遵循单一职责原则

2. **样式规范**
   - 优先使用Tailwind CSS类名
   - 避免内联样式
   - 响应式设计优先

3. **代码质量**
   - 使用ESLint进行代码检查
   - 保持代码简洁可读
   - 添加必要的注释

## 🔄 迁移指南

如果需要添加新组件或页面，请遵循以下规范：

1. **新增页面**: 在 `src/app/` 下创建对应目录
2. **新增组件**: 在 `src/components/` 下创建，使用PascalCase命名
3. **新增类型**: 在 `src/types/index.ts` 中添加类型定义
4. **新增常量**: 在 `src/constants/index.ts` 中添加常量定义

这样的结构更加清晰、可维护，符合现代React项目的最佳实践。
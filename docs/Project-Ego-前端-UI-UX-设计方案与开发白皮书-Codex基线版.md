# 📖 Project Ego: 前端 UI/UX 设计方案与开发白皮书 (Codex 基线版)

## 1. 核心视觉哲学（Visual Base）

- **风格定义**：新粗野主义（Neo-Brutalism）与先锋解构主义（Deconstructivism）的深度缝合。以精密建筑图纸为视觉隐喻，强调绝对的确定性。
- **三大核心禁令（HR-Rule，AI必须无条件遵守）**：
  1. **零圆角（Zero Border Radius）**：全局禁止使用任何带有圆角特征的 Tailwind 类名（如 `rounded`, `rounded-md` 等）。所有边界必须是 absolute 90度斜角。
  2. **零投影与零渐变（No Shadows & Gradients）**：全局禁用所有投影（如 `shadow-sm`, `shadow-lg` 等）与颜色渐变。层级必须通过 `1px` 实线进行物理分割。
  3. **高对比度单色系（High contrast monochrome）**：底色绝对纯白，文字绝对纯黑，唯一的彩色是用于状态灯和高亮的警示红（`#FF3333`）。

---

## 2. 视觉设计系统（Design Tokens）

### 2.1 颜色系统 (Color Scheme)

```typescript
{
  "--color-base": "#FFFFFF",          // 绝对纯白背景
  "--color-panel": "#F7F7F9",         // 悬停极淡灰面板
  "--color-line": "rgba(0,0,0,0.08)", // 8%透明度黑色物理线
  "--color-text-main": "#000000",     // 绝对深黑文字
  "--color-text-muted": "#666666",    // 中灰说明文字
  "--color-accent": "#FF3333"         // 警示红（唯一高亮色）
}
```

### 2.2 字体排版系统 (Typography)

- **大标题（英文）**：`Cinzel Decorative` (罗马尖角雕刻花体，字重 Bold，大写，行高紧致偏向 `leading-none`)
- **中英文正文**：`仿宋 (STFangsong / FangSong / 华文仿宋)` (字形骨感挺拔，字重偏细，避开一切常规宋体与黑体)
- **代码与数据/编号**：`JetBrains Mono` (等宽体，用于系统控制日志、数字与状态码)

---

## 3. 页面全局网格与脚手架设计 (Interface Framework)

系统在底层由四条极细的 `1px` 参考线将屏幕切分为九宫格（不对称二八法则）：

1. 纵向垂线1：位于屏幕左侧 `18%` 处（`left-[18%]`），作为状态栏和系统ID的边界。
2. 纵向垂线2：位于屏幕右侧 `68%` 处（`left-[68%]`，大屏显示），作为主视觉纵深线。
3. 横向水平线1：位于屏幕顶部 `18vh` 处（`top-[18vh]`）。
4. 针对这些交点，显式打上 `[+]` 十字准星符号，作为图纸定位元数据展示。

---

## 4. 核心组件结构规范 (Component Spec)

### 4.1 全局白噪点滤镜层 (Film Grain Container)

在 React 最外层 `Layout` 顶部必须包裹一层静态的、低透明度的 SVG 白噪点，模拟美术纸张的粗糙纤维质感：

```html
<div class="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50 bg-[url('data:image/svg+xml,...')] opacity-[0.038]" />
```

### 4.2 极简无阴影卡片网格 (Flat Grid Cards)

- **物理结构**：多边框卡片合并。卡片之间无间隙，采用 `gap-px` 拼接。
- **交互规范**：
  - 平时：`bg-base` (纯白)，`border-transparent`。
  - 悬停（Hover）：底色微变 `bg-panel`，**四框变为 1px 的纯黑色实线** (`border-textMain`)，光标强制为 `cursor-crosshair`。

---

## 5. Codex 生产力代码输出（App.jsx & index.css）

> ⚠️ **Codex 部署说明**：
> 请 Codex 直接根据以上《白皮书设计规范》，在 React 19 + Vite 8 + TailwindCSS 3 架构中，编写出完全符合规范的个人主页核心逻辑。

### 💻 核心逻辑注入 (src/App.jsx)

```jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';

// --- 极客解密文字组件 (符合等宽字体) ---
const DecryptText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = '01EX_INFRA';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text.split('').map((char, index) => {
          if (index < iteration) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 25);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="font-mono">{displayText}</span>;
};

export default function App() {
  return (
    <div className="min-h-screen relative font-main selection:bg-accent selection:text-white select-none">
    
      {/* 1. 工业底盘线 */}
      <div className="fixed top-0 left-[18%] w-px h-full bg-line z-0" />
      <div className="fixed top-0 left-[68%] w-px h-full bg-line z-0 hidden lg:block" />
      <div className="fixed top-[18vh] left-0 w-full h-px bg-line z-0" />
      <div className="fixed bottom-[12vh] left-0 w-full h-px bg-line z-0" />

      {/* 2. 十字测绘针 */}
      <div className="fixed top-[18vh] left-[18%] -translate-x-1/2 -translate-y-1/2 text-textMain/30 text-xs font-mono select-none">[+]</div>
      <div className="fixed bottom-[12vh] left-[68%] -translate-x-1/2 -translate-y-1/2 text-textMain/30 text-xs font-mono select-none hidden lg:block">[+]</div>

      <main className="relative z-10 w-full h-full flex flex-col pt-[23vh] px-6 lg:px-[18%] pb-32">
      
        {/* 顶部日志控制信息 */}
        <header className="flex items-center gap-6 text-[9px] tracking-[0.25em] text-textMuted uppercase border-l-2 border-accent pl-4 mb-24 font-mono">
          <span className="flex items-center gap-2 text-textMain font-bold">
            <span className="w-1.5 h-1.5 bg-accent animate-pulse" /> RUNNING
          </span>
          <span>ID: PENG_JIE</span>
          <span>CORE: FANGSONG_V1</span>
        </header>

        {/* 罗马尖角大标题 */}
        <div className="flex flex-col gap-0 select-none mb-16">
          <h1 className="font-cinzel text-6xl md:text-8xl lg:text-9xl text-textMain leading-none font-bold uppercase tracking-normal">
            Rebuild
          </h1>
          <h1 class="font-cinzel text-4xl md:text-6xl lg:text-7xl text-textMuted mt-4 md:ml-40 tracking-wider lowercase">
            the base
          </h1>
        </div>

        {/* 个人哲学格言格（硬笔仿宋折角） */}
        <div className="max-w-lg border-t border-textMain pt-6 flex flex-col gap-4">
          <div className="text-[9px] text-accent tracking-widest uppercase font-bold font-mono">
            {">>> LOG_STREAM_01: SOURCE_CONFIRM"}
          </div>
          <p className="text-[13px] leading-loose text-textMuted font-light">
            我们正在目睹一场大规模的系统性审美退化。<br />
            大模型用相同的圆角、发腻的渐变和弥散阴影，将互联网格式化为相同的平庸。<br />
            在 EGO，我们用尖锐的直角与最锋利的石碑雕刻字体，建立一条固执、清醒的数字防线。
          </p>
        </div>

        {/* 工业卡片流网格：90度直角拼接 */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
        
          <ProjectCard 
            title="Conflux" 
            tag="01.AGENTIC"
            desc="基于 2.5s 静默期与本地模糊匹配的知识库。以过滤 80% 无效大模型调用，强制 Diff 预览回写杜绝静默篡改。"
          />
        
          <ProjectCard 
            title="Ego" 
            tag="02.INFRA"
            desc="本地优先的 AIGC 智能中枢。高度整合 RAG 与 Function Calling 并支持本地安全隔离的个人数字基座。"
          />

        </div>
      </main>
    </div>
  );
}

// --- 卡片单元 (纯直角硬交互) ---
function ProjectCard({ title, tag, desc }) {
  return (
    <div className="bg-base p-8 hover:bg-panel transition-colors border border-transparent hover:border-textMain cursor-crosshair group flex flex-col min-h-[260px]">
      <div className="flex justify-between items-start mb-12">
        <h2 className="font-cinzel text-2xl text-textMain leading-none font-bold uppercase">
          <DecryptText text={title} />
        </h2>
        <span className="text-[9px] border border-textMain/20 px-2 py-1 text-textMuted group-hover:text-accent group-hover:border-accent transition-colors font-bold tracking-widest font-mono">
          {tag}
        </span>
      </div>
    
      <p className="text-[13px] text-textMuted mt-auto leading-relaxed font-light">
        {desc}
      </p>

      <div className="mt-8 flex items-center gap-2 text-[9px] text-textMuted/40 uppercase group-hover:text-textMain transition-colors font-mono select-none">
        <Cpu size={10} />
        <span>Execution_Chain()</span>
      </div>
    </div>
  );
}
```

### 🖥️ 骨骼控制样式表 (src/index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #FFFFFF;
  margin: 0;
  overflow-x: hidden;
}

/* 强制中文注入仿宋字骨 */
.font-main {
  font-family: "FangSong", "STFangsong", "仿宋", "华文仿宋", serif;
}

/* 隐藏滚动条 */
::-webkit-scrollbar {
  width: 0px;
}
```

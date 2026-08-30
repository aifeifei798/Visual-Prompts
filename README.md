# 港系视觉 · HK Visual Prompts

为港系高级时尚写真（Vogue 香港 / 经典写真集风格）生成可直接复制给 AI 生图模型的**中文自然语言提示词**。

核心理念：**清透氧气感 · 高级时尚感 · 自然生命力 · 香港电影感**。拍摄不局限在香港，但风格以港系为根。

本仓库是一个面向 opencode 的 Agent + Skill 组合包，附带多套已产出的示例提示词，供查阅、复用与二次创作。

---

## 这是什么

- **Agent**：`agent/hk-visual.md` — 港系视觉总监，负责把需求规整成一套连贯的港风提示词。
- **Skill**：`skills/hk-visual-prompts/SKILL.md` — 风格定调、语汇库、场景库、摄影参数库与红线禁忌的完整写作规范。
- **Samples**：`samples/` — 多套已生成的示例提示词，展示 skill 的实际产出。

Agent 与 Skill 配合：**Agent 负责流程与输出规范，Skill 提供写作语法与素材库**。二者独立可复用。

---

## 目录结构

```
.
├── README.md
├── LICENSE
├── .gitignore
├── agent/
│   └── hk-visual.md                  # 港系视觉总监 Agent 定义
├── skills/
│   └── hk-visual-prompts/
│       └── SKILL.md                  # 港系提示词写作 Skill
└── samples/                           # 示例提示词（可直接复制给 AI 生图）
    ├── 01-港姐冬日写真-浪漫土耳其/
    │   └── prompts.md                # 10 组 · 冬日土耳其
    ├── 02-雪中红裙-港式正红/
    │   └── prompts.md                # 10 组 · 正红重点色
    ├── 03-黑金年夜/
    │   └── prompts.md                # 8 组 · 黑金夜景
    ├── 04-港片红绿撞色午夜/
    │   └── prompts.md                # 8 组 · 红绿双色夜
    └── 05-雾蓝晨风/
        └── prompts.md                # 8 组 · 雾灰蓝晨光
```

---

## 安装到 opencode

### 方法一：复制到全局配置

```bash
# 复制 Agent
mkdir -p ~/.config/opencode/agent
cp agent/hk-visual.md ~/.config/opencode/agent/

# 复制 Skill
mkdir -p ~/.config/opencode/skills/hk-visual-prompts
cp skills/hk-visual-prompts/SKILL.md ~/.config/opencode/skills/hk-visual-prompts/
```

### 方法二：作为项目级配置

把 `agent/` 与 `skills/` 目录复制到项目的 `.opencode/` 目录下，即可在项目内使用。

---

## 使用示例

在 opencode 中与 `hk-visual` Agent 对话：

- 「港姐冬日写真，浪漫土耳其 10 组」
- 「一组『雪中红裙』的港式复古正红重点色版本」
- 「黑金年夜」
- 「港片红绿撞色午夜」
- 「雾蓝晨风」

Agent 会加载 Skill，按规范产出一整段、可直接复制的连贯中文提示词。

---

## 风格红线（输出前自检）

- 禁止「男友视角 / 偷拍 / 恶作剧 / 偷吃」等低幼尴尬剧情。
- 禁止「标准微笑 / 手叉腰站立 / 比耶」等机械摆拍词。
- 提示词内**禁止方括号、圆括号与加号**，必须是一整段连贯自然语言。
- 保持高级、清透、微甜，避免低俗化描写。

---

## License

[MIT](./LICENSE)

# OpenCode 风格提示词系统

港系 / 日系小清新 / 韩系 / 武侠 / 纽约模特五种风格的 AI 生图提示词工程，含自动路由插件。

## 项目结构

```
opencode.jsonc                  # 项目配置（default_agent + skills 路径）
.opencode/
  agents/
    hk-visual.md                # 港系视觉 agent
    jp-visual.md                # 日系小清新视觉 agent（含比基尼/夏日女友专题）
    kr-visual.md                # 韩系视觉 agent（韩剧 / K-pop）
    ny-visual.md                # 纽约模特视觉 agent（NYC 街拍 / 美式大片）
    wf-visual.md                # 武侠视觉 agent
  commands/
    hk.md                       # /hk 切到港系
    jp.md                       # /jp 切到日系
    kr.md                       # /kr 切到韩系
    ny.md                       # /ny 切到纽约模特
    wf.md                       # /wf 切到武侠
  plugins/
    auto-route.ts               # chat.message 钩子：按关键词自动切换 agent（含比基尼/韩系/纽约路由）
  skills/
    hk-visual-prompts/SKILL.md  # 港系写作骨架 + 语汇库
    jp-visual-prompts/SKILL.md  # 日系写作骨架 + 语汇库
      references/
        jp-bikini-summer-50.md  # 日系比基尼·夏日女友 50 组视觉资产库（5 条海岸线）
    kr-visual-prompts/SKILL.md  # 韩系写作骨架 + 语汇库（韩剧/K-pop/首尔氛围）
    ny-visual-prompts/SKILL.md  # 纽约模特写作骨架 + 语汇库（NYC 街拍/美式大片）
    wf-visual-prompts/SKILL.md  # 武侠写作骨架 + 语汇库
```

## 风格

- **港系**：清透氧气感 + 高级时尚感 + 香港电影感
- **日系小清新**：温柔青涩 + 棉花糖氧气感 + 日系初恋电影感
- **韩系**：氛围感 + 精致 MZ 都市感 + 韩剧心动的眼泪感 + K-pop 时尚
- **纽约模特**：美式自信活力 + 街头随性 effortless + 编辑大刊气场 + 都市多元锋芒
- **武侠**：孤傲凌厉 + 侠气纵横 + 武侠电影感

## 使用方式

- 直接描述风格（港风 / 日系 / 韩剧 / K-pop / 纽约 / NYC / 武侠），插件会尝试自动切换 agent
- 或用 `/` + Tab 切换：`/hk`、`/jp`、`/kr`、`/ny`、`/wf`

## 安装

1. 将本项目放到 opencode 可扫描的目录
2. `cd` 到项目根目录
3. `quit` 并重启 opencode
4. 依赖 `@opencode-ai/plugin` 需已在 `.opencode/node_modules/` 安装

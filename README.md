# OpenCode 风格提示词系统

港系 / 日系小清新 / 韩系 / 武侠 / 纽约模特 / 加州邻家女孩 / 英伦模特七种风格的 AI 生图提示词工程，含自动路由插件。

## 项目结构

```
opencode.jsonc                  # 项目配置（default_agent + skills 路径）
.opencode/
  agents/
    ca-visual.md                # 加州邻家女孩视觉 agent（阳光海岸 / 冲浪）
    hk-visual.md                # 港系视觉 agent
    jp-visual.md                # 日系小清新视觉 agent（含比基尼/夏日女友专题）
    kr-visual.md                # 韩系视觉 agent（韩剧 / K-pop）
    ny-visual.md                # 纽约模特视觉 agent（NYC 街拍 / 美式大片）
    uk-visual.md                # 英伦模特视觉 agent（优雅含蓄 / 复古贵气 / 学院派 / 雾都）
    wf-visual.md                # 武侠视觉 agent
  commands/
    ca.md                       # /ca 切到加州邻家女孩
    hk.md                       # /hk 切到港系
    jp.md                       # /jp 切到日系
    kr.md                       # /kr 切到韩系
    ny.md                       # /ny 切到纽约模特
    uk.md                       # /uk 切到英伦模特
    wf.md                       # /wf 切到武侠
  plugins/
    auto-route.ts               # chat.message 钩子：按关键词自动切换 agent（含比基尼/韩系/纽约/加州/英伦路由）
  skills/
    ca-visual-prompts/SKILL.md  # 加州邻家女孩写作骨架 + 语汇库（阳光海岸/冲浪）
    hk-visual-prompts/SKILL.md  # 港系写作骨架 + 语汇库
    jp-visual-prompts/SKILL.md  # 日系写作骨架 + 语汇库
      references/
        jp-bikini-summer-50.md  # 日系比基尼·夏日女友 50 组视觉资产库（5 条海岸线）
    kr-visual-prompts/SKILL.md  # 韩系写作骨架 + 语汇库（韩剧/K-pop/首尔氛围）
    ny-visual-prompts/SKILL.md  # 纽约模特写作骨架 + 语汇库（NYC 街拍/美式大片）
    uk-visual-prompts/SKILL.md  # 英伦模特写作骨架 + 语汇库（优雅含蓄/学院派/雾都胶片）
    wf-visual-prompts/SKILL.md  # 武侠写作骨架 + 语汇库
```

## 风格

- **港系**：清透氧气感 + 高级时尚感 + 香港电影感
- **日系小清新**：温柔青涩 + 棉花糖氧气感 + 日系初恋电影感
- **韩系**：氛围感 + 精致 MZ 都市感 + 韩剧心动的眼泪感 + K-pop 时尚
- **纽约模特**：美式自信活力 + 街头随性 effortless + 编辑大刊气场 + 都市多元锋芒
- **加州邻家女孩**：阳光灿烂 + 亲切自然 + 自由随性 + 健康活力 + 干净真实
- **英伦模特**：含蓄克制 + 贵气典雅 + 复古暗调 + 学院派 + 低调有腔调 + 带一点英伦摇滚的叛逆
- **武侠**：孤傲凌厉 + 侠气纵横 + 武侠电影感

## 使用方式

- 直接描述风格（港风 / 日系 / 韩剧 / K-pop / 纽约 / NYC / 加州 / Cali / 英伦 / 伦敦 / UK / 武侠），插件会尝试自动切换 agent
- 或用 `/` + Tab 切换：`/ca`、`/hk`、`/jp`、`/kr`、`/ny`、`/uk`、`/wf`

## 安装

1. 将本项目放到 opencode 可扫描的目录
2. `cd` 到项目根目录
3. `quit` 并重启 opencode
4. 依赖 `@opencode-ai/plugin` 需已在 `.opencode/node_modules/` 安装

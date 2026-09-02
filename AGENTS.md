# AGENTS.md

> 7 风格 AI 生图提示词工程（港/日/韩/武侠/纽约/加州/英伦）。无构建/测试/CI，纯 `opencode` 配置 + Markdown + 单插件。

## Source of Truth
- `opencode.jsonc`：`default_agent: hk-visual`，`skills.paths: [".opencode/skills"]` — skills 不在默认路径。
- `README.md`：风格定义、安装与全局同步说明以此为准。
- 各 `*.md` 内的 frontmatter 与 `SKILL.md §2` 红线为执行约束，可信于任何口头描述。

## Structure
```
.opencode/
  agents/*.md        # 7 个 primary agents (hk/jp/kr/wf/ny/ca/uk)，model: opencode/big-pickle
  commands/*.md      # /hk /jp /kr /wf /ny /ca /uk — 每条 frontmatter 含 agent: 切代理，body 含 $ARGUMENTS
  plugins/auto-route.ts  # chat.message 钩子，按 RULES 关键词改 output.message.agent（首个匹配即 break）
  skills/*/SKILL.md  # 写作骨架、语汇/场景/摄影参数库、§2 红线禁忌
    jp-visual-prompts/references/jp-bikini-summer-50.md  # 仅 jp 语境+比基尼/泳装关键词时按需加载
samples/             # 已生成提示词示例，非源码
```

## Adding / Editing a Style — 4 Places Must Stay In Sync
1. `.opencode/agents/<name>.md` — `name`/`description`/`mode: primary`/`model`/`color`
2. `.opencode/commands/<name>.md` — `agent: <name>` + `$ARGUMENTS` 调用 skill
3. `.opencode/skills/<name>/SKILL.md` — 骨架与语汇库
4. `.opencode/plugins/auto-route.ts` — `RULES` 追加关键词
5. 同步改 `README.md` 结构表与风格表；新增 `references/` 要在对应 agent/command 标注加载条件。

## Prompt Constraints (All 7 Skills Share)
- 输出=单段连贯中文自然语言长句，按 `构图景别 → 动态神态 → 穿搭/面料/妆容 → 实景 → 胶片光影` 顺序，不可缺要素。
- 禁止：`[]` `()` `+` 出现在提示词正文；`男友视角/偷拍/恶作剧/偷吃`；`标准微笑/手叉腰/比耶/凹造型/摆pose`；低俗化描写。自检后才输出。
- 成套输出可编号，但每组内部仍是独立完整可复制段落。

## Setup & Verification
- 本地：依赖仅 `@opencode-ai/plugin@1.18.25` 在 `.opencode/node_modules/`（`npm install`，lockfile 走 `registry.npmmirror.com`）。
- 全局（任意项目可用）：`.opencode/` 仅仓库根目录生效；需同步到 `~/.config/opencode/`：
  ```bash
  cp .opencode/agents/*.md      ~/.config/opencode/agents/
  cp .opencode/commands/*.md    ~/.config/opencode/commands/
  cp .opencode/plugins/*.ts     ~/.config/opencode/plugins/
  for s in .opencode/skills/*/; do rm -rf ~/.config/opencode/skills/"$(basename "$s")"; cp -a "$s" ~/.config/opencode/skills/; done
  # 全局同样需要 @opencode-ai/plugin 在 ~/.config/opencode/node_modules/
  ```
- 修改 agents/commands/plugins/skills 后必须 `quit` 重启 opencode 才生效。
- 验证：`opencode debug config`（任意目录执行）应列出 7 agents + 7 commands。

## Quirks
- 无 `package.json` scripts / lint / typecheck / test / CI — 不要臆造 `npm test`。
- `auto-route.ts` 直接改 `output.message.agent`，静默 catch，不阻塞消息；关键词大小写敏感按 `String.includes` 匹配。
- `opencode.jsonc` 使用带注释的 JSONC，非标准 JSON。
- `jp-bikini-summer-50.md` 不会自动发现，需 agent/command 显式要求加载。

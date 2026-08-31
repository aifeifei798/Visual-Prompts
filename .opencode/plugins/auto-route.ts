import type { PluginInput, PluginOptions, Hooks } from "@opencode-ai/plugin"

const RULES: Record<string, string[]> = {
  "jp-visual": ["日系", "小清新", "初恋感", "棉麻", "柔焦胶片", "日系穿搭", "日系校园风", "比基尼", "夏日女友", "海边写真", "海滩写真", "泳装", "bikini"],
  "hk-visual": ["港风", "港系", "港姐", "Vogue香港", "香港电影感", "霓虹夜色", "唐楼", "维港"],
  "wf-visual": ["武侠", "金庸", "古龙", "徐克", "侠客", "侠女", "江湖", "剑气"],
  "kr-visual": ["韩剧", "韩系", "韩风", "K-pop", "Kpop", "kpop", "mtv", "MTV", "首尔", "汉江", "弘大", "梨泰院", "圣水洞", "韩系穿搭", "韩系妆容", "氛围感人像", "韩系初恋"],
}

export default async (
  input: PluginInput,
  options?: PluginOptions,
): Promise<Hooks> => {
  return {
    async "chat.message"(_input, output) {
      const parts = output.parts as { type: string; text?: string }[]
      const text = parts
        .filter((p) => p.type === "text")
        .map((p) => p.text ?? "")
        .join(" ")

      for (const [agent, keywords] of Object.entries(RULES)) {
        if (keywords.some((kw) => text.includes(kw))) {
          // 尝试把当前用户消息的 agent 切到匹配的风格，让本轮消息走新 agent
          try {
            ;(output.message as Record<string, unknown>).agent = agent
          } catch {
            // 静默失败，不阻塞消息发送
          }
          break
        }
      }
    },
  }
}

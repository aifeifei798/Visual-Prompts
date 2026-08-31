import type { PluginInput, PluginOptions, Hooks } from "@opencode-ai/plugin"

const RULES: Record<string, string[]> = {
  "jp-visual": ["日系", "小清新", "初恋感", "棉麻", "柔焦胶片", "日系穿搭", "日系校园风", "比基尼", "夏日女友", "海边写真", "海滩写真", "泳装", "bikini"],
  "hk-visual": ["港风", "港系", "港姐", "Vogue香港", "香港电影感", "霓虹夜色", "唐楼", "维港"],
  "wf-visual": ["武侠", "金庸", "古龙", "徐克", "侠客", "侠女", "江湖", "剑气"],
  "kr-visual": ["韩剧", "韩系", "韩风", "K-pop", "Kpop", "kpop", "mtv", "MTV", "首尔", "汉江", "弘大", "梨泰院", "圣水洞", "韩系穿搭", "韩系妆容", "氛围感人像", "韩系初恋"],
  "ny-visual": ["纽约", "纽约模特", "NYC", "New York", "美式", "美国时尚", "Vogue 美版", "美版杂志", "时装周", "街拍", "街头潮人", "曼哈顿", "布鲁克林", "苏活区", "第五大道", "下城", "中央公园", "美式穿搭", "cool-girl", "纽约大片", "美式大片"],
  "ca-visual": ["加州", "加利福尼亚", "California", "Cali", "加州女孩", "邻家女孩", "阳光海岸", "冲浪", "冲浪少女", "加州梦", "瑞典休闲", "美式休闲", "Santa Monica", "圣莫尼卡", "Venice Beach", "威尼斯海滩", "Malibu", "马里布", "洛杉矶", "棕榈树", "粉色夕阳", "加州写真", "海岸人像"],
  "uk-visual": ["英伦", "英国", "大不列颠", "伦敦", "UK", "Britain", "British", "英伦模特", "英伦风", "英式", "英国模特", "伦敦时装周", "British Vogue", "英伦摇滚", "Savile Row", "苏格兰格纹", "学院风", "雾都", "复古英伦", "Cool Britannia", "英式优雅", "英伦大片", "英式学院"],
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

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AI客服",
  description: "A VitePress Site",
  themeConfig: {
    // search: {
    //   provider: "local",
    // },
    algolia: {
      appId: "1K6FEL350T", // 需要替换
      apiKey: "21a4a77c64c2e01c96e104e72117e332", // 需要替换
      indexName: "superjy", // 需要替换
      placeholder: "全文搜索",
      translations: {
        button: {
          buttonText: "搜索文档",
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "AI客服介绍", link: "/markdown-examples" },
      { text: "AI工具", link: "/ai" },
    ],

    sidebar: [
      {
        text: "AI客服介绍",
        items: [
          { text: "AI客服", link: "/markdown-examples" },
          { text: "联系我们", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  head: [
    [
      "script",
      {},
      `
      window.difyChatbotConfig = { token: 'OS9EyVJcFQR2C3vP' }
      `,
    ],
    [
      "script",
      {
        src: "https://udify.app/embed.min.js",
        id: "OS9EyVJcFQR2C3vP",
        defer: true,
      },
    ],
    [
      "script",
      {},
      `
      setTimeout(()=>embedChatbot(),200)
       `,
    ],
  ],
});

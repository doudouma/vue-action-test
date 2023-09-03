import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的世界",
  description: "My AI World",
  lang: "zh-CH",
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
    nav: [{ text: "首页", link: "/" }],

    sidebar: [
      {
        items: [
          { text: "AI导航", link: "/ai" },
          { text: "Qwik学习", link: "/qwik" },
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

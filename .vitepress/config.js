import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // search: {
    //   provider: "local",
    // },
    algolia: {
      appId: "1K6FEL350T", // 需要替换
      apiKey: "21a4a77c64c2e01c96e104e72117e332", // 需要替换
      indexName: "note.superjy.cn", // 需要替换
      placeholder: "Search docs",
      buttonText: "search",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "test", link: "/test" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
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
      setTimeout(()=>embedChatbot(),100)
       `,
    ],
  ],
});

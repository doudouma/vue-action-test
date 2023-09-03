module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [".vitepress/**/*.js", ".vitepress/**/*.vue", ".itepress/**/*.ts"],
    options: {
      safelist: ["html", "body"],
    },
  },
};

import DefaultTheme from "vitepress/theme";
import "./tailwind.postcss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component("MyGlobalComponent" /* ... */);
  },
};

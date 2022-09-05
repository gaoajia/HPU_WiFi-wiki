
import { defineConfig4CustomTheme } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import themeConfig from "./config/themeVdoingConfig";
import markdown from "./config/markdown";
import plugins from "./config/plugins";
import head from "./config/head";

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  title: "HPU_WiFi-wiki", 
  description: "HPU_WiFi 使用文档",
  dest: "dist", 
  shouldPrefetch: () => false, 
  head: head, 
  theme: "vdoing",
  themeConfig, 
  markdown, 
  plugins,
});

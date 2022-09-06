import nav from "./nav";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";

export default <VdoingThemeConfig>{
  nav: nav, 
  sidebarDepth: 2, 
  logo: "/assets/img/logo.png", 
  repo: "gaoajia/HPU_WiFi-wiki", 
  searchMaxSuggestions: 10, 
  lastUpdated: "上次更新", 
  docsDir: "docs", 
  editLinks: true, 
  editLinkText: "编辑", 

  //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

  category: false, 
  tag: true,
  archive: true, 
  sidebarOpen: true, 

  sidebar: { mode: "structuring", collapsable: true }, // 侧边栏  
  updateBar: {
    showToArticle: false, 
    moreArticle: "/archives", 
  },

  author: {
    name: "AjiaErin", 
  },
  social: {
    icons: [
      {
        iconClass: "icon-QQ",
        title: "QQ",
        link: "http://wpa.qq.com/msgrd?v=3&uin=2949970175&site=qq&menu=yes",
      },
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/gaoajia/HPU_WiFi-wiki",
      },
      {
        iconClass: "icon-youjian",
        title: "发邮件",
        link: "mailto:icpove@gmail.com",
      },
    ],
  },
};

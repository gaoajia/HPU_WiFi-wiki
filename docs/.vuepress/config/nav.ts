
import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "目录",
    items: [
      {
        text: "开始",
        link: "/start/",
      },
      {
        text: "故障a",
        link: "/deploy/",
      },
      {
        text: "更多参考",
        link: "/more/",
      },
    ],
  },
];

import { UserPlugins } from "vuepress/config";
import fs from "fs";
import { resolve } from "path";
import type { SmPlayerPluginOption } from "vuepress-plugin-smplayer/types";

export default <UserPlugins>[
  [
    "sitemap",
    {
      hostname: `https://${fs.readFileSync(
        resolve(__dirname, "../public", "CNAME")
      )}`,
    },
  ],
  [
    "smplayer",
    {
      artplayer: {
        src: {
          playbackRate: true,
          whitelist: ["*"],
          moreVideoAttr: {
            preload: "auto",
          },
        },
      },
    } as SmPlayerPluginOption,
  ],
  ["pangu"],
  [
    "one-click-copy",
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ],
      copyMessage: "复制成功",
      duration: 1000,
      showInMobile: false,
    },
  ],
  [
    "zooming",
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  ["fulltext-search"],
];

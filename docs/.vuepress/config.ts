import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  base: "/Myblog/",
  lang: "zh-CN",
  title: "皇甫龙韬 | Longtao Huangfu",
  description: "肿瘤药理学研究者，专注于胃癌演化、ecDNA 与抗肿瘤药物开发。",
  bundler: viteBundler(),
  head: [
    ["link", { rel: "icon", href: "/Myblog/assets/images/avatar-stomach.jpeg" }],
    ["meta", { name: "author", content: "Longtao Huangfu" }],
    [
      "meta",
      {
        name: "keywords",
        content: "皇甫龙韬, Longtao Huangfu, 胃癌, ecDNA, 肿瘤演化, 抗肿瘤药物, 北京大学肿瘤医院",
      },
    ],
  ],
  theme: defaultTheme({
    logo: "/assets/images/avatar-stomach.jpeg",
    logoAlt: "Longtao Huangfu",
    navbar: [
      { text: "首页", link: "/" },
      { text: "团队研究", link: "/research-team/" },
      { text: "微信推文", link: "/wechat/" },
      { text: "实用技能", link: "/practical-skills/" },
      { text: "碎碎念", link: "/notes/" },
      {
        text: "简历",
        children: [
          { text: "中文 CV", link: "https://ydlongtao.github.io/Myblog/assets/files/longtao-huangfu-cv-cn.pdf" },
          { text: "English CV", link: "https://ydlongtao.github.io/Myblog/assets/files/longtao-huangfu-cv-en.pdf" },
        ],
      },
    ],
    sidebar: {
      "/research-team/": [
        {
          text: "团队研究",
          children: ["/research-team/"],
        },
      ],
      "/wechat/": "heading",
      "/practical-skills/": [
        {
          text: "实用技能",
          children: ["/practical-skills/"],
        },
      ],
      "/notes/": [
        {
          text: "碎碎念",
          children: ["/notes/"],
        },
      ],
    },
    lastUpdated: true,
    contributors: false,
    colorMode: "light",
    colorModeSwitch: false,
    editLink: false,
  }),
});

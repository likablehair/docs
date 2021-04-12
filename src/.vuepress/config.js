const { description } = require("../../package");

module.exports = {
  title: "PG Docs Guide",
  description: description,
  base: "/docs/",
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Component",
        link: "/components/",
      },
      {
        text: "API",
        link: "/api/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: true,
          children: ["", "using-vue"],
        },
      ],
      "/components/": [
        {
          title: "Components",
          collapsable: true,
          children: ["", "component-list"],
        },
      ],
      "/api/": [
        {
          title: "API",
          collapsable: true,
          children: ["", "api-list"],
        },
      ],
    },
    
  },

  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

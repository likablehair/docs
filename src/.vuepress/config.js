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
    smoothScroll: true,
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
        },
      ],
      "/components/": [
        {
          title: "Components",
          collapsable: true,
        },
      ],
      "/api/": [
        {
          title: "API",
          collapsable: true,
        },
      ],
    },
    
  },

  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

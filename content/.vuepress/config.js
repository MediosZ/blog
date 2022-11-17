const feed_options = {
  canonical_base: "https://blog.mediosz.club/feed",
};
module.exports = {
  title: "Avalon",
  theme: "@vuepress/theme-blog",
  description: "Just a place called Avalon",
  base: "/",
  dest: "public",
  plugins: [
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    [
      "@vuepress/medium-zoom",
      {
        selector: ".vuepress-blog-theme-content :not(a) > img",
        options: {
          margin: 16,
        },
      },
    ],
    [
      "reading-progress",
      {
        readingDir: "_posts",
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: "English",
        link: "/",
      },
      {
        text: "中文",
        link: "/zh/",
      },
      {
        text: "Tags",
        link: "/tag/",
      },
    ],
    directories: [
      {
        id: "en",
        dirname: "_en",
        path: "/",
      },
      {
        id: "zh",
        dirname: "_posts",
        path: "/zh/",
        itemPermalink: "/en/:year/:month/:day/:slug",
        title: "中文",
        layout: "IndexPost",
        itemLayout: "Post",
      },
    ],
    summaryLength: 150,
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/MediosZ",
        },
        {
          type: "mail",
          link: "mailto:mediosrity@qq.com",
        },
      ],
      copyright: [
        {
          text: "晋ICP备17009000",
          link: "http://www.beian.miit.gov.cn/",
        },
      ],
    },
    feed: {
      canonical_base: "https://blog.mediosz.club",
    },
    smoothScroll: true,
    pwa: true,
  },
  markdown: {
    extendMarkdown: (md) => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-footnote"));
    },
    extractHeaders: ["h1", "h2", "h3"],
    toc: {
      includeLevel: [1, 2, 3],
    },
  },
};

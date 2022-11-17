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
        text: "中文",
        link: "/",
      },
      {
        text: "English",
        link: "/en/",
      },
      {
        text: "标签",
        link: "/tag/",
      },
    ],
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/",
      },
      {
        id: "en",
        dirname: "_en",
        path: "/en/",
        itemPermalink: "/en/:year/:month/:day/:slug",
        title: "English",
        layout: "IndexPost",
        itemLayout: "Post",
      },
    ],
    summaryLength: 150,
    footer: {
      contact: [
        {
          type: "gitlab",
          link: "https://git.mediosz.club/Tric",
        },
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

const feed_options = {
  canonical_base: 'https://blog.mediosz.club/feed',
};
module.exports = {
    title: 'Avalon',
    description: 'Just a place called Avalon',
    base: "/",
    dest: "public",
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        ['@vuepress/medium-zoom', {
            selector: '.vuepress-blog-theme-content :not(a) > img',
            options: {
              margin: 16
            }
        }],
        ['reading-progress', {
            readingDir: "_posts"
        }]
    ],
    themeConfig: {
      footer: {

        contact: [ 
          {
            type: 'gitlab',
            link: 'https://git.mediosz.club/Tric',
          },
          {
            type: 'mail',
            link: 'mailto:mediosrity@qq.com',
          },

        ],
        copyright: [
          {
            text: '晋ICP备17009000',
            link: 'http://www.beian.miit.gov.cn/',
          },
        ],
      },
      feed: {
        canonical_base: 'https://blog.mediosz.club',
      },
      smoothScroll: true
    },
    markdown: {
      extendMarkdown: md => {
        // use more markdown-it plugins!
        md.use(require('markdown-it-footnote'))
      }
    }
  }
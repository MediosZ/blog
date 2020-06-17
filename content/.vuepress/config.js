module.exports = {
    title: 'Avalon',
    description: 'Just a place called Avalon',
    base: "/",
    dest: "public",
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        '@vuepress/medium-zoom',
        ['reading-progress', {
            readingDir: "_posts"
        }],
    ],
    themeConfig: {
      footer: {
        contact: [ 
          {
            type: 'gitlab',
            link: 'https://git.mediosz.club/Tric',
          },

        ],
        copyright: [
          {
            text: '晋ICP备17009000',
            link: 'http://www.beian.miit.gov.cn/',
          },
        ],
      },
    },
    markdown: {
      extendMarkdown: md => {
        // use more markdown-it plugins!
        md.use(require('markdown-it-footnote'))
      }
    }
  }
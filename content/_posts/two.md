---
title: Writing a vuepress theme 1
date: 2019-5-6
tags: 
  - theme
  - blog
  - vuepress
author: ULIVZ
location: Shanghai  
---

To write a theme, create a `.vuepress/theme` directory in your docs root, and then create a `Layout.vue` file:

```
.
└─ .vuepress
   └─ `theme`
       └─ Layout.vue
```

From there it's the same as developing a normal Vue application. It is entirely up to you how to organize your theme.

## Content Outlet

The compiled content of the current `.md` file being rendered will be available as a special `<Content/>` global component. You will need to render it somewhere in your layout in order to display the content of the page. The simplest theme can be just a single `Layout.vue` component with the following content:

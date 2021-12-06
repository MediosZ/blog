<template lang="pug">
  #base-list-layout
    .ui-posts(itemscope itemtype="http://schema.org/Blog")
      article.ui-post(
        v-for="page in pages"
        :key="page.key"
        itemprop="blogPost"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      )
        meta(itemprop="mainEntityOfPage" :content="page.path")

        header.ui-post-title(itemprop="name headline")
          NavLink(:link="page.path") {{ page.title }}

        p.ui-post-summary(itemprop="description") {{ page.frontmatter.summary || page.summary }}

        footer
          .ui-post-meta.ui-post-date(v-if="page.frontmatter.date")
            ClockIcon
            time(
              pubdate
              itemprop="datePublished"
              :datetime="page.frontmatter.date"
            ) {{ resolvePostDate(page.frontmatter.date) }}

          .ui-post-meta.ui-post-tag(
            v-if="page.frontmatter.tags"
            itemprop="keywords"
          )
            TagIcon
            router-link(
              v-for="tag in resolvePostTags(page.frontmatter.tags)"
              :key="tag"
              :to="'/tag/' + tag"
            ) {{ tag }}

    component(:is="paginationComponent"
      v-if="$pagination.length > 1 && paginationComponent")
    

</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon, TagIcon } from 'vue-feather-icons'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: { NavigationIcon, ClockIcon, TagIcon },

  data() {
    return {
      paginationComponent: null,
    }
  },

  computed: {
    pages() {
      return this.$pagination.pages
    },
  },

  created() {
    this.paginationComponent = this.getPaginationComponent()
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      if (n === 'SimplePagination') {
        return SimplePagination
      }

      return Vue.component(n) || Pagination
    },

    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  },
}
</script>

<style lang="stylus">
.common-layout
  .content-wrapper
    padding-bottom 80px

.ui-post
  padding-bottom 25px
  margin-bottom 25px
  border-bottom 1px solid $borderColor

  &:last-child
    border-bottom 0px
    margin-bottom 0px

.ui-post-title
  font-family LXGW
  font-size 28px
  border-bottom 0

  a
    cursor pointer
    color $darkTextColor
    transition all 0.2s
    text-decoration none

    &:hover
      text-decoration underline

.ui-post-summary
  font-family LXGW
  font-size 14px
  color rgba($darkTextColor, 0.80)
  font-weight 200

.ui-post-meta
  display inline-flex
  align-items center
  font-size 12px
  line-height 12px

  &:not(:last-child)
    margin-bottom 3px
    margin-right 20px

  svg
    margin-right 5px
    width 14px
    height 14px

  @media (max-width: $MQMobile)
    display flex

    &:not(:last-child)
      margin-bottom 10px

.ui-post-author
  color rgba($darkTextColor, 0.84)
  font-weight 400

.ui-post-date
  color rgba($darkTextColor, 0.80)
  font-weight 200

.ui-post-tag
  color rgba($darkTextColor, 0.80)
  font-weight 200

  a
    color inherit
    font-weight 200
    text-decoration none
    margin-right 5px

    &:hover
      color $accentColor
</style>

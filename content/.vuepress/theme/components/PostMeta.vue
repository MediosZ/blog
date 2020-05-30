<template lang="pug">
  .post-meta
    div(
      v-if="author"
      class="post-meta-author"
      itemprop="publisher author"
      itemtype="http://schema.org/Person"
      itemscope
    )
      NavigationIcon
      span(itemprop="name") {{ author }}
    .post-meta-date(v-if="date")
      ClockIcon
      time(pubdate itemprop="datePublished" :datetime="date") {{ resolvedDate }}

    ul.post-meta-tags(v-if="tags" itemprop="keywords")
      PostTag(v-for="tag in resolvedTags" :key="tag" :tag="tag")
</template>

<script>
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon } from 'vue-feather-icons'
import PostTag from './PostTag.vue'

export default {
  name: 'PostMeta',
  components: { NavigationIcon, ClockIcon, PostTag },
  props: {
    tags: {
      type: [Array, String],
    },
    author: {
      type: String,
    },
    date: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  computed: {
    resolvedDate() {
      return dayjs(this.date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },
    resolvedTags() {
      if (!this.tags || Array.isArray(this.tags)) return this.tags
      return [this.tags]
    },
  },
}
</script>

<style lang="stylus">
.post-meta
  &-tags
    display flex
    flex-wrap wrap
    list-style none
    overflow hidden
    padding 0
    margin 20px 0

    > li
      margin-bottom 10px

  > div
    display inline-flex
    line-height 12px
    font-size 12px
    margin-right 20px

  svg
    margin-right 5px
    width 14px
    height 14px
</style>

<template lang="pug">
   #Markdown
    .subtitle
      h1.title markdown test
    .container
      .raw
        textarea.raw-input(v-model="raw_text" placeholder="please input your code")
      .markdown-body(v-html="marked_text")



</template>
<script>

  import Marked from 'marked'


  export default {
    components: {Marked},
    data() {
      return {
        raw_text: ''
      }
    },
    created() {

    },
    computed: {
      marked_text: function(){
        return Marked(this.raw_text)
      }
    },
    methods: {

    }
  }

</script>
<style lang="stylus" scoped>
  @import "../markdown.styl"

  #Markdown
    .subtitle
      background-color #eee
      box-shadow 5px 5px #dddddd
      margin 15px
      .title
        color #333
        font-size 40px
    .container
      display flex
      .raw
        flex 0 0 50%
        .raw-input
          width 100%
          height 800px
      .markdown-body
        flex 0 0 50%

</style>

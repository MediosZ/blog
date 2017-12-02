<template lang="pug">
   #Markdown
    .subtitle
      h1.title markdown test
    .container
      .raw
        textarea.raw-input(v-model="raw_text" placeholder="please input your code")
      .marked(v-html="marked_text")
        p.marked-text {{marked_text}}


</template>
<script>

  import ElInput from "../../node_modules/element-ui/packages/input/src/input.vue";
  import Marked from 'marked'


  export default {
    components: {Marked, ElInput},
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
      .marked
        flex 0 0 50%

</style>

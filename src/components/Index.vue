<template lang="pug">
  #Index
    .subtitle
      h1.greet Welcome to the site
      p.sub-greet this is a web page based on vue.js
    .content
      .row-one
        .blog.box
        .container.box
          .one-one
          .one-two
        p row one
      .row-two
        p row two
      .row-three
        p row three

      //.card(v-for="card in cards")
        p.name {{card.name}}
        router-link.web(:to="card.link") to {{card.name}}
</template>

<script>
import $ from '../../static/jquery-3.2.1.min.js'

$(document).ready(function(){
  console.log("document is ready");
  $(".box").css('height', $(".box").css('width'));
})

export default{

  name: 'Index',
  data(){
    return {
      msg:'test msg',
      cards: [
        {
          name: 'test',
          link: 'hello',
          img: ''
        },
        {
          name: 'test1',
          link: 'hello',
          img: ''
        },
        {
          name: 'test2',
          link: 'hello',
          img: ''
        }
      ]
    }
  },

}
</script>

<style lang="stylus">
  .subtitle
    background-color #eee
    box-shadow 5px 5px #dddddd
    margin 15px
    .greet
      color #333
      font-size 40px
    .sub-greet
      color #666
      font-size 20px
  .container
    border solid thin black
    margin 25px 5px
    flex 0 0 50%
  .content
    display flex
    margin 15p
    justify-content space-around
    flex-direction column

    .row-one
      display flex
      height auto
      margin 0 5px
      border thin solid black
      .blog
        flex 0 0 50%
        border black solid
        margin 25px
      .container
        flex 0 0 0

      p
        vertical-align middle
    .card
      background-color #eee
      box-shadow 5px 5px #ddd
      min-width 100px
      max-width 500px
      flex 0 0 0
      .name
        font-size 25px
        color blue
      .web
        text-decoration none
        color blue
        font-size 20px

</style>

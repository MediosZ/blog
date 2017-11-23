<template lang="pug">
  #Index
    .subtitle
      h1.greet Welcome to the site
      p.sub-greet this is a web page based on vue.js
    .content
      .card(v-for="card in cards")
        p.name {{card.name}}
        router-link.web(:to="card.link") to {{card.name}}
</template>

<script>
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
  }
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
  .content
    display flex
    margin 15p
    justify-content space-around
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

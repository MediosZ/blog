<template lang="pug">
  #Index
    .subtitle
      h1.greet Welcome to the Avalon
      p.sub-greet Based on vue.js
    .content
      .row-one
        .blog.active(@click="show = !show")
          transition(name="slide-fade")
            a.text(v-if="show==true" href="http://www.mediosz.club" target="blank") Blog
        .container
          .sub-one.active(@click="show = !show")
            transition(name="slide-fade")
              a(v-if="show==true") RegEx Playground
          .sub-one.active(@click="show = !show")
            transition(name="slide-fade")
              a(v-if="show==true") Markdown Pool
      .row-two
        .avalon.active(@click="show = !show")
          transition(name="bounce")
            a(v-if="show==true" href="http://blog.mediosz.club" target="blank") Avalon
        .something.active(@click="show = !show")
          transition(name="slide-fade")
            a(v-if="show==true") NULL

      //.card(v-for="card in cards")
        p.name {{card.name}}
        router-link.web(:to="card.link") to {{card.name}}
</template>

<script>
import $ from '../../static/jquery-3.2.1.min.js'
import '../../static/animate.css'
import 'vue2-animate/dist/vue2-animate.min.css'
/*
$(document).ready(function(){
  console.log("document is ready");
  $(".greet").css('color', '#000');
})*/

export default{

  name: 'Index',
  data(){
    return {
      msg: 'test msg',
      show: 'false'
    }
  },

}
</script>

<style lang="stylus">
  body
    background-color #353636
    background-image:url('../../static/back2.jpg')
    background-repeat no-repeat
    background-size cover
  a
    text-decoration none
    color orange
    font-size 50px
    background-color #446c7a
  .active:hover
      background-color #446c7a
      box-shadow 8px 12px #ffffff


  .subtitle
    background-color #57859b
    //box-shadow 5px 5px #dddddd
    margin 0 15px
    .greet
      color orange
      font-size 40px
    .sub-greet
      color #afafaf
      font-size 20px
  .content

    display flex
    justify-content space-around
    flex-direction column
    .row-one
      display flex
      height auto
      margin 0 5px

      .text
        font-size 65px
      .blog
        flex 1 1 65%
        //border black solid thin
        margin 25px 10px
        height 250px
        //box-shadow 5px 8px #aaa
        display flex
        align-items center
        justify-content center

      .container
        flex 1 0 25%
        //border solid thin black
        margin 25px 10px
        height 250px
        //box-shadow 5px 8px #aaa
        display flex
        flex-direction column
        align-items stretch
        justify-content center
        .sub-one
          display flex
          min-height 100px
          align-items center
          justify-content center
          margin 5px
          p
            font-size 30px
            color orange
    .row-two
      display flex
      height auto
      margin 0 5px
      //border black thin solid
      .avalon
        flex 1 1 40%
        //border black solid thin
        margin 25px 10px
        height 250px
        //box-shadow 5px 8px #aaa
        display flex
        align-items center
        justify-content center

        p
          font-size 50px
          color orange

      .something
        flex 1 0 60%
        //border solid thin black
        margin 25px 10px
        height 250px
        //box-shadow 5px 8px #aaa
        display flex
        flex-direction column
        align-items center
        justify-content center

        p
          font-size 50px
          color orange

  .slide-fade-enter-active
    transition: all .3s ease;

  .slide-fade-leave-active
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);

  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(10px);
    opacity: 0;

  .bounce-enter-active
    animation: bounce-in .5s;

  .bounce-leave-active
    animation: bounce-in .5s reverse;

  @keyframes bounce-in
    0%
      transform: scale(0);

    50%
      transform: scale(1.5);

    100%
      transform: scale(1);


</style>

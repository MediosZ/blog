<template lang="pug">
  #test
    .left
      .navigation
        h1 Avalon
      .detail
        .pagebar
          p {{num}}
          p.line
          p {{sum}}
        .subtitle
          transition(name="bounce")
            h1.title(v-if="num == 0") {{content[num].title}}
            h1.title(v-if="num == 1") {{content[num].title}}
            h1.title(v-if="num == 2") {{content[num].title}}
            h1.title(v-if="num == 3") {{content[num].title}}
        .content
          p {{content[num].detail}}
        .buttons
          img.btn(src="../../static/up.png", @click="down")
          img.btn(src="../../static/down.png", @click="up")
    .right
      img.imgs(:src="content[num].img")
      .footbar
        .img-detail
          h2 {{content[num].more[0].title}}
          p {{content[num].more[0].text}}
        .more
          p 想要了解更多?


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
        show: 'false',
        num: '0',
        sum: '3',
        content: [
          {
            title: '博客',
            detail: '每个人都需要一个空间，来存放自己过去的记忆，或是生活中乍现的灵感。\n 它就在这里。',
            img: '../../static/0.jpg',
            more: [
              {
                title: '记忆',
                text: '不想忘记的，必须存起来的。 \n 不想错过的，必须写下来的。'
              },
              {
                title: '灵感',
                text: 'Little Sparks'
              }
            ]
          },
          {
            title: '正则',
            detail: '正则表达式是我们日常实用频率很高的一项技能，熟练掌握的话可以极大地提高效率，虽然不容易学习，但值得花时间去做。',
            img: '../../static/1.jpg',
            more: [
              {
                title: '沙盒',
                text: '在这里，尽情练习，直到熟练掌握。\n 毕竟是拿来用的技能。'
              },
              {
                title: 'text2',
                text: 'detail2'
              }
            ]
          },
          {
            title: 'Md',
            detail: '不习惯Word较为麻烦的排版，来学习Markdown吧，简单易学，也是一项超级实用的技能~平时写作全靠它。',
            img: '../../static/2.jpg',
            more: [
              {
                title: '记录',
                text: '忘掉排版吧，关注内容。   \n 只需专注于写作便好。'
              },
              {
                title: 'text2',
                text: 'detail2'
              }
            ]
          },
          {
            title: 'Avalon',
            detail: '传说中亚瑟王长存的地方，传说中没有烦恼的地方。',
            img: '../../static/3.jpg',
            more: [
              {
                title: 'Undefined',
                text: 'Unknown Error Occurred'
              },
              {
                title: 'text2',
                text: 'detail2'
              }
            ]
          }
        ]
      }
    },
    methods: {
      up : function () {
        this.num++;
        this.num = this.num <= this.sum ? this.num : this.sum;
        },
      down : function(){
        this.num--;
        this.num = this.num >= 0 ? this.num : 0;
      }

    }

  }
</script>

<style lang="stylus">
  #test
    display flex
    margin 30px
    min-height 500px
    box-shadow 0 20px 50px 3px #666

    .left
      flex 0 0 50%
      display flex
      align-items center
      flex-direction column

      .navigation
        display flex
        justify-content flex-start
        width 100%
        height 100px

        h1
          font-size 30px
          color #444
          margin-left 15px

      .detail
        display flex
        width 80%
        flex-direction column
        justify-content center
        //border solid thin black

        .pagebar
          display flex
          flex-direction row
          align-items center
          justify-content center

          .line
            border black solid
            height 0
            width 35px
            margin 0 10px

        .subtitle
          .title
            font-size 70px

        .content
          min-height 100px
          white-space pre-wrap
          word-wrap break-word
          word-break normal
          text-align justify
          font-size 15px
        .buttons
          display flex
          justify-content flex-start
          .btn
            height 35px
            margin 0 10px

    .right
      flex 0 0 50%
      .imgs
        width 100%
        height 75%
        object-fit cover

      .footbar
        height 25%
        display flex

        .img-detail
          flex 1 0 50%
          margin-top -50px
          margin-bottom 4px
          display flex
          flex-direction column
          align-items center
          background-color #353d42
          *
            margin 14px
            color #ddd

        .more
          margin-top -4px
          margin-bottom 4px
          flex 0 0 30%
          display flex
          justify-content center
          align-items center
          background #d3dc97
          p
            font-size 15px
            color #060b16

</style>

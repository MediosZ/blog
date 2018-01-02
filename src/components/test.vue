<template lang="pug">
  #test
    .shade
      h1.shade-title Avalon
      el-button.remove-shade(type="info") open the gate
    .real
      .left
        .navigation
          h1 Avalon
        .detail
          .pagebar
            //transition(name="fade" mode="in-out")
            p(:key="num").num {{num}}
            p.line
            p {{sum}}
          .subtitle
            //transition(name="slide-fade")
            h1.title(:key="num") {{content[num].title}}
          .content
            //transition(name="slide-fade")
            p(:key="num").icontent {{content[num].detail}}
          .buttons
            el-button.btn(type="info" plain round=true, @click="up") UP
            el-button.btn(type="info" plain round=true, @click="down") DN
            //img.btn(src="../../static/up.png", @click="down")
            //img.btn(src="../../static/down.png", @click="up")
      .right
        //transition(name="fade")
        img.imgs(:src="content[num].img", :key="num")
        //.imgsa
        .footbar
          .img-detail
            //transition(name="bounce")
            h2(:key="num").idetail {{content[num].more[0].title}}
            //transition(name="bounce")
            p(:key="num").idetail {{content[num].more[0].text}}
          .more
            p 想要了解更多?


</template>

<script>
  import $ from '../../static/jquery-3.2.1.js'
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";


  //import '../../static/animate.css'
  //import 'vue2-animate/dist/vue2-animate.min.css'
  /*
  $(document).ready(function(){
    console.log("document is ready");
    $(".greet").css('color', '#000');
  })*/

  export default{

    components: {ElButton},
    name: 'Index',
    data(){
      return {
        show: false,
        num: 0,
        sum: 3,
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
        if(this.num === 0){
          return;
        }
        let image = $(".imgs");
        let that = this;
        $(".idetail").animate({opacity:"0"});
        $(".icontent").animate({opacity:"0"});
        $(".title").animate({opacity:"0"});
        $(".num").animate({opacity:"0"});
        image.animate({opacity:"0.3"}, function (){
          that.num--;
          that.num = that.num >= 0 ? that.num : 0;

          //console.log("up");
          //console.log(that.num);
          //image.animate({opacity:"1"}, "slow");
        });

        },
      down : function(){
        if(this.num === this.sum){
          return;
        }
        let image = $(".imgs");
        let that = this;
        $(".idetail").animate({opacity:"0"});
        $(".icontent").animate({opacity:"0"});
        $(".title").animate({opacity:"0"});
        $(".num").animate({opacity:"0"});
        image.animate({opacity:"0.3"}, function () {
          that.num++;
          that.num = that.num <= that.sum ? that.num : that.sum;

          //console.log("down");
          //console.log(that.num);
          //image.animate({opacity:"1"}, "slow");
        });

      },
      numup : function () {
        this.num++;
        this.num = this.num <= this.sum ? this.num : this.sum;
      },
      numdown : function(){
        this.num--;
        this.num = this.num >= 0 ? this.num : 0;
      }

    }
  }
  $(document).ready(function(){
    let root = $("#test");
    let rwidth = root.width();
    let sheight = screen.height;
    $(".shade").css("width", rwidth).css("height", "auto");
    //console.log("ready");
    $(".remove-shade").click(function () {
      //$(".shade").css("display", "none");
      let title = $(".shade-title");
      let shade = $(".shade");
      let test = $("#test");
      $(".real").css("display", "flex");
      $(".remove-shade").css("display", "none");
      test.css("z-index", 0);
      test.css("background-color", "#fff");

      title.animate({"font-size":'30px', "margin-left":"45px", "display":"block"}, "slow");
      title.css("text-align", "left");

      shade.animate({"height":'100px', "float": 'left', "opacity":"0"},"slow");
      //shade.animate({"opacity": "0"}, "fast");


      //console.log("hello");
    });
  });




</script>

<style lang="stylus">
  #test
    background-color #333
    z-index 2
    opacity 1

    .slide-fade-enter-active {
      transition: all .5s ease;
    }
    .slide-fade-leave-active {
      transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to{
      //transform: translateX(10px);
      opacity: .3;
    }
    .fade-leave, .fade-leave-active {
      ransition: all .5s ease;
    }

    .shade
      width auto
      height auto
      position absolute
      vertical-align middle
      z-index 3
      //box-shadow 0 20px 50px 3px #666

      h1
        font-size 100px
        vertical-align middle

      .remove-shade
        margin 200px


    .real
      display none
      margin 30px
      min-height 600px
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
          display flex
          flex-direction row
          justify-content center
          .title
            font-size 40px
            //position fixed

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
            margin 100px 10px 0

    .right
      flex 0 0 50%
      .imgs
        width 100%
        height 75%
        object-fit cover
        //position absolute
      .imgsa
        width 100%
        height 75%
        object-fit cover
        //position absolute

      .footbar
        height 25%
        display flex

        .img-detail
          flex 1 0 50%
          margin-top -5px
          margin-bottom 4px
          display flex
          flex-direction column
          align-items center
          background-color #353d42
          *
            margin 14px
            color #ddd

        .more
          margin-top -5px
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

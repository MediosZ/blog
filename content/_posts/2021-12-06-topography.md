---
title: 新的字体，新的感觉
date: 2021-12-06
tags: 
  - thought
author: Tricster
location: 南京
---

之前总喜欢鼓捣网页的界面，但不管怎么弄总觉得差点意思，前一个月偶然看到了一个[讲文字排版的网站](https://practicaltypography.com)，里面提到了字体的重要性，我也逐渐意识到了之前缺失的那一环。
正好这几天发现了一款很好看的字体，立马搬到了博客上，不过也遇到了一些奇怪的问题，故记录一下。


# 我选择了什么字体

![wenkai](./pics/2021/wenkai.png)

字体的名字是**霞鹜文楷**，作者的网站在[这里](https://lxgw.github.io/2021/04/27/Wenkai-Update/)。我觉得这款字体不花哨，但也不是呆板，看着比较舒服。

同时这款字体也是开源的，不用担心版权的问题，这里要感谢一下作者的辛苦劳动。

# 如何加入字体？

想要加入字体到博客中，也是比较简单，虽然和使用的博客系统有一定关系，但主要的设置还是一样的。

```css
@font-face { 
  font-family: 'LXGW'; 
  src: url('~fonts/lxgw.ttf') format('truetype');
  font-weight: 400;
}
```

需要注意的是，这里要设置`format('truetype')`，如果是`format('ttf')`的话，就无法正常显示了。

# 如何缩减字体大小

本来到这一步，已经正常把字体显示出来了，已经可以心满意足地欣赏了，但由于字体文件比较大，每次需要半分钟才能加载出来，这是很难以接受的，正常来说，字体还没加载出来，读者就已经离开了XD。 

于是下一步就是缩减字体的大小，但没想到，这才是噩梦的开始。

## 选用什么工具

简单搜索之后，发现可以使用[Font-Spider](https://github.com/aui/font-spider)来根据需要自动缩减字体文件，但可能是我使用方式不对，我并没有能够成功使用它，也就不折腾了。之后参考[这篇博文](https://hsingko.github.io/post/compress_webfont/)的做法，使用`grep`和`fonttools`来提取文字并缩减字体文件。
具体做法如下：

```bash
pyftsubset "fonts/$origin" --text=$(rg ./ -e '[\w\d]' -oN --no-filename|sort|uniq|tr -d '\n') --no-hinting
```

`pyftsubset`可以根据我们提供的字库来缩减字体文件，所以关键是如何取得我们需要用到的字库。`rg ./ -e '[\w\d]' -oN --no-filename|sort|uniq|tr -d '\n'`先通过`ripgrep`找出当前路径下所有的字，然后进行排列和去重，再去掉换行符，便可以得到我们需要的字库。这种方法确实还是比较简洁的，通过更改正则，我们也可以控制字库中包含哪些字。

在本地以及Docker镜像中运行都没有什么问题。


## Gitlab CI的问题

我的博客在每次提交之后，会通过Gitlab CI｜CD进行自动部署，理想情况下，可以将缩减字体这个过程也放在CI中，但是运行之后发现`rg -e '[\w\d]' -oN --no-filename|sort|uniq|tr -d '\n'`出错了，并且没有错误信息，直接退出，返回值还是0。在不断尝试，包括更改CI使用的镜像，逐行echo之后，发现可能是Gitlab CI的一个**特性**。

原博文中使用的命令是`rg -e '[\w\d]'`，并没有指定搜索路径，这个时候`ripgrep`会根据`stdin`是否开启来决定要不要搜索当前路径。而Gitlab在CI中其实开启了`stdin`，但是并没有写入内容，这个时候`ripgrep`就会等待`stdin`而卡住，然后超时退出。详情可以在这个[issue](https://github.com/BurntSushi/ripgrep/issues/1630)中看到。

调整完之后，细细想了想，还是自己的问题，没有认真思考命令的具体使用方式，以后还是要理解清楚，再去使用。


# 小结

更换字体之后，感觉看着更舒服了，看了一些介绍文字排版的视频之后，感觉排版还是很重要的，但其实被大家有所忽略。抽空看完那本介绍排版的书，希望能理解更深刻一些。
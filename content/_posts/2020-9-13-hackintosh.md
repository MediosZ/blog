---
title: Hackintosh
date: 2020-9-13
tags: 
  - prototype
author: Tricster
location: 南京
---

当时在公司的时候，用公司的电脑安装了一下黑苹果，感觉还不错，一方面，苹果系统在日常使用的过程中可能更舒服一些，另一方面，折腾黑苹果的过程也许会给人带来成就感，也就是在尝试很多配置之后终于正常启动的快乐。

于是也在想着给在实验室用的机器装一下黑苹果。尝试了几天，总算是回归正轨了。

## Clover

在公司的时候，了解的不太多，没有敢尝试OpenCore，于是选择了相对资源更齐全的Clover。其实也只是因为Clover提供了那种配置好的傻瓜包，从这里开始也不错。

尝试几次，了解安装的基本过程之后，还算顺利地使系统运行起来，但很尴尬的是，当时显示器只有HDMI的接口，而如果想要使用HDMI，还需要对主板上的接口进行一些hack。
如果不进行hack，就不驱动自己的显卡，然后显示效果很差。为了显示得更好一些，于是开始进行hack。
通过HackinTool，将主板上的接口进行一个映射，将HDMI的接口与DP的接口进行了一个链接。

这个过程其实比较痛苦，因为基本上是靠不断尝试每一个可能的配置，如果不正确的话，就需要进行重新启动，重新配置。
其实想想看，也许是存在一些高效的方法来尝试它，不过这就是后话了。

几天后解决了显示的问题，第一次Hack就算是成功了。

后来就是解决诸如音频，以及HiHPI之类的细节优化，效果其实还好的。

## 硬件准备

为了安装得更顺利一点，在购买硬件的时候也留意了一下有没有成功案例，其实主要也就是主板和显卡。
为了压缩预算，我没有购买独立显卡，如果需要以后再添加了。

最终我的硬件是：ASUS Prime Z390 P + i7 9700K + 16G RAM + 500G SSD + 2T HDD

## 新的安装

之前尝试Clover尝到了甜头，于是这次也是首先用了Clover，但这次因为硬盘格式转换的问题导致无法进行安装，换了几个驱动也没有成功，于是萌生了使用OpenCore的想法。当然使用OpenCore的另一个原因是我在Github上找到了一个和我一样配置的仓库，它做到了几乎完美，但这也给后来的安装过程埋下了隐患。

### OpenCore

OpenCore看起来还是挺简洁的，简单来说，OpenCore和Clover一样，都是提供了BootLoader的功能，所以我们首先准备好一个MacOS的启动盘，再加Clover的文件或是OpenCore的文件放入EFI分区即可。

最终的**OpenCore文件结构**如下：
![OpenCore File Structure](./pics/opencore_file_structure.png)

### BIOS 出了大问题

一开始的时候，我本想将MacOS作为主力机，于是将windows装在了HDD上，打算在SSD上安装macos，但是中途使用Clover的时候发生了掉引导的问题，windows的引导莫名其妙就消失了。经过权衡，还是将Windows装在了SSD上，独立安装。

在使用OpenCore的时候，我偷了个懒，直接使用了网上的那个配置，也没有多想，结果根本进不去引导，直接boot进去了windows。

OpenCore还弄崩了BIOS的NVRAM（？），导致BIOS也进不去，只能靠自动boot进Windows。
这个时候其实是很慌的，因为怕主板损坏。

### AI Suite 3

AI Suite 3 是ASUS的一个管理软件，可以监控系统情况，还有其他的一些功能。
而我们则可以利用它来在Windows中直接给主板刷固件，另一种方法是先进入BIOS，在BIOS中刷。

靠着这种办法，总算是可以重新进入BIOS了。

并且知道可以救回来之后，也就可以放开手脚去尝试了。

### 配置中的问题

我看了一下仓库里的Issue，发现也有一个人和我一样，只有核显，但是他成功启动，只是音频有些问题。通过它的描述，我注意到原始的配置中其实关闭了核显，而使用独显。

也许这就是我为什么进不去的原因，但事实没有这么简单，我即使开启了核显，也没有任何的作用，仍然看不到引导界面。

### 重新起步

感觉这样解决问题不行的时候，我放弃了那个配置文件，而是浏览了一下文档，打算自己从头开始配置。

幸运的是，配置OpenCore的过程并不复杂，文档也是足够详细，主要分成三步：

1. 下载MacOS系统，制作启动盘
2. 根据自己的硬件，选择合适的Driver和内核插件
3. 根据自己的硬件情况，配置config.plist

相对来说比较复杂的是第三步，前几步都是比较固定的。
只有熟悉自己的硬件，就不会遇到太大的困难，但其实最关键的还是详实的文档，非常详细，针对不同的硬件平台都给出了完整的操作流程。

**文档的配置思路其实很有效，我们先做减法，得到一个最小的可用配置，然后再不断向里面进行扩充，我觉得这个想法也是非常好的。**

## Clover 与 OpenCore 的区别

如果两个过程都走下来的话，会发现他们的主要区别其实是在配置方式上。
无论是Clover还是OpenCore，都需要合适的驱动，合适的内核插件。

不同的是，他们运行方式不同所造成的配置方式的不同。

如果要配置Clover，其实也是配置config.plist，但你需要使用Clover Configurator 来帮助你完成这个任务，
但是OpenCore只需要对config.plist进行直接编辑就好了。

在我看来，直接进行编辑的方式会更简单一些，而不至于觉得配置起来很复杂。

从另一个角度来说，我觉得OpenCore简单的一部分原因可能是因为它的文档很详细，让我知道我每一步在做什么，
而当时配置Clover的时候就只能靠网上零星的教程来配置，一些参数适不适合自己的硬件也不知道，会有不小的阻力。

改天可以学习一下更详细的原理。

## 一些细节

### 以太网问题

现在以太网卡虽然配置好了，在设备信息里面是可以看到网卡的相关信息的，但是只会显示网络线缆未插入，从而无法进行网络的访问。

既然可以驱动网卡，说明驱动是没问题的，查看系统日志也没有发现什么特殊的信息。

于是我尝试自己配置网线的属性，间接地触发一次以太网的重新初始化，通过这种方式，成功连上了以太网。

### 音频问题

通过在config里注入layout-id可以正常驱动音频，配置起来相对简单不少。

### 显示问题

之前在HDMI那个模式下的时候，需要通过一些hack打开HiDPI来让显示更清楚些，但这次使用了DP接口的4K显示器，原生支持了HiDPI，还是挺省心的，显示效果也还算不错。
---
title: 深入Pytorch源代码
date: 2021-03-13
tags: 
  - tech
author: Tricter
location: 南京
---


![Pytorch Logo](./pics/3_13/pytorchLogo.jpeg)

Pytorch是很受欢迎一个框架，但大多数人都止步于使用Pytorch，却不想去探究Pytorch内部的具体实现。然而，这种探索的过程本身会很有趣。

这个系列，将会解析Pytorch的具体实现，来学习如何构建这样一个大型的项目。
由于Pytorch也在不断更新，增加新的功能，这个系列将会从Pytorch`v0.3.0`版本开始解析。

# 什么是Pytorch

**Pytorch**是一个开源的机器学习库，从**Torch**发展过来，现在主要是由FAIR和开源社区进行维护。
Pytorch主要提供了两个功能：
1. 经过GPU加速的**张量**(Tensor)计算功能，类似Numpy。
2. 搭建基于**自动微分**(Automatic Differentiation)求解来搭建深度神经网络。

Pytorch虽然是一个**Python-First**的框架，但它并不是完全使用Python实现的，明白这一点是理解Pytorch架构的第一步。
但是等一下，我们先回想一下什么是Python。

# Python是什么？

Python是一个编程语言，但它与C++等编译型编程语言不同，Python是**解释型**语言。简单来说，C++需要经过编译，链接等操作变成一个**可执行程序**，才能运行，但Python则不需要，Python需要的是一个**解释器**，解释器读取并执行Python源代码。

但是解释器又是什么？

现在最多人使用的解释器，是[CPython](https://github.com/python/cpython)，这也是Python默认的解释器，可以从Python的官网上直接下载。其实从CPython这个名字可以猜出来，CPython是用C实现的解释器，除此之外，还有使用Python自己实现的[PyPy](https://www.pypy.org)，以及使用.Net实现的[IronPython](https://ironpython.net)。

CPython使用C语言来实现，因此可以比较容易地接入其他使用C或者C++编写的**拓展**(Extension)。可能你也猜到了，Pytorch就是这样的**拓展**。

```python
C = Extension("torch._C",
              libraries=main_libraries,
              sources=main_sources,
              language='c',
              extra_compile_args=main_compile_args + extra_compile_args,
              include_dirs=[],
              library_dirs=library_dirs,
              extra_link_args=extra_link_args + main_link_args + make_relative_rpath_args('lib'))
```

从这段代码中可以看出来，Pytorch的主要实现，还是使用C++来完成的，并使用Python来对底层实现进行一些包装和拓展。

# Pytorch由什么构成

Pytorch主要提供了两个大的功能：

1. 类似Numpy的计算，适用于不同计算性能的设备。
2. 自动微分引擎，可以帮助我们计算梯度。

## Tensor

Tensor一般被称作张量，可以认为就是多维数组，Tensor进行的计算，包含加减乘除之类的基本运算。为了在不同的计算设备上进行计算，Pytorch利用了一些更为底层的库，这些库是继承自[Torch](https://github.com/torch)的，对于不同的计算设备，比如CPU、GPU，Pytorch会利用专门为这个计算设备编写优化的计算库来计算，这些库有：

1. TH: Torch
2. THD: Torch Distributed
3. THNN: Torch Neural Networks
4. THS: Torch Sparse
5. THC: Torch Cuda
6. THCS: Torch Cuda Sparse
7. THCUNN: Torch CUda Neural Networks

从名字上，就可以看出每一个库对应的计算设备。

Pytrorch建立在这些库之上，都这些不同计算设备进行抽象，并使用**Tensor**作为统一的接口，自动根据当前的计算设备来选择对应的库，在代码中，进行了动态转发，在之后的文章中将会深入这个话题。

## 自动微分引擎 (Auto Grad)

在进行优化的时候，**梯度下降法**是很常见的一种算法，在神经网络中，也采用梯度下降法及其变种来对网络的参数进行优化。

在利用梯度下降法进行优化的时候，必不可少的就是求出**损失函数**关于**计算图(Computation Graph)**中每一个节点的梯度，只有求得梯度之后，才能利用不同的算法来进行优化。

因此**自动微分**将会是Pytorch功能中最为关键的一环。

# 小结

本文介绍了Pytorch的基础信息，包括它的结构以及主要功能。

这也是解读Pytorch源码系列的第一篇文章，在之后的文章中会针对Pytorch的主要功能以及实现来进行解析。
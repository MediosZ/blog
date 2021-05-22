---
title: WebAssembly Introduction
date: 2021-05-21
tags: 
  - tech
author: Tricter
location: NanJing
---

# 什么是 WebAssembly?

WebAssembly(以下称WASM)是一种新的规范，一种新的二进制格式，可以运行在Web沙箱中，其目的是为了充分发挥硬件能力，以达到原生执行的效率。

WASM可以由C、C++或者Rust代码编译而成，显而易见的是，我们可以将现有的程序移植到WASM中，然后在Web上运行。

本文将简单介绍一些使用WASM的方法。

# 如何使用WASM？

现在主流的WASM工具链是Emscripten，需要先安装它，然后就可以使用其中基于LLVM的编译器emcc｜em++，可以将C｜C++源码编译成WASM。比如我们现在有一段C++程序 `main.cpp`：

```c++
#include <iostream>

int main(){
    std::cout << "Hello WASM!" << std::endl;
    return 0;
}

```

然后使用如下命令进行编译：

```bash 
em++ main.cpp -o index.html
```

然后我们就可以得到三个文件：

1. index.html
2. index.js
3. index.wasm

在本目录开启一个Web服务器，然后就可以在网页中看到 Hello WASM! 。

这便是最基本的使用方法，接下来我们深入一些概念。

# 每个文件代表的含义

上文中生成了三个文件，`index.html`文件就是网页本体，里面包含了显示wasm运行结果的窗口，并加载了`index.js`。
`index.js`中是一些胶水代码，主要是加载了`index.wasm`，并执行了里面的`main`函数。
`index.wasm`则包含了我们编译好的C++代码。

# WASM导出函数





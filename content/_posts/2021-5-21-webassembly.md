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

我们使用WASM的时候，大多是想要使用已有的C++程序提供的功能，作为一个外部库。WASM默认不会导出所有的函数，因此我们需要看一下函数是如何导出的。

## 导出函数

比如我们有如下的代码：

```c++

extern "C" int showMeTheAnswer(){
    return 42;
}

```

注意这里的`extern "C"`，这是为了避免c++编译器造成的名称混淆，当然也可以使用混淆后的名字。默认`em++`是不会导出这个函数的，我们需要指定额外的链接参数`-s EXPORTED_FUNCTIONS=['_showMeTheAnswer']`，这里函数的名称前面加了`_`，这样我们就可以使用这个导出的函数了。

如果每一个函数都这样导出的话，那会写很多链接参数，所以我们使用一个宏，来帮我们导出，具体如下：

```c++
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
extern "C" int showMeTheAnswer(){
    return 42;
}

```

所有使用这个宏的函数，都会被导出。

## 使用导出的函数

为了使用导出的函数，我们有三种办法:

1. 使用Module
2. 使用ccall
3. 使用cwrap

> 使用ccall和cwrap之前，也需要用参数导出它们：`-s "EXTRA_EXPORTED_RUNTIME_METHODS=['ccall', 'cwrap']”`

比如为了在js中使用我们刚刚导出的函数，我们可以这样做：

```js
//1 
Module._showMeTheAnswer();

//2 ccall(func_Name_In_Srting, returnType, [argument types ], [arguments]))
Module.ccall("showMeTheAnswer", number, null, null);

//3 cwrap(func_name, return_type,[‘argument_type’])
let func = Module.cwrap("showMeTheAnswer", number, null);
func() // 42

```


在使用导出的函数时，一定要等WASM初始化完成，我们可以使用这个回调函数来帮助我们：

```js
Module.onRuntimeInitialized = () => {
    let func = Module.cwrap("showMeTheAnswer", number, null);
    console.log(func()) // 42
}

```

# 小结

WASM是很强大的工具，可以帮我们在Web中使用更重量级的代码，现在不少前端深度学习框架都使用了WASM，比如`Tfjs`。
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{357:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"什么是-webassembly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-webassembly"}},[t._v("#")]),t._v(" 什么是 WebAssembly?")]),t._v(" "),s("p",[t._v("WebAssembly(以下称WASM)是一种新的规范，一种新的二进制格式，可以运行在Web沙箱中，其目的是为了充分发挥硬件能力，以达到原生执行的效率。")]),t._v(" "),s("p",[t._v("WASM可以由C、C++或者Rust代码编译而成，显而易见的是，我们可以将现有的程序移植到WASM中，然后在Web上运行。")]),t._v(" "),s("p",[t._v("本文将简单介绍一些使用WASM的方法。")]),t._v(" "),s("h1",{attrs:{id:"如何使用wasm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用wasm"}},[t._v("#")]),t._v(" 如何使用WASM？")]),t._v(" "),s("p",[t._v("现在主流的WASM工具链是Emscripten，需要先安装它，然后就可以使用其中基于LLVM的编译器emcc｜em++，可以将C｜C++源码编译成WASM。比如我们现在有一段C++程序 "),s("code",[t._v("main.cpp")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('#include <iostream>\n\nint main(){\n    std::cout << "Hello WASM!" << std::endl;\n    return 0;\n}\n\n')])])]),s("p",[t._v("然后使用如下命令进行编译：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("em++ main.cpp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" index.html\n")])])]),s("p",[t._v("然后我们就可以得到三个文件：")]),t._v(" "),s("ol",[s("li",[t._v("index.html")]),t._v(" "),s("li",[t._v("index.js")]),t._v(" "),s("li",[t._v("index.wasm")])]),t._v(" "),s("p",[t._v("在本目录开启一个Web服务器，然后就可以在网页中看到 Hello WASM! 。")]),t._v(" "),s("p",[t._v("这便是最基本的使用方法，接下来我们深入一些概念。")]),t._v(" "),s("h1",{attrs:{id:"每个文件代表的含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每个文件代表的含义"}},[t._v("#")]),t._v(" 每个文件代表的含义")]),t._v(" "),s("p",[t._v("上文中生成了三个文件，"),s("code",[t._v("index.html")]),t._v("文件就是网页本体，里面包含了显示wasm运行结果的窗口，并加载了"),s("code",[t._v("index.js")]),t._v("。\n"),s("code",[t._v("index.js")]),t._v("中是一些胶水代码，主要是加载了"),s("code",[t._v("index.wasm")]),t._v("，并执行了里面的"),s("code",[t._v("main")]),t._v("函数。\n"),s("code",[t._v("index.wasm")]),t._v("则包含了我们编译好的C++代码。")]),t._v(" "),s("h1",{attrs:{id:"wasm导出函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wasm导出函数"}},[t._v("#")]),t._v(" WASM导出函数")]),t._v(" "),s("p",[t._v("我们使用WASM的时候，大多是想要使用已有的C++程序提供的功能，作为一个外部库。WASM默认不会导出所有的函数，因此我们需要看一下函数是如何导出的。")]),t._v(" "),s("h2",{attrs:{id:"导出函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导出函数"}},[t._v("#")]),t._v(" 导出函数")]),t._v(" "),s("p",[t._v("比如我们有如下的代码：")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('\nextern "C" int showMeTheAnswer(){\n    return 42;\n}\n\n')])])]),s("p",[t._v("注意这里的"),s("code",[t._v('extern "C"')]),t._v("，这是为了避免c++编译器造成的名称混淆，当然也可以使用混淆后的名字。默认"),s("code",[t._v("em++")]),t._v("是不会导出这个函数的，我们需要指定额外的链接参数"),s("code",[t._v("-s EXPORTED_FUNCTIONS=['_showMeTheAnswer']")]),t._v("，这里函数的名称前面加了"),s("code",[t._v("_")]),t._v("，这样我们就可以使用这个导出的函数了。")]),t._v(" "),s("p",[t._v("如果每一个函数都这样导出的话，那会写很多链接参数，所以我们使用一个宏，来帮我们导出，具体如下：")]),t._v(" "),s("div",{staticClass:"language-c++ extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('#include <emscripten.h>\n\nEMSCRIPTEN_KEEPALIVE\nextern "C" int showMeTheAnswer(){\n    return 42;\n}\n\n')])])]),s("p",[t._v("所有使用这个宏的函数，都会被导出。")]),t._v(" "),s("h2",{attrs:{id:"使用导出的函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用导出的函数"}},[t._v("#")]),t._v(" 使用导出的函数")]),t._v(" "),s("p",[t._v("为了使用导出的函数，我们有三种办法:")]),t._v(" "),s("ol",[s("li",[t._v("使用Module")]),t._v(" "),s("li",[t._v("使用ccall")]),t._v(" "),s("li",[t._v("使用cwrap")])]),t._v(" "),s("blockquote",[s("p",[t._v("使用ccall和cwrap之前，也需要用参数导出它们："),s("code",[t._v("-s \"EXTRA_EXPORTED_RUNTIME_METHODS=['ccall', 'cwrap']”")])])]),t._v(" "),s("p",[t._v("比如为了在js中使用我们刚刚导出的函数，我们可以这样做：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1 ")]),t._v("\nModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_showMeTheAnswer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2 ccall(func_Name_In_Srting, returnType, [argument types ], [arguments]))")]),t._v("\nModule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ccall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"showMeTheAnswer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3 cwrap(func_name, return_type,[‘argument_type’])")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" func "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cwrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"showMeTheAnswer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 42")]),t._v("\n\n")])])]),s("p",[t._v("在使用导出的函数时，一定要等WASM初始化完成，我们可以使用这个回调函数来帮助我们：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onRuntimeInitialized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" func "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cwrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"showMeTheAnswer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 42")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h1",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("WASM是很强大的工具，可以帮我们在Web中使用更重量级的代码，现在不少前端深度学习框架都使用了WASM，比如"),s("code",[t._v("Tfjs")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);
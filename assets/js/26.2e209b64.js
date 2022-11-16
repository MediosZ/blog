(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{339:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("前几天写毕业论文，没有选择使用 "),s("strong",[t._v("Microsoft Word")]),t._v("，而是去找了一份 "),s("strong",[t._v("Latex")]),t._v(" 的模板，想着可以趁这个机会学习一下怎么使用"),s("strong",[t._v("Latex")]),t._v("。体验其实还是挺好的，借助Latex，就不用再担心这样那样的格式问题（前提是能找到一个好的模板），可以把精力放在内容上，颇有当初学习 "),s("strong",[t._v("Markdown")]),t._v(" 时的畅快。")]),t._v(" "),s("p",[t._v("既然以后也会用到，不妨深入学习一下Latex好了。")]),t._v(" "),s("blockquote",[s("p",[t._v("LaTeX is a high-quality typesetting system or a document preparation system."),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])])])]),t._v(" "),s("h2",{attrs:{id:"latex-与其他排版系统有什么不同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latex-与其他排版系统有什么不同"}},[t._v("#")]),t._v(" Latex 与其他排版系统有什么不同？")]),t._v(" "),s("p",[t._v("Latex与其他排版系统，如 "),s("strong",[t._v("Word | Libre Writer | Pages")]),t._v("最大的不同是，Latex使用了一套预定义的标记语言（Markup plain text）来对文档进行表示，而后者（所见即所得编辑器）则使用了带样式的文字（Formatted text）。")]),t._v(" "),s("p",[t._v("比较明显的一个区别是，在Latex中，内容与样式是分离的，这可以帮助我们将注意力转移到内容上。\n使用Word时比较麻烦的一点是我们需要手动去设定几乎所有的样式。很多时候大量的注意力会被吸引到如何进行排版上。\n不过话又说回来，从使用上来说，大多数人还是会喜欢这种"),s("strong",[t._v("所见即所得")]),t._v("的编辑器吧。")]),t._v(" "),s("h3",{attrs:{id:"tex-与-latex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tex-与-latex"}},[t._v("#")]),t._v(" Tex 与 Latex")]),t._v(" "),s("blockquote",[s("p",[t._v("In short TeX is all about formatting, for document/template designers, while LaTeX is all about content, for document writers. "),s("sup",{staticClass:"footnote-ref"},[s("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])])])]),t._v(" "),s("p",[t._v("Tex给了使用者更底层的控制，就像是汇编语言，你可以完全控制文档的样式和内容，甚至有点像直接写Word文档的源码。\n而Latex则建立在Tex之上，它为了写文章的使用者提供了一系列High Level的控制命令，比如 "),s("code",[t._v("Chapter")]),t._v(", "),s("code",[t._v("Section")]),t._v("等等，让使用者可以从样式中脱离出来，更加专注与写出内容。")]),t._v(" "),s("h2",{attrs:{id:"latex-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latex-使用"}},[t._v("#")]),t._v(" Latex 使用")]),t._v(" "),s("p",[t._v("这一部分我认为不宜太过详细，具体怎么写Latex应该与自己的需求贴合，再查找文档之类的资料，因此这里暂不展开。")]),t._v(" "),s("h2",{attrs:{id:"latex-二三事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#latex-二三事"}},[t._v("#")]),t._v(" Latex 二三事")]),t._v(" "),s("p",[t._v("我在写毕业论文的时候，没有选择专用的编辑器，而是选择了VSCode，一方面一直在用，比较熟悉，另一方面，VSCode也确实可以胜任这项工作了。\n我装了Latex WorkShop 插件，基本的需求就满足了，不过还是要记录一下容易踩坑的点。")]),t._v(" "),s("p",[t._v("首先，任何的按钮背后都是指令，所以关键是要明白Latex的编译过程，而不是点一下按钮就万事大吉，可以避免很多的问题。")]),t._v(" "),s("h3",{attrs:{id:"引用的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用的问题"}},[t._v("#")]),t._v(" 引用的问题")]),t._v(" "),s("p",[t._v("在论文中引用文献是很常见的一个需求，但在Latex一次编译是不足以完成引用的。所以就需要使用 XeLatex 和 BibTex 进行总共四次编译，除了自己在命令行里输入之外，可以设置Latex Workshop中的"),s("code",[t._v("Tools")]),t._v("和"),s("code",[t._v("Reciept")]),t._v("来自定义编译过程。")]),t._v(" "),s("p",[t._v("以下是"),s("code",[t._v("vscode")]),t._v("配置文件：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"latex-workshop.latex.recipes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xe->bib->xe->xe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tools"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bibtex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"latex-workshop.latex.tools"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xelatex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"args"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-synctex=1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-interaction=nonstopmode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-file-line-error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-pdf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%DOCFILE%"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bibtex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bibtex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"args"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%DOCFILE%"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n")])])]),s("p",[t._v("可以看到，其实进行了四次编译，")]),t._v(" "),s("ol",[s("li",[t._v("编译正文，记录正文中的引用，生成 "),s("code",[t._v("xxx.log")]),t._v(" "),s("code",[t._v("xxx.pdf")]),t._v(" "),s("code",[t._v("xxx.aux")]),t._v("。")]),t._v(" "),s("li",[t._v("编译文献引用中间文件，生成 "),s("code",[t._v("xxx.blg")]),t._v(" "),s("code",[t._v("xxx.bbl")]),t._v("。")]),t._v(" "),s("li",[t._v("更新文献引用，将参考文献插入正文后，但文中的引用未处理。")]),t._v(" "),s("li",[t._v("完成正文中引用的处理。")])]),t._v(" "),s("p",[t._v("如果觉得这个麻烦，可以使用LatexMK(latexmk)，它可以自己控制编译过程，使用体验还是不错的。")]),t._v(" "),s("p",[t._v("只要配置好这个，就算是完成了 vscode 环境的配置吧。")]),t._v(" "),s("h2",{attrs:{id:"后记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[t._v("#")]),t._v(" 后记")]),t._v(" "),s("p",[t._v("虽然是用Latex写好了，但可能是模板确实有些过时，一些格式还是不对，时间也比较紧张，没办法去细改模板，结果吃了大亏XD\n果然还是要自己深入了解一下啊。")]),t._v(" "),s("hr",{staticClass:"footnotes-sep"}),t._v(" "),s("section",{staticClass:"footnotes"},[s("ol",{staticClass:"footnotes-list"},[s("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[s("p",[s("a",{attrs:{href:"https://www.wikiwand.com/en/LaTeX#/overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Latex Wiki"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),s("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[s("p",[s("a",{attrs:{href:"https://tex.stackexchange.com/questions/49/what-is-the-difference-between-tex-and-latex",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is the difference between Tex and Latex"),s("OutboundLink")],1),t._v(" "),s("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);
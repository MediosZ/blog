(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{266:function(t,e,n){},267:function(t,e,n){},269:function(t,e,n){"use strict";n(266)},270:function(t,e,n){"use strict";n(267)},271:function(t,e,n){var r=n(116),i=n(109),o=n(272),s=n(276);t.exports=function(t,e){if(null==t)return{};var n=r(s(t),(function(t){return[t]}));return e=i(e),o(t,n,(function(t,n){return e(t,n[0])}))}},272:function(t,e,n){var r=n(57),i=n(273),o=n(52);t.exports=function(t,e,n){for(var s=-1,a=e.length,u={};++s<a;){var p=e[s],c=r(t,p);n(c,p)&&i(u,o(p,t),c)}return u}},273:function(t,e,n){var r=n(274),i=n(52),o=n(55),s=n(30),a=n(20);t.exports=function(t,e,n,u){if(!s(t))return t;for(var p=-1,c=(e=i(e,t)).length,l=c-1,g=t;null!=g&&++p<c;){var m=a(e[p]),f=n;if("__proto__"===m||"constructor"===m||"prototype"===m)return t;if(p!=l){var h=g[m];void 0===(f=u?u(h,m,g):void 0)&&(f=s(h)?h:o(e[p+1])?[]:{})}r(g,m,f),g=g[m]}return t}},274:function(t,e,n){var r=n(275),i=n(54),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&i(s,n)&&(void 0!==n||e in t)||r(t,e,n)}},275:function(t,e,n){var r=n(117);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},276:function(t,e,n){var r=n(110),i=n(277),o=n(279);t.exports=function(t){return r(t,o,i)}},277:function(t,e,n){var r=n(53),i=n(278),o=n(111),s=n(112),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:s;t.exports=a},278:function(t,e,n){var r=n(115)(Object.getPrototypeOf,Object);t.exports=r},279:function(t,e,n){var r=n(113),i=n(280),o=n(56);t.exports=function(t){return o(t)?r(t,!0):i(t)}},280:function(t,e,n){var r=n(30),i=n(114),o=n(281),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&s.call(t,a))&&n.push(a);return n}},281:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},282:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return g}));n(31);var r={data:()=>({comp:null}),computed:{page(){return this.$pagination.paginationIndex+1}},mounted(){n.e(2).then(n.t.bind(null,321,7)).then(t=>{this.comp=t.default})},methods:{clickCallback(t){const e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(269),n(5)),o=Object(i.a)(r,(function(){var t=this._self._c;return this.comp?t(this.comp,{tag:"component",attrs:{value:this.page,"page-count":this.$pagination.length,"click-handler":this.clickCallback,"prev-text":this.$pagination.prevText,"next-text":this.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):this._e()}),[],!1,null,null,null).exports,s=(n(270),Object(i.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=n(32),u=n.n(a),p=n(271),c=n.n(p),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties(){return c()(this.$props,u.a)},commentProps(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},g=Object(i.a)(l,(function(){var t=this._self._c;return"vssue"===this.$service.comment.service?t("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?t("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},289:function(t,e,n){},308:function(t,e,n){"use strict";n(289)},326:function(t,e,n){"use strict";n.r(e);n(3);var r=n(33),i=n.n(r),o=n(4),s=n(282),a={components:{NavigationIcon:o.n,ClockIcon:o.a,TagIcon:o.q},data:()=>({paginationComponent:null}),computed:{pages(){return this.$pagination.pages}},created(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:()=>s.b,resolvePostDate(t){return i()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:t=>!t||Array.isArray(t)?t:[t]}},u=(n(308),n(5)),p=Object(u.a)(a,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"base-list-layout"}},[e("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(n){return e("article",{key:n.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("meta",{attrs:{itemprop:"mainEntityOfPage",content:n.path}}),e("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[e("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),e("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v(t._s(n.frontmatter.summary||n.summary))]),e("footer",[n.frontmatter.date?e("div",{staticClass:"ui-post-meta ui-post-date"},[e("ClockIcon"),e("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:n.frontmatter.date}},[t._v(t._s(t.resolvePostDate(n.frontmatter.date)))])],1):t._e(),n.frontmatter.tags?e("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[e("TagIcon"),t._l(t.resolvePostTags(n.frontmatter.tags),(function(n){return e("router-link",{key:n,attrs:{to:"/tag/"+n}},[t._v(t._s(n))])}))],2):t._e()])])})),0),t.$pagination.length>1&&t.paginationComponent?e(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);e.default=p.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{365:function(t,s,a){"use strict";a.r(s);var e=a(10),v=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("h2",{attrs:{id:"路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("history")])]),t._v(" "),s("li",[s("code",[t._v("hash")])])]),t._v(" "),s("h3",{attrs:{id:"history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[t._v("#")]),t._v(" "),s("code",[t._v("history")])]),t._v(" "),s("p",[t._v("API 简介：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("window.history.length")]),t._v(" 当前会话浏览过的页面数量")]),t._v(" "),s("li",[s("code",[t._v("window.history.go(?delta)")]),t._v(" 根据参数在历史记录中移动")]),t._v(" "),s("li",[s("code",[t._v("window.history.back()")]),t._v(" 上一页 等于 "),s("code",[t._v("window.history.go(-1)")])]),t._v(" "),s("li",[s("code",[t._v("window.history.forward()")]),t._v(" 下一页 等于 "),s("code",[t._v("window.history.go(1)")])]),t._v(" "),s("li",[s("code",[t._v("window.history.pushState(data, title, ?url)")]),t._v(" 添加一条浏览记录")]),t._v(" "),s("li",[s("code",[t._v("window.history.replaceState(data, title, ?url)")]),t._v(" 修改一条浏览记录")])]),t._v(" "),s("p",[t._v("HTML5 的 History API 为浏览器的全局 history 对象增加了该扩展方法。它是一个浏览器的一个接口，在 window 对象中提供了 onpopstate 事件来监听历史栈的改变，只要历史栈有信息发生改变的话，就会触发该事件。提供了如下事件：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"popstate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("调用 "),s("code",[t._v("go")]),t._v(" "),s("code",[t._v("back")]),t._v(" "),s("code",[t._v("forward")]),t._v(" "),s("code",[t._v("pushState")]),t._v(" "),s("code",[t._v("replaceState")]),t._v(" 均会触发上面的事件，并且浏览器的 url 地址也会跟着改变。只会改变 url 地址，且不会重新刷新页面。")]),t._v(" "),s("h3",{attrs:{id:"hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[t._v("#")]),t._v(" "),s("code",[t._v("hash")])]),t._v(" "),s("p",[s("code",[t._v("hash")]),t._v("路由模式是这样的："),s("code",[t._v("http://xxx.abc.com/#/xx")]),t._v("。 有带"),s("code",[t._v("#")]),t._v("号，后面就是"),s("code",[t._v("hash")]),t._v("值的变化。改变后面的"),s("code",[t._v("hash")]),t._v("值，它不会向服务器发出请求，因此也就不会刷新页面。并且每次"),s("code",[t._v("hash")]),t._v("值发生改变的时候，会触发"),s("code",[t._v("hashchange")]),t._v("事件。因此我们可以通过监听该事件，来知道"),s("code",[t._v("hash")]),t._v("值发生了哪些变化。比如我们可以如下简单的监听：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hashchange'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// location.hash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("改变"),s("code",[t._v("hash")]),t._v("不会触发页面跳转，因为"),s("code",[t._v("hash")]),t._v("链接是当前页面中的某个片段，所以如果"),s("code",[t._v("hash")]),t._v("有变化，那么页面将会滚动到"),s("code",[t._v("hash")]),t._v("所连接的位置。但是页面中如果不存在"),s("code",[t._v("hash")]),t._v("对应的片段，则没有任何效果。比如 "),s("code",[t._v("a")]),t._v("链接。这和 "),s("code",[t._v("window.history.pushState")]),t._v("方法类似，都是不刷新页面的情况下更改"),s("code",[t._v("url")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("hash")]),t._v("与"),s("code",[t._v("pushState")]),t._v("对比")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("hash")]),t._v("只能修改"),s("code",[t._v("url")]),t._v("的片段标识符的部分。并且必须从"),s("code",[t._v("#")]),t._v("号开始，但是"),s("code",[t._v("pushState")]),t._v("且能修改路径、查询参数和片段标识符。"),s("code",[t._v("pushState")]),t._v("比"),s("code",[t._v("hash")]),t._v("更符合前端路由的访问方式，更加优雅(因为不带#号)。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("hash")]),t._v("必须和原先的值不同，才能新增会话浏览历史的记录，但是"),s("code",[t._v("pushState")]),t._v("可以新增相同的"),s("code",[t._v("url")]),t._v("的记录")])])]),t._v(" "),s("p",[t._v("不管我们是通过"),s("code",[t._v("location")]),t._v("接口直接改变"),s("code",[t._v("hash")]),t._v("值，还是我们通过"),s("code",[t._v("history")]),t._v("直接前进或后退操作(改变"),s("code",[t._v("hash")]),t._v("变化)，我们都可以看到都能通过 "),s("code",[t._v("hashchange")]),t._v("该事件进行监听到"),s("code",[t._v("url hash")]),t._v("的改变。并且不会刷新页面。")])])}),[],!1,null,null,null);s.default=v.exports}}]);
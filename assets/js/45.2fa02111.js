(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{372:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[t._v("#")]),t._v(" BFC")]),t._v(" "),a("blockquote",[a("p",[t._v("在解释"),a("code",[t._v("BFC")]),t._v("之前，先说一下文档流。我们常说的文档流其实分为"),a("code",[t._v("定位流")]),t._v("、"),a("code",[t._v("浮动流")]),t._v("和"),a("code",[t._v("普通流")]),t._v("三种。而普通流其实就是指"),a("code",[t._v("BFC")]),t._v("中的"),a("code",[t._v("FC")]),t._v("。"),a("code",[t._v("FC")]),t._v("是"),a("code",[t._v("formatting context")]),t._v("的首字母缩写，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的 FC 有"),a("code",[t._v("BFC")]),t._v("、"),a("code",[t._v("IFC")]),t._v("，还有"),a("code",[t._v("GFC")]),t._v("和"),a("code",[t._v("FFC")]),t._v("。BFC 是"),a("code",[t._v("block formatting context")]),t._v("，也就是块级格式化上下文，是用于布局块级盒子的一块渲染区域")])]),t._v(" "),a("h2",{attrs:{id:"触发条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发条件"}},[t._v("#")]),t._v(" 触发条件")]),t._v(" "),a("ul",[a("li",[t._v("根元素，即"),a("code",[t._v("HTML")]),t._v("元素")]),t._v(" "),a("li",[a("code",[t._v("float")]),t._v(" 不是 "),a("code",[t._v("none")])]),t._v(" "),a("li",[a("code",[t._v("overflow")]),t._v(" 不是 "),a("code",[t._v("visible")])]),t._v(" "),a("li",[a("code",[t._v("position")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("absolute")])]),t._v(" "),a("li",[a("code",[t._v("fixed")])])])]),t._v(" "),a("li",[a("code",[t._v("display")]),t._v("值：\n"),a("ul",[a("li",[a("code",[t._v("inline-block")])]),t._v(" "),a("li",[a("code",[t._v("flex")])]),t._v(" "),a("li",[a("code",[t._v("inline-flex")])]),t._v(" "),a("li",[a("code",[t._v("grid")])]),t._v(" "),a("li",[a("code",[t._v("inline-grid")])]),t._v(" "),a("li",[a("code",[t._v("table-cell")])]),t._v(" "),a("li",[a("code",[t._v("table-caption")]),t._v("(表格标题)")]),t._v(" "),a("li",[a("code",[t._v("table")]),t._v("、"),a("code",[t._v("table-row")]),t._v("、 "),a("code",[t._v("table-row-group")]),t._v("、"),a("code",[t._v("table-header-group")]),t._v("、"),a("code",[t._v("table-footer-group")]),t._v("（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 "),a("code",[t._v("inline-table")]),t._v("）")])])]),t._v(" "),a("li",[a("code",[t._v("flow-root")]),t._v("(新属性，专为触发 BFC)")]),t._v(" "),a("li",[a("code",[t._v("column-count")]),t._v(" 或 "),a("code",[t._v("column-width")]),t._v(" 不为 "),a("code",[t._v("auto")]),t._v("，包括 "),a("code",[t._v("column-count")]),t._v(" 为 "),a("code",[t._v("1")])]),t._v(" "),a("li",[a("code",[t._v("column-span")]),t._v(" 为 "),a("code",[t._v("all")]),t._v(" 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中")])]),t._v(" "),a("h2",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),a("p",[a("code",[t._v("BFC")]),t._v("是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。它与普通的块框类似，但不同之处在于:")]),t._v(" "),a("ol",[a("li",[t._v("阻止元素被"),a("code",[t._v("浮动元素")]),t._v("覆盖")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\n        height: 100px;\n        width: 100px;\n        float: left;\n        background: rgb(153, 168, 173);\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  我是一个左浮动的元素\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cadetblue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px; height:200px;\n  background: #eee;\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",[a("img",{staticStyle:{width:"80%"},attrs:{src:"https://github.com/sandlz/images/raw/master/uPic/YPlqYA.png"}})]),t._v(" "),a("p",[t._v("这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，可触第二个元素的 BFC 特性，在第二个元素中加入 "),a("code",[t._v("display: flex")]),t._v("，就会变成：")]),t._v(" "),a("div",[a("img",{staticStyle:{width:"80%"},attrs:{src:"https://github.com/sandlz/images/raw/master/uPic/je6klc.png"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("包含浮动元素")])]),t._v(" "),a("p",[t._v("浮动元素会脱离文档流，查看如下例子：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cadetblue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",[a("img",{staticStyle:{width:"80%"},attrs:{src:"https://github.com/sandlz/images/raw/master/uPic/7sqxwA.png"}})]),t._v(" "),a("p",[t._v("由于容器内元素浮动，脱离了文档流，所以容器只剩下 2px 的边距高度(高度坍塌)。如果使触发容器的 BFC，那么容器将会包裹着浮动元素。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #eee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("也可以使用"),a("code",[t._v("clearfix")]),t._v("方法")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#container::after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",[a("img",{staticStyle:{width:"80%"},attrs:{src:"https://github.com/sandlz/images/raw/master/uPic/0qE5I2.png"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("阻止"),a("code",[t._v("margin")]),t._v("重叠")])]),t._v(" "),a("p",[t._v("同一个 "),a("code",[t._v("BFC")]),t._v(" 下外边距会发生折叠, 同时会取 "),a("code",[t._v("margin")]),t._v(" 的最大值做重叠部分；")]),t._v(" "),a("p",[t._v("放置在 2 个"),a("code",[t._v("BFC")]),t._v("中，即可避免重叠。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("计算 "),a("code",[t._v("BFC")]),t._v(" 的高度时，浮动元素也参与计算")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
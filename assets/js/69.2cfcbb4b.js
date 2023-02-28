(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{484:function(s,a,t){"use strict";t.r(a);var e=t(26),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"数字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数字"}},[s._v("#")]),s._v(" 数字")]),s._v(" "),t("p",[s._v("灵魂一问：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0.30000000000000004")]),s._v("\n")])])]),t("h2",{attrs:{id:"why"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[s._v("#")]),s._v(" Why?")]),s._v(" "),t("p",[s._v("计算机里所有的数据最终都是以二进制保存的，当然数字也一样.\n所以当计算机计算"),t("code",[s._v("0.1+0.2")]),s._v("的时候，实际上计算的是这两个数字在计算机里所存储的二进制.")]),s._v(" "),t("p",[s._v("0.1 二进制表达：0.000110011001100110011001100110011001100110011001100...(1100循环)\n0.2 二进制表达：0.00110011001100110011001100110011001100110011001100... (1100循环)")]),s._v(" "),t("p",[s._v("我们发现，它们都是无限循环的二进制。显然，计算机当然不会用自己“无限的空间”去存储这些无限循环的二进制数字。那对于这类数据该怎么办？")]),s._v(" "),t("h2",{attrs:{id:"js如何处理无限循环的二进制数字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js如何处理无限循环的二进制数字"}},[s._v("#")]),s._v(" JS如何处理无限循环的二进制数字")]),s._v(" "),t("p",[s._v("JavaScript中所用的数字包括整数和小数，都只有一种类型就是Number，它的实现遵循"),t("code",[s._v("IEEE 754")]),s._v("标准.\n使用64位固定长度来表示，也就是标准的double双精度浮点数（相关的还有float 32位单精度）; 我们只需要知道，在二进制科学表示法中，\n双精度浮点的"),t("code",[s._v("小数部分最多只能保留52位")]),s._v("（比如1.xxx...*2^n,这里x最多保留52位）加上前面的1，其实就是保留53位有效数字，剩余的舍去，遵从“0舍1入”，")]),s._v(" "),t("p",[s._v("0.1二进制舍弃后")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00011001100110011001100110011001100110011001100110011010")]),s._v("\n")])])]),t("p",[s._v("0.2二进制舍弃后")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0011001100110011001100110011001100110011001100110011010")]),s._v("\n")])])]),t("p",[s._v("二者相加：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0100110011001100110011001100110011001100110011001100111")]),s._v("\n")])])]),t("p",[s._v("转为10进制 => "),t("code",[s._v("0.30000000000000004")])]),s._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6844903700356399112",target:"_blank",rel:"noopener noreferrer"}},[s._v("0.1+0.2"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);
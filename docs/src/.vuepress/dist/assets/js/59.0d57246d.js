(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{478:function(t,a,v){"use strict";v.r(a);var e=v(26),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"canvas"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#canvas"}},[t._v("#")]),t._v(" Canvas")]),t._v(" "),v("h2",{attrs:{id:"简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),v("blockquote",[v("p",[t._v("最初由Apple使用在Safari中，后来Firefox/Chrome分别实现，经过一段时间发展，成为H5标准。\nCanvas可理解为画布，栅格化的。")])]),t._v(" "),v("h2",{attrs:{id:"使用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),v("p",[t._v("小游戏、头像裁剪、Charts")]),t._v(" "),v("h2",{attrs:{id:"基本知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本知识"}},[t._v("#")]),t._v(" 基本知识")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github.com/zliu/images/raw/master/uPic/Canvas%E5%85%A5%E9%97%A8.png",alt:"image"}})]),t._v(" "),v("h3",{attrs:{id:"坐标系、api、属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#坐标系、api、属性"}},[t._v("#")]),t._v(" 坐标系、API、属性")]),t._v(" "),v("h4",{attrs:{id:"api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("接口")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("作用")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("获取")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("HTMLCanvasElement")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Style、Context")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("getElementById('myCanvas')")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("CanvasRenderingContext2D")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Draw")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("canvas.getContext('2d')")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("ImageData")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("像素操作")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("ctx.createImageData(x, y) "),v("br"),t._v("  ctx.getImageData(sx, sy, sw, sh)")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("TextMetrics")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("计算宽度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("ctx.measureText(text)")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("CanvasGradient")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("渐变的不透明对象")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("ctx.createLinearGradient() "),v("br"),t._v(" ctx.createRadialGradient()")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("CanvasPattern")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("基于(image, canvas或video）的不透明对象")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("ctx.createPattern()")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[v("em",[t._v("Path2D(实验特性)")])]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("可以保留并重用的路径")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("new Path2D(?path, ?d) "),v("br"),t._v(" new Path2D(otherPathObj)")])])])]),t._v(" "),v("h4",{attrs:{id:"property"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#property"}},[t._v("#")]),t._v(" Property")]),t._v(" "),v("table",[v("tr",[v("th",{staticStyle:{width:"60px"}},[t._v("分类")]),t._v(" "),v("th",{staticStyle:{width:"100px","text-align":"center"}},[t._v("类别")]),t._v(" "),v("th",[t._v("方法名")]),t._v(" "),v("th",[t._v("作用")]),t._v(" "),v("th",[t._v("备注")])]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"100"}},[t._v("Style")]),t._v(" "),v("td",{attrs:{rowspan:"7"}},[t._v("Line")]),t._v(" "),v("td",[t._v("lineWidth")]),t._v(" "),v("td",[t._v("线宽")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("lineCap")]),t._v(" "),v("td",[t._v("线尾")]),t._v(" "),v("td",[t._v('"butt" || "round" || "square"')])]),t._v(" "),v("td",[t._v("lineJoin")]),t._v(" "),v("td",[t._v("线相交")]),t._v(" "),v("td",[t._v('"bevel" || "round" || "miter"')]),t._v(" "),v("td",[t._v("miterLimit")]),t._v(" "),v("td",[t._v("斜接头")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("getLineDash()")]),t._v(" "),v("td",[t._v("虚线")]),t._v(" "),v("td",[t._v("返回：Array")]),t._v(" "),v("td",[t._v("setLineDash()")]),t._v(" "),v("td",[t._v("设置虚线")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("lineDashOffset")]),t._v(" "),v("td",[t._v("虚线偏移")]),t._v(" "),v("td"),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"4"}},[t._v("Text")]),t._v(" "),v("td",[t._v("font")]),t._v(" "),v("td",[t._v("字体")]),t._v(" "),v("td",[t._v("默认：10px sans-serif")])]),t._v(" "),v("tr",[v("td",[t._v("textAlign")]),t._v(" "),v("td",[t._v("对齐方式")]),t._v(" "),v("td",[t._v("start (默认), end, left, right, center")])]),t._v(" "),v("tr",[v("td",[t._v("textBaseline")]),t._v(" "),v("td",[t._v("基线对齐方式")]),t._v(" "),v("td",[t._v(" top, hanging, middle, alphabetic (默认), ideographic, bottom")])]),t._v(" "),v("tr",[v("td",[t._v("direction")]),t._v(" "),v("td",[t._v("方向")]),t._v(" "),v("td",[t._v("ltr, rtl, inherit (默认)")])]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"1"}},[t._v("Fill")]),t._v(" "),v("td",[t._v("fillStyle")]),t._v(" "),v("td",[t._v("填充样式")]),t._v(" "),v("td",[t._v("默认：#000，支持rgb、rgba、black等")])]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"1"}},[t._v("Stroke")]),t._v(" "),v("td",[t._v("strokeStyle")]),t._v(" "),v("td",[t._v("描边样式")]),t._v(" "),v("td",[t._v("默认：#000，支持rgb、rgba、black等")])]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"4"}},[t._v("Shadows")]),t._v(" "),v("td",[t._v("shadowBlur")]),t._v(" "),v("td",[t._v("模糊等级")]),t._v(" "),v("td",[t._v("默认：0")])]),t._v(" "),v("tr",[v("td",[t._v("shadowColor")]),t._v(" "),v("td",[t._v("阴影色")]),t._v(" "),v("td",[t._v("默认：透明，支持rgb、rgba、black等"),v("br"),t._v("被fillStyle/strokeStyle影响")])]),t._v(" "),v("tr",[v("td",[t._v("shadowOffsetX")]),t._v(" "),v("td",[t._v("水平方向偏移")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("shadowOffsetY")]),t._v(" "),v("td",[t._v("垂直方向偏移")]),t._v(" "),v("td")]),t._v(" "),v("td",{attrs:{rowspan:"2"}},[t._v("Compositing")]),t._v(" "),v("td",[t._v("globalAlpha")]),t._v(" "),v("td",[t._v("透明度")]),t._v(" "),v("td",[t._v("默认：1")]),t._v(" "),v("tr",[v("td",[t._v("globalCompositeOperation")]),t._v(" "),v("td",[t._v("合成类型")]),t._v(" "),v("td",[t._v("可选值(12种)：source-over、source-in、source-out、"),v("br"),t._v("source-atop、destination-over、destination-in、"),v("br"),t._v("destination-out、destination-atop、lighter、copy、"),v("br"),t._v("xor、multiply、screen、overlay、darken、lighten、"),v("br"),t._v("color-dodge、color-burn、hard-light、"),v("br"),t._v("soft-light、difference、exclusion、hue、"),v("br"),t._v("saturation、color、luminosity")])])]),t._v(" "),v("h4",{attrs:{id:"method"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#method"}},[t._v("#")]),t._v(" Method")]),t._v(" "),v("table",[v("tr",[v("th",{staticStyle:{width:"60px"}},[t._v("分类")]),t._v(" "),v("th",{staticStyle:{width:"100px","text-align":"center"}},[t._v("类别")]),t._v(" "),v("th",[t._v("方法名")]),t._v(" "),v("th",[t._v("作用")]),t._v(" "),v("th",[t._v("备注")])]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"10"}},[t._v("路径")]),t._v(" "),v("td",{attrs:{rowspan:"10"}},[t._v("Path")]),t._v(" "),v("td",[t._v("beginPath()")]),t._v(" "),v("td",[t._v("开始路径")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("closePath()")]),t._v(" "),v("td",[t._v("结束路径")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("moveTo(x, y)")]),t._v(" "),v("td",[t._v("移动画笔")]),t._v(" "),v("td")]),t._v(" "),v("td",[t._v("lineTo(x, y)")]),t._v(" "),v("td",[t._v("直线路径")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("quadraticCurveTo(cp1x, cp1y, x, y)")]),t._v(" "),v("td",[t._v("二次贝塞尔曲线")]),t._v(" "),v("td",[t._v("cp1x,cp1y为一个控制点，x,y为结束点")]),t._v(" "),v("td",[t._v("bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)")]),t._v(" "),v("td",[t._v("三次贝塞尔曲线")]),t._v(" "),v("td",[t._v("cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点")]),t._v(" "),v("td",[t._v("arc(x, y, radius, startAngle, endAngle,  [, anticlockwise])")]),t._v(" "),v("td",[t._v("以（x,y）为圆心的以radius为半径的圆弧（圆）")]),t._v(" "),v("td",[t._v("anticlockwise 默认false 顺时针")]),t._v(" "),v("td",[t._v("arcTo(x1, y1, x2, y2, radius)")]),t._v(" "),v("td",[t._v("给定的控制点和半径画一段圆弧，再以直线连接两个控制点")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise])")]),t._v(" "),v("td",[t._v("椭圆")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("rect(x, y, width, height)")]),t._v(" "),v("td",[t._v("矩形")]),t._v(" "),v("td"),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"20"}},[t._v("绘制")]),t._v(" "),v("td",{attrs:{rowspan:"7"}},[t._v("Path")]),t._v(" "),v("td",[t._v("fill()")]),t._v(" "),v("td",[t._v("填充")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("stroke()")]),t._v(" "),v("td",[t._v("描边")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("drawFocusIfNeeded([path], element)")]),t._v(" "),v("td",[t._v("聚焦的元素绘制路径")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("scrollPathIntoView([path])")]),t._v(" "),v("td",[t._v("滚动至路径")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("clip([path, fillRule])")]),t._v(" "),v("td",[t._v("裁剪")]),t._v(" "),v("td",[t._v("路径裁剪"),v("br"),t._v("fillRule: nonzero(默认) "),v("br"),t._v("evenodd(奇偶)")])]),t._v(" "),v("tr",[v("td",[t._v("isPointInPath([path], x, y [, fillRule])")]),t._v(" "),v("td",[t._v("点是否在路径内")]),t._v(" "),v("td",[t._v("路径裁剪"),v("br"),t._v("fillRule: nonzero(默认) "),v("br"),t._v("evenodd(奇偶)")])]),t._v(" "),v("tr",[v("td",[t._v("isPointInStroke([path], x, y)")]),t._v(" "),v("td",[t._v("点是否在描边路径内")]),t._v(" "),v("td",[t._v("路径裁剪"),v("br"),t._v("fillRule: nonzero(默认) "),v("br"),t._v("evenodd(奇偶)")])]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"3"}},[t._v("Rect")]),t._v(" "),v("td",[t._v("fillRect(x, y, width, height)")]),t._v(" "),v("td",[t._v("填充")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("strokeRect(x, y, width, height)")]),t._v(" "),v("td",[t._v("描边")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("clearRect(x, y, width, height)")]),t._v(" "),v("td",[t._v("清除")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"3"}},[t._v("Text")]),t._v(" "),v("td",[t._v("fillText(text, x, y [, maxWidth])")]),t._v(" "),v("td",[t._v("填充文本")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("strokeText(text, x, y [, maxWidth])")]),t._v(" "),v("td",[t._v("描边文本")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("measureText(text)")]),t._v(" "),v("td",[t._v("测量文本")]),t._v(" "),v("td",[t._v("返回：TextMetrics "),v("br"),t._v(" {width ...}")])]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"1"}},[t._v("Image")]),t._v(" "),v("td",[t._v("drawImage(image, dx, dy)"),v("br"),t._v("drawImage(image, dx, dy, dWidth, dHeight)"),v("br"),t._v("drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)")]),t._v(" "),v("td",[t._v("绘制图片")]),t._v(" "),v("td",[t._v("image: CanvasImageSource, 包含："),v("br"),t._v("HTMLImageElement"),v("br"),t._v("SVGImageElement"),v("br"),t._v("HTMLVideoElement"),v("br"),t._v("HTMLCanvasElement"),v("br"),t._v("ImageBitmap"),v("br"),t._v("OffscreenCanvas")])]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"6"}},[t._v("Transformations")]),t._v(" "),v("td",[t._v("getTransform()")]),t._v(" "),v("td",[t._v("当前变换矩阵")]),t._v(" "),v("td",[t._v("返回：DOMMatrix")])]),t._v(" "),v("tr",[v("td",[t._v("rotate(angle)")]),t._v(" "),v("td",[t._v("旋转")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("scale(x, y)")]),t._v(" "),v("td",[t._v("缩放")]),t._v(" "),v("td",[t._v("默认缩放中心点(0, 0)")])]),t._v(" "),v("tr",[v("td",[t._v("translate(x, y)")]),t._v(" "),v("td",[t._v("平移")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("transform(a, b, c, d, e, f)")]),t._v(" "),v("td",[t._v("变换")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("setTransform(a, b, c, d, e, f)"),v("br"),t._v("setTransform(matrix)")]),t._v(" "),v("td",[t._v("设置变换")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"20"}},[t._v("其他")]),t._v(" "),v("td",{attrs:{rowspan:"3"}},[t._v("Pixel manipulation")]),t._v(" "),v("td",[t._v("createImageData(width, height)"),v("br"),t._v("createImageData(imagedata)")]),t._v(" "),v("td",[t._v("创建ImageData")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("getImageData(sx, sy, sw, sh)")]),t._v(" "),v("td",[t._v("获取图片数据")]),t._v(" "),v("td",[t._v("返回：ImageData")])]),t._v(" "),v("tr",[v("td",[t._v("putImageData(imageData, dx, dy)"),v("br"),t._v("putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)")]),t._v(" "),v("td",[t._v("设置ImageData")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",{attrs:{rowspan:"2"}},[t._v("State")]),t._v(" "),v("td",[t._v("save()")]),t._v(" "),v("td",[t._v("保存当前样式状态")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("restore()")]),t._v(" "),v("td",[t._v("恢复保存的样式状态(栈顶)")]),t._v(" "),v("td")])]),t._v(" "),v("h2",{attrs:{id:"样式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#样式"}},[t._v("#")]),t._v(" 样式")]),t._v(" "),v("p",[t._v("上色：填充、描边")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("fillStyle\nstrokeStyle\n")])])]),v("p",[t._v("颜色支持5种类型")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("yellow\n#FFA500\nrgb(255,165,0)\nrgba(255,165,0, 0.5)\nhsl(45, 100%, 50%)\nhsla(45, 100%, 50%, 0.5)\nCanvasGradient\nCanvasPattern\n")])])]),v("p",[t._v("画笔")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("lineWidth\n")])])]),v("h2",{attrs:{id:"形状"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#形状"}},[t._v("#")]),t._v(" 形状")]),t._v(" "),v("p",[t._v("概念：路径")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("# 开始新的路径\nbeginPath()\n# 闭合当前路径\nclosePath\n# 可创建子路径\nctx.moveTo(300, 0)\n")])])]),v("h3",{attrs:{id:"线"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线"}},[t._v("#")]),t._v(" 线")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("ctx.lineTo(200, 300)\n")])])]),v("h3",{attrs:{id:"矩形-rect"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#矩形-rect"}},[t._v("#")]),t._v(" 矩形: Rect")]),t._v(" "),v("p",[t._v("创建矩形有2种方式：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("# 1. fillRect / strokeRect\nctx.fillRect(0, 0, 200, 200)\n# 2. Path2D\nPath2D.rect(0, 0, 200, 200)\n")])])]),v("h3",{attrs:{id:"弧-arc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#弧-arc"}},[t._v("#")]),t._v(" 弧：Arc")]),t._v(" "),v("p",[t._v("圆、椭圆\n")]),v("div",{staticStyle:{width:"100%"}},[v("img",{staticStyle:{width:"33%"},attrs:{src:"https://github.com/zliu/images/raw/master/uPic/arc.jpg"}}),t._v(" "),v("img",{staticStyle:{width:"33%"},attrs:{src:"https://github.com/zliu/images/raw/master/uPic/arcTo_02.jpg"}}),t._v(" "),v("img",{staticStyle:{width:"33%"},attrs:{src:"https://github.com/zliu/images/raw/master/uPic/eliipse.jpg"}})]),v("p"),t._v(" "),v("h3",{attrs:{id:"曲线-bezier"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#曲线-bezier"}},[t._v("#")]),t._v(" 曲线 ：Bezier")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github.com/zliu/images/raw/master/uPic/54diwjdj8b.gif",alt:"image"}}),t._v(" "),v("img",{attrs:{src:"https://github.com/zliu/images/raw/master/uPic/mhmuin6c2w.gif",alt:"image"}})]),t._v(" "),v("h3",{attrs:{id:"fillrule"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fillrule"}},[t._v("#")]),t._v(" fillRule")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github.com/zliu/images/raw/master/uPic/Even-odd_and_non-zero_winding_fill_rules3.jpg",alt:"image"}})]),t._v(" "),v("h2",{attrs:{id:"变换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#变换"}},[t._v("#")]),t._v(" 变换")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://github.com/zliu/images/raw/master/uPic/EVw5K5.png",alt:"image"}})]),t._v(" "),v("h2",{attrs:{id:"文字"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文字"}},[t._v("#")]),t._v(" 文字")]),t._v(" "),v("p",[t._v("水平、垂直方向\n"),v("img",{attrs:{src:"https://github.com/zliu/images/raw/master/uPic/OelvkD.png",alt:"image"}}),t._v(" "),v("img",{attrs:{src:"https://github.com/zliu/images/raw/master/uPic/BJwOpR.png",alt:"image"}})]),t._v(" "),v("h2",{attrs:{id:"图片"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[t._v("#")]),t._v(" 图片")]),t._v(" "),v("p",[t._v("图片绘制支持多种来源")]),t._v(" "),v("h2",{attrs:{id:"动画"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),v("h2",{attrs:{id:"优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")])])}),[],!1,null,null,null);a.default=_.exports}}]);
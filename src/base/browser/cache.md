# 缓存

> 本文主要讲述浏览器对网络请求缓存的处理

## 原理

1. 客户端发起 HTTP 请求；
2. 服务端端响应头中设置缓存策略，将资源缓存到浏览器

缓存分为 2 种：

- 强缓存
- 协商缓存

<div>
  <img src="https://github.com/sandlz/images/raw/master/uPic/cache.jpg" style="width: 80%">
</div>

### 强缓存

特点：

1. 无需与服务端交互

控制强缓存的响应头

- `Expires`

Expires 是 HTTP/1.0 控制网页缓存的字段，其值为服务器返回该请求的结果缓存的到期时间，即再次发送请求时，如果客户端的时间小于 Expires 的值时，直接使用缓存结果。
到了 HTTP/1.1，Expires 已经被 Cache-Control 替代，原因在于 Expires 控制缓存的原理是**使用客户端的时间与服务端返回的时间做对比**，如果客户端与服务端的时间由于某些原因（时区不同；客户端和服务端有一方的时间不准确）发生误差，那么强制缓存将直接失效

- `Cache-Control`

在 HTTP/1.1 中，Cache-Control 是最重要的规则，主要用于控制网页缓存，主要取值为：

- public：所有内容都将被缓存（客户端和代理服务器都可缓存）
- private：所有内容只有客户端可以缓存，Cache-Control 的默认取值
- no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
- no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
- max-age=xxx (xxx is numeric)：缓存内容将在 xxx 秒后失效
- must-revalidate：告诉浏览器、缓存服务器，本地副本过期前，可以使用本地副本；本地副本一旦过期，必须去源服务器进行有效性校验。

- `Pragma`

Pragma 是 HTTP/1.0 标准中定义的一个 header 属性，请求中包含 Pragma 的效果跟在头信息中定义 Cache-Control: no-cache 相同，但是 HTTP 的响应头没有明确定义这个属性，所以它不能拿来完全替代 HTTP/1.1 中定义的 Cache-control 头。通常定义 Pragma 以向后兼容基于 HTTP/1.0 的客户端。
注：以上三个响应头，优先级顺序为：Pragma>Cache-Control>Expires

### 协商缓存

特点：

1. 需要与服务端发生交互，判断是否使用本地缓存的文件

- `ETag`

值是一个字符串，其内容通常是数据的哈希值，每个数据都有一个单独的标志，只要这个文件发生了改变，这个标志就会发生变化。
服务器可以在响应中返回 ETag，然后浏览器会在后续的请求中携带上这个参数来确定缓存是否需要更新。如果 ETag 值相同，说明资源未更改，服务器会返回 `304（Not Modified）` 响应码，浏览器就知道本地缓存仍然是可以使用的

- `Last-Modified`

服务器可以通过配置这个响应头，来向浏览器发送一个数据上次被修改的时间标签，例如：Last-Modified:Wed, 24 Apr 2019 02:54:16 GMT
这样浏览器就知道了该数据最后被修改的时间，后续请求中，会和服务器进行时间的比较，如果服务器上的时间比本地时间要新，说明数据有更改，浏览器需要重新下载数据。

补充一点，`response header`中的`etag`、`last-modified`在客户端重新向服务端发起请求时，会在 request header 中换个 key 名：

```
// response header
etag: '5c20abbd-e2e8'
last-modified: Mon, 24 Dec 2018 09:49:49 GMT

// request header 变为
if-none-matched: '5c20abbd-e2e8'
if-modified-since: Mon, 24 Dec 2018 09:49:49 GMT
```

## 缓存位置

浏览器缓存的位置的话，可以分为四种,优先级从高到低排列分别：

- `Service Worker`
- `Memory Cache`
- `Disk Cache`
- `Push Cache`

**Service Worker**
这个应用场景比如 PWA，它借鉴了 Web Worker 思路，由于它脱离了浏览器的窗体，因此无法直接访问 DOM。它能完成的功能比如：离线缓存、消息推送和网络代理，其中离线缓存就是「Service Worker Cache」。

**Memory Cache**
指的是内存缓存，从效率上讲它是最快的，从存活时间来讲又是最短的，当渲染进程结束后，内存缓存也就不存在了。

**Disk Cache**
存储在磁盘中的缓存，从存取效率上讲是比内存缓存慢的，优势在于存储容量和存储时长。

**Disk Cache VS Memory Cache**

两者对比，主要的策略

- 内容使用率高的话，文件优先进入磁盘
- 比较大的 JS，CSS 文件会直接放入磁盘，反之放入内存

**Push Cache**推送缓存

## 总结

1. 首先检查`Cache-Control`， 看强缓存是否可用, 如果可用的话直接使用
2. 否则进入协商缓存，发送HTTP请求，服务器通过请求头中的`If-Modified-Since`或者`If-None-Match`字段检查资源是否更新
3. 资源更新，返回资源和200状态码。
4. 否则，返回304，直接告诉浏览器直接从缓存中去资源

## 用户操作与缓存

- 普通刷新：当按下`F5`或者点击刷新按钮来刷新页面的时候，浏览器将绕过本地缓存来发送请求到服务器, 此时, 协商缓存是有效的
- 强制刷新：当按下`ctrl+F5`来刷新页面的时候, 浏览器将绕过各种缓存(本地缓存和协商缓存), 直接让服务器返回最新的资源
- 回车或转向：当在地址栏上输入回车或者按下跳转按钮的时候, 所有缓存都生效

## 参考

- [缓存](https://juejin.cn/post/6862711686705938445)

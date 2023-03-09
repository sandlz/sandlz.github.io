# 闭包

## 作用域与作用域链



## 本质

当前环境存在指向父级作用域的引用

## 什么是闭包？

闭包是一种特殊的对象，它由两部分组成：执行上下文（代号 A），以及在该执行上下文中创建的函数 （代号 B），当 B 执行时，
如果访问了 A 中变量对象的值，那么闭包就会产生，使用这个执行上下文 A 的函数名代指闭包。

## 怎么产生？

- 返回函数
- 函数当做参数传递

## 应用场景

- 柯里化
- 模块

## 面试

使用闭包，输出结果为1，2，3

``` js
for(var i = 0; i < 3; i++) {
  setTimeout(() => {
      console.log(i)
  }, 500)
}
```

::: details 点击查看结果
``` js
for(var i = 0; i < 3; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i)
    }, 500)
  })(i)
}
```
:::

## 原理

JavaScript代码的整个执行过程，分为两个阶段，代码编译阶段与代码执行阶段。编译阶段由编译器完成，将代码翻译成可执行代码，这个阶段作用域规则会确定。执行阶段由引擎完成，主要任务是执行可执行代码，执行上下文在这个阶段创建。

### 什么是作用域？

ES5 中只存在两种作用域：全局作用域和函数作用域。在 JavaScript 中，我们将作用域定义为一套规则，这套规则用来管理引擎如何在当前作用域以及嵌套子作用域中根据标识符名称进行变量（变量名或者函数名）查找

### 什么是作用域链？

首先要了解作用域链，当访问一个变量时，编译器在执行这段代码时，会首先从当前的作用域中查找是否有这个标识符，如果没有找到，就会去父作用域查找，如果父作用域还没找到继续向上查找，直到全局作用域为止,，而作用域链，就是有当前作用域与上层作用域的一系列变量对象组成，它保证了当前执行的作用域对符合访问权限的变量和函数的有序访问。

### 闭包产生的本质

当前环境中存在指向父级作用域的引用

闭包是一种特殊的对象，它由两部分组成：执行上下文（代号 A），以及在该执行上下文中创建的函数 （代号 B），当 B 执行时，如果访问了 A 中变量对象的值，那么闭包就会产生，且在 Chrome 中使用这个执行上下文 A 的函数名代指闭包。

## 示例

```js
function foo() {
    var a = 20;
    var b = 30;

    function bar() {
        return a + b;
    }

    return bar;
}

var bar = foo();
bar();
```

上面的例子，首先有执行上下文foo，在foo中定义了函数bar，而通过对外返回bar的方式让bar得以执行。当bar执行时，访问了foo内部的变量a，b。因此这个时候闭包产生。

在Chrome中，称 `foo`为闭包

## 闭包的应用场景
- 柯里化 bind
- 模块

### 柯里化


### 模块

参考 [模块](../standard/module.html)

## 参考

- [闭包](https://segmentfault.com/a/1190000012646221)
files: /css/theme.moon.css
theme: moon

[slide]
# 深拷贝与浅拷贝
[note]

亲爱的同学们，大家好哇！
我是看起来很菜，其实就是很菜，但是想变得不那么菜的王威。

在 JavaScript 的世界中，我们按存储类型分类，可以把数据类型分为两类，基本数据类型和复杂数据类型。

基本数据类型，像 String，Number，Boolean，Null，Undefined
复杂数据类型，Object，Array

大多数时候，基本数据类型的值直接代表语言实现的最底层，所有的基本类型都是不可改变的。
而复杂数据类型，相互之间的赋值是引用，

<!-- 拷贝，是大家在写项目的过程中偶尔需要的一个东西 -->

浅拷贝与深拷贝，。
大家都是程序员，都知道，写代码，碰到麻烦的东西，欸，有人已经实现过了，然后到那个项目里面 ctrl C，然后会自己的项目 ctrl V 一样


在 JavaScript 里，我们一般有两种东西需要拷贝，一个是 Object，一个是 Array
[/note]

[slide]
---
## 示例1
<img src="/images/copy/code1.png">
===

[slide] 
---
## 示例2
<img src="/images/copy/code2.png">
===


[slide] 
# 对比
---
<img src="/images/copy/code1.png">
<img src="/images/copy/code2.png">
===

[slide] 
# 为什么需要拷贝？
[slide]
# 浅拷贝介绍
[slide]
# 浅拷贝有哪些方式
1. Object.assign
2. Object Spread Operator ...
3. for(var key in obj)
[slide]
# 深拷贝介绍
[slide]
# 深拷贝实现方式
1. JSON.parse(JSON.stringify(obj))
2. 递归
3. 循环
[slide]
# 两者使用场景
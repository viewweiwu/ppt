files: /css/theme.moon.css
theme: moon

[slide]
# 深拷贝与浅拷贝
[note]
亲爱的同学们，大家好哇！
我是看起来很菜，其实就是很菜的王威。
这次的分享就如大家所看到的，浅拷贝与深拷贝。
拷贝，大家都知道，就是把一个东西复制一份嘛，像我们的经常去打印店复印资料一样，
或者说大家都是程序员，写代码，碰到麻烦的东西，欸，有人已经实现过了，然后到那个项目里面 ctrl C，然后会自己的项目 ctrl V 一样


在 JavaScript 里，我们一般有两种东西需要拷贝，一个是 Object，一个是 Array
[/note]
[slide]
# 什么是拷贝？
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
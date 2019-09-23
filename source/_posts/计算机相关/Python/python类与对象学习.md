---
title: python类与对象学习
date: 2019-04-18 22:05:46
tags:
    - python
categories: Python
---

参考资料：
[史上最【萌】的Python教程-10天学会Python-第6天-类与对象](https://www.bilibili.com/video/av17825900/?p=2)
[史上最【萌】的Python教程-10天学会Python-第7天-继续类与对象](https://www.bilibili.com/video/av17861945/?p=1)
![](https://lainundalice.oss-cn-beijing.aliyuncs.com/img/ACG.HD.00409.jpg)

<!-- more -->

### 基础
[Python 面向对象（初级篇）](https://www.cnblogs.com/wupeiqi/p/4493506.html)
[Python3 面向对象](http://www.runoob.com/python3/python3-class.html)
[python 类 - 带括号（实例化）与不带括号（别名）赋值的区别](https://blog.csdn.net/lrs1353281004/article/details/81612390)
[Python创建类的时候，加()和不加有什么区别、联系？](https://segmentfault.com/q/1010000015002874?utm_source=tag-newest)


[Python变量、方法、类的命名规则](https://blog.csdn.net/feikon2/article/details/79126774)
[↑python 私有变量/方法和保护变量/方法](https://www.cnblogs.com/ldw3432/p/8336571.html)
[↑Python的伪私有属性](http://www.cnblogs.com/blackmatrix/p/5600830.html)
[Python self参数 & 函数详解](https://blog.csdn.net/bing900713/article/details/60884931)

[python中类的方法](https://www.cnblogs.com/scolia/p/5598114.html)
[python中的面向对象和类的基本语法](https://www.cnblogs.com/scolia/p/5578021.html)
[python中的类属性和实例属性](https://www.cnblogs.com/scolia/p/5582268.html)
了解一下给对象添加或属性以及获取对象属性的方法。
了解一下创建对象，给对象传递参数后传递给init
>[python面向对象中的__init__方法怎么理解？](https://www.cnblogs.com/liyichen/p/5931840.html)
[python的__init__几种方法总结](https://www.cnblogs.com/qlshine/p/6049457.html)
创建对象后，会自动调用init方法，一般用来完成一些默认的事情，例如添加属性

[重点-一篇文章让你彻底搞清楚Python中self的含义](https://www.cnblogs.com/jessonluo/p/4717140.html)
[Python类中的self到底是干啥的](https://www.cnblogs.com/chownjy/p/8663024.html)
>注意对象调用类的时候，对象 = 类名和对象 = 类名()是两种情况
当我们调用t.prt()时，实际上Python解释成Test.prt(t)，也就是说把self替换成类的实例

[Python常用内建方法：__init__,__new__,__class__的使用详解](https://blog.csdn.net/qq_26442553/article/details/82464682)
[Python 类方法实例方法内存地址相同???](https://www.jianshu.com/p/9e947014549f)
[python编程（类的释放）](https://blog.csdn.net/feixiaoxing/article/details/78939452)
[Python __str__() 方法](http://www.runoob.com/note/41154)
[Python 中的 __str__ 与 __repr__ 到底有什么差别](http://baijiahao.baidu.com/s?id=1596817611604972751&wfr=spider&for=pc)

一个属性可以有设置和获取两个方法
[python私有方法和私有属性属性理解,子类继承](https://www.cnblogs.com/maxiaohei/p/7787256.html)
[python私有方法和私有属性](https://blog.csdn.net/liuskyter/article/details/80387726)
[再谈python的方法和属性私有化:单下划线，双下划线](https://blog.csdn.net/qq_26442553/article/details/82220476)

### 应用
[Python烤地瓜案例](https://blog.csdn.net/chenhua1125/article/details/79478458)
使用了类，可以将函数和全局变量封装在了一起。
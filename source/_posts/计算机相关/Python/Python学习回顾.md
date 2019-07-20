---
title: Python学习回顾
date: 2019-02-09 12:24:53
tags:
    - python
categories: Python
---

所用教材:
[从问题到程序-用Python学编程和计算-裘宗燕](https://book.douban.com/subject/27076220/)
![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549696611089&di=50834fa3a496d5c16898c6db0869cdc9&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F984f35697ec30f2a125fc1a4e2cb0363542d5549.jpg)

<!-- more -->

### 第二章 计算和编程初步
#### **2.1.1涉及到运算符以及优先级(裘p25)**
参考: [Python3 运算符](http://www.runoob.com/python3/python3-basic-operators.html)
> 运算符里面注意一下取模和取整 [取模运算](https://baike.baidu.com/item/%E5%8F%96%E6%A8%A1%E8%BF%90%E7%AE%97/10739384?fr=aladdin) 涉及到负数时求余与求模的区别
> 编程语言中，取余和取模的区别到底是什么？ - 知乎
https://www.zhihu.com/question/30526656
拓展:[十进制转二进制-原理了解一下](https://baike.baidu.com/item/%E5%8D%81%E8%BF%9B%E5%88%B6%E8%BD%AC%E4%BA%8C%E8%BF%9B%E5%88%B6/393189?fr=aladdin)
[Python中的逻辑运算符and or和not](https://blog.csdn.net/lqzdreamer/article/details/77171255)

[Python中代码换行](https://blog.csdn.net/baihhzm/article/details/73433160)

#### 2.1.2涉及到了浮点数和复数
[浮点算术 争议和限制](https://docs.python.org/zh-cn/3.7/tutorial/floatingpoint.html)
>涉及到一些精确运算进制浮点数的模块,例如decimal模块 fraction模块

[关于python的浮点数的一些坑点,里面的拓展链接可以了解一下](https://blog.csdn.net/kevin_object/article/details/82461825)
[Python复数类型,再去复习一下复数](https://www.cnblogs.com/hey-jacky/p/9544490.html)

#### 2.2 数据对象 计算和类型
[Python的数值类型](https://www.cnblogs.com/fishdm/p/3572963.html)
>拓展：[从三角形的面积公式谈起](https://zhuanlan.zhihu.com/p/25599977)
[怎么证明圆弧相等所对的圆周角相等](https://zhidao.baidu.com/question/2205465375390302828.html)

p32的总结可以看看

[Python基础 数值 布尔型、整型、长整型、浮点型、复数](https://www.cnblogs.com/russellluo/p/3292985.html)
>Python的整数对象可以表示任意大的整数值，但浮点数（和复数）只能表示有限范围内精度有限的数值
整数计算是精确计算，浮点数计算和复数计算是近似计算。

#### **2.3内置函数和数学函数包**
[内置函数 Python 3.7.2 文档](https://docs.python.org/zh-cn/3/library/functions.html)
>日常生活中遇到一些内置函数的时候可以看一下这里

[Python3 内置函数](http://www.runoob.com/python3/python3-built-in-functions.html)
[Python 中关于 round 函数的小坑](http://www.runoob.com/w3cnote/python-round-func-note.html)

[Python标准库12 数学与随机数 math包，random包](http://www.cnblogs.com/vamei/archive/2012/10/26/2741702.html)
{% fold 练习%}
```python
import random

all_people = ['Tom', 'Vivian', 'Paul', 'Liya', 'Manu', 'Daniel', 'Shawn']
random.shuffle(all_people)

for i in enumerate(all_people):
  print(i)
#这样写打印出来一些元祖

for i,name in enumerate(all_people):
    print(i, ':'+name)
```
{% endfold%}

[Python math 模块与 cmath 模块](http://www.runoob.com/w3cnote/python-math-and-cmath-module.html)
* **拓展** 
[print 函数用法总结](http://www.runoob.com/w3cnote/python3-print-func-b.html)
[python基础_格式化输出-%用法和format用法](https://www.cnblogs.com/fat39/p/7159881.html)
[输入输出 — Python 3.7.2 文档-有空看看](https://docs.python.org/zh-cn/3/tutorial/inputoutput.html)
注意round函数可能是个坑
[enumerate函数](http://www.runoob.com/python/python-func-enumerate.html)

#### 2.4字符串
[python-字符串-菜鸟教程](http://www.runoob.com/python/python-strings.html)
[python 字符串操作](https://www.cnblogs.com/songqingbo/p/5126957.html)
[Python中单引号，双引号，3个单引号及3个双引号的区别](https://blog.csdn.net/woainishifu/article/details/76105667)

---
title: Python学习回顾3-数据的组织和操作
date: 2018-12-13 14:33:22
tags:
    - python
categories: Python
---
[本书的一个网页(勘误表可以看看)](http://www.math.pku.edu.cn/teachers/qiuzy/books/python/index.htm)
序言涉及了语言的数据机制,为了使数据机制强大丰富而又不臃肿,具有通用性,大体上将数据机制分了几个方面:
类型(例如int类型,集合所有整数值)/基本类型(内置类型),为类型对象提供一个方便的书写形式以及一些操作(算术运算,比较运算之类的)/提供一组组合已有数据对象构造复杂数据对象的机制,还涉及到了数据结构/定义新类型的机制.
涉及到了组合数据类型,例如表(list)类型/序列的概念和元祖(tuple)类型,字典(dict)和集合(set/frozenset)
涉及到了可变对象和不可变对象,组合对象的描述以及组合对象与迭代器的关系.

<!-- more -->

## <center>5.1 组合数据对象</center>
由于实际需要,我们需要一个既能包装起一批作为元素的数据对象,允许访问和使用其中的元素,并且能做为一个整体保存 传递和使用的组合数据对象.
组合数据对象就是包含了一组数据成分的数据对象.
## <center>5.2 表</center>
讲组合数据类型list(表,也叫列表)
表是一个**内置序列类型**(可拓展了解)
### 1.简介
作为序列,表对象里每个元素都有确定的位置,这个位置成为**下标**,程序里可以通过**下标表达式(拓展了解一下)**访问表元素.
注意表中首元素下标是0.

可以认为,一个表描述了一种对应关系,它把从0开始的一段整数值,分别对应到表中的各个元素.
涉及到了函数amount(涉及到了第三章的一个统计硬币兑换方式实例,过后再看)
### 2.表的构造和操作
[【Python】Python 之列表(List)结构](https://blog.csdn.net/u014647208/article/details/77574112)
>涉及到了列表基本的访问/更新/删除/运算/切片

[Python--List方法总结](https://blog.csdn.net/qq_31813549/article/details/79048853)
>涉及到了更多样的列表构造/删除/更新/高阶函数内容

[Python xrange() 函数](http://www.runoob.com/python/python-func-xrange.html)
[xrange与range之间的区别](https://blog.csdn.net/guan_xiao_nan/article/details/79447660)
>再去了解一下生成器

[Python 字典(Dictionary) items()方法](http://www.runoob.com/python/att-dictionary-items.html)

如果表的元素不多,或者表中各元素互相独立,可以使用直接描述的方式.
如果表中的元素很多,而且元素之间存在一定的关系或规律性,那么可以使用下面这个方式

#### 表和元素
假设变量list1的值是一个表,其元素的合法下标范围是从0到len(list1) - 1,也可以使用负整数来求得list1末尾的元素,这样更清晰一些.

#### 使用list构造表
创建新表的另一种方式使用类型名的函数调用形式list(...)来构造表(实际上是做类型转换).
函数list的实参应该是一个序列或者迭代器
例如:list2 = list("abc")
list3 = list(range(100)) *可以做出一个等查序列的表*

python把迭代器和序列对象统称为可迭代对象(Python术语成为iterable).list的实参必须是可迭代对象(空表也是可迭代对象).解释器求值list(1234)给出的出错信息时1234不是可迭代对象.
[Python可迭代对象，迭代器，生成器的区别(里面的参考内容可以多看看)](https://blog.csdn.net/jinixin/article/details/72232604)

[完全理解Python迭代对象、迭代器、生成器](https://foofish.net/iterators-vs-generators.html)
>尽管绝大多数容器都提供了某种方式来获取其中的每一个元素，但这并不是容器本身提供的能力，而是可迭代对象赋予了容器这种能力，当然并不是所有的容器都是可迭代的
[网络套接字](https://zh.wikipedia.org/wiki/%E7%B6%B2%E8%B7%AF%E6%8F%92%E5%BA%A7)
迭代器内部持有一个状态，该状态用于记录当前迭代所在的位置，以方便下次迭代的时候获取正确的元素
迭代器有一种具体的迭代器类型，比如list_iterator，set_iterator。可迭代对象实现了__iter__方法，该方法返回一个迭代器对象
涉及到了反编译
迭代器涉及到了itertools/斐波那契数列

[python 生成器和迭代器有这篇就够了](https://www.cnblogs.com/wj-1314/p/8490822.html)
[Python index()方法](http://www.runoob.com/python/att-string-index.html)(还涉及到了find()方法)
[生成器](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014317799226173f45ce40636141b6abc8424e12b5fb27000)
[迭代](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/0014317793224211f408912d9c04f2eac4d2af0d5d3d7b2000)
默认情况下，dict(字典)迭代的是key。如果要迭代value，可以用for value in d.values()，如果要同时迭代key和value，可以用for k, v in d.items()。
那么，如何判断一个对象是可迭代对象呢？方法是通过collections模块的Iterable类型判断
```python
>>> from collections import Iterable
>>> isinstance('abc', Iterable) # str是否可迭代
True
>>> isinstance([1,2,3], Iterable) # list是否可迭代
True
>>> isinstance(123, Iterable) # 整数是否可迭代
False
```



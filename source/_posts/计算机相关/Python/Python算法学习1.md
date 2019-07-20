---
title: Python算法学习1
date: 2019-04-12 19:07:54
tags:
    - Python
categories: Python
---

参考资料：
[数据结构与算法：Python语言描述](https://book.douban.com/subject/26702568/)
[python数据结构与算法系列课程-Bilibili](https://www.bilibili.com/video/av38669550/?p=2)
课件视频链接：https://pan.baidu.com/s/1WZae5kLdeQBnRCNUzo4bYQ  提取码：sslr
[python数据结构与算法系列课程（讨论的人多）-bilibili](https://www.bilibili.com/video/av21540971/?p=4)
[python之路第二步](https://www.kancloud.cn/lihaiboit/pythonforme/627772)
![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555006897270&di=a7b0b54233355f8d3024f414a4d284c8&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fc31701a0a1fc0220f95f2567b4812453277e7433.jpg)
参考教程：[Data structures: Introduction to graphs](https://www.youtube.com/watch?v=gXgEDyodOJU&t=47s)
[[清华大学]数据结构第六章《图》](https://www.bilibili.com/video/av52270499?from=search&seid=89976861284999033)


<!-- more -->

## 算法效率
[算法效率与复杂度-CSDN博客](https://blog.csdn.net/weixin_39378885/article/details/80502024)
[抽空了解-算法分析之函数渐近分析](https://www.cnblogs.com/JayZen/p/4073235.html)

###  大O表示法：
[**重点**-大O算法复杂度表示（涉及到了时间复杂度）](https://blog.csdn.net/laoqiuge/article/details/53241603)
[**重点**-白话算法：时间复杂度和大O表示法](https://www.jianshu.com/p/59d09b9cee58)
>大O表示法就是将算法的所有步骤转换为代数项，然后排除不会对问题的整体复杂度产生较大影响的较低阶常数和系数。
[Time complexity-Wiki](https://en.wikipedia.org/wiki/Time_complexity)
[算法分析O(n), O(nlogn)...](https://blog.csdn.net/xiaopihaierletian/article/details/73823629)
[算法运行时间1、logN、N、NlogN 、N^2、N^3、2^n之间的比较](https://blog.csdn.net/x_panda/article/details/16974709)
拓展：
[React 编程思想](https://zhenyong.github.io/react/docs/thinking-in-react.html)
[angular 和 React 想选择一个学习，哪个比较好？](https://www.zhihu.com/question/29848048)
[react与backbone比较](https://blog.csdn.net/qq_37811211/article/details/77337347)

###  时间复杂度相关：
[关于时间复杂度的详解](https://www.cnblogs.com/Allen-win/articles/6816376.html)
[常用时间复杂度整理](https://blog.csdn.net/u010010664/article/details/78834695)
[时间复杂度 O(log n) 是什么意思？](https://blog.csdn.net/qq_34579060/article/details/82797264)
[算法复杂度中的O(logN)底数是多少](https://blog.csdn.net/jdbc/article/details/42173751)

[最坏时间复杂度](https://www.cnblogs.com/lianggege123/articles/9219367.html)
[复杂度分析(下)：浅析最好、最坏、平均、均摊复杂度](https://www.jianshu.com/p/bb56ebca06d1)
优先关注最坏时间复杂度，其次是最优时间复杂度
[**重点**-时间复杂度的规则与计算](https://blog.csdn.net/weixin_40136018/article/details/81365198)

**timeit模块：**
引用函数方法的时候不能简单地理解为是一个复杂度不高的步骤,需要考虑引用的函数本身的复杂度。例如list_1.append()
[Python代码计时模块timeit学习笔记](https://blog.yongli1992.com/2015/01/27/python-timeit-module/)
[Python timeit模块](https://blog.csdn.net/Calling_Wisdom/article/details/41349605)
>复习一下list相关的知识，例如生成list的方法
[列表生成式](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001431779637539089fd627094a43a8a7c77e6102e3a811000)
[Python之列表生成式、生成器、可迭代对象与迭代器](https://www.cnblogs.com/yyds/p/6281453.html)
[python中append和extend函数区别](https://blog.csdn.net/kancy110/article/details/77131441)

见下列代码理解Timer函数使用的要点
```python
timer1 = Timer("test1()", "from __main__ import test1()")
timer1.timeit(1000)
注意对头添加要比对尾添加慢的情况
```
[Python-list 和 dict 内置操作的时间复杂度](https://www.jianshu.com/p/db75baf61cdd)
[Python 各种集合内置方法的时间复杂度](https://blog.csdn.net/Baoli1008/article/details/48059623)
[python中in在list和dict中查找效率比较](https://blog.csdn.net/wzgbm/article/details/54691615)
>list里面注意一下slice切片相关

```python
def t2():
    li = []
    for i in range(10000):
        li += [i]


def t7():
    li = []
    for i in range(10000):
        li = li + [i]
# PYTHON里面对t2这种形式是有优化的，t2的速度要快于t7
```

##  数据结构概念的引入&抽象数据类型
[数据结构概念以及与算法区别](https://www.cnblogs.com/lph-shares/p/8271208.html)

[重点-抽象数据类型和Python类（豆瓣）](https://segmentfault.com/a/1190000015315359)
[第一章 抽象数据类型）](https://www.cnblogs.com/su47yuwenshu/p/3627410.html)
[笔记-【Python&数据结构】 抽象数据类型 Python类机制和异常](https://www.cnblogs.com/franknihao/p/6890499.html)
详细的内容可以看语言描述那本书

## 线性表
《语言描述》p67部分讲到了表的概念和性质，可以看看
涉及到了前驱元素和后继元素
[数据结构：线性表的基本操作](https://www.cnblogs.com/leaver/p/6832390.html)

### 顺序表
**内存**
[Python深入06 Python的内存管理](https://www.cnblogs.com/vamei/p/3232088.html)
[python中int类数据的内存大小](https://blog.csdn.net/mjl960108/article/details/80191308)
[Python 对象内存占用](https://www.cnblogs.com/Lvkun/archive/2012/03/01/python_object_memory_usage.html)
int a = 1，如果计算机是32位，那么这个a = 1就会占四个字节，char的话如果是一个字节就占一个字节

[重点-数据结构--顺序表定义及python实现](https://blog.csdn.net/xzfreewind/article/details/74834226)
要点-存储一组相同类型的数据的时候可以考虑一下这个顺序表
```python
li = [123, 345, 453, 77]
# 这是一个存储一组相同类型数据的列表，可以给li直接给一个比如0x23的位置，如果要查找li[3]，计算位置的方法就是0x23+3*Byte，这样也可以理解为什么列表第一个位置的下标是0，下标表示的其实是偏移量。
```
[列表存储内存的两种形式](https://www.cnblogs.com/c-x-a/p/8964990.html)
[重点-每个程序员都应该了解的内存知识-1](https://lrita.github.io/2018/06/30/programmer-should-know-about-memory-1/)

[顺序表的结构与实现](https://www.kancloud.cn/lihaiboit/pythonforme/627794)
可以考虑一下一体式结构和分离式结构之间的不同以及优劣
顺序表如果要添加新的元素，且没有额外的空间去存储这个新的的元素，就会重新申请一个更大更合适的内存来重新存储目前的这些元素。
一体式结构此时表头信息需要重新选择空间来存储，而分离式结构不需要这种操作。

[顺序表的操作](https://www.kancloud.cn/lihaiboit/pythonforme/627795)
注意操作顺序表的时候增删元素时不同操作的时间复杂度

### 链接表
* [python数据结构之链表](https://www.cnblogs.com/kumata/p/9147077.html)
* [python数据结构链表之单向链表](https://www.cnblogs.com/Freec/p/7230063.html)
注意头节点和尾节点的作用
[python实现单向链表详解](https://www.jb51.net/article/134701.htm)
[构造函数__init__](https://www.bilibili.com/video/av40229921?from=search&seid=14454135242591461043)
[python面向对象中的__init__方法怎么理解？](https://www.cnblogs.com/liyichen/p/5931840.html)
[python的__init__几种方法总结](https://www.cnblogs.com/qlshine/p/6049457.html)
[重点-python私有方法和私有属性](https://blog.csdn.net/liuskyter/article/details/80387726)
>复习一下python的类的知识 [类与对象](https://www.bilibili.com/video/av17825900)
[继续类与对象](https://www.bilibili.com/video/av17861945)

注意python和其他语言变量标识本质上的区别
python并没有单独的标识地址的方式，但是本质上还是借助变量链接的性质去查找。
* 链接表的构造：
构造的链表需要知道第一个节点的位置
需要注意列表的判空
[python使用游标访问数据](https://www.cnblogs.com/gisoracle/p/7223072.html?utm_source=itdadao&utm_medium=referral)
注意一下计算列表长度的时候，count的初始值和游标的停止位置之间的关系。
注意游标可以用什么方式（例如cur = cur.next)移动。
注意链表尾部添加元素的时候如何让游标停在最后一个节点而不是停在None那里。
**构造方法的时候注意空链表的情况**
[if __name__ == '__main__' 如何正确理解?](https://www.zhihu.com/question/49136398)
注意头插法和尾插法的区别，注意头插法调整链接指向的顺序。

了解一下后继节点这个概念

[链表与顺序表的对比](https://blog.csdn.net/qq_36387683/article/details/80904400)

#### 单向循环链表
[用Python实现单向循环链表](https://blog.csdn.net/phthon1997/article/details/83479742)
单向循环链表删除节点时需要考虑：删除头节点和删除尾节点对于更新节点循环指向的情况。重点是删除头节点的情况，删除尾节点没有什么改变.另外需要考虑链表为空和链表里只有一个节点的情况（重点）

#### 双向链表
[python实现 双向循环链表](https://www.cnblogs.com/Lin-Yi/p/7326713.html)
[3.3双向链表](https://www.kancloud.cn/lihaiboit/pythonforme/627839)
**再去了解下面向对象、封装、继承**
双向链表需要注意的点：不涉及数据增删的地方不怎么需要改，涉及增删的函数需要考虑前驱结点

#### 栈&队列
[python数据结构之栈、队列与堆 ](https://blog.csdn.net/haiyu94/article/details/79413992)
[Python栈实现](https://www.jianshu.com/p/1327cc0de255)
[堆栈-百度百科](https://baike.baidu.com/item/堆栈/1682032?fr=aladdin)
[栈和队列是操作受限线性表，操作限制降低了操作灵活性，为什么要加入这些限制？](https://www.zhihu.com/question/263997406)
注意几个名词：压栈、出栈、栈顶、栈顶元素、栈底、栈底元素等

复习一下顺序表和链接表在添加元素时关于头部添加元素和尾部添加元素的时间复杂度的不同。
[python定义函数时的默认返回值](http://www.cnblogs.com/chongzi1990/p/8609570.html)
[Python 的无返回值函数末尾写与不写 return 对代码有无影响](https://www.v2ex.com/amp/t/337852)

**栈的应用可以去了解一下括号匹配问题、表达是的表示、计算和变换问题
再去了解一下栈的递归、逆波兰表达式**

>拓展：
[python中yield的用法详解](https://blog.csdn.net/mieleizhi0522/article/details/82142856)
[python raise](https://www.cnblogs.com/ggzhangxiaochao/p/9002847.html)


设计队列的出队和入队时，总会有一个操作的时间复杂度是O(1),另一个是O(n),此时需要考虑那一个操作用的多一些，多的操作用O(1)
[Python List pop()方法](https://www.runoob.com/python/att-list-pop.html)
[经典算法19--双端队列](https://blog.csdn.net/xiangxizhishi/article/details/79119501)
[双端队列-百度百科](https://baike.baidu.com/item/双端队列/2968804?fr=aladdin)

## 树
### 基本概念、性质
* [树的概念、术语、种类](https://www.kancloud.cn/lihaiboit/pythonforme/627876)
[【数据结构】有序树和无序树的区别](https://blog.csdn.net/qq_30594349/article/details/75546766)
* [二叉树的基本概念、性质](https://www.kancloud.cn/lihaiboit/pythonforme/627877)
[二叉树的5个重要性质（含证明过程）](https://blog.csdn.net/tianlihua306/article/details/44621827)
>* 性质三注意一下，不同人对“树的层数”定义不同，有的是根节点在第一层，有的是根节点在第零层，当涉及到层数的时候需要先了解一下对方是如何定义“树的层数”的。
>* [完全二叉树的高度为什么是对lgN向下取整](https://www.cnblogs.com/buzzerrookie/p/3378473.html)

* [数据结构 – 树的度和结点数的关系](http://blog.sina.com.cn/s/blog_52f6ead00101gve6.html)
>复习一下数列的相关知识,注意性质2和性质4的关系，复习一下指数和对数的关系

* [完美二叉树, 完全二叉树和完满二叉树](https://w1/article/details/52802855)
了解一下啊二分查找ww.cnblogs.com/idorax/p/6441043.html)
[数据结构之 平衡二叉树](https://www.cnblogs.com/zhujunxxxxx/p/3348798.html)
[二叉树排序-腾讯云](https://cloud.tencent.com/developer/information/二叉树排序)
[二叉树-详解二叉排序树](https://blog.csdn.net/yixianfeng4
* [【数据结构】树的定义和树的三种存储结构](https://www.jianshu.com/p/6ba5743f41f7)
* [树结构的经典应用是什么？小白学习](https://q.cnblogs.com/q/39326/)
* [AVL树，红黑树，B树，B+树，Trie树都分别应用在哪些现实场景中？](https://www.zhihu.com/question/30527705)

### 二叉树的广度遍历以及实现
[python 实现二叉树的深度 & 广度优先遍历](https://www.cnblogs.com/kadycui/p/10184110.html)
[二叉树利用队列实现层次遍历](https://blog.csdn.net/lafengxiaoyu/article/details/53240346)
注意队列为空的特殊情况，列表里有一个元素None和列表为空是不一样的。

### 树和森林
[树和森林的表示方法+树和森林的遍历](https://blog.csdn.net/liuxiang15/article/details/82347124)


### 二叉树的深度遍历
[二叉树遍历(先序、中序、后序)](https://www.jianshu.com/p/456af5480cee)
深度遍历时，要注意子树的概念，每次遍历时都要当作子树来对待。
先中后的区别是遍历根节点顺序的区别。

### 其他
[由遍历序列确定二叉树](https://blog.csdn.net/xiao_bei_/article/details/86703554)
[实验3 | 由遍历序列构造二叉树](https://blog.csdn.net/isunbin/article/details/82054504)
注意中序来判断子节点相对于根结点的位置，不可缺少，先后序用来判别根的位置，同时结合子树的概念理解一下

---
title: python算法学习-图
date: 2019-06-16 15:01:18
tags:
    - python
categories: Python
---


![](https://lainundalice.oss-cn-beijing.aliyuncs.com/img/1560783725391.jpg)
参考教程：[Data structures: Introduction to graphs](https://www.youtube.com/watch?v=gXgEDyodOJU&t=47s)
[[清华大学]数据结构第六章《图》](https://www.bilibili.com/video/av52270499?from=search&seid=89976861284999033)

<!-- more -->

### 基础

注意树和图的关系：'Any tree is also a graph.'
树有N个节点，就有N-1个边。

* [图的定义和各种术语总结](https://blog.csdn.net/eyishion/article/details/53234255)
[图论术语-维基](https://zh.wikipedia.org/wiki/图论术语#环)
[顶点 (图论)-维基](https://zh.wikipedia.org/wiki/顶点_(图论))
[图graph，G(V,E)=Vertex(顶点集合)+Edge(边集合)](https://www.jianshu.com/p/a153b3fddfd2)
[【图结构专题】有向图](https://blog.csdn.net/u010853261/article/details/79618379)
注意邻接关系（点点之间）和关联关系（点边之间）这个概念
[节点度-维基](https://zh.wikipedia.org/wiki/节点度)
思考一下树的节点度即可
>[什么是关联图谱？——关联图谱（一） ](http://www.sohu.com/a/234371835_663464)
[HCNP-R&S-IERN——理解OSPF邻居与邻接关系](https://blog.csdn.net/wdkirchhoff/article/details/45101005)
* [完全图](https://zh.wikipedia.org/wiki/完全圖)
[趣题：完全图K_n最少可以拆成多少个完全二分图？](https://www.matrix67.com/blog/archives/998)
[完全偶图K(3,3)与完全图K5是否存在平面表示](https://www.cnblogs.com/xpjiang/p/4466562.html)


* [图的应用详解-数据结构](https://blog.csdn.net/hguisu/article/details/7719428)
[什么是图计算及其应用场景？](https://www.zhihu.com/question/38341609)
[算法——图之加权图](https://blog.csdn.net/a60782885/article/details/72742557)

#### 路径

* 了解一下路径、简单路径、环/环路（含简单）、有向无环图（DAG） 
[简单路径-百度](https://baike.baidu.com/item/简单路径)
[有向无环图（DAG）技术白话解读](https://blog.csdn.net/omnispace/article/details/80381329)
[有向无环图VS树](https://blog.csdn.net/XXJ19950917/article/details/78046550)

* [欧拉回路-百度](https://baike.baidu.com/item/欧拉回路)
[欧拉环、欧拉路径的判定和求法](http://www.cppblog.com/MatoNo1/archive/2011/03/27/142776.html)
[第四章 Euler 图和 Hamilton 图](http://read.pudn.com/downloads128/ebook/548247/图论讲义/图论讲义41E图.pdf)
[哈密尔顿回路总结](https://www.cnblogs.com/zhj5chengfeng/p/3233992.html)
[哈密顿图-维基](https://zh.wikipedia.org/wiki/哈密顿图)

* 注意**有边**和**连通**的区别

#### 连通图
* [什么是连通图，（强）连通图详解](https://blog.csdn.net/majiakun1/article/details/88635889)
[图的连通性-知乎](https://zhuanlan.zhihu.com/p/35908516)
* [连通图的一些性质](https://www.cnblogs.com/dalt/p/7420841.html)
（最小连通无向图的变数）包含n个顶点的最小连通无向图G恰有n-1个边。了解一下**最小连通图**（类似于树）

* [子图-百度](https://baike.baidu.com/item/子图)
[什么是极大强连通子图？](https://www.zhihu.com/question/26713487/answer/33773778)
[强连通分量](https://zh.wikipedia.org/wiki/强连通分量)
[图论：连通分量和强连通分量](https://zhuanlan.zhihu.com/p/37792015)
[**浅析强连通分量（Tarjan和kosaraju）**](https://www.cnblogs.com/five20/p/7594239.html)
注意区分子图和连通分量
>无向图的G的极大连通子图称为G的连通分量（Connected）。任何连通图的连通分量都只有一个，即使是其本身，非连通的无向图有多个连通分量。
不理解的点：图G的强连通分量只形成其顶点的一个划分，所有强连通分量的并未必等于图G，可能少一些连接不同连通分量的有向边。这一点与无向图不同。可能是说图G本身未必是一个强连通图所以会出现这种情况。

#### 带权图和网络
了解下带权图和网络的概念和性质

#### 图抽象数据类型
[抽象数据类型及存储结构](https://blog.csdn.net/Wonder233/article/details/79081759)
注意的点：1.图可能有回路，注意不要遍历已经遍历过的部分。2.图可能不连通，或者这个图不是有跟图，即使是有跟图，算法也可能没有从图中的根开始遍历，因此，要完成对一个图里所有顶点（或所有边）的遍历，遍历完图中可达的那个部分（在无向图里是一个连通分量，在有向图里是一个或几个强连通分量），并不一定是整个图遍历的结束，还需要考虑从初始顶点不可达的部分。

#### 图的表示和实现
* 在抽象讨论中，主要关注的是边与顶点的关联关系和顶点间的邻接关系，这是图表示的关键。

##### 邻接矩阵
* [邻接矩阵-百度](https://baike.baidu.com/item/邻接矩阵)
注意：1.无向图的邻接矩阵是对称矩阵 2.顶点的度和矩阵行/列中国年非零元素的关系 3.邻接关系的定义 
如果图中的权表示从顶点到顶点的一种代价，无边时的代价无穷大，而顶点到自身的代价为0。则教材p230底部的邻接矩阵反映了这个情况
* [图的邻接矩阵与邻接表存储方式及优缺点对比](https://blog.csdn.net/a1414345/article/details/74986159)

##### 邻接表
[数据结构：图的存储结构之邻接表](https://blog.csdn.net/jnu_simba/article/details/8866844)

### 图结构的python实现
* 教程p231有多种实现方法可以看一下 
[常见的图结构表示(python)](https://blog.csdn.net/u014281392/article/details/79120406)
[Python 数据结构与算法——图（Graph）](https://blog.csdn.net/lanchunhui/article/details/50954005)
[Python数据结构实现图](https://www.jianshu.com/p/2192a8e10314)
[python数据结构与算法——图的基本实现及迭代器](https://www.cnblogs.com/hanahimi/p/4693260.html)

#### 邻接矩阵
* [基于邻接矩阵技术实现图类（python）-知乎](https://zhuanlan.zhihu.com/p/52962038)
>[What is the point of float('Inf') in Python?](https://stackoverflow.com/questions/34264710/what-is-the-point-of-floatinf-in-python)
[How to use “raise” keyword in Python [duplicate]
](https://stackoverflow.com/questions/13957829/how-to-use-raise-keyword-in-python)
* 注意：1.使用列表表示矩阵时检查矩阵是否合格的方法。需要去理解一下如果如何用列表表示矩阵
2.矩阵和二维表的拷贝这里不太懂，参考这个[[Python] 正确复制列表的方法](https://www.cnblogs.com/ifantastic/p/3811145.html)
3.相对于给定的图，可能我们更需要在类里面弄一个自己的图来使用。
4.我们刚添加进去的矩阵目前是没有边的，需要参照邻接矩阵的设计方式给图里的顶点添加边
{% fold 拓展参考教程 %}
[找到的一个教程，有关NetworkX](https://networkx.github.io/documentation/stable/tutorial.html)
[networkx整理](https://www.cnblogs.com/minglex/p/9205160.html)
[Scala 无参数方法和统一访问原则](https://blog.csdn.net/wisgood/article/details/51590144)
[python基础----特性（property）、静态方法（staticmethod）、类方法（classmethod）、__str__的用法](https://www.cnblogs.com/wangyongsong/p/6750454.html#_label0)
[Python 实例方法、类方法和静态方法](https://blog.csdn.net/lihao21/article/details/79762681)
[类方法和静态方法](http://funhacks.net/explore-python/Class/method.html)
[Python 中的 classmethod 和 staticmethod 有什么具体用途？](https://www.zhihu.com/question/20021164)
[Python join() 函数 连接字符串](https://blog.csdn.net/doiido/article/details/43538833)
[Python map()函数的用法](https://blog.csdn.net/SeeTheWorld518/article/details/46959871)
[Python 的类的下划线命名有什么不同？](https://www.zhihu.com/question/19754941)
{% endfold %}

#### 邻接表
* [创建基于邻接表的图（python实现）](https://zhuanlan.zhihu.com/p/43820128)     
[图的常用算法的 python 实现—邻接表表示法](http://www.voidcn.com/article/p-bzgcucrn-bpx.html)
* 不要直接用邻接矩阵的思路去理解邻接表。理解一下邻接表为什么是“压缩后的邻接矩阵”，因为邻接表的顶点的出边信息可以由邻接矩阵的常规算法获取，省去了一些自循环和无边的情况，只获得有边的情况。

### 图的遍历
* [人工智能——状态空间搜索及状态空间表示法](https://www.cnblogs.com/6DAN_HUST/archive/2010/08/23/1806560.html)
[状态空间搜索-百度](https://baike.baidu.com/item/状态空间搜索)
* [图的遍历之 深度优先搜索和广度优先搜索-这个博客不错](https://www.cnblogs.com/skywang12345/p/3711483.html)
* [深度优先生成树和广度优先生成树](http://data.biancheng.net/view/45.html)

#### kruskal算法
[Kruskal算法——求最小生成树](https://blog.csdn.net/qq_40581789/article/details/80626475)
[普利姆算法（prim）求最小生成树（MST)过程详解](https://jingyan.baidu.com/article/9113f81b6707c52b3214c794.html)

### 拓扑排序
* [拓扑排序概念](https://blog.csdn.net/qq_41152351/article/details/85312810)
[数据结构之图的应用-最小生成树+最短路径+拓扑排序+关键路径](https://www.bilibili.com/video/av34661475/?p=7)
[关于拓扑排序的一些想法（有关求所有拓扑排序）](https://www.cnblogs.com/H-Vking/p/4133789.html)
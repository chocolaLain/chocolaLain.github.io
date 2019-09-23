---
title: Excel学习笔记
date: 2019-01-26 08:16:46
tags:
    - Office
categories: 办公应用
---

参考教程:
[王佩丰-Excel1800分钟视频教程](https://www.bilibili.com/video/av24585605?from=search&seid=14676066451989566932)
课件：https://pan.baidu.com/s/1zjGuwtJDal5oTOZiBnyoug 密码：fxm4
![](https://img.fuli.in/:mps/fwl/5dd7691a60d8d1270045348352745f58.jpg)

<!-- more -->

### 认识Excel(佩)
可以大体查一下其他数据处理软件与Microsoft Excel的历史
涉及到了单元格里面公式的运算
涉及到了lotus 1-2-3:[Excel中如何启用Lotus 1-2-3，方便输入数值计算](https://jingyan.baidu.com/article/676629977ccdb954d41b8444.html)不过平时不涉及大量这样的数值计算的话一般是用不到的.
**Excel的功能流程可以大体分为四块:数据存储-数据处理-数据分析-数据呈现**,详细演示可看课件
涉及到了Excel的界面,详情查看课件 [excel窗口界面名称介绍](https://jingyan.baidu.com/article/cbf0e500b9910e2eaa28932f.html)
[Excel 支持的文件格式](https://support.office.com/zh-cn/article/excel-%E6%94%AF%E6%8C%81%E7%9A%84%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F-0943ff2c-6014-4e8d-aaea-b83d51d46247?redirectSourcePath=%252fzh-cn%252farticle%252fExcel-%2525E6%252594%2525AF%2525E6%25258C%252581%2525E7%25259A%252584%2525E6%252596%252587%2525E4%2525BB%2525B6%2525E6%2525A0%2525BC%2525E5%2525BC%25258F-a28ae1d3-6d19-4180-9209-5a950d51b719&ui=zh-CN&rs=zh-CN&ad=CN) [xlw是什么文件](https://zhidao.baidu.com/question/311098513.html) 其他文件格式详情等遇到了再去查,常用的是xls/xlsx, xlw可以额外了解一下
2013版本后废除了 **视图-保存工作区** 这个功能

如果想同时操作两个表,而且经常进行对照,可以使用 **视图-新建窗口/全部重排**功能,两个表可以任意选一个操作,互为镜像.(2016版本和之前版本有所不同)
如果想保存同时操作两个表的状态可以 **保存工作区(但是13版本后就没有这个操作了)**
[Excel 2013 中废止和更改的功能](https://support.office.com/zh-cn/article/excel-2013-%E4%B8%AD%E5%BA%9F%E6%AD%A2%E5%92%8C%E6%9B%B4%E6%94%B9%E7%9A%84%E5%8A%9F%E8%83%BD-c417e377-26c6-4f43-be6d-16718dd75ffa?ocmsassetID=HA102919713&CorrelationId=8323efea-f9ab-41ee-9282-27ad341ea539&ui=zh-CN&rs=zh-CN&ad=CN#__toc342560926)

excel一些基本操作:
* [excel常用的ctrl快捷键](https://jingyan.baidu.com/article/63f236287493ce0208ab3d13.html)
* [Excel 如何快速选中 1 万行数据？](http://www.360doc.com/content/18/0413/20/32695326_745415986.shtml)
* **新建工作表**(可以在工作表标签那里新建/删除/操作表)
* **工作表标签颜色**
* **插入/删除多个工作表**:可以用 **shift**或 **ctrl**选中n个表,然后右键 **插入**,可以新建n个表,**删除**功能同理
* **插入行/列，插入多行/列，移动行/列，调整行高列宽**:
    * 插入:可以右键行/列标新建行/列,注意 **shift选中n行/列**后插入可以 **在选中的整体前新建n个行/列**,而 **ctrl选中n行/列**后可以在选中的 **每个个行/列前新建行/列**,*但是行列不可重叠*
    [Excel2016中一次性插入多行或多列的方法](http://www.officezhushou.com/excel2016/6145.html)
    * 移动:选中单元格或行/列或某一区域后选中的外围会出现 **边框**,鼠标移动到边框上拖拽可以实现剪切-粘贴(覆盖),摁shift可以实现移动-插入,摁ctrl可以实现复制-粘贴(覆盖)
    * 调整行高列宽:可以拖动行/列标上下或左右来实现调整行高列宽,也可以双击来自动适应行高列宽,选中多行多列后可以同时调整,也可自动适应.
* **单元格选取、整行整列选取、数据区域选取:** [Excel中单元格选取的技巧](https://jingyan.baidu.com/article/15622f24de56a6fdfdbea572.html)
* 快速定位到表格的边界:双击单元格上下左右可以实现,不过如果表格中间有内容空了的话可能没法到达最边缘,也可以ctrl+home/end来实现.
* **冻结窗格**: [如何在excel表格中设置冻结某一行或几行窗口](https://jingyan.baidu.com/article/90808022de01bffd91c80f81.html)
注意冻结首行后,如果双击单元格顶端可能没有办法移动到表的最顶端,而是只定位到了冻结了的首行那里,这时候用ctrl+home.
冻结单元格的范围是根据选中单元格所在位置决定的,可以同时冻结单元格上方和左侧的部分.
* **填充柄(较重要)**:
[excel快速填充功能怎么用](https://jingyan.baidu.com/article/046a7b3e870c01f9c27fa90b.html)
[如何巧用excel快速填充标好序列？](http://baijiahao.baidu.com/s?id=1598006327855011421&wfr=spider&for=pc)
注意用填充柄对 **内容是数字的单元格**向下拖拽的时候,无其他操作是复制,ctrl拖拽是序列,而 **内容是日期**的话相反
填充日期:用 **右键拖拽**时可以弹出填充选项,例如以年/月/工作日来填充
[excel中自定义新的填充序列](https://jingyan.baidu.com/article/0bc808fc2fd3861bd485b993.html)
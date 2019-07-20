---
title: markdown语法学习
date: 2018-11-13 19:40:27
tags: 
	- 语法学习
    - markdown
categories: 前端
---
[这是为知的markdown教程](http://www.wiz.cn/feature-markdown.html)
[这是视频形式的的markdown教程](https://www.bilibili.com/video/av17653359/?p=11)
[Markdown 语法说明 (简体中文版)](https://www.appinn.com/markdown/#link)

# 一级标题
## 二级标题
### 三级标题
###### 共有六级标题(类似h1-h6)
<!-- more -->
---

1.有序列表
2.有序列表
3.有序列表

* 无序列表
* 无序列表

---

插入图片可以直接插入,或者使用标准的markdown语法
![](http://cdn.wiz.cn/wp-content/uploads/2015/06/wiz_logo.png)

---

**粗体**
*斜体*
~~删除线~~

---

>引用:
无论你去哪里,人与人之间都是联系着的 -- Lain
[谈谈为知笔记的 markdown功能](url:https://sspai.com/post/37275)
引用语块下面如果还有内容的话继续归入引用,不管开头有没有\>,想要分开就要回车隔出一行来

---

### 表格
> 引用时\>与字之间有没有空格无所谓
但是使用表格时,\|与字之间需要有空格
[另外\| ------ \|中的-----可以用**':'**来设置左对齐右对齐或者居中设置](url:https://www.jianshu.com/p/2df05f279331)

| episode | caption | script |
| :-----------: | --------- | -------- |
|      01   | WERID | 小中千昭 |

---

### 代码  
**注意 反单引号是在Esc 下面**
**如果需要指定语言,在开头的\`\`\`后面紧跟具体语言,如\`\`\`Python**
```python
x = 1
def fun2():
    y = x # 这时x无定义
    x = 2 # 当函数体里面出现过x的赋值定义时,无论其他的x赋值定义处在什么位置,都必须把这个x当做局部变量,否则下面再用到x的时候会出现不知道到底用全局变量还是局部变量的矛盾.
    return x + y # 报错 local variable 'x' referenced before assignment
```

---

## **最后附上本文Markdown语法图片版**
##### 图片引用时,括号里面不需要url
![](http://lainundalice.oss-cn-beijing.aliyuncs.com/18-12-13/47060015.jpg)
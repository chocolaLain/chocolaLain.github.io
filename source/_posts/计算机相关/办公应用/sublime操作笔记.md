---
title: sublime操作笔记
date: 2018-11-22 09:18:03
tags:
	- sublime
	- 文件编辑器
categories: 办公应用
---

参考资源&教程:[sublime配置python开发环境以及遇到的坑](https://blog.csdn.net/qq_40925239/article/details/84329188)
[【公开课】Sublime Text 3教程](https://www.bilibili.com/video/av11969967/?p=7)
[SublimeText3配置python开发环境](https://www.bilibili.com/video/av28609596?from=search&seid=14908359708719333833)
[Sublime Text 3 推荐插件](https://blog.csdn.net/d780793370/article/details/52245599)
[常用Sublime Text插件推荐[汇总]](https://kelvin.mbioq.com/common-sublime-text-plugin-recommendation-summary.html)
[Sublime Text 安装 Markdown Preview](https://www.jianshu.com/p/c48b03f78028)(ctrl + alt + p 是我的预览快捷键)
[sublime之markdown语法高亮和修改主题](https://www.jianshu.com/p/2a4267e1bae8)
[Sublime插件：Markdown篇](https://www.jianshu.com/p/aa30cc25c91b)
[Markdown Key Bingdings](https://github.com/SublimeText-Markdown/MarkdownEditing#key-bindings)
[Sublime-Markdown编辑器](https://www.jianshu.com/p/c539f7edcaf9)
[sublime前端插件推荐让sublime变成webstorm](https://blog.csdn.net/hello_yihao/article/details/78809737)
[常用的sublime text 3插件（很爽哦）](https://www.cnblogs.com/qingkong/p/5039527.html)
[sublime text3装入插件Anaconda](https://blog.csdn.net/zhuangailing/article/details/79046187)
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=29379759&auto=0&height=66"></iframe>

<!-- more -->

### 快捷键:
[史上最强Sublime 笔记系列---常用快捷键](https://blog.csdn.net/meiminjun2012/article/details/51756339)
* 摁住ctrl可以多点选择,可以用来给多处地方增删修改内容.
* 中键 或 shift + 鼠标右键可以进行块选择

* ctrl + p : 可以用来查找文件.
* shift + ctrl + p:              
	* 命令面板.可以模糊寻找命令,快捷键忘掉或者嫌菜单命令不好找时可能会用到,找到'keybinding'可以进入快捷键设置面
	也可以进入preference来设置界面(例如我设置了下行间距)
	User的优先级要比Default高.
	* 也可以用来set Syntax
	* 查找reindent(重新缩进) lines,可以使要所进的代码块参照上方最近的代码来进行缩进,如果不选择就全部取消缩进或者参考顶部块的开始标签缩进.
	**不过我已经把这个命令的快捷键设置为了shift + tab** 
* ctrl（cmd⌘） + : 搜索变量

* ctrl + '+'/'-' : 可以放大缩小字体
* ctrl + j : 合并一行
* ctrl + tab : 跳转页面右缩进
* ctrl + '['or']' : 改行向左/
* ctrl + L : 选择当前行
* ctrl + Enter : 直接新建下一行,如果加shift就是新建上一行.
* ctrl + D : 快速选择相同字符
* ctrl + shift + D : 快速复制当前行
* ctrl+ shift + K : 删除当前行

* ctrl（cmd⌘） + F2 设置书签/删除标签
* F2 跳转到下一标签
* ctrl（cmd⌘） + shift⇧ + F2 清除所有书签
* [sublime如何选中所有相同变量？](https://segmentfault.com/q/1010000012669343)

### Sublime自定制

* shift + ctrl + p:              
	* 命令面板.可以模糊寻找命令,快捷键忘掉或者嫌菜单命令不好找时可能会用到,找到'keybinding'可以进入快捷键设置面
	也可以进入preference来设置界面(例如我设置了下行间距)
	User的优先级要比Default高.

### sublime-快速查找文件或字符串
* 使用ctrl + p 查找文件
* 文件名后面加':',可以输入数值直接跳转到该行
* 文件名后面加'@',可以输入函数之类的,直接跳转到设置的地方,当前文件可以直接@
* 文件名后面加'#',可以用来查找字符串.
* 如果有不支持的语言,shift + ctrl + p来 install package.

* ctrl + f : 查找字符串
* ctrl + shift + f : 查找替换字符串
* 如果要在文件夹内查找字符串,就右键文件夹:'Find IN Folder',找到后单独列出一个显示全部搜索的文件,可以双击字符串定位到其所在的位置,或者**'F4'**可以逐个定位被搜索的字符串,**shift + F4**回到上个被搜索的字符串

* 搜完之后 alt + '-' 可以回到之前操作的文件位置. 加shift可以反向操作.

### Web开发者必备插件emmet
可以简化一些变量 属性的写法
[Emmet，让你爱上敲代码](https://blog.csdn.net/owen1190/article/details/53484535)
[01★Emmet爆速开发★入门课程](https://www.bilibili.com/video/av25169114?from=search&seid=7709128346078760967)
还可以嵌套使用例如: 
```<!-- 使用tab可以实现li的跳转 -->
ul.nav>li*5
<ul class="nav"> 
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
```
* ctrl + shift + ; : 快速给元素内容删除标签
* ctrl + shift + G : 快速给元素内容添加标签

### 插件:
SublimeCodeIntel:
* alt + 左键 : 进入代码功能介绍面板.
* ctrl + shift + alt + up : 上翻 

Anaconda:
* 能介绍一些功能


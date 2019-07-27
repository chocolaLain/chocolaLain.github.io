---
layout: hexo
title: Next主题个人DIY相关文章
date: 2018-11-14 20:48:42
tags: 
	- Next主题
	- 收集
categories: 资源收集
---
[如何将你的github仓库部署到github pages（github.io博客）](https://www.cnblogs.com/wanliyuan/p/5673622.html)
## Next外观相关
* [打造个性超赞博客Hexo+NexT+GitHubPages的超深度优化](https://reuixiy.github.io/technology/computer/computer-aided-art/2017/06/09/hexo-next-optimization.html)
* [Hexo瞎折腾系列(1) - 准备工作与简单美化](https://www.cnblogs.com/yulinlewis/p/9348024.html)
* [Hexo瞎折腾系列(2) - 添加背景图片轮播](https://blog.csdn.net/lewky_liu/article/details/81149140)
* [Next主题个性化之自动更换背景图片](https://blog.csdn.net/mango_haoming/article/details/78473243)
* [Hexo-NexT主题修改页面透明度及页面颜色](https://liujunzhou.cn/2018/8/16/page-background/)
* [Hexo 你的博客之修改字体大小](https://www.jianshu.com/p/02fbd409988c)

<!-- more -->

* [Next文档:内置标签](http://theme-next.iissnan.com/tag-plugins.html)
* [hexo-helper-live2d 在页面上放Live2d](https://github.com/EYHN/hexo-helper-live2d/blob/master/README.zh-CN.md)
 	>[原作大大的博客](https://huaji8.top/post/live2d-plugin-2.0/)
* [在Hexo中渲染MathJax数学公式](https://www.jianshu.com/p/7ab21c7f0674)
>解决了显示数学公式的问题.有机会也去学习一下MATHJAX
[CSS：改变用户选中文字的颜色和背景颜色](https://blog.csdn.net/qq_31164127/article/details/76147571)
>这里我是在css下的_cutsom/custom.styl修改的.
## Next功能相关
* [hexo next主题为博客添加分享功能 - Masimaro的专栏 - CSDN博客](https://blog.csdn.net/lanuage/article/details/78991798)
* [hexo的next主题个性化教程:打造炫酷网站 - 简书](https://www.jianshu.com/p/f054333ac9e6)
* [Hexo Next 使用配置](https://www.jianshu.com/p/7614e8a173f5)
	>这篇文章的设置内连接部分代码有些错误,例如border-bottom的设置里面字体大小 字体样式 和字体颜色没有用空格隔开
	以下是我的设置(我将border-bottom的值设置为none,即不显示下划线)
	{% fold 点击显/隐内容 %}
	```css
	.post-body p a{

		color: #0593d3;

		border-bottom:none;


		&:hover {

			color: #fc6423;

			border-bottom: none;

		}

	}

	.post-body li a{

		color: #0593d3;

		border-bottom: none;


		&:hover {

			color: #fc6423;

			border-bottom: none;

		}

	}

	```
	{% endfold %}
* [Hexo添加折叠代码块功能](https://www.cnblogs.com/woshimrf/p/hexo-fold-block.html)
* [hexo博客优化之文章置顶+置顶标签](https://blog.csdn.net/qwerty200696/article/details/79010629)
* [hexo添加文章更新时间](https://www.jianshu.com/p/ae3a0666e998)
	>根据博客配置文件中的 language 参数修改对应的语言配置文件（博客主目录）/themes/next/languages/zh_Hans.yml

	```
	post:
	updated: 更新于

	试了下,在md文件里面,貌似也可以用html,这个代码块就是用了<div>实现了位置的缩进.
	不过我是用的<div><div>,如果用的<div></div>的话这个块与其他内容会出现比较大的间隔,这个问题以后研究一下.
	```
	

	>我这里的设置原本是**modified: 更新于**,但是显示的是post-updated:时间,将**modified**更改为updated后就成功显示了**更新于:时间**
	可能是前面在/themes/next/layout/_macro/post.swig设置的代码是连接到updated变量,但是到zh_Hans.yml的post那里没有updated变量,所以按照默认的来显示更新样式.

* 这个博客的评论功能是用[leancloud](https://leancloud.cn/)和[valine](https://valine.js.org)实现的
评论头像的实现是借助[Gravatars](https://en.gravatar.com/)实现的,详情见[头像配置](https://valine.js.org/avatar.html)

* 实现统计功能在NEXT文档的第三方服务中有,使用不蒜子统计时因为不蒜子的域名变了所以可能会出现数据无法显示的情况,解决方法:
[hexo博客解决不蒜子统计无法显示问题](https://www.jianshu.com/p/fd3accaa2ae0)

* [Hexo中使用markdown来绘制脑图（mind map）](https://qsli.github.io/2017/01/01/markdown-mindmap/)
* [Hexo文章简单加密访问](https://blog.csdn.net/Lancelot_Lewis/article/details/53422901)
* [Hexo文章加密访问](https://www.jianshu.com/p/e4203ee066e5)
* [绝配：hexo+next主题及我走过的坑](https://www.jianshu.com/p/21c94eb7bcd1)
* [Hexo在Github中搭建博客系统(6)异常处理](https://blog.csdn.net/chwshuang/article/details/52350559)

## HEXO相关
* [hexo博客出现command not found解决方案](https://blog.csdn.net/whjkm/article/details/42675579)
* [利用Hexo在多台电脑上提交和更新github pages博客](https://www.jianshu.com/p/0b1fccce74e0)
* [多台电脑更新博客](https://otakurice.github.io/2018/07/23/%E5%A4%9A%E5%8F%B0%E7%94%B5%E8%84%91%E6%9B%B4%E6%96%B0%E5%8D%9A%E5%AE%A2/)
* [安装Node.js和npm](https://www.liaoxuefeng.com/wiki/1022910821149312/1023025597810528)  
* 有时候github会提示安全漏洞,我目前遇到的都是库的版本问题,可以根据github的提示把这些库升级一下.
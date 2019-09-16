---
title: PHP学习笔记
date: 2019-09-15 17:30:14
tags:
    - PHP
---

## 准备工作
* 环境配置:[PHP环境全套针细教程：Windows安装Apache, PHP and MYSQL](https://zhuanlan.zhihu.com/p/81050071)
> 1.注册mysql一项时,最好给用户设置上密码,因为phpmyadmind登陆时默认不允许空密码登陆. 
  apache用来解析php,如果发现自己的php文件没有被解析(例如在浏览器页面中显示出源代码),可以将php文件移至apacheXX文件夹中的htdocs文件中,再进入localhost即可查看到自己的php文件.
  安装php，将文件解压到C盘的时候最好把dev等文件夹集直接放在php文件夹下，而不是在php文件夹下的php7.x文件夹下。
## 第一章 PHP基础知识   
* 了解echo的作用
* php标记有四种风格:XML(推荐),简短,script,asp风格.
  了解注释的多种风格
  了解php的连接操作符
* 尝试添加动态内容（调用date函数，使用连接操作符.）
  了解date函数的内容
* 了解表单变量
  表单变量有三种风格,推荐用中等风格.(例 $_POST['tireqty'])
  了解$_REQUEST['tireqty']变量和超级全局变量(superglobal).
  > 思考一下为什么最好不用简单风格.
## 其他待解决问题
* 查一下127.0.0.1和localhost的关系(待删)
  了解phpinfo函数

---
title: mysql学习
date: 2019-10-15 16:44:56
tags:
---

[vs code配置MySQL，实现连接、查询等功能](https://www.cnblogs.com/jdwfff/p/10491834.html)
* 使用phpmyadmin的时候,有时候进入服务器里面会弹出报错窗口"在服务上检测到错误!...",这时候找到config.default.php,设置SendErrorReports为never,有则更改,无则添加.
* 创建root用户以外的mysql用户的时候,一般来说新的用户拥有的权限很少,如果想要创建管理员用户,那么就要添加更多的权限,而mysql5.4和mysql8.0设置权限的方式不同.  
  [详解mysql8.0创建用户授予权限报错解决方法](https://www.jb51.net/article/148145.htm)
  注意设置好权限之后需要将mysql服务重启.
<!-- more -->

## 第8章　设计Web数据库
* 了解关系型数据库的优点.
* 了解关系型数据库的概念
  * 了解表格,表,列,行,值,**键**
  * 了解**主键和外键**的异同 
  * 了解模式:数据库整套表格的完整设计称为数据库的模式。一个模式应该显示**表格及表格的列、每个表的主键和外键。**
  * 了解关系:外键表示两个表格数据的关系。
    关系型数据库有**三种基本的关系类型**:一对一,一对多,多对多.重点了解这三种关系的实例
* 8.2设计Web数据库
  * 8.2.1　考虑要建模的实际对象
    通常，要建模的每一种现实世界对象都需要有自己的表。考虑这样一个问题：我们要保存所有客户的同类信息。如果有一组属于同一类型的数据，就可以很容易根据这些数据创建一个表。
  * 8.2.2　避免保存冗余数据
    注意两个基本问题:1.空间浪费. 2.更新后数据不一致(需要避免3种情况的更新不规则：修改、插入和删除不规则。).
  * 8.2.3　使用原子列值
    使用原子列值的意思是对每一行的每个属性只存储一个数据。若存储多个数据,那么系统再也不能只计算匹配字段了，**而必须分析每个属性值**，看系统中是否包含一个匹配。
  * 8.2.4　选择有意义的键
  * 8.2.5　考虑需要询问数据库的问题
  * 8.2.6　避免多个空属性的设计:
    数据库里有许多空值是一件糟糕的事情。它极大地浪费空间，并且在统计列总量或对其他数值列应用计算函数时可能导致错误。
  * 8.2.7　表格类型的总结
    通常，数据库由两种类型的表组成：1. 描述现实世界对象的简单表. 2.描述两个现实世界对象的多对多关系的关联表，多对多关系例如Orders与Books的关系。
* 8.3　Web数据库架构
  * Web数据库的基本结构包括Web浏览器、Web服务器、脚本引擎和数据库服务器
  * 了解典型的web数据库事务的步骤(用户的Web浏览器发出HTTP请求balabala).   
  * 随着应用程序在大小和复杂度上的不断增加，我们可能会将PHP应用程序分成不同的层——通常，包括与MySQL交互的数据库层、包含了应用程序核心的业务逻辑层和管理HTML输出的表示层。
* 8.4　进一步学习:如果要研究关系数据库背后深层的理论，可阅读关系数据库权威（如C.J.Date）所编写的图书,不过这些**理论性比较强,可能无法立即应用.**
  
##  创建Web数据库
* 9.1　使用MySQL监视程序
  * MySQL例子中，每个命令之间都用分号（;）分开，分号将告诉MySQL执行这个命令
    SQL语句不区分大小写，但数据库和表的名称则区分大小写
* 9.2　登录到MySQL
* 9.3　**了解如何创建一个数据库**,创建数据库和用户 ;
* 9.4　设置用户与权限 ; 
* 9.5　**MySQL权限系统**的介绍:1.最少权限原则, 2.创建用户：GRANT(授予)命令,了解权限的四个级别.略
* 9.6 
* 9.7　使用正确的数据库
* **9.8　创建数据库表**
  * 9.8.1　理解其他关键字的意思
    了解**NULL**, **AUTO_INCREMENT**(指定AUTO_INCREMENT的列必须是索引列。), **PRIMARY KEY(了解给单列和多列设置主键的情况)**
  * 9.8.2　理解列的类型
    * 对索引列使用int unsigned(无符号) auto_increment,mysql可以自动为我们(生成)管理id.
    * 了解char和varchar的优缺点.
    * 我们所声明的所有列都是NOT NULL（不为空），这是一个小小的优化措施(为了处理速度快)
    * TINYINT UNSIGNED数据类型，其取值范围为0～255之间的一个整数。
    * text。该数据类型用于更长的文本
  * 9.8.3　用SHOW和DESCRIBE来查看数据库
    * 可以在mysql命令行中可以使用**use dbname/databases, show tables,describe table等命令.**
      如果没有SHOW DATABASES权限，你将只看到权限范围内的数据库。
  * 9.8.4　创建索引:了解语句.
* 9.9　理解MySQL的标识符
  * 了解数据库和表的大小写问题(跟操作系统有关); 列,索引,别名(Alias)不区分大小写.
* 9.10　选择列数据类型:MySQL中3种基本的列数据类型：数字、日期和时间、字符串
  * 9.10.1　数字类型:数字类型和取值范围
  * 9.10.2　日期和时间类型.
  * 9.10.3　字符串类型,**分为三类**:第一类为普通字符串，即小段文本,:char,varchar;第2类为TEXT和BLOB类型。这些类型大小可变，它们分别适用于长文本或二进制数据;第3类包括两种特殊类型，SET和ENUM。SET类型用来指定列中的值必须来自一个特定集合中的指定值。
  

### 第10章　使用MySQL数据库
* 10.1 了解SQL
  * 了解数据定义语言和数据操作语言(DDL和DML),DML是用来保存和获得数据库中真正数据的部分，因此我们将更频繁地使用它。
* 10.2　在数据库中**插入数据**
  * 了解**插入数据的语句**
    我们所指定的值将**按出现顺序**添加到表中的列,**了解不按顺序来插入数据的方法,可以特殊指定某一列来添添加数据.**
    **也可以一次将多行插入到一个表中**
    了解Insert的几个关键字.
  * MySQL中的字符串应该包含在一对单引号或双引号中。（在本书中，我们将使用这两种情况）。数字和日期并不需要引号。
  * 主键我们已经设置为自动添加了,这时候可以看到自动设置主键的**便利性**.
* 10.3　从数据库中**获取数据**
  * 了解select语句的基本格式
  * 了解where条件,除了相等，MySQL还支持**所有比较操作符和正则表达式。**
    * 注意**LIKE与REGEXP 匹配模式**,LIKE使用简单的SQL模式匹配,了解匹配任何字符的%和匹配一个字符的_
      REGEXP关键词用于**正则表达式**的匹配。
### 盲点
* 在vscode中写完sql语句后可以选中语句右键运行.

---
title: github学习
date: 2019-01-09 20:05:46
tags:
    - github
    - git
categories: 办公应用
---

所用教程:
[Git入门指引](http://blog.a0z.me/2014/05/21/GitBeginning/)
[【教程】学会Git玩转Github【全】](https://www.bilibili.com/video/av10475153?from=search&seid=13771455105864045370)
[try.github.com](http://try.github.io/)
[Github入门与实践](https://book.douban.com/subject/26462816/)
[Pro Git](https://gitee.com/progit/)
[git - 简易指南(简单回顾/学习)](https://www.bootcss.com/p/git-guide/)
![](https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1547088293&di=4c958fb981820b935400a2982da85b54&src=http://imgs.aixifan.com/live/1484548189566/1484548189566.jpg)
<!-- more -->

### 快速学习
[上传/更新文件到github](https://blog.csdn.net/u011108439/article/details/80609235)
[github 远程仓库名或地址修改，本地如何同步](https://www.jianshu.com/p/4f48f5169963)
[GitHub 简明入门级教程](https://segmentfault.com/a/1190000013514335)
### Github使用
[GitHub学习总结（一）——使用Github基本概念](https://blog.csdn.net/qq_36501591/article/details/80517684)
相关概念:
仓库(repository)
收藏(star) 
复制克隆项目(fork)(复制的项目是独立存在的)
发起请求(pull request) 可以实现改进原有项目
关注项目(watch)
事务卡片(issue)
各种主页,一般了解

私有仓库只能自己或者指定的朋友才有权限操作（私有仓库是收费的）

### 问题汇总
* 如何使用嵌套的git仓库： [Git 工具 - 子模块](https://git-scm.com/book/zh/v2/Git-工具-子模块)
* pull/push冲突错误:
  * [**git报错：Pull is not possible because you have unmerged files解决方法**](https://blog.csdn.net/zxsted/article/details/17022665)
  * [Updates were rejected because the remote contains work that you do](https://www.cnblogs.com/alex-415/p/6912294.html)
    [记Git报错-refusing to merge unrelated histories](https://blog.csdn.net/u012145252/article/details/80628451)
  * [git提交时”warning: LF will be replaced by CRLF“提示](https://www.cnblogs.com/sminocence/p/9357209.html)
  * [**解决error: Your local changes to the following files would be overwritten by merge**](https://www.cnblogs.com/yw0219/p/6020878.html)
  * [**git pull遇到错误：error: Your local changes to the following files would be overwritten by merge:**](https://blog.csdn.net/misakaqunianxiatian/article/details/51103734)
  * [You have not concluded your merge (MERGE_HEAD exists)](https://blog.csdn.net/xlgen157387/article/details/51146949)


### 创建仓库 仓库主页说明
[GitHub学习总结（二）——创建仓库以及仓库主页说明](https://blog.csdn.net/qq_36501591/article/details/80531363)
注册账号的过程略过,注意验证邮箱那里,Github的邮件可能会进入垃圾箱

![](http://lainundalice.oss-cn-beijing.aliyuncs.com/19-1-11/68538788.jpg)

![](http://lainundalice.oss-cn-beijing.aliyuncs.com/19-1-11/27817508.jpg)

### 仓库管理
[GitHub学习总结（二）——创建仓库以及仓库主页说明](https://blog.csdn.net/qq_36501591/article/details/80531363)

讲了进入仓库,填写仓库里的文件名,填写文件内容,提交文件,
下面表单需要填写每次提交的目的,原因:为了方便其他开发者和直到本次添加或修改的原因

讲了编辑文件(算一次提交)
点击文件名,到文件详情页可以做删除和修改动作
点击描述可以查看该文件提交详细信息
可以在文件详情页删除文件
可以上传文件(Upload files),一次可以上传多个文件
可以搜索文件(Find file),快捷键'T'可以快速进入搜索文件.
下载/检出项目(Clone or download)

### 使用仓库
**Github Issues**:发现代码BUG,但是目前没有成型代码,需要讨论时用;或者开源项目出现问题时使用.
可以在别人的仓库里面New Issue

### 基本概念实战
github主页显示动态和仓库
个人主页的一些相关信息
可以star(收藏)项目,在your stars里面查看
可以watch来关注某个仓库,可以在主页里面查看该仓库的动态

可以fork项目,注意自己fork的项目是单独存在的
然后可以请求更新(pull request),仓库页面有三个可以请求的按钮
进入一个页面可以查看详细修改信息,没有问题后可以Create Pull Request发起请求.
然后**等待作者操作**:原作者就可以在动态里面查看到了pull request,确定是否合并.

**开源项目贡献流程:**
[如何在github上为开源项目贡献](https://blog.csdn.net/XiyouLinux_Kangyijie/article/details/78605800)
[[GitHub]第六讲：开源项目贡献流程](https://blog.csdn.net/loadsong/article/details/51591687)

以上可以自己实战试一试

### 安装Git
[GitHub学习总结（三）——下载、安装Git](https://blog.csdn.net/qq_36501591/article/details/80550919)
目的:通过git管理github托管项目代码
>1.安装的时候会出现Git Bash Here(命令行模式) Git　Gui Here(图形界面)
2.可以选择使用命令行环境

安装完后右键可以看到两个git命令,说明安装成功.

### Git基本工作流程
[GitHub学习总结（四）——Git仓库创建和操作](https://blog.csdn.net/qq_36501591/article/details/80552965)
注意 **工作区 暂存区 Git仓库** 的概念和应用
从工作区到暂存区可以使用 **git add 文件名.文件后缀** 命令
可以使用 **git status** 来查看文件状态(实在工作区还是暂存区)

将文件从暂存区提交到Git仓库可以使用 **Git commit -m'提交描述'**

### Git初始化及仓库创建和操作
* [GitHub学习总结（四）——Git仓库创建和操作](https://blog.csdn.net/qq_36501591/article/details/80552965)
* [创建版本库-廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600/896827951938304)
  操作：创建目录 将该目录变成Git可以管理的仓库
  操作指令：git add（将文件添加到暂存区，可以用.添加所有文件，或者指定特定文件添加）、git commit（将暂存区文件提交到版本库+本次提交的说明）；add可以反复使用，然后commit提交。
  可以了解一下commit时不输入 '-m' 以及后面的内容会进入vim模式，这个可以了解一下
  其他：注意编码问题，这跟版本控制和跟踪文件改动有关，另外**不要使用Windows自带的记事本编辑任何文本文件**
  Unix的哲学：“没有消息就是好消息”
* [时光机穿梭（文件修改）](https://www.liaoxuefeng.com/wiki/896043488029600/896954074659008)
  操作：操作指令：git status（查看仓库当前的状态） git diff（查看文件的修改情况）
* [版本回退](https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192)
  操作指令：git log（命令显示从最近到最远的提交日志，参数--pretty=oneline可以减少输出信息）
  还有可视化Git工具
  reset（版本回退，注意参数hard和head，回退之后如果窗口还没有关闭，借助log得到的commit id再回到‘未来’的版本，commit id可以不用写全，只要能确定到哪一个就行。）
  reflog（记录每一次操作命令，有助于吃后悔药）
* [工作区和暂存区](https://www.liaoxuefeng.com/wiki/896043488029600/897271968352576)
  了解工作区、.git版本库、暂存区（stage）和分支（master），add和commit的本质作用以及他们与暂存区和分支的联系。
  了解指针HEAD
* [管理修改](https://www.liaoxuefeng.com/wiki/896043488029600/897884457270432)
  用git diff HEAD -- readme.txt命令可以查看工作区和版本库里面最新版本的区别
  每次修改，如果不用git add到暂存区，那就不会加入到commit中。
* [撤销修改](https://www.liaoxuefeng.com/wiki/896043488029600/897889638509536)
  如果没有add：git checkout -- file可以**丢弃工作区的修改**，注意放弃修改的两种情况
  后期可以了解一下checkout这个指令。
  如果已经add：用命令git reset HEAD file可以把**暂存区的修改撤销掉（unstage），重新放回工作区.**
  此时回到了没有add的状态，往后操作同上。
  如果你已经提交了，但还没有推送到远程仓库里的话可以使用**版本回退**。
* [删除文件](https://www.liaoxuefeng.com/wiki/896043488029600/900002180232448)
  操作指令：git rm可用于删除版本库里文件，如果不小心在工作区里面删除了文件，但版本库里面还未删除此文件，可以使用reset和checkout将删除的文件还原到工作区中，但只能回复文件到最新版本，会**丢失你最后一次提交后再修改的内容**

### [远程仓库](https://www.liaoxuefeng.com/wiki/896043488029600/896954117292416)

远程仓库我们可以用GitHub的仓库。
你的本地Git仓库和GitHub仓库之间的传输是通过**SSH**加密的，所以，需要一点设置
了解如何在用户总目录（例如C盘里的administrator）里面建立SSH密钥
GitHub允许你添加多个Key，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。

* [添加到远程库](https://www.liaoxuefeng.com/wiki/896043488029600/898732864121440)
  操作指令：git remote add origin git@github.com:michaelliao/learngit.git
  用于将本地库和远程库连接起来，michaelliao要替换成你的github用户名，后面的learngit替换成你要连接的github仓库。远程库的名字就是origin，也可以改成别的，默认就行。
  git push （[-u] origin master)：把当前分支master推送到远程，由于**远程库可能是空的**，我们第一次推送master分支时，可以加上了-u参数
  其他：注意下SSH警告，一般没有啥大问题。
* [从远程库克隆](https://www.liaoxuefeng.com/wiki/896043488029600/898732792973664)
  最好用SSH，使用HTTPS不仅速度慢，每次推送还需要输入口令。
  
### [分支管理](https://www.liaoxuefeng.com/wiki/896043488029600/896954848507552)
了解下Git分支相对于SVN分支有哪些优点。
* [创建和合并分支](https://www.liaoxuefeng.com/wiki/896043488029600/900003767775424)
  注意一些指针这个概念，重新理解一下checkout
  操作指令：git checkout命令加上-b参数表示创建并切换，相当于branch+checkout这两条指令。
  git branch用于查看当前分支，dev分支的工作完成后，添加提交后再返回master分支会发现我们之前的新添加提交的工作内容不见了
  git merge命令用于合并指定分支到当前分支。
  git branch -d可用于产出指定分支。
可以用小结内容回顾。
---
title: MAD学习笔记
date: 2019-07-25 19:19:40
tags:
---
![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564222522440&di=57fd027a1f230c06e1630a58f17ff39d&imgtype=0&src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F02%2F01%2FChMkJlbKxEmISDLzAAWmiEjzW58AALHEQMG6IcABaag664.jpg)
<!-- more -->
# 找资源
参考资料:[【科普】献给好奇心旺盛者的找资源教程(MAD教程第0期)](https://www.bilibili.com/video/av1804134)
## 片源
* 个人目前习惯用蜜柑计划,速盘的搜索有时候能用上(极影挂了,动漫花园貌似需要翻墙,不过镜像站应该还可以用.)
了解BDrip,x264,flac(免费无损音频编码)|BD-VAL,SP,MAV,BIG5(繁体编码)|OAD,AVC(高级视频编码),YUV(一种颜色编码方式,光亮度,色度,浓度)|RAW(生肉),MX(东京电视台TV片源)
了解10-bit,8-bit

* 不太推荐用TV版片源,因为会有各种字幕和图标还有圣光暗牧什么的突然出现在屏幕上,另外需要注意做的视频不要太闪(例如做闪现流时,不要滥用强烈对比),参考3D龙事件.
* 了解BDMV(蓝光原盘,15:00左右涉及到里面一些编码格式的大体讲解),BDremux(无损提取),ISO(镜像文件的一种,类似于压缩包,太大不建议用),推荐下BDrip
  [告诉你BDISO、REMUX、WEB、BDRIP等几种4K版本的区别](http://tieba.baidu.com/p/6160094098)
  [科普：4K蓝光原盘ISO、REMUX 、WEB之间的区别](https://www.douban.com/note/722226575/)
* 了解NC(no-credit)OP/NCED,还可以搜"creditless","textless","Non telop";有些op可能根据剧情需要有的画面不同,可以开多个窗口对比着看彼此的区别,不过建议版本数少的时候用这个方法;了解下"I帧";死神(部分),星际牛仔,黑礁的op貌似是没有NC的,但他们的分镜,设计版式,配色都是很好的学习对象,23:50有个三大民工漫的怀旧向oped链接.
* 了解重制:1.可能是指重新制作 2.可能是指数码重制;了解导演剪辑版,OA(On the Air)版,Renew版,Special Edition.

## 视频基础
* 了解下HD,FHD,SD,Ultra HD;了解一下长宽比(4:3 16:9)以及相关历史(34:00),还可以了解一下黑边是如何诞生的.
* ①学院宽银幕（Academy Flat Screen）1.85:1 源于裁掉画面（ Hard Matte）
②变形宽银幕（Anamorphic Scope/ Panavision）2.35:1 源于变形镜头（ Soft matte）
* 虽然16:10更接近黄金分割,但成本比16:9高(6代玻璃基板,16:9能切出15块,16:10只能切出12块),21:9同理(12块),可以了解一下液晶基板的生产线世代,切割效率以及显示器背光灯管.

### 帧,帧率,场
* 可以了解一下视觉暂留和似动知觉
* 了解**人眼特性-闪烁感觉**,马耳他十字机芯
  让人眼觉得不闪需要达到45.8HZ,所以16格(fps)是最低选择,(16→48可以了解一下)
  物语节奏型AM（BC2013第二名av511692）
* 了解一下电视电影和游戏的帧速率的问题

### 电视制式
* 了解NTSC,PAL,SECAM三个制式,重点了解恩制和帕制,了解两者的优缺点;[PAL与NTSC制式有什么区别？](https://www.zhihu.com/question/19763648/answer/572715321)
* 了解电视线,了解隔行扫描和逐行扫描;了解奇场/上场/顶场,偶场/下场/底场
* N制P制属于模拟电视的范畴,现在可以考虑数字电视,数字电视三种较为成熟的制式DVB,ATSC,ISDB;可以了解一下3-2下位变换,[出现23.97帧率的原因](https://blog.csdn.net/lixiaowei16/article/details/53407862)
  了解一下像素长宽比
* **码率**,也就是比特率等,[比特率](https://baike.baidu.com/item/%E6%AF%94%E7%89%B9%E7%8E%87/1022775?fromtitle=%E7%A0%81%E7%8E%87&fromid=8973692&fr=aladdin),[视频码率](https://baike.baidu.com/item/%E8%A7%86%E9%A2%91%E7%A0%81%E7%8E%87/10008023?fr=aladdin)
  可以了解一下k(1000)和K(1024)的区别,了解码率的两种形式CBR(固定码率,容易浪费;商用,个人收藏),VBR(可变码率;网络传播用),了解一下**后黑**,或许可以用来防压制
* **色深(color depth)**,了解一下8bit,24bit(真彩色).了解透明通道(32bit达到真彩色后会给透明通道8bit)
  了解一下蓝绿幕抠像,颜色的决定关乎到拜耳阵列 有关抠像可详情66:00
  Hooked(av932396) our tapes(av345660),这两个mad可了解
  了解png-8和png-24
  **位深(Bit depth)**,色深以8bit为单位,位深以10bit为单位,10bit的优势是无色带,防色块,保细节,高压缩.画质相同体积更小,体积相同画质更好
  [10bit 视频是什么？相比起 8bit 视频有什么优势？ - 知乎](https://www.zhihu.com/question/20100081)
  [【显示器的bit是什么意思，8bit和10bit到底谁好】 - 浮梁卖茶人的文章 - 知乎](https://zhuanlan.zhihu.com/p/61429550)
  有兴趣可以了解yuv420信号采样方式,p10量化级别等
总结:码率建议VBR,收藏建议用10bit,上传8bit
最后75:00讲了YUV,有兴趣可以深入了解一下,了解color space(色彩空间/颜色模型/色域),了解YUV的含义(亮度,明亮度,灰度),U&V信号(色差信号),亮度和色度的关系

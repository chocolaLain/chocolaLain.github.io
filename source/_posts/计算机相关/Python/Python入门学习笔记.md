---
title: Python入门学习笔记
date: 2018-11-22 19:08:22
tags:
    - python
categories: Python
---

资源&教程:[[小甲鱼]零基础入门学习Python](https://www.bilibili.com/video/av4050443/?p=18)
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=22826425&auto=0&height=66"></iframe>
<!-- more -->
----------

### 函数
* 函数调用之前要先声明
* 可以在函数里面设置参数,注意实参与形参的区别;多个参数之间可以用逗号隔开.
* 注释是有必要的,以后可以方便自己或者别人理解代码.

#### 函数的参数
* 函数分为形式参数(parameter)和实际参数(argument)
* 关键字参数: 
    - 输入参数的时候可以直接将形参和实参联系起来,这样参数多的时候不用担心顺序问题.
    - 可以再函数里面给形参设置默认值.
* 收集参数(也可以叫可变参数):
    - 如果你不确定要用多少看参数,可以使用收集参数
    - 在参数前面加*,例如*params,这样调用函数的时候可以添加多个参数.这些参数相当于用元祖打包了起来.
    - **收集参数的作用是将输入参数打包成为元组，自然不能不用收集参数要自己写为元组的形式**(这里需要去复习一下)
    - print函数就用到了收集函数.

#### 函数的文档
* 函数可以用''或者#来写注释,但是前者可以作为文档,在调用函数使用.__doc__可以调用''内的内容,但是只能打印第一个''里的内容.

#### 函数(function)与过程(procedure): 
* 函数有返回值,过程没有返回值
* 严格来说Python只有函数,没有过程,函数即使不手动设置返回值也会自动返回一个'none'
* 如果想要返回多个值,可以返回列表,如果没有加列表的[],那就返回一个元祖.

#### 函数变量的作用域
* 局部变量(Local Variable)和全局变量(Global Variable)
* 跟C不一样，c是以语句块划分作用域，python以函数体划分
* 可以在函数体里面重新给全局变量名赋值,但一般并不会直接修改外部的全局变量,只是相当于在函数体里面屏蔽(shadowing)了原本的全局变量,不过一般不推荐这么做.
* global关键字 在函数体内在全局变量加'global',例如 global variable,那么就可以在之后彻底修改全局变量.
* 如果在global之前调用了全局变量会报错.

#### 内嵌函数和闭包
* 内嵌函数:可以在函数里面再定义函数使用,**注意内嵌函数的作用域,出了被内嵌的函数后,内嵌函数无法再被调用.**
* 闭包(Closure)(涉及到了范式和lisp,找时间了解一下)python的闭包表现形式定义为：如果在一个内部函数里，对外部作用域,但不是在全局作用域进行引用,那内部函数就认为为闭包(内部函数参数引用外部函数就是闭包,弹幕解)
* 因为外部数是不能调用被嵌套的函数的，所以引进闭包的方法来进行调用(函数的函数,类似于复合函数)
```Python
def FunX(x):
    print(x)
    def FunY(y):
        return x * y
    return FunY
 print(FunX()(1)) #会报错,x需要赋值.
i = FunX(8)  #相当于给x赋值,但缺少给y赋值,这仍然是一个函数.返回<class 'function'>
print(type(i)) #显示是一个函数
i(8) #给y赋值
print(i(5)) #返回40
```
* 这个知识点还需要再去了解一下,还涉及到了nonlocal

#### lambda表达式
[浅析匿名函数、lambda表达式、闭包（closure）区别与作用
](https://www.cnblogs.com/BigFeng/p/5204899.html)
```python
def lamdba(x): #一般的函数定义
    return 2 * x + 1
print(lamdba(5))

g = lambda x, y : 2 * x + y #lambda表达式 前一部分是参数,后一部分是返回值,这样不需要给函数命名了.
print(g(5, 7))
```
lambda作用:
* Python写一些执行脚本时，使用lambda就可以省下定义函数过程，比如说我们只是需要写个简单的脚本来管理服务器时间，我们就不需要专门定义一个函数然后再写调用，使用lambda就可以使得代码更加精简。
* 对于一些比较抽象并且整个程序执行下来只需要调用一两次的函数，有时候给函数起个名字也是比较头疼的问题，使用lambda就不需要考虑命名的问题了。
* 简化代码的可读性，由于普通的屌丝函数阅读经常要跳到开头def定义部分，使用lambda函数可以省去这样的步骤。

内置函数(Build In Function)
[filter()函数](http://www.runoob.com/python/python-func-filter.html)
```python
ShowDefault = filter(None, [1, 0, True, False])
print(ShowDefault) #返回了一个filter object
print(list(ShowDefault)) #[1, True],过滤了0和false

def odd(x):
    return x % 2 # 如果是奇数就是返回1,也就是返回了true,如果是偶数就返回了0
temp = range(10) # 分配0~9这十个数字
show = filter(odd, temp) # 只需要给函数的名字让filter知道到哪里找这个函数就可以了
#filter过滤掉了返回值为0的结果
print(list(show))

show2 = list(filter(lambda x : x % 2, range(10))) #更简便的一种方式
print(show2) 
```

[Python map() 函数](http://www.runoob.com/python/python-func-map.html)
```python
show2 = list(map(lambda x : x % 2, range(10))) #相当于不做过滤
print(show2) #[0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
# 提供了两个列表，对相同位置的列表数据进行相加
>>> map(lambda x, y: x + y, [1, 3, 5, 7, 9], [2, 4, 6, 8, 10])
[3, 7, 11, 15, 19]
```

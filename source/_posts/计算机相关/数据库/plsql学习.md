---
title: plsql学习
date: 2018-12-16 14:30:00
tags:
    - 数据库
    - plsql
categories: 数据库
---
[尚硅谷Java视频_ORACLE、SQL、PLSQL 视频教程](https://www.bilibili.com/video/av37000215/?p=34)
>可以看一下里面的课后习题，做一下

[PL/SQL Developer使用技巧(转)](https://www.cnblogs.com/m3Lee/p/3386057.html)
[PL/SQL教程](https://www.yiibai.com/plsql/)
同时也去看看相关视频

PLSQL比起sql有不少优点，例如在运行性能、操作复杂数据、处理错误、移植方面有优势。

PL/SQL块很明确地分三部分，其中包括声明部分、执行部分和异常处理部分
[PL/SQL基本语法](https://www.yiibai.com/plsql/plsql_basic_syntax.html)
>还涉及到了标识符、分隔符、注释等

写之前先写一个set serveroutput on（应该是在命令窗口里写的），再输入ed可以交互式输入程序。
>"SET SERVEROUTPUT ON"这么一行脚本，利用该脚本可以打开SQL*Plus的输出功能，否则会看不到输出的语句

使用select语句的时候用到了into
```sql
declare
  v_name varchar2(20);
  v_sno number(10);
  v_sex varchar2(2);
  v_sbrt date;
  
begin
  select sname, sno, sex, sbrt into v_name, v_sno, v_sex, v_sbrt from student where sno = 6100101;
  
  dbms_output.put_line(v_name||','||v_sno||','||v_sex||','||v_sbrt); --注意这里分割显示的数据。
end;

```

[What does SQL Select symbol || mean?](https://stackoverflow.com/questions/23372550/what-does-sql-select-symbol-mean?answertab=votes#tab-top)
[Why use “where 1=2” on a SQL CREATE TABLE syntax?](https://stackoverflow.com/questions/45783699/why-use-where-1-2-on-a-sql-create-table-syntax)

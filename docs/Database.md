*written by PeterAlbus，Copyright © 2021 - SHOU 1951123 Hong Wu*

# 第一章 数据库概论

## 1.2 数据库的由来和发展

### 1.2.2 文件系统阶段

文件系统的三个缺陷：

+ 数据冗余
+ 数据不一致
+ 数据联系弱

### 1.2.3数据库阶段

数据库阶段的五个特点：

+ 采用数据模型表示复杂的数据结构
+ 有较高的数据独立性
+ 数据库系统为用户提供了方便的接口
+ 提供如下4个方面的数据控制功能
  + 数据库的恢复
  + 数据库的并发控制
  + 数据的完整性
  + 数据安全性
+ 增加了系统的灵活性

![数据库系统的结构](https://file.peteralbus.com/assets/blog/imgs/blogimg/private/db_01.png)

> 数据库(Database, DB)。DB是长期储存在计算机内，有组织的，统一管理的**相关数据的集合**。DB能为各种用户共享，具有较小冗余度、数据间联系紧密而又有较高的数据独立性等特点。

> 数据库管理系统(Database Management System, DBMS)。DBMS是位于用户与操作系统(OS)之间的一层**数据管理软件**。它为用户或应用程序提供访问DB的方法，包括DB的建立，查询，更新以及各种数据控制。

DBMS可分为：

+ 层次型
+ 网状型
+ 关系型
+ 面向对象型
+ etc.

> 数据库系统(Database System, DBS)。DBS是实现有组织地，动态地存储大量关联数据，方便多用户访问的计算机硬件、软件和数据资源组成的系统，即它是**采用数据库技术的计算机系统**。

## 1.3 数据描述

概念设计->逻辑设计->物理设计

### 1.3.4 数据联系的描述

> 联系(Relationship)是实体间的相互关系，与一个联系有关的实体集个数，称为联系的元数。

+ 一元联系
+ 二元联系
  + 一对一联系 1:1
  + 一对多联系 1:N
  + 多对多联系 M:N
+ 三元联系等

**例1.2** 给定一定的联系及其类型（一对一/一对多/多对多），用单箭头指向“一端”的实体集，用双箭头指向"多端"的实体集。

**例1.3** 三元联系和一元联系类型举例：

如零件可以由若干个子零件组成，也可是其他零件的子零件，因此自身对自身是M:N

![一元联系、三元联系举例](https://file.peteralbus.com/assets/blog/imgs/blogimg/private/db_02.png)

## 1.4 数据抽象的级别

### 1.4.1 数据抽象的过程

现实世界的信息->数据库存储：逐步抽象的过程

> 表达用户需求观点的数据全局逻辑的模型称为“概念模型”，表达计算机实现观点的DB全局逻辑结构的模型称为“逻辑模型”，表达用户使用观点的DB局部逻辑模型称为“外部模型”，表达DB物理结构的模型称为"内部模型"。

![4种模型之间的相互关系](https://file.peteralbus.com/assets/blog/imgs/blogimg/private/db_03.png)

### 1.4.2 概念模型

概念模型的抽象级别最高，特点如下所述：

+ 概念模型表达了数据的整体逻辑结构，是系统用户对整个应用项目涉及的数据的全面描述。
+ 概念模型是从用户需求的观点出发，对数据建模。
+ 概念模型独立于硬件(硬件设备)和软件(实现时的DBMS软件)。硬件/软件的变化不会影响DB的概念模型设计。
+ 概念模型是数据库设计人员与用户之间进行交流的工具。

现在采用的概念模型主要是实体联系(ER, Entity Relationship)模型，ER模型主要由ER图来表示。

> ER图有3个基本成分
>
> + 矩形框：用于表示实体类型(考虑问题的对象，如学生，课程)。
> + 菱形框：用于表示联系类型(实体间联系，如选课)。
> + 椭圆形框：用于表示实体类型和联系类型的属性。
>
> 相应的命名均记入各种框中，实体与属性，联系与属性之间用直线相连，联系类型两端用直线连接涉及的实体类型，并在直线段标注联系的类型。

### 1.4.3 逻辑模型

逻辑模型具有以下特点

+ 逻辑模型表达了DB的整体逻辑结构。
+ 是从数据库实现的观点出发对数据建模
+ 独立于硬件，但依赖于软件(DBMS)
+ 逻辑模型是数据库设计人员与应用程序员之间进行交互的工具。

主要有层次、网状、关系和对象模型共四种。

#### 1.层次模型

#### 2.网状模型

#### 3.关系模型

关系模型的特征主要是用二位表格表达实体集。关系模型是由若干个关系模式（Relational Schema）组成的集合。关系模式的实例称为关系。每个关系实际上是一张二维表格(Table)。

> TEACHER模式 `(T#,TNAME,TITLE) `
>
> COURSE模式 `(C#,CNAME,T#)`
>
> STUDENT模式 `(S#,SNAME,AGE,SEX)`
>
> SC模式`(S#,C#,SCORE)`

如上为关系模式的例子，关系模式的实例（关系）将会是一张表格，如下所示，是TEACHER模式的实例：

| T#   | TNAME | TITLE  |
| ---- | ----- | ------ |
| T2   | SHI   | 教授   |
| T3   | LI    | 副教授 |
| T1   | DAI   | 讲师   |
| T4   | GU    | 讲师   |

#### 4.对象模型

### 1.4.4 外部模型

实际使用时，可以为不同的业务单位设计不同的外部模型。

**例** 存在关系模型，由如下四个关系模式组成

> TEACHER模式 `(T#,TNAME,TITLE) `
>
> COURSE模式 `(C#,CNAME,T#)`
>
> STUDENT模式 `(S#,SNAME,AGE,SEX)`
>
> SC模式`(S#,C#,SCORE)`

在这个基础上，可以为学生应用子系统设计一个外部模型外部模型中的模式称为“视图”，这个视图如下：

> 学生视图 `STUDENT_VIEW(S#,SNAME,C#,CNAME,SCORE,T#,TNAME)`

视图只是一个定义，视图中的数据可以从逻辑模型的数据库中得到。

外部模型具有如下特点

+ 外部模型是逻辑模型的一个逻辑子集
+ 外部模型独立于硬件，依赖于软件
+ 外部模型反映了用户使用数据库的观点

### 1.4.5 内部模型

内部模型又称为物理模型，是数据库最低层的抽象，它描述数据在硬盘或磁带上的存储方式，存取设备和存取方法。内部模型与硬件和软件紧密相连。

### 1.4.6 三层模式与两级映像

#### 1.三层模式体系结构

在用户(或应用程序)到数据库之间，DB的数据结构有3个层次，外部模型，逻辑模型和内部模型。这3个层次要用DB的数据定义语言(Data Definition Language,DDL)定义，定义后的内容，称为模式(Schema)。

> 从用户(或应用程序)到数据库之间，DB的数据结构描述有3个层次：
>
> + 外模式 用户与数据库系统的结构，是用户用到的那部分数据的描述。
> + 逻辑模式 是数据库中全部数据的整体逻辑结构的描述。
> + 内模式 数据库在物理存储方面的描述

#### 2.两级映像

> 三层模式之间存在着两级映像:
>
> + 外模式/逻辑模式映像存在于外模式和逻辑模式之间，用于定义外模式和逻辑模式间的对应性，这个映像一般是放在外模式中描述的
> + 逻辑模式/内模式映像存在于逻辑模式和内模式之间，这个映像一般是放在内模式中描述的

### 1.4.7 高度的数据独立性

> 数据独立性(Data Independence)是指应用程序和数据库的数据结构之间相互独立，不受影响，在修改数据结构时，尽可能不修改应用程序，则称系统达到了数据独立性目标。

+ 物理数据独立性

  如果数据库的内模式要修改，只要对逻辑模型/内模式映像作相应的修改，可以使逻辑模式经可能保持不变，这时，称数据库达到了物理数据独立性。

+ 逻辑数据独立性

  如果数据库的逻辑模式要修改，只要对外模式/逻辑模式映像做相应的修改，可以使外模式和应用程序京可能保持不变，这时，称数据库达到了逻辑数据独立性。

## 1.5 数据库管理系统

### 1.5.1 DBMS的工作模式

数据库管理系统(DBMS)是指数据库系统中对数据进行管理的软件系统。

![用户访问数据库的过程](https://file.peteralbus.com/assets/blog/imgs/blogimg/private/db_04.png)

### 1.5.2 DBMS的主要功能

1. 数据库的定义功能
2. 数据库的操纵功能
3. 数据库的保护功能
4. 数据库的维护功能
5. 数据字典

--------------------------

# 第二章 关系模型和关系运算理论

## 2.1 关系模型的基本概念

### 2.1.1 基本术语

> 用二维表格表示实体集，用关键码表示实体之间联系的数据模型称为关系模型(Relation Model)

在关系模型中：

字段称为**属性**，字段的值称为**属性值**，为列(Column)

记录类型称为**关系模式**

记录称为**元组**(Tuple), 为行(Row)

元组的集合称为**关系**(Relation)或实例(Instance)

属性的个数称为**元数**,元组个数称为**基数**

关键码(Key,键)由一个或多个属性组成,在实际使用中，有以下几种键:

+ 超键(Super Key)，在关系中能唯一标识元组的属性或属性集称为关系模式的超键。
+ 候选键(Candidate Key)，不含有多余属性的超键称为候选键，候选键中再删除属性便不是键。
+ 主键(Primary Key)，用户选作元组表示的候选键称为主键。
+ 外键(Foreign Key)，如果模式R中属性K是其他模式的主键，那么K在模式R中称为外键。

### 2.1.2 关系的定义和性质

> 关系是一个属性数目相同的元组的集合

严格地讲，关系是一种规范化了的二维表格，在关系模型中，对关系作了下列规范性限制：

+ 关系中每个属性都是不可分解的
+ 关系中不允许出现重复元组
+ 由于关系是一个集合，因此不考虑元组间的顺序，即没有行序
+ 元组中的属性在理论上也是无序的，但使用时按习惯考虑列的顺序

### 2.1.3 关系的3类完整性规则

#### 1. 实体完整性规则

在组成主键的属性上不能有空值

#### 2.参照完整性规则

> 如果属性集K是关系模式R1的主键，K也是关系模式R2的外键，那么在R2的关系中，K的取值只有两种可能：或者为空值，或者等于R1关系中的某个主键值。

实质：不允许引用不存在的实体

#### 3.用户定义的完整性规则

在建立关系模式时，数据可以针对具体的数据约束，设置完整性规则，由系统来检验实施。

## 2.2 关系代数

### 2.2.1 关系代数的5个基本操作

关系定义为属性个数相同的元组的集合，因此集合代数中的操作可以引入到关系代数中。

#### 1.并(Union)

R和S具有相同的关系模式，R和S的并是属于R或属于S的元组构成的集合。记为：
$$
R \cup S\equiv\lbrace t \mid t \in R \wedge t\in S \rbrace
$$

#### 2.差(Difference)

R和S具有相同的关系模式，R和S的差是属于R但不属于S的元组构成的集合。记为：
$$
R \cap S\equiv\lbrace t \mid t \in R \wedge t \notin S \rbrace
$$

#### 3.笛卡儿积(Cartesian Product)

设关系R和关系S的元数分别为r和s，定义R和S的笛卡尔积是一个(r+s)元的元组集合，每个元组的前r个分量来自R的一个元组，后s个分量来自S的一个元组，记为：
$$
R \times S\equiv\lbrace t \mid t= \langle t^r,t^s \rangle \wedge t^r \in R \wedge t^s \in S\rbrace
$$

#### 4.投影(Projection)

对一个关系进行垂直分割，按顺序选出某些列。
$$
\pi_{i_1,\ldots,i_m}(R)\equiv\lbrace t \mid t = \langle t_{i_1},\ldots,t_{i_m} \rangle \wedge \langle t_1,\ldots,t_k \rangle \in R \rbrace
$$
操作符$\pi$的下标处也可以用属性名表示。 

#### 5.选择(Selection)

选择操作时根据某些条件对关系做水平分割，即选取符合条件的元组。

选取的条件F有两种成分：

+ 运算对象：常数，元组分量（属性名/列的序号）
+ 运算符：算术比较运算符、逻辑运算符

形式定义如下：
$$
\sigma_F(R) \equiv \lbrace t \mid t \in R \wedge F(t)=true \rbrace
$$
$\sigma_F(R)$表示从R中挑选满足公式F为真的元组所构成的关系。

### 2.2.2 关系代数的4个组合操作

组合操作可由前面5个基本操作推出。

#### 1.交(Intersection)

关系R和关系S的交是属于R又属于S的元组构成的集合，形式定义如下(R和S的元数相同)：
$$
R \cap S \equiv \lbrace t \mid t \in S \wedge t \in S \rbrace
$$

#### 2.连接(Join)

连接是从关系R和S的笛卡尔积中选取属性值满足某一$\Theta$操作的元组，形式定义如下:
$$
R\Join_{i \theta j} S \equiv \lbrace t \mid t = \langle t^t,t^s \rangle \wedge t^s \in S \wedge t^r_i \theta t^s_j \rbrace
$$
显然，连接操作由笛卡尔积和选择操作组合而成。

如果$\theta$是等号，该连接操作被称为等值连接。

#### 3.自然连接(Natural Join)

两个连接关系R和S的自然连接操作用$R\Join S$表示，计算过程如下：

1. 计算$R \times S$
2. 设R和S的公共属性是$A_1, \ldots ,A_K$,挑选$R \times S$中满足$R.A_1=S.A_1, \ldots ,R.A_K=S.A_K$的元组。
3. 去掉$S.A_1, \ldots ,S.A_K$这些列

#### 4.除法(Division)

概念定义较为抽象，难以理解，用自然语言简要说明：

R/S的流程：

+ 从S中选择出R和S的重复属性：Y，从R中去除R和S的重复属性，去除后的关系称为X，即X为不重复属性
+ 对X中的每个元组，在R中找出对应的Y的象集，即找出所有X的元组在R中对应的属性和Y一样的Y元组。
+ 若X中的每个元组在R中对应的Y的元组包含了所有Y，则X在R/S的最终结果中。

## 2.4 关系代数表达式的优化

### 2.4.3 启发式优化算法

启发式规则：

+ 尽可能早地执行选择操作
+ 尽可能早的执行投影操作
+ 避免直接做笛卡儿积，把笛卡儿积之前和之后地一连串选择和投影操作合并起来一起做

----------------------------------------------

# 第三章 关系数据库语言SQL

## 3.2 SQL的数据定义

### 3.2.1 SQL的模式的创建和撤销

创建模式`CREATE`和撤销模式`DROP`：

```sql
CREATE SCHEMA <模式名>
DROP SCHEMA <模式名> [CASCADE|RESTRICT]
```

`CASCADE`:级联式，执行DROP语句时把SQL模式及其下属的基本表、视图、索引等元素全部撤销。

`RESTRICT`:约束式，没有任何下属元素才能执行，否则拒绝执行

SQL模式一词较为偏向学术，许多DBMS中会将模式称为数据库，采用`CREATE DATABASE`语句。

### 3.2.2 基本数据类型

+ 数值型
  + INTEGER/INT 整数，长度4B
  + SMALLINT 短整数，长度2B
  + REAL 浮点数
  + DOUBLE PRECISION 双精度浮点数
  + FLOAT(n) 精度至少为n个数字的浮点数
  + NUMERIC(p,d)/DECIMAL(p,d)/DEC(p,d) 定点数，p位整数，d位小数
+ 字符串型
  + CHAR(n) 长度为n的定长字符串（不足长度补空格）
  + VARCHAR(n) 最大长度为n的变长字符串
+ 位串型
  + BIT(n) 长度为n 的二进制位串
  + BIT VARYING(n) 最大长度为n的变长二进制位串
+ 时间型
  + DATE 日期，YYYY-MM-DD
  + TIME 时间，HH:MM:SS

### 3.2.3 基本表的创建、修改和撤销

#### 1.基本表的创建

```sql
CREATE TABLE <基本表名>
	(
     <列名类型>,
     ...
     <完整性约束>,
     ...
    )
```

每个列的类型可以是基本数据类型，也可以是用户事先定义的域名。

完整性约束包含主键子句(`PRIMARY KEY`)、外键子句(`FOREIGN KEY`)和检查子句(`CHECK`)

例：

```sql
CREATE TABLE T
(
	T# CHAR(4) NOT NULL,
	TNAME CHAR(8) NOT NULL,
    TITLE CHAR(10),
    PRIMARY KEY(T#);
);
```

#### 2.基本表的结构的修改

+ 增加新的列用"`ALTER ... ADD ...`"语句
+ 删除原有的列用"`ALTER ... DROP ...`"语句
+ 修改原有列的类型、宽度用“`ALTER ... MODIFY ...`”语句

```sql
ALTER TABLE <基本表名> ADD <列名> <类型>
ALTER TABLE S ADD ADDRESS VARCHAR(30);

ALTER TABLE <基本表名> DROP <列名> [CASCADE|RESTRICT]
ALTER TABLE S DROP AGE CASCADE;

ALTER TABLE <基本表名> MODIFY <列名><类型>
ALTER TABLE S MODIFY S# CHAR(6);
```

#### 3.基本表的撤销

```sql
DROP TABLE <基本表名> [CASCADE|RESTRICT]
DROP TABLE S RESTRICT;
```

## 3.3 SQL的数据查询

### 3.3.1 SELECT查询语句的基本结构

#### 1.SELECT 句型

关系代数中最常用的式子为下列表达式：
$$
\pi_{A_1, \ldots ,A_n} (\sigma_F(R_1 \times \ldots \times R_m))
$$
根据该表达式，SQL设计了SELECT-FROM-WHERE 句型

```sql
SELECT A,B,...
FROM R,S,...
WHERE F
```

该句型由关系代数表达式演变而来。WHERE子句中的条件表达式更加灵活，可使用下列运算符：

+ 算数比较运算符
+ 逻辑运算符:AND,OR,NOT
+ 集合成员资格运算符:IN,NOT IN
+ 谓词:EXISTS,ALL,SOME,UNIQUE
+ 聚合函数:AVG,MIN,MAX,SUM
+ 运算对象可以是另一个SELECT语句

SELECT语句能表达所有的关系代数表达式

#### 2.SELECT语句的使用技术

SELECT语句使用时的三种写法：连接查询、嵌套查询、带存在量词的嵌套查询。

**例**：对于数据库以下四个关系

> T `(T#,TNAME,TITLE) `
>
> C `(C#,CNAME,T#)`
>
> S `(S#,SNAME,AGE,SEX)`
>
> SC`(S#,C#,SCORE)`

查询语句：检索学习课程号为C2课程的学生学号与姓名

```sql
#连接查询
SELECT S,`S#`,SNAME
FROM S,SC
WHERE S.S#=SC.S# AND `C#`='C2';
#嵌套查询
SELECT `S#`,SNAME
FROM S
WHERE `S#` IN(SELECT `S#`
             FROM SC
             WHERE `C#`='C2');
#使用存在量词的嵌套查询
SELECT `S#`,SNAME
FROM S
WHERE EXISTS(SELECT C#
            FROM SC
            WHERE `S#`=SC.S#);
```

### 3.3.2 SELECT语句的完整结构

```sql
SELECT <目标表的列名或列表达式序列> #列表达式序列指对于一个单列求聚合值的表达式，也允许常用算数表达式
FROM <基本表名和(或)视图序列>
[WHERE <行条件表达式>]
[GROUP BY <列名序列>
	[HAVING <组条件表达式>]]
[ORDER BY <列名[ASC|DESC]>,...]
```

执行过程：

1. 读取FROM子句中基本表和视图的数据，执行笛卡尔积操作
2. 选取满足WHERE子句中给出的条件表达式的元组
3. 按GROUP子句中指定的列的值分组，同时提取满足HAVING子句中条件表达式的那些组
4. 按SELECT子句中给出的列名或列表达式求职输出
5. ORDER子句对输出目标表进行排序，附加说明按ASC升序排列，或按DESC降序排列

### 3.3.3 数据查询中的限制与规定

#### 1.SELECT子句规定

`SELECT [ALL|DISTINCT] ....`

DISTINCT用于将重复的行从结果中去除。

默认为ALL，保留重复行。

#### 2.列和基本表的改名操作

可在SELECT子句中用`<旧名> AS <新名>`改名

#### 3.集合的交、并、差操作

当两个子查询的结果结构完全一致时，可让两个子查询执行交、并、差操作。

运算符为`UNION`,`INTERSECT`,`EXCEPT`

### 3.3.4 条件表达式中的比较操作

#### 1.算术比较操作

条件表达式中可用算术比较运算符：>、<、>=、<=、=、!=，也可用`BETWEEN ... AND ...`

#### 2.字符串匹配操作

字符串匹配操作符是`LIKE`,表达式中可使用两个通配符：

+ 百分号(%):与0个或多个任意字符匹配
+ 下划线(_):与单个字符匹配

需要时也可使用`NOT LIKE`

#### 3.空值比较操作

`IS NULL`

#### 4.集合成员资格的比较

```sql
<元组> [not] in (<集合>)
SELECT SNo
FROM S
WHERE SNo NOT in (SELECT SNo
                 FROM SC
                 WHERE CNo IN ('C2','C4'));
```

#### 5.集合成员的算数比较

```
<元组> <运算符> ALL|SOME|ANY (<集合>)
```

`in` 可用`=SOME`代替

#### 6.集合空否的测试

```sql
[NOT] EXISTS(<集合>)
```

结果为true/false

#### 7.集合是否存在重复元组的测试

```sql
[NOT] UNIQUE(<集合>)
```

## 3.4 SQL数据更新

## 3.5 视图

### 3.5.1 视图的创建和撤销

```sql
CREATE VIEW <视图名>(<列名序列>)
	AS <SELECT 查询语句>
CREATE VIEW STUDENT_SCORE(SNO,SNAME,CNAME,SCORE)
	AS SELECT S.SNO,SNAME,CNAME,SCORE
	FROM S,SC,C
	WHERE S.SNO=C.SNO AND C.CNO=SC.CNO;

DROP VIEW <视图名>
DROP VIEW STUDENT_SCORE;
```

--------

# 第四章 关系数据库的规范化设计

## 4.1 关系模式的设计问题

### 4.1.2 关系模式的冗余和异常问题

为什么要做模式分解？

未分解的数据库使用中可能遇到如下问题：

+ 数据冗余
+ 操作异常
  + 修改异常
  + 插入异常
  + 删除异常

“分解”是解决冗余的主要方法，也是规范化的一条原则：“关系模式有冗余问题，就分解它”。

## 4.2 函数依赖

### 4.2.1 函数依赖的定义

在数据库中，属性值之间会发生联系，例如每门课程只能由一个任课老师等等，这类联系称为函数依赖。

> 设有关系模式R(U)，X,Y是属性集U的子集，函数依赖(Functional Dependency,FD)是形为X→Y的一个命题，只要r是R的当前关系(实例)，对r中任意两个元组t和s，都有t[X]=s[X]蕴含t[Y]=s[Y]，那么称FD X→Y在关系模式R(U)中成立。

X→Y读作X决定Y或Y函数依赖于X。

**例** 有一个包括学生选课、教师任课数据的关系模式：

`R(S#,SNAME,AGE,SEX,C#,CNAME,SCORE,T#,TNAME,TITLE)`

如果规定，每个学号只能有一个学生姓名，每个课程号只能决定一门课程，那么可写成下列FD形式：

`S#→SNAME`

`c#→CNAME`

每个学生每学一门课程，有一个成绩，可写出下列FD：

`(S#,C#)→SCORE`

还可写出：

`S#→(AGE,SEX)`

`C#->T#`

`T#->(TNAME,TITLE)`

### 4.2.3 FD的推理规则

+ A1(自反性,Reflexivity) 若$Y\subseteq X \subseteq\ U$ 则$X\rightarrow Y$在R上成立
+ A2(增广性,Augmentation) 若$X\rightarrow Y$在R上成立，且$Z \subseteq U$,则$XZ \rightarrow YZ$在R上成立
+ A3(传递性,Transitivity)  若$X\rightarrow Y$和$Y\rightarrow Z$在R上成立，则$X\rightarrow Z$在R上成立

### 4.2.5 属性集的闭包

> 设F是属性集U上的FD集，X是U的子集，那么（相对于F）属性集X的闭包用$X^+$表示，它是一个从F集使用FD推理规则推出的所有满足$X \rightarrow A$的属性A的集合 

求属性集X的闭包的算法（自然语言描述）：

$X^+=X$

遍历F中的每个FD：$Y \rightarrow Z$，若$Y \subseteq X^+$,把Z加入到$X^+$中

若$X^+$有变化，重新遍历，直到$X^+$不变为止

### 4.2.7 FD的最小依赖集

> 如果函数依赖集G满足下列三个条件，则称G是最小依赖集:
>
> + G中的每个FD的右边都是单属性
> + G中没有冗余的FD，即G中不存在函数依赖A，使得G-A与G等价
> + G中每个FD的左边没有冗余的属性

每个函数依赖集至少存在一个等价的最小依赖集，但并不一定唯一。

**例** 设F是关系模式R(ABC)的最小依赖集，$F=\{A\rightarrow BC,B \rightarrow C,A \rightarrow B, AB \rightarrow C\}$，试求最小依赖集。

1. 先把F中的FD写成右边是单属性形式：
   $$
   F= \lbrace A\rightarrow B,A\rightarrow C,B \rightarrow C,A \rightarrow B, AB \rightarrow C \rbrace
   $$
   显然有重复，删去：$F= \lbrace A\rightarrow B,A\rightarrow C,B \rightarrow C, AB \rightarrow C \rbrace$

2. 在F中，$A \rightarrow C$可由$A \rightarrow B$和$B \rightarrow C$推出，冗余，删去。

3. 在F中，$AB \rightarrow C$中A多余，可通过$B \rightarrow C$直接退出，冗余，删去

结果：$F= \lbrace A\rightarrow B,B \rightarrow C \rbrace$为最小依赖集

## 4.3 关系模式的分解特性

### 4.3.1 模式分解问题

将一个关系模式R用多个其属性集子集的关系模式(ρ)替代的过程称为模式分解。

R称为**泛关系模式**，R对应的当前值称为**泛关系**，ρ称为**数据库模式**，ρ对应的当前值称为**数据库实例**

分解后的两个问题：

+ 数据库实例和泛关系是否等价，即是否表示同样的数据，用”无损分解“特性表示。

+ FD是否等价，用“保持依赖“表示。

### 4.3.2 无损分解

关系模式分解后，通过投影，连接仍能恢复，即未丢失信息，这种分解称为"无损分解"，反之，称为”损失分解“

直接定义一个数据库实例，其中存在多余数据，在原有的泛关系中不可能存在（即不可能存在一个泛关系，分解后得到此数据库实例），这种情况称为**无泛关系假设**，多余数据称为**悬挂元组**。<!--非严谨定义，自然语言快速解释-->

### 4.3.3 模式分解的优缺点

#### 1.优点

+ 能消除数据冗余和操作异常现象
+ 在分解了的数据库中可以储存悬挂元组，储存泛关系中无法储存的信息

#### 2.缺点

+ 分解以后，检索操作需要做笛卡儿积或连接操作，这将付出时间代价
+ 在有泛关系假设时，对数据库的关系进行自然连接时，可能存在寄生元组，无泛关系假设时，可能存在悬挂元组，就有可能不存在泛关系。

### 4.3.4 无损分解的测试方法

>chase算法
>输入：关系模式R=A1…An，F是R上成立的函数依赖集，ρ={R1,…,Rk}是R的一个分解。
>输出：判断ρ相对于F是否具有无损分解特性。
>方法：“chase”过程
>1.构造k行n列的表格，每列对应一个属性Aj(1≤j≤n),每行对应一个模式Ri (1≤i≤k)。若Aj在Ri中，则在i行j列处填上符号aj，否则填上bij。
>2.把表格看成R的一个关系，反复检查F中每个FD在表格中是否成立，若不成立，则修改表格中的值。方法：
>对于F中一个FD X→Y，如果表格中有两行在X值上相等，在Y值上不相等，那么把这两行在Y之上的改成相等的值。直到表格不能修改为止。（尽可能修改为a，若没有a，修改为下标较小的值）
>3.最后一张表格有一行是全a，称ρ相对于F是无损分解。

  概念较为模糊，用实例解释：

> 设关系模式R(ABCD)，F是R上成立的FD集，F={B->A,C->D}，ρ={AB,AC,BD}是R的一个分解。相对于F，ρ是否无损分解？
>
> 1. 根据步骤一，得出下表：
>
>    |      | A    | B    | C    | D    |
>    | ---- | ---- | ---- | ---- | ---- |
>    | AB   | a1   | a2   | b13  | b14  |
>    | BC   | b21  | a2   | a3   | b24  |
>    | CD   | b31  | b32  | a3   | a4   |
>
> 2. 根据步骤二，通过修改即可知道这个关系模式的分解是否是无损分解：
>
>    根据B→A，第一第二个元组(行),因为在B值上相等，在A值上不相等，所以把A上的b32改成a1：
>
>    |      | A      | B    | C    | D    |
>    | ---- | ------ | ---- | ---- | ---- |
>    | AB   | a1     | a2   | b13  | b14  |
>    | BC   | **a1** | a2   | a3   | b24  |
>    | CD   | b31    | b32  | a3   | a4   |
>
>    同理根据C→D，第二第三个元组(行)在C值上相等，D上不相等,则修改为:
>
>    |      | A    | B    | C    | D      |
>    | ---- | ---- | ---- | ---- | ------ |
>    | AB   | a1   | a2   | b13  | b14    |
>    | BC   | a1   | a2   | a3   | **a4** |
>    | CD   | b31  | b32  | a3   | a4     |
>
> 3. 上表中第二行全是a,因此是无损分解
>
>    原文链接：https://blog.csdn.net/u010927640/article/details/40737021

**补充：判断是否保持函数依赖：对每个分解后的关系模式，从F中选取相关的FD，最后将所有FD并集，若与F相等则保持函数依赖。**

## 4.4 关系模式的范式

衡量关系模式的好与坏的统一标准就是模式的范式(Normal Forms, NF)。

### 4.4.1 第一范式

> 如果关系模式R的每个关系r的属性值都是不可分的原子值，那么称R是第一范式(First Normal Form, 1NF)的模式。

即一个元组的一个属性不可以有两个值，假设一个人有两个电话号码，则必须需要出现两个元组以存储这个号码。

### 4.4.2 第二范式

> 对于FD $W \rightarrow A$，如果存在$X \subset W$有$X \rightarrow A$成立，那么称$W \rightarrow A$是局部依赖，否则是完全依赖

**完全依赖**也称为“左部不可约依赖”

> 如果A是关系模式R的候选键中的属性，那么称A是R的主属性，否则称A是R的非主属性

> 如果关系模式R是1NF，且每个非主属性完全函数依赖于候选键，那么称R是第二范式(2NF)的模式，如果数据库模式中的每个关系模式都是2NF，那么称数据库模式为2NF的数据库模式

即在满足1NF的基础上，所有非主属性不可以被主属性的一部分推出。

### 4.4.3 第三范式

> 如果$X \rightarrow Y$,$Y \rightarrow A$,且Y 不决定X，$A \notin Y$,那么称$X \rightarrow A$是传递依赖（A传递依赖于X）

> 如果关系模式R是1NF，且每个非主属性都不传递依赖于R的候选键，那么称R是第三范式(3NF)的模式，如果数据库模式中的每个关系模式都是3NF，则称其为3NF的数据库模式。

即关系模式中每个非主属性必须不可被间接推出（不可被非超键推出），只能由候选键直接推出。

如何分解成第三范式：（非严谨算法，自然语言解释）

+ 将传递依赖于主属性的Y去除
+ 单独建表，属性包含Y和传递依赖的中间值X。
+ 将X设为新表的主键，旧表的外键。

### 4.4.4 BCNF（不在考试范围）

> 如果关系模式R是1NF，且每个属性都不传递依赖于R的候选键，那么称R是BCNF的模式。如果数据库模式中的每个关系模式都是BCNF，则称为BCNF的数据库模式。

即在3NF的基础上排除了主属性对候选键的传递依赖。

---

# 第五章 数据库设计与ER模型

## 5.1 数据库设计的全过程

> 把数据库应用系统从开始规划、设计、实现、维护到最后被新的系统取代而停止使用的整个期间，称为数据库系统生存期。

这个生存期一般分为下面7个阶段：规划、需求分析、概念设计、逻辑设计、物理设计、实现、运行维护。

+ 规划阶段

  + 系统调查
  + 可行性分析
  + 确定数据库系统的总目标，制定项目开发计划

+ 需求分析阶段

  + 分析用户活动，产生业务流程图
  + 确定系统范围，产生系统关联图
  + 分析用户活动涉及的数据，产生数据流图
  + 分析系统数据，产生数据字典(数据项、数据结构、数据流。数据存储、处理过程)

+ 概念设计阶段

  产生反映用户单位信息需求的数据库概念结构，即概念模型。

  + 进行数据抽象，产生局部概念模型
  + 将局部概念模型综合成全局概念模型
  + 评审

+ 逻辑设计阶段

  把概念模型转换成DBMS能处理的逻辑模型(例如最常用的关系模型)

  + 把概念模型转换成逻辑模型
  + 设计外模型
  + 设计应用程序与数据库的接口
  + 评价模型
  + 修正模型

+ 物理设计阶段

  选择一个适合应用环境的物理结构的过程

  + 存储记录结构设计
  + 确定数据存放位置
  + 存取方法的设计
  + 完整性和安全性考虑
  + 程序设计

+ 数据库的实现

  + 用DDL定义数据库结构
  + 组织数据入库
  + 编制与调试应用程序
  + 数据库试运行

+ 数据库的运行与维护

  + 数据库的转储和恢复
  + 数据库安全性、完整性控制
  + 数据库性能的监督、分析和改进
  + 数据库的重组织和重构造

## 5.2 ER模型

实体联系模型(ER模型)是广泛被采用的概念模型设计方法。

### 5.2.1 ER模型的基本元素

#### 1.实体

> + 实体(Entity)是一个数据对象，指客观存在的事物。
> + 实体集(Entity Set)是指同一类实体构成的集合。
> + 实体类型(Entity Type)是对实体集中实体的定义。

以上概念一般统称为实体。在ER模型中提到的实体往往是指实体集。

ER图中，实体用方框表示，方框内为实体命名。

#### 2.联系

> + 联系(Relationship)表示一个或多个实体之间的关联关系。
> + 联系集(Relationship Set)是指同一类联系的集合
> + 联系类型(Relationship Type)是对联系集中联系的定义

以上概念一般统称为联系。

联系在英文中一般用动名词命名，汉语中一般使用动词，如“属于”，“工作”等。

ER图中，联系用菱形框表示。并用线段将与其相关的实体连接起来。

联系的元数在线段连接时书写，例如1:1,1:N,M:N。

#### 3.属性

> 实体的某一特性称为属性(Attribute)。在一个实体中，能唯一标识实体的属性或属性集称为"实体标识符"。

ER图中，属性用椭圆形框表示，加下划线的属性为标识符(即主键)。、

属性可分为简单属性和复合属性。

#### 4.一些不常用的tips

+ 多值属性用双椭圆线表示，但会造成数据异常。通常变化多值属性，例如用新的实体类型表示。
+ 派生属性可由其他属性推导，不需要存储在数据库中，用虚线表示。

## 5.3 ER模型到关系模型的转换

+ 将每个实体类型转换为一个关系模式。
+ 联系类型转换为关系模式，同时设外键。

---

# 第七章 系统实现技术

## 7.1 事务

### 7.1.1 事务的定义

> 事务(Transaction)是构成单一逻辑工作单元的操作集合，要么完整地执行，要么完全不执行，不论发生何种情况，DBS必须保证事务能正确、完整的执行。

### 7.1.2 事务的ACID性质

#### 1.原子性(Atomicity)

一个事务是不可分割的工作单元，要么全做，要么全部做。

#### 2.一致性(Consistency)

一个事务独立执行结果要保证数据库的一致性，即保证数据不会因事务的执行而遭受破坏。

#### 3.隔离性(Isolation)

保证多个事务并发执行时和先后单独执行的结果一样。

#### 4.持久性(Durability)

一个事务一旦完成全部操作，所有更新应当永久地反映在数据库中，不会丢失。

![事务的状态变迁图](https://file.peteralbus.com/assets/blog/imgs/blogimg/private/db_05.png)

## 7.2 数据库的恢复

### 7.2.2 恢复的基本原则和实现方法

数据库的恢复意味着要把数据库恢复到最近一次故障前的一致性状态，要使数据库具有可恢复性，基本原则很简单，为“冗余” ，即数据库重复存储。

具体实现方法：

1. 平时做好转储和建立日志
2. 一旦发生数据库故障，分两种情况：
   1. 数据库遇到灾难性故障时（物理性破坏），需要装入最近一次数据库到新的磁盘，让后利用日志库"重做"(REDO)已提交的事务。
   2. 如果数据库未遭到物理性破坏但破坏了数据库的一致性，即数据不正确，此时无需复制备份，只要利用日志库“撤销”(UNDO)不可靠的修改，再"重做"(REDO)已提交的，但更新仍留在缓冲区内的事务。

### 7.2.3 故障类型和修复方法

常见的故障类型分为：

+ 事务故障
+ 系统故障
+ 介质故障

![与检查点相关的事务的可能状态](https://file.peteralbus.com/assets/blog/imgs/blogimg/private/db_06.png)

- T1不必恢复
- T2/T4需要REDO
- T3/T5需要UNDO

## 7.3 数据库的并发控制

### 7.3.1 并发操作带来的3个问题

#### 1.丢失更新问题

两个事务并发执行，对同一个数据进行操作，在一个事务提交后紧接着另一个事务提交，可能会导致前一个数据的更新丢失。

#### 2.读脏数据问题

两个事务并发执行，若其中一个事务修改了数据，之后却需要回滚，另一个事务在这个时间段内读取了数据，就会读取到错误的数据。

#### 3.不可重复读问题

事务两次读取同一数据项A，读操作的间隔中另一个事务改变了A的值。

### 7.3.2 封锁技术

> 锁(Lock)是一个与数据项相关的变量，对可能应用于该数据项上的操作而言，锁描述了该数据项的状态。

通常在数据库中的每个数据项都有一个锁。锁的作用是使并发事务对数据库中的数据项的访问能够同步。

#### 1.排他性封锁(X锁)

在封锁技术中最常用的一种锁，又称为写锁。

> 如果事务T对某个数据R(可以是数据项、记录、数据集乃至整个数据库)实现了X锁，那么在T对数据R解除封锁之前，不允许其他事务T再对该数据加任何类型的锁。这种锁称为"X锁"

申请X锁的操作：

+ `XFIND R`,事务对数据R申请加X锁
+ `XRELEASE R`,表示事务要解除对数据R的X锁

使用X锁可以解决更新丢失问题。在更新一个数据的事务前加上申请X锁的操作，若有其他事务已经申请，便会进行等待直到其他事务结束，解除X锁。

#### 2.共享型封锁(S锁)

为降低要求，允许并发的**读**，就引入了共享型封锁(Shared Lock)，又称为S锁、读锁。

> 如果事务T对某数据加上S锁后，仍允许其他事务再对该数据加S锁，但在该数据的所有S锁都接触之前决不允许任何事务对该数据加X锁，这种锁称为"S锁"。

使用S锁的操作:

+ `SFIND R`：事务对数据R申请加S锁。成功后，可以读数据R但不可以写数据R。
+ `UPDX R`:表示事务要把对R的S锁升级为X锁。
+ `SRELEASE R`:表示事务解除对数据R的S锁。

S锁可以解决丢失更新问题，但也可能引发死锁。

### 7.3.3 封锁带来的问题

#### 1."活锁"问题

> 系统可能使某个事物永远处于等待状态，得不到封锁的机会，这种现象称为“活锁”现象(Live Lock)。

简单的解决方法：先来先服务FCFS，简单的排队方式。或采用动态优先级方式等。

#### 2."饿死"问题

> 有可能存在一个事务序列，其中每个事务都申请对某数据项加S锁，且每个事务在授权加锁后的一小段时间内释放封锁。此时若另有一个事务T2欲在该数据项上加X锁，则永远得不到封锁的机会，这种现象称为“饿死”(starvation)。

可以用以下方式来避免饿死，使得授权加锁的条件为:

+ 不存在数据项上持有X锁的其他事务。
+ 不存在等待对数据项加锁且先于本事务申请加锁的事务。

#### 3."死锁"问题

> 系统中有两个或两个以上的事务都处于等待状态，并且每个事务都在等待其中另一个事务解除封锁，它才能继续执行下去，结果造成任何一个事务都无法执行，这种现象称系统进入了"死锁"(Dead Lock)状态。

例：两个事务都持有一个X锁的情况下分别对对方持有X锁的数据申请加锁/两个事务都持有S锁的情况下都申请升级为X锁。

解决方法：

DBMS中有一个死锁测试程序，隔一段时间检查是否发生死锁。若发生，只能抽取某个事务作为牺牲品，将其撤销，做回退操作，解除它的所有封锁。

虽然理论上死锁时可能有许多事务相互等待，但System R的实验表明绝大多数的死锁只涉及两个事务。

![事务的无环和有环依赖图](https://file.peteralbus.com/assets/blog/imgs/blogimg/private/db_07.png)

### 7.3.4 并发操作的调度

#### 2.可串行化的调度

> 每个事务中，语句的先后顺序在各种调度中始终保持一致。在这个前提下，如果一个并发调度的执行结果与某一串行调度的执行结果等价，那么这个并发调度称为“可串行化的调度”，否则是不可串行化的调度。

一般来说，并发调度中出现问题时会是不可串行化的调度。（自我理解，非概念）

## 7.4 数据库的完整性

### 7.4.2 SQL中的完整性约束

#### 1.域约束

创建域时可使用CHECK语句。

```sql
CREATE DOMAIN COLOR CHAR(6) DEFAULT '???'
	CONSTRAINT VALID_COLORS
		CHECK (VALUE IN
               ('Red','Yellow','Blue','Green','???');
```

#### 2.基本表约束

在创建基本表时添加约束。

有3中形式：候选键定义、外键定义和”检查约束“定义。

#### 3.断言

如果完整性约束牵涉面较广，与多个关系有关，或者与聚合操作有关，可以使用断言(Assertions)让用户书写完整性约束。

```sql
CREATE ASSERTION <断言名> CHECK(<条件>)
DROP ASSERTION <断言名>
```

## 7.5 数据库的安全性

### 权限问题

> 用户(或应用程序)使用数据库的方式称为"权限"(Authorization)。

访问数据的权限：

+ 读(Read)权限
+ 插入(Insert)权限
+ 修改(Update)权限
+ 删除(Delete)权限

修改数据库模式的权限：

+ 索引(Index)权限
+ 资源(Resourse)权限
+ 修改(Alteration)权限
+ 撤销(Drop)权限

SQL定义了6类权限:

SELECT INSERT DELETE UPDATE REFERENCES USAGE

授权语句:

```sql
GRANT <权限表> ON <数据库元素> TO <用户名表> [WITH GRANT OPTION]
```


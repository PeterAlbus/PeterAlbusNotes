*written by PeterAlbus，Copyright © 2021 - SHOU 1951123 Hong Wu*

# 第二章 MATLAB入门

+ 变量
+ 特殊变量：ans pi eps flops inf NaN ...
+ 数学符号：+ - * / .*(点乘) ./(点除) ^(幂) \\(左除)

+ 数学函数：sin abs sqrt ...
+ 函数m文件、脚本m文件

### 2.3 数组与矩阵

#### 2.3.1 数组

##### 1.数组的建立

```matlab
x=[a b c d e] %创建包含指定元素的行向量
x=first:last %创建从first开始，加1计数，到last结束的行向量
x=first:increment:last %创建从first开始，加increment计数，到last结束的行向量
linspace(first,last,n) %创建从first开始，到last结束，有n个元素的行向量
```

##### 2.数组的访问

+ 使用下标访问一个元素：`x(i)`

+ 访问一块元素：

  `x(a,b,c)`表示访问数组x的从第a个开始，以步长为b到第c个元素(不超过c)，b可以为负数，缺省时为一

  ```matlab
  x=[1 2 3 4 5 6 7 8 9 10];
  y=x(2:2:11),z=x(10:-3:1);
  y=2 4 6 8 10
  x=10 7 4 1
  ```

+ 直接使用元素编址序号，x([a b c d])表示提取x的第a,b,c,d个元素构成一个新的元组[x(a) x(b) x(c) x(d)]。

##### 3.数组的方向

先前例子中的数组都是一行数列，以行方向分布，称之为行向量。数组也可以是列向量。

产生列向量可以以两种方式，直接产生和转置产生。

```matlab
c=[1;2;3;4];
b=c';
```

> 以空格或逗号分隔的元素指定的时不同列的元素，以分号分隔的元素指定的是不同行的元素。
>
> 当数组b是复数时，转置(b')产生的是复数共轭转置，而点-转置(b.‘)只对数组进行转置，而不进行共轭。对实数来说两者等价。

```matlab
>> b=[1+2i 4-9i]

b =

   1.0000 + 2.0000i   4.0000 - 9.0000i

>> b'

ans =

   1.0000 - 2.0000i
   4.0000 + 9.0000i

>> b.'

ans =

   1.0000 + 2.0000i
   4.0000 - 9.0000i
```

##### 4.数组的运算

+ 数组对标量的运算是数组的每个元素对该标量施加相应的运算。
+ 当两个数组有相同维数时，加减乘除幂运算可按照元素对元素方式进行，不同维数不可运算。

#### 2.3.2 矩阵

##### 1.矩阵的建立

数组可以是一个行向量或一个列向量，也可以是具有几个行或列的矩阵形式。矩阵的创建遵循行向量和列向量的模式。

##### 2.矩阵中元素的操作

+ 矩阵A中的第r行：`A(r,:);`
+ 矩阵A中的第r列：`A(:,r);`
+ 依次提取矩阵A的每一列，将A拉伸为一个列向量：`A(:);`
+ 取矩阵的第i1到i2行，j1到j2列，构成新矩阵：`A(i1:i2,j1:j2);`
+ 逆序提取矩阵A的第i1到i2行：`A(i2:-1:i1,:);`
+ 逆序提取矩阵A的第j1到j2列：`A(:,j2:-1:j1);`

+ 删除i1到i2行/j1到j2列：`A(i1:i2,:)=[];A(:,j1:j2)=[]`
+ 将矩阵A和B拼接成新矩阵：`[A B]`或`[A;B]`

##### 3.矩阵的运算

+ 矩阵加法：A+B
+ 矩阵乘法：A*B
+ 方阵的行列式：det(A)
+ 方阵的逆：inv(a)
+ 方阵的特征值与特征向量：[V,D]=eig(A)

### 2.5 MATLAB作图

#### 2.5.1 二维图形

二维图形即平面曲线图形，MATLAB提供了画曲线的函数。

##### 1.曲线图

MATLAB作图是通过描点-连线实现，要画一个曲线图形，必须先取得该图形上一系列点的坐标，将坐标传给MATLAB函数。

```matlab
plot(X,Y,S);
plot(X,Y);
plot(X,Y1,S1,X,Y2,S2,...,X,Yn,Sn);
```

X,Y是向量，分别表示点集的横坐标和纵坐标。

S表示描绘点集的线形，如y表示黄色，-表示实线等。

第三条命令表示将多条线画在一起。

##### 2.符号函数画图

符号函数画图可通过ezplot或fplot函数实现。

```matlab
ezplot(f) %在默认区间[-2Π,2Π]上绘制f=f(x)的图形
explot(f,[a,b]) %[a,b]上绘制f=f(x)的图形
ezplot(f,[xmin,xmax,ymin,ymax]) %区间上绘制隐函数f(x,y)=0的图形
ezplot(x,y,[tmin,tmax]) %在区间上绘制x=x(t),y=y(t)的图形
```

##### 3.极坐标图

```matlab
polar(theta,rho,S);
%例
theta=linspace(0,2*pi);
rho=sin(2*theta).*cos(2*theata);
polar(theta,rho,'g')
```

#### 2.5.2 三维图形

##### 1.三维曲线

```matlab
plot3(x,y,z,S) %1条曲线
plot3(X,Y,Z) %多条曲线，X,Y,Z都是矩阵，每一列表示一条曲线
```

##### 2.空间曲面

```matlab
surf(X,Y,Z) %描点，画成曲面
mesh(X,Y,Z) %描点，画成网格图
```

#### 2.5.3 处理图形

##### 6.散点图

```
scatter(X,Y,S,C) %二维
scatter3(X,Y,Z,S,C) %三维
```

##### 7.等值线图

```matlab
contour(x,y,z,n)
contour(x,y,z,n)
%n表示等值线条数
```

---

# 第三章 线性规划

> 优化问题，一般是指用“最好”的方式，使用或分配有限的资源，即劳动力、原材料、机器、资金等，使得费用最小或利润最大。
>
> 建立优化问题的数学模型，首先要确定问题的决策变量x(n维向量)，然后构造模型的目标函数和x的允许取值范围。允许取值范围一般称为约束条件。

一般优化模型可表示为下列形式:
$$
\min \limits _x z=f(x) \\
s.t. g_i(x) \leq 0 (i=1,2,\ldots,m)
$$
如果目标函数和约束条件都是线性函数，那么该模型称为线性规划。

决策变量、目标函数和约束条件构成了线性规划的3个基本要素。

### 3.1 线性规划模型

建立线性规划模型的三个步骤：

+ 找出待定的未知变量(决策变量)。并用代数符号表示它们。
+ 找出问题中所有的限制或约束，写出未知变量的线性方程或线性不等式。
+ 找到模型的目标或判据，写出决策变量的线性函数，以便求出其最大值或最小值。

### 3.2 线性规划实例及编程求解

#### 3.2.1 用MATLAB优化工具箱求解线性规划

用MATLAB软件求解线性规划的命令如下：

```matlab
x=linprog(c,A,b)
x=linprog(c,A,b,Aeq,beq)
x=linprog(c,A,b,Aeq,beq,vlb,vub)
x=linprog(c,A,b,Aeq,beq,vlb,vub,x0)
[x,fval]=linprog(...)
```

P33 例1

linprog只能求解极小化模型，需把极大化转换为极小化：方法：目标函数中参数取负

---

# 第四章 非线性规划

优化模型中，目标函数或约束条件中至少有一个是非线性函数时的最优化问题叫做非线性规划问题。

### 4.2 非线性规划实例及编程求解

非线性规划的标准型：
$$
\min F(X) \\
s.t.\begin{align*}
\begin{split}
\left \{
\begin{array}{ll}
    AX<B, \\
    Aeq \cdot X=beq,\\
    G(X)=0,\\
    Ceq(X)=0,\\
    VLB \leq X \leq VUB
\end{array}
\right.
\end{split}
\end{align*}
$$


+ 首先建立M文件func.m定义目标函数F(X):

  ```matlab
  function f=fun(x)
  f=F(x);
  ```

  

+ 若约束条件中有非线性约束，则建立nonlcon.m定义函数G(X)与Ceq(X)：

  ```matlab
  function [G,Ceq]=nonlcon(X)
  G=...
  Ceq=...
  ```

+ 建立主程序，非线性规划的求解的函数是fmincon，命令的基本格式如下：

  ```matlab
  x=fmincon('fun',X0,A,b)
  x=fmincon('fun',X0,A,b,Aeq,beq)
  x=fmincon('fun',X0,A,b,Aeq,beq,VLB,VUB)
  x=fmincon('fun',X0,A,b,Aeq,beq,VLB,VUB,'nonlcon')
  x=fmincon('fun',X0,A,b,Aeq,beq,VLB,VUB,'nonlcon',options)
  [x,fval,exitflag,output]=fmincon(...)
  ```
  
  

p53例1

---

# 第五章 网络优化

### 5.1 图论的基本概念

#### 5.1.2 图的矩阵表示

+ 关联矩阵：顶点-边
+ 邻接矩阵：顶点-顶点

### 5.2 最短路问题及其算法

+ Dijkstra
+ Floyd

### 5.5 中国邮递员问题

寻找最佳巡回

**欧拉图**：存在欧拉巡回(经过每条边至少一次的巡回)的图。

+ 若图是欧拉图：每个欧拉巡回都是最佳巡回。

+ 若图不是欧拉图：引入重复边，使其成为欧拉图
  + 正好有两个奇次顶点：寻找两个奇次顶点的最短路径，加入原图成为欧拉图
  + 2n个奇次顶点：将奇次顶点配对，要求最佳配对。

### 5.7 最小生成树问题

+ Kruskal
+ Prim

---

# 第六章 微分方程与差分方程

建立微分方程模型

+ 根据规律建模
+ 微元法建模
+ 模拟近似法建模

**P118例1** 变化率->导数->微分方程求解

### 6.3 MATLAB解微分方程

+ 解析解：dsolve
+ 数值解：ode45,ode23,ode113,ode15s,ode23s

### 6.4 差分方程模型及其解法

差分方程也叫递推关系

通常需求差分方程的特征方程。

---

# 第七章 插值与拟合

**插值**：给定一批数据点，确定满足特定要求的曲线或曲面，求曲线或曲面通过的所有点，

**拟合**：如果不要求曲线通过所有点，而是能反映对象的整体变化趋势，得到简单实用的近似函数，就是数据拟合。

### 7.2 用MATLAB解插值问题

#### 7.2.1 一维插值

```matlab
Interpl(x,y,cx,'method')
method：
'linear' %线性插值
'spline' %三次样条插值
'cubic' %三次插值
'nearest' %最近邻点插值

hours=1:12;
temps=[5 8 9 15 25 29 31 30 22 25 27 24];
T=interpl(hours,temps,[3.2 6.5 7.1 11.7],'spline');
T=9.6734 30.0427 31.1755 25.3820
```

#### 7.2.3 三维插值

P162 例

`griddata(x,y,z,cx,cy,'cubic');`

### 7.4 用MATLAB解曲线拟合问题

多项式拟合：

```matlab
A=polyfit(x,y,m);
y=polyval(A,x); %多项式在x处的值
```

P167 例1

---

# 第八章 数据的统计描述

p183 底部

### 8.5 MATLAB数据统计

#### 8.5.1 MATLAB中大量数据的读取与输出

```matlab
f=fopen('filename','mode');
A=xlsread('data.xls','a1:c5');
xlsread(filename,sheetname,range);
```

#### 8.5.2 基本统计量

+ 均值 mean(x)
+ 中位数 median(x)
+ 标准差 std(x)
+ 方差 var(x)
+ 偏度 skewness(x)
+ 峰度 kurtosis(x)

#### 8.5.3 常见概率分布的函数

八个分布：

+ 正态分布 norm
+ 指数分布 exp
+ 泊松分布 poiss
+ β分布 beta
+ 韦布尔分布 wbl
+ 卡方分布 chi2
+ t分布 t
+ f分布 f

五类函数

+ 概率密度 pdf
+ 概率分布 cdf
+ 逆概率分布 inv
+ 均值与方差 stat
+ 随机数生成 rnd

某一种分布的某一种函数，将上方两者拼接，如normcdf

P203-204

#### 8.5.5 参数估计

P205-206例7 置信区间、假设检验

---

# 第九章 统计分析

+ 回归分析命令

  regress

  `[b,bint,r,rint,status]=regress(Y,X,alpha)`

+ 聚类分析：六个MATLAB函数(P238例1)
  + pdist
  + squareform
  + linkage
  + dendrogram
  + cophenet
  + cluster

+ 判别分析

+ 主成分分析(p251)

  + 标准化
  + 相关系数、特征值、特征向量
  + 计算贡献率
  + 累计贡献率
  + 主成分载荷，归一化

  若计算前两个主成分，如何简化
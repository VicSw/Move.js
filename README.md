# Move.js
v.1
==================
Move(obj,attr,iTaget,speed);<br>
obj:传入对象；类型:object<br>
attr:传入运动属性：width,height,opacity；类型string<br>
iTaget:传入变化的目标值；类型int<br>
speed:传入变化的速度。类型int；<br>


v.2
====================
Move(obj,attr,iTaget,speed,fn);<br>
obj:传入对象；类型:object<br>
attr:传入运动属性：width,height,opacity；类型string<br>
iTaget:传入变化的目标值；类型int<br>
speed:传入变化的速度。类型int；<br>
fn:回调函数。<br>

v.3
======================
修改方法参数；合并attr,iTaget为json格式，更为灵活多样。达到多属性同时发生变化效果；<br>
Move(obj,json,speed);<br>
obj:传入对象；类型:object<br>
json:传入运动属性与目标值的json对象；<br>
speed:传入变化的速度。类型int；<br>

v.4
=============================
修改bug:设立flag标杆值，判断是否所有元素都完成了运动再进行关闭定时器；



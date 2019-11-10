# JQuery #

### 与window.onload相似 ###
$(window).load(function(){
})

$(document).ready(function(){
    //
});
==>简写
$(function(){
    //
})

//与window.onload的区别：
1. 执行时间：onload等到页面包括图片所有元素加载完毕;ready DOM结构加载完毕则执行
2. 编写个数：onload多个时,只执行最后一个;ready无限制。
3. 简写，如上;

### Element Selector ###
$("p");
$(".class");
$("#id");
$("*");
$("this")
.hide()  //隐藏方法

### Event ###
Mouse Event         keyboard Event          Document/Window Events
click               keypress                load
dblclick            keydown                 resize
mouseenter          keyup                   scroll
mouserleave                                 unload

on()方法：
$("p").on(event,function(){});
或
$("p").on({
    event1:function(){}
    event2:function(){}
    event3:function(){}
})

### JQuery效果 ###
hide(speed,callback)隐藏
show(speed,callback)显示
callback完成hide/show后执行

toggle(speed,callback)用于切换hide/show

fadeIn(speed,callback)
fadeOut(speed,callback)
fadeTo(speed,opacity,callback);

[代码示例](https://hhtrookie.github.io/Record/JQuery相关效果/hide.html)  

### animate()创建自定义动画 ###

animate({params},speed,callback);
* 默认情况下,所有HTML元素的位置都是静态的。通过position改变位置情况。
[代码示例](https://hhtrookie.github.io/Record/JQuery相关效果/animate.html)  

相对值:+= px -= px;

预设值动画（预设即目标）show hide toggle

队列:多个animate();

stop(stopAll,goToEnd);
可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
因此，默认地，stop() 会清除在被选元素上指定的当前动画。

### JQuery HTML ###
text() - 设置或返回所选元素的文本内容
html() - 设置或返回所选元素的内容,包括HTML标签
val() - 设置或返回表单字段的值

attr - 获取属性;// JS可以对象获取;getAttrtibute();setAttribute('属性',value)
设置多个属性  
attr({  
    "href" : "http://www.w3school.com.cn/jquery",
    "title" : "W3School jQuery Tutorial"
});  

添加方法  --html标签
append() - 在被选元素的结尾插入内容
prepend() - 在备选元素的开头插入内容  ---标签内
after() - 在被选元素之后插入内容
before() - 在被选元素之前插入内容   ---标签前后

删除方法 
remove() - 删除被选元素(以及其子元素)
empty() - 从被选元素中删除子元素
过滤被删除的元素 - 需要删除的元素作为参数

操作CSS
addClass() - 向被选元素添加一个或多个类
removeClass() - 从被选元素删除一个或多个类
toggleClass() - 对被选元素进行添加/删除类的切换操作  //等价add/remove
css() - 设置或返回样式属性

尺寸
width:宽度  
height:高度  
innerWidth:width + padding;  
innerHeight:height + padding;  
outerWidth:width + padding + border;  
outerHeight:height + padding +border;  

### 遍历元素 ###
parent() 返回每个元素的上一级父元素;  
parents() 返回每个元素的所有父级元素; //parents(args)元素过滤,元素作为参数;  
parentsUntil() 返回两个给定元素之间的元素;//eg:('span').parentsUntil('div'); span与div之间的元素;

children() 返回元素的下一级子元素; // 存在过滤参数  
find(arg) 返回所选元素中的下级元素,arg必填;// 选中所有子元素为find('*');   

siblings() 返回所选元素的所有同胞元素;//过滤参数  
next() 返回所选元素的下一个同胞元素  ---prev()  
nextAll() 返回所选元素         ----prevAll()  
nextUntil 返回两个元素之间的同胞元素    ----prevUntil()  

first() 返回被选元素的首个元素 --等价于[0];eg.$("div p").first();首个div元素内部首个p元素;  
last() 返回被选元素的最后一个元素 --同上  
eq(index) 返回被选元素中带有指定索引号的元素;  

filter 返回符合匹配标准的元素;filter('*'),返回所有元素  
not() 与filter相反;  

### AJAX ###
在不重载整个网页的情况下,AJAX通过后台加载数据,并在网页上显示.

load(URL,data,callback); 从服务器加载数据;  
load("demo_test.txt",function(responseTxt,statusTxt,xhr){})  

$.get(url,callback)  
$.post(url,data,callback)    
//  
eg.$.post("demo_test_post.asp",    
  {  
    name:"Donald Duck",  
    city:"Duckburg"  
  },   
  function(data,status){  
    alert("Data: " + data + "\nStatus: " + status);  
  });  
  
  $.noConflict(); //释放$标识符的控制  
  var jq = $.noConflict(); //返回对jQuery的引用  




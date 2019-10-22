# css中的@import和link的区别 #

#### @import示例 ####
<style type="text/css">@import url(path/css.css);</style>

#### link示例 ####
<link href="path/css.css" rel="stylesheet" type="text/css">

- ### 属性不同 ###
link是html提供的标签，不仅可以加载css文件，还能定义rss,rel连接属性等。
而@import是css中的语法规则

- ### 加载顺序不同 ###
页面打开时，link引用的css文件被加载，而@import的css等页面加载完毕后再加载

- ### 兼容性 ###
@import是css2.1的内容

- ### DOM控制性 ###
js操作DOM @import不可被dom控制




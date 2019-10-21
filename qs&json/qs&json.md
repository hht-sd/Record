#  qs.parse()、qs.stringify()、JSON.stringify()、JSON.parse()的用法以及区别#

- qs是一个npm仓库所管理的包，可通过npm install qs命令进行安装
- qs.stringify()将对象序列化成URL的形式，以&进行拼接。
- qs.parse()将URL解析成对象的形式。
- JSON.stringify()是正常类型的JSON。
- JSON.parse()将JSON(本质是一个字符串)转化为对象。

### 用法示例 ###

#### qs.parse ####

把一段格式化的字符串转化为对象格式
eg.
var url = "http://hhtsn.com?x=20&name=hht";
var obj = qs.parse(url.split('?')[1]);

obj的结果
obj={x:'20',name="hht"};

#### qs.stringify ####

把对象格式化为字符串
eg.
var obj = {x:'20',name:'hht'};
qs.stringify(obj);

结果
'x=20&name=hht'

指定数组编码格式
let params = [1, 2, 3];

// indices(默认)
qs.stringify({a: params}, {
    arrayFormat: 'indices'
})
// 结果是
'a[0]=1&a[1]=2&a[2]=3'

// brackets 
qs.stringify({a: params}, {
    arrayFormat: 'brackets'
})
// 结果是
'a[]=1&a[]=2&a[]=3'

// repeat
qs.stringify({a: params}, {
    arrayFormat: 'repeat'
})
// 结果是
'a=1&a=2&a=3'

处理json格式的参数
在默认情况下，json格式的参数会用 [] 方式编码，

let json = { a: { b: { c: 'd', e: 'f' } } };

qs.stringify(json);
//结果 'a[b][c]=d&a[b][e]=f'
但是某些服务端框架，并不能很好的处理这种格式，所以需要转为下面的格式

qs.stringify(json, {allowDots: true});
//结果 'a.b.c=d&a.b.e=f'


### JSON.stringify()将对象转化为JSON字符串 ###
eg.
var obj = {x:'20',name:'hht'}
JSON.stringify(obj);

结果
obj="{"x":"20","name":"hht"}"

### JSON.parase()将JSON格式转化为对象 ###
eg.
var obj = {"x":"20","name":"hht};
JSON.parse(obj)

结果
obj={x:'20',name:'hht'};

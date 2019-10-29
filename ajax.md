# Ajax是什么 #
Ajax是一种技术方案,但并不是一种新技术。它依赖现有的CSS/HTML/JavaScript,而其中最核心的依赖是浏览器提供的XMLHttpRequest对象,是这个对象使得浏览器可以发出HTTP请求与接收HTTP响应。实现了在页面不刷新个情况下和服务器进行数据交互。

### Ajax的实现 ###
1.生成一个XMLHttpRequest对象
2.初始化一个请求
3.发送

var xhr = new XMLHttpRequest();
xhr.open('GET','/url',true);    //true:异步的方式  false:同步的方式
xhr.send();
//监听数据,内部数据到了会触发load
xhr.addEventListener('load',function(){
    //200到300都是请求数据成功的
    //304重定向(缓存)
    if(xhr.status >=200 && xhr.status<300 || xhr.status ===304){
    var data = xhr.responseText
    console.log(data)
    }else{
        console.log('error');
    }
})
//当内部出现错误的时候执行(可选)
xhr.onerror = function(){
    console.log('error');
}
//当请求超时时(可选)
xhr.ontimeout = function(){console.log(请求超时)}
xhr.upload.onprogress = function(e){
    //如果是上传文件,可以获取上传进度
}

### 另一种写法：###
var xhr = new XMLHttpRequest()
xhr.open('GET','url',true)
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status>200 && xhr.status<300 || xhr.status === 304){
            console.log(xhr.responseText);
        }else{
            console.log('服务器异常');
        }
    }
}
xhr.onerror = function(){
    console.log('服务器异常')
}
xhr.send();

### POST写法 ###
//post数据放到send里面
eg.
xhr.send('username=hht&password=123456');

readyState ： 交互流程（1，2，3，4）
0 － （未初始化）还没有调用send()方法
1 － （载入）已调用send()方法，正在发送请求
2 － （载入完成）send()方法执行完成，已经接收到全部响应内容
3 － （交互）正在解析响应内容
4 － （完成）响应内容解析完成，可以在客户端调用了

### AJAX封装 ###
function ajax(opts){
    var url = opts.url //请求地址
    var type = opts.type || 'GET' //请求类型。默认GET
    var dataType = opts.dataType || 'json' //返回的数据类型。默认json
    var onsuccess = opts.onsuccess || function(){} //请求成功后
    var onerror = opts.onerror || function(){} //失败之后
    var data = opts.data || {} //如果用户传递数据了就选用户的，默认空
    //处理把用户传递的参数。如：用户名、密码等。
    var dataStr = []
    for(var key in data){
        dataStr.push(key + '=' + data[key])
    }
    dataStr = dataStr.join('&')
    
    // 如果类型===GET,那么用户的地址？dataStr  
    // 比如：http://api.test.com/weather.php?city=广州
    if(type === 'GET'){
        url += '?' + dataStr
    }
    //以下跟前面的“常见的Ajax用法”的解释差不多 
    var xhr = new XMLHttpRequest()
    xhr.open(type, url, true)
    xhr.onload = function(){
        if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            //成功了
            if(dataType === 'json'){
                onsuccess( JSON.parse(xhr.responseText))
            }else{
                onsuccess( xhr.responseText)
            }
        } else {
            onerror()
        }
    }
    // 假设断网了
    xhr.onerror = onerror
    // 如果类型是POST
    if(type === 'POST'){
      // POST要在send中传递数据
        xhr.send(dataStr)
    }else{
      // GET直接调用
        xhr.send()
    }
}
//ajax通过传入对象进行配置参数;(jquery封装)

### XmlHttpRequest兼容性 ###
* var xml=new ActiveXObject("Microsoft.XMLHTTP");创建XMLHttpRequest 对象（这是在IE7以前的版本中）；
* 在较新的IE版本中可以利用 var xml=new ActiveXObject("Msxml2.XMLHTTP")的形式创建XMLHttpRequest对象;
* 而在IE7及非IE浏览器中可以利用var xml=new XMLHttpRequest()创建XMLHttpRequest对象。

## jquery中ajax方法参数 ##

1.url：
发送请求的地址;参数类型:String;
2.type:
请求方式post或get;参数类型：String;
3.timeout
设置请求超时时间。此设置将覆盖$.ajaxSetup()方法的全局设置;参数类型:Number
4.async
true为异步请求,false为同步请求。(同步请求锁定浏览器,用户等待请求完成才可以进行其他操作);参数类型：boolean;
5.cache
默认为true(当dataType为Script时,默认为false),设置false将不会从浏览器缓存中加载请求信息。
6.data
请求参数；参数为Object或String
7.dataType
预期服务器返回的数据类型;如果不指定,JQuery将自动根据http包mime信息返回responseXml或respinseText，并作为回调函数参数传递。可用的类型如下：
xml：返回XML文档，可用JQuery处理。
html：返回纯文本HTML信息；包含的script标签会在插入DOM时执行。
script：返回纯文本JavaScript代码。不会自动缓存结果。除非设置了cache参数。注意在远程请求时（不在同一个域下），所有post请求都将转为get请求。
json：返回JSON数据。
jsonp：JSONP格式。使用SONP形式调用函数时，例如myurl?callback=?，JQuery将自动替换后一个“?”为正确的函数名，以执行回调函数。
text：返回纯文本字符串。
8.beforeSend
发送请求前可以修改XMLHttpRequest对象的函数,例如添加自定义HTTP头。在beforeSend中如果返回false可以取消本次ajax请求。XMLHttpRequest对象是唯一的餐宿。
    function(XMLHttpRequest){
        this;//调用本次ajax请求时传递的options参数
    }
9.complete
要求为Function类型的参数,请求完成后调用回调函数(请求成功或失败均调用)
    function(XMLHttpRequest,textStatus){
        this; //调用本次ajax请求时传递的options参数
    }
10.success
要求为Function类型的参数,请求成功后调用的回调函数,有两个参数
    1)请求完成的数据
    2)描述状态的字符串
11.error
要求为Function类型的参数,请求失败时被调用的函数。有3个参数。
XMLHttpRequest对象、错误信息、捕获的错误对象(可选)。
    function(XMLHttpRequest,textStatus,errorThrown){
        //通常情况下textStatus和errorThrown只有其中一个包含信息
        this;//调用本次ajax请求时传递的options参数
    }
12.contentType:
当发送信息至服务器时，内容编码类型默认为"application/x-www-form-urlencoded";
参数类型：String;

13.xhr: function() {
            var xhr = new XMLHttpRequest();
            //使用XMLHttpRequest.upload监听上传过程，注册progress事件，打印回调函数中的event事件
            xhr.upload.addEventListener('progress', function (e) {
                console.log(e);
                //loaded代表上传了多少
                //total代表总数为多少
                var progressRate = (e.loaded / e.total) * 100 + '%';

                //通过设置进度条的宽度达到效果
                $('.progress > div').css('width', progressRate);
            })

            return xhr;
        }


* FormData 是XMLHttpRequest提供的一个新的接口，主要优点是可以异步上传二进制文件

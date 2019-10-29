var arr = [];
for (var i = 0; i < 10; i++) {
    arr[i] = function() {
        console.log(i);
        return i;
    }
}
console.log(arr[3]()); //10

//函数作用域

var array = [];
for (var i = 0; i < 10; i++) {
    array[i] = (function(i) {
        return function() {
            return i;
        }
    })(i);
}
console.log(array[3]()); //3


function closure(num) {
    var num = num;
    return function A() {
        num++;
        return num;
    }
}

var a = closure(1); // a = function A
console.log(a);
a(); //2
a(); //3
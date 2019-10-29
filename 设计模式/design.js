//工厂模式
function Person() {
    this.name = 'Person';
}

function Animal() {
    this.name = 'Animal';
}

function Factory() {}

Factory.prototype.getInstance = function(className) {
    return eval('new ' + className + '()');
}

var factory = new Factory();

var obj1 = factory.getInstance('Person');
var obj2 = factory.getInstance('Animal');

console.log(obj1.name);
console.log(obj2.name);

//观察者模式
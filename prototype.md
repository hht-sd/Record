# 原型与原型链 #


### prototype ###
>  每个构造函数(constructor)都有一个原型对象(prototype),原型对象都有一个指向构造函数的指针；
   而实例(instance)都包含一个指向原型对象的内部指针;

>  如果引用实例(instance)中某个属性,会首先再该对象内部寻找该属性，如果找不到，就会在该对象的     原型(instance.prototype)里找这个属性;

constructor.prototype = instance2;

隐式原型__proto__: 指向创建该对象实例的对象的原型；

instance1.__proto__ = constructor.prototype;

Object.protype;

* 对象并不具有prototype属性，只有函数才有prototype属性。
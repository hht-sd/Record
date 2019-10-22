# 未引入ES6 Class方式#

### 使用function 模拟Class ###

function Student(initName){
    this.name = initName;
}

Student.prototype.printName = function(){
    console.log(this.name);
}

创建实例
var stu1 = new Student('hht');
stu1.printName();

### 使用Class(ES6) ###

class Student{
    constructor(initName){
        this.name = initName
    }

    printName(){
        return console.log(this.name)
    }
}

var stu2 = new Student('ht');
stu2.printName()
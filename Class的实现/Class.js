function Student(initName) {
    this.name = initName;
}
Student.prototype.printName = function() {
        console.log(this.name);
    }
    //创建实例
var stu1 = new Student('hht');
stu1.printName();


class Student1 {
    constructor(initName) {
        this.name = initName
    }

    printName() {
        return console.log(this.name)
    }
}

var stu2 = new Student1('ht');
stu2.printName()
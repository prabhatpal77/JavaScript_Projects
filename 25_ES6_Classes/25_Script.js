// Class in ES6 javascript..
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

// Getter
get area() {
    return this.calcArea();
}
// Method
calcArea() {
    return this.height * this.width;
}
}
const square = new Rectangle(10, 10);
console.log(square.area); //100

// Classes can also contains a static methods as follows,
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2)); //7.071067811654755

// Inharitance
// Person class
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Instance method
    print() {
        console.log(`FirstName : ${this.firstName}
        LastName : ${this.lastName}
        Age : ${this.age}`);
    } 
    // Static method 
    static getDate() {
        console.log(new Date());
    }
}
class Employee extends Person{
    constructor(firstName, lastName, age, designation){
        super(firstName, lastName, age);
        this.designation = designation;
    }
    print(){
        console.log(`FirstName : ${this.firstName}
        LastName : ${this.age}
        Designation : ${this.designation}`);
    }
}
let employee = new Employee('John', 'Wilson', 35, 'Manager');
employee.print();
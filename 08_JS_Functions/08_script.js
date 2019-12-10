/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/
// Function definition
function greet(){
  console.log(' I am a no-param function ');
}
// function Execution 
greet();

// function with parameters
function greetArgs(name){
  console.log(`Good morning ${name}`);
}
greetArgs('John');

// Executing a function with less number of parameters
function lessArgs(name, age){
  var output = " Your name is : " + name + " age : " +age;
  console.log(output); // your name is : Prabhat age : 24
}
lessArgs("Prabaht");

//Executing a function with more number of parameters
function greetMoreArgs(name, age, designation){
  console.log(`Name : ${name}
                Age: ${age}
                Designation : ${designation}`);
}
greetMoreArgs('John', 40, 'Manager');

// Function with return values
let employeeObj1 = {
  name : 'Williams',
  age : 35,
  designation : 'Tech Lead'
};
function printEmployee(employee){
  let theMsg = `Emp Name : ${employee.name}
                Emp Age : ${employee.age}
                Emp Desg : ${employee.designation}`;
  return theMsg;
}
let theMsg = printEmployee(employeeObj1);
console.log(theMsg);

// Function with Empty return 
// As the specified the above function if we are trying to capture the empty return then the captured value contains the value undefined.

// Function expression
var greetMe =function greet(){
  var output = "Good morning";
  console.log(output); //Good morning
};
//function execution
greetMe();

// Function with object as a parameter
function greetEmployee(employee){
  console.log(`Name : ${employee.name}
  Age : ${employee.age}
  Designation : ${employee.designation}`);
}
let employeeObj = {
  name : 'Williams',
  age : 35,
  designation : 'Tech Lead'
};
greetEmployee(employeeObj);

// Anonymous function expression
let wishMsg = function () {
  return "Good Evening";
};
let wish = wishMsg();
console.log(wish);

// Anonymous function expression with arguement
var anonymousFnArgs =  function (name) {
  var output = "good evening " + name;
  console.log(output);
};
// function execution
anonymousFnArgs("Prabhat");

// Function as arguement without arguements
function greetMe1(){
  var output = "Good Evening 1";
  console.log(output);
}
function greetMe2(){
  var output = "Good Morning 2";
  console.log(output);
}
function greeter(fnName) { // function as args
  fnName(); //calling the function
}
greeter(greetMe2); // Good evening 2
greeter(greetMe1); // Good evening 1

// Function as arguments with arguements
function greetHim1(name){
  var output = "Good Evening " + name;
  console.log(output);
}
function greetHim2(name){
  var output = "Good Evening " + name;
  console.log(output);
}
function greeterEngine(fnName, name){
  fnName(name);
}
greeterEngine(greetHim1, "Prabhat"); // Good evening naveen
greeterEngine(greetHim2, "John"); // Good evening john

// Function inside an object
let student = {
  firstName : 'Arjun',
  lastName : 'Pal',
  fullName : function() {
    return `${this.firstName} ${this.lastName}` ;
  }
};
let theStudent = student.fullName();
console.log(theStudent);

// Function inside another function nested functions
let outerFn = () => {
  console.log('I am from Outer fn');
  let innerFn = () => {
    console.log('I am from Inner Fn');
  };
  innerFn();
};
outerFn();


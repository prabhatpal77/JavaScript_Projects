/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/
// Create an object
let fridge = {};
console.log(fridge);
// Add properties to an objects even after creation objects at runtime as follows,
var employee = {};
employee.firstName = "Prabhat";
employee.lastName = "Pal";
employee.designation = "Hacker";
console.log(employee);
// Object Literal
let mobile = {
  brand : 'Apple',
  color : 'Silver',
  RAM : '16GB',
  isInsured : true
};
console.log(mobile);
// Using Dot notation syn- ObjectName.proprtyName;
//Access the properties of an object
console.log(`Brand : ${mobile.brand}`);
console.log(`Brand : ${mobile['brand']}`);
// Brackets Notation
// Syn- ObjectName["proprtyName"];
// Access the properties of an object
console.log(`Brand : ${mobile.brand}`);
console.log(`Brand : ${mobile['brand']}`);
// Access non existing property
console.log(`Non_Prop : ${mobile.price}`);
// Nested Objects
let student = {
  name : 'Rajan',
  age : 25,
  course : 'Engineering',
  address : {
    city : 'Hyderabad',
    state : 'TS',
    country : 'India'
  }
};
console.log(student);
console.log(student.address);
// Access nested obj properties
console.log(`City : ${student.address.city}`);
// JSON Functions
let employee2 = {
  name : 'John',
  age : 40,
  designation : 'Manager',
  company : 'GrayCodes'
};
// Convert Object => String 
let empStr = JSON.stringify(employee);
console.log(empStr);
// Convert String => Object
let someStr = '{"name" : "John", "age" : 40, "designation" : "Manager", "company":"GrayCodes"}';
let theObj = JSON.parse(someStr);
console.log(theObj);
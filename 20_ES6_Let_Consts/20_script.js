// ES6 Let and Const keywords
// From ES6 version onwards, let keyword is use to declare varibles like strings, objects, arrays, and functions
let empName = 'John';
empName = 'Wilson'
console.log(empName); // Wilson
// We can reassign the value of a variable which is declared with 'let' but the reassignment is not possible for 'const'.
const appName = 'JS_APP';
appName = 'TS_App'; // TypeError: invalid assignment to const 'appName'.
console.log(appName);
// Let's understand the 'const' with the object.
const employee = {
    name : 'John',
    age : 40
};
employee.name = 'Wilson'; // Valid
employee = {}; // Invalid
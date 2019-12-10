// ES6 De-structuring
// De-structuring is the concept to retrive a partial data from an object. We can de-structure any data structure like object and array.
let employee = {
    name : 'John',
    age : 40, 
    salary : 80000,
    address : {
        company : 'Google',
        location : 'Hyderabad'
    }
};
// Destructuring
let {name, age, salary} = employee;
console.log(`Name : ${name} Age : ${age} Salary : ${salary}`);

// Destructuring
let {company} = employee.address;
console.log(`Company : ${company}`);

//Swap two variables using destructuring.
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(`a : ${a} b: ${b}`);
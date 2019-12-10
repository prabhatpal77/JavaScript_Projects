// From ES6 we have feature to declare a function with a shortcut format using an arrow function.
// Normal function 1
let greet = function() {
    console.log('Good morning from normal fn 1');
};
greet();

// Function expression
let greetExp = function() {
    console.log('I am from function expression');
};
greetExp();

// Arrow function 1
let greetMe = () => {
    console.log('I am from Arrow function 1');
};
greetMe();

// Arrow function 2
let wishMe = (name) => {
    console.log(`Good Morning ${name}`);
};
wishMe('Prabhat');

// Arrow function 3
let printMe = (name, age) => {
    let msg = `Hello Mr.${name} You are just ${age} Yrs old`;
    return msg;
};
let theMsg = printMe('Williams', 95);
console.log(theMsg);

// Use arrow function to loop through an array
let output = ' ';
let cars = ['BMW','Audi','Tata','Ducati','Lambo'];
cars.forEach((car) => {
    output += `${car.toUpperCase()} `;
});
console.log(output);
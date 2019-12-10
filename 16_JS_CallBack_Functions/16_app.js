// JS Callback function
// Callbacks are a great way to hanlde something after something else has been completed. 
// add() function is called with arguments a, b
// and callback, callback will be executed just
// after ending of add() function
function add(a, b, callback){
    document.write(`The sum of ${a} and ${b} is ${a+b} ` + "<br>");
    callback();
}

// disp() function is called just
// after the ending of add() function
function disp(){
    document.write('This must be printed after addition');
}

// Calling add() function
add(5, 6, disp);

// Here are the two functions- add(a, b, callback) and disp(). Here add() is called with the disp() function
// i.e. passed in as the third arguement to the add function along with two numbers.
let x = () => {
    console.log('I am from the function x');
};
let y = (callback) => {
    console.log('I am from the function Y');
    callback();
};
y(x);

// ---- Basic e.g.
let add1 = (a1, b1) => {
    return a1+b1;
};
let multiply = (a1, b1) => {
    return a1*b1;
};
let calculate = (a1, b1, callback) => {
    return callback(a1, b1);
};
console.log(calculate(30, 40, add1));
console.log(calculate(30, 40, multiply));
console.log(calculate(30, 40, (a1, b1) => {
    return (a1-b1)
}));
let employees=[{name:"John",age:35,active:!0},
                {name:"Williams",age:45,active:!1},
                {name:"Lara",age:25,active:!0},
                {name:"Rajan",age:23,active:!1}];
let activeEmployess = employees.filter((employee) => {
    return employee.active;
});
console.log(activeEmployess);

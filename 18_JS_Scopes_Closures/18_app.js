// Scoping
// Block scoping
{
    var age=20;
}
// Block scoping
if(age <= 18){
    // some statements
}

var name = 'Prabhat';
function allotDepartment(){
    if(name === 'Prabhat'){
        var designation = 'Software engineer';
    }
}

console.log(name); // Prabhat
console.log(designation); // ReferenceError: designation is not defined
// Function  Scoping
let a = 10;
let outerFn = () =>{
    let b = 20;
    let innerFn = () =>{
        let c = 30;
        console.log(a); //10
        console.log(b); //20
        console.log(c); //30
    };
};

// 1. IIFE (Immediatiatly invoked function expression)
/* Syntax-
(function () {
    statements
})();  */

(function () {
    let aName = "Barry";
})();
// variable name is not accessible from the outside scope
//aName // throws "Uncought ReferenceError: aName is not defined"

/* 
Exception: ReferenceError: aName is not defined
@Scratchpad/1:5:1
*/
// Assignment the IIFE to a variable stores the function's result, not the function itself.
var result = (function () {
    let name = "Barry";
    return name;
})();
//Immediately creates the output:
console.log(result); //"Barry"
// More examples
let calculator = (() => {
    return {
        sum : function(a , b){
            return a+b;
        },
        sub : function(a , b){
            return a-b;
        },
        mul : function(a , b){
            return a*b;
        },
        div : function(a , b){
            return a/b;
        }
    };
})();
console.log(calculator.sum(10,20));

// Closures in javascript
// A clouse is an inner function that has access to the outer (enclosing) function's variable scope chain.
let a=10;
let outerFn1 = () => {
    let b = 20;
    let innerFn1 = () => {
        let c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    };
    return innerFn1;
};
let anotherFn1 = (callback) => {
    callback();
};
let fn = outerFn1();
anotherFn1(fn);
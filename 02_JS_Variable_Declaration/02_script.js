/* we can declare variable into 3 mathods 1. var 2. let 3. const */
let num1=10;
let name1='John';
let isEmployee=true;
let salary=50000;
let name2;  //Declaration
name='ravi';//Assigment
let name3='Smith'; //valid
let employeeName='Smith'; //valid
let $employee='Smith'; //valid
let employee_1='Smith'; //valid
//let 1_employee='simth'; //invalid
let num3=10;
let num4=20;
let sum=num3+num4;
console.log("the sum of num1, num2 is:"+sum);
console.log(`The sum of num1, num2 is: ${sum}`);
console.log(`The sum of ${num3}, ${num4} is : ${sum}`);
//find the biggest value between 2 numbers
let a=20;
let b=30;
if(a > b){
    console.log(`The big value is ${a}`);
}
else{
    console.log(`The big value is ${b}`);
}
//Find the biggest value among 3 numbers
let x=1000;
let y=2000;
let z=3000;
if(x>y && x>z){
    console.log(`The biggest value: ${x}`);
}
else if(y>z){
    console.log(`The biggest value is: ${y}`);
}
else{
    console.log(`The biggest value: ${z}`);
}
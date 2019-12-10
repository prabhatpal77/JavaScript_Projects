// Assignment operator =
let name='John';
console.log(`The name is : ${name}`);

// Arithmetic operators + - * /
let num1 =10;
let num2 =20;
console.log(`The sum is : ${num1+num2}`);
console.log(`The sub is : ${num1-num2}`);
console.log(`The mul is : ${num1*num2}`);
console.log(`The div is : ${num1/num2}`);

let someNumber = 121;
if(someNumber%2===0){
    console.log(`It is even number`);
}
else{
    console.log(`It is odd number`);
}
// Short hand math += , -= , *= , /=
let a=10;
let b=20;
let add=0;
add=add+(a+b); // 0+10+20 => 30
add+=(a+b); //30+10+20 => 60
console.log(add);

// Conditional operators < , > , <= , >= , !=
let age1=25;
if(age1<18){
    console.log('you are minor');
}else{
    console.log('you are major');
}

// Unary Operator ++ , -- (pre , post)
let x=10;
x=x+1; //11
x+=1; //12
x++; //13
++x; //14
console.log(x); //14

// Logical operators AND , OR
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}else{
    console.log('Wait until parents agreed');
}

// String Concatenation Operator
let name1='John';
let age2=40;
console.log('Hello '+ name1 + "Age: " + age2);

// Ternary operator (? :)
// Syntax-- 1 (condition) ? trueSection : falseSection
let age3=25;
let message = ' ';
(age3 < 18)? message = 'You are minor' : message = 'You are Major';
console.log(message);

// Typeof operator
let abc=10 //number
abc='Test'; //String
abc=true; //boolean
console.log(`Value : ${abc} Type : ${typeof abc}`);

// == operator
let a2 = 10;
let b2 = '10';
if(a2==b2){
    console.log('Both are equal');
}else{
    console.log('Both are NOT Equal');
}

// === operator
let a1 = 10;
let b1 = '10';
if(a1 == b1){
    console.log('Both are equal');
}else{
    console.log("Both are not equal");
}
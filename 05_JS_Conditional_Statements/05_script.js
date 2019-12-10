// If Else condition Example
let isJSEasy = true;
if(isJSEasy){
    console.log('JavaScript is easy');
}
let age = 28;
let gotJob = false;
if(age <= 30 && gotJob){
    console.log('Enjoy the bachelor life');
}
else if(age >= 30 && gotJob){
    console.log('get marry first');
}
else if(age >= 30 && !gotJob){
    console.log('Search for job as well as partner');
}else{
    console.log('Please join a course in Ameerpet');
}

// For loop Example to display from 1 - 10 values
let output = ' ';
for(let i=0; i<=10; i++){
    if(i <= 9){
        output += `${i} , `;
    }else{
        output += `${i} `;
    }
}
console.log(output);
//print the value from 20-0 diff 2
output=' ';
for(let i=20; i>=0; i -= 20){
    if(i > 0){
        output += `${i} , `;
    }else{
        output += `${i} `;
    }
}
console.log(output);
// print 10 starts
let numberOfStars = 9;
output= ' ';
for(let i=1; i<= numberOfStars; i++){
    for(let j=1; j<= i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);
//print the numbers
let theNumber = 9;
output = ' ';
for(let i=1; i<= theNumber; i++){
    for(let j=1; j<=i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// While loop Example to display from 1 - 10 values
output = ' ';
let i=0;
while(i<=10){
    if(i <= 9){
        output += `${i} - `;
    }else{
        output += `${i} `;
    }
    i++;
}
console.log(output);
// Print 20 - 0
output = ' ';
i=20;
while(i >= 0){
    if(i > 0){
        output += `${i} - `;
    }else{
        output += `${i} `;
    }
    i -= 2;
}
console.log(output);
// Print Stars
numberOfStars = 9;
output = ' ';
i = 1;
while(i <= numberOfStars){
    let j = 1;
    while(j <= i){
        output += '*';
        j++;
    }
    i++;
    output += '\n';
}
console.log(output);
//print numnbers
theNumber = 9;
output = ' ';
i = 1;
while(i <= theNumber){
    let j = 1;
    while(j <= i){
        output += i;
        j++;
    }
    i++;
    output += '\n';
}
console.log(output);

// Do while loop Example to display from 1 - 10 values
output = ' ';
i = 0; //initialization
do{
    //logic
    if(i <= 9){
        output += `${i} * `;
    }else{
        output += `${i} `;
    }
    i++; //increament
}
while(i <= 10); //condition
console.log(output);
// Print 20 - 0
output = ' ';
i = 20;
do{
    if(i > 0){
        output += `${i} * `;
    }else{
        output += `${i} `;
    }
    i -= 2;
}
while(i >= 0);
console.log(output);
// Print Stars
numberOfStars2 = 9;
output = ' ';
i = 1;
do{
    let j = 1;
    do{
        output += '*';
        j++;
    }
    while(j <= i);
    i++;
    output += '\n';
}
while(i<=numberOfStars2);
console.log(output);
//print numbers
theNumber2 = 9;
output = ' ';
i = 1;
do{
    let j=1;
    do{
        output += i;
        j++;
    }
    while(j <= i);
    i++;
    output += '\n';
}
while(i <= theNumber2);
console.log(output);

// Switch Statement Example
let day=new Date().getDay();
let fullDay = ' ';
switch(day){
    case 0:
        fullDay = 'SUNDAY';
        break;
    case 1:
        fullDay = 'MONDAY';
        break;
    case 2:
        fullDay = 'TUSEDAY';
        break;
    case 3:
        fullDay = 'WEDNESDAY';
        break;
    case 4:
        fullDay = 'THUSDAY';
        break;
    case 5:
        fullDay = 'FRIDAY';
        break;
    case 6:
        fullDay = 'SATURDAY';
        break;
    default:
        fullDay = ' ';
        break;
}
console.log(`Today is : ${fullDay}`);

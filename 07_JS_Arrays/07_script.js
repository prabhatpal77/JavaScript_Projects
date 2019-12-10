// creation of arrays
let array=[10, 20, 30, 40];

// Accessing an array and its properties
console.log(array);
console.log(`prop : ${array[0]}`); //10


// Access not existed property from an array
console.log(`prop : ${array[100]}`); // undefined

// adding properties to an array
array[5]=60;
console.log(array);

// Accessing length of an Array
console.log(`Length : ${array.length}`);

// reverse the array using reverse()
let array1=[10, 20, 30, 40, 50];
console.log(array1);
array1.reverse();
console.log(array1);

// Remove the first value of the array: shift()
let array2 = [10, 20, 30, 40, 50];
console.log(array2);
array2.shift();
console.log(array2);

// Add value to front of the array:unshift()
let array3 = [10, 20, 30, 40, 50];
console.log(array3);
array3.unshift(60);
console.log(array3)

// Remove the last value of the array: pop()
let array4 = [10, 20, 30, 40, 50];
console.log(array4);
array4.pop();
console.log(array4);

// Add value the end of the array: push()
let array5 = [10, 20, 30, 40, 50];
console.log(array5);
array5.push(60);
console.log(array5);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
// 1: splice(index)
let array6 = [10, 20, 30, 40, 50];
console.log(array6);
array6.splice(2);
console.log(array6);
// 2: splice(index, noOf Elements)
let array7 = [10, 20, 30, 40, 50];
console.log(array7);
array7.splice(1, 2);
console.log(array7);
// 3: splice(index, 1, replaceElement)
let array8 = [10, 20, 30, 40, 50];
console.log(array8);
array8.splice(2, 1, 'test');
console.log(array8);

// Create a copy of an array. Typically assigned to a new variable:slice();
let array9 = ['html', 'css', 'javascript'];
let array10 = array9.slice();
array9.splice(2);
console.log(array10);

// indexOf()
let array11 = ['html', 'css', 'javascript'];
console.log(`value : ${array11[0]}`); //html
console.log(`Index : ${array11.indexOf('bootstrap')}`); // 0

// join() , split()
let array12 = ['html', 'css', 'javascript'];
console.log(array12);
let theStr = array12.join(' - ');
console.log(theStr);

// for-loop
let technologies = ['html', 'css', 'js', 'bs'];
let output = ' ';
for(let i=0; i<technologies.length; i++){
    output += `${technologies[i].toUpperCase()} `;
}
console.log(output);

// for-in loop ES5
output = ' ';
for(let index in technologies){
    output += `${technologies[index].toUpperCase()} `;
}
console.log(output);

//for-of loop ES6
output = ' ';
for(let value of technologies){
    output += `${value.toUpperCase()}`;
}
console.log(output);

// forEach function
output = ' ';
technologies.forEach(function(element){
    output += `${element.toUpperCase()}`;
});
console.log(output);

// Arrow function ES6
output = ' ';
technologies.forEach(element => {
    output += `${element.toUpperCase()} `;
});
console.log(output);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

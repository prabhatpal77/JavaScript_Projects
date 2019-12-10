// Use spread operator to add an array elements in the middle of another array.
let array1 = [30, 40, 50];
let array2 = [10, 20,...array1, 60, 70];
let array3 = [...array2, 80, 90, 100];
console.log(array3);
 //Use spread operator to pass an array elements as parameters 
 //to a function
 let array = [45, 798465, 89, 8168, 16, 1891, 3, 8168, 1, 6816];
 let min = Math.min(...array);
 console.log(`min : ${min}`);

 //USe spread operator to create a copy of an array
 let arr1 =['html','css','js'];
 let arr2 = [...arr1]; // same as array.slice()
 console.log(arr2);

 //spread operator for objects
 let person1 = {
     address : {
         city : 'Hyderabad',
         state : 'TS',
         country : 'India'
     }
 };
 let person2 = {
     name : 'Ranjan',
     age : 25,
     course : 'Engineering',
     ...person1 // spread operator
 };
 console.log(person2);

 //Filter using spread operator 
 let technologies = ['html', 'css', 'js'];
 let abc = [...technologies.filter((e)=> e.length > 3)];
 console.log(abc);
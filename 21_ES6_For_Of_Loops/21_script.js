// We normally use the for loops to retrieve any array. We have to variations of for loops such as .
// For-in loop
// For-of loop
// for-in eg.-
let technologies = ['html','css','javascript','bootstrap'];
let output = ' ';
for(let index in technologies){
    console.log(index);  //0 1 2 3
    let value = technologies[index];
    console.log(value); // html css javascript bootstrap
}

// for-of eg.-
let names=['prabhat','ravi','prabhu','bania'];
for(let value of names){
    console.log(value); // prabhat ravi prabhu bania
}
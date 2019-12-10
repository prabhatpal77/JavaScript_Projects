// get all the html elements
let firstNumberElement = document.querySelector('#firstNumber');
let secondNumberElement = document.querySelector('#secondNumber');
let operatorButton = document.querySelector('#operator');
let equalsButton = document.querySelector('#equals-button');
let resultButton = document.querySelector('#result-button');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let divideButton = document.querySelector('#divide-button');
let multiplyButton = document.querySelector('#multiply-button');
let clearButton = document.querySelector('#clear-button');

// Minus button
minusButton.addEventListener('click', function(){
    operatorButton.textContent = minusButton.textContent;
});
// Plus button
plusButton.addEventListener('click', function(){
    operatorButton.textContent = plusButton.textContent;
});
// Divide button
divideButton.addEventListener('click', function(){
    operatorButton.textContent = divideButton.textContent;
});
// Multiplication button
multiplyButton.addEventListener('click', function(){
    operatorButton.textContent = multiplyButton.textContent;
});
// Equals button 
equalsButton.addEventListener('click', function(){
    let firstNumber = firstNumberElement.value;
    let secondNumber = secondNumberElement.value;
    let operator = operatorButton.textContent.trim();
    let result=0;
    if(firstNumber !== ' ' && secondNumber !== ' '){
        firstNumber = Number(firstNumber);
        secondNumber =  Number(secondNumber);
        switch(operator){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.textContent = result.toString();
    }
});

// clear button 
clearButton.addEventListener('click', function(){
    firstNumberElement.value = ' ';
    secondNumberElement.value = ' ';
    operatorButton.textContent = ' ';
    resultButton.textContent = 'RESULT';
});
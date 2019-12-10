// Form validation get the HTML elements
let userNameElement = document.querySelector('#username');
let emailElement = document.querySelector('#email');
let passwordElement = document.querySelector('#password');
let confirmPasswordElement = document.querySelector('#password_confirm');

// Get the error element
let userNameErrorElement = document.querySelector('#name_error');
let emailErrorElement = document.querySelector('#email_error');
let passwordErrorElement = document.querySelector('#password_error');
let message = ' ';

// Blur event for userName field
userNameElement.addEventListener('blur',function(){
    clearErrorMessage(userNameElement, userNameErrorElement);
});
emailElement.addEventListener('blur', function(){
    clearErrorMessage(emailElement, emailErrorElement);
});
passwordElement.addEventListener('blur',function(){
    clearErrorMessage(passwordElement, passwordErrorElement);
    clearErrorMessage(confirmPasswordElement, passwordErrorElement);
});
confirmPasswordElement.addEventListener('blur',function(){
    clearErrorMessage(passwordElement, passwordErrorElement);
    clearErrorMessage(confirmPasswordElement, passwordErrorElement);
});

// display error message
let displayErrorMessage = (inputElement, errorElement, message) => {
    inputElement.style.borderColor='red';
    inputElement.style.backgroundColor='lightsalom';
    inputElement.style.boxShadow = "0 0 10px red";
    errorElement.textContent = message;
    errorElement.style.boxShadow = "red";
};
 // Clear error message
 let clearErrorMessage = (inputElement, errorElement) => {
     inputElement.style.borderColor = 'gray';
     inputElement.style.backgroundColor = 'white';
     inputElement.style.boxShadow = "0 0 0 white";
     errorElement.textContent = ' ';
 };
// minutes = Math.floor((timer/100)/60);
// seconds = Math.floor((timer/100) - (minutes * 60));
// Get html elements
let clapSound = document.querySelector("#clap-sound");
let congratsSound = document.querySelector('#congrats-sound');
let originalTextElement = document.querySelector('#original-text');
let textAreaElement = document.querySelector('#text-area');
let textAreaBorder = document.querySelector('#text-area');
let minutesElement = document.querySelector('#minutes');
let secondsElement = document.querySelector('#seconds');
let resetButton = document.querySelector('#reset');
let congratsElement = document.querySelector('.cong-section');
// Keyup event for textarea
textAreaElement.addEventListener('keyup', function(){
    let textEnteredLength = textAreaElement.value.length;
    let textEntered = textAreaElement.value;
    let originalText = originalTextElement.textContent;
    let partialText = originalText.substr(0, textEntered.length);

    callTimer(textEnteredLength);
    evaluateText(textEntered, originalText, partialText);
});

// Clear button logic
resetButton.addEventListener('click', function(){
    clearInterval(interval);
    resetAllVariables();
    applyColors('gray');
    textAreaElement.value = ' ';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    congratsElement.style.display = 'none';
    generateRandomText();
});

// Call the timer
let callTimer = (length) => {
    if(length === 1 && !timerRunning){
        // start timer
        interval = setInterval(startTimer, 10);
        timerRunning = true;
    }
};
// start timer
let startTimer = () => {
    timer++;
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    minutesElement.textContent = leadingZero(minutes);
    secondsElement.textContent = leadingZero(seconds);
};

// leading zero
let leadingZero = (time) => {
    if(time <= 9){
        return "0" + time;
    }
    else{
        return time;
    }
};
// apply colors
let applyColors = (color) => {
    textAreaBorder.style.borderColor = color;
    textAreaBorder.style.boxShadow = '0 0 15px ${color}' ;
};

// reset all the variables
let resetAllVariables = () => {
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    timerRunning = false;
};

// generate random text
let generateRandomText = () => {
    let randomNumber = Math.round(Math.random() * 10);
    let randomString = textArray[randomNumber];
    originalTextElement.textContent = randomString;
};
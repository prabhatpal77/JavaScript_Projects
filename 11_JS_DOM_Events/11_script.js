// Javascript DOM Events 
// Some DOM Events
// 1. Opening a browser is an event
// 2. Open address bar and event URL is an event
// 3. User clicks on a link is an event
// 4. Move a mouse cusor is an event
// 5. Click on a button is an event
// 6. Focus on an input field is an event
/*
MouseEvent      KeyboardEvent      FormElements        DocumentEvents
Click           Keypress           Submit              Load
Dbclick         Keydown            Change              Resize
Mouseenter      Keyup              Focus               Scroll
mouseleave                                             unload
*/
// JS DOM Event Handling
/* 1. Find a node to which we trigger an event
2. Find the event of the node
3. Write a script to trigger an event for that node
*/
function facebook(){
    document.getElementById('myImage').setAttribute('src','../img/image2.jpg');
}
function youtube(){
    document.getElementById('myImage').setAttribute('src','../img/image5.jpeg');
}
// JS DOM Event listeners
// htmlElement.addEventListener('event_name',event_handling_function);
var textArea=document.querySelector("#text-area");
textArea.addEventListener('keypress', start);
function start(){
    // statements of event handling
}

let firstH2Element = document.querySelector("#first-h2");
let displayWishMsg = (message, color) => {
    firstH2Element.textContent = message;
    firstH2Element.style.backgroundColor = color;
    firstH2Element.style.textAlign="center";
    firstH2Element.style.padding="10px";
    firstH2Element.style.boxShadow="0 0 15px black";
}
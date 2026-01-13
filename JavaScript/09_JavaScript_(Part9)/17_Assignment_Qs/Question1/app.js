/*
Qs. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me";
*/

// create input tag
let inp = document.createElement('input')
inp.placeholder = "enter your name";
document.querySelector('body').append(inp);

// create button tag
let btn = document.createElement('button');
btn.innerText = "Click me"
document.querySelector('body').append(btn)


